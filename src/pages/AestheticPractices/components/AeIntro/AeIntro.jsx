import { cn } from '../../../../utils/cn';
import BhIntro from '../../../BehavioralHealth/components/BhIntro/BhIntro';
import styles from './AeIntro.module.css';

/**
 * Section intro for the Aesthetic Practices frame: Behavioral Health's `BhIntro` (caps eyebrow,
 * 48/56 title, 18/28 description). On dark bands the eyebrow turns lime.
 */
function AeIntro({ className, ...props }) {
  return <BhIntro {...props} className={cn(styles.intro, className)} />;
}

export default AeIntro;
