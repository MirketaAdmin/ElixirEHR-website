/**
 * Filters releases (already sorted newest first) by a free-text query and an inclusive
 * publication-date range. Dates are ISO strings (yyyy-mm-dd), so they compare as text.
 * Empty `query`, `from` or `to` means "no constraint"; a reversed range is swapped.
 */
export function filterPressReleases(items, { query = '', from = '', to = '' }) {
  const needle = query.trim().toLowerCase();
  const [start, end] = from && to && from > to ? [to, from] : [from, to];

  return items.filter((item) => {
    if (start && item.publishDate < start) return false;
    if (end && item.publishDate > end) return false;
    if (!needle) return true;
    return [item.listingTitle, item.title, item.excerpt, item.category]
      .filter(Boolean)
      .some((field) => field.toLowerCase().includes(needle));
  });
}

/**
 * Splits results into the frame's layout: page 1 shows the newest result as the featured
 * "Top News" block, then `pageSize` cards per page for the rest.
 */
export function paginatePressReleases(results, page, pageSize) {
  const [featured, ...rest] = results;
  const totalPages = Math.max(1, Math.ceil(rest.length / pageSize));
  const current = Math.min(Math.max(page, 1), totalPages);
  return {
    featured: current === 1 ? featured ?? null : null,
    cards: rest.slice((current - 1) * pageSize, current * pageSize),
    page: current,
    totalPages,
  };
}
