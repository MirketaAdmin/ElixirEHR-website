import { successStoriesStats } from '../../../../data/successStories';
import styles from './StatsStrip.module.css';

/** Four headline figures under the hero, as shown in the frame. */
function StatsStrip() {
  return (
    <section className={styles.section} aria-label="Results at a glance">
      <dl className={styles.grid}>
        {successStoriesStats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <dt className={styles.label}>{stat.label}</dt>
            <dd className={styles.value}>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default StatsStrip;
