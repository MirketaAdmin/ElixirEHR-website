import styles from './Logo.module.css';

/**
 * Temporary text wordmark standing in for the supplied "elixir" logo file
 * (a chat attachment, not yet saved into /public/logos). Swap for
 * <img src="/logos/elixir-wordmark.svg" /> once the real asset is added —
 * do not redraw or restyle the real mark once it's in place.
 */
function Logo({ variant = 'dark', className = '' }) {
  return (
    <span className={`${styles.logo} ${styles[variant]} ${className}`}>
      elixir<span className={styles.dot}>.</span>
    </span>
  );
}

export default Logo;
