import styles from './EhrHeroMedia.module.css';

/**
 * Right column of the EHR hero. The photo and the frosted "AI insight" card body are one image
 * (the card is translucent over the photo); its text is rendered on top.
 */
function EhrHeroMedia({ src, alt, insight }) {
  return (
    <div className={styles.media}>
      <img src={src} alt={alt} width="504" height="528" className={styles.image} />
      <p className={styles.insight}>
        <span className={styles.label}>{insight.label}</span>
        <span className={styles.text}>{insight.text}</span>
      </p>
    </div>
  );
}

export default EhrHeroMedia;
