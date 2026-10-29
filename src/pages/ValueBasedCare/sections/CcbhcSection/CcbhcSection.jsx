import { vbCcbhc } from '../../../../data/valueBasedCare';
import Section from '../../../../components/layout/Section/Section';
import VbIntro from '../../components/VbIntro/VbIntro';
import styles from './CcbhcSection.module.css';

/** "If You Are a CCBHC…": the argument, a note, and the payment-methodology table. */
function CcbhcSection() {
  const { eyebrow, title, lead, paragraphs, note, table } = vbCcbhc;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="vb-ccbhc">
      <VbIntro id="vb-ccbhc" eyebrow={eyebrow} title={title} description={lead} className={styles.intro} />
      <div className={styles.copy}>
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
        <p className={styles.note}>{note}</p>
      </div>

      <div className={styles.tableCard}>
        <table className={styles.table}>
          <caption>{table.caption}</caption>
          <thead>
            <tr>
              {table.head.map((cell) => (
                <th key={cell} scope="col">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map(([methodology, unit, payments]) => (
              <tr key={methodology}>
                <th scope="row">{methodology}</th>
                <td>{unit}</td>
                <td className={styles.payments}>{payments}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className={styles.footnote}>{table.footnote}</p>
      </div>
    </Section>
  );
}

export default CcbhcSection;
