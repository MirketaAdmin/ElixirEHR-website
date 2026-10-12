import { buyerChecklist } from '../../../../data/eligibilityVerification';
import Section from '../../../../components/layout/Section/Section';
import checkIcon from '../../../../assets/eligibility-verification/icon-check-filled-large.png';
import styles from './BuyerChecklistSection.module.css';

function BuyerChecklistSection() {
  const { titleLines, description, criteria } = buyerChecklist;

  return (
    <Section tone="surface" spacing="none" className={styles.section} containerClassName={styles.inner}>
      <h2 className={styles.title}>
        {titleLines.map((line) => (
          <span key={line} className={styles.titleLine}>
            {line}
          </span>
        ))}
      </h2>
      <p className={styles.description}>{description}</p>
      <ul className={styles.grid}>
        {criteria.map((criterion) => (
          <li key={criterion.title} className={styles.card}>
            <img src={checkIcon} alt="" width="32" height="33" className={styles.icon} />
            <div>
              <h3 className={styles.cardTitle}>{criterion.title}</h3>
              <p className={styles.cardText}>{criterion.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default BuyerChecklistSection;
