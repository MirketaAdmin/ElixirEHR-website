import { Link } from 'react-router-dom';
import {
  footerTagline,
  footerColumns,
  socialLinks,
  copyright,
  legalLinks,
} from '../../../data/footer';
import { demoCta } from '../../../data/navigation';
import Container from '../Container/Container';
import Logo from '../../ui/Logo/Logo';
import Button from '../../ui/Button/Button';
import Icon from '../../ui/Icon/Icon';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo />
            <p className={styles.tagline}>{footerTagline}</p>
            <ul className={styles.socials}>
              {socialLinks.map((social) => (
                <li key={social.label}>
                  {social.href ? (
                    <a
                      href={social.href}
                      className={styles.social}
                      aria-label={`${social.label} (opens in a new tab)`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon name={social.icon} size={20} />
                    </a>
                  ) : (
                    // No URL yet: shown as drawn, but not presented as a link.
                    <span className={styles.social} role="img" aria-label={social.label}>
                      <Icon name={social.icon} size={20} />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className={styles.columnTitle}>{column.title}</h2>
              <ul className={styles.links}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className={styles.bottom}>
          <p className={styles.meta}>{copyright}</p>
          {legalLinks.map((link) => (
            <Link key={link.label} to={link.to} className={styles.meta}>
              {link.label}
            </Link>
          ))}
          <Button to={demoCta.to} size="sm">
            {demoCta.label}
          </Button>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
