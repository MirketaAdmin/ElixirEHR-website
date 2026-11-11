import { useEffect, useMemo, useState } from 'react';

/** True when the free-text query matches the resource's title, excerpt, category (or categories) or author. */
export function matchesQuery(post, query) {
  const needle = query.trim().toLowerCase();
  if (!needle) return true;
  return [post.listingTitle, post.title, post.excerpt, ...[post.category].flat(), post.author]
    .filter(Boolean)
    .some((field) => field.toLowerCase().includes(needle));
}

/**
 * Search + filter + pagination for an Insights listing. `posts` are newest first. Page 1 shows
 * the first `featuredCount` results in the featured slot(s), then `pageSize` cards per page.
 * Changing the query or filter returns to page 1.
 */
export function useResourceListing(posts, { pageSize, featuredCount = 0, filterFn } = {}) {
  const [query, setQueryState] = useState('');
  const [filter, setFilterState] = useState(null);
  const [page, setPageState] = useState(1);

  // `?page=N` (the crawlable pagination links) is read after the first render, so the prerendered
  // page 1 hydrates unchanged; page changes are mirrored into the address without a navigation.
  useEffect(() => {
    const requested = Number(new URLSearchParams(window.location.search).get('page'));
    if (Number.isInteger(requested) && requested > 1) setPageState(requested);
  }, []);
  const setPage = (value) => {
    setPageState(value);
    const url = new URL(window.location.href);
    if (value > 1) url.searchParams.set('page', String(value));
    else url.searchParams.delete('page');
    window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash);
  };

  const results = useMemo(
    () => posts.filter((post) => matchesQuery(post, query) && (filter === null || filterFn(post, filter))),
    [posts, query, filter, filterFn],
  );

  const featured = results.slice(0, featuredCount);
  const rest = results.slice(featuredCount);
  const totalPages = Math.max(1, Math.ceil(rest.length / pageSize));
  const current = Math.min(page, totalPages);

  return {
    query,
    setQuery: (value) => {
      setQueryState(value);
      setPage(1);
    },
    filter,
    setFilter: (value) => {
      setFilterState(value);
      setPage(1);
    },
    results,
    featured: current === 1 ? featured : [],
    items: rest.slice((current - 1) * pageSize, current * pageSize),
    page: current,
    totalPages,
    setPage,
  };
}

/** Sidebar items for a category list: { value, label, count } with counts from `posts`. */
export function categoryItems(posts, categories, getCategory = (post) => post.category) {
  return categories.map((category) => ({
    value: category,
    label: category,
    count: posts.filter((post) => getCategory(post) === category).length,
  }));
}

/** The soonest webinar whose `event.startDate` is still ahead, or undefined. */
export function getUpcomingEvent(posts, now = new Date()) {
  return posts
    .filter((post) => post.event?.startDate && new Date(post.event.startDate) > now)
    .sort((a, b) => new Date(a.event.startDate) - new Date(b.event.startDate))[0];
}
