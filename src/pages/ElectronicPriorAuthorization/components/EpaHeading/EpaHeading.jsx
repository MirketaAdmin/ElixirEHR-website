import { cn } from '../../../../utils/cn';
import styles from './EpaHeading.module.css';

/**
 * The page's centred section heading: an H2 and an optional description. Sizes, colours and gaps
 * differ per band, so each section sets them through `className` (CSS variables below).
 * tone: 'light' (purple title) | 'dark' (white title) | 'ink' (near-black title).
 */
function EpaHeading({ id, title, description, tone = 'light', className }) {
  return (
    <div className={cn(styles.heading, styles[tone], className)}>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export default EpaHeading;
