import { epaAi } from '../../../../data/electronicPriorAuthorization';
import Section from '../../../../components/layout/Section/Section';
import EpaHeading from '../../components/EpaHeading/EpaHeading';
import styles from './AiSection.module.css';

/** "AI-Powered Prior Authorization" — the AI Co-Pilot's guidance at four lifecycle stages. */
function AiSection() {
  const { title, description, stages, footnote } = epaAi;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="epa-ai-title">
      <EpaHeading id="epa-ai-title" title={title} description={description} tone="dark" className={styles.heading} />
      <ul className={styles.grid}>
        {stages.map((stage) => (
          <li key={stage.title} className={styles.card}>
            <h3 className={styles.title}>{stage.title}</h3>
            <ul className={styles.items}>
              {stage.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.outcome}>{stage.outcome}</p>
          </li>
        ))}
      </ul>
      <p className={styles.footnote}>{footnote}</p>
    </Section>
  );
}

export default AiSection;
