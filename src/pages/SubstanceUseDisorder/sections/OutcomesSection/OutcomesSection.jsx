import { sudOutcomes } from '../../../../data/substanceUseDisorder';
import Section from '../../../../components/layout/Section/Section';
import SudIntro from '../../components/SudIntro/SudIntro';
import styles from './OutcomesSection.module.css';

/** "Discharge Planning, Recovery Monitoring and Outcome-Based Treatment" — six white cards. */
function OutcomesSection() {
  const { eyebrow, title, description, items } = sudOutcomes;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="sud-outcomes-title">
      <SudIntro id="sud-outcomes-title" eyebrow={eyebrow} title={title} description={description} />
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

export default OutcomesSection;
