import { dmFeatures } from '../../../../data/denialManagement';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import checkIcon from '../../../../assets/denial-management/icon-check-circle.png';
import DmSectionHeading from '../../components/DmSectionHeading/DmSectionHeading';
import styles from './FeaturesSection.module.css';

function FeatureText({ feature, className }) {
  return (
    <div className={cn(styles.text, className)}>
      <span className={styles.icon}>
        <img src={feature.icon.src} alt="" width={feature.icon.width} height={feature.icon.height} />
      </span>
      <h3 className={styles.title}>{feature.title}</h3>
      <p className={styles.description}>{feature.description}</p>
      {feature.points && (
        <ul className={styles.points}>
          {feature.points.map((point) => (
            <li key={point}>
              <img src={checkIcon} alt="" width="15" height="16" />
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** A feature's product screenshot (a white card with its own padding, as exported from the frame). */
function FeatureImage({ image, className }) {
  return (
    <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      className={cn(styles.screen, className)}
    />
  );
}

/** Feature rows alternate text / screenshot; the last feature is full width. */
function FeaturesSection() {
  const rows = dmFeatures.items.slice(0, -1);
  const wide = dmFeatures.items.at(-1);

  return (
    <Section spacing="none" className={styles.section}>
      <DmSectionHeading
        badge={dmFeatures.badge}
        title={dmFeatures.title}
        description={dmFeatures.description}
        className={styles.heading}
      />
      <div className={styles.rows}>
        {rows.map((feature, index) => (
          <div key={feature.title} className={cn(styles.row, index % 2 === 1 && styles.reverse)}>
            <FeatureText feature={feature} />
            <FeatureImage image={feature.image} />
          </div>
        ))}
        <div className={styles.wide}>
          <FeatureText feature={wide} className={styles.wideText} />
          <FeatureImage image={wide.image} className={styles.wideScreen} />
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
