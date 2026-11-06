import { useState } from 'react';
import { insightsPages, weeklyBriefing } from '../../../data/insights';
import Icon from '../../../components/ui/Icon/Icon';
import InsightsShell from '../components/InsightsShell/InsightsShell';
import WeeklyBriefing from '../components/WeeklyBriefing/WeeklyBriefing';
// The card reuses the Webinars page's empty-state styles so both read as the same pattern.
import styles from '../WebinarListing/WebinarListing.module.css';

const page = insightsPages.newsletter;

/**
 * /newsletter — the Newsletter page in the Insights section (its own URL, like Webinars or Videos).
 * No newsletter issues are published on the site, so the page introduces The Weekly Briefing with
 * the approved page description and points to the sign-up form in the sidebar.
 */
function NewsletterPage() {
  const [query, setQuery] = useState('');

  return (
    <InsightsShell
      documentTitle={page.documentTitle}
      title={page.title}
      query={query}
      onQueryChange={setQuery}
      aside={<WeeklyBriefing />}
    >
      <section className={styles.empty} aria-labelledby="newsletter-intro">
        <span className={styles.emptyIcon} aria-hidden="true">
          <Icon name="document" size={28} />
        </span>
        <h3 id="newsletter-intro" className={styles.emptyTitle}>
          {weeklyBriefing.title}
        </h3>
        <p className={styles.emptyText}>{page.intro}</p>
        <a href="#newsletter" className={styles.emptyCta}>
          {weeklyBriefing.submitLabel}
          <Icon name="arrowRight" size={16} />
        </a>
      </section>
    </InsightsShell>
  );
}

export default NewsletterPage;
