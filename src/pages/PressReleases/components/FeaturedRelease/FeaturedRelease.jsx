import { Link } from 'react-router-dom';
import { getPostPath } from '../../../../posts';
import { formatLongDate } from '../../../../utils/formatDate';
import Icon from '../../../../components/ui/Icon/Icon';
import styles from './FeaturedRelease.module.css';

/** The newest release in the current results, shown as the frame's "Top News" block. */
function FeaturedRelease({ release }) {
  const { excerpt, publishDate: date, cardImage: image } = release;
  const title = release.listingTitle ?? release.title;

  return (
    <article className={styles.featured}>
      <div className={styles.card}>
        <img src={image.src} alt={image.alt} width="627" height="460" className={styles.image} />
        <div className={styles.body}>
          <p className={styles.meta}>
            <span className={styles.badge}>Top News</span>
            <time dateTime={date} className={styles.date}>
              {formatLongDate(date)}
            </time>
          </p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.excerpt}>{excerpt}</p>
          <Link to={getPostPath(release)} className={styles.cta}>
            Read Full Article<span className="visually-hidden">: {title}</span>
            <Icon name="arrowRight" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default FeaturedRelease;
