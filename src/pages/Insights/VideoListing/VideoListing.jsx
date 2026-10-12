import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { insightsPages, videoCategories } from '../../../data/insights';
import { getPostPath, getPosts } from '../../../posts';
import Icon from '../../../components/ui/Icon/Icon';
import Pagination from '../../../components/ui/Pagination/Pagination';
import InsightsShell from '../components/InsightsShell/InsightsShell';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';
import WeeklyBriefing from '../components/WeeklyBriefing/WeeklyBriefing';
import ListingStatus from '../components/ListingStatus/ListingStatus';
import { categoryItems, useResourceListing } from '../useResourceListing';
import styles from './VideoListing.module.css';

const page = insightsPages.videos;
const byCategory = (post, category) => post.category === category;

// Play buttons open the video's page, where the recording plays (post `video` content block).
function FeaturedVideo({ post }) {
  return (
    <article className={styles.featured}>
      <img src={post.cardImage.src} alt={post.cardImage.alt} className={styles.featuredImage} />
      <Link to={getPostPath(post)} className={styles.featuredPlay} aria-label={`Play video: ${post.title}`}>
        <Icon name="play" size={40} />
      </Link>
      <div className={styles.featuredBody}>
        {post.label && <span className={styles.featuredTag}>{post.label}</span>}
        <h3 className={styles.featuredTitle}>{post.title}</h3>
        <p className={styles.featuredText}>{post.excerpt}</p>
      </div>
      {post.duration && (
        <span className={styles.featuredDuration}>
          <Icon name="clock" size={16} />
          {post.duration}
        </span>
      )}
    </article>
  );
}

function VideoCard({ post }) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img src={post.cardImage.src} alt={post.cardImage.alt} className={styles.image} />
        <Link to={getPostPath(post)} className={styles.play} aria-label={`Play video: ${post.title}`}>
          <Icon name="play" size={28} />
        </Link>
        {post.duration && <span className={styles.duration}>{post.duration}</span>}
      </div>
      <div className={styles.body}>
        {post.label && <span className={styles.tag}>{post.label}</span>}
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.text}>{post.excerpt}</p>
        <Link to={getPostPath(post)} className={styles.watch}>
          Watch Video<span className="visually-hidden">: {post.title}</span>
          <Icon name="arrowRight" size={16} />
        </Link>
      </div>
    </article>
  );
}

/** /insights/videos — featured video, then two-up video cards. */
function VideoListing() {
  const posts = useMemo(() => getPosts('video'), []);
  const listing = useResourceListing(posts, { pageSize: 2, featuredCount: 1, filterFn: byCategory });

  const aside = (
    <>
      <CategoryFilter
        title={page.categoriesTitle}
        items={[{ value: null, label: page.allLabel, count: posts.length }, ...categoryItems(posts, videoCategories)]}
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
      <ListingStatus count={listing.results.length} noun="video" />
      {listing.featured.map((post) => (
        <FeaturedVideo key={post.id} post={post} />
      ))}
      {listing.items.length > 0 && (
        <ul className={styles.grid}>
          {listing.items.map((post) => (
            <li key={post.id}>
              <VideoCard post={post} />
            </li>
          ))}
        </ul>
      )}
      {listing.totalPages > 1 && (
        <div className={styles.pagination}>
          <Pagination page={listing.page} totalPages={listing.totalPages} onChange={listing.setPage} label="Video pages" />
        </div>
      )}
    </InsightsShell>
  );
}

export default VideoListing;
