# Contact Us → Salesforce Web-to-Lead: fix findings

**Date:** 10 Nov 2026

**Branch:** `fix/contact-us-web-to-lead` (from `main` at `b6f8815`)

**Related report:** [`ELIXIR_SALESFORCE_WEB_TO_LEAD_DIAGNOSTIC_REPORT.md`](ELIXIR_SALESFORCE_WEB_TO_LEAD_DIAGNOSTIC_REPORT.md). The brief refers to `docs/ELIXIR_CONTACT_US_FORM_AUDIT_REPORT.md`, but no file of that name exists; the diagnostic report is the prior audit. It is left unchanged.

**Status:** ROOT CAUSE STILL NOT CONFIRMED. MORE EVIDENCE REQUIRED.

Step 2, the coordinated live test, needs a person to tick reCAPTCHA and a Salesforce admin. Neither was available, so no branch (A–E) could be confirmed. No code was changed.

---

## Step 1: code audit (read-only)

### Stack

| Item | Version or detail |
|---|---|
| UI | React 19 |
| Build | Vite (Rolldown) |
| Routing | react-router 7 |
| Styles | CSS Modules |
| Pages | Build-time prerendering (`scripts/prerender.mjs`). Each route ships as static HTML, then React hydrates it ([main.jsx:16-23](../src/main.jsx#L16-L23)). |

### Where things are

| Item | Location |
|---|---|
| Contact Us page | [ContactUs.jsx:12](../src/pages/ContactUs/ContactUs.jsx#L12) → [DemoRequestSection.jsx:4,14](../src/pages/ContactUs/sections/DemoRequestSection/DemoRequestSection.jsx#L14) |
| Form component (shared) | [ContactForm.jsx:38-116](../src/components/sections/ContactSection/ContactForm.jsx#L38-L116) |
| Validation | Browser-native `required` and `type="email"` attributes ([ContactForm.jsx:79-89](../src/components/sections/ContactSection/ContactForm.jsx#L79-L89)). Field `required` flags are set in [contact.js:67-72](../src/data/contact.js#L67-L72). |
| Submit handler | [ContactForm.jsx:51-62](../src/components/sections/ContactSection/ContactForm.jsx#L51-L62). Blocks when there is no token or a send is in progress; otherwise lets the native POST proceed. |
| Web-to-Lead config: endpoint, org ID, lead source, field names | [webToLead.js:7-30](../src/data/webToLead.js#L7-L30) |
| Hidden fields `captcha_settings`, `oid`, `retURL`, `lead_source` | [WebToLead.jsx:19-40](../src/components/forms/WebToLead/WebToLead.jsx#L19-L40) |
| reCAPTCHA script | Injected once ([WebToLead.jsx:44-61](../src/components/forms/WebToLead/WebToLead.jsx#L44-L61)): `api.js?onload=onElixirRecaptchaLoad&render=explicit` |
| Site key | A constant, not an env var ([webToLead.js:19](../src/data/webToLead.js#L19)) |
| reCAPTCHA render | Explicit render ([WebToLead.jsx:74-89](../src/components/forms/WebToLead/WebToLead.jsx#L74-L89)) |
| reCAPTCHA callbacks | `expired-callback` at [WebToLead.jsx:82](../src/components/forms/WebToLead/WebToLead.jsx#L82) |
| Reset after Back navigation | [WebToLead.jsx:93-99](../src/components/forms/WebToLead/WebToLead.jsx#L93-L99) |
| Token check | [webToLeadHelpers.js:4-6](../src/components/forms/WebToLead/webToLeadHelpers.js#L4-L6) |
| Environment variables | `VITE_SITE_URL`, used for `retURL` ([siteUrl.js:5](../src/utils/siteUrl.js#L5), [preview.js:5-7](../src/config/preview.js#L5-L7)). `MODE`, used to disable forms on previews ([preview.js:9-12](../src/config/preview.js#L9-L12)). No env var holds the org ID or the site key. |
| Thank-you page | [ThankYou.jsx](../src/pages/ThankYou/ThankYou.jsx) (`noindex` at line 10), route at [App.jsx:89](../src/App.jsx#L89). Salesforce performs the redirect itself, via `retURL`; there is no client-side success state. |

### Other forms that share this component (rule 5)

`ContactForm` is shared by six pages:

- Contact Us ([DemoRequestSection.jsx](../src/pages/ContactUs/sections/DemoRequestSection/DemoRequestSection.jsx))
- About Us ([AboutUs.jsx](../src/pages/AboutUs/AboutUs.jsx))
- Why Elixir ([WhyElixir.jsx](../src/pages/WhyElixir/WhyElixir.jsx))
- Referral Program ([ReferralProgram.jsx](../src/pages/ReferralProgram/ReferralProgram.jsx))
- EVV for Field Service ([TalkSection.jsx](../src/pages/EvvFieldService/sections/TalkSection/TalkSection.jsx))
- ONC MFA Use Cases ([OncMfaUseCases.jsx](../src/pages/OncMfaUseCases/OncMfaUseCases.jsx))

The No-Show Calculator brief ([BriefSection.jsx](../src/pages/NoShowRoiCalculator/sections/BriefSection/BriefSection.jsx)) has its own form, but it uses the same `WebToLeadFields` and `Recaptcha` components.

**Any change to `ContactForm.jsx` or `WebToLead.jsx` affects all 7 forms.** Such a change needs approval before it is made.

### Command output (summarised)

```
grep webtolead|servlet.WebToLead|00Dd0000000hivg|oid   (excluding binary image matches)
  data/webToLead.js:8-9          action + orgId (the only definition)
  WebToLead.jsx:35-37            hidden oid / retURL / lead_source
  ContactForm.jsx:65             <form action={webToLead.action} method="POST">
  BriefSection.jsx:75            <form action={webToLead.action} method="POST">

grep recaptcha|captcha_settings|sitekey|render=
  WebToLead.jsx:25,34            captcha_settings + 500 ms ts refresh
  WebToLead.jsx:51               api.js?onload=onElixirRecaptchaLoad&render=explicit
  WebToLead.jsx:80-83            grecaptcha.render(element, { sitekey, 'expired-callback' })
  WebToLead.jsx:95               grecaptcha.reset — only on a back/forward-cache page restore
  webToLead.js:19                siteKey 6Lf5QdAZAAAAAMpIeeAGEDVzMQ0JSHFpdUYIZQs_ (public)
  ContactForm.jsx:56,94 / BriefSection.jsx:48,101   token gate + widget inside the form

grep retURL|thank|no-cors|fetch(|axios
  no "no-cors", no axios
  the only fetch( is services/newsletterService.js:12 (newsletter, not a lead form)

git log -- form files
  c27df61  (expired-token message, back/forward-cache reset)
  618cec9  (thank-you page; retURL)
  92d3e38  0e0f986  8062566  e29a819  0069038  bc7cad0
```

### Production build check (Q9)

The production build ran with `VITE_SITE_URL=https://www.elixirehr.com npm run build` (112/112 pages prerendered).

| Check | Result |
|---|---|
| `orgId` in the JS bundle | `00Dd0000000hivg` (the literal string, not an env var) |
| Form `action` in `dist/contact-us/index.html` | `servlet.WebToLead?encoding=UTF-8&orgId=00Dd0000000hivg` |
| `retURL` | `https://www.elixirehr.com/thank-you/` |
| reCAPTCHA keys in `dist/` | The site key `6Lf5Qd…` appears exactly once. Every other `6L…` 40-character match is inside inline base64 image data, not a key. **No secret key is in the build.** |
| `debugEmail` / `debug` fields | 0 occurrences |

### Answers

| # | Question | Answer | Status | Evidence |
|---|---|---|---|---|
| Q1 | Native POST or JS? | **Native HTML POST** to the Salesforce endpoint. The handler only calls `preventDefault()` when blocking. | CONFIRMED | [ContactForm.jsx:51-65](../src/components/sections/ContactSection/ContactForm.jsx#L51-L65); live bundle contains 1 `fetch(` (newsletter only) |
| Q2 | Token included when sent by JS? | Not applicable (native POST). The browser builds the body from the form at submit time, so the token is read then, never from React state. | CONFIRMED | 91/91 automated payload checks (diagnostic report, section 5b) |
| Q3 | Widget inside `<form>`? | Yes | CONFIRMED | `<Recaptcha>` at [ContactForm.jsx:94](../src/components/sections/ContactSection/ContactForm.jsx#L94), inside the `<form>` of lines 65–114. The live probe found 1 `g-recaptcha-response`, inside the form, on all 7 pages. |
| Q4 | reCAPTCHA version | **v2 "I'm not a robot" checkbox**: explicit render, no `size: 'invisible'`, no `render=<key>`, no Enterprise script | CONFIRMED | [WebToLead.jsx:51,80-83](../src/components/forms/WebToLead/WebToLead.jsx#L80-L83). The widget renders as a checkbox on the live site with no key-type error. |
| Q5 | `captcha_settings` and timestamp refresh | Present. `ts` refreshes every 500 ms until a token exists, as in Salesforce's generated snippet. | CONFIRMED | [WebToLead.jsx:12-30,34](../src/components/forms/WebToLead/WebToLead.jsx#L12-L34) |
| Q6 | `no-cors`, or every response treated as success? | No `no-cors`. No client-side success state; success is only Salesforce's redirect. | CONFIRMED | grep result above; [ContactForm.jsx:12-13](../src/components/sections/ContactSection/ContactForm.jsx#L12-L13) |
| Q7 | Field names | `first_name`, `last_name`, `email`, `mobile`, `company`, `description`, exactly as in the Web-to-Lead HTML Salesforce generated for Elixir. Phone is posted as `mobile` (the Lead's Mobile field) because that is what the snippet uses. No custom `00N…` fields. | CONFIRMED | [webToLead.js:22-29](../src/data/webToLead.js#L22-L29) |
| Q8 | `last_name` and `company` always sent? | **Partly.** On the 4 standard forms, `last_name` is required and `company` is optional. ONC MFA has an optional `last_name`. EVV has no `company` field. On the calculator, `last_name` is derived from Full Name and `company` is optional. Salesforce Web-to-Lead normally fills a missing value with "[not provided]". Whether an org validation rule rejects that value is unverified. | CONFIRMED (form behaviour); Salesforce effect NOT CONFIRMED | Diagnostic report, section 4 |
| Q9 | `oid` correct in the production build | Yes, a literal string (see the build check above) | CONFIRMED | `dist/` grep |
| Q10 | `debug=1` or `debugEmail` in production code | None | CONFIRMED | `src/` and `dist/` grep: 0 occurrences |
| Q11 | Double submit, re-mounted widget, `reset()` before payload | No duplicate listeners. A double click results in exactly one POST. Under StrictMode the widget renders once (dev server, 10 Nov: 1 widget, 1 `api.js`, also after in-site navigation). `reset()` runs only on a back/forward-cache restore, never during submit. | CONFIRMED | [ContactForm.jsx:52,98](../src/components/sections/ContactSection/ContactForm.jsx#L52); [WebToLead.jsx:79,95](../src/components/forms/WebToLead/WebToLead.jsx#L79) |

### Additional confirmed finding

**F-1. Before React hydrates, or if the site JavaScript fails, the prerendered form posts without a reCAPTCHA token.**

| | |
|---|---|
| Status | CONFIRMED as a defect. **Not confirmed as the cause of the missing Leads.** |
| Code | Prerendering emits the form with its real `action` ([ContactForm.jsx:65](../src/components/sections/ContactSection/ContactForm.jsx#L65), rendered by `scripts/prerender.mjs`). The token gate and the widget exist only after hydration ([main.jsx:16-17](../src/main.jsx#L16-L17); [WebToLead.jsx:74-89](../src/components/forms/WebToLead/WebToLead.jsx#L74-L89)). |

**Evidence, live site, 10 Nov.** The site's JS bundles were answered with 404, and the Salesforce POST was captured and aborted, so nothing was sent:

```
form: hydrated=false, widget=false, tokenField=false, submit enabled
POST captured: 1
payload: captcha_settings, oid, retURL, lead_source, first_name, last_name, email, mobile, company, description
ts=""; g-recaptcha-response MISSING
```

**Timing on the live site:**

| Network | Form visible | React hydrated | Widget shown |
|---|---|---|---|
| Unthrottled desktop | 0.7 s | 2.5 s | 3.6 s |
| ~1.6 Mbps with 4× CPU slowdown | 0.9 s | 12 s | 16 s |

**Why hydration takes this long:** the app ships as a single JS chunk of about 2 MB (about 1 MB compressed).

**Impact:**

- The visitor reaches `/thank-you/`, but Salesforce has no token, so the Lead is very likely discarded silently.
- This happens only to visitors who submit before hydration, or whose browser cannot run the bundle (blocked scripts, very old browsers).
- It **cannot by itself explain all Leads missing**.

**Fix:** none applied. It touches the shared component used by all 7 forms (rule 5) and the confirmed branch is unknown (rule 7). The proposed fix awaits approval.

### What Step 1 rules out

Branch A, "token not submitted", is **ruled out for the normal hydrated path**:

- The token is present in the POST: the 91/91 automated payload checks, and live field placement on all 7 pages.
- It survives a double click.

Branch A remains real only for the F-1 window.

The Branch B website-side items are also ruled out:

- version: v2 checkbox
- `oid`: correct in the build
- `captcha_settings`: present, matching Salesforce's snippet

The key pair's secret key and the Google domain list sit outside the code and remain open.

---

## Step 2: coordinated live verification (NOT RUN)

**Why it was not run:** this environment has a headless browser, but reCAPTCHA cannot be ticked by automation (Google ignores scripted clicks by design), and there is no access to Salesforce. The test needs:

- a person to tick reCAPTCHA
- the Salesforce admin
- an approved test email

### Instructions for the tester

1. **Admin, before the test:** add a debug-log trace flag on the Web-to-Lead **Default Lead Creator** (Setup → Debug Logs → New; Apex Code = Debug, Workflow = Info, Validation = Info; 1 hour).
2. **Tester:** open https://www.elixirehr.com/contact-us/#contact in a new Chrome **Incognito** window. Open DevTools → **Network**, tick **Preserve log**. Also open **Console** with Preserve log ticked.
3. Fill in the form:
   - **Email:** the approved test address
   - **First name:** `W2L`
   - **Last name:** `Test – please delete`
   - **Company:** `Elixir W2L Test`

   Tick **"I'm not a robot" by hand**, then submit **within 60 seconds**. Note the time.
4. **Capture** (do not paste token or secret values anywhere):

   | Item | Where | Record |
   |---|---|---|
   | Request URL and status | Network → `servlet.WebToLead` → Headers | URL and status |
   | `X-SFDC-Request-Id` | Response headers | The value |
   | Field names sent | Payload → view parsed | Names only; values redacted except the test email |
   | `g-recaptcha-response` | Payload | Present? **Length** only |
   | `oid` | Payload | The value (should be `00Dd0000000hivg`) |
   | `captcha_settings` | Payload | Present? Is `ts` 13 digits? |
   | Console errors | Console | Any errors |

5. **Admin, within 15 minutes:**
   - Search the test email in **All Leads**, the **Recycle Bin**, and converted records (Contacts).
   - Check the Default Lead Creator's inbox for a Web-to-Lead failure email.
   - Read the debug log at the submit time: `VALIDATION_FAIL`, duplicate block, `FLOW_ELEMENT_ERROR`, `FATAL_ERROR`, owner.
   - Confirm:
     - Web-to-Lead enabled
     - **Require reCAPTCHA Verification** on or off
     - key pair **ElixirEHR** site key = `6Lf5QdAZAAAAAMpIeeAGEDVzMQ0JSHFpdUYIZQs_`
     - Google console domains include `elixirehr.com` / `www.elixirehr.com`
     - Google key type is v2 Checkbox

### Classification (fill in after the test)

| Token in request | Lead created | Failure email | Branch | Expected from Step 1 |
|---|---|---|---|---|
| Empty or missing | No | No | A: token not submitted (website) | **Not expected.** If seen, stop and report: it conflicts with Step 1. |
| Present | No | No | B: key, version, domain, `oid` or `captcha_settings` mismatch | Possible. Most likely the **secret key** in key pair ElixirEHR, or the Google domain list. |
| Present | No | Yes | C: Salesforce rule, Flow or required field | Possible |
| Present | Yes, unexpected owner | — | D: assignment or visibility | Possible |
| Present | Yes | — | E: form works; harden only | Possible. Then F-1 is the only website defect. |

**Result:** _pending_

## Confirmed branch

**None yet.** Step 3 fixes are on hold until Step 2 identifies the branch.

| Outcome | What follows |
|---|---|
| B, C or D | The work is in Salesforce or Google (see [SALESFORCE_ADMIN_ACTIONS.md](SALESFORCE_ADMIN_ACTIONS.md)). No code change. |
| E | Only the approved hardening applies, chiefly the F-1 fix. |

### Proposed F-1 fix (for approval, not applied)

Render the form's `action` only after the component has mounted on the client. The prerendered HTML then has no Salesforce destination, so a submit before hydration cannot post a token-less Lead.

- The change is a few lines in `ContactForm.jsx` and `BriefSection.jsx`: a `mounted` flag set in `useEffect`.
- It affects all 7 forms and leaves their design and copy unchanged.
- Route-level code splitting would shorten the window further. That is a larger change and is out of scope here.
