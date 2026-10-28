import { benefitsAudit } from '../../../../data/eligibilityVerification';
import Section from '../../../../components/layout/Section/Section';
import styles from './BenefitsAuditSection.module.css';

function BenefitsAuditSection() {
  const { titleLines, paragraphs } = benefitsAudit;

  return (
    <Section tone="surface" spacing="none" className={styles.section} containerClassName={styles.inner}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          {titleLines.map((line) => (
            <span key={line} className={styles.titleLine}>
              {line}
            </span>
          ))}
        </h2>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.body}>
            {paragraph}
          </p>
        ))}
      </div>
      <img src={benefitsAudit.image.src} alt={benefitsAudit.image.alt} width="552" height="398" className={styles.media} />
    </Section>
  );
}

export default BenefitsAuditSection;
