// The site's public origin, for absolute URLs (canonical, og:url, og:image, share links). It is a
// constant rather than window.location.origin so prerendered HTML (built without a browser) and the
// live page agree, and preview deployments still point search engines at the production domain.
// Set VITE_SITE_URL to override it.
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://elixirehr.com').replace(/\/$/, '');
