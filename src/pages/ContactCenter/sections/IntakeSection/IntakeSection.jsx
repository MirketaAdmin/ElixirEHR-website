import { ccIntake } from '../../../../data/contactCenter';
import Section from '../../../../components/layout/Section/Section';
import styles from './IntakeSection.module.css';

/** "Simplified Patient Intake with Intelligent Automation": photo, copy, then three features. */
function IntakeSection() {
  const { badge, titleLines, description, image, features } = ccIntake;

  return (
    <Section spacing="none" className={styles.section}>
      <div className={styles.top}>
        <img src={image.src} alt={image.alt} width="552" height="424" className={styles.image} />
        <div>
          <p className={styles.badge}>
            <img src={badge.icon} alt="" width="20" height="20" />
            {badge.label}
          </p>
          <h2 className={styles.title}>
            {titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <ul className={styles.features}>
        {features.map((feature) => (
          <li key={feature.title} className={styles.feature}>
            <img src={feature.icon} alt="" width="56" height="56" className={styles.icon} />
            <div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureText}>{feature.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default IntakeSection;
