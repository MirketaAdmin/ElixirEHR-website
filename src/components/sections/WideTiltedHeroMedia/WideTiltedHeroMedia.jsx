import styles from './WideTiltedHeroMedia.module.css';

/**
 * Inner-page hero right column (Contact Center, KratuAI): a 521×460 image card on its tilted
 * backdrop. The exported image (backdrop and shadow included) overflows the card box, as
 * `TiltedHeroMedia` does for the narrower 467px frames.
 */
function WideTiltedHeroMedia({ src, alt }) {
  return (
    <div className={styles.media}>
      <img src={src} alt={alt} width="583" height="530" className={styles.image} />
    </div>
  );
}

export default WideTiltedHeroMedia;
