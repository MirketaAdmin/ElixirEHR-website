import { successStoriesCtaBand, successStoriesHero } from '../../data/successStories';
import PageHero from '../../components/sections/PageHero/PageHero';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import StatsStrip from './sections/StatsStrip/StatsStrip';
import ImpactSection from './sections/ImpactSection/ImpactSection';
import styles from './SuccessStories.module.css';

function SuccessStories() {
  const { image, ...hero } = successStoriesHero;

  return (
    <>
      <title>Client Success Stories | Elixir</title>
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
      <StatsStrip />
      <ImpactSection />
      <CtaBanner
        {...successStoriesCtaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
      />
    </>
  );
}

export default SuccessStories;
