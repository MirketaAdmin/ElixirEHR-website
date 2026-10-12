import { fsFeatures } from '../../../../data/evvFieldService';
import Section from '../../../../components/layout/Section/Section';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import ImagePlaceholder from '../../../../components/ui/ImagePlaceholder/ImagePlaceholder';
import ScreenshotNote from '../../components/ScreenshotNote/ScreenshotNote';
import styles from './FeaturesSection.module.css';

/** "Native Salesforce EVV Software…" (target of the hero's "Explore EVV Features" CTA). */
function FeaturesSection() {
  const { eyebrow, title, description, items, screenshotNote } = fsFeatures;

  return (
    <Section id="evv-features" spacing="none" className={styles.section} aria-labelledby="fs-features">
      <div className={styles.intro}>
        <EyebrowHeading id="fs-features" eyebrow={eyebrow} title={title} className={styles.heading} />
        <p className={styles.description}>{description}</p>
      </div>

      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <span className={styles.iconTile}>
              <img src={item.icon} alt="" width="24" height="24" />
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>

      <div className={styles.media}>
        <ImagePlaceholder className={styles.placeholder} />
        <ScreenshotNote {...screenshotNote} />
      </div>
    </Section>
  );
}

export default FeaturesSection;
