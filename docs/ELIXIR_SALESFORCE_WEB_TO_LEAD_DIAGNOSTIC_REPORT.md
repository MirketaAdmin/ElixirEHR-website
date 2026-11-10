# Elixir Salesforce Web-to-Lead: diagnostic report

**Last updated:** 10 Nov 2026 (second pass: Salesforce admin-side verification plan)

**Repository:** `main` at `8e984d7`. The Web-to-Lead code is unchanged since `6cc4cd6`. Commits after it change only documentation and the No-Show page hero image.

**Live site:** www.elixirehr.com, running the build of commit `618cec9`

**Status:** **PENDING. Salesforce verification is blocked.**

- The website side is verified.
- Whether Salesforce creates the Lead, and why not, is **not yet established**.
- The evidence for that can only come from inside Salesforce org `00Dd0000000hivg`: the admin checks in section 9 and the controlled test in section 11.

**Readers:** the Salesforce admin of org `00Dd0000000hivg`, the Elixir product team, and whoever deploys the site.

---

## 1. Problem

The site's lead forms appear to work:

- the visitor fills in the form and ticks reCAPTCHA
- the form submits
- `/thank-you/` opens

But no Lead record appears in Salesforce.

## 2. Documentation reviewed

| Document | Notes |
|---|---|
| `README.md` (Data persistence) | Describes the Web-to-Lead flow correctly. The list of form pages and the return URL were out of date; corrected on 10 Nov. |
| `DESIGN-SYSTEM.md` ("Salesforce Web-to-Lead forms (2026-10-23)" and the No-Show Calculator build notes) | The Calculator notes still said the brief form used `services/contactService.js` (`VITE_CONTACT_ENDPOINT`, i.e. fetch). That file no longer exists; the form posts to Salesforce. The return URL and page list were also out of date. All corrected on 10 Nov. |
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
  ── everything above is the website; everything below happens inside Salesforce ──
  → Salesforce queues the request
  → Salesforce checks the reCAPTCHA token with the secret key of key pair "ElixirEHR"
  → Salesforce creates the Lead as the Default Lead Creator, subject to validation rules,
    duplicate rules, required fields, flows and triggers
  → assignment rule sets the owner (a user or a queue)
  → Salesforce redirects the visitor to retURL https://www.elixirehr.com/thank-you/
```

The redirect to `/thank-you/` happens even when a later step inside Salesforce fails. **The thank-you page proves only that the POST reached Salesforce.** It does not prove that a Lead was created.

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

All values are as Salesforce generated them for Elixir, except `retURL` (the snippet has the domain without www; see the `retURL` row).

| Item | Value |
|---|---|
| Org ID (`oid`) | `00Dd0000000hivg` |
| Endpoint | `https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dd0000000hivg` |
| reCAPTCHA | v2 "I'm not a robot" checkbox, site key `6Lf5QdAZAAAAAMpIeeAGEDVzMQ0JSHFpdUYIZQs_` (public by design) |
| Secret key | Stored only in Salesforce (the reCAPTCHA API key pair **ElixirEHR**) and in the Google reCAPTCHA admin. **It is not in the website code.** |
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

## 5. Confirmed frontend findings

Everything in this section was observed directly. None of it depends on Salesforce access.

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

### 5b. Current code (`6cc4cd6`, unchanged in `8e984d7`), every form tested end to end

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

### 5c. What the frontend evidence does not cover

- The tests simulate a ticked reCAPTCHA. They do not prove that **Google accepts a real token** when Salesforce verifies it with the ElixirEHR secret. Only a human-ticked submission (section 11) tests that.
- No real Lead was submitted with a valid token from the browser, by design. The rules forbid fake leads in production without an agreed test.

## 6. Mirketa issues compared with Elixir

| Mirketa issue | Applies to Elixir? | Evidence |
|---|---|---|
| 1. Empty `g-recaptcha-response` | **No** | Submission is blocked until the token field is filled. There is exactly one token field, inside the form, written by Google's widget. |
| 2. Empty `captcha_settings.ts` | **No** | `ts` is a 13-digit epoch-ms value, refreshed every 500 ms exactly like Salesforce's generated snippet. The Mirketa document's suggestion (seconds, lowercase `orgid`, keyname `Mirketa_New`) does **not** match what Salesforce generated for Elixir and must not be copied. |
| 3. reCAPTCHA not initialised in a React single-page app | **No** | Explicit render, the script is loaded once, and the widget renders again after moving between pages within the site. |
| 4. fetch or axios submission | **No** | The browser posts the form natively. The only `fetch` in `src/` is the newsletter. |

## 7. The 6 Nov diagnostic submission

### 7a. Recorded evidence

A single diagnostic POST was sent straight to the endpoint (not through the website), with Salesforce's `debug=1` field and **an empty `g-recaptcha-response`**. Salesforce's reply, as recorded:

| Item | Value |
|---|---|
| Sent | Fri 6 Nov 2026, 08:15:23 GMT (13:45:23 IST) |
| HTTP status | 200 OK, served by `sfdcedge` |
| `X-SFDC-Request-Id` | `116b52e51713b93817d78942aabad0c1`. Give this to Salesforce Support if they are asked to trace the request. |
| Body | "**Your request has been queued.** Record Information:" followed by the fields below |
| `captcha_settings` | `{"keyname":"ElixirEHR","fallback":"true","orgId":"00Dd0000000hivg","ts":"1793952920651"}` |
| `oid` and `orgId` | `00Dd0000000hivg` |
| `first_name` | Diagnostic |
| `last_name` | **W2L-TEST no-captcha (Claude) - please delete** |
| `email` | **`w2l-diagnostic@example.com`** |
| `company` | Elixir W2L Diagnostic |
| `lead_source` | Web |
| `description` | "Automated diagnostic request without reCAPTCHA token. Should be rejected if reCAPTCHA is required. Safe to delete." |
| `g-recaptcha-response` | *(empty)* |
| `retURL` | `https://www.elixirehr.com/thank-you/` |

