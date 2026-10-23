import { ccReferral } from '../../../../data/contactCenter';
import Section from '../../../../components/layout/Section/Section';
import CcIntro from '../../components/CcIntro/CcIntro';
import styles from './ReferralSection.module.css';

/** "Referral Source Management & Speed to Admission": the metric / decision table. */
function ReferralSection() {
  const { chip, title, description, columns, rows } = ccReferral;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="cc-referral-title">
      <CcIntro id="cc-referral-title" chip={chip} title={title} description={description} className={styles.intro} />
      <div className={styles.card}>
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
              <tr key={row.metric}>
                <th scope="row">{row.metric}</th>
                <td>{row.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

export default ReferralSection;
