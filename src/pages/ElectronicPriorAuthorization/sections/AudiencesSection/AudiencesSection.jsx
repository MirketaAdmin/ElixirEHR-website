import { epaAudiences } from '../../../../data/electronicPriorAuthorization';
import Section from '../../../../components/layout/Section/Section';
import EpaHeading from '../../components/EpaHeading/EpaHeading';
import styles from './AudiencesSection.module.css';

/** "Who Uses Electronic Prior Authorization Software?" — seven organization types (the last spans two columns). */
function AudiencesSection() {
  const { title, description, items } = epaAudiences;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="epa-audiences-title">
      <EpaHeading id="epa-audiences-title" title={title} description={description} tone="ink" className={styles.heading} />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default AudiencesSection;
