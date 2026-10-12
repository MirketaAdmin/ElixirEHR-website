import { evStats } from '../../../../data/eligibilityVerification';
import Section from '../../../../components/layout/Section/Section';
import styles from './StatsSection.module.css';

function StatsSection() {
  const { titleLines, description, stats } = evStats;

  return (
    <Section tone="dark" spacing="none" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {titleLines.map((line) => (
            <span key={line} className={styles.titleLine}>
              {line}
            </span>
          ))}
        </h2>
        <p className={styles.description}>{description}</p>
      </div>
      <ul className={styles.grid}>
        {stats.map((stat) => (
          <li key={stat.value} className={styles.card}>
            <div className={styles.cardTop}>
              <p className={styles.value}>{stat.value}</p>
              <img src={stat.icon} alt="" width={stat.iconSize[0]} height={stat.iconSize[1]} />
            </div>
            <p className={styles.label}>{stat.label}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default StatsSection;
