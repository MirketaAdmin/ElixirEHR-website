import { Link } from 'react-router-dom';
import logoWhite from '../../../assets/brand/elixir-logo-white.png';
import styles from './Logo.module.css';

// Extracted from the Figma export (1×). Swap for the official SVG when supplied.
function Logo({ className }) {
  return (
    <Link to="/" className={className} aria-label="Elixir home">
      <img src={logoWhite} alt="Elixir" width="118" height="48" className={styles.image} />
    </Link>
  );
}

export default Logo;
