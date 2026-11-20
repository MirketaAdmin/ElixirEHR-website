import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { PRIVATE_PREVIEW } from '../../config/preview';
import { resolveAssistantMode } from './transport.mjs';
import { DISCOVERY_URL, browserSessionStorage } from './discovery.mjs';
import { listenForOpenAssistant } from './openAssistant.mjs';
import styles from './SalesAssistant.module.css';

const SalesAssistant = lazy(() => import('./SalesAssistant'));
const mode = resolveAssistantMode({
  requested: import.meta.env.VITE_ELIXIR_ASSISTANT_MODE,
  dev: import.meta.env.DEV,
  preview: PRIVATE_PREVIEW,
  hostedPreview: import.meta.env.VITE_ELIXIR_HOSTED_PREVIEW_ENABLED === 'true',
  hostname: typeof window === 'undefined' ? '' : window.location.hostname,
});
const PULSE_KEY = 'elixir-assistant-pulsed';

// The attention pulse plays once per browser session, never under reduced motion (CSS).
function shouldPulse() {
  try {
    const storage = browserSessionStorage();
    if (!storage || storage.getItem(PULSE_KEY)) return false;
    storage.setItem(PULSE_KEY, '1');
    return true;
  } catch { return false; }
}

export default function AssistantLauncher() {
  const [mounted, setMounted] = useState(false);
  const [openedOnce, setOpenedOnce] = useState(false);
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [openRequest, setOpenRequest] = useState(null);
  const button = useRef(null);
  const requests = useRef(0);
  useEffect(() => { setMounted(true); setPulse(mode !== 'off' && shouldPulse()); }, []);
  // Shared 'elixir:open-assistant' event (see openAssistant.mjs). With the assistant switched off,
  // the visitor goes to the discovery-call page instead of a dead end.
  useEffect(() => listenForOpenAssistant(window, (detail) => {
    if (mode === 'off') { window.location.assign(DISCOVERY_URL); return; }
    requests.current += 1;
    setOpenRequest({ ...detail, id: requests.current });
    setOpenedOnce(true);
    setOpen(true);
  }), []);
  if (!mounted || mode === 'off') return null;
  function close() {
    setOpen(false);
    requestAnimationFrame(() => button.current?.focus());
  }
  return (
    <>
      <button ref={button} className={`${styles.launcher} ${pulse ? styles.attention : ''}`} type="button" onClick={() => { setPulse(false); setOpenedOnce(true); setOpen(true); }} onAnimationEnd={() => setPulse(false)} aria-haspopup="dialog" aria-expanded={open}>
        <span className={styles.launcherIcon} aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 4h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-6 3V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </span>
        Ask Elixir
      </button>
      {openedOnce && <Suspense fallback={open ? <span className={styles.loading} role="status">Opening assistant…</span> : null}>
        <SalesAssistant open={open} onClose={close} mode={mode} openRequest={openRequest} />
      </Suspense>}
    </>
  );
}
