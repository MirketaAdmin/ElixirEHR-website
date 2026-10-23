import { cn } from '../../../../utils/cn';
import styles from './SectionIntro.module.css';

/**
 * Section opener used across this page: a caps "chip" eyebrow, the 36px H2 and an optional intro.
 * chip: 'light' (near-white lavender, on white bands) | 'tint' (Surface Variant light, on tinted
 * bands) | 'outlined' (light + hairline border) | 'dark' (on the dark band, lime text).
 * titleTone: 'purple' (Surface Variant dark) | 'dark' (heading colour) | 'light' (white).
 * Frame-specific gaps are set by the section through `className`.
 */
function SectionIntro({ id, chip, chipTone = 'light', title, titleTone = 'purple', description, className }) {
  return (
    <div className={cn(styles.intro, className)}>
      <p className={cn(styles.chip, styles[chipTone])}>{chip}</p>
      <h2 id={id} className={cn(styles.title, styles[`title-${titleTone}`])}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export default SectionIntro;
