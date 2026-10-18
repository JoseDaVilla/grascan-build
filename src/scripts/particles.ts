/**
 * Intro de partículas del hero (?intro3), canvas 2D. Se carga bajo demanda (Hero.astro).
 * El logo (src/lib/logo.ts) se pinta en un canvas oculto con sus colores originales y se muestrea: cada
 * punto es una partícula que entra desde un borde de la pantalla y vuela a su sitio. Ya agrupadas, el
 * logo toma impulso, golpea (el logo SVG sólido aparece con un "slam", onda expansiva, temblor y polvo
 * que salta desde la base) y queda el hero normal.
 *
 * Línea de tiempo: 0–1.75 s llegan las partículas · 1.75–1.95 s impulso · 1.95 s golpe (clase
 * html.logo-hit) · 2.1–2.8 s polvo · luego el canvas se apaga.
 */
import { logo } from '@/lib/logo';

const W = 602; // lockup 602×591
const H = 591;
const GATHER = 1750;
const HIT = 1950;
const END = 2900;

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const easeOut = (t: number) => 1 - (1 - t) ** 3;

interface P {
  sx: number; sy: number; // inicio (borde)
  tx: number; ty: number; // destino en el logo
  delay: number; dur: number;
  curl: number; size: number; color: string;
}
interface Dust { x: number; y: number; vx: number; vy: number; size: number; color: string }

