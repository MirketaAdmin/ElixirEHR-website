import { sudContinuum } from '../../../../data/substanceUseDisorder';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import SudIntro from '../../components/SudIntro/SudIntro';
import styles from './ContinuumSection.module.css';

const chipLabels = { removed: 'Removed', new: 'New' };

/** "One Substance Use Disorder EHR Across the Full Continuum of Care" — the ASAM crosswalk table. */
function ContinuumSection() {
  const { id, eyebrow, title, description, table } = sudContinuum;

  return (
    <Section tone="surface" spacing="none" id={id} className={styles.section} aria-labelledby="sud-continuum-title">
      <SudIntro id="sud-continuum-title" eyebrow={eyebrow} title={title} description={description} className={styles.intro} />
      <div className={styles.panel}>
        <div className={styles.caption}>
          <p id="sud-crosswalk-caption">{table.caption}</p>
          <span className={styles.reference}>{table.chip}</span>
        </div>
        <table className={styles.table} aria-labelledby="sud-crosswalk-caption">
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
              <tr key={row.third + row.fourth.text}>
                <th scope="row" data-label={table.columns[0]}>
                  {row.third}
                </th>
                <td data-label={table.columns[1]} className={cn(row.fourth.chip === 'removed' && styles.muted)}>
                  {row.fourth.chip && (
                    <span className={cn(styles.chip, styles[row.fourth.chip])}>{chipLabels[row.fourth.chip]}</span>
                  )}
                  {row.fourth.text}
                </td>
                <td data-label={table.columns[2]}>{row.change}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className={styles.note}>{table.note}</p>
      </div>
    </Section>
  );
}

export default ContinuumSection;
