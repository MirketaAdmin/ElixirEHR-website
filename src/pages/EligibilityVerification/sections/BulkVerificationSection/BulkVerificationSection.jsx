import { bulkVerification } from '../../../../data/eligibilityVerification';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import styles from './BulkVerificationSection.module.css';

function BulkVerificationSection() {
  const { titleLines, description, options } = bulkVerification;

  return (
    <Section tone="white" spacing="none" className={styles.section}>
      <h2 className={styles.title}>
        {titleLines.map((line) => (
          <span key={line} className={styles.titleLine}>
            {line}
          </span>
        ))}
      </h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.grid}>
        {options.map((option) => (
          <article key={option.title} className={cn(styles.card, styles[option.tone])}>
            <div className={styles.cardTop}>
              <span className={styles.icon}>
                <img src={option.icon} alt="" width={option.iconSize[0]} height={option.iconSize[1]} />
              </span>
              <span className={styles.tag}>{option.tag}</span>
            </div>
            <h3 className={styles.cardTitle}>{option.title}</h3>
            <p className={styles.cardText}>{option.description}</p>
            <p className={styles.example}>
              <code>{option.example}</code>
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default BulkVerificationSection;