export function mountParticles() {
  const root = document.documentElement;
  const hero = document.querySelector<HTMLElement>('.hero');
  const stage = hero?.querySelector<HTMLElement>('.hero-stage');
  const anchor = hero?.querySelector<HTMLElement>('.hero-mark');
  const canvas = hero?.querySelector<HTMLCanvasElement>('.hero-fx');
  const ctx = canvas?.getContext('2d');
  if (!hero || !stage || !anchor || !canvas || !ctx) return;

  const c = stage.getBoundingClientRect();
  const a = anchor.getBoundingClientRect();
  const dpr = Math.min(devicePixelRatio, 2);
  canvas.width = Math.round(c.width * dpr);
  canvas.height = Math.round(c.height * dpr);
  const ox = a.left - c.left;
  const oy = a.top - c.top;
  const s = a.width / W;
  const lw = Math.ceil(a.width);
  const lh = Math.ceil(H * s);

  // ---------- Logo a color en un canvas oculto (mismos degradados que Logo.astro tone="original") ----------
  const css = getComputedStyle(root);
  const v = (name: string) => css.getPropertyValue(name).trim();
  const off = document.createElement('canvas');
  off.width = lw;
  off.height = lh;
  const o = off.getContext('2d', { willReadFrequently: true })!;
  o.scale(s, s);
  const lin = (x1: number, y1: number, x2: number, y2: number, stops: [number, string][]) => {
    const g = o.createLinearGradient(x1, y1, x2, y2);
    stops.forEach(([at, col]) => g.addColorStop(at, col));
    return g;
  };
  const parts: [string, CanvasFillRule, string | CanvasGradient][] = [
    [logo.gray, 'nonzero', lin(121, 0, 193, 0, [[0, v('--color-mute')], [1, v('--color-slate')]])],
    [logo.navy, 'nonzero', lin(0, 0, 0, 461, [[0, v('--color-ink')], [0.45, v('--color-signal')], [1, v('--color-signal')]])],
    [logo.g, 'evenodd', lin(338, 106, 479, 461, [[0, v('--color-signal')], [0.55, v('--color-signal')], [1, v('--color-ink')]])],
    [logo.word, 'evenodd', v('--color-signal')],
    [logo.build, 'evenodd', v('--color-slate')],
  ];
  parts.forEach(([d, rule, fill]) => {
    o.fillStyle = fill;
    o.fill(new Path2D(d), rule);
  });

  // ---------- Muestreo: una partícula cada `step` px ----------
  const data = o.getImageData(0, 0, lw, lh).data;
  const area = lw * lh * 0.3;
  const step = Math.max(2.5, Math.sqrt(area / (innerWidth < 768 ? 2600 : 5200)));
  const ps: P[] = [];
  const edge = () => {
    // punto aleatorio un poco fuera de los bordes de la pantalla
    const side = Math.floor(Math.random() * 4);
    const r = Math.random();
    const m = 40;
    if (side === 0) return [r * c.width, -m];
    if (side === 1) return [c.width + m, r * c.height];
    if (side === 2) return [r * c.width, c.height + m];
    return [-m, r * c.height];
  };
  for (let y = step / 2; y < lh; y += step) {
    for (let x = step / 2; x < lw; x += step) {
      const i = (Math.floor(y) * lw + Math.floor(x)) * 4;
      if (data[i + 3] < 140) continue;
      const [sx, sy] = edge();
      // las torres llegan primero (de abajo hacia arriba), el wordmark al final
      const order = y / lh;
      ps.push({
        sx,
        sy,
        tx: ox + x,
        ty: oy + y,
        delay: 80 + (1 - order) * 260 + order * 420 + Math.random() * 380,
        dur: 900 + Math.random() * 450,
        curl: (Math.random() - 0.5) * 260,
        size: Math.max(1.4, step * (0.85 + Math.random() * 0.25)),
        color: `rgb(${data[i]},${data[i + 1]},${data[i + 2]})`,
      });
    }
  }

  // Polvo del golpe: sale desde la base de las torres y desde el borde inferior del logo
  const cx = ox + a.width / 2;
  const baseY = oy + 461 * s;
  const dust: Dust[] = Array.from({ length: innerWidth < 768 ? 70 : 140 }, (_, i) => {
    const fromBase = i % 3 !== 0;
    const x = fromBase ? ox + (121 + Math.random() * 358) * s : ox + Math.random() * a.width;
    const y = fromBase ? baseY : oy + lh;
    const sp = 0.8 + Math.random() * 1.6;
    return {
      x,
      y,
      vx: ((x - cx) / (a.width / 2)) * sp * 2 + (Math.random() - 0.5) * 1.5, // se abre hacia los lados
      vy: -(1.5 + Math.random() * 4.5), // salta hacia arriba
      size: 1 + Math.random() * 2.2,
      color: i % 4 === 0 ? v('--color-slate') : v('--color-signal'),
    };
  });

  root.classList.add('particles-on');
  const t0 = performance.now() > 1200 ? performance.now() : 0;
  let hit = false;

  const draw = (now: number) => {
    const t = root.classList.contains('intro-skip') ? END : now - t0;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, c.width, c.height);

    if (t < HIT) {
      // impulso: justo antes del golpe el logo de partículas crece un poco
      const lift = 1 + 0.1 * easeOut(clamp((t - GATHER) / (HIT - GATHER)));
      for (const p of ps) {
        const k = clamp((t - p.delay) / p.dur);
        if (k <= 0) continue;
        const e = easeInOut(k);
        // trayectoria curva: desplazamiento perpendicular que se anula al llegar
        const dx = p.tx - p.sx;
        const dy = p.ty - p.sy;
        const len = Math.hypot(dx, dy) || 1;
        const bend = Math.sin(e * Math.PI) * p.curl;
        let x = p.sx + dx * e + (-dy / len) * bend;
        let y = p.sy + dy * e + (dx / len) * bend;
        x = cx + (x - cx) * lift;
        y = oy + lh / 2 + (y - oy - lh / 2) * lift;
        ctx.globalAlpha = 0.35 + 0.65 * e;
        ctx.fillStyle = p.color;
        const sz = p.size * (0.6 + 0.4 * e);
        ctx.fillRect(x - sz / 2, y - sz / 2, sz, sz);
      }
    } else {
      if (!hit) {
        hit = true;
        root.classList.add('logo-hit');
      }
      // polvo con gravedad
      const k = (t - HIT - 120) / 16.67;
      if (k > 0) {
        for (const d of dust) {
          const x = d.x + d.vx * k;
          const y = d.y + d.vy * k + 0.09 * k * k;
          ctx.globalAlpha = clamp(1 - k / 42) * 0.8;
          ctx.fillStyle = d.color;
          ctx.fillRect(x, y, d.size, d.size);
        }
      }
    }
    ctx.globalAlpha = 1;
    if (t < END) requestAnimationFrame(draw);
    else {
      ctx.clearRect(0, 0, c.width, c.height);
      canvas.remove();
    }
  };
  requestAnimationFrame(draw);
}
