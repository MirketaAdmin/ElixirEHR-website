import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ConsentContext } from '../../consent/consentContext';
import { hasGlobalPrivacyControl, OPTIONAL_CATEGORIES, readConsent, saveConsent } from '../../consent/consent';
import { cn } from '../../utils/cn';
import Container from '../layout/Container/Container';
import Button from '../ui/Button/Button';
import Icon from '../ui/Icon/Icon';
import styles from './CookieConsent.module.css';

const PRIVACY_POLICY_PATH = '/privacy-policy';

const copy = {
  heading: 'Your Privacy Matters',
  description:
    'We use cookies and similar technologies to improve your browsing experience, analyze website traffic, and understand how visitors interact with our website. You can accept all cookies, reject non-essential cookies, or customize your preferences at any time.',
  privacyLink: 'Privacy Policy',
  acceptAll: 'Accept All',
  rejectNonEssential: 'Reject Non-Essential',
  customize: 'Customize Preferences',
  preferencesTitle: 'Cookie Preferences',
  save: 'Save My Preferences',
  alwaysActive: 'Always active',
  gpcNote: 'Off while your browser sends a Global Privacy Control signal.',
};

const categories = [
  {
    key: 'necessary',
    title: 'Strictly Necessary Cookies',
    description:
      'Required for essential website functionality, such as security, saving your cookie choices and protecting our forms from spam. These cannot be disabled through this panel.',
  },
  {
    key: 'analytics',
    title: 'Analytics Cookies',
    description:
      'Help us understand how visitors use the website so we can measure and improve our content.',
  },
  {
    key: 'marketing',
    title: 'Marketing Cookies',
    description:
      'Allow advertising and marketing-related tracking technologies, such as measuring campaigns and showing relevant ads.',
  },
  {
    key: 'functional',
    title: 'Functional Cookies',
    description: 'Enable optional features and personalization, such as remembering your preferences.',
  },
];

const allOptional = (value) => Object.fromEntries(OPTIONAL_CATEGORIES.map((key) => [key, value]));

/** An accessible on/off switch (a button with role="switch"). */
function Toggle({ checked, disabled, onChange, labelledBy, describedBy }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-labelledby={labelledBy}
      aria-describedby={describedBy}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(styles.switch, checked && styles.switchOn)}
    >
      <span className={styles.knob} />
    </button>
  );
}

/**
 * The preferences dialog (mounted while open; a native modal <dialog>, so focus moves into it, is
 * kept inside, Escape closes it and focus returns to the opener). One row per category; the
 * optional ones start from the saved choice — all off for a first-time visitor.
 */
