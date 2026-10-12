import { financialPerformance } from '../../../../data/treatmentCenterSolutions';
import Section from '../../../../components/layout/Section/Section';
import styles from './FinancialPerformanceSection.module.css';

function FinancialPerformanceSection() {
  const { titleLines, description, cards } = financialPerformance;

  return (
    <Section tone="white" spacing="none" className={styles.section} containerClassName={styles.inner}>
      <h2 className={styles.title}>
        {titleLines.map((line) => (
          <span key={line} className={styles.titleLine}>
            {line}
          </span>
        ))}
      </h2>
      <p className={styles.description}>{description}</p>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <li key={card.label} className={styles.card}>
            <span className={styles.icon}>
              <img src={card.icon} alt="" width={card.iconSize[0]} height={card.iconSize[1]} />
            </span>
            <span className={styles.label}>{card.label}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default FinancialPerformanceSection;
