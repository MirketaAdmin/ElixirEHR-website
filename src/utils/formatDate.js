const longDate = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: '2-digit',
  year: 'numeric',
  timeZone: 'UTC',
});

/**
 * Formats an ISO date (yyyy-mm-dd) as "January 05, 2025" — the format used in the Figma frames.
 * Dates are treated as calendar dates (UTC) so they never shift with the visitor's time zone.
 */
export function formatLongDate(isoDate) {
  return longDate.format(new Date(`${isoDate}T00:00:00Z`));
}

const shortDate = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});

/** "Jan 15, 2025" — the post sidebar's date format. */
export function formatShortDate(isoDate) {
  return shortDate.format(new Date(`${isoDate}T00:00:00Z`));
}

const cardDate = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

/** "04 April 2026" — the Insights resource cards' date format. */
export function formatCardDate(isoDate) {
  return cardDate.format(new Date(`${isoDate}T00:00:00Z`));
}
