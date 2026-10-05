/**
 * Configuración central del sitio Grascan Build.
 * Estructura y textos según el documento "Website GRASCAN BUILD".
 * Los datos de contacto (email, teléfono, dirección) están PENDIENTES de que el cliente los envíe
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

import { services } from './data/services';

export interface MenuItem { label: string; href: string; children?: { label: string; href: string }[] }

/**
 * Menú principal (navbar con submenús y menú hamburguesa), según la estructura del documento.
 * "Individual Project Pages" aparecerán aquí automáticamente cuando existan proyectos.
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
      { label: 'Our Approach', href: '/#approach' },
      { label: 'Safety & Quality', href: '/#safety' },
      { label: 'News & Insights', href: '/#news' },
      { label: 'Contact / Offices', href: '/#contact' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: services.map((s) => ({ label: s.title, href: `/services#${s.slug}` })),
  },
  {
    label: 'Health & Safety',
    href: '/health-safety',
    children: [
      { label: 'Certificate of Recognition (COR™) / ISO 45001', href: '/health-safety#cor' },
      { label: 'Safety & Emergency Preparedness', href: '/health-safety#preparedness' },
      { label: 'Employee Safety Portal', href: '/health-safety#portal' },
      { label: 'Subcontractor Safety', href: '/health-safety#subcontractors' },
      { label: 'Construction Site Safety', href: '/health-safety#site-safety' },
      { label: 'Environmental & Hazard Management', href: '/health-safety#environmental' },
      { label: 'Grascan Build Policies & Resources', href: '/health-safety#policies' },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
    children: [{ label: 'Project Listing', href: '/projects' }],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About Grascan Build', href: '/about' },
      { label: 'Our Approach', href: '/about#approach' },
      { label: 'Our People', href: '/about#people' },
      { label: 'News & Insights', href: '/news' },
    ],
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

/** Categorías de proyecto (filtros), según "What We Build". */
export const sectors = ['Commercial', 'Industrial', 'Institutional', 'Healthcare', 'Residential & Mixed-Use', 'Building Rehabilitation'] as const;

export type Sector = (typeof sectors)[number];
