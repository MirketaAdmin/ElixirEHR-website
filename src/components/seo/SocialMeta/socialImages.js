import { SITE_URL } from '../../../utils/siteUrl';
import ogDefaultImage from '../../../assets/seo/og-default.jpg';

/*
 * Share images for social previews (Open Graph / X cards).
 *
 * `src/assets/og/<page path>.jpg` holds one 1200×630 JPG per page (e.g. og/about-us.jpg,
 * og/blog/<slug>.jpg), made by scripts/og-images/generate.py: posts get their own featured image
 * cropped to 1.91:1; other pages get a branded card with their title and hero image. A page without
 * one uses its featured image (posts) or the default image, the Home share image.
 */
const generated = Object.fromEntries(
  Object.entries(import.meta.glob('../../../assets/og/**/*.jpg', { eager: true, import: 'default' })).map(
    ([file, src]) => [file.replace('../../../assets/og/', '').replace(/\.jpg$/, ''), src],
  ),
);

export const OG_SIZE = { width: 1200, height: 630 };

export const DEFAULT_SHARE_IMAGE = {
  src: ogDefaultImage,
  ...OG_SIZE,
  alt: 'Elixir: the AI-powered EHR built for modern healthcare teams',
};

/** An absolute https URL on the site's public origin. */
export const absoluteUrl = (src) => new URL(src, `${SITE_URL}/`).href;

/** The generated share image for a page path ("/about-us", "/blog/<slug>/"), or null. */
export function generatedShareImage(pagePath) {
  return generated[pagePath.replace(/^\/+|\/+$/g, '')] ?? null;
}

const BRAND_PARTS = new Set(['elixir', 'elixirehr', 'careers', 'onc certification']);

/** The page's title without the brand parts ("Billing | Elixir" → "Billing"), as on its card. */
export function shareHeadline(title) {
  const parts = title.split(' | ').map((part) => part.trim());
  return parts.find((part) => !BRAND_PARTS.has(part.toLowerCase())) ?? parts[0];
}
