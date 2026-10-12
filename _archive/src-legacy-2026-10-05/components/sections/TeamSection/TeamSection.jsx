import Container from '../../layout/Container/Container';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import TeamMemberCard from '../../ui/TeamMemberCard/TeamMemberCard';
import { team } from '../../../data/team';
import styles from './TeamSection.module.css';

function TeamSection() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Our Leadership"
          title="Meet Our Core Team"
          className={styles.heading}
        />
        <div className={styles.grid}>
          {team.map((member, index) => (
            <TeamMemberCard key={`${member.name}-${index}`} {...member} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TeamSection;
