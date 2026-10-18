/**
 * Logo Grascan Build en 3D (three.js) para el hero de la home. Se carga bajo demanda (Hero.astro).
 * Las piezas del logo (src/lib/logo.ts) se extruyen y se pintan con los colores/degradados del logo
 * original (vertex colors, sin luces: vista de frente = logo plano idéntico). Cámara ortográfica en
 * píxeles CSS, así el logo 3D ocupa exactamente la caja del <h1> del hero.
 *  - 'load'  (?intro2): al cargar gira desde una vista en perspectiva y las torres se levantan; luego
 *    se inclina con el puntero y al hacer scroll.
 *  - 'scroll' (?intro3): hero fijo; el scroll construye las torres planta por planta sobre su
 *    esqueleto de líneas y el logo gira hasta quedar de frente.
 */
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { logo } from '@/lib/logo';

type Mode = 'load' | 'scroll';

const W = 602; // lockup 602×591
const H = 591;
const BASE = 461; // base de las torres
const FLOORS = 10;

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const span = (t: number, from: number, to: number) => clamp((t - from) / (to - from));
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const easeOut = (t: number) => 1 - (1 - t) ** 4;

const shapesOf = (d: string, evenodd: boolean) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg"><path d="${d}" fill-rule="${evenodd ? 'evenodd' : 'nonzero'}"/></svg>`;
  return new SVGLoader().parse(svg).paths.flatMap((p) => SVGLoader.createShapes(p));
};

