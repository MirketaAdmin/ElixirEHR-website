/**
 * Page buttons for the pagination bar: all pages when there are few, otherwise the first and
 * last page, the current page and its neighbours, with "…" gaps — e.g. 1 2 3 … 12 on page 1.
 */
export function getPageItems(current, total) {
  if (total <= 5) return Array.from({ length: total }, (_, index) => index + 1);
  if (current <= 3) return [1, 2, 3, 'gap-end', total];
  if (current >= total - 2) return [1, 'gap-start', total - 2, total - 1, total];
  return [1, 'gap-start', current - 1, current, current + 1, 'gap-end', total];
}