function Preferences({ consent, onClose, onSave, onAcceptAll, onReject }) {
  const dialogRef = useRef(null);
  const baseId = useId();
  const gpc = hasGlobalPrivacyControl();
  const [draft, setDraft] = useState(() => (consent ? pick(consent.categories) : allOptional(false)));

  useEffect(() => {
    const opener = document.activeElement;
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
    // Saving unmounts the dialog, so hand focus back to whatever opened it ourselves.
    return () => {
      if (opener instanceof HTMLElement && opener.isConnected) opener.focus();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={`${baseId}-title`}
      onClose={onClose}
      onClick={(event) => event.target === dialogRef.current && onClose()}
    >
      <div className={styles.dialogInner}>
        <div className={styles.dialogHeader}>
          <h2 id={`${baseId}-title`} className={styles.dialogTitle}>
            {copy.preferencesTitle}
          </h2>
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
            <Icon name="close" size={22} />
          </button>
        </div>
        <p className={styles.dialogIntro}>
          {copy.description}{' '}
          <Link to={PRIVACY_POLICY_PATH} className={styles.link} onClick={onClose}>
            {copy.privacyLink}
          </Link>
        </p>

        <ul className={styles.categories}>
          {categories.map((category) => {
            const titleId = `${baseId}-${category.key}`;
            const descriptionId = `${titleId}-description`;
            const necessary = category.key === 'necessary';
            const blocked = category.key === 'marketing' && gpc;
            return (
              <li key={category.key} className={styles.category}>
                <div className={styles.categoryHead}>
                  <h3 id={titleId} className={styles.categoryTitle}>
                    {category.title}
                  </h3>
                  {necessary ? (
                    <span className={styles.always}>{copy.alwaysActive}</span>
                  ) : (
                    <Toggle
                      checked={!blocked && draft[category.key]}
                      disabled={blocked}
                      labelledBy={titleId}
                      describedBy={descriptionId}
                      onChange={(value) => setDraft((current) => ({ ...current, [category.key]: value }))}
                    />
                  )}
                </div>
                <p id={descriptionId} className={styles.categoryText}>
                  {category.description}
                  {blocked && <span className={styles.gpc}> {copy.gpcNote}</span>}
                </p>
              </li>
            );
          })}
        </ul>

        <div className={styles.dialogActions}>
          <Button variant="outline" size="md" onClick={onReject}>
            {copy.rejectNonEssential}
          </Button>
          <Button variant="tertiary" size="md" onClick={() => onSave(draft)}>
            {copy.save}
          </Button>
          <Button size="md" onClick={onAcceptAll}>
            {copy.acceptAll}
          </Button>
        </div>
      </div>
    </dialog>
  );
}

function pick(saved) {
  return Object.fromEntries(OPTIONAL_CATEGORIES.map((key) => [key, saved[key] === true]));
}

/**
 * Cookie consent for the whole site: the banner (until the visitor chooses), the preferences
 * dialog, and the context the footer's "Cookie settings" link uses to reopen it. Choices are
 * stored and applied through src/consent/consent.js (including Google Consent Mode v2).
 * The banner is a full-width bar fixed to the bottom of the screen (supplied reference): the
 * notice on the left, "Customize Preferences", "Reject Non-Essential" and "Accept All" on the
 * right — all three the same size and one click away.
 */
function CookieConsent({ children }) {
  const [consent, setConsent] = useState(readConsent);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  const save = useCallback((choices) => {
    setConsent(saveConsent(choices));
    setPreferencesOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      consent,
      acceptAll: () => save(allOptional(true)),
      rejectNonEssential: () => save(allOptional(false)),
      savePreferences: save,
      openPreferences: () => setPreferencesOpen(true),
    }),
    [consent, save],
  );

  return (
    <ConsentContext.Provider value={value}>
      {children}

      {!consent && (
        <section className={styles.banner} aria-labelledby="cookie-banner-title" aria-describedby="cookie-banner-text">
          <Container className={styles.bannerInner}>
            <div className={styles.bannerCopy}>
              <h2 id="cookie-banner-title" className={styles.bannerTitle}>
                {copy.heading}
              </h2>
              <p id="cookie-banner-text" className={styles.bannerText}>
                {copy.description}{' '}
                <Link to={PRIVACY_POLICY_PATH} className={styles.link}>
                  {copy.privacyLink}
                </Link>
              </p>
            </div>
            <div className={styles.bannerActions}>
              <button type="button" className={styles.barButton} onClick={value.openPreferences}>
                {copy.customize}
              </button>
              <button type="button" className={styles.barButton} onClick={value.rejectNonEssential}>
                {copy.rejectNonEssential}
              </button>
              <button type="button" className={cn(styles.barButton, styles.barAccept)} onClick={value.acceptAll}>
                {copy.acceptAll}
              </button>
            </div>
          </Container>
        </section>
      )}

      {preferencesOpen && (
        <Preferences
          consent={consent}
          onClose={() => setPreferencesOpen(false)}
          onSave={save}
          onAcceptAll={value.acceptAll}
          onReject={value.rejectNonEssential}
        />
      )}
    </ConsentContext.Provider>
  );
}

export default CookieConsent;
