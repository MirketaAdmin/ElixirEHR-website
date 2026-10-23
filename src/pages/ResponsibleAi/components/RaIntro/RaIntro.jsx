import { cn } from '../../../../utils/cn';
import styles from './RaIntro.module.css';

/**
 * Section opener on the Responsible AI page: a caps pill chip, the H2 and an optional intro.
 * align: 'left' | 'center'. tone: 'light' | 'dark'. chipTone: 'lavender' | 'teal' | 'red'.
 * Sizes and gaps come from `className` (`--ra-title-size`, `--ra-title-leading`,
 * `--ra-title-width`, `--ra-title-gap`, `--ra-description-width`, `--ra-description-gap`).
 */
function RaIntro({ id, chip, title, description, align = 'left', tone = 'light', chipTone = 'lavender', className }) {
  return (
    <div className={cn(styles.intro, styles[align], styles[tone], className)}>
      <p className={cn(styles.chip, styles[chipTone])}>{chip}</p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export default RaIntro;
