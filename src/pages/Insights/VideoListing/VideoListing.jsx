import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { insightsPages, videoCategories } from '../../../data/insights';
import { getPostPath, getPosts } from '../../../posts';
import Icon from '../../../components/ui/Icon/Icon';
import Pagination from '../../../components/ui/Pagination/Pagination';
import VideoModal from '../../../components/ui/VideoModal/VideoModal';
import InsightsShell from '../components/InsightsShell/InsightsShell';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';
import WeeklyBriefing from '../components/WeeklyBriefing/WeeklyBriefing';
import ListingStatus from '../components/ListingStatus/ListingStatus';
import { categoryItems, useResourceListing } from '../useResourceListing';
import styles from './VideoListing.module.css';

const page = insightsPages.videos;
const byCategory = (post, category) => post.category === category;

/**
 * A video's play button. A post with a `youtubeId` plays in the page's popup (VideoModal) without
 * leaving the site; otherwise the button opens the video's page, where the recording plays.
 */
function PlayButton({ post, onPlay, className, size }) {
  const label = `Play video: ${post.title}`;
  if (post.youtubeId) {
    return (
      <button type="button" className={className} aria-label={label} onClick={() => onPlay(post)}>
        <Icon name="play" size={size} />
      </button>
    );
  }
  return (
    <Link to={getPostPath(post)} className={className} aria-label={label}>
      <Icon name="play" size={size} />
    </Link>
  );
}

function FeaturedVideo({ post, onPlay }) {
  return (
    <article className={styles.featured}>
      <img loading="lazy" decoding="async" src={post.cardImage.src} alt={post.cardImage.alt} className={styles.featuredImage} />
      <PlayButton post={post} onPlay={onPlay} className={styles.featuredPlay} size={40} />
      <div className={styles.featuredBody}>
        {post.label && <span className={styles.featuredTag}>{post.label}</span>}
        {/* The title links to the video's own page (the other cards have a "Watch Video" link). */}
        <h2 className={styles.featuredTitle}>
          <Link to={getPostPath(post)}>{post.title}</Link>
        </h2>
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

function VideoCard({ post, onPlay }) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img loading="lazy" decoding="async" src={post.cardImage.src} alt={post.cardImage.alt} className={styles.image} />
        <PlayButton post={post} onPlay={onPlay} className={styles.play} size={28} />
        {post.duration && <span className={styles.duration}>{post.duration}</span>}
      </div>
      <div className={styles.body}>
        {post.label && <span className={styles.tag}>{post.label}</span>}
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.text}>{post.excerpt}</p>
        <Link to={getPostPath(post)} className={styles.watch}>
          Watch Video<span className="visually-hidden">: {post.title}</span>
          <Icon name="arrowRight" size={16} />
        </Link>
      </div>
    </article>
  );
}

/** /feature-videos — featured video, then every other video as two-up cards. */
function VideoListing() {
  const posts = useMemo(() => getPosts('video'), []);
  // Every video is listed on one page (the featured video, then the two-up grid); pagination only
  // appears if the library grows past the featured video + 24 cards.
  const listing = useResourceListing(posts, { pageSize: 24, featuredCount: 1, filterFn: byCategory });
  const [playing, setPlaying] = useState(null);

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
        <FeaturedVideo key={post.id} post={post} onPlay={setPlaying} />
      ))}
      {listing.items.length > 0 && (
        <ul className={styles.grid}>
          {listing.items.map((post) => (
            <li key={post.id}>
              <VideoCard post={post} onPlay={setPlaying} />
            </li>
          ))}
        </ul>
      )}
      {listing.totalPages > 1 && (
        <div className={styles.pagination}>
          <Pagination linked page={listing.page} totalPages={listing.totalPages} onChange={listing.setPage} label="Video pages" />
        </div>
      )}
      {playing && (
        <VideoModal key={playing.id} videoId={playing.youtubeId} title={playing.title} onClose={() => setPlaying(null)} />
      )}
    </InsightsShell>
  );
}

export default VideoListing;
