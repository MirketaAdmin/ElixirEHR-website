import { cn } from '../../../utils/cn';
import TiltedHeroMedia from '../TiltedHeroMedia/TiltedHeroMedia';
import styles from './BadgeHeroMedia.module.css';

/**
 * Inner-page hero right column (Billing, Contact Center, Patient Portal): the shared tilted image with a white
 * badge (`badge`: { icon, label, text }) over its lower left, placed as in those frames. A page can
 * move the badge with `className` setting `--badge-left` / `--badge-left-scaled`.
 */
function BadgeHeroMedia({ media, badge, className }) {
  return (
    <div className={cn(styles.wrap, className)}>
      <TiltedHeroMedia {...media} />
      <div className={styles.badge}>
        <span className={styles.icon}>
          <img src={badge.icon} alt="" width="48" height="48" />
        </span>
        <p>
          <span className={styles.label}>{badge.label}</span>
          <span className={styles.text}>{badge.text}</span>
        </p>
      </div>
    </div>
  );
}

export default BadgeHeroMedia;
