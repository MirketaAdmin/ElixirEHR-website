import { useMemo } from 'react';
import { getPosts } from '../../../posts';
import Pagination from '../../../components/ui/Pagination/Pagination';
import InsightsShell from '../components/InsightsShell/InsightsShell';
import ResourceCard from '../components/ResourceCard/ResourceCard';
import ListingStatus from '../components/ListingStatus/ListingStatus';
import { useResourceListing } from '../useResourceListing';
import styles from './WideListing.module.css';

/**
 * Full-width two-up listing (E-Book, Benchmark Surveys): 562px cards with a 360px photo, four per
 * page. `meta(post)` and `action(post)` give each card's meta row and link/button.
 */
function WideListing({ type, page, noun, meta, action }) {
  const posts = useMemo(() => getPosts(type), [type]);
  const listing = useResourceListing(posts, { pageSize: 4 });

  return (
    <InsightsShell
      documentTitle={page.documentTitle}
      title={page.title}
      query={listing.query}
      onQueryChange={listing.setQuery}
    >
      <ListingStatus count={listing.results.length} noun={noun} />
      {listing.items.length > 0 && (
        <ul className={styles.grid}>
          {listing.items.map((post) => (
            <li key={post.id}>
              <ResourceCard post={post} size="wide" tag="Article" meta={meta(post)} excerpt action={action(post)} />
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

export default WideListing;
