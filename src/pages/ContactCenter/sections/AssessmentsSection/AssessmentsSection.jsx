import { ccAssessments } from '../../../../data/contactCenter';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import styles from './AssessmentsSection.module.css';

/** "Integrated Pre-Admission & Clinical Assessments": centred title and three cards (middle one dark). */
function AssessmentsSection() {
  const { titleLines, description, cards } = ccAssessments;

  return (
    <Section spacing="none" className={styles.section}>
      <h2 className={styles.title}>
        {titleLines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h2>
      <p className={styles.description}>{description}</p>
      <ul className={styles.grid}>
        {cards.map((card) => (
          <li key={card.title} className={cn(styles.card, card.dark && styles.dark)}>
            <img src={card.icon} alt="" width="64" height="64" className={styles.icon} />
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default AssessmentsSection;
