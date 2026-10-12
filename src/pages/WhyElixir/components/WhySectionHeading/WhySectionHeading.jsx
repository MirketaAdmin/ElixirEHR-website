import styles from './WhySectionHeading.module.css';

/** Centred eyebrow + 36px H2 used by two sections of the Why Elixir frame. */
function WhySectionHeading({ eyebrow, title }) {
  return (
    <div className={styles.heading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}

export default WhySectionHeading;
