import { contact } from '../../../data/contact';
import { cn } from '../../../utils/cn';
import Section from '../../layout/Section/Section';
import ContactForm from './ContactForm';
import styles from './ContactSection.module.css';

/**
 * `logos` replaces the default "Trusted by" row; an item's `display` ([width, height]) sets its
 * drawn size, otherwise it is drawn at 72% of its listed size. `logoGap` overrides the row's gap.
 */
function ContactSection({ logos = contact.logos, logoGap }) {
  return (
    <Section tone="surface" spacing="none" id="contact" className={styles.section} containerClassName={styles.inner}>
      <div>
        <p className={styles.eyebrow}>{contact.eyebrow}</p>
        <h2 className={cn('text-headline-lg', styles.title)}>{contact.title}</h2>
        <p className={styles.description}>{contact.description}</p>

        <ul className={styles.channels}>
          {contact.channels.map((channel) => {
            const value = channel.href ? <a href={channel.href}>{channel.value}</a> : channel.value;
            return (
              <li key={channel.label} className={styles.channel}>
                <span className={styles.tile} style={{ width: channel.tile[0], height: channel.tile[1] }}>
                  <img src={channel.icon} alt="" width={channel.iconSize[0]} height={channel.iconSize[1]} />
                </span>
                <p>
                  <span className={styles.channelLabel}>{channel.label}</span>
                  <span className={styles.channelValue}>{value}</span>
                </p>
              </li>
            );
          })}
        </ul>

        <p className={styles.trustedLabel}>{contact.trustedLabel}</p>
        <ul className={styles.logos} style={logoGap === undefined ? undefined : { gap: logoGap }}>
          {logos.map((logo) => (
            <li key={logo.name}>
              <img
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                style={{
                  width: logo.display?.[0] ?? logo.width * 0.72,
                  height: logo.display?.[1] ?? logo.height * 0.72,
                }}
              />
            </li>
          ))}
        </ul>
      </div>

      <ContactForm />
    </Section>
  );
}

export default ContactSection;
