import { cn } from '../../../../utils/cn';
import styles from './ShNote.module.css';

/** The frame's tinted note strip: an icon, an optional bold title and text. `tone` light | dark. */
function ShNote({ note, tone = 'light', className }) {
  return (
    <div className={cn(styles.note, styles[tone], className)}>
      <img src={note.icon.src} alt="" width={note.icon.size[0]} height={note.icon.size[1]} />
      <div>
        {note.title && <p className={styles.title}>{note.title}</p>}
        <p className={styles.text}>{note.text}</p>
      </div>
    </div>
  );
}

export default ShNote;
