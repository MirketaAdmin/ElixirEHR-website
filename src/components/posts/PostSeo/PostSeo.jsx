import { getPostPath } from '../../../posts';
import SocialMeta, { SITE_NAME } from '../../seo/SocialMeta/SocialMeta';
import { absoluteUrl as absolute, SHARE_IMAGE } from '../../seo/SocialMeta/socialImages';

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

/** Per-post <head> tags (React 19 hoists them): title, description, canonical, Open Graph + X card tags (SocialMeta), article:* tags, and JSON-LD. */
function PostSeo({ post, type }) {
  const title = post.seo?.title ?? `${post.title} | ${SITE_NAME} ${type.plural}`;
  const description = post.seo?.description ?? post.excerpt;
  const url = absolute(getPostPath(post));
  // Structured data keeps the post's own featured image; share previews use the Elixir logo.
  const featuredSrc = post.seo?.image ?? post.heroImage?.src ?? post.cardImage?.src;
  const image = featuredSrc ? absolute(featuredSrc) : null;
  const schema = JSON.stringify(buildSchema(post, type, url, image, description)).replace(/</g, '\\u003c');

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {post.seo?.keywords && <meta name="keywords" content={post.seo.keywords.join(', ')} />}
      {post.demo && <meta name="robots" content="noindex" />}
      <link rel="canonical" href={url} />
      <SocialMeta type="article" title={title} description={description} url={url} image={SHARE_IMAGE} />
      <meta property="article:published_time" content={post.publishDate} />
      {post.updatedDate && <meta property="article:modified_time" content={post.updatedDate} />}
      {post.author && <meta property="article:author" content={post.author} />}
      <meta property="article:section" content={type.label} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
    </>
  );
}

export default PostSeo;
