import { cn } from '../../../../utils/cn';
import styles from './BhIntro.module.css';

/**
 * Section intro used across the Behavioral Health frame: a small caps eyebrow, a 48px title and
 * an optional description. `align` left | center; `tone` light | dark. Per-section sizes come
 * from `--bh-*` variables set by the section's `className`.
 */
function BhIntro({ id, eyebrow, title, description, align = 'left', tone = 'light', className }) {
  return (
    <div className={cn(styles.intro, styles[align], styles[tone], className)}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export default BhIntro;
