import styles from './ImagePlaceholder.module.css';

/**
 * Neutral stand-in for imagery we don't have a hi-res export for yet
 * (product screenshots, headshots, partner logos). Intentionally
 * labeled rather than decorative, so it's obvious what to swap in.
 */
function ImagePlaceholder({ label, ratio = '4 / 3', className = '', rounded = 'lg' }) {
  return (
    <div
      className={`${styles.placeholder} ${styles[`radius-${rounded}`]} ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label}
    >
      <span className={`${styles.label} label-sm`}>{label}</span>
    </div>
  );
}

export default ImagePlaceholder;
