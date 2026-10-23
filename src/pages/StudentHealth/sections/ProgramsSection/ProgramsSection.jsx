import { shPrograms } from '../../../../data/studentHealth';
import Section from '../../../../components/layout/Section/Section';
import ShIntro from '../../components/ShIntro/ShIntro';
import ShNote from '../../components/ShNote/ShNote';
import styles from './ProgramsSection.module.css';

/** "Which Program Pays" — the IEP line, the program table and the payer-of-first-resort note. */
function ProgramsSection() {
  const { eyebrow, title, description, paragraphs, table, note } = shPrograms;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="sh-programs-title">
      <ShIntro id="sh-programs-title" accent="gold" eyebrow={eyebrow} title={title} description={description} />
      <div className={styles.copy}>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.text}>
            {paragraph}
          </p>
        ))}
      </div>
      <div className={styles.panel}>
        <table className={styles.table}>
          <caption className={styles.caption}>{table.caption}</caption>
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
            {table.rows.map(([program, pays, paid]) => (
              <tr key={program}>
                <th scope="row">{program}</th>
                <td data-label={table.columns[1]}>{pays}</td>
                <td data-label={table.columns[2]}>{paid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ShNote note={note} className={styles.note} />
    </Section>
  );
}

export default ProgramsSection;
