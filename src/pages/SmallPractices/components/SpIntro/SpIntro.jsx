import { cn } from '../../../../utils/cn';
import BhIntro from '../../../BehavioralHealth/components/BhIntro/BhIntro';
import styles from './SpIntro.module.css';

/**
 * Section intro for the Small Practices frame: Behavioral Health's `BhIntro` with the frame's caps
 * pill eyebrow (lavender on light bands, lime on dark ones) and 48/56 title. `strong` sets the
 * description in the frame's semibold purple.
 */
function SpIntro({ strong = false, tone = 'light', className, ...props }) {
  return (
    <BhIntro
      {...props}
      tone={tone}
      className={cn(styles.intro, styles[tone], strong && styles.strong, className)}
    />
  );
}

export default SpIntro;
