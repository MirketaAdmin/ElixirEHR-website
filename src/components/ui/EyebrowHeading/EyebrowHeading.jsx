import { cn } from '../../../utils/cn';
import styles from './EyebrowHeading.module.css';

/**
 * Lime Inter-caps eyebrow + 48px H2 (EVV and Caregiver Mobile App sections). The eyebrow-to-title
 * gap is `--eyebrow-heading-gap` (default 8px).
 * align: left | center      tone: light (dark text) | dark (white text)
 */
function EyebrowHeading({ eyebrow, title, align = 'left', tone = 'light', id, className }) {
  return (
    <div className={cn(styles.heading, styles[align], styles[tone], className)}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
    </div>
  );
}

export default EyebrowHeading;
