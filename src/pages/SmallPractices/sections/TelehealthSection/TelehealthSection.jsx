import { spTelehealth } from '../../../../data/smallPractices';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import SpIntro from '../../components/SpIntro/SpIntro';
import styles from './TelehealthSection.module.css';

/** "Telehealth for Small Practices — and the 2028 Medicare Change" (dark) — three dated status cards. */
function TelehealthSection() {
  const { eyebrow, title, description, cards, source } = spTelehealth;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="sp-telehealth-title">
      <SpIntro id="sp-telehealth-title" eyebrow={eyebrow} title={title} description={description} tone="dark" />
      <ul className={styles.cards}>
        {cards.map((card) => (
          <li key={card.title} className={cn(styles.card, styles[card.tone])}>
            <div className={styles.head}>
              <span className={styles.chip}>{card.chip}</span>
              <img src={card.icon.src} alt="" width={card.icon.size[0]} height={card.icon.size[1]} />
            </div>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.text}>{card.text}</p>
          </li>
        ))}
      </ul>
      <p className={styles.source}>
        {source} <span aria-hidden="true">&darr;</span>
      </p>
    </Section>
  );
}

export default TelehealthSection;
