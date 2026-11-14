import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { PRIVATE_PREVIEW } from '../../config/preview';
import { resolveAssistantMode } from './transport.mjs';
import styles from './SalesAssistant.module.css';

const SalesAssistant = lazy(() => import('./SalesAssistant'));
const mode = resolveAssistantMode({ requested: import.meta.env.VITE_ELIXIR_ASSISTANT_MODE, dev: import.meta.env.DEV, preview: PRIVATE_PREVIEW });

export default function AssistantLauncher() {
  const [mounted, setMounted] = useState(false);
  const [openedOnce, setOpenedOnce] = useState(false);
  const [open, setOpen] = useState(false);
  const button = useRef(null);
  useEffect(() => setMounted(true), []);
  if (!mounted || mode === 'off') return null;
  function close() {
    setOpen(false);
    requestAnimationFrame(() => button.current?.focus());
  }
  return (
    <>
      <button ref={button} className={styles.launcher} type="button" onClick={() => { setOpenedOnce(true); setOpen(true); }} aria-haspopup="dialog" aria-expanded={open}>
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 4h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-6 3V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7"/><path d="M7 9h10M7 13h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
        Ask Elixir
      </button>
      {openedOnce && <Suspense fallback={open ? <span className={styles.loading} role="status">Opening assistant…</span> : null}>
        <SalesAssistant open={open} onClose={close} mode={mode} />
      </Suspense>}
    </>
  );
}
