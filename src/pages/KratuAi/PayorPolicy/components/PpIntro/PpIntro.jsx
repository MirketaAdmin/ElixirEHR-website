import { cn } from '../../../../../utils/cn';
import styles from './PpIntro.module.css';

/**
 * Section opener on the Payor Policy Intelligence page: a dotted caps eyebrow, the H2 and an
 * optional intro. align: 'left' | 'center'. tone: 'light' (purple) | 'dark' (lime eyebrow, white
 * title). Widths and gaps come from `className` (`--pp-title-width`, `--pp-title-size`,
 * `--pp-title-leading`, `--pp-title-gap`, `--pp-description-width`, `--pp-description-gap`).
 */
function PpIntro({ id, eyebrow, title, description, align = 'left', tone = 'light', className }) {
  return (
    <div className={cn(styles.intro, styles[align], styles[tone], className)}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export default PpIntro;
