import styles from './FeatureCard.module.css';

function FeatureCard({ icon, title, description, tone = 'light' }) {
  return (
    <div className={`${styles.card} ${styles[tone]}`}>
      {icon && <span className={styles.iconWrap}>{icon}</span>}
      <h3 className={`${styles.title} headline-sm`}>{title}</h3>
      <p className={`${styles.description} body-md`}>{description}</p>
    </div>
  );
}

export default FeatureCard;
