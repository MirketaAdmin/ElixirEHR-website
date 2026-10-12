import styles from './FloatingBadge.module.css';

/**
 * Small card that overlaps the corner of an image — used for the hero's
 * "AI Insights Active" indicator and the story image's "Est. 2019" tag.
 * Position it by wrapping in a positioned container; this only owns the
 * card's own visual style.
 */
function FloatingBadge({ variant = 'glass', dot = false, title, subtitle, className = '' }) {
  return (
    <div className={`${styles.badge} ${styles[variant]} ${className}`}>
      {dot && <span className={styles.dot} aria-hidden="true" />}
      <div className={styles.text}>
        <span className={`${styles.title} label-md`}>{title}</span>
        {subtitle && <span className={`${styles.subtitle} label-sm`}>{subtitle}</span>}
      </div>
    </div>
  );
}

export default FloatingBadge;
