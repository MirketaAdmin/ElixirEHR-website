import { opGfe } from '../../../../data/outpatientClinics';
import Section from '../../../../components/layout/Section/Section';
import calendarIcon from '../../../../assets/outpatient-clinics/icon-calendar.png';
import checkCircleIcon from '../../../../assets/outpatient-clinics/icon-check-circle.png';
import infoIcon from '../../../../assets/outpatient-clinics/icon-info.png';
import OpIntro from '../../components/OpIntro/OpIntro';
import styles from './GfeSection.module.css';

/** "Good Faith Estimates" — the GFE timing table, how Elixir handles it, and the legal note. */
function GfeSection() {
  const { eyebrow, title, description, table, handles, note } = opGfe;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="op-gfe-title">
      <OpIntro id="op-gfe-title" accent="yellow" eyebrow={eyebrow} title={title} description={description} />
      <div className={styles.panel}>
        <div className={styles.bar}>
          <p id="op-gfe-caption" className={styles.caption}>
            <img src={calendarIcon} alt="" width="15" height="18" />
            {table.caption}
          </p>
          <span className={styles.chip}>{table.chip}</span>
        </div>
        <table className={styles.table} aria-labelledby="op-gfe-caption">
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
            {table.rows.map(([when, deadline]) => (
              <tr key={when}>
                <th scope="row" data-label={table.columns[0]}>
                  {when}
                </th>
                <td data-label={table.columns[1]}>{deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.handles}>
        <h3 className={styles.handlesTitle}>{handles.title}</h3>
        <ul className={styles.handlesList}>
          {handles.items.map((item) => (
            <li key={item}>
              <img src={checkCircleIcon} alt="" width="19" height="20" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.note}>
        <img src={infoIcon} alt="" width="20" height="21" />
        <div>
          <h3 className={styles.noteTitle}>{note.title}</h3>
          <p className={styles.noteText}>{note.text}</p>
        </div>
      </div>
    </Section>
  );
}

export default GfeSection;
