import { useEffect, useId, useState } from 'react';
import { cn } from '../../../utils/cn';
import { demoCta } from '../../../data/navigation';
import Container from '../Container/Container';
import Logo from '../../ui/Logo/Logo';
import Button from '../../ui/Button/Button';
import Icon from '../../ui/Icon/Icon';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import styles from './Header.module.css';

// Matches the header's CSS breakpoint: below it the mega menu gives way to the hamburger.
const DESKTOP_QUERY = '(min-width: 1200px)';

/**
 * Global sticky header: logo (Home), primary navigation (mega menus on desktop, an accordion
 * behind the hamburger below 1200px), search and the "Request a Demo" CTA. Navigation content
 * lives in data/navigation.js.
 */
function Header() {
  const mobileNavId = useId();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // A soft shadow once the page scrolls under the header.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // While the mobile menu is open: lock page scroll, close on Escape or when resized to desktop.
  useEffect(() => {
    if (!mobileOpen) return undefined;

    const desktop = window.matchMedia(DESKTOP_QUERY);
    const closeMenu = () => setMobileOpen(false);
    const onKeyDown = (event) => event.key === 'Escape' && closeMenu();
    const onChange = (event) => event.matches && closeMenu();
    const { overflow } = document.body.style;

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onChange);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onChange);
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={cn(styles.header, scrolled && styles.scrolled)}>
      <Container className={styles.bar}>
        <Logo />

        <div className={styles.desktopNav}>
          <DesktopNav />
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.search} aria-label="Search">
            <Icon name="search" />
          </button>
          <Button to={demoCta.to} size="md" className={styles.cta}>
            {demoCta.label}
          </Button>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={mobileOpen}
            aria-controls={mobileNavId}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((value) => !value)}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} size={28} />
          </button>
        </div>
      </Container>

      {mobileOpen && <MobileNav id={mobileNavId} onNavigate={closeMobile} />}
    </header>
  );
}

export default Header;
