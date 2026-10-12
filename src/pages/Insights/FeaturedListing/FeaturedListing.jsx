import { useMemo } from 'react';
import { getPostPath, getPosts } from '../../../posts';
import Pagination from '../../../components/ui/Pagination/Pagination';
import InsightsShell from '../components/InsightsShell/InsightsShell';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';
import WeeklyBriefing from '../components/WeeklyBriefing/WeeklyBriefing';
import ResourceCard from '../components/ResourceCard/ResourceCard';
import ListingStatus from '../components/ListingStatus/ListingStatus';
import { useResourceListing } from '../useResourceListing';
import styles from './FeaturedListing.module.css';

/**
 * Listing with a sidebar (Blog, Release Notes): the newest result as a horizontal featured card,
 * then two-up cards (four per page), beside a filter card and The Weekly Briefing.
 *   filter   { title, variant, items(posts) → [{ value, label, count? }], match(post, value) }
 *   tags     { featured, card }      labels { featured, card }      meta(post) → [{ icon, text }]
 */
function FeaturedListing({ type, page, noun, filter, tags, labels, meta }) {
  const posts = useMemo(() => getPosts(type), [type]);
  const listing = useResourceListing(posts, { pageSize: 4, featuredCount: 1, filterFn: filter.match });

  const aside = (
    <>
      <CategoryFilter
        variant={filter.variant}
        title={filter.title}
        items={filter.items(posts)}
        value={listing.filter}
        onChange={listing.setFilter}
      />
      <WeeklyBriefing />
    </>
  );

  return (
    <InsightsShell
      documentTitle={page.documentTitle}
      title={page.title}
      query={listing.query}
      onQueryChange={listing.setQuery}
      aside={aside}
    >
      <ListingStatus count={listing.results.length} noun={noun} />
      {listing.featured.map((post) => (
        <ResourceCard
          key={post.id}
          post={post}
          layout="horizontal"
          tag={tags.featured}
          meta={meta(post)}
          excerpt
          action={{ label: labels.featured, to: getPostPath(post) }}
        />
      ))}
      {listing.items.length > 0 && (
        <ul className={styles.grid}>
          {listing.items.map((post) => (
            <li key={post.id}>
              <ResourceCard
                post={post}
                tag={tags.card}
                meta={meta(post)}
                action={{ label: labels.card, to: getPostPath(post) }}
              />
            </li>
          ))}
        </ul>
      )}
      {listing.totalPages > 1 && (
        <div className={styles.pagination}>
          <Pagination
            page={listing.page}
            totalPages={listing.totalPages}
            onChange={listing.setPage}
            label={`${page.documentTitle} pages`}
          />
        </div>
      )}
    </InsightsShell>
  );
}

export default FeaturedListing;
