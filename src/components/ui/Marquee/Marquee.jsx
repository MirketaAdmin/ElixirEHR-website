import { Children } from 'react';
import { cn } from '../../../utils/cn';
import styles from './Marquee.module.css';

/**
 * Continuous horizontal marquee. The children are rendered twice (the copy hidden from assistive
 * tech) and the track slides by exactly one copy, so the loop has no visible jump.
 *
 * - `duration`: seconds for one full loop — the single speed control (larger = slower).
 * - `gap`: px between items (also used after the last item so the seam matches).
 * - Pauses on hover; shows a static, wrapping row for visitors who prefer reduced motion.
 */
function Marquee({ children, duration = 40, gap = 64, label, className }) {
  const items = Children.toArray(children);
  const style = { '--marquee-duration': `${duration}s`, '--marquee-gap': `${gap}px` };

  return (
    <div className={cn(styles.marquee, className)} style={style}>
      <div className={styles.track}>
        <ul className={styles.group} aria-label={label}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul className={cn(styles.group, styles.copy)} aria-hidden="true">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Marquee;
