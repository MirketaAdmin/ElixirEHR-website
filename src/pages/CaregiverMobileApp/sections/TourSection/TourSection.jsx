import { useId, useState } from 'react';
import { cmaTour } from '../../../../data/caregiverMobileApp';
import Section from '../../../../components/layout/Section/Section';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import { cn } from '../../../../utils/cn';
import styles from './TourSection.module.css';

/**
 * "A four-minute field caregiver tour": step tabs switching the step panel. Arrow keys, Home and End
 * move between tabs. Steps 2–6 carry interim panels (see data/caregiverMobileApp.js).
 */
function TourSection() {
  const { eyebrow, title, description, note, steps } = cmaTour;
  const baseId = useId();
  const [selected, setSelected] = useState(0);
  const { panel } = steps[selected];
  const tabId = (index) => `${baseId}-tab-${index}`;

  function handleKeyDown(event) {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
    let next;
    if (step) next = (selected + step + steps.length) % steps.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = steps.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    document.getElementById(tabId(next))?.focus();
  }

  return (
    <Section id="caregiver-tour" spacing="none" className={styles.section} aria-labelledby="cma-tour">
      <EyebrowHeading id="cma-tour" eyebrow={eyebrow} title={title} className={styles.heading} />
      <p className={styles.description}>{description}</p>
      <p className={styles.note}>{note}</p>

      <div className={styles.tabs} role="tablist" aria-label="Caregiver tour steps">
        {steps.map((step, index) => {
          const isSelected = index === selected;
          return (
            <button
              key={step.label}
              type="button"
              role="tab"
              id={tabId(index)}
              aria-selected={isSelected}
              aria-controls={`${baseId}-panel`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setSelected(index)}
              onKeyDown={handleKeyDown}
              className={cn(styles.tab, isSelected && styles.selected)}
            >
              <span className={styles.number} aria-hidden="true">
                {index + 1}
              </span>
              {step.label}
            </button>
          );
        })}
      </div>

      {/* Keyed by step so the new panel fades in when the tab changes. */}
      <div
        key={selected}
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={tabId(selected)}
        className={styles.panel}
      >
        <div className={styles.panelHead}>
          <p className={styles.kicker}>{panel.kicker}</p>
          <p className={styles.tag}>{panel.tag}</p>
        </div>
        <h3 className={styles.panelTitle}>{panel.title}</h3>
        <p className={styles.panelText}>{panel.text}</p>
        <ul className={styles.items}>
          {panel.items.map((item) => (
            <li key={item.title} className={styles.item}>
              <img src={item.icon} alt="" width="24" height="24" />
              <div>
                <p className={styles.itemTitle}>{item.title}</p>
                <p className={styles.itemText}>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default TourSection;
