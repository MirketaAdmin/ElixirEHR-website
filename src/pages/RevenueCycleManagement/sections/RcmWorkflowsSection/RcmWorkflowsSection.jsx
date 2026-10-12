import { rcmWorkflows } from '../../../../data/revenueCycleManagement';
import Section from '../../../../components/layout/Section/Section';
import styles from './RcmWorkflowsSection.module.css';

function RcmWorkflowsSection() {
  const { titleLines, description, organizations } = rcmWorkflows;

  return (
    <Section
      id="rcm-workflows"
      tone="surface"
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
      <ul className={styles.grid}>
        {organizations.map((organization) => (
          <li key={organization.title} className={styles.card}>
            <span className={styles.icon}>
              <img
                src={organization.icon}
                alt=""
                width={organization.iconSize[0]}
                height={organization.iconSize[1]}
              />
            </span>
            <h3 className={styles.cardTitle}>{organization.title}</h3>
            <p className={styles.cardText}>{organization.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default RcmWorkflowsSection;
