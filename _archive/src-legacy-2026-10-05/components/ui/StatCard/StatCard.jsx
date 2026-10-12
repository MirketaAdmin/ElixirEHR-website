import styles from './StatCard.module.css';

function StatCard({ icon, value, description }) {
  return (
    <div className={styles.card}>
      <span className={styles.iconWrap}>
        <img src={icon} alt="" width={20} height={20} />
      </span>
      <span className={`${styles.value} headline-lg`}>{value}</span>
      <p className={`${styles.description} body-md`}>{description}</p>
    </div>
  );
}

export default StatCard;
