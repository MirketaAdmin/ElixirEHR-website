import { cpBarriers } from '../../../../data/carePlanManagement';
import { cn } from '../../../../utils/cn';
import CpCard from '../../components/CpCard/CpCard';
import tones from '../../components/tones.module.css';
import styles from './BarriersVisual.module.css';

const cap = (tone) => tone[0].toUpperCase() + tone.slice(1);

/** Social determinants captured, and the barriers they raise. The mock-up is illustrative, so it is hidden from assistive technology. */
function BarriersVisual() {

  const { card } = cpBarriers;

  return (
    <CpCard className={styles.card}>
      <p className={styles.heading}>{card.title}</p>
      <ul className={styles.rows}>
        {card.rows.map((row) => (
          <li key={row.label}>
            <span>{row.label}</span>
            <span className={cn(tones.pill, tones[`pill${cap(row.tone)}`], styles.status)}>{row.status}</span>
          </li>
        ))}
      </ul>
      <ul className={styles.barriers}>
        {card.barriers.map((barrier) => (
          <li key={barrier.text} className={cn(styles.barrier, barrier.nested && styles.nested, barrier.nested && styles.indent)}>
            <p className={styles.barrierLabel}>{barrier.label}</p>
            <p className={styles.barrierText}>{barrier.text}</p>
          </li>
        ))}
      </ul>
    </CpCard>
  );

}

export default BarriersVisual;
