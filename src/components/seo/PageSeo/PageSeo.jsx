import { pageSeo } from '../../../data/seo';
import { SITE_URL } from '../../../utils/siteUrl';

/**
 * A page's approved <head> tags (React 19 hoists them): title, meta description, canonical URL
 * (the approved slug, with its trailing slash) and the matching Open Graph tags. `path` is the
 * page's route, a key of `pageSeo`; a page without an entry there passes its own `title` and
 * `description`. An optional `schema` object is emitted as JSON-LD with the page's canonical URL as
 * its `url`. `robots` (e.g. "noindex, follow") adds a robots meta tag.
 */
function PageSeo({ path, schema, robots, ...own }) {
  const { title, description } = pageSeo[path] ?? own;
  const url = `${SITE_URL}${path}/`;
  const jsonLd = schema && JSON.stringify({ ...schema, url }).replace(/</g, '\\u003c');

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {robots && <meta name="robots" content={robots} />}
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
