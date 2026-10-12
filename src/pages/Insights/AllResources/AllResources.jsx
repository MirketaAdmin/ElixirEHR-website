import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { contactHero } from '../../../data/contactUs';
import { allResources, insightsPages } from '../../../data/insights';
import { getPostPath, getPosts } from '../../../posts';
import PageHero from '../../../components/sections/PageHero/PageHero';
import Button from '../../../components/ui/Button/Button';
import Icon from '../../../components/ui/Icon/Icon';
import { formatCardDate } from '../../../utils/formatDate';
import InsightsShell from '../components/InsightsShell/InsightsShell';
import { getUpcomingEvent } from '../useResourceListing';
import styles from './AllResources.module.css';

const page = insightsPages.all;
const PAGE_SIZE = 3;

const eventDate = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'America/New_York',
});

/**
 * The mixed feed takes the newest remaining resource of each type in turn (Article, Webinar,
 * Release, …), so one busy category never fills the page on its own.
 */
function interleave(groups) {
  const queues = groups.map((posts) => [...posts]);
  const feed = [];
  while (queues.some((queue) => queue.length)) {
    queues.forEach((queue) => queue.length && feed.push(queue.shift()));
  }
  return feed;
}

/** A link to the post's page, or a download when the post ships a file (`post.file`). */
function PostAction({ post, className, children }) {
  return post.file ? (
    <a href={post.file} download className={className}>
      {children}
    </a>
  ) : (
    <Link to={getPostPath(post)} className={className}>
      {children}
    </Link>
  );
}

function FeaturedEbook({ post }) {
  return (
    <article className={styles.featured}>
      <div className={styles.featuredMedia}>
        <img src={post.cardImage.src} alt={post.cardImage.alt} className={styles.featuredImage} />
        <span className={styles.featuredTag}>
          <Icon name="document" size={16} />
          {allResources.feedTypes['e-book'].tag}
        </span>
      </div>
      <div className={styles.featuredBody}>
        <h3 className={styles.featuredTitle}>{post.title}</h3>
        <p className={styles.featuredText}>{post.excerpt}</p>
        <Link to={getPostPath(post)} className={styles.link}>
          Read More<span className="visually-hidden">: {post.title}</span>
          <Icon name="arrowRight" size={18} />
        </Link>
        {(post.readingTime || post.file) && (
          <ul className={styles.featuredMeta}>
            {post.readingTime && (
              <li>
                <Icon name="clock" size={16} />
                {post.readingTime}
              </li>
            )}
            {post.file && (
              <li>
                <Icon name="download" size={16} />
                <a href={post.file} download>
                  {allResources.pdfLabel}
                </a>
              </li>
            )}
          </ul>
        )}
      </div>
    </article>
  );
}

function LiveWebinar({ post }) {
  return (
    <article className={styles.live}>
      <span className={styles.liveTag}>{allResources.liveLabel}</span>
      <h3 className={styles.liveTitle}>{post.title}</h3>
      <p className={styles.liveText}>{post.excerpt}</p>
      <div className={styles.liveFoot}>
        <p className={styles.liveWhen}>
          <span className={styles.liveDate}>
            <Icon name="calendar" size={16} />
            <time dateTime={post.event.startDate}>{eventDate.format(new Date(post.event.startDate))}</time>
          </span>
          {post.event.timeLabel && <span className={styles.liveTime}>{post.event.timeLabel}</span>}
        </p>
        <Link to={getPostPath(post)} className={styles.liveLink} aria-label={`View webinar: ${post.title}`}>
          <Icon name="arrowRight" size={18} />
        </Link>
      </div>
    </article>
  );
}

function FeaturedVideo({ post }) {
  return (
    <article className={styles.video}>
      <img src={post.cardImage.src} alt={post.cardImage.alt} className={styles.videoImage} />
      <Link to={getPostPath(post)} className={styles.videoPlay} aria-label={`Play video: ${post.title}`}>
        <Icon name="play" size={28} />
      </Link>
      <div className={styles.videoBody}>
        <span className={styles.videoTag}>{allResources.featuredVideoLabel}</span>
        <h3 className={styles.videoTitle}>{post.title}</h3>
      </div>
    </article>
  );
}

function FeedCard({ post }) {
  const labels = allResources.feedTypes[post.type];
  return (
    <article className={styles.card}>
      <div className={styles.cardMedia}>
        <img src={post.cardImage.src} alt={post.cardImage.alt} className={styles.cardImage} />
        <span className={styles.cardTag}>{labels.tag}</span>
      </div>
      <div className={styles.cardBody}>
        <ul className={styles.cardMeta}>
          {post.author && (
            <li>
              <Icon name="person" size={14} />
              {post.author}
            </li>
          )}
          <li>
            <Icon name="calendar" size={14} />
            <time dateTime={post.publishDate}>{formatCardDate(post.publishDate)}</time>
          </li>
        </ul>
        <h3 className={styles.cardTitle}>{post.listingTitle ?? post.title}</h3>
        <PostAction post={post} className={styles.link}>
          {labels.action}
          <span className="visually-hidden">: {post.title}</span>
          <Icon name={labels.icon} size={labels.icon === 'arrowRight' ? 18 : 16} />
        </PostAction>
      </div>
    </article>
  );
}

/** /insights — the All Resources hub: featured e-book, live webinar and video, then every resource. */
function AllResources() {
  const [visible, setVisible] = useState(PAGE_SIZE);

  const { ebook, webinar, video, feed } = useMemo(() => {
    const byType = Object.fromEntries(Object.keys(allResources.feedTypes).map((type) => [type, getPosts(type)]));
    const lead = {
      ebook: byType['e-book'][0],
      webinar: getUpcomingEvent(byType.webinars),
      video: byType.video[0],
    };
    const featured = new Set(Object.values(lead));
    return { ...lead, feed: interleave(Object.values(byType).map((posts) => posts.filter((post) => !featured.has(post)))) };
  }, []);

  const shown = feed.slice(0, visible);

  return (
    <InsightsShell
      documentTitle={page.documentTitle}
      title={page.title}
      hero={<PageHero {...contactHero} currentPage="Resources" />}
    >
      {(ebook || webinar || video) && (
        <div className={styles.lead}>
          {ebook && <FeaturedEbook post={ebook} />}
          {(webinar || video) && (
            <div className={styles.side}>
              {webinar && <LiveWebinar post={webinar} />}
              {video && <FeaturedVideo post={video} />}
            </div>
          )}
        </div>
      )}
      {shown.length > 0 && (
        <ul className={styles.grid}>
          {shown.map((post) => (
            <li key={post.id}>
              <FeedCard post={post} />
            </li>
          ))}
        </ul>
      )}
      <p className="visually-hidden" role="status">
        {`Showing ${shown.length} of ${feed.length} resources.`}
      </p>
      {!ebook && !webinar && !video && feed.length === 0 && <p>No resources found.</p>}
      {visible < feed.length && (
        <div className={styles.more}>
          <Button variant="outline" className={styles.moreButton} onClick={() => setVisible((count) => count + PAGE_SIZE)}>
            {allResources.loadMoreLabel}
          </Button>
        </div>
      )}
    </InsightsShell>
  );
}

export default AllResources;
