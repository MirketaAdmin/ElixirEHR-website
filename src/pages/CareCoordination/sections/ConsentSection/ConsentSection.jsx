import { ccConsent } from '../../../../data/careCoordination';
import Section from '../../../../components/layout/Section/Section';
import BhIntro from '../../../BehavioralHealth/components/BhIntro/BhIntro';
import styles from './ConsentSection.module.css';

/** "Consent as Infrastructure, Not Paperwork" — six numbered surface cards. */
function ConsentSection() {
  const { eyebrow, title, description, items } = ccConsent;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="cc-consent-title">
      <BhIntro id="cc-consent-title" eyebrow={eyebrow} title={title} description={description} className={styles.intro} />
      <ol className={styles.grid}>
        {items.map((item, index) => (
          <li key={item.title} className={styles.card}>
            <span className={styles.number}>{index + 1}</span>
            <h3
              className={styles.title}
              style={item.titleWidth ? { '--title-width': `${item.titleWidth}px` } : undefined}
            >
              {item.title}
            </h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default ConsentSection;
