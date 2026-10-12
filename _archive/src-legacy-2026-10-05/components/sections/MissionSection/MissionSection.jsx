import Container from '../../layout/Container/Container';
import FeatureCard from '../../ui/FeatureCard/FeatureCard';
import ImagePlaceholder from '../../ui/ImagePlaceholder/ImagePlaceholder';
import { CloudIcon, ChipIcon } from '../../ui/icons/CommonIcons';
import styles from './MissionSection.module.css';

function MissionSection() {
  return (
    <section className={styles.section}>
      <Container className={styles.grid}>
        <div className={styles.copy}>
          <p className={`${styles.eyebrow} eyebrow`}>The Mission</p>
          <h2 className={`${styles.title} headline-lg`}>
            Redefining Efficiency in Patient-Centered Care
          </h2>
          <p className={`${styles.paragraph} body-md`}>
            When it comes to healthcare, efficiency can be the difference between serving more
            patients or burning out. Our cloud-based solutions are built for total control and
            complete customizability.
          </p>

          <div className={styles.cards}>
            <FeatureCard
              icon={<CloudIcon />}
              title="Cloud-Native"
              description="Fully secure, accessible, and scalable infrastructure for modern practices."
            />
            <FeatureCard
              icon={<ChipIcon />}
              title="AI-Driven"
              description="Intelligent automation that understands clinical context and reduces documentation time."
            />
          </div>
        </div>

        <div className={styles.visual}>
          <ImagePlaceholder
            label="Modern healthcare facility interior — needs hi-res export from Figma"
            ratio="4 / 5"
            rounded="xl"
          />
          <div className={styles.caption}>
            <p className={`${styles.captionTitle} headline-sm`}>Empowering Facilities</p>
            <p className={`${styles.captionSubtitle} body-md`}>
              Maximize reimbursements and operational health with every click.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MissionSection;
