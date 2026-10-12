import styles from './LogoStrip.module.css';

/**
 * Renders partner/customer logos. Pass `logos` ({ src, alt }[]) when real
 * assets are available; falls back to labeled placeholder slots for pages
 * that don't have exported logo assets yet.
 */
function LogoStrip({ logos, count = 7 }) {
  if (logos && logos.length > 0) {
    return (
      <div className={styles.strip}>
        {logos.map((logo) => (
          <img key={logo.alt} src={logo.src} alt={logo.alt} className={styles.logoImage} loading="lazy" />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.strip}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={`${styles.logo} label-sm`} aria-hidden="true">
          Logo {index + 1}
        </div>
      ))}
    </div>
  );
}

export default LogoStrip;
