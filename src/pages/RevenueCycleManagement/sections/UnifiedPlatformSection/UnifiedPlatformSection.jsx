import { unifiedPlatform } from '../../../../data/revenueCycleManagement';
import Section from '../../../../components/layout/Section/Section';
import Button from '../../../../components/ui/Button/Button';
import RcmBadge from '../../components/RcmBadge/RcmBadge';
import RichText from '../../../../components/ui/RichText/RichText';
import ImagePlaceholder from '../../../../components/ui/ImagePlaceholder/ImagePlaceholder';
import styles from './UnifiedPlatformSection.module.css';

function UnifiedPlatformSection() {
  const { badge, title, lead, body, primaryCta, secondaryCta } = unifiedPlatform;

  return (
    <Section tone="surface" spacing="none" className={styles.section} containerClassName={styles.inner}>
      <div className={styles.content}>
        <RcmBadge>{badge}</RcmBadge>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.lead}>{lead}</p>
        <p className={styles.body}>
          <RichText content={body} linkClassName={styles.link} strongClassName={styles.strong} />
        </p>
        <div className={styles.actions}>
          <Button to={primaryCta.to} className={styles.primary}>
            {primaryCta.label}
          </Button>
          <Button href={secondaryCta.href} className={styles.secondary}>
            {secondaryCta.label}
          </Button>
        </div>
      </div>
      <ImagePlaceholder className={styles.media} />
    </Section>
  );
}

export default UnifiedPlatformSection;
