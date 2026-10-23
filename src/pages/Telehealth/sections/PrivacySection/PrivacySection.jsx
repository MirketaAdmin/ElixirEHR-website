import { thPrivacy } from '../../../../data/telehealth';
import Section from '../../../../components/layout/Section/Section';
import ThIntro from '../../components/ThIntro/ThIntro';
import styles from './PrivacySection.module.css';

/** "HIPAA, Audio-Only and Privacy in a Virtual Visit" (dark) — six referenced cards. */
function PrivacySection() {
  const { eyebrow, title, description, items } = thPrivacy;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="th-privacy-title">
      <ThIntro
        id="th-privacy-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        tone="dark"
        className={styles.intro}
      />
      <ul className={styles.grid}>
        {items.map((item, index) => (
          <li key={item.title} className={styles.card}>
            <div className={styles.head}>
              <span className={styles.ref}>REF // SEC-{String(index + 1).padStart(2, '0')}</span>
              <span className={styles.tag}>{item.tag}</span>
            </div>
            <p className={styles.kicker}>{item.kicker}</p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default PrivacySection;
