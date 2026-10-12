import { useId, useState } from 'react';
import { cn } from '../../../utils/cn';
import Section from '../../layout/Section/Section';
import Icon from '../../ui/Icon/Icon';
import RichText from '../../ui/RichText/RichText';
import styles from './FaqSection.module.css';

/**
 * The site's one FAQ section (Figma RCM "Frequently Asked Questions"): centred title and
 * description, then the questions as accordion cards in two columns (first half left, second
 * half right). Pages pass their own `items` — [{ question, answer }], where `answer` is a string
 * or RichText segments — so only the content changes between pages.
 *
 * Every page's FAQ uses this one design unchanged. An item without an `answer` (copy not supplied
 * yet) renders as a static row — chevron as drawn, but nothing to open.
 *
 * Each question is a button (aria-expanded / aria-controls) that opens its answer inside the same
 * card; items open and close independently.
 */
function FaqSection({ title = 'Frequently Asked Questions', description, items, className }) {
  const baseId = useId();
  const [open, setOpen] = useState(() => new Set());
  const half = Math.ceil(items.length / 2);
  const columns = [items.slice(0, half), items.slice(half)].filter((column) => column.length);

  function toggle(index) {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <Section tone="surface" spacing="none" className={cn(styles.section, className)} containerClassName={styles.inner}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {description && <p className={styles.description}>{description}</p>}
      <div className={styles.columns}>
        {columns.map((column, columnIndex) => (
          <ul key={columnIndex} className={styles.list}>
            {column.map((item, rowIndex) => {
              const index = columnIndex * half + rowIndex;
              const isOpen = open.has(index);
              const buttonId = `${baseId}-question-${index}`;
              const panelId = `${baseId}-answer-${index}`;
              if (item.answer == null) {
                return (
                  <li key={item.question} className={styles.item}>
                    <h3 className={styles.heading}>
                      <span className={styles.question}>
                        <span>{item.question}</span>
                        <Icon name="chevronRight" className={styles.chevron} />
                      </span>
                    </h3>
                  </li>
                );
              }
              return (
                <li key={item.question} className={cn(styles.item, isOpen && styles.open)}>
                  <h3 className={styles.heading}>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(index)}
                      className={styles.question}
                    >
                      <span>{item.question}</span>
                      <Icon name="chevronRight" className={styles.chevron} />
                    </button>
                  </h3>
                  <div id={panelId} role="region" aria-labelledby={buttonId} className={styles.panel}>
                    <div className={styles.panelInner}>
                      <p className={styles.answer}>
                        <RichText content={item.answer} />
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </Section>
  );
}

export default FaqSection;
