import { cpGoals } from '../../../../data/carePlanManagement';
import { cn } from '../../../../utils/cn';
import CpCard from '../../components/CpCard/CpCard';
import tones from '../../components/tones.module.css';
import styles from './GoalVisual.module.css';

const cap = (tone) => tone[0].toUpperCase() + tone.slice(1);

/** Patient-centered goals: one goal and its three objectives. The mock-up is illustrative, so it is hidden from assistive technology. */
function GoalVisual() {

  const { goal, objectives } = cpGoals;

  return (
    <CpCard className={styles.card}>
      <div className={styles.goal}>
        <p className={styles.goalLabel}>{goal.label}</p>
        <p className={styles.goalTitle}>{goal.title}</p>
        <p className={styles.goalMeta}>{goal.meta}</p>
      </div>
      <ul className={cn(styles.objectives, styles.indent)}>
        {objectives.map((item) => (
          <li key={item.text}>
            <span className={styles.dash} aria-hidden="true" />
            <p className={styles.objective}>
              <span className={cn(tones.tag, tones.tagBlue)}>Objective</span> {item.text}
            </p>
            <span className={cn(tones.pill, tones[`pill${cap(item.tone)}`], styles.due)}>{item.status}</span>
          </li>
        ))}
      </ul>
    </CpCard>
  );

}

export default GoalVisual;
