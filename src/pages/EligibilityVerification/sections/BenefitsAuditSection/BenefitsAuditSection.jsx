import { benefitsAudit } from '../../../../data/eligibilityVerification';
import Section from '../../../../components/layout/Section/Section';
import ImagePlaceholder from '../../../../components/ui/ImagePlaceholder/ImagePlaceholder';
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
      <ImagePlaceholder className={styles.media} />
    </Section>
  );
}

export default BenefitsAuditSection;
