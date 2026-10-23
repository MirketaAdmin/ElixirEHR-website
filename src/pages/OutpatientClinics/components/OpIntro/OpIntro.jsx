import { cn } from '../../../../utils/cn';
import BhIntro from '../../../BehavioralHealth/components/BhIntro/BhIntro';
import styles from './OpIntro.module.css';

/**
 * Section intro for the Outpatient Clinics frame: Behavioral Health's `BhIntro` at this frame's
 * 52/56 title, with a lime or yellow eyebrow (`accent`).
 */
function OpIntro({ accent = 'lime', className, ...props }) {
  return <BhIntro {...props} className={cn(styles.intro, styles[accent], className)} />;
}

export default OpIntro;
