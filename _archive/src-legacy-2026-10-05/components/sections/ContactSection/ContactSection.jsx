import Container from '../../layout/Container/Container';
import LogoStrip from '../../ui/LogoStrip/LogoStrip';
import ContactForm from '../../ui/ContactForm/ContactForm';
import { MailIcon, PhoneIcon, PinIcon } from '../../ui/icons/CommonIcons';
import { contactInfo } from '../../../data/contact';
import styles from './ContactSection.module.css';

const icons = { mail: MailIcon, phone: PhoneIcon, pin: PinIcon };

function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <Container className={styles.grid}>
        <div className={styles.copy}>
          <p className={`${styles.eyebrow} eyebrow`}>Get in Touch</p>
          <h2 className={`${styles.title} headline-lg`}>Contact Us</h2>
          <p className={`${styles.paragraph} body-md`}>
            We are here to help you 7 days a week and respond within 24 hours. Plus, you can find
            most answers to your questions right on our FAQ page.
          </p>

          <ul className={styles.infoList}>
            {contactInfo.map((item) => {
              const Icon = icons[item.icon];
              const content = (
                <>
                  <span className={styles.infoIcon}>
                    <Icon />
                  </span>
                  <span>
                    <span className={`${styles.infoLabel} label-sm`}>{item.label}</span>
                    <span className={`${styles.infoValue} body-md`}>{item.value}</span>
                  </span>
                </>
              );
              return (
                <li key={item.label} className={styles.infoItem}>
                  {item.href ? (
                    <a href={item.href} className={styles.infoLink}>
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>

          <p className={`${styles.trustedLabel} label-md`}>
            Trusted by more than 1,200 clinics worldwide
          </p>
          <LogoStrip count={5} />
        </div>

        <div className={styles.formWrap}>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;