The control request was sent to the non-existent org `00D000000000001`. Salesforce replied "Your Lead could not be processed".

Nobody has yet reported whether a Lead with `w2l-diagnostic@example.com` exists in the org.

### 7b. What "queued" establishes

- Org `00Dd0000000hivg` exists, and its Web-to-Lead endpoint accepts requests. An invalid org gets a different answer.
- Salesforce parsed the payload with the same field names and values the website sends. No field was dropped or renamed on the way in.
- `captcha_settings` was received intact with keyname `ElixirEHR`.

### 7c. What "queued" does **not** establish

- **That a Lead was created.** "Queued" is Salesforce's acknowledgement that it received the request for processing. reCAPTCHA verification and Lead creation happen afterwards, asynchronously. HTTP 200 and "queued" are **not** confirmation of a Lead.
- That the ElixirEHR key pair holds the correct secret key. This request had no token, so verification could not succeed in any case.
- That Web-to-Lead is configured to require reCAPTCHA.
- Who owns the Lead, if it exists, or whether a user can see it.

### 7d. How to read the result once the admin searches

The admin should search **all Leads**, the **Recycle Bin**, and converted records (Contacts) for `w2l-diagnostic@example.com`, and also check "Require reCAPTCHA Verification" (section 9, step 2).

| "Require reCAPTCHA Verification" | Diagnostic Lead found? | What it shows | Next step |
|---|---|---|---|
| On | No | Expected: Salesforce correctly rejected a request without a token. It says nothing about real submissions. | Run the controlled test (section 11). It is the decisive evidence. |
| On | **Yes** | Unexpected: the token was not enforced. Lead creation, automation and visibility work for this payload, so the missing real leads point to **reCAPTCHA verification with a real token** or to where users are looking. | Compare with the Leads users search (owner, queue, list view); run section 11 to test a real token. |
| Off | **Yes** | Lead creation works without reCAPTCHA. Real leads should then also be created, so the problem is most likely **visibility** (owner, queue, list view, sharing) or automation that treats real submissions differently. | Find where this Lead sits (owner, queue) and look for real website Leads in the same place. |
| Off | No | With reCAPTCHA not required, Salesforce still did not create the Lead, so the cause is **in Lead creation**: a validation rule, duplicate rule, required field, flow or trigger, the daily limit, or the Default Lead Creator. | Check the failure email and the steps in section 9; run section 11 with a debug log on. |

Delete the diagnostic Lead after the investigation, if it exists.

## 8. Salesforce-side findings: candidates, none verified yet

**Root cause: not found on the website.** The submission reaches Salesforce and is accepted into its queue. The Lead is lost **inside Salesforce**, or is created but not seen. Every row below is a candidate, not a finding. None of them has been verified, because there was no Salesforce access.

