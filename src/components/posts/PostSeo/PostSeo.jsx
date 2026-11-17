import { getPostPath } from '../../../posts';
import SocialMeta, { SITE_NAME } from '../../seo/SocialMeta/SocialMeta';
import { absoluteUrl as absolute, DEFAULT_SHARE_IMAGE, generatedShareImage, OG_SIZE } from '../../seo/SocialMeta/socialImages';

/**
 * The post's share image: its featured image cropped to 1200×630 (src/assets/og/<type>/<slug>.jpg,
 * from scripts/og-images/generate.py); until that exists, the featured image itself (with its size
 * when the post states it); the default image only when the post has no image at all.
 */
function shareImage(post, path) {
  const featured = post.seo?.image
    ? { src: post.seo.image }
    : (post.heroImage ?? post.cardImage);
  const alt = featured?.alt || post.title;
  const generated = generatedShareImage(path);
  if (generated) return { src: generated, ...OG_SIZE, alt };
  if (featured?.src) return { src: featured.src, width: featured.width, height: featured.height, alt };
  return DEFAULT_SHARE_IMAGE;
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

/** Per-post <head> tags (React 19 hoists them): title, description, canonical, Open Graph + X card tags (SocialMeta), article:* tags, and JSON-LD. */
function PostSeo({ post, type }) {
  const title = post.seo?.title ?? `${post.title} | ${SITE_NAME} ${type.plural}`;
  const description = post.seo?.description ?? post.excerpt;
  const path = getPostPath(post);
  const url = absolute(path);
  const share = shareImage(post, path);
  // Structured data keeps the post's own featured image (the full picture, not the 1.91:1 crop).
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
      <SocialMeta type="article" title={title} description={description} url={url} image={share} />
      <meta property="article:published_time" content={post.publishDate} />
      {post.updatedDate && <meta property="article:modified_time" content={post.updatedDate} />}
      {post.author && <meta property="article:author" content={post.author} />}
      <meta property="article:section" content={type.label} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
    </>
  );
}

export default PostSeo;
