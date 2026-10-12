import { cn } from '../../../utils/cn';
import styles from './ImagePlaceholder.module.css';

/**
 * The Figma frame shows a "Generic image placeholder" card where a lifestyle photograph is still
 * to be supplied. It is reproduced as designed; replace it with an <img> once the photo exists.
 * `description` names the missing image (defaults to the RCM frame's lifestyle-photo note).
 */
function ImagePlaceholder({ className, description }) {
  return (
    <div className={cn(styles.card, className)} role="img" aria-label="Image placeholder">
      <p className={styles.title}>Generic image placeholder</p>
      <p className={styles.text}>
        {description ?? (
          <>
            Lifestyle photograph: revenue cycle
            <br />
            team at work, matching the imagery
            <br />
            style of the existing Elixir pages.
          </>
        )}
      </p>
    </div>
  );
}

export default ImagePlaceholder;
