import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { PRIVATE_PREVIEW } from '../../config/preview';
import { webToLead } from '../../data/webToLead';
import { WebToLeadFields, Recaptcha } from '../../components/forms/WebToLead/WebToLead';
import { hasRecaptchaResponse, useResetOnPageShow } from '../../components/forms/WebToLead/webToLeadHelpers';
import { buildLeadDescription } from './conversation.mjs';
import styles from './SalesAssistant.module.css';

export default function LeadReview({ state, mode, onBack }) {
  const [summary, setSummary] = useState(() => buildLeadDescription(state));
  const [role, setRole] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [notice, setNotice] = useState('');
  const [sending, setSending] = useState(false);
  const [captchaUnavailable, setCaptchaUnavailable] = useState(false);
  const noticeRef = useRef(null);
  useEffect(() => { if (notice) noticeRef.current?.scrollIntoView({ block: 'nearest' }); }, [notice]);
  useResetOnPageShow(useCallback(() => { setSending(false); setNotice(''); }, []));
  const canSubmit = mode === 'hosted' && !PRIVATE_PREVIEW && import.meta.env.VITE_ELIXIR_LEAD_SUBMISSION_ENABLED === 'true' && window.location.origin === 'https://www.elixirehr.com';
  const description = [summary, role && `Role: ${role}`, preferredTime && `Preferred demo time/timezone (request only): ${preferredTime}`].filter(Boolean).join('\n').slice(0, 4000);

  function submit(event) {
    if (!canSubmit) { event.preventDefault(); setNotice('Preview only. No request has been sent or meeting booked.'); return; }
    if (sending || captchaUnavailable || !hasRecaptchaResponse(event.currentTarget)) { event.preventDefault(); setNotice('Please complete the verification, then submit your request.'); return; }
    setSending(true);
    setNotice('Submitting your request. A meeting is not reserved yet.');
  }
  return (
    <form className={styles.review} action={canSubmit ? webToLead.action : undefined} method="POST" onSubmit={submit}>
      <button type="button" className={styles.back} onClick={onBack}>← Back to conversation</button>
      <h3>Make the next conversation useful.</h3>
      <p>Review your details and what you’d like to discuss. Our team can follow up about a demo.</p>
      {!canSubmit && <p className={styles.notice}>You can try this form. Requests are disabled in this preview.</p>}
      <div className={styles.contactGrid}>
        {[['firstName', 'First name'], ['lastName', 'Last name'], ['email', 'Work email'], ['company', 'Organization'], ['phone', 'Phone (optional)']].map(([key, label]) => <label key={key}>{label}<input name={webToLead.fields[key].name} type={key === 'email' ? 'email' : key === 'phone' ? 'tel' : 'text'} maxLength={webToLead.fields[key].maxLength} required={key !== 'phone'} autoComplete={{ firstName: 'given-name', lastName: 'family-name', email: 'email', company: 'organization', phone: 'tel' }[key]} /></label>)}
        <label>Your role (optional)<input value={role} onChange={(event) => setRole(event.target.value)} maxLength={120} autoComplete="organization-title" /></label>
      </div>
      <label htmlFor="elixir-request-summary">Request summary</label>
      <textarea id="elixir-request-summary" value={summary} onChange={(event) => setSummary(event.target.value)} maxLength={3300} rows={7} />
      <label>Preferred demo time and time zone (optional)<input value={preferredTime} onChange={(event) => setPreferredTime(event.target.value)} maxLength={160} placeholder="For example, next Tuesday afternoon, Pacific time" /></label>
      <p className={styles.caption}>Preferred times are a request. A meeting is confirmed only after scheduling.</p>
      <input type="hidden" name="description" value={description} />
      {canSubmit && <><WebToLeadFields sourceUrl={`https://www.elixirehr.com${state.sourcePath}`} /><Recaptcha onUnavailable={() => { setCaptchaUnavailable(true); setNotice('Verification is unavailable. Please use Contact Us.'); }} onExpired={() => setNotice('Verification expired. Please complete it again before submitting.')} /></>}
      <p className={styles.caption}>By submitting, you ask our team to contact you about this request. See our <Link to="/privacy-policy/">Privacy Policy</Link>.</p>
      <button type="submit" className={styles.primary} disabled={sending || captchaUnavailable}>{sending ? 'Submitting…' : canSubmit ? 'Submit demo request' : 'Preview demo request'}</button>
      {notice && <p ref={noticeRef} className={styles.notice} role="status">{notice}</p>}
    </form>
  );
}
