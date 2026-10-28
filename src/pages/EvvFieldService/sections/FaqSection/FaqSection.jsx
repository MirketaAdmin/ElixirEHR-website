import { fsFaq } from '../../../../data/evvFieldService';
import Section from '../../../../components/layout/Section/Section';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import Icon from '../../../../components/ui/Icon/Icon';
import styles from './FaqSection.module.css';

/**
 * "Salesforce EVV FAQs" as this frame draws it: eyebrow and left-aligned title, then the questions
 * as Rose White rows in two columns (first half left; each row's two cards share a height). No
 * answers are supplied yet, so the rows are static with the chevron as drawn.
 */
function FaqSection() {
  const { eyebrow, title, items } = fsFaq;
  const half = Math.ceil(items.length / 2);
  // Row by row: question 1 beside question 4, 2 beside 5, and so on.
  const ordered = items.slice(0, half).flatMap((item, index) => [item, items[half + index]]).filter(Boolean);

  return (
    <Section spacing="none" className={styles.section} aria-labelledby="fs-faq">
      <EyebrowHeading id="fs-faq" eyebrow={eyebrow} title={title} className={styles.heading} />
      <ul className={styles.grid}>
        {ordered.map((item) => (
          <li key={item.question} className={styles.item}>
            <h3 className={styles.question}>{item.question}</h3>
            <Icon name="expandMore" size={20} className={styles.chevron} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default FaqSection;
