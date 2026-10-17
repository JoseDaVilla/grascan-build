/**
 * Configuración central del sitio Grascan Build.
 * Estructura y textos según el documento "Website GRASCAN BUILD".
 * Los datos de contacto (email, teléfono, dirección) siguen PENDIENTES de que el cliente los envíe
 * ("waiting for info" en el documento). Cuando lleguen, rellenar `email` / `phone` / `office`.
 */

export const site = {
  name: 'Grascan Build',
  legalName: 'Grascan Build',
  tagline: 'Building on experience.',
  description:
    'Backed by the experience of Grascan Construction, Grascan Build delivers commercial, industrial and institutional buildings with the same commitment to safety, quality and performance that has defined Grascan since 1987.',
  founded: 1987,
  /** TODO: pendiente del cliente ("waiting for info"). Vacío = no se muestra. */
  email: '',
  /** TODO: pendiente del cliente ("waiting for info"). Vacío = no se muestra. */
  phone: '',
  social: [] as { label: string; href: string }[],
  /**
   * Endpoint de formularios. GitHub Pages no procesa formularios: poner aquí la URL
   * de Formspree / Basin / API propia. Vacío = Netlify Forms (si se aloja en Netlify).
   */
  formEndpoint: '',
};

import { services, markets } from './data/services';
import { whyItems, healthSafety } from './data/sections';

export interface MenuChild { label: string; href: string; /** Sub-apartado (se muestra sangrado bajo el anterior). */ sub?: boolean }
export interface MenuItem { label: string; href: string; children?: MenuChild[] }

/**
 * Menú principal (navbar con submenús y menú hamburguesa), según "STRUCTURE WEBSITE: GRASCAN BUILD".
 */
export const menu: MenuItem[] = [
  {
    label: 'Home',
    href: '/',
    children: [
      { label: 'Building on Experience', href: '/#experience' },
      { label: 'What We Build', href: '/#what-we-build' },
      { label: 'What We Do', href: '/#what-we-do' },
      { label: 'Featured Projects', href: '/#projects' },
      { label: 'Safety & Quality', href: '/#safety' },
      { label: 'News & Insights', href: '/#news' },
      { label: 'Contact / Offices', href: '/#contact' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About Grascan Build', href: '/about#about' },
      { label: 'Our Approach', href: '/about#approach' },
      { label: 'Our People', href: '/about#people' },
      { label: 'News & Insights', href: '/about#news' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: services.flatMap((s) => [
      { label: s.title, href: `/services#${s.slug}` },
      ...(s.approaches ?? []).map((a) => ({ label: a.title, href: `/services#${a.slug}`, sub: true })),
    ]),
  },
  {
    label: 'Markets',
    href: '/markets',
    children: markets.map((m) => ({ label: m.title, href: `/markets#${m.slug}` })),
  },
  {
    label: 'Why Grascan Build',
    href: '/why-grascan-build',
    children: whyItems.map((w) => ({ label: w.title, href: `/why-grascan-build#${w.slug}` })),
  },
  {
    label: 'Health & Safety',
    href: '/health-safety',
    children: healthSafety.sections.map((h) => ({
      label: h.id === 'cor' ? 'Certificate of Recognition (COR) / ISO 45001' : h.title,
      href: `/health-safety#${h.id}`,
    })),
  },
  {
    label: 'Projects',
    href: '/projects',
    children: [{ label: 'Project Listing', href: '/projects' }],
  },
  {
    label: 'Careers',
    href: '/careers',
    children: [
      { label: 'Why Grascan Build', href: '/careers#why' },
      { label: 'Career Opportunities', href: '/careers#opportunities' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
    children: [{ label: 'Contact Us', href: '/contact' }],
  },
];

export const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

/** Statement bajo el hero. */
export const highlights = [
  { label: 'Established 1987', value: 'Grascan experience' },
  { label: 'Ontario', value: 'Building & construction' },
  { label: 'Safety', value: 'Quality & accountability' },
  { label: 'Complex projects', value: 'Delivered with precision' },
] as const;

/** Oficinas: el documento sólo confirma la región. Dirección, teléfono y email pendientes. */
export const office = {
  region: 'Ontario',
  city: 'Toronto, Ontario, Canada',
  note: 'Serving clients and projects across Ontario.',
};

/** Categorías de proyecto (filtros), según Markets / "What We Build". */
export const sectors = ['Institutional', 'Commercial', 'Industrial', 'Multi-Unit Residential', 'Transit'] as const;

export type Sector = (typeof sectors)[number];
