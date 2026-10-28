import { billingPartners } from '../../../../data/billing';
import Section from '../../../../components/layout/Section/Section';
import styles from './PartnersSection.module.css';

/** "Trusted Integrations & Partners": the partner names, set as text as in the frame. */
function PartnersSection() {
  return (
    <Section spacing="none" className={styles.section}>
      <h2 className={styles.title}>{billingPartners.title}</h2>
      <ul className={styles.names}>
        {billingPartners.names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </Section>
  );
}

export default PartnersSection;
