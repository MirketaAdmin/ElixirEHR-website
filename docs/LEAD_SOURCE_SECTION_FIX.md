# Lead Source Section: Elixir aligned with Mirketa

**Date:** 11 Nov 2026
**Status:** Fixed in code, verified locally. Not yet committed or deployed. Final confirmation needs one live test lead after deployment.

## 1. The two lead emails (11 Nov 2026)

| Email field | Mirketa (13:38, correct) | Elixir (13:39, wrong) |
|---|---|---|
| Lead Source | Web | Web |
| **Lead Source Section** | `https://www.mirketa.com/company/contact/#contact-form` | *(empty)* |
| Comment | form test | form testing with source |
| Phone / Mobile | Mobile: 07060125641 | Phone: 07060125641 |

## 2. Root cause

"Lead Source Section" is the Lead custom field **`00N0W000008z5D6`** in org `00Dd0000000hivg`. Both sites post to this org.

**Mirketa** sets the field with a hidden input (`mirketa/main`, `src/components/ContactForm/ContactForm.jsx`):

- line 35: `const URL_TRACKING_FIELD_ID = "00N0W000008z5D6";`
- line 188: `<input type="hidden" id={URL_TRACKING_FIELD_ID} name={URL_TRACKING_FIELD_ID} ref={urlFieldRef} />`
- lines 93–98: on mount, `urlFieldRef.current.value = window.location.href`

So it holds the full page URL, including the `#hash` and `?query`. The input has no `value` prop, so React re-renders never reset it.

**Elixir** never posted `00N0W000008z5D6`. On 10 Nov a "Submitted from: <title> (<url>)" line was appended to the **Description** instead (`webToLeadHelpers.js` `submissionSource()`, used by `ContactForm.jsx` and `BriefSection.jsx`). That fills a different field in a different format, so "Lead Source Section" stayed empty. The Elixir test email shows only the visitor's message under Comment.

## 3. Fix (Elixir only; Mirketa untouched)

| File | Change |
|---|---|
| `src/data/webToLead.js` | `sourceUrlField: '00N0W000008z5D6'` |
| `src/components/forms/WebToLead/WebToLead.jsx` | `WebToLeadFields` renders `<input type="hidden" id/name="00N0W000008z5D6">` with no value prop. An effect sets it to `window.location.href` on mount, the same logic as Mirketa. All 7 lead forms use this component. |
| `src/components/sections/ContactSection/ContactForm.jsx` | The message textarea again posts directly as `description`. The hidden description with the "Submitted from" line is removed. |
| `src/pages/NoShowRoiCalculator/sections/BriefSection/BriefSection.jsx` | The "Submitted from" line is removed from the calculator's description. Its role and calculator values stay. |
| `src/components/forms/WebToLead/webToLeadHelpers.js` | The unused `submissionSource()` / `withSubmissionSource()` are removed. |

The value is captured from the browser at runtime. It is not hardcoded.

## 4. Tests

All on a local production build. Real mouse click on submit. Salesforce POST captured and aborted, so nothing was sent.

| Page | `00N0W000008z5D6` posted | `description` posted |
|---|---|---|
| /contact-us/#contact | `…/contact-us/#contact` | visitor's message only |
| /about-us/ | `…/about-us/` | message |
| /why-elixir/ | `…/why-elixir/` | message |
| /referral-program/ | `…/referral-program/` | message |
| /salesforce-evv/ | `…/salesforce-evv/` | message |
| /onc-certification/onc-mfa-use-cases/ | `…/onc-certification/onc-mfa-use-cases/` | message |
| /no-show-cost-calculator/ | `…/no-show-cost-calculator/` | calculator summary (unchanged) |
| /request-demo/ (alias) | `…/contact-us/#contact` | message |
| /contact-us/?utm_source=google&utm_campaign=demo | the URL with the UTM query | message |

Other checks:

- **In-site navigation** (Why Elixir → Contact Us, no reload): the field holds the new page's URL. There is exactly one such field.
- **Form regression:** 91/91 checks pass. keyname `elixirEHR_website_2026`, a 13-digit `ts`, the reCAPTCHA token and every field are still posted. A double click still sends 1 POST. 0 JS errors.
- **Build and lint:** pass.

On the live site the field will hold `https://www.elixirehr.com/<page>/…`. Mirketa's holds `https://www.mirketa.com/…`.

## 5. Remaining difference (not changed)

**Phone vs Mobile.** Mirketa posts the number as `mobile`, so the email shows "Mobile:". Elixir posts `phone`, as in the `elixirEHR_website_2026` snippet chosen on 10 Nov, so the email shows "Phone:". If the email should match Mirketa here too, change `fields.phone.name` to `'mobile'` in `src/data/webToLead.js`.

## 6. To confirm it is resolved

Deploy, submit one test from https://www.elixirehr.com/contact-us/, and check that the lead email shows:

`Lead Source Section : https://www.elixirehr.com/contact-us/#contact`
