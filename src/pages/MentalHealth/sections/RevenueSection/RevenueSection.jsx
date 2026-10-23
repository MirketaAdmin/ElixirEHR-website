import { mhRevenue } from '../../../../data/mentalHealth';
import Section from '../../../../components/layout/Section/Section';
import BhIntro from '../../../BehavioralHealth/components/BhIntro/BhIntro';
import styles from './RevenueSection.module.css';

/** "Revenue Cycle Management for Mental Health Practices" — nine surface cards. */
function RevenueSection() {
  const { eyebrow, title, description, items } = mhRevenue;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="mh-revenue-title">
      <BhIntro
        id="mh-revenue-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        className={styles.intro}
      />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default RevenueSection;
