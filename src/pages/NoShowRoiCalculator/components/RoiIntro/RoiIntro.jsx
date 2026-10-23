import { cn } from '../../../../utils/cn';
import styles from './RoiIntro.module.css';

/**
 * Section opener used across this page: a Deep Purple caps eyebrow, the 48px H2 and an optional
 * intro. Frame-specific widths and gaps come from the section's `className` (CSS variables
 * `--roi-title-width`, `--roi-title-gap`, `--roi-description-width`, `--roi-description-gap`).
 */
function RoiIntro({ id, eyebrow, title, description, className }) {
  return (
    <div className={cn(styles.intro, className)}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export default RoiIntro;