| Priority | Issue | Root cause (candidate) | Resolution | Status | Evidence that would confirm it |
|---|---|---|---|---|---|
| P1 | Leads looked for in the wrong place | Leads go to org `00Dd0000000hivg` (the Mirketa org). They may also sit in a queue, belong to another owner, be hidden by a list view or sharing, or be auto-converted. | Search all Leads, queues, the Recycle Bin and Contacts (section 9, steps 10–11) | Unverified | A website Lead found outside the place users look |
| P1 | reCAPTCHA verification fails silently | The **ElixirEHR** key pair in Salesforce does not hold the secret key for site key `6Lf5Qd…` (wrong, rotated or mistyped), or that Google key no longer exists | Re-enter the secret from the Google reCAPTCHA admin (section 9, steps 3–4) | Unverified | The key pair's secret differs from Google's. Or: the section 11 Lead is missing with reCAPTCHA on, but appears with reCAPTCHA temporarily off. |
| P2 | Lead rejected by automation | A Lead validation rule, a blocking duplicate rule, a failing flow or trigger, or a required custom field | Section 9, steps 5–8 | Unverified | Web-to-Lead failure email to the Default Lead Creator, or an error in the debug log of the section 11 test |
| P2 | Web-to-Lead settings | Web-to-Lead off, Default Lead Creator inactive, or the daily limit reached | Section 9, step 2 | Unverified (the org accepts requests, so Web-to-Lead is not fully off) | Setup screen values; limit email |
| P3 | A repeat submission after pressing Back is dropped | The live build restores the used reCAPTCHA token from the browser's back/forward cache | Fixed in the repository (`c27df61`: the widget resets on return and an expired token shows a message). **Deploy needed.** | Fixed in repo, not live | Affects only resubmissions, so it cannot explain *all* missing Leads |
| P3 | Blank Last Name or Company | ONC MFA has an optional Last Name; several forms have an optional or absent Company. Salesforce Lead requires both. Web-to-Lead normally stores "[not provided]", but an org validation rule can reject the Lead instead. | If such a rule exists, make Last Name required on ONC MFA (design approval) or exempt Web-to-Lead from the rule | Unverified | A validation rule on LastName or Company that "[not provided]" fails |

## 9. Salesforce admin verification checklist (org `00Dd0000000hivg`)

The checks need an admin with "Customize Application" and "View All" on Leads. Record each answer in the "Result" column of section 12.

Menu paths are those of Lightning Experience; the names can differ slightly between Salesforce releases. **Do not change any setting while recording.** Change settings only after the evidence is captured, and agree each change with the org owner. The org is shared with Mirketa.

### Web-to-Lead and reCAPTCHA

1. **Organization ID.**
   - *Where:* Setup → Company Settings → Company Information → "Salesforce.com Organization ID".
   - *Expected:* `00Dd0000000hivg` (15 characters; the 18-character form starts the same).
   - *If different:* the website is posting to another org. Stop: this would change the diagnosis entirely.
2. **Web-to-Lead settings.**
   - *Where:* Setup → search "Web-to-Lead".
   - *Record:*
     - Web-to-Lead Enabled
     - **Require reCAPTCHA Verification** (on or off)
     - **Default Lead Creator** (the user, and whether that user is active)
     - Default Response Template
   - *Expected:* enabled; Default Lead Creator is an **active** user.
3. **The "ElixirEHR" reCAPTCHA API key pair.**
   - *Where:* Setup → Web-to-Lead → Create Web-to-Lead Form → "Include reCAPTCHA in HTML" → the reCAPTCHA API Key Pair lookup. Look at the existing pair; **do not generate a new form or a new pair**.
   - *Record:* the nickname (must be exactly `ElixirEHR`, which matches `captcha_settings.keyname`) and the Site Key.
   - *Expected:* Site Key = `6Lf5QdAZAAAAAMpIeeAGEDVzMQ0JSHFpdUYIZQs_`.
   - *Also:* check that there is only one pair called ElixirEHR, and note who last modified it and when.
4. **Google reCAPTCHA secret key.**
   - *Where:* the Google reCAPTCHA admin console (google.com/recaptcha/admin), signed in as the owner of the site key `6Lf5Qd…`.
   - *Record:*
     - the key type: must be **reCAPTCHA v2, "I'm not a robot" Checkbox**
     - the domain list: must include `elixirehr.com`; subdomains are covered unless the domain check is restricted, so add `www.elixirehr.com` if needed
     - whether the key is still active
     - recent verification statistics
   - *Compare:* the **Secret Key** shown there must be **identical** to the secret stored in the Salesforce ElixirEHR key pair. Compare the two privately; **do not paste the secret into email, chat, tickets or this report**.
   - *If they differ:* that alone explains silently dropped Leads. The fix is to update the Salesforce key pair with Google's secret.
   - *If the statistics show no verification calls:* Salesforce is not verifying tokens with this key.

