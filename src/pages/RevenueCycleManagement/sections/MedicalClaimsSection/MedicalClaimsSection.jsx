import { medicalClaims } from '../../../../data/revenueCycleManagement';
import Section from '../../../../components/layout/Section/Section';
import claimsIcon from '../../../../assets/revenue-cycle-management/icon-clean-claims.png';
import RcmBadge from '../../components/RcmBadge/RcmBadge';
import RichText from '../../../../components/ui/RichText/RichText';
import CheckList from '../../components/CheckList/CheckList';
import styles from './MedicalClaimsSection.module.css';

function MedicalClaimsSection() {
  const { badge, title, body, callout, points, image } = medicalClaims;

  return (
    <Section
      id="medical-claims-management"
      tone="dark"
      spacing="none"
      className={styles.section}
      containerClassName={styles.inner}
    >
      <div className={styles.content}>
        <RcmBadge tone="lime" icon={claimsIcon} iconSize={[14, 13]}>
          {badge}
        </RcmBadge>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.body}>
          <RichText content={body} emphasisClassName={styles.emphasis} />
        </p>
        <p className={styles.callout}>{callout}</p>
        <CheckList items={points} className={styles.points} />
      </div>
      <img src={image.src} alt={image.alt} width="552" height="470" className={styles.image} />
    </Section>
  );
}

export default MedicalClaimsSection;
