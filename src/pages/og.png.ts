import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { palette } from '@/lib/palette';
import { logo } from '@/lib/logo';
import { site } from '@/site.config';

/** Imagen Open Graph (1200×630): logo Grascan Build sobre blanco . */
export const GET: APIRoute = async () => {
  const { bone, signal, mute, logoNavy, logoGray } = palette;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <rect width="1200" height="630" fill="${bone}"/>
    <g transform="translate(395 70) scale(0.68)">
      <path d="${logo.gray}" fill="${logoGray}"/><path d="${logo.navy}" fill="${logoNavy}"/><path d="${logo.g}" fill="${logoNavy}" fill-rule="evenodd"/>
      <path d="${logo.word}" fill="${logoNavy}" fill-rule="evenodd"/><path d="${logo.build}" fill="${logoGray}" fill-rule="evenodd"/>
    </g>
    <text x="600" y="540" text-anchor="middle" font-family="DejaVu Sans, Arial, sans-serif" font-size="24" fill="${mute}" letter-spacing="3">${site.tagline.replace(/\.$/, '').toUpperCase()}</text>
    <rect x="0" y="618" width="1200" height="12" fill="${signal}"/>
  </svg>`;
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
