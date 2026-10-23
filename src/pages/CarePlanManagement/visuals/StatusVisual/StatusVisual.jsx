import { cpStatus } from '../../../../data/carePlanManagement';
import { cn } from '../../../../utils/cn';
import CpCard from '../../components/CpCard/CpCard';
import tones from '../../components/tones.module.css';
import styles from './StatusVisual.module.css';

const cap = (tone) => tone[0].toUpperCase() + tone.slice(1);

/** Plan status as a five-step track, and each item’s own status. The mock-up is illustrative, so it is hidden from assistive technology. */
function StatusVisual() {

  const { steps, current, rows } = cpStatus;

  return (
    <CpCard className={styles.card}>
      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li
            key={step}
            className={cn(index < current && styles.done, index === current && styles.current)}
            aria-current={index === current ? 'step' : undefined}
          >
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.stepLabel}>{step}</span>
          </li>
        ))}
      </ol>
      <ul className={styles.rows}>
        {rows.map((row) => (
          <li key={row.text}>
            <p>
              <span className={cn(tones.tag, tones[`tag${cap(row.tone)}`])}>{row.level}</span> {row.text}
            </p>
            <span className={cn(tones.pill, tones[`pill${cap(row.statusTone)}`])}>{row.status}</span>
          </li>
        ))}
      </ul>
    </CpCard>
  );

}

export default StatusVisual;
