import Container from '../../layout/Container/Container';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import SolutionCard from '../../ui/SolutionCard/SolutionCard';
import { solutions } from '../../../data/solutions';
import styles from './SolutionsSection.module.css';

function SolutionsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          align="center"
          tone="dark"
          eyebrow="Our AI Solutions"
          title="Elixir AI Capabilities"
          description="Revolutionize your healthcare workflows with our suite of clinical-grade AI tools designed for precision and speed."
          className={styles.heading}
        />

        <div className={styles.grid}>
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} {...solution} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SolutionsSection;
