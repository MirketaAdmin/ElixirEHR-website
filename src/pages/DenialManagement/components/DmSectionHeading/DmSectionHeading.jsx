import { cn } from '../../../../utils/cn';
import styles from './DmSectionHeading.module.css';

/**
 * Centred section heading used across the Denial Management frame: optional purple pill badge,
 * H2 and description. `tone="dark"` for the purple section. Widths are set by the section.
 */
function DmSectionHeading({ badge, title, description, tone = 'light', className }) {
  return (
    <div className={cn(styles.heading, styles[tone], className)}>
      {badge && <p className={styles.badge}>{badge}</p>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export default DmSectionHeading;