### Lead creation

5. **Validation rules.**
   - *Where:* Setup → Object Manager → Lead → Validation Rules.
   - *Record:* every **active** rule and its formula.
   - *Look for:*
     - rules that a website Lead would fail: blank or "[not provided]" Company or Last Name, Phone format, required Industry or State, a Lead Source restriction
     - rules that apply to the Default Lead Creator's profile
6. **Duplicate rules.**
   - *Where:* Setup → Duplicate Rules → Lead rules.
   - *Record:* each active rule, its action on create (**Allow** or **Block**), and its matching rule.
   - *Risk:* a "Block" rule rejects a website Lead whose email already exists as a Lead or Contact. A repeat enquirer then never appears as a new Lead.
7. **Required fields.**
   - *Where:* Setup → Object Manager → Lead → Fields & Relationships.
   - *Look for:* any custom field marked **Required** at field level. Web-to-Lead does not send it, so creation fails.
   - *Also:* standard Last Name and Company are required by Salesforce. Web-to-Lead stores "[not provided]" when the website leaves them blank (ONC MFA Last Name; Company on several forms). Confirm with steps 5 and 8 that nothing rejects that value.
8. **Flows, triggers and processes.**
   - *Where:*
     - Setup → Flows: filter for record-triggered flows on Lead (before and after save, create)
     - Setup → Object Manager → Lead → Triggers
     - Setup → Process Automation Settings
     - any remaining Workflow Rules or Process Builder processes on Lead
   - *Look for:*
     - a flow that **deletes, auto-converts or reassigns** Leads
     - a flow or trigger that can throw an error
   - *Also:* check Setup → Apex Exception Email and the flow error emails for failures around submission times.
9. **Failure notifications.**
   - *Where:* the mailbox of the Default Lead Creator (step 2).
   - *Look for:* Salesforce Web-to-Lead failure or daily-limit emails, and flow or Apex error emails, dated on or after **6 Nov 2026** and around any reported website submission.

### Where Leads go

10. **Lead assignment rules.**
    - *Where:* Setup → Lead Assignment Rules.
    - *Record:* the **active** rule and the entry that matches `Lead Source = Web` or no criteria.
    - *Note:* the owner it assigns, a user or a **queue**. Website Leads will be found there, not in "My Leads".
11. **Searching for website Leads.**
    - *Where:* Leads → **All Leads** list view, and any **queue** list views (Setup → Queues shows Lead queues).
    - *Better:* a Lead report with scope **"All leads"**, filtered `Lead Source = Web`, Created Date = last 30 days, with columns Owner, Created By and Created Date.
    - *Also search:*
      - the **Recycle Bin**
      - **converted** Leads, including Contacts and Accounts created from them
      - Leads with Company "[not provided]"
    - *Visibility:* if the person reporting "no leads" is not an admin, check the Lead **org-wide default** (Setup → Sharing Settings) and whether they can see Leads owned by the queue or owner from step 10.
    - *Specific search:* `w2l-diagnostic@example.com` (section 7). Interpret the result with the table in 7d.

## 10. Exact admin actions required

In order. Steps 1–3 need no change to Salesforce.

1. Run section 9 and fill in the "Result" column of section 12.
2. Search for the 6 Nov diagnostic Lead and read the outcome with the table in section 7d.
3. Run the controlled test in section 11, with the admin present. Turn on a debug log first (section 11, step 1).
4. Act only on what the evidence shows:
   - **Secret key mismatch:** update the ElixirEHR key pair's secret from the Google console, then repeat section 11.
   - **Validation, duplicate rule, required field or flow failure:** adjust that rule (for example, exempt Lead Source = Web, or set the duplicate rule to Allow with an alert), then repeat section 11.
   - **Leads exist but are routed elsewhere:** fix the assignment rule, the queue membership, the list views or the sharing. Nothing on the website needs to change.
   - **Default Lead Creator inactive:** set an active user.
5. Delete the test Leads afterwards, including `w2l-diagnostic@example.com`.

