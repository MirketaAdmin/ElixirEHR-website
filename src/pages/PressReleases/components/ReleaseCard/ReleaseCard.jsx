import { Link } from 'react-router-dom';
import { categoryTones } from '../../../../data/pressReleases';
import { getPostPath } from '../../../../posts';
import { cn } from '../../../../utils/cn';
import { formatLongDate } from '../../../../utils/formatDate';
import Icon from '../../../../components/ui/Icon/Icon';
import styles from './ReleaseCard.module.css';

function ReleaseCard({ release }) {
  const { excerpt, publishDate: date, category, cardImage: image } = release;
  const title = release.listingTitle ?? release.title;

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img src={image.src} alt={image.alt} width="361" height="224" className={styles.image} />
        {category && (
          <span className={cn(styles.badge, styles[categoryTones[category] ?? 'lime'])}>{category}</span>
        )}
      </div>
      <div className={styles.body}>
        <time dateTime={date} className={styles.date}>
          {formatLongDate(date)}
        </time>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <Link to={getPostPath(release)} className={styles.link}>
          Read More<span className="visually-hidden">: {title}</span>
          <Icon name="chevronRight" size={20} />
        </Link>
      </div>
    </article>
  );
}

export default ReleaseCard;
