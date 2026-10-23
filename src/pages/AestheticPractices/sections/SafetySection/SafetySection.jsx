import { aeSafety } from '../../../../data/aestheticPractices';
import Section from '../../../../components/layout/Section/Section';
import AeIntro from '../../components/AeIntro/AeIntro';
import styles from './SafetySection.module.css';

/** "Product, Lot and Expiry Tracking for Injectables" (dark) — the counterfeit Botox case and Elixir's capture. */
function SafetySection() {
  const { eyebrow, title, description, paragraphs, callout } = aeSafety;
  const [before, after] = paragraphs;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="ae-safety-title">
      <div className={styles.layout}>
        <AeIntro id="ae-safety-title" eyebrow={eyebrow} title={title} description={description} tone="dark" className={styles.intro} />
        <div>
          <p className={styles.text}>{before}</p>
          <p className={styles.callout}>
            <img src={callout.icon.src} alt="" width={callout.icon.size[0]} height={callout.icon.size[1]} />
            <span>{callout.text}</span>
          </p>
          <p className={styles.text}>{after}</p>
        </div>
      </div>
    </Section>
  );
}

export default SafetySection;
