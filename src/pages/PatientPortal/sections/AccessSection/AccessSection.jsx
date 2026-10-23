import { patientPortalAccess } from '../../../../data/patientPortal';
import Section from '../../../../components/layout/Section/Section';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import styles from './AccessSection.module.css';

/**
 * "Family caregivers and professional caregivers are not the same permission": the argument,
 * a callout and the scoping panel on the left; the relationship table and the behavioral-health
 * panel on the right.
 */
function AccessSection() {
  const { eyebrow, title, paragraphs, callout, engine, table, behavioralHealth } = patientPortalAccess;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="pp-access-title">
      <EyebrowHeading id="pp-access-title" eyebrow={eyebrow} title={title} className={styles.heading} />
      <div className={styles.layout}>
        <div className={styles.left}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
          <p className={styles.callout}>{callout}</p>
          <div className={styles.engine}>
            <h3 className={styles.engineTitle}>
              <img src={engine.icon} alt="" width="14" height="16" />
              {engine.title}
            </h3>
            <ul className={styles.engineRows}>
              {engine.rows.map((row) => (
                <li key={row.label}>
                  {row.label}
                  <span className={styles.status}>{row.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.tableCard}>
            <table className={styles.table}>
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
                {table.rows.map(([who, needs]) => (
                  <tr key={who}>
                    <th scope="row">{who}</th>
                    <td>{needs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={styles.note}>{table.note}</p>
          </div>

          <div className={styles.panel}>
            <h3 className={styles.panelTitle}>{behavioralHealth.title}</h3>
            <ul className={styles.checks}>
              {behavioralHealth.items.map((item) => (
                <li key={item}>
                  <img src={behavioralHealth.icon} alt="" width="12" height="10" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AccessSection;