**Do not** change the website, generate a new Web-to-Lead snippet, or create a new reCAPTCHA key to "try something". The website already matches what Salesforce generated. A new key pair or snippet would have to be wired in again and approved, and it would hide the original cause.

## 11. Controlled live test: one real Lead with a real reCAPTCHA tick

**Purpose:** create exactly **one** clearly labelled test Lead through the live website, with a human-ticked reCAPTCHA, and capture evidence at every step.

**Who:** one person at the browser, and the Salesforce admin at the same time.

**Agree beforehand:** the org owner agrees to one test Lead in production. It is deleted afterwards.

### Before

1. **Salesforce debug log** (admin).
   - *Where:* Setup → Debug Logs → New trace flag.
     - The traced entity is the **Default Lead Creator** user from section 9, step 2.
     - Add the **Automated Process** entity if your org offers it.
     - Debug level: at least **Apex Code = Debug**, **Workflow = Info**, **Validation = Info**.
   - Expiry: 1 hour.
2. **Choose unique test values:**
   - **Email:** an address you own that has never been used in this org. Use a plus-alias, for example `yourname+w2ltest-1110@yourcompany.com`.
   - **First name:** `W2L`
   - **Last name:** `Test 10-Nov – please delete`
   - **Company:** `Elixir W2L Test`
   - **Message:** `Controlled Web-to-Lead test – please delete`
3. **Browser:** Chrome, a new **Incognito** window, so no old tokens or cache. Open DevTools (F12).
   - **Network** tab: tick **Preserve log**.
   - **Console** tab: tick **Preserve log**.

### Submit

4. Open https://www.elixirehr.com/contact-us/.
5. *Optional, recommended:* get Salesforce's own debug output.
   - Open `Desktop/Elixir-Website-Audit/w2l-live-diagnostic.js` and set `DEBUG_EMAIL` to your address.
   - Paste the script into the Console and press Enter.
   - The script adds Salesforce's `debug` and `debugEmail` fields, so Salesforce shows its debug page instead of redirecting to `/thank-you/`.
   - It never prints the token or what you type, only whether each field is filled.
6. Fill in the form with the values from step 2. Tick **"I'm not a robot" by hand**, and complete any image challenge.
7. Submit **once**, within 2 minutes of ticking; the token expires after about 2 minutes. Write down the exact submit time.

### Verify the request

8. **Network** → select the request **`servlet.WebToLead`**. On the **Headers** tab, confirm:
   - **Request URL:** `https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dd0000000hivg`
   - **Method:** POST
   - **Content-Type:** `application/x-www-form-urlencoded`
   - **Status:** 200, or a redirect to the return URL
   - Note the **`X-SFDC-Request-Id`** response header.
9. **Payload** tab, "view parsed". Confirm:

   | Field | Expected |
   |---|---|
   | `oid` | `00Dd0000000hivg` |
   | `captcha_settings` | `{"keyname":"ElixirEHR","fallback":"true","orgId":"00Dd0000000hivg","ts":"<13 digits>"}` |
   | `g-recaptcha-response` | A long string, several hundred characters. **Do not copy it anywhere.** Only confirm that it is not empty. |
   | `retURL` | `https://www.elixirehr.com/thank-you/` |
   | `lead_source` | `Web` |
   | `first_name`, `last_name`, `email`, `company`, `description` | The test values |
   | `debug`, `debugEmail` | Present only if step 5 was used |

   Take a screenshot with the token value cropped out.

### Read Salesforce's response

10. **With debug (step 5):** Salesforce shows a debug page listing the received fields, and emails its debug output to `DEBUG_EMAIL`. Save both. "Your request has been queued" is still **not** proof of a Lead; continue with step 11.
    **Without debug:** the browser lands on `/thank-you/`. That only proves the POST was sent.

### Check Salesforce

11. **Salesforce Lead search** (admin), 1–5 minutes after the submit time:
    - Global search for the test email.
    - The Lead report from section 9, step 11, with Created Date = today.
    - Check the Recycle Bin and Contacts too.
12. **Debug log** (admin): open the log entries created at the submit time. Look for:
    - `VALIDATION_FAIL`
    - `DUPLICATE_DETECTED` or a duplicate rule block
    - `FLOW_ELEMENT_ERROR` or `FATAL_ERROR`
    - the owner assignment
13. Check the **Default Lead Creator's mailbox** for a Web-to-Lead failure email.

### Expected outcomes

