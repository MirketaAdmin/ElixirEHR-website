# Elixir Salesforce Web-to-Lead: diagnostic report

**Last updated:** 10 Nov 2026
**Repository:** `main` at `6cc4cd6`
**Live site:** www.elixirehr.com, running the build of commit `618cec9`
**Status:** **PENDING. Salesforce verification is blocked.** No defect on the website side explains the missing Leads. Whether Salesforce creates the Lead has not been verified: that needs Salesforce admin access, or one manual test (section 9).

## 1. Problem

The site's lead forms appear to work:

- the visitor fills in the form and ticks reCAPTCHA
- the form submits
- `/thank-you/` opens

But no Lead record appears in Salesforce.

## 2. Documentation reviewed

| Document | Notes |
|---|---|
| `README.md` (Data persistence) | Describes the Web-to-Lead flow correctly. The list of form pages and the return URL were out of date; corrected in this pass. |
| `DESIGN-SYSTEM.md` ("Salesforce Web-to-Lead forms (2026-10-23)" and the No-Show Calculator build notes) | The Calculator notes still said the brief form used `services/contactService.js` (`VITE_CONTACT_ENDPOINT`, i.e. fetch). That file no longer exists; the form posts to Salesforce. The return URL and page list were also out of date. All corrected in this pass. |
| No `docs/` folder existed | This report is its first file. |
| The Salesforce-generated Web-to-Lead snippets supplied for Elixir (23 Oct and 6 Nov 2026) | Both have the same org, keyname, site key and field names. |
| The Mirketa investigation write-up (supplied for reference) | Used as a checklist of possible causes. None of them apply to Elixir (section 6). |
| Earlier Elixir reports, outside the repository (`Desktop/Elixir-Website-Audit/`) | `Web-to-Lead_Debug_Report.md` and the `w2l-live-diagnostic.js` console script |

## 3. How the integration works

```
Visitor fills in the form → browser checks required fields and email format
  → reCAPTCHA v2 checkbox (Google, explicit render, script loaded once per page view)
  → submit handler: blocks if there is no reCAPTCHA token, prevents double submits;
    the calculator form also fills first_name, last_name and description
  → browser posts the form natively (POST, application/x-www-form-urlencoded) to
    https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dd0000000hivg
  → Salesforce queues the request, then checks the reCAPTCHA token with the secret key of key pair "ElixirEHR"
  → Salesforce creates the Lead (subject to validation, duplicate and assignment rules)
  → Salesforce redirects the visitor to retURL https://www.elixirehr.com/thank-you/
```

### Main files

| File | Role |
|---|---|
| `src/data/webToLead.js` | Configuration: org, endpoint, lead source, return URL, keyname, site key, field names |
| `src/components/forms/WebToLead/WebToLead.jsx` | Hidden fields, the `captcha_settings` timestamp, reCAPTCHA loading and rendering |
| `src/components/forms/WebToLead/webToLeadHelpers.js` | The reCAPTCHA token check |
| `src/components/sections/ContactSection/ContactForm.jsx` | The shared lead form |
| `src/pages/NoShowRoiCalculator/sections/BriefSection/BriefSection.jsx` | The calculator's lead form |
| `src/pages/ThankYou/ThankYou.jsx` | The noindex thank-you page |
| `src/config/preview.js` | Turns the forms off on private previews |

### Configuration

All values are as Salesforce generated them for Elixir, except `retURL` (the snippet has the domain without www; see the note below).

| Item | Value |
|---|---|
| Org ID (`oid`) | `00Dd0000000hivg` |
| Endpoint | `https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dd0000000hivg` |
| reCAPTCHA | v2 "I'm not a robot" checkbox, site key `6Lf5QdAZAAAAAMpIeeAGEDVzMQ0JSHFpdUYIZQs_` (public by design) |
| Secret key | Stored only in Salesforce (Setup → Web-to-Lead → reCAPTCHA key pair **ElixirEHR**) and in the Google reCAPTCHA admin. **It is not in the website code.** |
| `captcha_settings` | `{"keyname":"ElixirEHR","fallback":"true","orgId":"00Dd0000000hivg","ts":"<epoch ms>"}`. As in Salesforce's own snippet, `ts` is refreshed every 500 ms until the token exists. |
| `lead_source` | `Web` |
| `retURL` | `https://www.elixirehr.com/thank-you/`, built from `VITE_SITE_URL`. The address without www returns 404. |
| Visible fields | `first_name` (40), `last_name` (80), `email` (80), `mobile` (40), `company` (40), `description` |
| Custom fields (`00N…`) | None |

