import { sslAttribution } from '../../../../../data/salesforceSecurityLayer';
import Section from '../../../../../components/layout/Section/Section';
import RichText from '../../../../../components/ui/RichText/RichText';
import ComplianceIntro from '../../../components/ComplianceIntro/ComplianceIntro';
import styles from './AttributionSection.module.css';

/** "Platform Attestations Belong to the Platform": heading and kicker beside three paragraphs, on purple. */
function AttributionSection() {
  const { eyebrow, title, kicker, paragraphs } = sslAttribution;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="ssl-attribution-title">
      <div className={styles.split}>
        <div>
          <ComplianceIntro id="ssl-attribution-title" eyebrow={eyebrow} title={title} tone="dark" />
          <p className={styles.kicker}>{kicker}</p>
        </div>
        <div className={styles.body}>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>
              <RichText content={paragraph} strongClassName={styles.strong} linkClassName={styles.link} />
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default AttributionSection;
