import { insightsPages } from '../../../data/insights';
import { getPostPath } from '../../../posts';
import { formatCardDate } from '../../../utils/formatDate';
import WideListing from '../WideListing/WideListing';

function meta(post) {
  return [
    post.pages && { icon: 'pages', text: `${post.pages} Pages` },
    post.author && { icon: 'person', text: post.author },
    { icon: 'calendar', text: formatCardDate(post.publishDate) },
  ].filter(Boolean);
}

// "Download E-Book" downloads the post's `file` when one is attached; until then it opens the
// e-book's page (no placeholder file links are made up).
function action(post) {
  return post.file
    ? { label: 'Download E-Book', href: post.file, download: true, button: true }
    : { label: 'Download E-Book', to: getPostPath(post), button: true };
}

/** /insights/e-book — "Clinical E-Books & Guides". */
function EbookListing() {
  return <WideListing type="e-book" page={insightsPages.ebook} noun="e-book" meta={meta} action={action} />;
}

export default EbookListing;