The org ID `00Dd0000000hivg` is the org that generated the snippet. Its debug contact is `rahul.pasricha@mirketa.com`, so this is the Mirketa org. Elixir leads are therefore sent to that org, through its own "ElixirEHR" reCAPTCHA key pair. Nothing from Mirketa's own form (keyname `Mirketa_New`, its site key, its return URL) is used.

## 4. Forms

| Page | Form | Fields (`*` = required on the page) |
|---|---|---|
| `/contact-us/` | ContactForm | first_name\*, last_name\*, email\*, mobile, company, description |
| `/about-us/` | ContactForm | same |
| `/why-elixir/` | ContactForm | same |
| `/referral-program/` | ContactForm | same |
| `/salesforce-evv/` | ContactForm | first_name\*, last_name\*, email\*, mobile, description (no company) |
| `/onc-certification/onc-mfa-use-cases/` | ContactForm | first_name\*, last_name, mobile\*, company\*, email\*, description\* |
| `/no-show-cost-calculator/` | BriefSection | Full Name\* (split into first_name and last_name), Organization → company, Work Email\* → email, Role, inputs and results → description |

- The home page has no lead form. "Request a Demo" (`/request-demo/`) redirects to `/contact-us/#contact`.
- Other `<form>` elements on the site are not lead forms: the Insights search, the newsletter (`fetch` to `VITE_NEWSLETTER_ENDPOINT`), the calculator inputs, and the press-release filters.

## 5. Evidence

### 5a. Live site, 10 Nov 2026

Read-only checks in headless Chrome on all 7 form pages. Nothing was typed, ticked or submitted, and Salesforce requests were blocked.

| Check | Result on all 7 pages |
|---|---|
| Form posts to the Salesforce endpoint with org `00Dd0000000hivg`, method POST | PASS |
| Hidden fields: `oid`, `retURL` (www thank-you), `lead_source` Web, `captcha_settings` (keyname ElixirEHR, orgId) | PASS |
| `captcha_settings.ts` refreshes (13-digit epoch ms) | PASS |
| One `g-recaptcha-response` field, inside the form | PASS |
| reCAPTCHA widget loads with the Elixir site key; no "invalid domain" or "invalid key type" error on www.elixirehr.com | PASS (the key is a v2 checkbox key valid for this domain) |
| `recaptcha/api.js` loaded once | PASS |
| JavaScript errors or console errors | none |

### 5b. Salesforce's response

On 6 Nov a diagnostic POST was sent straight to the endpoint with `debug=1` and no reCAPTCHA token.

| Request | Salesforce reply |
|---|---|
| org `00Dd0000000hivg` | "**Your request has been queued**", followed by every field exactly as the site sends it |
| non-existent org `00D000000000001` | "Your Lead could not be processed" |

So the Elixir org exists, Web-to-Lead is on for it, and Salesforce reads the site's payload correctly. The reCAPTCHA check and Lead creation happen after queueing, so they cannot be seen from outside Salesforce.

That diagnostic request used:

- last name **"W2L-TEST no-captcha (Claude) - please delete"**
- email `w2l-diagnostic@example.com`
- company "Elixir W2L Diagnostic"

Whether that Lead exists has not been reported back yet (see section 9).

### 5c. Current code (`6cc4cd6`), every form tested end to end

The test used a production-style local build (`VITE_SITE_URL=https://www.elixirehr.com`). The Salesforce POST was intercepted and aborted. Google's public test key was swapped in inside the browser, and the ticked state was simulated by filling `g-recaptcha-response`, because reCAPTCHA ignores scripted clicks by design.

