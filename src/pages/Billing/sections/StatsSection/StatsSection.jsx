import { billingStats } from '../../../../data/billing';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import styles from './StatsSection.module.css';

/** "Revenue Cycle Management platform that results in significant profitability": three stat cards. */
function StatsSection() {
  const { title, description, items } = billingStats;

  return (
    <Section tone="surface" spacing="none" className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.text} className={cn(styles.card, item.accent === 'purple' && styles.purple)}>
            <img src={item.icon} alt="" width="48" height="48" className={styles.icon} />
            <p className={styles.prefix}>{item.prefix}</p>
            <p className={styles.value}>{item.value}</p>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default StatsSection;
