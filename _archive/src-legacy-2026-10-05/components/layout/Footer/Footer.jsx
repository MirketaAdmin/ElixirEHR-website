import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Button from '../../ui/Button/Button';
import { footerColumns, socialLinks } from '../../../data/footerLinks';
import styles from './Footer.module.css';

const socialIcons = {
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9.98h4V21H3V9.98zM9 9.98h3.84v1.51h.05c.53-1 1.84-2.06 3.79-2.06 4.06 0 4.81 2.67 4.81 6.14V21h-4v-4.86c0-1.16-.02-2.65-1.62-2.65-1.62 0-1.87 1.27-1.87 2.57V21H9V9.98z" />
    </svg>
  ),
  x: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 3H21l-6.6 7.5L21.7 21H16l-5-6.4L5.2 21H3l7-8-8-10h5.8l4.6 5.9L18.9 3z" />
    </svg>
  ),
  youtube: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 8.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C16.4 4.6 12 4.6 12 4.6h0s-4.4 0-7.1.3c-.4 0-1.3.1-2.1 1-.6.7-.8 2.3-.8 2.3S1.7 10 1.7 11.9v1.8C1.7 15.6 2 17.4 2 17.4s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.3.3 7.3.3s4.4 0 7.1-.3c.4 0 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.3-1.8.3-3.7v-1.8c0-1.9-.3-3.7-.3-3.7zM9.9 15.2V9.4l5.6 2.9-5.6 2.9z" />
    </svg>
  ),
};

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.top}>
        <div className={styles.brandColumn}>
          <Logo variant="dark" />
          <p className={`${styles.tagline} body-md`}>
            Empowering modern healthcare through intelligent automation and secure, cloud-native
            EHR solutions.
          </p>
          <div className={styles.social}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={styles.socialLink}
                target="_blank"
                rel="noreferrer"
              >
                {socialIcons[social.icon]}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.linkColumns}>
          {footerColumns.map((column) => (
            <div key={column.title} className={styles.linkColumn}>
              <p className={`${styles.columnTitle} label-md`}>{column.title}</p>
              <ul className={styles.linkList}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={`${styles.link} body-md`}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <Container className={styles.bottom}>
        <p className={`${styles.copyright} label-sm`}>
          © {new Date().getFullYear()} Elixir. All rights reserved.
        </p>
        <Button as="a" href="/demo" variant="primary" size="sm">
          Request a Demo
        </Button>
      </Container>
    </footer>
  );
}

export default Footer;
