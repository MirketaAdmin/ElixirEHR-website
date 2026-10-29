import { cn } from '../../../../utils/cn';
import styles from './VbIntro.module.css';

/**
 * Section opener on the Value-Based Care page: a caps eyebrow, the 48px H2 and an optional
 * description. tone: light (olive eyebrow, Deep Purple title) | dark (lime eyebrow, white title).
 * `strong` renders the description as the frame's darker, medium-weight lead.
 */
function VbIntro({ id, eyebrow, title, description, tone = 'light', strong = false, className }) {
  return (
    <div className={cn(styles.intro, styles[tone], className)}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description && <p className={cn(styles.description, strong && styles.strong)}>{description}</p>}
    </div>
  );
}

export default VbIntro;
