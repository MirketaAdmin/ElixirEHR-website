import { Link } from 'react-router-dom';
import { formatLongDate } from '../../../utils/formatDate';
import Container from '../../layout/Container/Container';
import Icon from '../../ui/Icon/Icon';
import locationIcon from '../../../assets/icons/post-location.png';
import calendarIcon from '../../../assets/icons/post-calendar.png';
import styles from './PostHero.module.css';

function Separator() {
  return (
    <li aria-hidden="true" className={styles.separator}>
      <Icon name="chevronRight" size={20} />
    </li>
  );
}

function TypeLink({ type }) {
  return type.listingPath ? <Link to={type.listingPath}>{type.label}</Link> : type.label;
}

/**
 * Post hero (Figma "Press Release" detail frame): the breadcrumb (Home › type › post), the H1
 * and the meta pills. Pills render only for the fields the post has. (The frame's separate
 * "Home › type" trail above it was dropped: it repeated the breadcrumb.)
 */
function PostHero({ post, type }) {
  const date = post.event?.startDate?.slice(0, 10) ?? post.publishDate;
  const pills = [
    post.location && { key: 'location', icon: locationIcon, size: [16, 20], text: post.location },
    { key: 'date', icon: calendarIcon, size: [19, 20], text: <time dateTime={date}>{formatLongDate(date)}</time> },
    post.author && { key: 'author', text: post.author },
    ...(post.details ?? []).map((detail) => ({ key: detail, text: detail })),
  ].filter(Boolean);

  return (
    <section className={styles.hero} data-header-overlap>
      <Container>
        <nav aria-label="Breadcrumb">
          <ol className={styles.breadcrumb}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <Separator />
            <li>
              <TypeLink type={type} />
            </li>
            <Separator />
            <li aria-current="page" className={styles.current}>
              {post.title}
            </li>
          </ol>
        </nav>
        <h1 className={styles.title}>{post.title}</h1>
        <ul className={styles.pills}>
          {pills.map((pill) => (
            <li key={pill.key} className={styles.pill}>
              {pill.icon && (
                <img src={pill.icon} alt="" width={pill.size[0]} height={pill.size[1]} className={styles.pillIcon} />
              )}
              {pill.text}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default PostHero;
