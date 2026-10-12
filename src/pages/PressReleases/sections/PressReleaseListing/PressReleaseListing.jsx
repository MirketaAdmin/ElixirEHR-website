import { useMemo, useRef, useState } from 'react';
import { getPosts } from '../../../../posts';
import Section from '../../../../components/layout/Section/Section';
import Icon from '../../../../components/ui/Icon/Icon';
import FeaturedRelease from '../../components/FeaturedRelease/FeaturedRelease';
import ReleaseCard from '../../components/ReleaseCard/ReleaseCard';
import Pagination from '../../../../components/ui/Pagination/Pagination';
import DateField from '../../components/DateField/DateField';
import { filterPressReleases, paginatePressReleases } from './filterPressReleases';
import styles from './PressReleaseListing.module.css';

// Cards per page after the featured release (the frame shows one row of three).
const PAGE_SIZE = 3;

function PressReleaseListing() {
  const allReleases = useMemo(() => getPosts('press-release'), []);
  const [query, setQuery] = useState('');
  const [draftRange, setDraftRange] = useState({ from: '', to: '' });
  const [range, setRange] = useState({ from: '', to: '' });
  const [page, setPage] = useState(1);
  const topRef = useRef(null);

  const results = useMemo(
    () => filterPressReleases(allReleases, { query, ...range }),
    [allReleases, query, range],
  );
  const view = paginatePressReleases(results, page, PAGE_SIZE);

  function handleSearch(event) {
    setQuery(event.target.value);
    setPage(1);
  }

  // "Apply" (or Enter in any field) applies the date range; clearing both dates removes it.
  function handleApply(event) {
    event.preventDefault();
    setRange(draftRange);
    setPage(1);
  }

  function handlePageChange(next) {
    setPage(next);
    topRef.current?.scrollIntoView({ block: 'start' });
  }

  return (
    <Section tone="white" spacing="none" className={styles.section}>
      <form ref={topRef} role="search" className={styles.filters} onSubmit={handleApply}>
        <label className={styles.search}>
          <Icon name="search" className={styles.searchIcon} />
          <span className="visually-hidden">Search press releases</span>
          <input
            type="search"
            value={query}
            onChange={handleSearch}
            placeholder="Search articles..."
            className={styles.searchInput}
          />
        </label>
        <fieldset className={styles.dates}>
          <legend className={styles.datesLabel}>Filter by Year:</legend>
          <DateField
            label="From date"
            value={draftRange.from}
            onChange={(from) => setDraftRange((current) => ({ ...current, from }))}
          />
          <span className={styles.to} aria-hidden="true">
            to
          </span>
          <DateField
            label="To date"
            value={draftRange.to}
            onChange={(to) => setDraftRange((current) => ({ ...current, to }))}
          />
          <button type="submit" className={styles.apply}>
            Apply
          </button>
        </fieldset>
      </form>

      <p className="visually-hidden" role="status">
        {results.length === 1 ? '1 press release found.' : `${results.length} press releases found.`}
      </p>

      {results.length === 0 ? (
        <p className={styles.empty}>No press releases found.</p>
      ) : (
        <div className={styles.results}>
          {view.featured && <FeaturedRelease release={view.featured} />}
          {view.cards.length > 0 && (
            <ul className={styles.grid}>
              {view.cards.map((release) => (
                <li key={release.id} className={styles.gridItem}>
                  <ReleaseCard release={release} />
                </li>
              ))}
            </ul>
          )}
          <div className={styles.pagination}>
            <Pagination
              page={view.page}
              totalPages={view.totalPages}
              onChange={handlePageChange}
              label="Press release pages"
            />
          </div>
        </div>
      )}
    </Section>
  );
}

export default PressReleaseListing;
