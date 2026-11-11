import { useId } from 'react';
import { useLocation } from 'react-router-dom';
import { insightsHero } from '../../../../data/insights';
import PageHero from '../../../../components/sections/PageHero/PageHero';
import Section from '../../../../components/layout/Section/Section';
import Icon from '../../../../components/ui/Icon/Icon';
import PageSeo from '../../../../components/seo/PageSeo/PageSeo';
import { cn } from '../../../../utils/cn';
import InsightsNav from '../InsightsNav/InsightsNav';
import styles from './InsightsShell.module.css';

/**
 * Shared frame of every Insights page: the "Knowledge for the Modern Clinician" hero (its search
 * field filters the page's resources through `query` / `onQueryChange`), the category bar, then
 * the page heading and content on the surface band. `aside` adds the 372px right sidebar.
 * `hero` replaces the default hero (All Resources uses its own). Pages with approved SEO copy
 * (data/seo.js) use it; the others keep the generic title.
 */
function InsightsShell({ documentTitle, title, query, onQueryChange, aside, hero, children }) {
  const searchId = useId();
  const { image, searchPlaceholder, ...heroCopy } = insightsHero;
  const { pathname } = useLocation();
  const seoPath = pathname.replace(/\/$/, '');

  return (
    <>
      {/* The approved SEO copy (data/seo.js) when the page has it, otherwise the generic title. */}
      <PageSeo path={seoPath} title={`${documentTitle} | Elixir`} description={heroCopy.description} />
      {hero ?? (
        <PageHero
          {...heroCopy}
          titleAs="p"
          className={styles.hero}
          media={
            <div className={styles.heroMedia}>
              <img src={image.src} alt={image.alt} width="504" height="384" className={styles.heroImage} />
            </div>
          }
        >
          <form role="search" className={styles.search} onSubmit={(event) => event.preventDefault()}>
            <label htmlFor={searchId} className="visually-hidden">
              Search resources
            </label>
            <Icon name="search" className={styles.searchIcon} />
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder={searchPlaceholder}
              className={styles.searchInput}
            />
          </form>
        </PageHero>
      )}

      <InsightsNav />

      <Section tone="surface" spacing="none" className={styles.section} aria-labelledby={`${searchId}-title`}>
        {/* The page's own H1 (the hero title above is shared by every Insights listing). */}
        <h1 id={`${searchId}-title`} className={styles.title}>
          {title}
        </h1>
        <div className={cn(styles.layout, aside && styles.withAside)}>
          <div className={styles.main}>{children}</div>
          {aside && <aside className={styles.aside}>{aside}</aside>}
        </div>
      </Section>
    </>
  );
}

export default InsightsShell;
