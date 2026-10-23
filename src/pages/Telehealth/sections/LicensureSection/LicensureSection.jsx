import { thLicensure } from '../../../../data/telehealth';
import Section from '../../../../components/layout/Section/Section';
import ThIntro from '../../components/ThIntro/ThIntro';
import styles from './LicensureSection.module.css';

const usable = { Yes: 'yes', Partly: 'partly', 'Not yet': 'notYet' };

/** "State Licensure and Interstate Compacts" — the compact table, the compliance notice and Elixir's note. */
function LicensureSection() {
  const { eyebrow, title, description, table, notice, note } = thLicensure;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="th-licensure-title">
      <ThIntro
        id="th-licensure-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        layout="stacked"
        className={styles.intro}
      />
      <div className={styles.panel}>
        <div className={styles.bar}>
          <p id="th-compacts-caption">{table.note}</p>
          <span className={styles.report}>{table.report}</span>
        </div>
        <table className={styles.table} aria-labelledby="th-compacts-caption">
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
            {table.rows.map(([compact, enacted, issuing, status]) => (
              <tr key={compact}>
                <th scope="row">{compact}</th>
                <td data-label={table.columns[1]}>{enacted}</td>
                <td data-label={table.columns[2]}>{issuing}</td>
                <td>
                  <span className={styles[usable[status]]}>{status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.notice}>
        <p className={styles.noticeLabel}>{notice.label}</p>
        <h3 className={styles.noticeTitle}>{notice.title}</h3>
        <ul className={styles.noticeList}>
          {notice.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <p className={styles.note}>
        <img src={note.icon.src} alt="" width={note.icon.size[0]} height={note.icon.size[1]} />
        <span>{note.text}</span>
      </p>
    </Section>
  );
}

export default LicensureSection;
