import { cpApprovals } from '../../../../data/carePlanManagement';
import { cn } from '../../../../utils/cn';
import CpCard from '../../components/CpCard/CpCard';
import tones from '../../components/tones.module.css';
import styles from './ApprovalsVisual.module.css';

const cap = (tone) => tone[0].toUpperCase() + tone.slice(1);

/** Sign and approve: four signers and their stamps. The mock-up is illustrative, so it is hidden from assistive technology. */
function ApprovalsVisual() {

  const { card } = cpApprovals;

  return (
    <CpCard className={styles.card}>
      <p className={styles.heading}>{card.title}</p>
      <ul className={styles.rows}>
        {card.rows.map((row) => (
          <li key={row.role}>
            <span>{row.role}</span>
            <span className={cn(tones.pill, tones[`pill${cap(row.tone)}`])}>{row.status}</span>
          </li>
        ))}
      </ul>
    </CpCard>
  );

}

export default ApprovalsVisual;
