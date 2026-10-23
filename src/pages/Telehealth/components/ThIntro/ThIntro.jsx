import { cn } from '../../../../utils/cn';
import styles from './ThIntro.module.css';

/**
 * Section intro for the Telehealth frame: a dotted monospace eyebrow, the 48/56 H2 and a
 * description, closed by a hairline rule. `layout` split (description right, bottom-aligned) |
 * stacked (description under the title). `tone` light | dark; `dot` purple | lime | red.
 * Per-section widths come from `--th-*` variables set by the section's `className`.
 */
function ThIntro({ id, eyebrow, title, description, layout = 'split', tone = 'light', dot, className }) {
  return (
    <div className={cn(styles.intro, styles[layout], styles[tone], className)}>
      <div className={styles.head}>
        <p className={cn(styles.eyebrow, dot && styles[dot])}>{eyebrow}</p>
        <h2 id={id} className={styles.title}>
          {title}
        </h2>
      </div>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export default ThIntro;
