import { useState } from 'react';

/**
 * Share actions for the current page: `share` opens the device's share sheet (Web Share API) and
 * falls back to copying the link; `copyLink` copies the page URL. `status` is the result message,
 * to be announced politely (role="status"). Used by PostShare and the job posting page.
 */
export function useShareActions(title) {
  const [status, setStatus] = useState('');

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setStatus('Link copied to clipboard.');
    } catch {
      setStatus('Could not copy the link.');
    }
  }

  async function share() {
    if (!navigator.share) {
      copyLink();
      return;
    }
    try {
      await navigator.share({ title, url: window.location.href });
    } catch {
      // Closing the share sheet rejects the promise; nothing to report.
    }
  }

  return { status, share, copyLink };
}
