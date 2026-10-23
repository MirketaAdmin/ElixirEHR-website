import { useId, useState } from 'react';
import { modularSolutions } from '../../../../data/whatIsElixir';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import styles from './ModularSolutionsSection.module.css';

/**
 * "Our Modular Solutions": category pills as tabs (Core EHR first, as designed) switching the module
 * cards. Keyboard: arrow keys, Home and End move between tabs, as in the shared Resources tabs.
 */
function ModularSolutionsSection() {
  const { categories } = modularSolutions;
  const baseId = useId();
  const [active, setActive] = useState(0);
  const tabId = (index) => `${baseId}-tab-${index}`;

  function handleKeyDown(event) {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
    let next;
    if (step) next = (active + step + categories.length) % categories.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = categories.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    document.getElementById(tabId(next))?.focus();
  }

  return (
    <Section spacing="none" className={styles.section} containerClassName={styles.inner}>
      <p className={styles.eyebrow}>{modularSolutions.eyebrow}</p>
      <h2 className={cn('text-headline-lg', styles.title)}>{modularSolutions.title}</h2>

      <div className={styles.categories} role="tablist" aria-label="Solution categories">
        {categories.map((category, index) => (
          <button
            key={category.label}
            type="button"
            role="tab"
            id={tabId(index)}
            aria-selected={index === active}
            aria-controls={`${baseId}-panel`}
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={handleKeyDown}
            className={cn(styles.category, index === active && styles.active)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={tabId(active)} className={styles.panel}>
        {/* Keyed by category so the new cards fade in when the tab changes. */}
        <ul key={active} className={styles.grid}>
          {categories[active].modules.map((module) => (
            <li key={module.title} className={styles.card}>
              <img src={module.icon} alt="" width={module.iconSize[0]} height={module.iconSize[1]} className={styles.icon} />
              <h3 className={styles.cardTitle}>{module.title}</h3>
              <p className={styles.cardDescription}>{module.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default ModularSolutionsSection;
