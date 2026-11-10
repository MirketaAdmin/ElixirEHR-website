# Contact Us → Salesforce Lead not created: V2 findings

**Date:** 10 Nov 2026
**Branch:** `fix/contact-us-web-to-lead`
**Status:** **WEBSITE FIX IMPLEMENTED – SALESFORCE VERIFICATION PENDING**

**Readers:** the Elixir web team, the product team (deployment approval) and the Salesforce admin of org `00Dd0000000hivg`.

## Summary

A website defect was found and fixed. Every real form submission on the live site posted `captcha_settings` with **`"ts":""`**, on all 7 lead forms. This is Mirketa's root cause #2 (empty `captcha_settings.ts`) in Elixir's code.

- **Why earlier audits missed it:** they submitted the form with a scripted `.click()`. A scripted click delays React's re-render until after the browser has built the POST body. A real mouse click does not.
- **Status of the fix:** it is on this branch, not deployed.
- **What is still open:** whether this was the cause of the missing Leads can only be confirmed after deployment, with the coordinated test and the admin checks in [SALESFORCE_ADMIN_ACTIONS_V2.md](SALESFORCE_ADMIN_ACTIONS_V2.md).

## 1. Payload evidence

### 1a. Your live test (10 Nov, ~08:00 GMT)

The payload of the `servlet.WebToLead` request has not yet been reported (Step 1 of the brief). **Please check one value in it.** Look at `captcha_settings` in DevTools → Network → `servlet.WebToLead…` → Payload. Based on the finding below, it should show `"ts":""`.

### 1b. Reproduced on the live site with a trusted mouse click

This test needed no Salesforce submission:

- **Script:** `trusted_click.mjs` in the session scratchpad.
- **Browser:** headless Chrome.
- **Click:** a real `Input.dispatchMouseEvent` press and release on the submit button, the same as a person clicking.
- **Token:** Google's public test site key was swapped in, inside the browser only, and the answered state was simulated by filling `g-recaptcha-response`.
- **Salesforce:** the POST was **captured and aborted**, so nothing reached Salesforce.

| Page | `ts` in the page before the click | `ts` in the POST body | Token posted |
|---|---|---|---|
| www.elixirehr.com/contact-us/ | 13 digits | **`""` (empty)** | yes |
| www.elixirehr.com/why-elixir/ | 13 digits | **`""` (empty)** | yes |
| www.elixirehr.com/salesforce-evv/ | 13 digits | **`""` (empty)** | yes |
| www.elixirehr.com/onc-certification/onc-mfa-use-cases/ | 13 digits | **`""` (empty)** | yes |
| Local production build, before the fix: contact-us, about-us, referral-program, no-show-cost-calculator | 13 digits | **`""` (empty)** | yes |

All the other values in the POST were correct:

- `keyname` = `ElixirEHR`
- `orgId` = `oid` = `00Dd0000000hivg`
- `last_name`, `email`, `company`, `lead_source` and `retURL` present
- no duplicate field names

The 91/91 automated checks also cover these values.

## 2. Findings and branches

