import { cn } from '../../../../utils/cn';
import styles from './CcIntro.module.css';

/**
 * Section opener used across this page: a caps pill chip, the 48px H2 and an optional intro.
 * tone: 'light' (lime chip, dark title, on white/tinted bands) | 'dark' (translucent chip with
 * lime text, white title, on the dark bands). `chipIcon` puts a small icon before the chip text.
 * align: 'left' | 'center'. Frame-specific widths and gaps come from the section's `className`.
 */
function CcIntro({ id, chip, chipIcon, title, description, tone = 'light', align = 'left', className }) {
  return (
    <div className={cn(styles.intro, styles[tone], styles[align], className)}>
      <p className={styles.chip}>
        {chipIcon && <img src={chipIcon.src} alt="" width={chipIcon.width} height={chipIcon.height} />}
        {chip}
      </p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export default CcIntro;
