import { cpCustomizable } from '../../../../data/carePlanManagement';
import { cn } from '../../../../utils/cn';
import CpCard from '../../components/CpCard/CpCard';
import styles from './LevelsVisual.module.css';

/** Customizable care plans: program tabs and the five switchable levels. The mock-up is illustrative, so it is hidden from assistive technology. */
function LevelsVisual() {

  const { tabs, levels } = cpCustomizable;

  return (
    <CpCard className={styles.card}>
      <div aria-hidden="true">
        <div className={styles.tabs}>
          {tabs.map((tab, index) => (
            <span key={tab} className={cn(styles.tab, index === 0 && styles.active)}>
              {tab}
            </span>
          ))}
        </div>
        <ul className={styles.levels}>
          {levels.map((level, index) => (
            <li
              key={level.label}
              className={cn(styles.level, styles[level.tone], index > 0 && styles.indent)}
              style={{ marginLeft: index ? 64 + index * 20 : 0 }}
            >
              <span>{level.label}</span>
              <span className={cn(styles.switch, !level.on && styles.off)}>{level.on ? 'On' : 'Off'}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Repeat the content for screen readers in reading order. */}
      <p className={styles.srOnly}>
        Levels: {levels.map((level) => `${level.label} ${level.on ? 'on' : 'off'}`).join(', ')}.
      </p>
    </CpCard>
  );

}

export default LevelsVisual;
