// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages: https://josedavilla.github.io/grascan-build/
  // Vercel (VERCEL=1): se sirve en la raíz de grascan-build.vercel.app
  // Con dominio propio: SITE_URL=https://www.cliente.com BASE_PATH=/
  site: process.env.SITE_URL ?? (process.env.VERCEL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL ?? 'grascan-build.vercel.app'}` : 'https://josedavilla.github.io'),
  base: process.env.BASE_PATH ?? (process.env.VERCEL ? '/' : '/grascan-build'),
  integrations: [sitemap({ filter: (page) => !/\/(thanks|privacy|terms)\/$/.test(page) })],
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  build: { inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
});
