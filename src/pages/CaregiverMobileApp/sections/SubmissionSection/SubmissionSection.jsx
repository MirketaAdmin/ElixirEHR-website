import { cmaSubmission } from '../../../../data/caregiverMobileApp';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import styles from './SubmissionSection.module.css';

function SubmissionSection() {
  const { title, description, steps, note } = cmaSubmission;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="cma-submission">
      <h2 id="cma-submission" className={styles.title}>
        {title}
      </h2>
      <p className={styles.description}>{description}</p>

      <div className={styles.card}>
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.number} aria-hidden="true">
                {index + 1}
              </span>
              <p className={cn(styles.stepTitle, step.dark && styles.stepTitleDark)}>{step.title}</p>
              <p className={styles.stepText}>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <p className={styles.note}>
        <img src={note.icon} alt="" width="24" height="24" />
        {note.text}
      </p>
    </Section>
  );
}

export default SubmissionSection;
