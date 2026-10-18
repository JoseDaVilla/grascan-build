/**
 * Logo Grascan Build en 3D (three.js) para el hero de la home (?intro2). Se carga bajo demanda (Hero.astro).
 * Las piezas del logo (src/lib/logo.ts) se extruyen con bordes redondeados y se pintan con los colores y
 * degradados del logo original sobre un material satinado con luz de estudio (RoomEnvironment).
 * Cámara en perspectiva calibrada en píxeles CSS: en z = 0 el logo ocupa exactamente la caja del <h1>.
 *  - Entrada 'drop' (?intro2): las piezas caen con resorte y el logo gira hasta quedar de frente.
 *  - Entrada 'impact' (?intro4): espera al golpe de las partículas (html.logo-hit) y aparece de frente
 *    con el mismo "slam"; luego gira para mostrar su volumen.
 *  - Después: flota suave, se inclina con el puntero, se arrastra para girarlo (con inercia; un giro
 *    fuerte da vueltas completas y vuelve al frente) y se inclina hacia atrás al hacer scroll.
 */
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { logo } from '@/lib/logo';

const W = 602; // lockup 602×591
const H = 591;
const BASE = 461; // base de las torres
const FOV = 28;
const TAU = Math.PI * 2;
// La "G" como un solo contorno (en logo.ts su hueco toca el borde derecho y el bisel 3D se deforma)
const G_SOLID = 'M338 106 L479 225 L479 306 L373 226 L373 398 L429 423 L429 374 L405 361 L405 302 L479 342 L479 461 L338 461Z';

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const span = (t: number, from: number, to: number) => clamp((t - from) / (to - from));
const easeOut = (t: number) => 1 - (1 - t) ** 4;
// resorte amortiguado normalizado (0 → 1 con un rebote)
const spring = (t: number, k = 7, w = 9) => (t <= 0 ? 0 : 1 - Math.exp(-k * t) * Math.cos(w * t));

const shapesOf = (d: string, evenodd: boolean) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg"><path d="${d}" fill-rule="${evenodd ? 'evenodd' : 'nonzero'}"/></svg>`;
  return new SVGLoader().parse(svg).paths.flatMap((p) => SVGLoader.createShapes(p));
};

