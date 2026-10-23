import { cpOutcomes } from '../../../../data/carePlanManagement';
import CpCard from '../../components/CpCard/CpCard';
import styles from './OutcomesVisual.module.css';

/** Measurable outcomes as progress bars, and one descriptive outcome. The mock-up is illustrative, so it is hidden from assistive technology. */
function OutcomesVisual() {

  const { measures, note } = cpOutcomes;

  return (
    <CpCard>
      <ul className={styles.measures}>
        {measures.map((measure) => (
          <li key={measure.label}>
            <div className={styles.head}>
              <span className={styles.label}>{measure.label}</span>
              <span className={styles.range}>{measure.range}</span>
            </div>
            <div className={styles.track} aria-hidden="true">
              <span className={styles[measure.tone]} style={{ width: `${measure.progress}%` }} />
            </div>
          </li>
        ))}
      </ul>
      <blockquote className={styles.note}>
        <p className={styles.noteLabel}>{note.label}</p>
        <p className={styles.quote}>{note.quote}</p>
      </blockquote>
    </CpCard>
  );

}

export default OutcomesVisual;
