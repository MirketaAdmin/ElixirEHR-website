import { ehrInfoCards } from '../../../../data/electronicHealthRecord';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import styles from './InfoCardsSection.module.css';

function InfoCardsSection() {
  return (
    <Section tone="surface" spacing="none" className={styles.section}>
      <div className={styles.grid}>
        {ehrInfoCards.map((card) => (
          <article key={card.title} className={cn(styles.card, styles[card.tone])}>
            <h2 className={styles.title}>{card.title}</h2>
            {card.paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </article>
        ))}
      </div>
    </Section>
  );
}

export default InfoCardsSection;
