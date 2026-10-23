import { shPrivacy } from '../../../../data/studentHealth';
import Section from '../../../../components/layout/Section/Section';
import ShIntro from '../../components/ShIntro/ShIntro';
import styles from './PrivacySection.module.css';

/** "FERPA, Not HIPAA" — why the privacy statute differs, and the treatment-records exception. */
function PrivacySection() {
  const { eyebrow, title, lead, paragraphs, aside } = shPrivacy;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="sh-privacy-title">
      <ShIntro id="sh-privacy-title" eyebrow={eyebrow} title={title} description={lead} className={styles.intro} />
      <div className={styles.layout}>
        <div>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.text}>
              {paragraph}
            </p>
          ))}
        </div>
        <aside className={styles.aside}>
          <h3 className={styles.asideTitle}>
            <img src={aside.icon.src} alt="" width={aside.icon.size[0]} height={aside.icon.size[1]} />
            {aside.title}
          </h3>
          <p className={styles.asideText}>{aside.text}</p>
        </aside>
      </div>
    </Section>
  );
}

export default PrivacySection;
