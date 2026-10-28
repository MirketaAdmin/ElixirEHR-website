import { useId, useState } from 'react';
import { billingFaq } from '../../../../data/billing';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import Icon from '../../../../components/ui/Icon/Icon';
import styles from './QuestionsSection.module.css';

/**
 * "Got Questions?": title on the left, the questions as cards on the right. A question with an
 * `answer` opens it in its card; without one (copy not supplied yet) it renders as a static row,
 * plus icon as drawn.
 */
function QuestionsSection() {
  const { titleLines, description, items } = billingFaq;
  const baseId = useId();
  const [open, setOpen] = useState(() => new Set());

  function toggle(index) {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <Section tone="surface" spacing="none" className={styles.section} containerClassName={styles.inner}>
      <div>
        <h2 className={styles.title}>
          {titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className={styles.description}>{description}</p>
      </div>
      <ul className={styles.list}>
        {items.map((item, index) => {
          const isOpen = open.has(index);
          const panelId = `${baseId}-answer-${index}`;
          return (
            <li key={item.question} className={cn(styles.item, isOpen && styles.open)}>
              <h3 className={styles.heading}>
                {item.answer ? (
                  <button
                    type="button"
                    className={styles.question}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                  >
                    {item.question}
                    <Icon name="addCircle" className={styles.plus} />
                  </button>
                ) : (
                  <span className={styles.question}>
                    {item.question}
                    <Icon name="addCircle" className={styles.plus} />
                  </span>
                )}
              </h3>
              {item.answer && (
                <div id={panelId} className={styles.answer} hidden={!isOpen}>
                  <p>{item.answer}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

export default QuestionsSection;
