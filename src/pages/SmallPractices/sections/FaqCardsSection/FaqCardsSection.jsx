import { spFaq } from '../../../../data/smallPractices';
import Section from '../../../../components/layout/Section/Section';
import styles from './FaqCardsSection.module.css';

/**
 * FAQ as this frame draws it: a lavender "Questions" pill, left-aligned title and intro, then every
 * answer open in numbered white cards with a lime top edge, two per row in reading order (1 and 2
 * across the first row, and so on); each row's cards share a height.
 */
function FaqCardsSection() {
  const { eyebrow, title, description, items } = spFaq;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="sp-faq-title">
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id="sp-faq-title" className={styles.title}>
        {title}
      </h2>
      <p className={styles.description}>{description}</p>
      <ol className={styles.grid}>
        {items.map((item, index) => (
          <li key={item.question} className={styles.card}>
            <h3 className={styles.question}>
              {index + 1}. {item.question}
            </h3>
            <p className={styles.answer}>{item.answer}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default FaqCardsSection;
