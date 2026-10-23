import { raAudit } from '../../../../data/responsibleAi';
import Section from '../../../../components/layout/Section/Section';
import RaIntro from '../../components/RaIntro/RaIntro';
import styles from './AuditSection.module.css';

/** "Making every AI output explainable after the fact" — what is retained with each kind of output. */
function AuditSection() {
  const { chip, title, description, note, columns, rows } = raAudit;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="ra-audit-title">
      <div className={styles.layout}>
        <div>
          <RaIntro id="ra-audit-title" chip={chip} title={title} description={description} className={styles.intro} />
          <div className={styles.note}>
            <p className={styles.noteTitle}>{note.title}</p>
            <p className={styles.noteText}>{note.text}</p>
          </div>
        </div>
        <div className={styles.ledger}>
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
              {rows.map((row) => (
                <tr key={row.produced} className={styles[row.tone]}>
                  <th scope="row">{row.produced}</th>
                  <td>{row.retained}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}

export default AuditSection;
