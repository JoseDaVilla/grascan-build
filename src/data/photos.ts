/**
 * Fotografías del sitio (Pexels, licencia libre para uso comercial; origen en src/assets/photos/sources.json).
 * Para cambiar una foto basta con reemplazar el .jpg manteniendo el nombre, o cambiar el import aquí.
 * Astro las optimiza (AVIF/WebP + srcset) en el build.
 */
import cranes from '@/assets/photos/cranes.jpg';
import officeTowers from '@/assets/photos/office-towers.jpg';
import glassTower from '@/assets/photos/glass-tower.jpg';
import structureWork from '@/assets/photos/structure-work.jpg';
import foundation from '@/assets/photos/foundation.jpg';
import commercial from '@/assets/photos/commercial.jpg';
import industrial from '@/assets/photos/industrial.jpg';
import institutional from '@/assets/photos/institutional.jpg';
import healthcare from '@/assets/photos/healthcare.jpg';
import residential from '@/assets/photos/residential.jpg';
import rehabilitation from '@/assets/photos/rehabilitation.jpg';
import buildingConstruction from '@/assets/photos/building-construction.jpg';
import designBuild from '@/assets/photos/design-build.jpg';
import constructionManagement from '@/assets/photos/construction-management.jpg';
import preConstruction from '@/assets/photos/pre-construction.jpg';
import interior from '@/assets/photos/interior.jpg';
import envelope from '@/assets/photos/envelope.jpg';
import siteDevelopment from '@/assets/photos/site-development.jpg';
import toronto from '@/assets/photos/toronto.jpg';
import siteSafety from '@/assets/photos/site-safety.jpg';
import safetyWorker from '@/assets/photos/safety-worker.jpg';

export const photos = {
  cranes,
  officeTowers,
  glassTower,
  structureWork,
  foundation,
  commercial,
  industrial,
  institutional,
  healthcare,
  residential,
  rehabilitation,
  buildingConstruction,
  designBuild,
  constructionManagement,
  preConstruction,
  interior,
  envelope,
  siteDevelopment,
  toronto,
  siteSafety,
  safetyWorker,
};

/** Slides del hero (en orden). */
export const heroSlides = [
  { src: cranes, alt: 'Tower cranes over a building under construction' },
  { src: officeTowers, alt: 'Modern commercial office towers' },
  { src: structureWork, alt: 'Crew working on a concrete structure' },
  { src: glassTower, alt: 'Glass facade of a commercial tower' },
  { src: foundation, alt: 'Foundation and rebar work on a building site' },
];

/** Foto por slug de servicio / sector. */
export const servicePhotos: Record<string, ImageMetadata> = {
  'building-construction': buildingConstruction,
  'commercial-construction': commercial,
  'industrial-construction': industrial,
  'institutional-construction': institutional,
  'residential-mixed-use': residential,
  'design-build': designBuild,
  'construction-management': constructionManagement,
  'pre-construction': preConstruction,
  'building-rehabilitation': rehabilitation,
  'interior-construction': interior,
  'building-envelope': envelope,
  'site-development': siteDevelopment,
  healthcare,
};
