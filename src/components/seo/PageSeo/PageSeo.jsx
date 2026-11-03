import { pageSeo } from '../../../data/seo';

// Absolute URLs need the public origin. Set VITE_SITE_URL in production (as PostSeo does); the
// current origin is used otherwise.
const SITE_URL = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, '');

/**
 * A page's approved <head> tags (React 19 hoists them): title, meta description, canonical URL
 * (the approved slug, with its trailing slash) and the matching Open Graph tags. `path` is the
 * page's route, a key of `pageSeo`. An optional `schema` object is emitted as JSON-LD with the page's
 * canonical URL as its `url`.
 */
function PageSeo({ path, schema }) {
  const { title, description } = pageSeo[path];
  const url = `${SITE_URL}${path}/`;
  const jsonLd = schema && JSON.stringify({ ...schema, url }).replace(/</g, '\\u003c');

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />}
    </>
  );
}

export default PageSeo;
