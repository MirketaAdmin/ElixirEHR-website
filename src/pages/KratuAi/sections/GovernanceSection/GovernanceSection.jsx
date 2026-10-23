import { kratuGovernance } from '../../../../data/kratuAi';
import Section from '../../../../components/layout/Section/Section';
import KrIntro from '../../components/KrIntro/KrIntro';
import styles from './GovernanceSection.module.css';

/** "How KratuAI Keeps Clinicians and Billers in Total Control": the agent / AI / human table. */
function GovernanceSection() {
  const { eyebrow, title, description, columns, rows, note, badge } = kratuGovernance;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="kr-governance-title">
      <KrIntro
        id="kr-governance-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="center"
        className={styles.intro}
      />
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
              <tr key={row.agent}>
                <th scope="row">{row.agent}</th>
                <td>{row.prepares}</td>
                <td>{row.decides}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.note}>
        <span>{note}</span>
        <span className={styles.badge}>{badge}</span>
      </p>
    </Section>
  );
}

export default GovernanceSection;
