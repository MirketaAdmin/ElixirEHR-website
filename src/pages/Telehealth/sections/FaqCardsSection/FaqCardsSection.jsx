import { thFaq } from '../../../../data/telehealth';
import Section from '../../../../components/layout/Section/Section';
import ThIntro from '../../components/ThIntro/ThIntro';
import styles from './FaqCardsSection.module.css';

const MONO_NUMBER = (index) => `Q // ${String(index + 1).padStart(2, '0')}`;

/**
 * FAQ as this frame draws it: the page's dotted "Questions" intro, then every answer open in white
 * rounded cards numbered "Q // 01" — questions 1–4 down the left column, the rest down the right
 * (each column stacks at its own pace).
 */
function FaqCardsSection() {
  const { eyebrow, title, description, items } = thFaq;
  const half = Math.ceil(items.length / 2);
  const columns = [items.slice(0, half), items.slice(half)];

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="th-faq-title">
      <ThIntro
        id="th-faq-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        layout="stacked"
        className={styles.intro}
      />
      <div className={styles.columns}>
        {columns.map((column, columnIndex) => (
          <ol key={columnIndex} className={styles.list} start={columnIndex * half + 1}>
            {column.map((item, index) => (
              <li key={item.question} className={styles.card}>
                <p className={styles.number} aria-hidden="true">
                  {MONO_NUMBER(columnIndex * half + index)}
                </p>
                <h3 className={styles.question}>{item.question}</h3>
                <p className={styles.answer}>{item.answer}</p>
              </li>
            ))}
          </ol>
        ))}
      </div>
    </Section>
  );
}

export default FaqCardsSection;
