import { vbClocks } from '../../../../data/valueBasedCare';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import VbIntro from '../../components/VbIntro/VbIntro';
import styles from './ClocksSection.module.css';

/** "Initiation and Engagement: Two Clocks, Not One": three outlined cards on Deep Purple and a footnote. */
function ClocksSection() {
  const { eyebrow, title, description, cards, footnote } = vbClocks;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="vb-clocks">
      <VbIntro id="vb-clocks" eyebrow={eyebrow} title={title} description={description} tone="dark" />
      <ul className={styles.grid}>
        {cards.map((card) => (
          <li key={card.label} className={styles.card}>
            <p className={cn(styles.label, styles[card.tone])}>{card.label}</p>
            <h3 className={styles.title}>{card.title}</h3>
            <ul className={styles.points}>
              {card.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className={styles.footnote}>{footnote}</p>
    </Section>
  );
}

export default ClocksSection;
