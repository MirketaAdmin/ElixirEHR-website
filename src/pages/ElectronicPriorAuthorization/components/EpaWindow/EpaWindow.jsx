import { cn } from '../../../../utils/cn';
import styles from './EpaWindow.module.css';

/**
 * The frame's product screenshots: a window with a title bar (three dots, a title and a status
 * pill) over the screenshot body. The title bar is drawn here; the body is an image exported from
 * the frame. badgeTone: 'lavender' | 'green' | 'yellow'.
 */
function EpaWindow({ title, badge, badgeTone = 'lavender', image, className }) {
  return (
    <figure className={cn(styles.window, className)}>
      <figcaption className={styles.bar}>
        <span className={styles.dots} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className={styles.title}>{title}</span>
        <span className={cn(styles.badge, styles[badgeTone])}>{badge}</span>
      </figcaption>
      <img
        src={image.src}
        alt={image.alt}
        width={image.size[0]}
        height={image.size[1]}
        loading="lazy"
        className={styles.body}
      />
    </figure>
  );
}

export default EpaWindow;
