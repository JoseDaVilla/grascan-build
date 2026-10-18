 # Grascan Build — sitio web

Sitio corporativo de **Grascan Build** (construcción privada), construido con **Astro 7 + Tailwind CSS 4**: HTML estático, ~5 KB de JS propio y animaciones con CSS/SVG.

- **Logo**: vectorizado a partir del original (sin fondo) en `src/lib/logo.ts`; componente `src/components/Logo.astro` con variantes `full`, `horizontal` y `mark`, y animación de construcción (las torres crecen y el wordmark se revela). Se usa en la intro, header, footer, favicon e imagen OG.
- **Paleta** (agencia, oct. 2026): navys `#062348` `#092957` `#092F5E` `#0C315F`, blanco `#FFFFFF`, gris `#777E89` y azul claro `#BDDBFF`. El logo mantiene sus colores originales (tokens `logo-*`).
- **Contenido y estructura**: según el documento del cliente *Website GRASCAN BUILD* (copia en `client-assets/`, no versionada). Textos de Home/About/Services en `src/data/services.ts`; Markets, Why Grascan Build, Health & Safety y Careers en `src/data/sections.ts`. Pendiente del cliente: email, teléfono y dirección ("waiting for info"), proyectos (la página existe vacía, como pide el documento) y textos legales.
- **Tipografía**: **Manrope** (variable, self-hosted en `src/assets/fonts/`): ExtraBold 800 para H1, Bold 700 para H2 (`font-editorial`, mayúsculas), SemiBold 600 para subtítulos (`font-semiwide`), Medium 500 para botones y Regular 400 para el texto; etiquetas espaciadas con `eyebrow`.
- **Fotos**: las enviadas por el cliente, optimizadas en `src/assets/photos/` (nombres descriptivos), catálogo en `src/data/photos.ts` (slides del hero, mercados, servicios, Why Grascan Build). Los originales quedan en `client-assets/`.
- **Menú**: árbol completo en `menu` (`src/site.config.ts`): submenús por hover en escritorio y menú hamburguesa con desplegables en móvil.

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321/grascan-build/
npm run build     # genera /dist (estático)
npm run preview   # sirve /dist
```

La **intro** sale en cada carga de la home, sólo con el logo a color. Hay tres variantes por URL: `/?intro1` (plano: guías, contorno y torres planta por planta), `/?intro2` (logo 3D que se puede girar) `/?intro3` (partículas que forman el logo y golpe), `/?intro4` (partículas, golpe y el logo se vuelve 3D) y `/?intro5` (por defecto: la intro original aterriza en el navbar; hero de fotos). Se salta con clic o tecla; no sale con reduced motion.

Variante de prueba con **fondo azul claro** (#BDDBFF) en todo el sitio: abrir `/?steel-blue` (se mantiene al navegar en esa pestaña); `/?steel-blue=off` vuelve al diseño normal.

Prueba de **texto justificado**: `/?text=justify` (se mantiene al navegar en esa pestaña); `/?text=off` vuelve al texto alineado a la izquierda.

## Páginas

| Ruta | Contenido |
| --- | --- |
| `/` | Home: Hero, Building on Experience (Our Foundation, A new chapter), What We Build, What We Do (Our Capabilities), Where We Build, Featured Projects, Safety & Quality, News & Insights, Contact / Offices |
| `/services` | General Contracting, Construction Management, Design-Build, Alternative Project Delivery (Progressive Design-Build, Integrated Project Delivery, Custom Alternative Approaches), Pre-Construction Planning |
| `/markets` | Intro, Institutional, Commercial, Industrial, Multi-Unit Residential, Transit, Our Approach, Building with purpose |
| `/why-grascan-build` | A Better Approach to Building, Integrated Building & Civil, Client Focused, Lean & Hands On, Trade & Subcontractor Network, Our Competitive Advantage, Our Commitment |
| `/health-safety` | Safety Is Fundamental, Our Approach to Safety (COR / ISO 45001, Safety & Emergency Preparedness, Employee Safety Portal, Subcontractor Safety, Construction Site Safety, Environmental & Hazard Management, Policies & Resources), A Commitment Shared by Everyone |
| `/projects` y `/projects/[slug]` | Listado (estado "coming soon" mientras `src/content/projects` no tenga `.md`) y ficha de proyecto |
| `/about` | About Grascan Build, Our Approach (+ Our Commitment), Our People, News & Insights |
| `/careers` | Building Careers (Why Build Your Career With Us, Who We Look For), Career Opportunities (vacantes en `openings` de `src/pages/careers.astro`) |
| `/news` y `/news/[slug]` | News & Insights |
| `/contact` | Start a Project, General Inquiries, Offices, Building in Ontario + formulario (`?topic=project` preselecciona el tipo) |
| `/privacy`, `/terms`, `/thanks`, `404` | Legales (placeholder), confirmación, error |

## Dónde se cambia el contenido

| Qué | Archivo |
| --- | --- |
| Nombre, email, teléfono, redes, oficina, menú, mapa del sitio, sectores | `src/site.config.ts` |
| Textos de Home, About, Services, News, Contact | `src/data/services.ts` |
| Textos de Markets, Why Grascan Build, Health & Safety, Careers | `src/data/sections.ts` |
| Proyectos (un `.md` por proyecto) | `src/content/projects/` |
| Noticias (un `.md` por noticia) | `src/content/news/` |
| **Paleta de colores** | `src/styles/global.css` → bloque `@theme` (ver abajo) |
| Tipografías y tamaños | `src/styles/global.css` (mismo bloque `@theme`) |
| Logo | `src/components/Logo.astro` (favicon e imagen OG se generan solos: `src/pages/favicon.svg.ts`, `src/pages/og.png.ts`) |
| Dominio | `astro.config.mjs` (`site`) y `public/robots.txt` |

### Paleta de colores

Toda la paleta vive en **un solo sitio**: el bloque `@theme` al inicio de `src/styles/global.css`.
Cambiar un HEX ahí actualiza el sitio entero: utilidades Tailwind (`bg-ink`, `text-signal`, `border-bone/20`…),
ilustraciones SVG, escena del hero, intro, favicon, imagen Open Graph y `theme-color` del navegador.

| Token | Uso |
| --- | --- |
| `steel` / `signal` | Navy medio (#0C315F): botones, iconos, números, líneas y acentos sobre blanco |
| `sky` | Azul claro (#BDDBFF): franjas de color de la home (`on-steel`) y acento sobre oscuro |
| `gray` | Gris (#777E89): palabras destacadas en titulares (azul claro sobre oscuro) |
| `ink` / `ink-2` / `graphite` | Navys (#062348 / #092957 / #092F5E): texto principal, navegación y secciones oscuras |
| `bone` / `concrete` / `fog` / `mute` | Blanco, azul claro muy aclarado, líneas y gris de texto secundario (#777E89 oscurecido para AA) |
| `signal-soft` / `on-signal` | Acento sobre secciones oscuras y texto sobre botones |
| `logo-navy` / `logo-ink` / `logo-gray` / `logo-gray-2` | Colores originales del logo (no cambian con la paleta) |
| `danger` | Errores de formulario |

Las secciones oscuras llevan la clase `on-dark` y las franjas azul claro `on-steel`: ambas ajustan automáticamente acentos y textos dentro de ellas.

Reglas para mantenerlo así:
- No escribir colores HEX/RGB en componentes: usar las clases (`text-signal`, `fill-bone/40`, `stroke-ink`) o `var(--color-…)` en CSS.
- Para transparencias usar el modificador de Tailwind (`bg-ink/80`) o `color-mix(in oklab, var(--color-ink) 80%, transparent)`.
- Mantener los valores en formato HEX (el favicon y la imagen OG los leen en build).

### Añadir fotos a un proyecto

1. Copiar las imágenes en `src/assets/projects/<slug>/` (JPG/PNG grandes, Astro las optimiza a AVIF/WebP y genera `srcset`).
2. En el `.md` del proyecto:

```yaml
cover: ../../assets/projects/harbourline-tower/cover.jpg
gallery:
  - { src: ../../assets/projects/harbourline-tower/01.jpg, caption: "Site overview" }
