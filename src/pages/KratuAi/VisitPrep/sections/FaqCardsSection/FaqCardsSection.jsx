import { visitPrepFaq } from '../../../../../data/visitPrep';
import Section from '../../../../../components/layout/Section/Section';
import KrIntro from '../../../components/KrIntro/KrIntro';
import styles from './FaqCardsSection.module.css';

/**
 * "Common Provider & Clinical Questions" as this frame draws it: a centred lime-eyebrow intro, then
 * every question with its answer already shown in white lime-edged cards, two per row (first half
 * left, second half right).
 */
function FaqCardsSection() {
  const { eyebrow, title, description, items } = visitPrepFaq;
  const half = Math.ceil(items.length / 2);
  // Row by row (question 1 beside question 5, …) so each row's cards share a height, as drawn.
  const order = items.slice(0, half).flatMap((item, row) => [item, items[half + row]]).filter(Boolean);

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="vp-faq-title">
      <KrIntro
        id="vp-faq-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        tone="lime"
        align="center"
        className={styles.intro}
      />
      <ul className={styles.grid}>
        {order.map((item) => (
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
