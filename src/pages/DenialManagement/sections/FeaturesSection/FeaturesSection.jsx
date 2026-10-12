import { dmFeatures } from '../../../../data/denialManagement';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import ImagePlaceholder from '../../../../components/ui/ImagePlaceholder/ImagePlaceholder';
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

/**
 * Feature rows alternate text / image (the image column is the frame's "Generic image
 * placeholder": the screenshots have not been supplied). The last feature is full width.
 */
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
            <ImagePlaceholder className={styles.placeholder} />
          </div>
        ))}
        <div className={styles.wide}>
          <FeatureText feature={wide} className={styles.wideText} />
          <div className={styles.wideCard}>
            <ImagePlaceholder className={cn(styles.placeholder, styles.widePlaceholder)} />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
