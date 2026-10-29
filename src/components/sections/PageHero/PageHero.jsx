import { Link } from 'react-router-dom';
import { cn } from '../../../utils/cn';
import Container from '../../layout/Container/Container';
import Button from '../../ui/Button/Button';
import Icon from '../../ui/Icon/Icon';
import sparkleIcon from '../../../assets/icons/sparkle-white.png';
import styles from './PageHero.module.css';

/**
 * Inner-page hero: breadcrumb, two-line H1 (second line yellow), description and CTAs on the left.
 * The right column defaults to the 476px framed image with the lime "AI Insights Active" badge
 * (About Us, What Is Elixir); pass `media` to supply a page-specific right column instead.
 * `secondaryCta` is optional; `className` lets a page scope frame-specific tweaks.
 * By default the second title line is yellow; pass `titleAccent` (a phrase, or one phrase per
 * line) to highlight only that. `primaryCta` is optional (the RCM hero has no buttons)
 * and takes `to` or `href` (e.g. an in-page anchor).
 * A `secondaryCta` with neither `to` nor `href` (destination not built yet) renders as drawn but
 * is marked `aria-disabled`.
 * `primaryCta.icon` ({ src, width, height }) puts an icon before the label in place of the arrow.
 * `primaryCta.arrow: false` drops the trailing arrow (Contact Center frame); `secondaryCta.icon`
 * names an `Icon` drawn before the secondary label (after it with `iconAfter: true`, KratuAI).
 * `description` may be an array for several paragraphs (spaced by `--page-hero-paragraph-gap`), or
 * left out (Patient EHI Export).
 * `children` render under the description (e.g. the Insights search field in place of CTAs).
 */
function renderTitleLine(line, index, titleAccent) {
  if (!titleAccent) return index === 1 ? <span className={styles.accent}>{line}</span> : line;
  // An array highlights one phrase per line (an accent that wraps across lines).
  const accent = [].concat(titleAccent).find((phrase) => line.includes(phrase));
  if (!accent) return line;
  const at = line.indexOf(accent);
  return (
    <>
      {line.slice(0, at)}
      <span className={styles.accent}>{accent}</span>
      {line.slice(at + accent.length)}
    </>
  );
}

function PageHero({
  currentPage,
  titleLines,
  titleAccent,
  description,
  primaryCta,
  secondaryCta,
  image,
  badge,
  media,
  className,
  children,
}) {
  return (
    <section className={cn(styles.hero, className)} data-header-overlap data-hero>
      <Container className={styles.inner}>
        <div className={styles.content}>
          <nav aria-label="Breadcrumb">
            <ol className={styles.breadcrumb}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li aria-hidden="true" className={styles.separator}>
                <Icon name="chevronRight" size={20} />
              </li>
              <li aria-current="page" className={styles.current}>
                {currentPage}
              </li>
            </ol>
          </nav>
          <h1 className={styles.title}>
            {titleLines.map((line, index) => (
              <span key={line} className={styles.titleLine}>
                {renderTitleLine(line, index, titleAccent)}
              </span>
            ))}
          </h1>
          {[].concat(description ?? []).map((paragraph) => (
            <p key={paragraph} className={styles.description}>
              {paragraph}
            </p>
          ))}
          {children}
          {primaryCta && (
            <div className={styles.actions}>
              <Button to={primaryCta.to} href={primaryCta.href} className={styles.primary}>
                {primaryCta.icon && (
                  <img src={primaryCta.icon.src} alt="" width={primaryCta.icon.width} height={primaryCta.icon.height} />
                )}
                {primaryCta.label}
                {!primaryCta.icon && primaryCta.arrow !== false && <Icon name="arrowRight" />}
              </Button>
              {secondaryCta && (
                <Button
                  to={secondaryCta.to}
                  href={secondaryCta.href}
                  aria-disabled={secondaryCta.to || secondaryCta.href ? undefined : 'true'}
                  variant="ghost"
                  size="xl"
                  className={styles.secondary}
                >
                  {secondaryCta.icon && !secondaryCta.iconAfter && <Icon name={secondaryCta.icon} />}
                  {secondaryCta.label}
                  {secondaryCta.icon && secondaryCta.iconAfter && <Icon name={secondaryCta.icon} />}
                </Button>
              )}
            </div>
          )}
        </div>

        {media ?? (
          <div className={styles.media}>
            <img src={image.src} alt={image.alt} width="476" height="476" className={styles.image} />
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>
                <img src={sparkleIcon} alt="" width="21" height="22" />
              </span>
              <p>
                <span className={styles.badgeTitle}>{badge.title}</span>
                <span className={styles.badgeSubtitle}>{badge.subtitle}</span>
              </p>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

export default PageHero;