export function mountLogo3D(mode: Mode) {
  const root = document.documentElement;
  const hero = document.querySelector<HTMLElement>('.hero');
  const stage = hero?.querySelector<HTMLElement>('.hero-stage');
  const anchor = hero?.querySelector<HTMLElement>('.hero-mark');
  const canvas = hero?.querySelector<HTMLCanvasElement>('.hero-3d');
  if (!hero || !stage || !anchor || !canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 6000);
  camera.position.z = 3000;

  const css = getComputedStyle(root);
  const color = (v: string) => new THREE.Color(css.getPropertyValue(v).trim());
  const ink = color('--color-ink');
  const signal = color('--color-signal');
  const mute = color('--color-mute');
  const slate = color('--color-slate');
  const mix = (a: THREE.Color, b: THREE.Color, t: number) => a.clone().lerp(b, clamp(t));

  // Degradados del logo original (mismos que Logo.astro tone="original")
  const paints: Record<string, (x: number, y: number) => THREE.Color> = {
    gray: (x) => mix(mute, slate, (x - 121) / 72),
    navy: (_, y) => mix(ink, signal, y / (BASE * 0.45)),
    g: (x, y) => mix(signal, ink, (((x - 338) / 141 + (y - 106) / 355) / 2 - 0.55) / 0.45),
    word: () => signal.clone(),
    sub: () => slate.clone(),
  };

  const build = (d: string, evenodd: boolean, depth: number, paint: (x: number, y: number) => THREE.Color) => {
    const geo = new THREE.ExtrudeGeometry(shapesOf(d, evenodd), { depth, bevelEnabled: false, curveSegments: 4 });
    const pos = geo.attributes.position;
    const nor = geo.attributes.normal;
    const colors = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) {
      const nz = nor.getZ(i);
      // frente = color del logo; laterales más oscuros (y algo más claros arriba); dorso oscuro
      const f = nz > 0.5 ? 1 : nz < -0.5 ? 0.35 : 0.5 + 0.28 * Math.max(0, -nor.getY(i)) + 0.12 * Math.max(0, nor.getX(i));
      const c = paint(pos.getX(i), pos.getY(i)).multiplyScalar(f);
      colors.set([c.r, c.g, c.b], i * 3);
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.translate(0, 0, -depth); // el frente queda en z = 0
    return geo;
  };

  const material = () => new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide, transparent: true });
  const lineMat = new THREE.LineBasicMaterial({ color: signal, transparent: true, opacity: 0 });

  const pivot = new THREE.Group(); // escala, posición y giro
  const art = new THREE.Group(); // coordenadas SVG centradas
  art.position.set(-W / 2, -H / 2, 0);
  pivot.add(art);
  scene.add(pivot);

  const towers = [
    { d: logo.gray, odd: false, paint: paints.gray },
    { d: logo.navy, odd: false, paint: paints.navy },
    { d: logo.g, odd: true, paint: paints.g },
  ].map(({ d, odd, paint }) => {
    const geo = build(d, odd, 64, paint);
    geo.translate(0, -BASE, 0); // origen en la base: scale.y levanta la torre desde el suelo
    const mesh = new THREE.Mesh(geo, material());
    mesh.position.y = BASE;
    const ghost = new THREE.LineSegments(new THREE.EdgesGeometry(geo), lineMat);
    ghost.position.y = BASE;
    art.add(mesh, ghost);
    return mesh;
  });
  const word = new THREE.Mesh(build(logo.word, true, 20, paints.word), material());
  const sub = new THREE.Mesh(build(logo.build, true, 10, paints.sub), material());
  art.add(word, sub);

  // ---------- Layout: el logo 3D ocupa la caja del <h1> ----------
  let vw = 0;
  let vh = 0;
  const layout = () => {
    const c = stage.getBoundingClientRect();
    const a = anchor.getBoundingClientRect();
    vw = c.width;
    vh = c.height;
    renderer.setSize(vw, vh, false);
    Object.assign(camera, { left: -vw / 2, right: vw / 2, top: vh / 2, bottom: -vh / 2 });
    camera.updateProjectionMatrix();
    const s = a.width / W;
    pivot.userData.s = s;
    pivot.position.set(a.left - c.left + a.width / 2 - vw / 2, vh / 2 - (a.top - c.top + a.height / 2), 0);
  };

  // ---------- Estado por frame ----------
  const LOAD_END = 2800;
  const t0 = performance.now() > 1500 ? performance.now() - 300 : 0; // si llega tarde, arranca igual desde el principio
  const tilt = { x: 0, y: 0, tx: 0, ty: 0 };

  const progress = () => {
    if (mode === 'load') return root.classList.contains('intro-skip') ? 1 : clamp((performance.now() - t0) / LOAD_END);
    const r = hero.getBoundingClientRect();
    return clamp(-r.top / Math.max(1, r.height - innerHeight));
  };

  const apply = (p: number) => {
    const s = pivot.userData.s as number;
    let rx: number, ry: number, scale: number, ghost: number;
    if (mode === 'load') {
      const t = p * LOAD_END;
      const turn = easeInOut(span(t, 200, 2600));
      rx = 0.55 * (1 - turn);
      ry = -0.8 * (1 - turn);
      scale = 0.82 + 0.18 * easeOut(span(t, 0, 2400));
      ghost = 0.4 * span(t, 0, 500) * (1 - span(t, 2100, 2700));
      towers.forEach((m, i) => (m.scale.y = Math.max(0.001, easeOut(span(t, 500 + i * 180, 1400 + i * 180)))));
      reveal(word, span(t, 1450, 2150));
      reveal(sub, span(t, 1750, 2450));
      // al salir del hero, el logo se inclina hacia atrás
      rx += clamp(scrollY / innerHeight) * 0.5;
    } else {
      const turn = easeInOut(span(p, 0, 0.78));
      rx = 0.6 * (1 - turn);
      ry = -0.85 * (1 - turn);
      scale = 0.78 + 0.22 * turn;
      ghost = 0.45 * (1 - span(p, 0.8, 0.95));
      towers.forEach((m, i) => {
        const k = span(p, 0.04 + i * 0.09, 0.56 + i * 0.09) * (FLOORS - 1);
        const frac = k % 1;
        m.scale.y = (1 + Math.floor(k) + (frac > 0.55 ? easeOut((frac - 0.55) / 0.45) : 0)) / FLOORS;
      });
      reveal(word, span(p, 0.72, 0.88));
      reveal(sub, span(p, 0.8, 0.95));
      root.classList.toggle('hero-pinned', p < 0.98);
    }
    lineMat.opacity = ghost;
    pivot.scale.set(s * scale, -s * scale, s * scale);
    pivot.rotation.set(rx + tilt.x, ry + tilt.y, 0);
  };
  const reveal = (m: THREE.Mesh, k: number) => {
    const e = easeOut(k);
    (m.material as THREE.MeshBasicMaterial).opacity = e;
    m.visible = e > 0.001;
    m.position.z = 160 * (1 - e);
  };

  // ---------- Bucle (sólo mientras algo cambia) ----------
  let raf = 0;
  let last = -1;
  const frame = () => {
    raf = 0;
    tilt.x += (tilt.tx - tilt.x) * 0.08;
    tilt.y += (tilt.ty - tilt.y) * 0.08;
    const p = progress();
    apply(p);
    renderer.render(scene, camera);
    const moving = Math.abs(tilt.tx - tilt.x) + Math.abs(tilt.ty - tilt.y) > 0.0005;
    if ((mode === 'load' && p < 1) || moving || p !== last) request();
    last = p;
  };
  const request = () => {
    if (!raf) raf = requestAnimationFrame(frame);
  };

  layout();
  apply(progress());
  renderer.render(scene, camera);
  root.classList.add('logo-3d');
  request();

  addEventListener('resize', () => {
    layout();
    request();
  });
  addEventListener('scroll', request, { passive: true });
  if (matchMedia('(pointer: fine)').matches) {
    addEventListener('pointermove', (e) => {
      if (scrollY > innerHeight * (mode === 'scroll' ? 3 : 1)) return;
      tilt.ty = (e.clientX / innerWidth - 0.5) * 0.5;
      tilt.tx = (e.clientY / innerHeight - 0.5) * 0.3;
      request();
    });
  }
  // fuentes / header pueden mover el <h1> tras el primer layout
  document.fonts?.ready.then(() => {
    layout();
    request();
  });
}
