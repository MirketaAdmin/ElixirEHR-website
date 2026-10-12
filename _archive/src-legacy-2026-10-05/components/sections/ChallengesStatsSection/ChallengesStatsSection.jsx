import Container from '../../layout/Container/Container';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import StatCard from '../../ui/StatCard/StatCard';
import { stats } from '../../../data/stats';
import styles from './ChallengesStatsSection.module.css';

function ChallengesStatsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          align="center"
          eyebrow="What Elixir Can Help You Avoid"
          title="Elixir Understands Your Challenges"
          className={styles.heading}
        />
        <div className={styles.grid}>
          {stats.map((stat) => (
            <StatCard key={stat.value} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ChallengesStatsSection;
