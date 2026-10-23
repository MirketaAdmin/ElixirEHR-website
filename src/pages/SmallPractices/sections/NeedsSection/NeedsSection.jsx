import { spNeeds } from '../../../../data/smallPractices';
import Section from '../../../../components/layout/Section/Section';
import SpIntro from '../../components/SpIntro/SpIntro';
import styles from './NeedsSection.module.css';

/** "What a Small Practice Actually Needs From an EHR" — six criterion cards (the hero's second CTA lands here). */
function NeedsSection() {
  const { eyebrow, title, description, items } = spNeeds;

  return (
    <Section id="start-here" tone="surface" spacing="none" className={styles.section} aria-labelledby="sp-needs-title">
      <SpIntro id="sp-needs-title" eyebrow={eyebrow} title={title} description={description} />
      <ol className={styles.grid}>
        {items.map((item, index) => (
          <li key={item.title} className={styles.card}>
            <div className={styles.head}>
              <span className={styles.label}>Criterion {String(index + 1).padStart(2, '0')}</span>
              <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default NeedsSection;
