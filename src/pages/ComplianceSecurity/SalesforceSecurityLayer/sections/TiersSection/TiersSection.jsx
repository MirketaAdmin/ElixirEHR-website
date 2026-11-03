import { sslTiers } from '../../../../../data/salesforceSecurityLayer';
import { cn } from '../../../../../utils/cn';
import Section from '../../../../../components/layout/Section/Section';
import RichText from '../../../../../components/ui/RichText/RichText';
import ComplianceIntro from '../../../components/ComplianceIntro/ComplianceIntro';
import styles from './TiersSection.module.css';

/**
 * "What the Platform Provides, What You Configure, and What You Add": the three Salesforce security
 * tiers as a table (the tier your organization acts on is marked), then the explanation beside two
 * callouts.
 */
function TiersSection() {
  const { id, eyebrow, title, description, table, paragraphs, callouts } = sslTiers;

  return (
    <Section tone="white" spacing="none" id={id} className={styles.section} aria-labelledby="ssl-tiers-title">
      <ComplianceIntro id="ssl-tiers-title" eyebrow={eyebrow} title={title} description={description} />

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <caption>{table.caption}</caption>
          <thead>
            <tr>
              {table.columns.map((column) => (
                <th key={column} scope="col">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.tier}>
                <th scope="row">{row.tier}</th>
                <td>{row.covers}</td>
                <td className={cn(styles.nowrap, row.yours && styles.yours)}>{row.who}</td>
                <td className={styles.nowrap}>{row.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.split}>
        <div className={styles.body}>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>
              <RichText content={paragraph} strongClassName={styles.strong} linkClassName={styles.link} />
            </p>
          ))}
        </div>
        <div className={styles.callouts}>
          {callouts.map((callout) => (
            <div key={callout.title} className={styles.callout}>
              <h3 className={styles.calloutTitle}>{callout.title}</h3>
              <ul className={styles.calloutList}>
                {callout.items.map((item, index) => (
                  <li key={index}>
                    <RichText content={item} strongClassName={styles.strong} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default TiersSection;
