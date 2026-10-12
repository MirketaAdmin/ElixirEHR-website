import { patientJourney } from '../../../../data/revenueCycleManagement';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import styles from './PatientJourneySection.module.css';

function PatientJourneySection() {
  const { title, description, filters, stages, legend } = patientJourney;

  return (
    <Section tone="dark" spacing="none" className={styles.section} containerClassName={styles.inner}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>

      {/* Stage filters: only the "All stages" state exists in the design, so they are static. */}
      <ul className={styles.filters} aria-label="Stage groups">
        {filters.map((filter, index) => (
          <li
            key={filter}
            className={cn(styles.filter, index === 0 && styles.filterActive)}
            aria-current={index === 0 ? 'true' : undefined}
          >
            {filter}
          </li>
        ))}
      </ul>

      <ol className={styles.stages}>
        {stages.map((stage) => (
          <li key={stage.title} className={cn(styles.stage, styles[stage.group])}>
            <span className={styles.stageLabel}>{stage.label}</span>
            <span className={styles.stageTitle}>{stage.title}</span>
          </li>
        ))}
      </ol>

      <ul className={styles.legend}>
        {legend.map((item) => (
          <li key={item.group} className={cn(styles.legendItem, styles[item.group])}>
            {item.label}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default PatientJourneySection;
