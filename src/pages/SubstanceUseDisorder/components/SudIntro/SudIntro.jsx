import { cn } from '../../../../utils/cn';
import styles from './SudIntro.module.css';

/**
 * Section intro for the Substance Use Disorder frame: a 14px caps eyebrow, a 40px title and an
 * optional description. `tone` light | dark; per-section sizes come from `--sud-*` variables.
 */
function SudIntro({ id, eyebrow, title, description, tone = 'light', className }) {
  return (
    <div className={cn(styles.intro, styles[tone], className)}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export default SudIntro;
