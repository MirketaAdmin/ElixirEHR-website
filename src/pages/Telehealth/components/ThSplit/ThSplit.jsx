import { cn } from '../../../../utils/cn';
import styles from './ThSplit.module.css';

/**
 * The frame's two-column band: eyebrow, H2, description and a tinted note card on the left, the
 * section's card list (`children`) on the right. `noteTone` lavender | green | red; `dot` as ThIntro.
 */
function ThSplit({ id, eyebrow, title, description, note, noteTone = 'lavender', dot, className, children }) {
  return (
    <div className={cn(styles.layout, className)}>
      <div className={styles.side}>
        <p className={cn(styles.eyebrow, dot && styles[dot])}>{eyebrow}</p>
        <h2 id={id} className={styles.title}>
          {title}
        </h2>
        <p className={styles.description}>{description}</p>
        <div className={cn(styles.note, styles[`${noteTone}Note`])}>
          <p className={styles.noteLabel}>
            <img src={note.icon.src} alt="" width={note.icon.size[0]} height={note.icon.size[1]} />
            {note.label}
          </p>
          <p className={styles.noteText}>{note.text}</p>
        </div>
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default ThSplit;
