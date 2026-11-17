import { absoluteUrl } from './socialImages';

export const SITE_NAME = 'Elixir';
export const OG_LOCALE = 'en_US';

const IMAGE_TYPES = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp', gif: 'image/gif' };

/**
 * The Open Graph and X (Twitter) card tags of one page, rendered once per page (React 19 hoists
 * them into <head>, and the prerender writes them into the page's HTML for crawlers).
 *   type         'website' | 'article'
 *   url          the canonical URL
 *   image        { src, width?, height?, alt } — src may be relative; it is made absolute here
 * No twitter:site / twitter:creator: Elixir has no confirmed X account.
 */
function SocialMeta({ type, title, description, url, image }) {
  const src = absoluteUrl(image.src);
  const extension = src.split('?')[0].split('.').pop().toLowerCase();
  return (
    <>
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={OG_LOCALE} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={src} />
      {src.startsWith('https://') && <meta property="og:image:secure_url" content={src} />}
      {IMAGE_TYPES[extension] && <meta property="og:image:type" content={IMAGE_TYPES[extension]} />}
      {image.width && <meta property="og:image:width" content={String(image.width)} />}
      {image.height && <meta property="og:image:height" content={String(image.height)} />}
      <meta property="og:image:alt" content={image.alt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={src} />
      <meta name="twitter:image:alt" content={image.alt} />
    </>
  );
}

export default SocialMeta;
