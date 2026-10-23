import { careerHero } from '../../data/career';
import PageHero from '../../components/sections/PageHero/PageHero';
import CultureSection from './sections/CultureSection/CultureSection';
import JobOpenings from './job-openings/JobOpenings';
import styles from './Career.module.css';

function Career() {
  const { image, ...hero } = careerHero;

  return (
    <>
      <title>Career | Elixir</title>
      <meta name="description" content={hero.description} />
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
