import { shFaq } from '../../../../data/studentHealth';
import Section from '../../../../components/layout/Section/Section';
import styles from './FaqCardsSection.module.css';

/**
 * FAQ as this frame draws it: a yellow "Questions" eyebrow, left-aligned title and intro, then every
 * answer open in Rose White cards with a lime top edge — the first half of the questions down the
 * left column, the rest down the right; each row of cards starts level (cards keep their own height).
 */
function FaqCardsSection() {
  const { eyebrow, title, description, items } = shFaq;
  const half = Math.ceil(items.length / 2);
  const ordered = items.slice(0, half).flatMap((item, index) => [item, items[half + index]]).filter(Boolean);

  return (
    <Section spacing="none" className={styles.section} aria-labelledby="sh-faq-title">
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id="sh-faq-title" className={styles.title}>
        {title}
      </h2>
      <p className={styles.description}>{description}</p>
      <ul className={styles.grid}>
        {ordered.map((item) => (
          <li key={item.question} className={styles.card}>
            <h3 className={styles.question}>{item.question}</h3>
            <p className={styles.answer}>{item.answer}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default FaqCardsSection;
