import { useEffect, useReducer, useRef, useState } from 'react';
import { QUALIFICATION_FIELDS, MAX_USER_LENGTH } from '../../../api/shared/contract.mjs';
import { PRIVATE_PREVIEW } from '../../config/preview';
import { chatRequest, conversationReducer, initialConversation } from './conversation.mjs';
import { requestReply } from './transport.mjs';
import { browserSessionStorage, createSessionBudget, discoveryCta } from './discovery.mjs';
import LeadReview from './LeadReview';
import styles from './SalesAssistant.module.css';

// In-chat requests stay available in previews and development; on the public site the
// discovery-call link is the handoff unless lead submission is separately enabled.
const LEAD_FORM_ENABLED = PRIVATE_PREVIEW || import.meta.env.DEV || import.meta.env.VITE_ELIXIR_LEAD_SUBMISSION_ENABLED === 'true';

function DiscoveryLink({ cta, className }) {
  return <a className={className} href={cta.href}>{cta.label}<span aria-hidden="true"> →</span></a>;
}

export default function SalesAssistant({ open, onClose, mode, openRequest = null }) {
  const [state, dispatch] = useReducer(conversationReducer, null, () => initialConversation(window.location.pathname, { providerType: openRequest?.providerType, leadForm: mode === 'sample' || LEAD_FORM_ENABLED }));
  const [draft, setDraft] = useState('');
  const [answer, setAnswer] = useState('');
  const [budget] = useState(() => createSessionBudget({ storage: browserSessionStorage() }));
  const [capReached, setCapReached] = useState(() => budget.exhausted());
  const dialog = useRef(null);
  const transcript = useRef(null);
  const input = useRef(null);
  const sequence = useRef(0);
  const controller = useRef(null);
  const nextField = state.nextField;
  const cta = discoveryCta(state, { mode, capReached });

  useEffect(() => {
    if (open && !dialog.current.open) { dialog.current.showModal(); input.current?.focus(); }
    else if (!open && dialog.current.open) dialog.current.close();
  }, [open]);
  // An 'elixir:open-assistant' request: carry its page context and prefill (never send) its prompt.
  useEffect(() => {
    if (!openRequest) return undefined;
    if (openRequest.providerType) dispatch({ type: 'context', providerType: openRequest.providerType });
    if (openRequest.prompt) setDraft(openRequest.prompt);
    const frame = requestAnimationFrame(() => {
      const field = input.current;
      if (!field) return;
      field.focus();
      if (openRequest.prompt) field.setSelectionRange(field.value.length, field.value.length);
    });
    return () => cancelAnimationFrame(frame);
  }, [openRequest]);
  useEffect(() => { transcript.current?.lastElementChild?.scrollIntoView({ block: 'nearest' }); }, [state.messages.length, state.pending, cta.tone]);
  useEffect(() => () => controller.current?.abort(), []);

  async function send(text, { retry = false, qualification, skipped } = {}) {
    if (state.pending || !text.trim()) return;
    // Per-session cost cap: once spent, the discovery-call prompt replaces further model calls.
    if (budget.exhausted()) { setCapReached(true); return; }
    budget.consume();
    const id = ++sequence.current;
    controller.current?.abort();
    controller.current = new AbortController();
    const snapshot = { ...state, qualification: { ...state.qualification, ...qualification }, skipped: skipped ?? state.skipped };
    const body = chatRequest(snapshot, text.trim(), retry);
    dispatch({ type: 'request', id, text: text.trim(), retry });
    setDraft('');
    try {
      const reply = await requestReply(body, { mode, signal: controller.current.signal });
      dispatch({ type: 'success', id, reply });
    } catch (error) {
      if (error.name !== 'AbortError') dispatch({ type: 'failure', id, error: error.message || 'Please try again.' });
    } finally {
      if (budget.exhausted()) setCapReached(true);
    }
  }

  function restart() {
    controller.current?.abort(); sequence.current++;
    dispatch({ type: 'restart' }); setDraft(''); setAnswer(''); input.current?.focus();
  }

  const showCard = !state.pending && ['recommended', 'limit', 'fallback'].includes(cta.tone) && !(cta.tone === 'fallback' && state.error);
  return (
    <dialog ref={dialog} className={styles.dialog} aria-label="Elixir assistant" onClose={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <header className={styles.header}>
        <div><span className={styles.eyebrow}>LET’S FIND YOUR FIT</span><h2>Ask Elixir</h2><p>Answers for your organization</p></div>
        <button type="button" className={styles.close} aria-label="Close assistant" onClick={onClose}>×</button>
      </header>
      {!state.showReview && <div className={styles.discoveryBar}><span>Ready to talk it through?</span><DiscoveryLink cta={cta} className={styles.discoveryBarLink} /></div>}
      {mode === 'sample' && <p className={styles.preview}>Preview · sample replies · no requests sent</p>}
      {mode === 'hosted' && PRIVATE_PREVIEW && <p className={styles.preview}>Preview · live replies using draft knowledge · demo requests disabled</p>}
      <div className={styles.body}>
        {state.showReview ? <LeadReview state={state} mode={mode} onDraftChange={(field, value) => dispatch({ type: 'draft', field, value })} onBack={() => dispatch({ type: 'review', open: false })} /> : <>
          <div ref={transcript} className={styles.transcript} role="log" aria-label="Conversation" aria-live="polite" aria-relevant="additions">
            {state.messages.map((message, index) => <article key={index} className={message.role === 'user' ? styles.userMessage : styles.assistantMessage}>
              <span className={styles.speaker}>{message.role === 'user' ? 'You' : 'Elixir assistant'}</span>
              <p>{message.content}</p>
              {message.citations?.length > 0 && <ul className={styles.sources}>{message.citations.map((source) => <li key={source.id}><a href={source.url} target="_blank" rel="noreferrer">{source.title} ↗</a></li>)}</ul>}
            </article>)}
            {state.pending && <p className={styles.pending} role="status">Finding a helpful reply…</p>}
          </div>
          {state.error && <div className={styles.error} role="alert">
            <p>{state.error}</p>
            <p>You can also book a discovery call and our team will pick it up from here.</p>
            <div className={styles.row}>
              {!capReached && <button type="button" onClick={() => send(state.failedMessage, { retry: true })}>Try again</button>}
              <DiscoveryLink cta={cta} className={styles.errorLink} />
            </div>
          </div>}
          {showCard && <section className={styles.discoveryCard} aria-labelledby="elixir-discovery-heading">
            <h3 id="elixir-discovery-heading">{cta.heading}</h3>
            <p>{cta.text}</p>
            <DiscoveryLink cta={cta} className={styles.primaryLink} />
          </section>}
          {nextField && !capReached && !state.pending && state.messages.length > 1 && <form className={styles.qualify} onSubmit={(event) => {
            event.preventDefault(); if (!answer.trim()) return;
            dispatch({ type: 'qualification', field: nextField, value: answer });
            void send(`${QUALIFICATION_FIELDS[nextField]} ${answer}`, { qualification: { [nextField]: answer } });
            setAnswer('');
          }}>
            <span className={styles.smallHeading}>Help us tailor this · optional</span>
            <label htmlFor="elixir-qualification">{QUALIFICATION_FIELDS[nextField]}</label>
            <input id="elixir-qualification" value={answer} onChange={(event) => setAnswer(event.target.value)} maxLength={160} autoComplete="off" />
            <div className={styles.row}><button type="submit" className={styles.secondary} disabled={!answer.trim()}>Continue</button><button type="button" onClick={() => { dispatch({ type: 'skip', field: nextField }); setAnswer(''); void send('I would prefer to skip that question.', { skipped: [...state.skipped, nextField] }); }}>Skip this question</button></div>
          </form>}
          {state.leadForm && (!state.contactDeclined ? <div className={styles.invitation}><span>Want to see how it could fit?</span><button type="button" className={styles.secondary} onClick={() => dispatch({ type: 'review', open: true })}>Request a demo</button><button type="button" className={styles.quiet} onClick={() => dispatch({ type: 'decline' })}>Keep exploring</button></div> : <div className={styles.invitation}><button type="button" className={styles.quiet} onClick={() => dispatch({ type: 'review', open: true })}>Request a demo</button></div>)}
        </>}
      </div>
      {!state.showReview && <form className={styles.composer} onSubmit={(event) => { event.preventDefault(); void send(draft); }}>
        <label className="visually-hidden" htmlFor="elixir-question">Your question</label>
        <textarea ref={input} id="elixir-question" value={draft} onChange={(event) => setDraft(event.target.value)} maxLength={MAX_USER_LENGTH} rows={2} disabled={capReached} aria-describedby={capReached ? 'elixir-limit-note' : undefined} placeholder={capReached ? 'Message limit reached for this visit' : 'Ask about Elixir or tell us what you need…'} onKeyDown={(event) => { if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); void send(draft); } }} />
        <button type="submit" aria-label="Send message" className={styles.send} disabled={capReached || state.pending || !draft.trim()}>↑</button>
        {capReached && <span id="elixir-limit-note" className="visually-hidden">This chat has reached its message limit. Use Book a discovery call to continue with our team.</span>}
      </form>}
      <footer className={styles.footer}><span>Automated assistant. Please avoid patient information.</span><button type="button" onClick={restart}>Start over</button></footer>
    </dialog>
  );
}
