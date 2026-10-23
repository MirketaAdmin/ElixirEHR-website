import { spMips } from '../../../../data/smallPractices';
import Section from '../../../../components/layout/Section/Section';
import SpIntro from '../../components/SpIntro/SpIntro';
import styles from './MipsSection.module.css';

/** "MIPS for Small Practices: Are You Even In It?" — the low-volume threshold table, the relief and the myths. */
function MipsSection() {
  const { eyebrow, title, description, table, relief, myths, source } = spMips;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="sp-mips-title">
      <SpIntro id="sp-mips-title" eyebrow={eyebrow} title={title} description={description} />
      <div className={styles.panel}>
        <div className={styles.bar}>
          <p id="sp-mips-caption" className={styles.caption}>
            {table.caption}
          </p>
          <span className={styles.chip}>{table.chip}</span>
        </div>
        <table className={styles.table} aria-labelledby="sp-mips-caption">
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
            {table.rows.map(([criterion, threshold, impact]) => (
              <tr key={criterion}>
                <th scope="row">{criterion}</th>
                <td data-label={table.columns[1]} className={styles.threshold}>
                  {threshold}
                </td>
                <td data-label={table.columns[2]} className={styles.impact}>
                  {impact}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className={styles.tableSource}>
          {table.source}{' '}
          <a href={table.link.href} target="_blank" rel="noreferrer">
            {table.link.label}
          </a>
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.relief}>
          <h3 className={styles.cardTitle}>
            <span className={styles.mark} aria-hidden="true">
              &#10003;
            </span>
            {relief.title}
          </h3>
          <p className={styles.lead}>{relief.lead}</p>
          <ul className={styles.reliefList}>
            {relief.items.map((item) => (
              <li key={item.term}>
                <strong>{item.term}</strong> {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.myths}>
          <h3 className={styles.cardTitle}>
            <span className={styles.mark} aria-hidden="true">
              &#10005;
            </span>
            {myths.title}
          </h3>
          <dl className={styles.mythList}>
            {myths.items.map((item) => (
              <div key={item.claim}>
                <dt>{item.claim}</dt>
                <dd>{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <p className={styles.source}>{source}</p>
    </Section>
  );
}

export default MipsSection;
