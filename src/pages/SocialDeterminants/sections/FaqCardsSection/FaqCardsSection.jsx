import { useId, useState } from 'react';
import { sdFaq } from '../../../../data/socialDeterminants';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import Icon from '../../../../components/ui/Icon/Icon';
import styles from './FaqCardsSection.module.css';

/**
 * FAQ as this frame draws it: a lime "Questions" eyebrow, left-aligned title and intro, then the
 * questions as white rounded accordion cards in two columns (first half left), each row starting level. The
 * answered question starts open, as drawn; questions without an answer yet render as static rows.
 */
function FaqCardsSection() {
  const { eyebrow, title, description, items } = sdFaq;
  const baseId = useId();
  const half = Math.ceil(items.length / 2);
  // Row by row (question 1 beside question 4, …) so each row's cards start level, as drawn.
  const order = Array.from({ length: half }, (_, row) => [row, row + half]).flat().filter((index) => index < items.length);
  const [closed, setClosed] = useState(() => new Set());

  function toggle(index) {
    setClosed((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="sd-faq-title">
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id="sd-faq-title" className={styles.title}>
        {title}
      </h2>
      <p className={styles.description}>{description}</p>
      <ul className={styles.columns}>
        {order.map((index) => {
          const item = items[index];
          if (!item.answer) {
            return (
              <li key={item.question} className={styles.item}>
                <h3 className={styles.question}>
                  <span>{item.question}</span>
                  <Icon name="expandMore" size={22} className={styles.chevron} />
                </h3>
              </li>
            );
          }
          const open = !closed.has(index);
          const panelId = `${baseId}-${index}`;
          return (
            <li key={item.question} className={cn(styles.item, open && styles.open)}>
              <h3>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                >
                  <span>{item.question}</span>
                  <Icon name="expandMore" size={22} className={styles.chevron} />
                </button>
              </h3>
              <div id={panelId} className={styles.answer} hidden={!open}>
                <p>{item.answer}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

export default FaqCardsSection;
