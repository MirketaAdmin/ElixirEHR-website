import { cn } from '../../../utils/cn';
import styles from './WideTiltedHeroMedia.module.css';

/**
 * Inner-page hero right column (Contact Center, Kratu AI): a 521×460 image card on its tilted
 * backdrop. The exported image (backdrop and shadow included) overflows the card box, as
 * `TiltedHeroMedia` does for the narrower 467px frames. A taller export passes its `height` and a
 * `className` that moves the image up to match.
 */
function WideTiltedHeroMedia({ src, alt, height = 530, className }) {
  return (
    <div className={cn(styles.media, className)}>
      <img src={src} alt={alt} width="583" height={height} className={styles.image} />
    </div>
  );
}

export default WideTiltedHeroMedia;
