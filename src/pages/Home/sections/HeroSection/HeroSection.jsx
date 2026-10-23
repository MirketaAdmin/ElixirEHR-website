import { useState } from 'react';
import { hero, kratuHeroSlide } from '../../../../data/home';
import { cn } from '../../../../utils/cn';
import { useAutoRotate } from '../../../../hooks/useAutoRotate';
import { useSwipe } from '../../../../hooks/useSwipe';
import Container from '../../../../components/layout/Container/Container';
import Button from '../../../../components/ui/Button/Button';
import Icon from '../../../../components/ui/Icon/Icon';
import laptopImage from '../../../../assets/home/hero/elixir-ehr-dashboard-laptop.png';
import sparkleIcon from '../../../../assets/icons/sparkle-dark.png';
import sparkleLimeIcon from '../../../../assets/icons/sparkle-lime.png';
import styles from './HeroSection.module.css';

// Seconds each slide stays before the next one fades in.
const INTERVAL_MS = 4000;

function renderLine(line) {
  if (!line.startsWith(hero.titleAccent)) return line;
  return (
    <>
      <span className={styles.accent}>{hero.titleAccent}</span>
      {line.slice(hero.titleAccent.length)}
    </>
  );
}

/** Slide 1: the original Home hero (AI-powered EHR, laptop and AI-insight card). */
function EhrSlide() {
  return (
    <div className={styles.inner}>
      <div className={styles.content}>
        <h1 className={`text-display-lg ${styles.title}`}>
          {hero.titleLines.map((line) => (
            <span key={line} className={styles.line}>
              {renderLine(line)}
            </span>
          ))}
        </h1>
        <p className={styles.description}>{hero.description}</p>
        <div className={styles.actions}>
          <Button to={hero.secondaryCta.to} variant="ghost" size="xl" className={styles.tour}>
            <Icon name="playCircle" />
            {hero.secondaryCta.label}
          </Button>
          <Button to={hero.primaryCta.to} size="xl">
            {hero.primaryCta.label}
          </Button>
        </div>
      </div>

      <div className={styles.media}>
        <img
          src={laptopImage}
          alt="Elixir EHR dashboard on a laptop"
          width="518"
          height="283"
          className={styles.image}
        />
        <div className={styles.insight}>
          <img src={sparkleIcon} alt="" width="33" height="33" />
          <p className={styles.insightText}>
            <span className={styles.insightLabel}>{hero.insight.label}</span>
            {hero.insight.text}
          </p>
        </div>
      </div>
    </div>
  );
}

/** Slide 2: the Figma "Meet Kratu AI" banner. */
function KratuSlide() {
  const slide = kratuHeroSlide;
  return (
    <div className={cn(styles.inner, styles.kratu)}>
      <div className={styles.content}>
        <p className={styles.badge}>
          <img src={sparkleLimeIcon} alt="" width="17" height="17" />
          {slide.badge}
        </p>
        <h2 className={cn('text-display-lg', styles.title, styles.kratuTitle)}>
          {slide.titleLines.map((line) => (
            <span key={line.map((part) => part.text).join('')} className={styles.line}>
              {line.map((part) => (part.accent ? <span key={part.text} className={styles.accent}>{part.text}</span> : part.text))}
            </span>
          ))}
        </h2>
        <p className={cn(styles.description, styles.kratuDescription)}>{slide.description}</p>
        <div className={cn(styles.actions, styles.kratuActions)}>
          <Button to={slide.secondaryCta.to} variant="ghost" size="xl" className={styles.tour}>
            <Icon name="playCircle" />
            {slide.secondaryCta.label}
          </Button>
          <Button to={slide.primaryCta.to} size="xl">
            {slide.primaryCta.label}
          </Button>
        </div>
      </div>
      <img
        src={slide.media.src}
        alt={slide.media.alt}
        width={slide.media.width}
        height={slide.media.height}
        className={styles.kratuMedia}
      />
    </div>
  );
}

const SLIDES = [
  { id: 'ehr', label: 'AI-powered EHR', Component: EhrSlide },
  { id: 'kratu', label: 'Meet Kratu AI', Component: KratuSlide },
];

/**
 * Home hero as a two-slide carousel: the slides share one band and cross-fade (600ms) every 4
 * seconds. Rotation pauses while the pointer or keyboard focus is inside, when the visitor presses
 * pause, and for reduced motion; manual choices restart the countdown. Touch screens can swipe.
 * The slides are stacked in one grid cell, so the band keeps the tallest slide's height and never
 * jumps between slides.
 */
function HeroSection() {
  const [hovered, setHovered] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [index, select] = useAutoRotate(SLIDES.length, { interval: INTERVAL_MS, paused: hovered || stopped });
  const swipe = useSwipe({ onPrev: () => select(index - 1), onNext: () => select(index + 1) });

  return (
    <section
      className={styles.hero}
      data-hero
      aria-roledescription="carousel"
      aria-label="Elixir highlights"
      onPointerEnter={(event) => event.pointerType === 'mouse' && setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={(event) => !event.currentTarget.contains(event.relatedTarget) && setHovered(false)}
    >
      <Container className={styles.track} {...swipe}>
        {SLIDES.map(({ id, label, Component }, slideIndex) => {
          const active = slideIndex === index;
          return (
            <div
              key={id}
              className={cn(styles.slide, active && styles.active)}
              role="group"
              aria-roledescription="slide"
              aria-label={`${slideIndex + 1} of ${SLIDES.length}: ${label}`}
              aria-hidden={!active}
              inert={!active}
            >
              <Component />
            </div>
          );
        })}
      </Container>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.pause}
          onClick={() => setStopped((value) => !value)}
          aria-label={stopped ? 'Play slideshow' : 'Pause slideshow'}
        >
          {stopped ? <Icon name="play" size={14} /> : <span className={styles.pauseGlyph} aria-hidden="true" />}
        </button>
        {SLIDES.map(({ id, label }, slideIndex) => (
          <button
            key={id}
            type="button"
            className={cn(styles.dot, slideIndex === index && styles.dotActive)}
            onClick={() => select(slideIndex)}
            aria-label={`Show slide ${slideIndex + 1}: ${label}`}
            aria-current={slideIndex === index ? 'true' : undefined}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
