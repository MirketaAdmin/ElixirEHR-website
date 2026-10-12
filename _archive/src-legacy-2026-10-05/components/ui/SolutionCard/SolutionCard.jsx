import styles from './SolutionCard.module.css';

function SolutionCard({ icon, title, description }) {
  return (
    <div className={styles.card}>
      <span className={styles.iconWrap}>
        <img src={icon} alt="" width={24} height={24} />
      </span>
      <h3 className={`${styles.title} headline-sm`}>{title}</h3>
      <p className={`${styles.description} body-md`}>{description}</p>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </div>
  );
}

export default SolutionCard;
