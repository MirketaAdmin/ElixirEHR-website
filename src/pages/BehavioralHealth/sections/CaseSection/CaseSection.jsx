import { bhCase } from '../../../../data/behavioralHealth';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import infoIcon from '../../../../assets/behavioral-health/icon-info.png';
import BhIntro from '../../components/BhIntro/BhIntro';
import styles from './CaseSection.module.css';

/** "Why Behavioral Health Needs One Record" — the callout and three numbered cards. */
function CaseSection() {
  const { eyebrow, title, callout, cards } = bhCase;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="bh-case-title">
      <BhIntro id="bh-case-title" eyebrow={eyebrow} title={title} className={styles.intro} />
      <p className={styles.callout}>
        <img src={infoIcon} alt="" width="36" height="36" />
        <span>{callout}</span>
      </p>
      <ol className={styles.grid}>
        {cards.map((card, index) => (
          <li key={card.label} className={styles.card}>
            <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
            <p className={styles.text}>{card.text}</p>
            <p className={cn(styles.label, styles[card.tone])}>
              <img src={card.icon.src} alt="" width={card.icon.size[0]} height={card.icon.size[1]} />
              {card.label}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default CaseSection;
