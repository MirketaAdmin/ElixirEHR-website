import Badge from '../Badge/Badge';
import styles from './ResourceCard.module.css';

function ResourceCard({ image, tag, date, title, cta }) {
  return (
    <article className={styles.card}>
      <img
        src={image}
        alt={title}
        className={styles.image}
        width={361}
        height={224}
        loading="lazy"
      />
      <div className={styles.body}>
        <div className={styles.meta}>
          <Badge variant="secondary">{tag}</Badge>
          <span className={`${styles.date} label-sm`}>{date}</span>
        </div>
        <h3 className={`${styles.title} headline-sm`}>{title}</h3>
        <a href="#" className={`${styles.link} label-md`}>
          {cta} →
        </a>
      </div>
    </article>
  );
}

export default ResourceCard;
