import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { insightsPages, webinarCategories } from '../../../data/insights';
import { getPostPath, getPosts } from '../../../posts';
import Icon from '../../../components/ui/Icon/Icon';
import Pagination from '../../../components/ui/Pagination/Pagination';
import InsightsShell from '../components/InsightsShell/InsightsShell';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';
import WeeklyBriefing from '../components/WeeklyBriefing/WeeklyBriefing';
import ListingStatus from '../components/ListingStatus/ListingStatus';
import { categoryItems, getUpcomingEvent, useResourceListing } from '../useResourceListing';
import styles from './WebinarListing.module.css';

const page = insightsPages.webinars;
const byCategory = (post, category) => post.category === category;

const eventDate = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'America/New_York',
});

/** "Register Now": the post's registration URL when it has one, otherwise the webinar's page. */
function RegisterLink({ post }) {
  const url = post.event?.registerUrl;
  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" className={styles.register}>
      Register Now<span className="visually-hidden">: {post.title}</span>
    </a>
  ) : (
    <Link to={getPostPath(post)} className={styles.register}>
      Register Now<span className="visually-hidden">: {post.title}</span>
    </Link>
  );
}

function UpcomingWebinar({ post }) {
  return (
    <article className={styles.featured}>
      <div className={styles.featuredMedia}>
        <img src={post.cardImage.src} alt={post.cardImage.alt} className={styles.featuredImage} />
        <span className={styles.liveTag}>Live Upcoming</span>
        <Link to={getPostPath(post)} className={styles.featuredPlay} aria-label={`Open webinar: ${post.title}`}>
          <Icon name="play" size={24} />
        </Link>
      </div>
      <div className={styles.featuredBody}>
        <p className={styles.when}>
          <Icon name="calendar" size={14} />
          <time dateTime={post.event.startDate}>
            {eventDate.format(new Date(post.event.startDate))}
            {post.event.timeLabel && ` • ${post.event.timeLabel}`}
          </time>
        </p>
        <h3 className={styles.featuredTitle}>{post.title}</h3>
        <p className={styles.featuredText}>{post.excerpt}</p>
        {post.speaker && (
          <div className={styles.speaker}>
            {post.speaker.avatar && <img src={post.speaker.avatar} alt="" width="40" height="40" />}
            <p>
              <span className={styles.speakerName}>{post.speaker.name}</span>
              {post.speaker.role && <span className={styles.speakerRole}>{post.speaker.role}</span>}
            </p>
          </div>
        )}
        <RegisterLink post={post} />
      </div>
    </article>
  );
}

function OnDemandCard({ post }) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img src={post.cardImage.src} alt={post.cardImage.alt} className={styles.image} />
        {post.label && <span className={styles.tag}>{post.label}</span>}
        {post.duration && <span className={styles.duration}>{post.duration}</span>}
        <Link to={getPostPath(post)} className={styles.play} aria-label={`Watch webinar: ${post.title}`}>
          <Icon name="play" size={20} />
        </Link>
      </div>
      <div className={styles.body}>
        <h4 className={styles.title}>{post.title}</h4>
        <p className={styles.text}>{post.excerpt}</p>
        {post.views && (
          <p className={styles.views}>
            <Icon name="eye" size={14} />
            {post.views} Views
          </p>
        )}
      </div>
    </article>
  );
}

/** /insights/webinars — the next upcoming webinar, then the on-demand recordings. */
function WebinarListing() {
  const posts = useMemo(() => getPosts('webinars'), []);
  const listing = useResourceListing(posts, { pageSize: 4, filterFn: byCategory });
  const upcoming = getUpcomingEvent(listing.results);
  const onDemand = listing.results.filter((post) => post !== upcoming);
  const totalPages = Math.max(1, Math.ceil(onDemand.length / 4));
  const current = Math.min(listing.page, totalPages);

  const aside = (
    <>
      <CategoryFilter
        title={page.categoriesTitle}
        items={categoryItems(posts, webinarCategories)}
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
      <ListingStatus count={listing.results.length} noun="webinar" />
      {upcoming && current === 1 && <UpcomingWebinar post={upcoming} />}
      {onDemand.length > 0 && (
        <section className={styles.onDemand} aria-labelledby="webinars-on-demand">
          <h3 id="webinars-on-demand" className={styles.onDemandTitle}>
            {page.onDemandTitle}
          </h3>
          <ul className={styles.grid}>
            {onDemand.slice((current - 1) * 4, current * 4).map((post) => (
              <li key={post.id}>
                <OnDemandCard post={post} />
              </li>
            ))}
          </ul>
        </section>
      )}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <Pagination page={current} totalPages={totalPages} onChange={listing.setPage} label="Webinar pages" />
        </div>
      )}
    </InsightsShell>
  );
}

export default WebinarListing;