| Observation | Meaning | Action |
|---|---|---|
| Lead found, owner as expected | **Success.** Integration verified end to end. The earlier "missing" Leads were a visibility, assignment or repeat-submission issue. | Mark Lead creation verified; delete the test Lead; deploy (section 13). |
| Lead found, but owned by a queue or another user, or converted | Created, but not where people look | Fix assignment, queue or list views; no website change |
| No Lead; debug log or email shows a validation, duplicate, required-field or flow error | **Rejected by automation.** The log names the rule. | Fix that rule; repeat the test |
| No Lead; no debug-log activity at all for the submit time; no failure email | Salesforce discarded the request **before** Lead creation. The most likely cause is **reCAPTCHA verification failure** (secret mismatch, or the key is not valid for the domain). | Compare secrets (section 9, step 4). After an admin-approved fix, repeat. As a **short, supervised** diagnostic only, the admin may turn "Require reCAPTCHA Verification" off, submit once and turn it back on immediately. If that Lead appears, the key pair is confirmed as the cause. |
| No `servlet.WebToLead` request in Network | The browser never posted (blocked by the site) | Read the message under the form and the console script output; report to the web team |
| `g-recaptcha-response` empty in the payload | Website defect. Not expected: the site blocks this. | Report to the web team with the screenshot |

## 12. Evidence still needed

| # | Evidence | Who | Result |
|---|---|---|---|
| E1 | Organization ID shown in Company Information (section 9, step 1) | Admin | |
| E2 | Web-to-Lead enabled; Require reCAPTCHA on or off; Default Lead Creator and whether active (step 2) | Admin | |
| E3 | ElixirEHR key pair: nickname, site key, last modified (step 3) | Admin | |
| E4 | Google console: key type, domains, active, statistics; **secret identical to Salesforce: yes or no** (step 4) | Key owner and admin | |
| E5 | Active Lead validation rules and any that a website Lead would fail (step 5) | Admin | |
| E6 | Lead duplicate rules and their action on create (step 6) | Admin | |
| E7 | Required custom Lead fields (step 7) | Admin | |
| E8 | Record-triggered flows, triggers and processes on Lead (step 8) | Admin | |
| E9 | Failure, limit or error emails since 6 Nov (step 9) | Admin | |
| E10 | Active assignment rule and the owner or queue for Lead Source = Web (step 10) | Admin | |
| E11 | Website Leads in the last 30 days: count, owners, queues (step 11) | Admin | |
| E12 | Does `w2l-diagnostic@example.com` exist? Where? (section 7d) | Admin | |
| E13 | Controlled test: payload screenshot, `X-SFDC-Request-Id`, debug page or email, debug log extract, Lead found yes or no (section 11) | Tester and admin | |

The task can be marked complete only when **E13 shows a Lead created from a human-ticked website submission**.

## 13. Deployment recommendation

- **Deploy the current repository** (`8e984d7` or later) through the authorised process, after product-team approval.
  - It adds the repeat-submission fix (`c27df61`).
  - It does not change the Salesforce payload, so it is safe to deploy before the Salesforce investigation finishes.
  - **It will not by itself fix missing Leads**, because the main cause is inside Salesforce.
- Every production build must set **`VITE_SITE_URL=https://www.elixirehr.com`**. Without it, `retURL` and the canonical tags fall back to the domain without www, which returns 404.
- **Do not** deploy any website change "to fix Web-to-Lead" until section 11 identifies a website-side cause. The current evidence shows none.
- Run the controlled test (section 11) **after** deployment, so it exercises the code that will stay live. If deployment is delayed, the test is still valid on the current live build, because the payload is identical.
- After verification:
  - delete the test Leads
  - remove the debug trace flag
  - consider making ONC MFA Last Name required, if section 9, step 5 finds a rule that rejects "[not provided]". This is a page-design decision.

## 14. Changes made

| Date | File | Change |
|---|---|---|
| 10 Nov (first pass) | This report | Created |
| 10 Nov (first pass) | `README.md`, `DESIGN-SYSTEM.md` | Form page list, return URL and Calculator form description corrected to match the code; pointer to this report |
| 10 Nov (second pass) | This report | Separated confirmed frontend findings from unverified Salesforce candidates. Added the recorded 6 Nov response and how to interpret it (section 7), the detailed admin checklist (9), admin actions (10), the controlled test procedure (11), the evidence log (12) and the deployment recommendation (13). |

**No application code was changed in either pass.** Nothing was committed, deployed or submitted to Salesforce in the second pass.