video: https://www.youtube-nocookie.com/embed/VIDEO_ID
```

Si un campo de imagen se omite, se muestra el placeholder SVG.

### Vídeo de fondo en el hero

En `src/pages/index.astro` pasar `video` al componente:

```astro
<Hero video={{ src: '/video/hero.mp4', poster: '/video/hero.jpg' }} ... />
```

(Colocar el archivo en `public/video/`. Recomendado: MP4 H.264, 1920px, < 6 MB, sin audio.)

## Formularios

Por defecto usan **Netlify Forms** (`data-netlify="true"`, incluye subida de archivos y honeypot anti-spam).
Si se despliega en otro hosting, poner la URL de Formspree / Basin / API propia en `site.formEndpoint` (`src/site.config.ts`).

## Rendimiento y técnica

- **Responsive verificado** de 320 px a 2560 px (sin scroll horizontal ni titulares cortados). Los titulares se ajustan solos para que la palabra más larga siempre quepa.
- **Mobile first**: estilos base pensados para móvil y ampliados con `sm/md/lg/xl`; el contenido que en escritorio aparece al pasar el cursor está siempre visible en táctil; titulares con menor anchura tipográfica en móvil; licitaciones en tarjetas en móvil y tabla en escritorio; objetivos táctiles ≥ 44 px.

- Lighthouse (móvil, home): **Performance 99 · Best Practices 100 · SEO 100 · Accesibilidad 96**, CLS 0.
- Fuente self-hosted (Manrope variable), precargada.
- CSS inlined por página, un único bundle JS (`src/scripts/main.ts`), prefetch de enlaces al pasar el cursor.
- Transiciones entre páginas con View Transitions nativas (sin JS).
- Animaciones: intro 100 % CSS, trazado de SVG con `pathLength`, reveals con IntersectionObserver, scroll-driven animations (con fallback). Todo respeta `prefers-reduced-motion`.
- Mapas y vídeos de YouTube sólo se cargan al hacer clic (no penalizan la carga).
- Sitemap, Open Graph, JSON-LD (`GeneralContractor`), canonical.

## Despliegue

### GitHub Pages (actual)

URL: **https://josedavilla.github.io/grascan-build/**

- El workflow `.github/workflows/deploy.yml` compila y publica en cada push a `main` o `ccr-235f9ecb-ks3q6e` (también se puede lanzar a mano desde *Actions → Deploy to GitHub Pages → Run workflow*).
- Requisito único: en *Settings → Pages → Build and deployment → Source* elegir **GitHub Actions**.
- Como el sitio vive en un subdirectorio, todos los enlaces internos pasan por el helper `u()` de `src/lib/url.ts`, que añade el `base`. **Al crear enlaces nuevos usar siempre `href={u('/ruta')}`**.
- Los formularios no funcionan en GitHub Pages (es hosting estático sin backend): configurar `site.formEndpoint` con Formspree/Basin para recibir envíos.

### Dominio propio u otro hosting

Compilar con `SITE_URL=https://www.cliente.com BASE_PATH=/ npm run build`. `netlify.toml` incluido (build + cabeceras de caché + Netlify Forms). También funciona en Vercel, Cloudflare Pages o cualquier hosting estático sirviendo `dist/`.
