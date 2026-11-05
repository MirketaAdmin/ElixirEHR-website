import { ehiHero, ehiMetaDescription } from '../../data/patientEhiExport';
import PageHero from '../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import styles from './PatientEhiExport.module.css';
import PageSeo from '../../components/seo/PageSeo/PageSeo';

/** Patient EHI Export — a child page of ONC Certification; the hero links the export guide PDF. */
function PatientEhiExport() {
  const { media, ...hero } = ehiHero;

  return (
    <>
      <PageSeo
        path="/onc-certification/patient-ehi-export"
        title="Patient EHI Export | ONC Certification | Elixir"
        description={ehiMetaDescription}
      />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
    </>
  );
}

export default PatientEhiExport;
