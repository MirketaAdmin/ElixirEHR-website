# Contact Us → Web-to-Lead fix V2: changelog

**Branch:** `fix/contact-us-web-to-lead` (local, not pushed)

Line numbers refer to the files after the change. The findings are described in [CONTACT_US_FIX_V2_FINDINGS.md](CONTACT_US_FIX_V2_FINDINGS.md).

| File | Lines | Change | Reason | Finding |
|---|---|---|---|---|
| `src/components/forms/WebToLead/WebToLead.jsx` | 15–24 | Comment explaining why `captcha_settings` has no value prop | Prevents someone re-adding `defaultValue` | W2-a |
| `src/components/forms/WebToLead/WebToLead.jsx` | 39 | `<input ref={settingsRef} type="hidden" name="captcha_settings" />` (removed `defaultValue={settings('')}`) | React re-applied `defaultValue` on the submit re-render and reset `ts` to `""` just before the POST body was built | **W2-a** |
| `src/components/forms/WebToLead/WebToLead.jsx` | 49–51 | `RECAPTCHA_LOAD_TIMEOUT_MS = 15000` | If Google never calls back, the form shows "unavailable" instead of waiting for ever | W4 |
| `src/components/forms/WebToLead/WebToLead.jsx` | 71–80 | `loadRecaptchaWithTimeout()` races the shared script promise against the timeout. The shared promise is kept, so no second `api.js` is ever added. | Same | W4 |
| `src/components/forms/WebToLead/WebToLead.jsx` | 88–96, 105, 109 | `onUnavailable` is read through `unavailableRef`; the effect calls `loadRecaptchaWithTimeout()` and has `[]` dependencies | The render effect runs once, whatever callbacks the parent passes | W4 |
| `src/components/forms/WebToLead/webToLeadHelpers.js` | 1–16 | New `useHydrated()` (false in the prerendered HTML, true after hydration) and `NOSCRIPT_MESSAGE` | Supports F-1 | W4 / F-1 |
| `src/components/sections/ContactSection/ContactForm.jsx` | 8, 48–49, 100, 116–120 | Imports; `const hydrated = useHydrated()`; `disabled={… \|\| !hydrated \|\| …}`; `<noscript>` message | The prerendered form can no longer post a token-less Lead before hydration | W4 / F-1 |
| `src/pages/NoShowRoiCalculator/sections/BriefSection/BriefSection.jsx` | 8, 41–42, 107, 120–124 | Same as `ContactForm.jsx` | Same, for the calculator's form | W4 / F-1 |
| `docs/CONTACT_US_FIX_V2_FINDINGS.md` | new | Evidence, branches and verification | — | — |
| `docs/SALESFORCE_ADMIN_ACTIONS_V2.md` | new | Admin checklist and decision table | — | Step 3 |
| `docs/CONTACT_US_FIX_V2_CHANGELOG.md` | new | This file | — | — |

**Not changed:**

- `src/data/webToLead.js` (`keyname`, site key, org ID, endpoint, lead source and return URL are all correct)
- field names and the `captcha_settings` JSON format
- design, copy and CSS
- Salesforce and Google settings
- existing documents

**Forms affected (shared code):** Contact Us, About Us, Why Elixir, Referral Program, EVV for Field Service, ONC MFA Use Cases and the No-Show Calculator.
