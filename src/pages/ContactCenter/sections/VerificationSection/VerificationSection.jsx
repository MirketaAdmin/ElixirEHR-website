import { ccVerification } from '../../../../data/contactCenter';
import Section from '../../../../components/layout/Section/Section';
import Icon from '../../../../components/ui/Icon/Icon';
import styles from './VerificationSection.module.css';

/** "AI-Driven Insurance Verification & Eligibility Checks": copy with three checks, tilted photo. */
function VerificationSection() {
  const { badge, titleLines, description, items, image } = ccVerification;

  return (
    <Section tone="surface" spacing="none" className={styles.section} containerClassName={styles.inner}>
      <div>
        <p className={styles.badge}>
          <Icon name="shieldCheck" size={18} />
          {badge}
        </p>
        <h2 className={styles.title}>
          {titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className={styles.description}>{description}</p>
        <ul className={styles.items}>
          {items.map((item) => (
            <li key={item} className={styles.item}>
              <span className={styles.check}>
                <Icon name="check" size={18} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <img src={image.src} alt={image.alt} width="576" height="752" className={styles.image} />
    </Section>
  );
}

export default VerificationSection;
