import { useId } from 'react';
import { insightsHero } from '../../../../data/insights';
import PageHero from '../../../../components/sections/PageHero/PageHero';
import Section from '../../../../components/layout/Section/Section';
import Icon from '../../../../components/ui/Icon/Icon';
import { cn } from '../../../../utils/cn';
import InsightsNav from '../InsightsNav/InsightsNav';
import styles from './InsightsShell.module.css';

/**
 * Shared frame of every Insights page: the "Knowledge for the Modern Clinician" hero (its search
 * field filters the page's resources through `query` / `onQueryChange`), the category bar, then
 * the page heading and content on the surface band. `aside` adds the 372px right sidebar.
 * `hero` replaces the default hero (All Resources uses its own).
 */
function InsightsShell({ documentTitle, title, query, onQueryChange, aside, hero, children }) {
  const searchId = useId();
  const { image, searchPlaceholder, ...heroCopy } = insightsHero;

  return (
    <>
      <title>{`${documentTitle} | Elixir`}</title>
      <meta name="description" content={heroCopy.description} />
      {hero ?? (
        <PageHero
          {...heroCopy}
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
        <h2 id={`${searchId}-title`} className={styles.title}>
          {title}
        </h2>
        <div className={cn(styles.layout, aside && styles.withAside)}>
          <div className={styles.main}>{children}</div>
          {aside && <aside className={styles.aside}>{aside}</aside>}
        </div>
      </Section>
    </>
  );
}

export default InsightsShell;
