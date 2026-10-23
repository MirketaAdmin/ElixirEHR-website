import { epaWorkflow } from '../../../../data/electronicPriorAuthorization';
import Section from '../../../../components/layout/Section/Section';
import EpaHeading from '../../components/EpaHeading/EpaHeading';
import styles from './WorkflowSection.module.css';

/** "The Electronic Prior Authorization Workflow" — ten steps in two rows of five. */
function WorkflowSection() {
  const { title, description, steps } = epaWorkflow;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="epa-workflow-title">
      <EpaHeading id="epa-workflow-title" title={title} description={description} tone="ink" className={styles.heading} />
      <ol className={styles.grid}>
        {steps.map((step, index) => (
          <li key={step.title} className={styles.card}>
            <p className={styles.step}>Step {index + 1}</p>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default WorkflowSection;
