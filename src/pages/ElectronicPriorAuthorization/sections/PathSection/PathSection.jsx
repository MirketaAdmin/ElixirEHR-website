import { epaPath } from '../../../../data/electronicPriorAuthorization';
import Section from '../../../../components/layout/Section/Section';
import EpaHeading from '../../components/EpaHeading/EpaHeading';
import styles from './PathSection.module.css';

/** "From Clinical Need to Authorized Care" — the five numbered steps of the connected path. */
function PathSection() {
  const { title, description, steps } = epaPath;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="epa-path-title">
      <EpaHeading id="epa-path-title" title={title} description={description} className={styles.heading} />
      <ol className={styles.grid}>
        {steps.map((step, index) => (
          <li key={step.title} className={styles.card}>
            <span className={styles.number} aria-hidden="true">
              {index + 1}
            </span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default PathSection;