| ID | Branch | Finding | Status | Evidence |
|---|---|---|---|---|
| **W2-a** | W2 (`captcha_settings` wrong) | `ts` is reset to `""` at the moment of submission | **CONFIRMED; fixed** | Section 1b |
| W1 | Token empty | The widget is inside the form; there is one token field; `reset()` is never called before submit | NOT PRESENT | [CONTACT_US_FIX_FINDINGS.md](CONTACT_US_FIX_FINDINGS.md) Q3 and Q11; token posted = yes in section 1b |
| W2-b | `keyname`, `orgId` key or casing | `keyname` `ElixirEHR`, JSON keys `keyname`/`fallback`/`orgId`/`ts` | NOT PRESENT | [webToLead.js:18](../src/data/webToLead.js#L18), [WebToLead.jsx:12-13](../src/components/forms/WebToLead/WebToLead.jsx#L12-L13) |
| W3 | Missing or misnamed field | Names match the Salesforce snippet; no custom fields | NOT PRESENT | [webToLead.js:22-29](../src/data/webToLead.js#L22-L29) |
| W4 / F-1 | Prerendered form posts before hydration | Approved hardening | **Fixed** | Section 4 |

### Root cause of W2-a: a React behaviour

1. `captcha_settings` was rendered as `<input type="hidden" defaultValue={settings('')}>`. An effect then overwrote its value with a fresh `ts` every 500 ms, until the token existed.
2. On submit, the handler calls `setStatus('sending')` ([ContactForm.jsx:61](../src/components/sections/ContactSection/ContactForm.jsx#L61)). React re-renders the form, including `WebToLeadFields`.
3. On every update of an `<input>` that has a `defaultValue` prop, React sets `node.defaultValue` again. On a **hidden** input, `defaultValue` is the value: the `value` attribute is the field's value. The field therefore went back to `{"…","ts":""}`.
4. For a real click, the browser runs pending microtasks after the submit listener returns, and React's re-render is one of them. It then builds the POST body, so `ts` was already `""`. A scripted `.click()` runs those microtasks only after the body is built, which is why the earlier tests passed.

Salesforce's own snippet never resets `ts`. Mirketa's investigation found that an empty `ts` makes Salesforce drop the Lead, in this same org.

## 3. Changes

| File | Change | Finding |
|---|---|---|
| [WebToLead.jsx](../src/components/forms/WebToLead/WebToLead.jsx) | `captcha_settings` no longer has a `defaultValue`; only the existing 500 ms effect writes it, so React has nothing to reset. The JSON format is unchanged (`keyname`, `fallback`, `orgId`, `ts`). | **W2-a** |
| [WebToLead.jsx](../src/components/forms/WebToLead/WebToLead.jsx) | 15 s timeout on loading reCAPTCHA, after which `onUnavailable` fires. `onUnavailable` is read through a ref, so the render effect runs once. | W4 |
| [webToLeadHelpers.js](../src/components/forms/WebToLead/webToLeadHelpers.js) | New `useHydrated()` hook and `NOSCRIPT_MESSAGE` | W4 / F-1 |
| [ContactForm.jsx](../src/components/sections/ContactSection/ContactForm.jsx), [BriefSection.jsx](../src/pages/NoShowRoiCalculator/sections/BriefSection/BriefSection.jsx) | Submit is disabled until hydration; `<noscript>` message with info@elixirehr.com | W4 / F-1 |

Line ranges are in [CONTACT_US_FIX_V2_CHANGELOG.md](CONTACT_US_FIX_V2_CHANGELOG.md).

**Impact (rule 5):** the change is in shared code, so all 7 lead forms get it:

- Contact Us
- About Us
- Why Elixir
- Referral Program
- EVV for Field Service
- ONC MFA Use Cases
- No-Show Calculator

The design, copy and fields are unchanged. The only visible differences:

- the submit button is disabled for the first moment of page load
- the new no-JavaScript and reCAPTCHA-timeout messages appear only in those failure cases

## 4. Verification (local production build, `VITE_SITE_URL=https://www.elixirehr.com`)

| Check | Result |
|---|---|
| Lint (`oxlint`) | Clean |
| `npm run build` | 112/112 pages |
| Real-click POST, all 7 forms | `ts` = 13 digits on **7/7**; token posted |
| Full form test (13 checks × 7) | **91/91 PASS**; in-site navigation PASS; 0 JS errors |
| Prerendered HTML, all 7 pages | Submit button has `disabled`; `<noscript>` message present; `captcha_settings` has no prefilled value |
| Site JS blocked (F-1) | Submit disabled; **0** POSTs (before the fix: 1 token-less POST) |
| Google's `api.js` hangs | At 20 s: "The verification check could not load… info@elixirehr.com" and the submit button is disabled |
| Hydration and console | No errors; 1 widget, 1 `api.js`, 1 token field, also after in-site navigation (production and dev StrictMode) |
| `dist/` | `oid` and action `00Dd0000000hivg`; site key `6Lf5Qd…` once; `retURL` www; **no secret key**. The other `6L…` strings are base64 image data. |

**Not verified:** Lead creation in Salesforce. That needs deployment, then one coordinated test and the admin's confirmation ([SALESFORCE_ADMIN_ACTIONS_V2.md](SALESFORCE_ADMIN_ACTIONS_V2.md)).

## 5. Next steps

1. Check the `captcha_settings` value in your own 10 Nov test payload (section 1a).
2. Product team: approve deployment of this branch. Nothing is pushed yet.
3. After deployment: run one coordinated test with a unique email and company, as described in [SALESFORCE_ADMIN_ACTIONS_V2.md](SALESFORCE_ADMIN_ACTIONS_V2.md).
4. If no Lead appears even with a 13-digit `ts`, the admin works through section 2 of that file.
