import { spObligations } from '../../../../data/smallPractices';
import Section from '../../../../components/layout/Section/Section';
import SpIntro from '../../components/SpIntro/SpIntro';
import styles from './ObligationsSection.module.css';

/** "Good Faith Estimates and e-Prescribing Thresholds" — two rule cards. */
function ObligationsSection() {
  const { eyebrow, title, description, cards } = spObligations;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="sp-obligations-title">
      <SpIntro id="sp-obligations-title" eyebrow={eyebrow} title={title} description={description} />
      <div className={styles.cards}>
        {cards.map((card) => (
          <div key={card.title} className={styles.card}>
            <h3 className={styles.title}>
              <img src={card.icon.src} alt="" width={card.icon.size[0]} height={card.icon.size[1]} />
              {card.title}
            </h3>
            <p className={styles.lead}>{card.lead}</p>
            <ul className={styles.list}>
              {card.items.map((item) => (
                <li key={item.term}>
                  <strong>{item.term}</strong> {item.text}
                </li>
              ))}
            </ul>
            <p className={styles.source}>{card.source}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default ObligationsSection;