export function mountLogo3D(entry: 'drop' | 'impact' = 'drop') {
  const root = document.documentElement;
  const hero = document.querySelector<HTMLElement>('.hero');
  const stage = hero?.querySelector<HTMLElement>('.hero-stage');
  const anchor = hero?.querySelector<HTMLElement>('.hero-mark');
  const canvas = hero?.querySelector<HTMLCanvasElement>('.hero-3d');
  if (!hero || !stage || !anchor || !canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1;
  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  const key = new THREE.DirectionalLight(0xffffff, 1.1);
  key.position.set(-0.6, 1, 1.2);
  scene.add(key);
  const camera = new THREE.PerspectiveCamera(FOV, 1, 10, 10000);

  const css = getComputedStyle(root);
  const color = (v: string) => new THREE.Color(css.getPropertyValue(v).trim());
  const ink = color('--color-logo-ink');
  const signal = color('--color-logo-navy');
  const mute = color('--color-logo-gray');
  const slate = color('--color-logo-gray-2');
  const mix = (a: THREE.Color, b: THREE.Color, t: number) => a.clone().lerp(b, clamp(t));

  // Degradados del logo original (mismos que Logo.astro tone="original")
  const paints = {
    gray: (x: number) => mix(mute, slate, (x - 121) / 72),
    navy: (_: number, y: number) => mix(ink, signal, y / (BASE * 0.45)),
    g: (x: number, y: number) => mix(signal, ink, (((x - 338) / 141 + (y - 106) / 355) / 2 - 0.55) / 0.45),
    word: () => signal.clone(),
    sub: () => slate.clone(),
  };

  const build = (d: string, evenodd: boolean, depth: number, bevel: number, paint: (x: number, y: number) => THREE.Color) => {
    const geo = new THREE.ExtrudeGeometry(shapesOf(d, evenodd), {
      depth,
      curveSegments: 6,
      bevelEnabled: bevel > 0,
      bevelThickness: bevel,
      bevelSize: bevel,
      bevelOffset: -bevel, // el borde redondeado no engorda la silueta
      bevelSegments: 4,
    });
    const pos = geo.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) {
      const c = paint(pos.getX(i), pos.getY(i));
      colors.set([c.r, c.g, c.b], i * 3);
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.translate(0, 0, -(depth + bevel)); // el frente queda en z = 0
    return geo;
  };

  const material = () =>
    new THREE.MeshPhysicalMaterial({
      vertexColors: true,
      roughness: 0.42,
      metalness: 0.08,
      clearcoat: 0.35,
      clearcoatRoughness: 0.3,
      envMapIntensity: 0.38,
      transparent: true,
    });

  const pivot = new THREE.Group(); // posición, escala y giro
  const art = new THREE.Group(); // coordenadas SVG (y hacia abajo) centradas
  art.scale.y = -1;
  art.position.set(-W / 2, H / 2, 0);
  pivot.add(art);
  scene.add(pivot);

  const towers = [
    build(logo.gray, false, 56, 5, paints.gray),
    build(logo.navy, false, 56, 5, paints.navy),
    build(G_SOLID, false, 56, 5, paints.g),
  ].map((geo) => {
    geo.translate(0, -BASE, 0); // origen en la base
    const mesh = new THREE.Mesh(geo, material());
    mesh.position.y = BASE;
    art.add(mesh);
    return mesh;
  });
  const word = new THREE.Mesh(build(logo.word, true, 18, 1.6, paints.word), material());
  const sub = new THREE.Mesh(build(logo.build, true, 8, 0, paints.sub), material());
  art.add(word, sub);

  // Sombra de contacto suave bajo el logo
  const shadowTex = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const g = c.getContext('2d')!;
    const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    grd.addColorStop(0, 'rgba(5,29,58,0.32)');
    grd.addColorStop(1, 'rgba(5,29,58,0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(c);
  })();
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  scene.add(shadow);

  // ---------- Layout: z = 0 en píxeles CSS, el logo ocupa la caja del <h1> ----------
  let base = { x: 0, y: 0, s: 1 };
  const layout = () => {
    const c = stage.getBoundingClientRect();
    const a = anchor.getBoundingClientRect();
    renderer.setSize(c.width, c.height, false);
    camera.aspect = c.width / c.height;
    camera.position.set(0, 0, c.height / 2 / Math.tan(THREE.MathUtils.degToRad(FOV / 2)));
    camera.updateProjectionMatrix();
    base = {
      x: a.left - c.left + a.width / 2 - c.width / 2,
      y: c.height / 2 - (a.top - c.top + a.height / 2),
      s: a.width / W,
    };
    shadow.scale.set(W * base.s * 1.15, W * base.s * 0.32, 1);
    shadow.position.set(base.x, base.y - (H / 2) * base.s - 26 * base.s, 0);
  };

  // ---------- Interacción ----------
  const ENTRY = entry === 'drop' ? 2600 : 1500; // ms hasta el reposo
  // 'drop' arranca con la página (o al cargar, si llega tarde); 'impact' en el golpe de las partículas
  let t0: number | null = entry === 'drop' ? (performance.now() > 1500 ? performance.now() - 200 : 0) : null;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const spin = { a: 0, v: 0, dragging: false, lastX: 0, lastT: 0 }; // giro Y por arrastre (resorte con inercia)
  const tilt = { x: 0, y: 0, tx: 0, ty: 0 }; // inclinación hacia el puntero

  canvas.addEventListener('pointerdown', (e) => {
    spin.dragging = true;
    spin.lastX = e.clientX;
    spin.lastT = performance.now();
    spin.v = 0;
    canvas.setPointerCapture(e.pointerId);
    root.classList.add('logo-grabbing');
    request();
  });
  canvas.addEventListener('pointermove', (e) => {
    if (!spin.dragging) return;
    const now = performance.now();
    const dx = e.clientX - spin.lastX;
    spin.a += dx * 0.009;
    spin.v = ((dx * 0.009) / Math.max(1, now - spin.lastT)) * 16; // rad / frame
    spin.lastX = e.clientX;
    spin.lastT = now;
    request();
  });
  const release = () => {
    spin.dragging = false;
    root.classList.remove('logo-grabbing');
    request();
  };
  canvas.addEventListener('pointerup', release);
  canvas.addEventListener('pointercancel', release);
  if (matchMedia('(pointer: fine)').matches) {
    addEventListener('pointermove', (e) => {
      tilt.ty = (e.clientX / innerWidth - 0.5) * 0.42;
      tilt.tx = (e.clientY / innerHeight - 0.5) * 0.26;
      request();
    });
  }

  // ---------- Frame ----------
  const reveal = (m: THREE.Mesh, k: number) => {
    const e = easeOut(k);
    (m.material as THREE.MeshPhysicalMaterial).opacity = e;
    m.visible = e > 0.001;
    m.position.z = 120 * (1 - e);
  };

  let prev = performance.now();
  const apply = (now: number) => {
    if (t0 === null && (root.classList.contains('logo-hit') || root.classList.contains('intro-skip'))) t0 = now;
    if (t0 === null) return -1; // 'impact': todavía no hubo golpe
    const t = root.classList.contains('intro-skip') ? Math.max(ENTRY + 1, now - t0) : now - t0;
    const dt = Math.min(3, (now - prev) / 16.67); // en frames de 60 fps
    prev = now;

    let rx: number, ry: number, scale: number, shade: number;
    if (entry === 'drop') {
      // cada torre cae desde arriba con resorte; el wordmark llega desde el fondo
      towers.forEach((m, i) => {
        const k = spring((t - 250 - i * 140) / 1000, 6.5, 9);
        m.position.y = BASE - (1 - k) * 520;
        m.rotation.z = (1 - k) * (i - 1) * 0.35;
        (m.material as THREE.MeshPhysicalMaterial).opacity = easeOut(span(t, 250 + i * 140, 600 + i * 140));
      });
      reveal(word, span(t, 1150, 1850));
      reveal(sub, span(t, 1400, 2100));
      const turn = spring((t - 150) / 1000, 4.2, 5.5);
      rx = 0.5 * (1 - turn);
      ry = -1.1 * (1 - turn);
      scale = 0.86 + 0.14 * spring((t - 100) / 1000, 5, 6);
      shade = easeOut(span(t, 600, 1800));
    } else {
      // golpe: llega grande, se aplasta y rebota (como el slam CSS); luego gira y muestra el volumen
      scale = t < 130 ? 1.1 - 0.13 * (t / 130) ** 2 : 0.97 + 0.03 * spring((t - 130) / 1000, 6, 11);
      const s2 = Math.max(0, (t - 140) / 1000);
      ry = 0.8 * Math.exp(-2.3 * s2) * Math.sin(5 * s2);
      rx = -0.22 * Math.exp(-2.8 * s2) * Math.sin(6.5 * s2);
      shade = easeOut(span(t, 0, 500));
    }

    // Reposo: flota y se balancea suave
    const idle = reduce ? 0 : easeOut(span(t, ENTRY, ENTRY + 1500));
    const k = (now - t0 - ENTRY) / 1000;
    ry += idle * 0.16 * Math.sin(k * 0.8);
    rx += idle * 0.05 * Math.sin(k * 0.55);
    const float = idle * 7 * Math.sin(k * 1.1);

    // Arrastre: inercia y resorte hacia el frente más cercano (permite vueltas completas)
    if (!spin.dragging) {
      const rest = Math.round(spin.a / TAU) * TAU;
      spin.v += (rest - spin.a) * 0.018 * dt;
      spin.v *= 0.93 ** dt;
      spin.a += spin.v * dt;
    }
    tilt.x += (tilt.tx - tilt.x) * 0.07 * dt;
    tilt.y += (tilt.ty - tilt.y) * 0.07 * dt;

    // Scroll: al salir del hero se inclina hacia atrás y sube
    const sc = clamp(scrollY / innerHeight);
    rx += sc * 0.55;

    pivot.position.set(base.x, base.y + float + sc * 60, 0);
    pivot.scale.setScalar(base.s * scale);
    pivot.rotation.set(rx + tilt.x, ry + tilt.y + spin.a, 0);
    (shadow.material as THREE.MeshBasicMaterial).opacity = shade * (1 - float / 40) * (1 - sc);
    return t;
  };

  let raf = 0;
  const frame = (now: number) => {
    raf = 0;
    const t = apply(now);
    if (t >= 0) renderer.render(scene, camera);
    const settling = spin.dragging || Math.abs(spin.v) > 0.0003 || Math.abs(spin.a - Math.round(spin.a / TAU) * TAU) > 0.0005;
    const tilting = Math.abs(tilt.tx - tilt.x) + Math.abs(tilt.ty - tilt.y) > 0.0005;
    const visible = scrollY < innerHeight * 1.2 && !document.hidden;
    if ((t < 0 && !document.hidden) || (visible && (t < ENTRY + 1600 || !reduce || settling || tilting))) request();
  };
  function request() {
    if (!raf) raf = requestAnimationFrame(frame);
  }

  layout();
  if (apply(performance.now()) >= 0) renderer.render(scene, camera);
  root.classList.add('logo-3d');
  request();

  addEventListener('resize', () => {
    layout();
    request();
  });
  addEventListener('scroll', request, { passive: true });
  document.addEventListener('visibilitychange', request);
  document.fonts?.ready.then(() => {
    layout();
    request();
  });
}
