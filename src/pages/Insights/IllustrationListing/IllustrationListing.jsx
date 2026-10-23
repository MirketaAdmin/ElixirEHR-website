import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { illustrationCategories, insightsPages } from '../../../data/insights';
import { getPostPath, getPosts } from '../../../posts';
import Icon from '../../../components/ui/Icon/Icon';
import Pagination from '../../../components/ui/Pagination/Pagination';
import InsightsShell from '../components/InsightsShell/InsightsShell';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';
import WeeklyBriefing from '../components/WeeklyBriefing/WeeklyBriefing';
import ListingStatus from '../components/ListingStatus/ListingStatus';
import { categoryItems, useResourceListing } from '../useResourceListing';
import styles from './IllustrationListing.module.css';

const page = insightsPages.illustrations;
const byCategory = (post, category) => post.category === category;

const formats = [
  { key: 'svg', label: 'SVG', icon: 'download' },
  { key: 'png', label: 'PNG', icon: 'image' },
];

/** SVG / PNG buttons: download `post.files[format]`, or open the illustration's page until a file is supplied. */
function FormatButton({ post, format }) {
  const file = post.files?.[format.key];
  const label = (
    <>
      <Icon name={format.icon} size={14} />
      {format.label}
      <span className="visually-hidden">: {post.title}</span>
    </>
  );
  return file ? (
    <a href={file} download className={styles.button}>
      {label}
    </a>
  ) : (
    <Link to={getPostPath(post)} className={styles.button}>
      {label}
    </Link>
  );
}

function IllustrationCard({ post }) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img src={post.cardImage.src} alt={post.cardImage.alt} className={styles.image} />
      </div>
      <div className={styles.body}>
        {post.label && <p className={styles.label}>{post.label}</p>}
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.text}>{post.excerpt}</p>
        <div className={styles.actions}>
          {formats.map((format) => (
            <FormatButton key={format.key} post={post} format={format} />
          ))}
        </div>
      </div>
    </article>
  );
}

/** /insights/illustrations — two-up illustration cards with SVG / PNG downloads. */
function IllustrationListing() {
  const posts = useMemo(() => getPosts('illustration'), []);
  const listing = useResourceListing(posts, { pageSize: 6, filterFn: byCategory });

  const aside = (
    <>
      <CategoryFilter
        title={page.categoriesTitle}
        items={categoryItems(posts, illustrationCategories)}
        value={listing.filter}
        onChange={(value) => listing.setFilter(value === listing.filter ? null : value)}
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
      <ListingStatus count={listing.results.length} noun="illustration" />
      {listing.items.length > 0 && (
        <ul className={styles.grid}>
          {listing.items.map((post) => (
            <li key={post.id}>
              <IllustrationCard post={post} />
            </li>
          ))}
        </ul>
      )}
      {listing.totalPages > 1 && (
        <div className={styles.pagination}>
          <Pagination page={listing.page} totalPages={listing.totalPages} onChange={listing.setPage} label="Illustration pages" />
        </div>
      )}
    </InsightsShell>
  );
}

export default IllustrationListing;
