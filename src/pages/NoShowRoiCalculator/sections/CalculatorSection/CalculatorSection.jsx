import { useState } from 'react';
import { roiCalculator } from '../../../../data/noShowRoiCalculator';
import Section from '../../../../components/layout/Section/Section';
import RoiIntro from '../../components/RoiIntro/RoiIntro';
import {
  computeRoi,
  formatCents,
  formatCount,
  formatDollars,
  formatPercent,
  formatRate,
} from '../../roiModel';
import styles from './CalculatorSection.module.css';

const formatters = { count: formatCount, dollars: formatDollars, rate: formatRate };

/**
 * "Estimate the Monthly Cost of Patient No-Shows": the parameters form beside the live results.
 * Results follow every edit; "Recalculate Estimate" also tidies the fields (empty or negative
 * values become 0) and announces the new ROI to assistive tech. The inputs are owned by the page
 * so the executive-summary request can carry them.
 */
function CalculatorSection({ inputs, onChange, onReset }) {
  const { eyebrow, title, description, formTitle, fields, totalCost, summary, disclaimer } = roiCalculator;
  const [announcement, setAnnouncement] = useState('');
  const results = computeRoi(inputs);
  const years = (value) => [value, value, value, value * 3];

  function handleSubmit(event) {
    event.preventDefault();
    const tidy = Object.fromEntries(
      Object.entries(inputs).map(([name, value]) => {
        const number = Number.parseFloat(value);
        return [name, String(Number.isFinite(number) && number > 0 ? number : 0)];
      }),
    );
    onChange(tidy);
    setAnnouncement(`Estimate recalculated. ROI per month ${formatPercent(computeRoi(tidy).roiPercent)}.`);
  }

  function handleReset() {
    onReset();
    setAnnouncement('Default values restored.');
  }

  return (
    <Section id="calculator" tone="white" spacing="none" className={styles.section} aria-labelledby="roi-calculator-title">
      <RoiIntro id="roi-calculator-title" eyebrow={eyebrow} title={title} description={description} className={styles.intro} />

      <div className={styles.card}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <h3 className={styles.formTitle}>{formTitle}</h3>
          <div className={styles.fields}>
            {fields.map((field) => (
              <div key={field.name} className={styles.field}>
                <label htmlFor={`roi-${field.name}`} className={styles.label}>
                  {field.label}
                </label>
                <input
                  id={`roi-${field.name}`}
                  name={field.name}
                  type="number"
                  inputMode="decimal"
                  min="0"
                  max={field.max}
                  step={field.step}
                  value={inputs[field.name]}
                  onChange={(event) => onChange({ ...inputs, [field.name]: event.target.value })}
                  aria-describedby={field.help ? `roi-${field.name}-help` : undefined}
                  className={styles.control}
                />
                {field.help && (
                  <p id={`roi-${field.name}-help`} className={styles.help}>
                    {field.help}
                  </p>
                )}
              </div>
            ))}
            <div className={`${styles.field} ${styles.wide}`}>
              <label htmlFor="roi-total-cost" className={styles.label}>
                {totalCost.label}
              </label>
              <output id="roi-total-cost" htmlFor="roi-practitioners roi-costPerProvider" className={styles.total}>
                {formatCents(results.totalCost)}
              </output>
              <p className={styles.help}>{totalCost.help}</p>
            </div>
          </div>

          <div className={styles.actions}>
            <button type="submit" className={styles.recalculate}>
              {roiCalculator.recalculateLabel}
            </button>
            <button type="button" className={styles.reset} onClick={handleReset}>
              {roiCalculator.resetLabel}
            </button>
          </div>
          <p className="visually-hidden" role="status">
            {announcement}
          </p>

          <p className={styles.disclaimer}>
            <strong>{disclaimer.label}</strong> {disclaimer.text}
          </p>
        </form>

        <div className={styles.summary}>
          <h3 className={styles.summaryTitle}>{summary.title}</h3>
          <div className={styles.roiCard}>
            <p className={styles.roiLabel}>{summary.roiLabel}</p>
            <p className={styles.roiValue}>{formatPercent(results.roiPercent)}</p>
            <p className={styles.roiCaption}>{summary.roiCaption}</p>
          </div>
          <div className={styles.metrics}>
            <div className={styles.metric}>
              <p className={styles.metricLabel}>{summary.recoveredLabel}</p>
              <p className={styles.metricValue}>{formatDollars(results.revenueRecovered)}</p>
            </div>
            <div className={styles.metric}>
              <p className={styles.metricLabel}>{summary.netLabel}</p>
              <p className={styles.metricValue}>{formatDollars(results.netImpact)}</p>
            </div>
          </div>
          <dl className={styles.rows}>
            {summary.rows.map((row) => (
              <div key={row.key}>
                <dt>{row.label}</dt>
                <dd>{formatters[row.format](results[row.key])}</dd>
              </div>
            ))}
          </dl>
          {summary.tables.map((table) => (
            <table key={table.key} className={styles.table}>
              <caption>{table.caption}</caption>
              <thead>
                <tr>
                  {summary.columns.map((column) => (
                    <th key={column} scope="col">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {years(results[table.key]).map((value, index) => (
                    <td key={summary.columns[index]}>{formatDollars(value)}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default CalculatorSection;
