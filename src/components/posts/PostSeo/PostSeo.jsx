import { getPostPath } from '../../../posts';

// Absolute URLs (canonical, og:url, og:image) need the public origin. Set VITE_SITE_URL in
// production (e.g. https://www.example.com); the current origin is used otherwise.
const SITE_URL = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, '');
const SITE_NAME = 'Elixir';

function absolute(path) {
  return new URL(path, `${SITE_URL}/`).href;
}

function buildSchema(post, type, url, image, description) {
  const author = post.author
    ? { '@type': 'Person', name: post.author }
    : { '@type': 'Organization', name: SITE_NAME };

  // A webinar with event details is an Event; everything else is an article type.
  if (post.event?.startDate) {
    const online = post.event.attendanceMode === 'online';
    return {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: post.title,
      description,
      startDate: post.event.startDate,
      ...(post.event.endDate && { endDate: post.event.endDate }),
      ...(online && {
        eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
        location: { '@type': 'VirtualLocation', url },
      }),
      ...(image && { image: [image] }),
      organizer: { '@type': 'Organization', name: SITE_NAME },
      url,
    };
  }

  return {
    '@context': 'https://schema.org',
    '@type': type.schemaType,
    headline: post.title,
    description,
    ...(image && { image: [image] }),
    datePublished: post.publishDate,
    ...(post.updatedDate && { dateModified: post.updatedDate }),
    author,
    publisher: { '@type': 'Organization', name: SITE_NAME },
    mainEntityOfPage: url,
    ...(post.tags?.length && { keywords: post.tags.join(', ') }),
  };
}

/** Per-post <head> tags (React 19 hoists them) plus JSON-LD structured data. */
function PostSeo({ post, type }) {
  const title = post.seo?.title ?? `${post.title} | ${SITE_NAME} ${type.plural}`;
  const description = post.seo?.description ?? post.excerpt;
  const url = absolute(getPostPath(post));
  const imageSrc = post.seo?.image ?? post.heroImage?.src ?? post.cardImage?.src;
  const image = imageSrc ? absolute(imageSrc) : null;
  const schema = JSON.stringify(buildSchema(post, type, url, image, description)).replace(/</g, '\\u003c');

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {post.seo?.keywords && <meta name="keywords" content={post.seo.keywords.join(', ')} />}
      {post.demo && <meta name="robots" content="noindex" />}
      <link rel="canonical" href={url} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}
      <meta property="article:published_time" content={post.publishDate} />
      {post.updatedDate && <meta property="article:modified_time" content={post.updatedDate} />}
      {post.author && <meta property="article:author" content={post.author} />}
      <meta property="article:section" content={type.label} />
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
    </>
  );
}

export default PostSeo;
