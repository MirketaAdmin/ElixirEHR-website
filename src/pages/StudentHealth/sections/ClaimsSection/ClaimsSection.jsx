import { shClaims } from '../../../../data/studentHealth';
import Section from '../../../../components/layout/Section/Section';
import ShIntro from '../../components/ShIntro/ShIntro';
import ShNote from '../../components/ShNote/ShNote';
import styles from './ClaimsSection.module.css';

/** "Claims, Clearinghouses and Remittance" (dark) — generate, scrub, reconcile, and the filing-window note. */
function ClaimsSection() {
  const { eyebrow, title, description, steps, note } = shClaims;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="sh-claims-title">
      <ShIntro id="sh-claims-title" eyebrow={eyebrow} title={title} description={description} tone="dark" className={styles.intro} />
      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.number} aria-hidden="true">
              {index + 1}
            </span>
            <h3
              className={styles.title}
              style={step.titleWidth && { '--sh-step-title-width': `${step.titleWidth}px` }}
            >
              {step.title}
            </h3>
            <p className={styles.text}>{step.text}</p>
          </li>
        ))}
      </ol>
      <ShNote note={note} tone="dark" className={styles.note} />
    </Section>
  );
}

export default ClaimsSection;
