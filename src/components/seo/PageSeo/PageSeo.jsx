import { pageSeo } from '../../../data/seo';
import { SITE_URL } from '../../../utils/siteUrl';
import { socialLinks } from '../../../data/footer';
import ogDefaultImage from '../../../assets/seo/og-default.jpg';
import logoImage from '../../../assets/brand/elixir-logo-white.png';

// Default share image (1200×630) for pages without their own: the Home hero image and the Elixir
// logo on the brand purple. Posts set their own image in PostSeo.
const OG_IMAGE = { src: ogDefaultImage, width: 1200, height: 630, alt: 'Elixir: the AI-powered EHR built for modern healthcare teams' };

const absolute = (src) => new URL(src, `${SITE_URL}/`).href;
// The breadcrumb name of a page: its approved title without the " | ElixirEHR" brand suffix.
const crumbName = (title) => title.split('|')[0].trim();

/**
 * Structured data for every page: WebPage + BreadcrumbList (Home → parent pages that exist → page);
 * on Home, also the Organization and the WebSite. A page's own `schema` object is added to the graph.
 */
function buildGraph({ path, url, title, description, schema }) {
  const crumbs = [{ name: 'Home', url: `${SITE_URL}/` }];
  const segments = path.split('/').filter(Boolean);
  segments.forEach((_, index) => {
    const prefix = `/${segments.slice(0, index + 1).join('/')}`;
    if (prefix === path) crumbs.push({ name: crumbName(title), url });
    else if (pageSeo[prefix]) crumbs.push({ name: crumbName(pageSeo[prefix].title), url: `${SITE_URL}${prefix}/` });
  });
  const organization = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Elixir',
    alternateName: 'ElixirEHR',
    url: `${SITE_URL}/`,
    logo: absolute(logoImage),
    email: 'info@elixirehr.com',
    sameAs: socialLinks.map((item) => item.href),
  };
  const graph = [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: title,
      description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      primaryImageOfPage: absolute(OG_IMAGE.src),
    },
  ];
  if (crumbs.length > 1) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, name: crumb.name, item: crumb.url })),
    });
  }
  if (!path) {
    graph.push(organization, { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: 'Elixir', publisher: { '@id': `${SITE_URL}/#organization` } });
  }
  if (schema) graph.push({ ...schema, url });
  return { '@context': 'https://schema.org', '@graph': graph };
}

/**
 * A page's approved <head> tags (React 19 hoists them): title, meta description, canonical URL
 * (the approved slug, with its trailing slash), Open Graph and Twitter card tags, and JSON-LD.
 * `path` is the page's route, a key of `pageSeo`; a page without an entry there passes its own
 * `title` and `description`. An optional `schema` object joins the page's JSON-LD graph with the
 * canonical URL as its `url`. `robots` (e.g. "noindex, follow") adds a robots meta tag.
 */
function PageSeo({ path, schema, robots, ...own }) {
  const { title, description } = pageSeo[path] ?? own;
  const url = `${SITE_URL}${path}/`;
  const image = absolute(OG_IMAGE.src);
  const jsonLd = JSON.stringify(buildGraph({ path, url, title, description, schema })).replace(/</g, '\\u003c');

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {robots && <meta name="robots" content={robots} />}
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Elixir" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={String(OG_IMAGE.width)} />
      <meta property="og:image:height" content={String(OG_IMAGE.height)} />
      <meta property="og:image:alt" content={OG_IMAGE.alt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </>
  );
}

export default PageSeo;
