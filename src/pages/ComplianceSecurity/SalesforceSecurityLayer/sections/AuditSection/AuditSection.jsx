import { sslAudit } from '../../../../../data/salesforceSecurityLayer';
import { cn } from '../../../../../utils/cn';
import Section from '../../../../../components/layout/Section/Section';
import RichText from '../../../../../components/ui/RichText/RichText';
import ComplianceIntro from '../../../components/ComplianceIntro/ComplianceIntro';
import styles from './AuditSection.module.css';

/**
 * "What the Standard Platform Retains": three columns (platform, Elixir, add-on), with Elixir's own
 * column marked in lime, then the buyer checklist of questions for Salesforce.
 */
function AuditSection() {
  const { eyebrow, title, description, columns, callout } = sslAudit;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="ssl-audit-title">
      <ComplianceIntro id="ssl-audit-title" eyebrow={eyebrow} title={title} description={description} />
      <div className={styles.grid}>
        {columns.map((column) => (
          <article key={column.title} className={cn(styles.card, column.ours && styles.ours)}>
            <h3 className={styles.title}>{column.title}</h3>
            {column.paragraphs.map((paragraph, index) => (
              <p key={index} className={styles.text}>
                <RichText content={paragraph} strongClassName={styles.strong} linkClassName={styles.link} />
              </p>
            ))}
          </article>
        ))}
      </div>
      <div className={styles.callout}>
        <h3 className={styles.calloutTitle}>{callout.title}</h3>
        <ul className={styles.calloutList}>
          {callout.items.map((item, index) => (
            <li key={index}>
              <RichText content={item} strongClassName={styles.strong} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default AuditSection;
