import { insightsPages } from '../../../data/insights';
import { formatCardDate } from '../../../utils/formatDate';
import FeaturedListing from '../FeaturedListing/FeaturedListing';

const page = insightsPages.releaseNotes;
const yearOf = (post) => post.publishDate.slice(0, 4);

// "Version History": one row per release year found on the posts, newest first, with counts.
const filter = {
  title: page.categoriesTitle,
  variant: 'history',
  items: (posts) =>
    [...new Set(posts.map(yearOf))].map((year) => ({
      value: year,
      label: `${year} Releases`,
      count: posts.filter((post) => yearOf(post) === year).length,
    })),
  match: (post, year) => yearOf(post) === year,
};

function meta(post) {
  return [
    post.version && { icon: 'hash', text: `Version ${post.version}` },
    { icon: 'calendar', text: formatCardDate(post.publishDate) },
  ].filter(Boolean);
}

/** /insights/release-notes — release note posts (src/posts/release-note/). */
function ReleaseNotesListing() {
  return (
    <FeaturedListing
      type="release-note"
      page={page}
      noun="release note"
      filter={filter}
      tags={{ featured: 'Featured release', card: 'Release' }}
      labels={{ featured: 'View Full Release Notes', card: 'Read Notes' }}
      meta={meta}
    />
  );
}

export default ReleaseNotesListing;
