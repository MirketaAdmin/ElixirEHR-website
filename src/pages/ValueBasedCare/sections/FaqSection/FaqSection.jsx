import { useId, useState } from 'react';
import { vbFaq } from '../../../../data/valueBasedCare';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import Icon from '../../../../components/ui/Icon/Icon';
import VbIntro from '../../components/VbIntro/VbIntro';
import styles from './FaqSection.module.css';

/**
 * FAQ as this frame draws it: two independent columns of white accordion cards. Questions with an
 * answer start open (as drawn) and toggle; questions without one (copy not supplied yet) render as
 * static rows with the closed chevron.
 */
function FaqSection() {
  const { eyebrow, title, description, columns } = vbFaq;
  const baseId = useId();
  const [closed, setClosed] = useState(() => new Set());

  function toggle(key) {
    setClosed((current) => {
      const next = new Set(current);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="vb-faq">
      <VbIntro id="vb-faq" eyebrow={eyebrow} title={title} description={description} />
      <div className={styles.columns}>
        {columns.map((column, columnIndex) => (
          <ul key={columnIndex} className={styles.list}>
            {column.map((item, index) => {
              const key = `${columnIndex}-${index}`;
              const panelId = `${baseId}-${key}`;
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
              const open = !closed.has(key);
              return (
                <li key={item.question} className={cn(styles.item, open && styles.open)}>
                  <h3>
                    <button
                      type="button"
                      className={styles.question}
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => toggle(key)}
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
        ))}
      </div>
    </Section>
  );
}

export default FaqSection;
