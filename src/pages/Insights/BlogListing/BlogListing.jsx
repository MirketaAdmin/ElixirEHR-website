import { insightsPages } from '../../../data/insights';
import { formatCardDate } from '../../../utils/formatDate';
import FeaturedListing from '../FeaturedListing/FeaturedListing';

const page = insightsPages.blog;

// The frame's categories are "Category Here" placeholders, so the list is the categories found
// on the blog posts. A post's `category` is one name or a list of names.
const categoriesOf = (post) => [post.category].flat().filter(Boolean);

const filter = {
  title: page.categoriesTitle,
  variant: 'list',
  items: (posts) => [
    { value: null, label: page.allLabel },
    ...[...new Set(posts.flatMap(categoriesOf))].map((value) => ({ value, label: value })),
  ],
  match: (post, category) => categoriesOf(post).includes(category),
};

function meta(post) {
  return [
    post.author && { icon: 'person', text: post.author },
    { icon: 'calendar', text: formatCardDate(post.publishDate) },
  ].filter(Boolean);
}

/** /blog — "Blogs for Clinical Excellence". */
function BlogListing() {
  return (
    <FeaturedListing
      type="blog"
      page={page}
      noun="blog post"
      filter={filter}
      tags={{ featured: 'Article', card: 'Article' }}
      labels={{ featured: 'Read More', card: 'Read More' }}
      meta={meta}
    />
  );
}

export default BlogListing;
