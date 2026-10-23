import { noShowSignals } from '../../../../data/patientNoShowPrediction';
import Section from '../../../../components/layout/Section/Section';
import RichText from '../../../../components/ui/RichText/RichText';
import SectionIntro from '../../components/SectionIntro/SectionIntro';
import styles from './SignalsSection.module.css';

/** Interleaves the two drawn columns so the grid fills row by row (rows align across columns). */
function rowOrder([left, right]) {
  return Array.from({ length: Math.max(left.length, right.length) }, (_, i) => [left[i], right[i]])
    .flat()
    .filter(Boolean);
}

/** "How the No-Show Risk Score Is Built": the signal groups table, the exclusions panel and the note. */
function SignalsSection() {
  const { chip, title, description, columns, rows, excluded, note } = noShowSignals;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="ns-signals-title">
      <SectionIntro
        id="ns-signals-title"
        chip={chip}
        title={title}
        description={description}
        className={styles.intro}
      />

      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column} scope="col">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.group}>
                <th scope="row">
                  <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
                  {row.group}
                </th>
                <td>{row.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.panel}>
        <h3 className={styles.panelTitle}>
          <span className={styles.panelIcon}>
            <img src={excluded.icon} alt="" width="24" height="24" />
          </span>
          {excluded.title}
        </h3>
        <ul className={styles.excluded}>
          {rowOrder(excluded.columns).map((item, index) => (
            <li key={index}>
              <img src={excluded.mark} alt="" width="9" height="9" />
              <span>
                <RichText content={item} />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className={styles.note}>
        {note.text}
        {note.link.to ? (
          <a href={note.link.to} className={styles.noteLink}>
            {note.link.label}
          </a>
        ) : (
          <span className={styles.noteLink}>{note.link.label}</span>
        )}
        .
      </p>
    </Section>
  );
}

export default SignalsSection;
