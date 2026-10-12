import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder';
import styles from './TeamMemberCard.module.css';

function TeamMemberCard({ name, role }) {
  return (
    <div className={styles.card}>
      <ImagePlaceholder label={`Headshot of ${name}`} ratio="1 / 1" rounded="lg" />
      <p className={`${styles.name} label-md`}>{name}</p>
      <p className={`${styles.role} label-sm`}>{role}</p>
    </div>
  );
}

export default TeamMemberCard;
