import { cn } from '../../../../utils/cn';
import styles from './ScreenshotNote.module.css';

/**
 * The frame's "Suggested screenshot placement" box that sits beside an image placeholder.
 * Reproduced as drawn; it describes the screenshot still to be supplied. `icon` is { src, width, height }
 * (the glyph crops keep the frame's spacing before the title).
 */
function ScreenshotNote({ icon, title, paragraphs, className }) {
  return (
    <aside className={cn(styles.note, className)}>
      <p className={styles.title}>
        <img src={icon.src} alt="" width={icon.width} height={icon.height} />
        {title}
      </p>
      <div className={styles.body}>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </aside>
  );
}

export default ScreenshotNote;
