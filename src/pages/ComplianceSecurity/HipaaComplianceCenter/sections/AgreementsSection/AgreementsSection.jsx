import { hipaaAgreements } from '../../../../../data/hipaaComplianceCenter';
import Section from '../../../../../components/layout/Section/Section';
import RichText from '../../../../../components/ui/RichText/RichText';
import ComplianceIntro from '../../../components/ComplianceIntro/ComplianceIntro';
import styles from './AgreementsSection.module.css';

/** "Business Associate Agreements: Understanding the Two Contracts" — three translucent cards on purple. */
function AgreementsSection() {
  const { id, eyebrow, title, description, columns, caption } = hipaaAgreements;

  return (
    <Section tone="dark" spacing="none" id={id} className={styles.section} aria-labelledby="hipaa-agreements-title">
      <ComplianceIntro id="hipaa-agreements-title" eyebrow={eyebrow} title={title} description={description} tone="dark" />
      <div className={styles.grid}>
        {columns.map((column) => (
          <article key={column.label} className={styles.card}>
            <p className={styles.label}>{column.label}</p>
            <h3 className={styles.title}>{column.title}</h3>
            <ul className={styles.list}>
              {column.items.map((item, index) => (
                <li key={index}>
                  <RichText content={item} strongClassName={styles.strong} />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className={styles.caption}>{caption}</p>
    </Section>
  );
}

export default AgreementsSection;
