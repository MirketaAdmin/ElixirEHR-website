import { sudMedication } from '../../../../data/substanceUseDisorder';
import Section from '../../../../components/layout/Section/Section';
import SudIntro from '../../components/SudIntro/SudIntro';
import styles from './MedicationSection.module.css';

/** "Medication-Assisted Treatment and Opioid Treatment Program Workflows". */
function MedicationSection() {
  const { eyebrow, title, description, schedule, items } = sudMedication;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="sud-medication-title">
      <SudIntro id="sud-medication-title" eyebrow={eyebrow} title={title} description={description} />
      <div className={styles.layout}>
        <div className={styles.schedule}>
          <h3 id="sud-schedule-title" className={styles.scheduleTitle}>
            {schedule.title}
          </h3>
          <table className={styles.table} aria-labelledby="sud-schedule-title">
            <thead>
              <tr>
                {schedule.columns.map((column) => (
                  <th key={column} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.rows.map(([period, doses]) => (
                <tr key={period}>
                  <th scope="row">{period}</th>
                  <td>{doses}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={styles.note}>{schedule.note}</p>
        </div>
        <ul className={styles.items}>
          {items.map((item) => (
            <li key={item.title} className={styles.item}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default MedicationSection;
