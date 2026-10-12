import { cn } from '../../../utils/cn';
import styles from './SectionHeading.module.css';

/**
 * Eyebrow + H2 (+ optional description) block used by most Home sections.
 * align: left | center      tone: light (dark text) | dark (white text on purple)
 * eyebrowCaps: uppercase tracked eyebrow ("OUR AI SOLUTIONS") instead of title case.
 */
function SectionHeading({
  eyebrow,
  eyebrowCaps = false,
  title,
  description,
  align = 'left',
  tone = 'light',
  as: Title = 'h2',
  className,
}) {
  return (
    <div className={cn(styles.heading, styles[align], styles[tone], className)}>
      {eyebrow && <p className={cn(styles.eyebrow, eyebrowCaps && styles.caps)}>{eyebrow}</p>}
      <Title className={cn('text-headline-lg', styles.title)}>{title}</Title>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export default SectionHeading;
