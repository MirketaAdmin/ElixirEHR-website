import { thBilling } from '../../../../data/telehealth';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import ThIntro from '../../components/ThIntro/ThIntro';
import styles from './BillingSection.module.css';

/** "Telehealth Billing" (dark) — the two details, the modifier table and the 98000-series note. */
function BillingSection() {
  const { eyebrow, title, description, details, table, note } = thBilling;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="th-billing-title">
      <ThIntro
        id="th-billing-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        tone="dark"
        className={styles.intro}
      />
      <div className={styles.details}>
        {details.map((detail) => (
          <article key={detail.title} className={styles.detail}>
            <div className={styles.detailHead}>
              <span className={styles.chip}>{detail.chip}</span>
              <span className={styles.param}>{detail.param}</span>
            </div>
            <h3 className={styles.detailTitle}>{detail.title}</h3>
            <p className={styles.detailText}>{detail.text}</p>
            {detail.rates && (
              <ul className={styles.rates}>
                {detail.rates.map((rate) => (
                  <li key={rate.code}>
                    <span>{rate.code}</span>
                    <strong className={styles[rate.tone]}>{rate.rate}</strong>
                  </li>
                ))}
              </ul>
            )}
            {detail.fee && (
              <p className={styles.fee}>
                <span>{detail.fee.label}</span>
                <strong>{detail.fee.value}</strong>
              </p>
            )}
          </article>
        ))}
      </div>
      <div className={styles.panel}>
        <div className={styles.bar}>
          <p id="th-modifiers-caption" className={styles.caption}>
            <img src={table.icon.src} alt="" width={table.icon.size[0]} height={table.icon.size[1]} />
            {table.caption}
          </p>
          <span className={styles.effective}>{table.chip}</span>
        </div>
        <table className={styles.table} aria-labelledby="th-modifiers-caption">
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
              <tr key={row.code} className={cn(row.outdated && styles.outdated)}>
                <td>
                  <span className={styles.code}>{row.code}</span>
                  {row.outdated && <span className={styles.flag}>{row.outdated}</span>}
                </td>
                <th scope="row">{row.signal}</th>
                <td>{row.applies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.note}>
        <img src={note.icon.src} alt="" width={note.icon.size[0]} height={note.icon.size[1]} />
        <span>{note.text}</span>
      </p>
    </Section>
  );
}

export default BillingSection;
