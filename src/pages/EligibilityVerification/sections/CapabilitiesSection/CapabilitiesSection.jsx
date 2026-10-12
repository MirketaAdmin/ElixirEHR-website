import { evCapabilities } from '../../../../data/eligibilityVerification';
import Section from '../../../../components/layout/Section/Section';
import styles from './CapabilitiesSection.module.css';

function CapabilitiesSection() {
  const { titleLines, description, capabilities } = evCapabilities;

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
        {capabilities.map((capability) => (
          <li key={capability.title} className={styles.card}>
            <span className={styles.icon}>
              <img
                src={capability.icon}
                alt=""
                width={capability.iconSize[0]}
                height={capability.iconSize[1]}
              />
            </span>
            <h3 className={styles.cardTitle}>{capability.title}</h3>
            <p className={styles.cardText}>{capability.description}</p>
            {capability.tag && <span className={styles.tag}>{capability.tag}</span>}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default CapabilitiesSection;
