import { dmWorkflow } from '../../../../data/denialManagement';
import Section from '../../../../components/layout/Section/Section';
import DmSectionHeading from '../../components/DmSectionHeading/DmSectionHeading';
import styles from './WorkflowSection.module.css';

function WorkflowSection() {
  return (
    <Section tone="surface" spacing="none" className={styles.section}>
      <DmSectionHeading badge={dmWorkflow.badge} title={dmWorkflow.title} description={dmWorkflow.description} />
      <ol className={styles.steps}>
        {dmWorkflow.steps.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.number}>{index + 1}</span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default WorkflowSection;
