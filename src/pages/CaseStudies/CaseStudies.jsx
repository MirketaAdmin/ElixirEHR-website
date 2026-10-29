import { useState } from 'react';
import { caseStudiesHero, caseStudiesList, caseStudyVideos } from '../../data/caseStudies';
import { cn } from '../../utils/cn';
import PageHero from '../../components/sections/PageHero/PageHero';
import Section from '../../components/layout/Section/Section';
import EyebrowHeading from '../../components/ui/EyebrowHeading/EyebrowHeading';
import Icon from '../../components/ui/Icon/Icon';
import VideoModal from '../../components/ui/VideoModal/VideoModal';
import styles from './CaseStudies.module.css';

/** A video thumbnail that opens the video in the page's popup (a button, never a link to YouTube). */
function VideoThumb({ video, onPlay, className, large = false }) {
  return (
    <button
      type="button"
      className={cn(styles.thumb, large && styles.thumbLarge, className)}
      onClick={() => onPlay(video)}
      aria-label={`${caseStudiesList.playLabel}: ${video.title}`}
    >
      <img src={video.thumbnail} alt="" width="640" height="360" loading={large ? 'eager' : 'lazy'} />
      <span className={styles.play} aria-hidden="true">
        <Icon name="play" size={large ? 34 : 28} />
      </span>
    </button>
  );
}

/**
 * /case-studies — the Elixir video case studies. Every video plays in a popup on this page
 * (VideoModal); the player loads only when a video is opened and is removed when it closes.
 */
function CaseStudies() {
  const [playing, setPlaying] = useState(null);
  const [featured] = caseStudyVideos;

  return (
    <>
      <title>Case Studies | Elixir</title>
      <meta name="description" content={caseStudiesHero.description} />
      <PageHero
        {...caseStudiesHero}
        className={styles.hero}
        media={
          <div className={styles.heroMedia}>
            <VideoThumb video={featured} onPlay={setPlaying} large />
            <p className={styles.heroCaption}>
              <span className={styles.heroTag}>{caseStudiesList.tag}</span>
              {featured.title}
            </p>
          </div>
        }
      />

      <Section tone="surface" spacing="none" id="case-study-videos" className={styles.section}>
        <EyebrowHeading eyebrow={caseStudiesList.eyebrow} title={caseStudiesList.title} className={styles.heading} />
        <ul className={styles.grid}>
          {caseStudyVideos.map((video) => (
            <li key={video.id} className={styles.card}>
              <VideoThumb video={video} onPlay={setPlaying} />
              <div className={styles.body}>
                <span className={styles.tag}>{caseStudiesList.tag}</span>
                <h3 className={styles.title}>{video.title}</h3>
                <button type="button" className={styles.watch} onClick={() => setPlaying(video)}>
                  {caseStudiesList.playLabel}
                  <span className="visually-hidden">: {video.title}</span>
                  <Icon name="playCircle" size={18} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {playing && (
        <VideoModal key={playing.id} videoId={playing.id} title={playing.title} onClose={() => setPlaying(null)} />
      )}
    </>
  );
}

export default CaseStudies;
