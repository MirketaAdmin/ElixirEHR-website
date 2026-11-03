import { sslAccess } from '../../../../../data/salesforceSecurityLayer';
import Section from '../../../../../components/layout/Section/Section';
import RichText from '../../../../../components/ui/RichText/RichText';
import ComplianceIntro from '../../../components/ComplianceIntro/ComplianceIntro';
import styles from './AccessSection.module.css';

/**
 * "How Access Is Controlled": the four access layers as a stepped ladder. Each step is indented one
 * level further and carries an explicit "Layer N" label, so the hierarchy never rests on position alone.
 */
function AccessSection() {
  const { eyebrow, title, description, layers, caption } = sslAccess;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="ssl-access-title">
      <ComplianceIntro id="ssl-access-title" eyebrow={eyebrow} title={title} description={description} />
      <ol className={styles.ladder}>
        {layers.map((layer, index) => (
          <li key={layer.label} className={styles.layer} style={{ '--depth': index }}>
            <span className={styles.label}>{layer.label}</span>
            <div>
              <h3 className={styles.title}>{layer.title}</h3>
              <p className={styles.text}>{layer.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className={styles.caption}>
        <RichText content={caption} linkClassName={styles.link} />
      </p>
    </Section>
  );
}

export default AccessSection;
