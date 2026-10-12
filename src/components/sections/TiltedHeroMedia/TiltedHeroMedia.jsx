import styles from './TiltedHeroMedia.module.css';

/**
 * Inner-page hero right column (Revenue Cycle Management, Eligibility Verification): a 467×460
 * photo on a tilted backdrop. The backdrop and its
 * shadow are part of the exported image, which overflows the photo box on every side.
 */
function TiltedHeroMedia({ src, alt }) {
  return (
    <div className={styles.media}>
      <img src={src} alt={alt} width="511" height="507" className={styles.image} />
    </div>
  );
}

export default TiltedHeroMedia;