| Check | Result on all 7 forms (13 checks × 7 = 91, all PASS) |
|---|---|
| Endpoint, POST and `application/x-www-form-urlencoded` | PASS |
| Hidden fields and `captcha_settings` | PASS |
| Real site key, `api.js` once, one response field | PASS |
| Empty required fields blocked | PASS |
| Invalid email rejected | PASS |
| No reCAPTCHA → blocked with "Please confirm you are not a robot" | PASS |
| Expired reCAPTCHA → "The verification timed out…" | PASS (fix in `c27df61`, not yet live) |
| Valid submit → exactly 1 POST, even on a double click | PASS |
| Payload has every Salesforce field plus the token | PASS |
| `ts` fixed once answered (epoch ms) | PASS |
| Button disabled while sending | PASS |

Also checked:

- **Moving between pages within the site** (Why Elixir → Contact Us, without a full page load): the widget renders again and `api.js` is still loaded once. PASS.
- **Thank-you page:** opens by direct URL, is noindex, and "Back to Home" works. PASS (6 Nov sync tests).

## 6. Mirketa issues compared with Elixir

| Mirketa issue | Applies to Elixir? | Evidence |
|---|---|---|
| 1. Empty `g-recaptcha-response` | **No** | Submission is blocked until the token field is filled. There is exactly one token field, inside the form, written by Google's widget. |
| 2. Empty `captcha_settings.ts` | **No** | `ts` is a 13-digit epoch-ms value, refreshed every 500 ms exactly like Salesforce's generated snippet. The Mirketa document's suggestion (seconds, lowercase `orgid`, keyname `Mirketa_New`) does **not** match what Salesforce generated for Elixir and must not be copied. |
| 3. reCAPTCHA not initialised in a React single-page app | **No** | Explicit render, the script is loaded once, and the widget renders again after moving between pages within the site. |
| 4. fetch or axios submission | **No** | The browser posts the form natively. The only `fetch` in `src/` is the newsletter. |

## 7. Root cause

**Not found on the website, which works correctly.** The submission reaches Salesforce and is accepted into its queue. The Lead is lost **inside Salesforce**, or is created but not seen. The candidates are below, most likely first. Each can only be confirmed with Salesforce access or the test in section 9.

| Priority | Issue | Root cause (candidate) | Resolution | Status |
|---|---|---|---|---|
| P1 | Leads looked for in the wrong place | Leads go to org `00Dd0000000hivg` (the Mirketa org). They may also sit in a queue, belong to another owner, or be hidden by a list view. | Search all Leads in that org (section 8, item 1) | Pending (admin) |
| P1 | reCAPTCHA verification fails silently | The **ElixirEHR** key pair in Salesforce does not hold the secret key that belongs to site key `6Lf5Qd…` (wrong, rotated or mistyped) | Re-enter the secret from the Google reCAPTCHA admin (section 8, item 3) | Pending (admin) |
| P2 | Lead rejected by automation | A Lead validation rule, a blocking duplicate rule, a failing flow, or a required custom field | Check the Default Lead Creator's inbox and the rules (section 8, item 5) | Pending (admin) |
| P2 | Web-to-Lead settings | Default Lead Creator inactive, or the daily limit of 500 reached | Section 8, items 2 and 7 | Pending (admin) |
| P3 | A repeat submission after pressing Back is dropped | The live build restores the used reCAPTCHA token from the browser's back/forward cache | Fixed in the repository (`c27df61`: the widget resets on return and the expired token shows a message). **Deploy needed.** | Fixed in repo, not live |
| P3 | Blank Last Name or Company | ONC MFA has an optional Last Name; several forms have an optional or absent Company. Salesforce Lead requires both. Web-to-Lead normally stores "[not provided]", but an org validation rule can reject the Lead instead. | If the admin finds such a rule, make Last Name required on ONC MFA (design approval) or relax the rule | To verify |

## 8. Checklist for the Salesforce admin (org `00Dd0000000hivg`)

