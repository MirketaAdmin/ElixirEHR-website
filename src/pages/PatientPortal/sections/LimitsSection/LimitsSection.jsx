import { Link } from 'react-router-dom';
import { patientPortalConnected, patientPortalLimits } from '../../../../data/patientPortal';
import Section from '../../../../components/layout/Section/Section';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import Icon from '../../../../components/ui/Icon/Icon';
import styles from './LimitsSection.module.css';

/** A connected-product card: a router link when the product page exists, otherwise a plain card. */
function ConnectedCard({ item }) {
  const body = (
    <>
      <span className={styles.tile}>
        <img src={item.icon} alt="" width="21" height="21" />
      </span>
      <h3 className={styles.cardTitle}>{item.title}</h3>
      <p className={styles.cardText}>{item.text}</p>
    </>
  );
  return item.to ? (
    <Link to={item.to} className={styles.card}>
      {body}
    </Link>
  ) : (
    <div className={styles.card}>{body}</div>
  );
}

/** "Honest limits" (patients who will never log in) beside "Connected" (how the portal ties into Elixir). */
function LimitsSection() {
  const limits = patientPortalLimits;
  const connected = patientPortalConnected;

  return (
    <Section tone="surface" spacing="none" className={styles.section} containerClassName={styles.layout}>
      <section aria-labelledby="pp-limits-title">
        <EyebrowHeading id="pp-limits-title" eyebrow={limits.eyebrow} title={limits.title} className={styles.heading} />
        {limits.paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
        <div className={styles.note}>
          <p className={styles.noteText}>{limits.note}</p>
          {limits.link.to ? (
            <Link to={limits.link.to} className={styles.noteLink}>
              {limits.link.label}
              <Icon name="arrowRight" size={16} />
            </Link>
          ) : (
            <span className={styles.noteLink} aria-hidden="true">
              {limits.link.label}
              <Icon name="arrowRight" size={16} />
            </span>
          )}
        </div>
      </section>

      <section aria-labelledby="pp-connected-title">
        <EyebrowHeading
          id="pp-connected-title"
          eyebrow={connected.eyebrow}
          title={connected.title}
          className={styles.heading}
        />
        <ul className={styles.grid}>
          {connected.items.map((item) => (
            <li key={item.title}>
              <ConnectedCard item={item} />
            </li>
          ))}
        </ul>
      </section>
    </Section>
  );
}

export default LimitsSection;
