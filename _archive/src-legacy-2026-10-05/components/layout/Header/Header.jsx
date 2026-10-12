import { useState } from 'react';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Button from '../../ui/Button/Button';
import { navLinks } from '../../../data/nav';
import styles from './Header.module.css';

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Container className={styles.bar}>
        <a href="/" className={styles.logoLink} aria-label="Elixir home">
          <Logo variant="dark" />
        </a>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={`${styles.navLink} label-md`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <button type="button" className={styles.iconButton} aria-label="Search">
            <SearchIcon />
          </button>
          <Button as="a" href="/demo" variant="primary" size="sm" className={styles.desktopCta}>
            Request a Demo
          </Button>
          <button
            type="button"
            className={styles.menuButton}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </Container>

      {menuOpen && (
        <nav id="mobile-nav" className={styles.mobileNav} aria-label="Mobile">
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${styles.mobileNavLink} body-lg`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button as="a" href="/demo" variant="primary" className={styles.mobileCta}>
            Request a Demo
          </Button>
        </nav>
      )}
    </header>
  );
}

export default Header;
