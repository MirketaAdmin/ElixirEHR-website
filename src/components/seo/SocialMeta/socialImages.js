import { SITE_URL } from '../../../utils/siteUrl';
import ogElixirLogo from '../../../assets/seo/og-elixir-logo.png';

/**
 * The share image of every page (Open Graph and X cards): the full Elixir logo, uncropped, centred
 * on white at 1200×630 (1.91:1).
 */
export const SHARE_IMAGE = {
  src: ogElixirLogo,
  width: 1200,
  height: 630,
  alt: 'Elixir logo',
};

/** An absolute https URL on the site's public origin. */
export const absoluteUrl = (src) => new URL(src, `${SITE_URL}/`).href;
