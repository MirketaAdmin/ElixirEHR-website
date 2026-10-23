import { patientPortalTasks } from '../../../../data/patientPortal';
import Section from '../../../../components/layout/Section/Section';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import styles from './TasksSection.module.css';

/** "What patients can do": six task cards with a Deep Purple icon tile and a lime footer tag. */
function TasksSection() {
  const { eyebrow, title, description, items } = patientPortalTasks;

  return (
    <Section
      tone="white"
      spacing="none"
      id="what-patients-can-do"
      className={styles.section}
      aria-labelledby="pp-tasks-title"
    >
      <EyebrowHeading id="pp-tasks-title" eyebrow={eyebrow} title={title} className={styles.heading} />
      <p className={styles.description}>{description}</p>
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <span className={styles.tile}>
              <img src={item.icon} alt="" width="32" height="32" />
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
            <p className={styles.tag}>
              {item.tag}
              <img src={item.tagIcon} alt="" width="16" height="16" />
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default TasksSection;
