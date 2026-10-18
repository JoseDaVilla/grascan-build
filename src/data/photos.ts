/**
 * Fotografías del sitio: imágenes proporcionadas por el cliente (carpetas "imagenes de apoyo" e "IMG_5273…").
 * Para cambiar una foto basta con reemplazar el .jpg en src/assets/photos manteniendo el nombre,
 * o cambiar el import aquí. Astro las optimiza (AVIF/WebP + srcset) en el build.
 */
import gardinerSite from '@/assets/photos/gardiner-site.jpg';
import trackCrew from '@/assets/photos/track-crew.jpg';
import glassCorner from '@/assets/photos/glass-corner.jpg';
import curtainWall from '@/assets/photos/curtain-wall.jpg';
import torontoNight from '@/assets/photos/toronto-night.jpg';
import facadeCrew from '@/assets/photos/facade-crew.jpg';
import plazaStairs from '@/assets/photos/plaza-stairs.jpg';
import towerSky from '@/assets/photos/tower-sky.jpg';
import twinTowers from '@/assets/photos/twin-towers.jpg';
import glassReflection from '@/assets/photos/glass-reflection.jpg';
import officeTowers from '@/assets/photos/office-towers.jpg';
import glassFacade from '@/assets/photos/glass-facade.jpg';
import residentialBalconies from '@/assets/photos/residential-balconies.jpg';
import glassAngles from '@/assets/photos/glass-angles.jpg';
import glassPyramid from '@/assets/photos/glass-pyramid.jpg';
import curvedTower from '@/assets/photos/curved-tower.jpg';
import residentialTower from '@/assets/photos/residential-tower.jpg';
import residentialHighrise from '@/assets/photos/residential-highrise.jpg';
import midRiseResidential from '@/assets/photos/mid-rise-residential.jpg';
import interiorFitout from '@/assets/photos/interior-fitout.jpg';
import atriumSiteWalk from '@/assets/photos/atrium-site-walk.jpg';
import facadeDusk from '@/assets/photos/facade-dusk.jpg';
import facadeDawn from '@/assets/photos/facade-dawn.jpg';
import industrialFacility from '@/assets/photos/industrial-facility.jpg';
import concreteStructure from '@/assets/photos/concrete-structure.jpg';
import institutionalCampus from '@/assets/photos/institutional-campus.jpg';
import commercialPavilion from '@/assets/photos/commercial-pavilion.jpg';

export const photos = {
  gardinerSite,
  trackCrew,
  glassCorner,
  curtainWall,
  torontoNight,
  facadeCrew,
  plazaStairs,
  towerSky,
  twinTowers,
  glassReflection,
  officeTowers,
  glassFacade,
  residentialBalconies,
  glassAngles,
  glassPyramid,
  curvedTower,
  residentialTower,
  residentialHighrise,
  midRiseResidential,
  interiorFitout,
  atriumSiteWalk,
  facadeDusk,
  facadeDawn,
  industrialFacility,
  concreteStructure,
  institutionalCampus,
  commercialPavilion,
};

/** Foto por slug de mercado (Markets / What We Build). */
export const marketPhotos: Record<string, ImageMetadata> = {
  institutional: institutionalCampus,
  commercial: officeTowers,
  industrial: industrialFacility,
  'multi-unit-residential': residentialTower,
  transit: trackCrew,
};

/** Foto por slug de servicio. */
export const servicePhotos: Record<string, ImageMetadata> = {
  'general-contracting': concreteStructure,
  'construction-management': atriumSiteWalk,
  'design-build': facadeDawn,
  'alternative-project-delivery': glassAngles,
  'pre-construction-planning': glassCorner,
};

/** Foto por slug de "Why Grascan Build". */
export const whyPhotos: Record<string, ImageMetadata> = {
  'integrated-building-civil': gardinerSite,
  'client-focused': plazaStairs,
  'lean-hands-on': atriumSiteWalk,
  'trade-subcontractor-network': curtainWall,
  'competitive-advantage': twinTowers,
};
