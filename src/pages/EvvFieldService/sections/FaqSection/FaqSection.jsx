import { useId, useState } from 'react';
import { fsFaq } from '../../../../data/evvFieldService';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import Icon from '../../../../components/ui/Icon/Icon';
import styles from './FaqSection.module.css';

/**
 * "Salesforce EVV FAQs" as this frame draws it: eyebrow and left-aligned title, then the questions
 * as Rose White rows in two columns (first half left; each row's two cards share a height). Each
 * question opens its answer inside the same card; a question without an answer renders as a static
 * row with the chevron as drawn.
 */
function FaqSection() {
  const { eyebrow, title, items } = fsFaq;
  const baseId = useId();
  const [open, setOpen] = useState(() => new Set());
  const half = Math.ceil(items.length / 2);
  // Row by row: question 1 beside question 4, 2 beside 5, and so on.
  const ordered = items.slice(0, half).flatMap((item, index) => [item, items[half + index]]).filter(Boolean);

  function toggle(question) {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(question)) next.delete(question);
      else next.add(question);
      return next;
    });
  }

  return (
    <Section spacing="none" className={styles.section} aria-labelledby="fs-faq">
      <EyebrowHeading id="fs-faq" eyebrow={eyebrow} title={title} className={styles.heading} />
      <ul className={styles.grid}>
        {ordered.map((item, index) => {
          if (!item.answer) {
            return (
              <li key={item.question} className={styles.item}>
                <div className={styles.row}>
                  <h3 className={styles.question}>{item.question}</h3>
                  <Icon name="expandMore" size={20} className={styles.chevron} />
                </div>
              </li>
            );
          }
          const isOpen = open.has(item.question);
          const panelId = `${baseId}-${index}`;
          return (
            <li key={item.question} className={cn(styles.item, isOpen && styles.open)}>
              <h3 className={styles.question}>
                <button
                  type="button"
                  className={styles.row}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(item.question)}
                >
                  <span>{item.question}</span>
                  <Icon name="expandMore" size={20} className={styles.chevron} />
                </button>
              </h3>
              <p id={panelId} className={styles.answer} hidden={!isOpen}>
                {item.answer}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

export default FaqSection;
