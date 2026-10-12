import { useState } from 'react';
import shareIcon from '../../../assets/icons/post-share.png';
import linkIcon from '../../../assets/icons/post-link.png';
import styles from './PostShare.module.css';

/**
 * "Share this …" row: the share button opens the device's share sheet (Web Share API) and falls
 * back to copying the link; the link button copies the page URL. Results are announced politely.
 */
function PostShare({ label, title }) {
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

  return (
    <div className={styles.share}>
      <p className={styles.label}>{label}</p>
      <button type="button" onClick={share} className={styles.button} aria-label="Share">
        <img src={shareIcon} alt="" width="14" height="16" />
      </button>
      <button type="button" onClick={copyLink} className={styles.button} aria-label="Copy link">
        <img src={linkIcon} alt="" width="16" height="8" />
      </button>
      <p role="status" className="visually-hidden">
        {status}
      </p>
    </div>
  );
}

export default PostShare;
