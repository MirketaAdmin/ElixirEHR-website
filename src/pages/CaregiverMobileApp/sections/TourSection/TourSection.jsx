import { useId } from 'react';
import { cmaTour } from '../../../../data/caregiverMobileApp';
import Section from '../../../../components/layout/Section/Section';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import { cn } from '../../../../utils/cn';
import styles from './TourSection.module.css';

/**
 * "A four-minute field caregiver tour": step tabs and the selected step's panel. Only Step 1 has
 * panel content in the frame, so the other tabs render as drawn but are marked unavailable.
 */
function TourSection() {
  const { eyebrow, title, description, note, steps } = cmaTour;
  const baseId = useId();
  const selected = 0;
  const { panel } = steps[selected];

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
              id={`${baseId}-tab-${index}`}
              aria-selected={isSelected}
              aria-controls={isSelected ? `${baseId}-panel` : undefined}
              aria-disabled={!step.panel || undefined}
              tabIndex={isSelected ? 0 : -1}
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

      <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${selected}`} className={styles.panel}>
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
