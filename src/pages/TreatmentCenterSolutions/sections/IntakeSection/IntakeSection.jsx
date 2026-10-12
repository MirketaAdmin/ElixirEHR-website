import { intakeManagement } from '../../../../data/treatmentCenterSolutions';
import Section from '../../../../components/layout/Section/Section';
import styles from './IntakeSection.module.css';

function IntakeSection() {
  const { titleLines, body, image, highlight } = intakeManagement;

  return (
    <Section tone="white" spacing="none" className={styles.section} containerClassName={styles.inner}>
      <div className={styles.media}>
        <img src={image.src} alt={image.alt} width="560" height="438" className={styles.image} />
        <div className={styles.highlight}>
          <p className={styles.highlightTitle}>
            <span className={styles.highlightIcon}>
              <img src={highlight.icon} alt="" width="20" height="14" />
            </span>
            {highlight.title}
          </p>
          <p className={styles.highlightText}>{highlight.description}</p>
        </div>
      </div>
      <div>
        <h2 className={styles.title}>
          {titleLines.map((line) => (
            <span key={line} className={styles.titleLine}>
              {line}
            </span>
          ))}
        </h2>
        <p className={styles.body}>{body}</p>
      </div>
    </Section>
  );
}

export default IntakeSection;
