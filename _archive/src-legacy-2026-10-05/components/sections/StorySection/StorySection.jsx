import Container from '../../layout/Container/Container';
import ImagePlaceholder from '../../ui/ImagePlaceholder/ImagePlaceholder';
import FloatingBadge from '../../ui/FloatingBadge/FloatingBadge';
import styles from './StorySection.module.css';

function StorySection() {
  return (
    <section className={styles.section}>
      <Container className={styles.grid}>
        <div className={styles.visual}>
          <ImagePlaceholder
            label="Elixir founding team reviewing the EHR dashboard — needs hi-res export from Figma"
            ratio="4 / 3"
            rounded="lg"
          />
          <div className={styles.badgeSlot}>
            <FloatingBadge variant="solid" title="Est. 2019" subtitle="Dublin, California" />
          </div>
        </div>

        <div className={styles.copy}>
          <p className={`${styles.eyebrow} eyebrow`}>Genesis</p>
          <h2 className={`${styles.title} headline-lg`}>Our Story</h2>
          <p className={`${styles.paragraph} body-md`}>
            Based in Dublin, California, Elixir was founded in 2019 by{' '}
            <span className={styles.highlight}>Rajeev Kumar</span>, a laser-focused innovator who
            experienced the frustrations of healthcare providers firsthand when attempting to
            streamline processes with legacy EHR systems.
          </p>
          <p className={`${styles.paragraph} body-md`}>
            Determined to remove the administrative burdens that drain time, energy, and
            enthusiasm from providers, Kumar envisioned a world where every clinician and patient
            could thrive through seamless technology.
          </p>
          <blockquote className={styles.quote}>
            <p className="body-lg">
              &ldquo;Removing the administrative friction from the human side of healing.&rdquo;
            </p>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}

export default StorySection;
