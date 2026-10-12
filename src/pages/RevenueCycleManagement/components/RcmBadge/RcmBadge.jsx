import { cn } from '../../../../utils/cn';
import styles from './RcmBadge.module.css';

/**
 * Small uppercase section label pill used above the RCM headings.
 * tone: neutral (grey, lime dot) | lime (white text) | lavender (purple text)
 * Pass `icon` (an image src) for the leading glyph; the neutral tone draws a dot instead.
 */
function RcmBadge({ tone = 'neutral', icon, iconSize = [12, 12], className, children }) {
  return (
    <p className={cn(styles.badge, styles[tone], className)}>
      {icon ? (
        <img src={icon} alt="" width={iconSize[0]} height={iconSize[1]} className={styles.icon} />
      ) : (
        <span className={styles.dot} aria-hidden="true" />
      )}
      {children}
    </p>
  );
}

export default RcmBadge;