1. **Leads → All Leads** (not "My Leads"), or a report over all Leads: filter Lead Source = Web and Created Date = last 30 days. Also search for `w2l-diagnostic@example.com` and check every Lead queue.
2. **Setup → Web-to-Lead.**
   - Web-to-Lead is **enabled**.
   - **Require reCAPTCHA Verification** is enabled.
   - The **Default Lead Creator** is an active user.
3. **Setup → Web-to-Lead → reCAPTCHA API key pair "ElixirEHR".**
   - Its Site Key is `6Lf5QdAZAAAAAMpIeeAGEDVzMQ0JSHFpdUYIZQs_`.
   - Its **Secret Key equals** the secret shown in the Google reCAPTCHA admin for that site key.
4. **Google reCAPTCHA admin** (owner of that key).
   - The key type is v2 Checkbox.
   - The domains include `elixirehr.com` and `www.elixirehr.com`.
   - The request statistics show verification calls.
5. **Lead automation.** Check:
   - active validation rules
   - duplicate rules set to "Block"
   - record-triggered flows or processes
   - required custom fields

   Then check the Default Lead Creator's email for Web-to-Lead failure notices.
6. **Lead assignment rules.** The active rule may route website Leads to a queue or another owner.
7. **Daily Web-to-Lead limit.** 500 per day.

## 9. Decisive test (about 5 minutes, needs a human to tick reCAPTCHA)

1. Open https://www.elixirehr.com/contact-us/ in Chrome (incognito). In DevTools, tick **Preserve log** in both the Network and Console tabs.
2. Paste `Desktop/Elixir-Website-Audit/w2l-live-diagnostic.js` into the Console.
   - Set `DEBUG_EMAIL` to your own address first. The script then adds Salesforce's `debug` and `debugEmail` fields, so Salesforce shows its debug page and emails its result.
   - The script never prints the token or what you type.
3. Fill in the form with a unique email address, for example `w2l-test-<date>@<your-domain>`, and the last name "W2L Test". Tick reCAPTCHA by hand, then submit.
4. In Network → `servlet.WebToLead` → Payload, confirm:
   - `g-recaptcha-response` is a long token
   - `captcha_settings.ts` is 13 digits
   - `oid` is `00Dd0000000hivg`
5. Within 1–2 minutes, check Salesforce for that email address. Read the debug page or email for the reason if no Lead appears.

## 10. Changes in this pass

| File | Change | Why |
|---|---|---|
| `docs/ELIXIR_SALESFORCE_WEB_TO_LEAD_DIAGNOSTIC_REPORT.md` | New | This report |
| `README.md` | Form page list and return URL corrected; pointer to this report added | The documentation did not match the code |
| `DESIGN-SYSTEM.md` | The Calculator brief described as a Web-to-Lead form (the reference to `contactService.js` and `VITE_CONTACT_ENDPOINT` removed); return URL, page list and report pointer updated | Same |

**No application code was changed.** All 91 form checks pass, and no defect in the website code explains the missing Leads.

### Before and after

| | Before (live `618cec9`) | Repository `6cc4cd6` (after deployment) |
|---|---|---|
| Payload and fields | Correct | Correct (unchanged) |
| reCAPTCHA token expires before submit | Generic "not a robot" message | Clear "verification timed out" message |
| Back button after submitting, then resubmit | Old token reused; Salesforce drops the Lead silently | Widget reset; a new tick is needed |
| GTM and GA4 | Not installed | Installed (`6cc4cd6`) |

## 11. Remaining blockers and recommendations

1. **Blocker:** the admin checks (section 8) or the decisive test (section 9). Lead creation cannot be verified without them.
2. **Deploy** commit `6cc4cd6` or later, so the repeat-submission fix goes live, through the authorised deployment process.
3. **Build setting:** every production build must set `VITE_SITE_URL=https://www.elixirehr.com`. Without it, `retURL` and the canonical tags fall back to the domain without www, which returns 404.
4. **ONC MFA Last Name:** consider making it required, to match Salesforce's own Lead requirement. This is a page-design decision.
5. Once a Lead is confirmed, delete the diagnostic Lead "W2L-TEST no-captcha (Claude) - please delete" and any test Leads.
