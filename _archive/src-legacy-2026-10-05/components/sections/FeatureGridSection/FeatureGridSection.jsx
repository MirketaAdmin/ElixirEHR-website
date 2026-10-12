import Container from '../../layout/Container/Container';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import FeatureCard from '../../ui/FeatureCard/FeatureCard';
import styles from './FeatureGridSection.module.css';

/**
 * Generic "heading + grid of FeatureCards" section, reused wherever a page
 * needs to list a set of capabilities/categories (Products, Solutions, ...)
 * without repeating the same section markup per page.
 */
function FeatureGridSection({ eyebrow, title, description, items, tone = 'surface' }) {
  return (
    <section className={`${styles.section} ${styles[tone]}`}>
      <Container>
        <SectionHeading
          align="center"
          eyebrow={eyebrow}
          title={title}
          description={description}
          className={styles.heading}
        />
        <div className={styles.grid}>
          {items.map((item) => (
            <FeatureCard key={item.title} tone="light" {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeatureGridSection;
