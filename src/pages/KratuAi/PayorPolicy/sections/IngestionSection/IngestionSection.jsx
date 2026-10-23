import { ppIngestion } from '../../../../../data/payorPolicy';
import Section from '../../../../../components/layout/Section/Section';
import { cn } from '../../../../../utils/cn';
import PpIntro from '../../components/PpIntro/PpIntro';
import styles from './IngestionSection.module.css';

/** Stage 01 — how payer documents become billing rules: six numbered steps and the legend. */
function IngestionSection() {
  const { id, eyebrow, title, description, steps, legend } = ppIngestion;

  return (
    <Section id={id} tone="white" spacing="none" className={styles.section} aria-labelledby="pp-ingestion-title">
      <PpIntro id="pp-ingestion-title" eyebrow={eyebrow} title={title} description={description} className={styles.intro} />
      <ol className={styles.grid}>
        {steps.map((step, index) => (
          <li key={step.title} className={cn(styles.card, step.team && styles.team)}>
            <p className={styles.label}>
              {String(index + 1).padStart(2, '0')}
              <span aria-hidden="true">/</span>
              {step.label}
            </p>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
          </li>
        ))}
      </ol>
      <ul className={styles.legend}>
        {legend.map((item) => (
          <li key={item.label} className={styles[item.tone]}>
            {item.label}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default IngestionSection;
