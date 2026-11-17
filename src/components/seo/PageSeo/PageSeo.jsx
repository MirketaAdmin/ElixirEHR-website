import { pageSeo } from '../../../data/seo';
import { SITE_URL } from '../../../utils/siteUrl';
import { socialLinks } from '../../../data/footer';
import logoImage from '../../../assets/brand/elixir-logo-white.png';
import SocialMeta from '../SocialMeta/SocialMeta';
import { DEFAULT_SHARE_IMAGE, generatedShareImage, OG_SIZE, shareHeadline } from '../SocialMeta/socialImages';

/**
 * A page's share image: its generated card (title + hero image, src/assets/og/<path>.jpg), or the
 * default image (the Home image with the Elixir logo), which Home itself uses.
 */
function shareImage(path, title) {
  const src = generatedShareImage(path);
  return src ? { src, ...OG_SIZE, alt: `Elixir: ${shareHeadline(title)}` } : DEFAULT_SHARE_IMAGE;
}

const absolute = (src) => new URL(src, `${SITE_URL}/`).href;
// The breadcrumb name of a page: its approved title without the " | ElixirEHR" brand suffix.
const crumbName = (title) => title.split('|')[0].trim();

/**
 * Structured data for every page: WebPage + BreadcrumbList (Home → parent pages that exist → page);
 * on Home, also the Organization and the WebSite. A page's own `schema` object is added to the graph.
 */
function buildGraph({ path, url, title, description, schema, image }) {
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
      primaryImageOfPage: absolute(image.src),
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
 * (the approved slug, with its trailing slash), Open Graph and X card tags (SocialMeta, with the
 * page's own share image), and JSON-LD.
 * `path` is the page's route, a key of `pageSeo`; a page without an entry there passes its own
 * `title` and `description`. An optional `schema` object joins the page's JSON-LD graph with the
 * canonical URL as its `url`. `robots` (e.g. "noindex, follow") adds a robots meta tag.
 */
function PageSeo({ path, schema, robots, ...own }) {
  const { title, description } = pageSeo[path] ?? own;
  const url = `${SITE_URL}${path}/`;
  const image = shareImage(path, title);
  const jsonLd = JSON.stringify(buildGraph({ path, url, title, description, schema, image })).replace(/</g, '\\u003c');

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {robots && <meta name="robots" content={robots} />}
      <link rel="canonical" href={url} />
      <SocialMeta type="website" title={title} description={description} url={url} image={image} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </>
  );
}

export default PageSeo;
