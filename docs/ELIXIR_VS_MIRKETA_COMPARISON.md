# ElixirEHR Web-to-Lead compared with the Mirketa fix

**Date:** 10 Nov 2026
**Branch:** `fix/contact-us-web-to-lead`
**Scope:** read-only. No code, Salesforce settings or reCAPTCHA keys were changed. No secret key appears in this file.

**For:** the Elixir web team and the Salesforce admin of org `00Dd0000000hivg`.

**Status:** **NEEDS LIVE TEST.**

- **Hydrated page:** none of Mirketa's four issues exists in the normal path, where the page has fully loaded and React has taken over the form (hydration).
- **One limited defect, F-1:** on the prerendered page, before hydration or if the site JavaScript fails, the form posts with no token and an empty `ts`. These are Mirketa symptoms 1 and 2, but only in that window.
- **Main cause:** F-1 cannot explain *all* missing Leads. Only the coordinated live test and the admin checks in section 4 can identify the main cause.

Line references are to `main` at `b6f8815`, which this branch contains unchanged.

## 1. Mirketa's four issues, checked against Elixir

| # | Mirketa issue | Present in Elixir? | Evidence |
|---|---|---|---|
| 1 | `g-recaptcha-response` empty at submit | **No, in the normal path.** **Yes, in the F-1 window only.** | The submit handler stops the POST and shows a message when the token is empty: [ContactForm.jsx:56-60](../src/components/sections/ContactSection/ContactForm.jsx#L56-L60) and [BriefSection.jsx:48-52](../src/pages/NoShowRoiCalculator/sections/BriefSection/BriefSection.jsx#L48-L52). The widget renders inside the form, so Google writes the token field inside it: [ContactForm.jsx:94](../src/components/sections/ContactSection/ContactForm.jsx#L94), [BriefSection.jsx:101](../src/pages/NoShowRoiCalculator/sections/BriefSection/BriefSection.jsx#L101). The live probe found 1 field, inside the form, on all 7 pages. 91/91 automated payload checks passed. **F-1:** a live test with the JS bundles blocked posted the prerendered form with **no** `g-recaptcha-response` field (request aborted before it reached Salesforce). |
| 2 | `captcha_settings.ts` never updated | **No, in the normal path.** **Yes, in the F-1 window only.** | `ts` is set at mount and every 500 ms until a token exists: [WebToLead.jsx:22-30](../src/components/forms/WebToLead/WebToLead.jsx#L22-L30). It is a 13-digit value on all 7 live pages. **F-1:** the prerendered value is `"ts":""` ([WebToLead.jsx:34](../src/components/forms/WebToLead/WebToLead.jsx#L34)) and stays empty if the JS never runs. |
| 3 | Widget not initialised correctly in React (auto-render, remounts, script race) | **No** | Explicit render (`render=explicit` plus an `onload` callback): [WebToLead.jsx:51](../src/components/forms/WebToLead/WebToLead.jsx#L51). The script loads once and is shared through a promise: [WebToLead.jsx:44-61](../src/components/forms/WebToLead/WebToLead.jsx#L44-L61). Remounts are guarded by `cancelled` and `childElementCount`: [WebToLead.jsx:75-79](../src/components/forms/WebToLead/WebToLead.jsx#L75-L79). On the dev server under StrictMode there was 1 widget and 1 `api.js`, also after moving to another page within the site and back. |
| 4 | Submission by fetch or axios instead of a native POST | **No** | `<form action={webToLead.action} method="POST">`: [ContactForm.jsx:65](../src/components/sections/ContactSection/ContactForm.jsx#L65), [BriefSection.jsx:75](../src/pages/NoShowRoiCalculator/sections/BriefSection/BriefSection.jsx#L75). The handler only calls `preventDefault()` when it blocks a submission. The only `fetch(` in `src/` is the newsletter ([newsletterService.js:12](../src/services/newsletterService.js#L12)). There is no axios. |

### Token lookup and blocking (items 4 and 5 of the brief)

- **Token lookup.** `hasRecaptchaResponse(form)` runs `form.querySelector('[name="g-recaptcha-response"]')` on the given form, not a document-wide ID: [webToLeadHelpers.js:4-6](../src/components/forms/WebToLead/webToLeadHelpers.js#L4-L6). **Confirmed.**
- **Blocking.** When the token is empty, the parent `onSubmit` calls `event.preventDefault()` and sets status `captcha`. The page then shows "Please confirm you are not a robot, then submit again." in a `role="status"` element: [ContactForm.jsx:16,56-60,111-113](../src/components/sections/ContactSection/ContactForm.jsx#L56-L60). The calculator form does the same: [BriefSection.jsx:15,48-52](../src/pages/NoShowRoiCalculator/sections/BriefSection/BriefSection.jsx#L48-L52). **Confirmed.**

## 2. Configuration values ([src/data/webToLead.js](../src/data/webToLead.js))

| Key | Value | Line | Check |
|---|---|---|---|
| `action` | `https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dd0000000hivg` | 8 | Same as Salesforce's generated Elixir snippet |
| `captcha.keyName` | `ElixirEHR` | 18 | Exactly `ElixirEHR`, case-sensitive ✔ |
| `captcha.siteKey` | `6Lf5QdAZAAAAAMpIeeAGEDVzMQ0JSHFpdUYIZQs_` (public) | 19 | Must equal the ElixirEHR key pair's site key (admin) |
| `orgId` | `00Dd0000000hivg` | 9 | ✔ It is a literal string, also in the production build. |
| `leadSource` | `Web` | 16 | **The admin must confirm** that `Web` is an active Lead Source picklist value. |
| `returnUrl` | `https://www.elixirehr.com/thank-you/` | 13-15 | Built from `VITE_SITE_URL` ([siteUrl.js:5](../src/utils/siteUrl.js#L5)). Without that variable it falls back to `https://elixirehr.com/thank-you/` (no www), which returns 404. The live site and a production build with the variable both use the www URL ✔. |

### `captcha_settings` JSON

Built at [WebToLead.jsx:12-13](../src/components/forms/WebToLead/WebToLead.jsx#L12-L13):

```json
{"keyname":"ElixirEHR","fallback":"true","orgId":"00Dd0000000hivg","ts":"<13-digit epoch ms>"}
```

- **Keys.** Exactly `keyname`, `fallback`, `orgId` and `ts`, in that order. `orgId` is camelCase, as in Salesforce's generated HTML ✔.
- **`ts`.** A string from `JSON.stringify(Date.now())`, a millisecond timestamp ([WebToLead.jsx:25](../src/components/forms/WebToLead/WebToLead.jsx#L25)) ✔.
- **Salesforce's own echo.** The Salesforce debug response of 6 Nov repeated this JSON back with `"ts":"1793952920651"`.

## 3. Elixir and Mirketa values compared

| Item | Mirketa | Elixir | Difference |
|---|---|---|---|
| Org ID | `00Dd0000000hivg` | `00Dd0000000hivg` | Same org |
| reCAPTCHA keyname | `Mirketa_New` | `ElixirEHR` | **Different, as intended.** Each site has its own key pair in the same org. |
| Site key | Mirketa's own key | `6Lf5Qd…` | Different (each key pair has its own) |
| `lead_source` | `Web` | `Web` | Same |
| Endpoint | `…/servlet.WebToLead?encoding=UTF-8` | `…/servlet.WebToLead?encoding=UTF-8&orgId=00Dd0000000hivg` | Elixir's has `&orgId=…`, exactly as in the snippet Salesforce generated for Elixir. Both are valid Web-to-Lead endpoints. The org is also sent in the `oid` field. |
| `retURL` | Not given in this brief | `https://www.elixirehr.com/thank-you/` | Not compared |

None of these differences is a defect. Elixir must keep its own keyname, site key and endpoint. Copying Mirketa's values, for example keyname `Mirketa_New`, would make Salesforce verify Elixir tokens against the wrong secret.

## 4. Salesforce-side checks for the ElixirEHR key pair (admin)

| # | Check | Where | Answer |
|---|---|---|---|
| 1 | Does the secret key of key pair **ElixirEHR** equal the secret Google shows for site key `6Lf5Qd…`? Answer only **match**, **no match** or **cannot verify**. Never paste the secret. | Salesforce: Setup → Web-to-Lead → reCAPTCHA API key pair lookup. Google: google.com/recaptcha/admin | |
| 2 | Does the key's domain list in the Google console cover **`elixirehr.com`** and **`www.elixirehr.com`**? | Google reCAPTCHA admin → key settings | |
| 3 | Is the key type **reCAPTCHA v2, "I'm not a robot" Checkbox**? | Google reCAPTCHA admin | |
| 4 | Is the ElixirEHR site key exactly `6Lf5QdAZAAAAAMpIeeAGEDVzMQ0JSHFpdUYIZQs_`, and is there only **one** pair with the name `ElixirEHR`? | Salesforce key pair lookup | |
| 5 | Is **`Web`** an active value of the Lead **Lead Source** picklist (or of its record type's picklist)? | Object Manager → Lead → Fields → Lead Source | |
| 6 | Which **assignment rule** entry applies to Elixir Leads (Lead Source = Web), and which owner or queue does it set? Can the Elixir sales team see that queue? | Setup → Lead Assignment Rules; Queues | |
| 7 | Is **Require reCAPTCHA Verification** on or off, and is the Default Lead Creator an active user? | Setup → Web-to-Lead | |

Then run the coordinated test once. The steps are in [CONTACT_US_FIX_FINDINGS.md](CONTACT_US_FIX_FINDINGS.md), Step 2.

## 5. Final status

**NEEDS LIVE TEST.**

- **Mirketa issues 1–4:** not present in Elixir's hydrated form.
- **F-1 (prerendered form posts without a token before hydration):** a confirmed, limited website defect, with symptoms like Mirketa issues 1 and 2. The fix is proposed in [CONTACT_US_FIX_FINDINGS.md](CONTACT_US_FIX_FINDINGS.md) and awaits approval.
- **Main cause:** still unconfirmed. It needs the section 4 checks and one coordinated live test with a manually ticked reCAPTCHA.
