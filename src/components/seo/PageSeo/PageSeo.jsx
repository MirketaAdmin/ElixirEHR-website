import { pageSeo } from '../../../data/seo';

// Absolute URLs need the public origin. Set VITE_SITE_URL in production (as PostSeo does); the
// current origin is used otherwise.
const SITE_URL = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, '');

/**
 * A page's approved <head> tags (React 19 hoists them): title, meta description, canonical URL
 * (the approved slug, with its trailing slash) and the matching Open Graph tags. `path` is the
 * page's route, a key of `pageSeo`.
 */
function PageSeo({ path }) {
  const { title, description } = pageSeo[path];
  const url = `${SITE_URL}${path}/`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </>
  );
}

export default PageSeo;
