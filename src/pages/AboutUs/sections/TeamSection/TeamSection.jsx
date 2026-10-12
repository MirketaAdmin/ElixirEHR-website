import { team } from '../../../../data/about';
import Section from '../../../../components/layout/Section/Section';
import SectionHeading from '../../../../components/ui/SectionHeading/SectionHeading';
import styles from './TeamSection.module.css';

function TeamSection() {
  return (
    <Section spacing="none" className={styles.section}>
      <SectionHeading eyebrow={team.eyebrow} title={team.title} align="center" className={styles.heading} />
      <ul className={styles.grid}>
        {team.members.map((member, index) => (
          <li key={`${member.name}-${index}`}>
            <img src={member.photo} alt={member.name} width="264" height="330" className={styles.photo} />
            <p className={styles.name}>{member.name}</p>
            <p className={styles.role}>{member.role}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default TeamSection;
