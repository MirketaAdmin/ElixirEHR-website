import { cpWorkflows } from '../../../../data/carePlanManagement';
import CpCard from '../../components/CpCard/CpCard';
import styles from './WorkflowsVisual.module.css';

/** Three when-then automation rules, each switched on. The mock-up is illustrative, so it is hidden from assistive technology. */
function WorkflowsVisual() {

  const { rules } = cpWorkflows;

  return (
    <CpCard className={styles.card}>
      <ul className={styles.rules}>
        {rules.map((rule) => (
          <li key={rule.when}>
            <div className={styles.part}>
              <p className={styles.label}>When</p>
              <p className={styles.text}>{rule.when}</p>
            </div>
            <div className={styles.part}>
              <p className={styles.label}>Then</p>
              <p className={styles.text}>{rule.then}</p>
            </div>
            <span className={styles.switch}>On</span>
          </li>
        ))}
      </ul>
    </CpCard>
  );

}

export default WorkflowsVisual;
