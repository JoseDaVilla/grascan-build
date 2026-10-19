/**
 * Efectos de scroll (se carga al final de main.ts; si falla, el sitio sigue igual):
 * - Scroll suave con Lenis (sólo puntero fino: en táctil queda el scroll nativo)
 * - Barra de progreso de lectura (.scroll-progress, en Base.astro)
 * - [data-scrub]: el texto se "enciende" palabra por palabra al pasar por la pantalla
 * - [data-drift="left|right"]: el bloque se desliza hasta su sitio al entrar en pantalla
 * Todo se desactiva con prefers-reduced-motion.
 */
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

if (!reduce) {
  /* ---------- Scroll suave ---------- */
  if (matchMedia('(pointer: fine)').matches) {
    const headerH = () => parseFloat(getComputedStyle(root).getPropertyValue('--header-h')) * 16 || 72;
    const lenis = new Lenis({ lerp: 0.1, anchors: { offset: -(headerH() + 16) } });
    const raf = (t: number) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    // quieto durante la intro y con el menú abierto
    const header = document.getElementById('site-header');
    const sync = () => {
      const locked = (root.classList.contains('has-intro') && !root.classList.contains('intro-done')) || header?.classList.contains('menu-open');
      locked ? lenis.stop() : lenis.start();
    };
    sync();
    new MutationObserver(sync).observe(root, { attributes: true, attributeFilter: ['class'] });
    if (header) new MutationObserver(sync).observe(header, { attributes: true, attributeFilter: ['class'] });
  }

  /* ---------- Palabras que se encienden ---------- */
  const scrubs = [...document.querySelectorAll<HTMLElement>('[data-scrub]')].map((el) => {
    const words = el.textContent!.trim().split(/\s+/);
    el.setAttribute('aria-label', el.textContent!.trim());
    el.innerHTML = words.map((w) => `<span class="scrub-w" aria-hidden="true">${w}</span>`).join(' ');
    return { el, spans: [...el.querySelectorAll<HTMLElement>('.scrub-w')] };
  });

  const drifts = [...document.querySelectorAll<HTMLElement>('[data-drift]')];
  const bar = document.querySelector<HTMLElement>('.scroll-progress');

  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = innerHeight;
    // progreso de lectura
    if (bar) {
      const max = document.documentElement.scrollHeight - vh;
      bar.style.transform = `scaleX(${max > 0 ? clamp(scrollY / max) : 0})`;
    }
    // palabras: se encienden entre el 85 % y el 40 % de la pantalla
    for (const { el, spans } of scrubs) {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) continue;
      const p = clamp((vh * 0.85 - r.top) / (vh * 0.45 + r.height * 0.6));
      const lit = p * spans.length;
      spans.forEach((s, i) => (s.style.opacity = String(0.18 + 0.82 * clamp(lit - i))));
    }
    // deslizamiento: de ±8 % a su sitio mientras entra hasta el 60 % de la pantalla
    for (const el of drifts) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) continue;
      const p = clamp((vh - r.top) / (vh * 0.6));
      const dir = el.dataset.drift === 'right' ? 1 : -1;
      el.style.transform = `translate3d(${dir * 8 * (1 - p)}%,0,0)`;
    }
  };
  const request = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  addEventListener('scroll', request, { passive: true });
  addEventListener('resize', request);
  update();
}
