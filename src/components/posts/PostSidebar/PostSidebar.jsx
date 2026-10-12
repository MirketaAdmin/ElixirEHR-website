import { Link } from 'react-router-dom';
import { getLatestPosts, getPostPath } from '../../../posts';
import { formatShortDate } from '../../../utils/formatDate';
import mailIcon from '../../../assets/icons/post-mail.png';
import phoneIcon from '../../../assets/icons/post-phone.png';
import arrowIcon from '../../../assets/icons/post-arrow.png';
import styles from './PostSidebar.module.css';

function MediaContact({ contact }) {
  const { title, name, role, email, phone } = contact;
  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.name}>{name}</p>
      {role && <p className={styles.role}>{role}</p>}
      <ul className={styles.contactList}>
        {email && (
          <li>
            <img src={mailIcon} alt="" width="16" height="12" />
            <a href={`mailto:${email}`}>
              <span className="visually-hidden">Email: </span>
              {email}
            </a>
          </li>
        )}
        {phone && (
          <li>
            <img src={phoneIcon} alt="" width="14" height="14" />
            <a href={`tel:${phone.replace(/[^\d+]/g, '')}`}>
              <span className="visually-hidden">Phone: </span>
              {phone}
            </a>
          </li>
        )}
      </ul>
    </section>
  );
}

function LatestPosts({ post, type }) {
  const latest = getLatestPosts(post);
  if (!latest.length) return null;

  return (
    <section className={styles.latest}>
      <h2 className={styles.heading}>Latest {type.plural}</h2>
      <ul className={styles.latestList}>
        {latest.map((item) => (
          <li key={item.id}>
            <time dateTime={item.publishDate} className={styles.latestDate}>
              {formatShortDate(item.publishDate)}
            </time>
            <h3 className={styles.latestTitle}>
              <Link to={getPostPath(item)}>{item.title}</Link>
            </h3>
          </li>
        ))}
      </ul>
      {type.listingPath && (
        <Link to={type.listingPath} className={styles.viewAll}>
          View All {type.plural}
          <img src={arrowIcon} alt="" width="10" height="10" />
        </Link>
      )}
    </section>
  );
}

function PostTags({ tags }) {
  return (
    <section className={styles.tagsSection}>
      <h2 className={styles.heading}>Categories</h2>
      <ul className={styles.tags}>
        {tags.map((tag) => (
          <li key={tag} className={styles.tag}>
            {tag}
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Right column: media contact (when the post has one), latest posts of the type, tags. */
function PostSidebar({ post, type }) {
  return (
    <aside className={styles.sidebar}>
      {post.mediaContact && <MediaContact contact={post.mediaContact} />}
      <LatestPosts post={post} type={type} />
      {post.tags?.length > 0 && <PostTags tags={post.tags} />}
    </aside>
  );
}

export default PostSidebar;
