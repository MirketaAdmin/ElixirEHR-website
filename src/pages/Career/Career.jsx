import { careerHero } from '../../data/career';
import PageHero from '../../components/sections/PageHero/PageHero';
import CultureSection from './sections/CultureSection/CultureSection';
import JobOpenings from './job-openings/JobOpenings';
import PageSeo from '../../components/seo/PageSeo/PageSeo';
import styles from './Career.module.css';

function Career() {
  const { image, ...hero } = careerHero;

  return (
    <>
      <PageSeo path="/careers" />
      <PageHero
        {...hero}
        className={styles.hero}
        media={
          <div className={styles.heroMedia}>
            <img src={image.src} alt={image.alt} width="504" height="384" className={styles.heroImage} />
          </div>
        }
      />
      <CultureSection />
      <JobOpenings />
    </>
  );
}

export default Career;
