import { cn } from '../../../../utils/cn';
import styles from './KrIntro.module.css';

/**
 * Section opener used across the KratuAI pages: an eyebrow, the H2 and an optional intro.
 * eyebrowStyle: 'caps' (tracked caps text) | 'chip' (lavender pill, the agent sections).
 * tone: 'light' (purple eyebrow, dark title) | 'dark' (lime eyebrow, white title) |
 * 'agent' (purple title) | 'lime' (lime eyebrow, dark title, grey intro: Visit Prep) |
 * 'feature' (lime eyebrow, Surface Variant dark title: Kratu Co-Pilot).
 * align: 'left' | 'center'. Widths and gaps come from `className` (CSS variables
 * `--kr-title-width`, `--kr-title-gap`, `--kr-description-width`, `--kr-description-gap`).
 */
function KrIntro({ id, eyebrow, title, description, eyebrowStyle = 'caps', tone = 'light', align = 'left', className }) {
  return (
    <div className={cn(styles.intro, styles[tone], styles[align], className)}>
      <p className={cn(styles.eyebrow, styles[eyebrowStyle])}>{eyebrow}</p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export default KrIntro;
