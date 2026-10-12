import styles from './TestimonialCard.module.css';

function TestimonialCard({ photo, name, role, quote, tone = 'dark' }) {
  return (
    <figure className={`${styles.card} ${styles[tone]}`}>
      <span className={styles.quoteMark} aria-hidden="true">
        &ldquo;
      </span>
      <blockquote className={`${styles.quote} body-lg`}>{quote}</blockquote>
      <figcaption className={styles.author}>
        <img
          src={photo}
          alt={`Portrait of ${name}, ${role}`}
          className={styles.avatar}
          width={48}
          height={48}
          loading="lazy"
        />
        <div>
          <p className={`${styles.name} label-md`}>{name}</p>
          <p className={`${styles.role} label-sm`}>{role}</p>
        </div>
      </figcaption>
      <a href="#" className={`${styles.link} label-md`}>
        Hear Story
      </a>
    </figure>
  );
}

export default TestimonialCard;
