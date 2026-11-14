import { useEffect, useReducer, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { QUALIFICATION_FIELDS, MAX_USER_LENGTH } from '../../../api/shared/contract.mjs';
import { chatRequest, conversationReducer, initialConversation } from './conversation.mjs';
import { requestReply } from './transport.mjs';
import LeadReview from './LeadReview';
import styles from './SalesAssistant.module.css';

export default function SalesAssistant({ open, onClose, mode }) {
  const [state, dispatch] = useReducer(conversationReducer, null, () => initialConversation(window.location.pathname));
  const [draft, setDraft] = useState('');
  const [answer, setAnswer] = useState('');
  const dialog = useRef(null);
  const transcript = useRef(null);
  const input = useRef(null);
  const sequence = useRef(0);
  const controller = useRef(null);
  const nextField = state.nextField;

  useEffect(() => {
    if (open && !dialog.current.open) { dialog.current.showModal(); input.current?.focus(); }
    else if (!open && dialog.current.open) dialog.current.close();
  }, [open]);
  useEffect(() => { transcript.current?.lastElementChild?.scrollIntoView({ block: 'nearest' }); }, [state.messages.length, state.pending]);
  useEffect(() => () => controller.current?.abort(), []);

  async function send(text, { retry = false, qualification, skipped } = {}) {
    if (state.pending || !text.trim()) return;
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
    }
  }

  function restart() {
    controller.current?.abort(); sequence.current++;
    dispatch({ type: 'restart' }); setDraft(''); setAnswer(''); input.current?.focus();
  }

  return (
    <dialog ref={dialog} className={styles.dialog} aria-label="Elixir assistant" onClose={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <header className={styles.header}>
        <div><span className={styles.eyebrow}>LET’S FIND YOUR FIT</span><h2>Ask Elixir</h2><p>Answers for your organization</p></div>
        <button type="button" className={styles.close} aria-label="Close assistant" onClick={onClose}>×</button>
      </header>
      {mode === 'sample' && <p className={styles.preview}>Preview · sample replies · no requests sent</p>}
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
          {state.error && <div className={styles.error} role="alert"><p>{state.error}</p><button type="button" onClick={() => send(state.failedMessage, { retry: true })}>Try again</button> <Link to="/contact-us/" onClick={onClose}>Contact Us</Link></div>}
          {nextField && !state.pending && state.messages.length > 1 && <form className={styles.qualify} onSubmit={(event) => {
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
          {!state.contactDeclined ? <div className={styles.invitation}><span>Want to see how it could fit?</span><button type="button" className={styles.secondary} onClick={() => dispatch({ type: 'review', open: true })}>Request a demo</button><button type="button" className={styles.quiet} onClick={() => dispatch({ type: 'decline' })}>Keep exploring</button></div> : <div className={styles.invitation}><button type="button" className={styles.quiet} onClick={() => dispatch({ type: 'review', open: true })}>Request a demo</button></div>}
        </>}
      </div>
      {!state.showReview && <form className={styles.composer} onSubmit={(event) => { event.preventDefault(); void send(draft); }}>
        <label className="visually-hidden" htmlFor="elixir-question">Your question</label>
        <textarea ref={input} id="elixir-question" value={draft} onChange={(event) => setDraft(event.target.value)} maxLength={MAX_USER_LENGTH} rows={2} placeholder="Ask about Elixir or tell us what you need…" onKeyDown={(event) => { if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); void send(draft); } }} />
        <button type="submit" aria-label="Send message" className={styles.send} disabled={state.pending || !draft.trim()}>↑</button>
      </form>}
      <footer className={styles.footer}><span>Automated assistant. Please avoid patient information.</span><button type="button" onClick={restart}>Start over</button></footer>
    </dialog>
  );
}
