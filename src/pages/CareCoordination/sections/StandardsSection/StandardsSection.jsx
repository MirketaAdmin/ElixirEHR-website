import { ccStandards } from '../../../../data/careCoordination';
import Section from '../../../../components/layout/Section/Section';
import BhIntro from '../../../BehavioralHealth/components/BhIntro/BhIntro';
import styles from './StandardsSection.module.css';

/** "Standards and Networks: What Actually Moves the Data" (dark) — the blueprint table and a note. */
function StandardsSection() {
  const { eyebrow, title, description, table, note } = ccStandards;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="cc-standards-title">
      <BhIntro
        id="cc-standards-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        tone="dark"
        className={styles.intro}
      />
      <div className={styles.panel}>
        <div className={styles.caption}>
          <p id="cc-standards-caption">{table.caption}</p>
          <span>{table.sources}</span>
        </div>
        <table className={styles.table} aria-labelledby="cc-standards-caption">
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
            {table.rows.map(([what, status, why]) => (
              <tr key={what}>
                <th scope="row" data-label={table.columns[0]}>
                  {what}
                </th>
                <td data-label={table.columns[1]}>{status}</td>
                <td data-label={table.columns[2]}>{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.note}>
        <span>{note}</span>
      </p>
    </Section>
  );
}

export default StandardsSection;
