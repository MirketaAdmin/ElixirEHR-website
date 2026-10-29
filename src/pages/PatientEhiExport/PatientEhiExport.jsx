import { ehiHero, ehiMetaDescription } from '../../data/patientEhiExport';
import PageHero from '../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import styles from './PatientEhiExport.module.css';

/** Patient EHI Export — a child page of ONC Certification; the hero links the export guide PDF. */
function PatientEhiExport() {
  const { media, ...hero } = ehiHero;

  return (
    <>
      <title>Patient EHI Export | ONC Certification | Elixir</title>
      <meta name="description" content={ehiMetaDescription} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
    </>
  );
}

export default PatientEhiExport;
