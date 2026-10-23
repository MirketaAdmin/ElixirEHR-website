/**
 * Post content types. Each key is a folder in `src/posts/` and `path` is its public URL segment:
 * a post in `src/posts/press-release/my-slug.js` is served at `/press-release/my-slug`.
 * (`posts` is only the source folder; it never appears in a URL.)
 *
 *   label        singular name — breadcrumb and type crumb in the hero
 *   plural       sidebar "Latest …" heading and "View All …" link
 *   listingPath  the type's listing page, when one exists ("View All" link and breadcrumb)
 *   shareLabel   caption of the share row under the article
 *   schemaType   schema.org type for the structured data
 */
export const postTypes = {
  blog: {
    path: 'blog',
    label: 'Blog',
    plural: 'Blogs',
    listingPath: '/blog',
    shareLabel: 'Share this blog',
    schemaType: 'BlogPosting',
  },
  'press-release': {
    path: 'press-release',
    label: 'Press Release',
    plural: 'Press Releases',
    listingPath: '/press-releases',
    shareLabel: 'Share this release',
    schemaType: 'NewsArticle',
  },
  'case-study': {
    path: 'case-study',
    label: 'Case Study',
    plural: 'Case Studies',
    shareLabel: 'Share this case study',
    schemaType: 'Article',
  },
  'release-note': {
    path: 'release-note',
    label: 'Release Note',
    plural: 'Release Notes',
    listingPath: '/insights/release-notes',
    shareLabel: 'Share this release note',
    schemaType: 'TechArticle',
  },
  'e-book': {
    path: 'e-book',
    label: 'E-book',
    plural: 'E-books',
    listingPath: '/insights/e-book',
    shareLabel: 'Share this e-book',
    schemaType: 'Article',
  },
  'benchmark-survey': {
    path: 'benchmark-survey',
    label: 'Benchmark Survey',
    plural: 'Benchmark Surveys',
    listingPath: '/insights/benchmark-surveys',
    shareLabel: 'Share this survey',
    schemaType: 'Article',
  },
  illustration: {
    path: 'illustration',
    label: 'Illustration',
    plural: 'Illustrations',
    listingPath: '/insights/illustrations',
    shareLabel: 'Share this illustration',
    schemaType: 'Article',
  },
  video: {
    path: 'video',
    label: 'Video',
    plural: 'Videos',
    listingPath: '/insights/videos',
    shareLabel: 'Share this video',
    schemaType: 'Article',
  },
  webinars: {
    path: 'webinars',
    label: 'Webinar',
    plural: 'Webinars',
    listingPath: '/insights/webinars',
    shareLabel: 'Share this webinar',
    // Webinars with an `event` block are described as an Event instead (see PostSeo).
    schemaType: 'Article',
  },
};
