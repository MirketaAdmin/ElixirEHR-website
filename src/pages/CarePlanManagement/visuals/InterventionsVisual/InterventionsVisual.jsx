import { cpInterventions } from '../../../../data/carePlanManagement';
import { cn } from '../../../../utils/cn';
import CpCard from '../../components/CpCard/CpCard';
import tones from '../../components/tones.module.css';
import styles from './InterventionsVisual.module.css';

const cap = (tone) => tone[0].toUpperCase() + tone.slice(1);

/** Interventions at every level, each with an owner. The mock-up is illustrative, so it is hidden from assistive technology. */
function InterventionsVisual() {

  const { items } = cpInterventions;

  return (
    <CpCard>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.title} className={styles.row}>
            <span className={cn(tones.tag, tones[`tag${cap(item.tone)}`], styles.tag)}>{item.level}</span>
            <span className={styles.title}>{item.title}</span>
            <span className={cn(styles.owner, styles[item.ownerTone])} aria-label={`Owner ${item.owner}`}>
              {item.owner}
            </span>
          </li>
        ))}
      </ul>
    </CpCard>
  );

}

export default InterventionsVisual;
