import { evHowItWorks } from '../../../../data/eligibilityVerification';
import Section from '../../../../components/layout/Section/Section';
import styles from './HowItWorksSection.module.css';

function HowItWorksSection() {
  const { titleLines, description, steps } = evHowItWorks;

  return (
    <Section
      id="how-it-works"
      tone="white"
      spacing="none"
      className={styles.section}
      containerClassName={styles.inner}
    >
      <h2 className={styles.title}>
        {titleLines.map((line) => (
          <span key={line} className={styles.titleLine}>
            {line}
          </span>
        ))}
      </h2>
      <p className={styles.description}>{description}</p>
      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.number}>{index + 1}</span>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepText}>{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default HowItWorksSection;
