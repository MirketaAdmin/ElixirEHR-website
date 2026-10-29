import { useEffect, useRef } from 'react';
import Icon from '../Icon/Icon';
import styles from './VideoModal.module.css';

/**
 * Plays a YouTube video in a popup on the current page (a native modal <dialog>: focus moves in
 * and stays inside, Escape and the backdrop close it, focus returns to the opener).
 *
 * Render it only while a video is open: the player iframe exists only then, so closing the popup
 * removes the player and stops playback, and a different `videoId` (keyed by the caller) loads a
 * fresh player. Uses the privacy-enhanced youtube-nocookie.com embed.
 */
function VideoModal({ videoId, title, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const opener = document.activeElement;
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
    return () => {
      if (opener instanceof HTMLElement && opener.isConnected) opener.focus();
    };
  }, []);

  const src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0&playsinline=1`;

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-label={title}
      onClose={onClose}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => event.target === dialogRef.current && onClose()}
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close video">
            <Icon name="close" size={22} />
          </button>
        </div>
        <div className={styles.player}>
          <iframe
            src={src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </dialog>
  );
}

export default VideoModal;
