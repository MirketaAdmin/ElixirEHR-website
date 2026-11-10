# Salesforce admin actions V2: Elixir Web-to-Lead

**Org:** `00Dd0000000hivg`
**Date:** 10 Nov 2026

**Rules:**

- Do not paste any secret key anywhere; answer "match", "no match" or "cannot verify".
- Record the current value of every setting before changing anything.

**Website update.** A website defect was found and fixed: every real submission posted `captcha_settings` with an **empty `ts`** ([CONTACT_US_FIX_V2_FINDINGS.md](CONTACT_US_FIX_V2_FINDINGS.md)).

- **Before the fix is deployed:** Leads from the live site may be dropped for that reason alone.
- **What to do now:** sections 1 and 2 can run now. Run the new test (item 7) **after the fix is deployed**, so it shows whether anything on the Salesforce side is also wrong.

## 1. Known test details

| Test | Time | Email | Company | Notes |
|---|---|---|---|---|
| Diagnostic POST | 6 Nov 2026, 08:15:23 GMT | `w2l-diagnostic@example.com` | Elixir W2L Diagnostic | No token (deliberate). Request ID `116b52e51713b93817d78942aabad0c1`. |
| Live form test | 10 Nov 2026, ~08:00 GMT (13:30 IST) | `satyamjha217@gmail.com` | mirketa | reCAPTCHA solved; Salesforce returned 200 and redirected to `/thank-you/`; no Lead seen. `ts` was most likely empty (website defect). |

## 2. Checklist

| # | Check | Where | What to record |
|---|---|---|---|
| 1 | **Is the Lead there but hidden?** Search both test emails with an admin login: All Leads, the Recycle Bin, converted Leads (Contacts, Accounts). | Global search; Leads → All Leads; Recycle Bin | Found or not found; owner or queue; created date |
| 2 | **Failure email.** Find the Default Lead Creator, then check that user's inbox around **08:00 GMT, 10 Nov 2026** (and 08:15 GMT, 6 Nov). | Setup → Web-to-Lead → Default Lead Creator | The exact error text, or "none" |
| 3 | **reCAPTCHA settings.** | Setup → Web-to-Lead (Require reCAPTCHA); Create Web-to-Lead Form → reCAPTCHA API Key Pair lookup (inspect only) | "Require reCAPTCHA Verification" on or off. Does a pair named exactly `ElixirEHR` exist, and only one? Is its site key `6Lf5QdAZAAAAAMpIeeAGEDVzMQ0JSHFpdUYIZQs_`? Does its secret match the Google console for that site key: match, no match or cannot verify? |
| 4 | **Duplicate rules.** Is any Lead rule set to **Block** that could match on email or company? The 10 Nov test used company "mirketa", which already exists in this org. | Setup → Duplicate Rules (Lead) | Rule name, matching rule, action on create |
| 5 | **Validation rules, required fields, Lead Source.** Is `Web` an **active** Lead Source picklist value (also for the Lead record type)? Are there required custom fields, or validation rules a website Lead would fail ("[not provided]" Company or Last Name, phone format, and so on)? | Object Manager → Lead → Validation Rules; Fields & Relationships → Lead Source; required fields | Each rule or field that applies |
| 6 | **Flows and Apex.** Active record-triggered Flows or Apex triggers on Lead (create). Does any of them delete, convert, reassign or throw? | Setup → Flows; Object Manager → Lead → Triggers | Name and what it does |
| 7 | **Debug log and new test** (after the fix is deployed). Trace flag on the Default Lead Creator (Apex = Debug, Workflow = Info, Validation = Info). Then one submission from the live Contact Us page with a **unique** email and company, for example `elixir-test-<date>@<your domain>` and "Elixir Test Clinic". The tester confirms `captcha_settings` `ts` is 13 digits in the Network payload. | Setup → Debug Logs | Log lines (`VALIDATION_FAIL`, duplicate, `FLOW_ELEMENT_ERROR`, `FATAL_ERROR`); Lead found or not; owner |
| 8 | **Control check.** Are real mirketa.com Web-to-Lead Leads arriving in this org right now? | Lead report: Lead Source = Web, created in the last 7 days, grouped by source site or owner | Yes or no, and the date of the latest |
| 9 | **Optional decisive test (admin's decision only).** Turn "Require reCAPTCHA Verification" off briefly, submit one unique test, and turn it back on **immediately**. | Setup → Web-to-Lead | Did the Lead appear? |

## 3. Decision table

| Lead found | Failure email | Debug log or test result | Cause | Owner | Action |
|---|---|---|---|---|---|
| Yes, another owner or queue | — | — | Assignment or visibility | Admin | Fix the assignment rule, queue membership or list view |
| No | Yes | Error text | Validation rule, duplicate rule, required field or Flow | Admin (+ Dev if the form must send a field) | Fix according to the error |
| No | No | Lead appears when reCAPTCHA is off | ElixirEHR key pair (secret mismatch or wrong pair) | Admin | Re-enter the correct secret for "ElixirEHR" from the Google console |
| No | No | Debug log shows a Flow or Apex error | Automation | Admin | Fix the automation |
| No | No | Mirketa Leads also missing | Org-wide Web-to-Lead problem | Admin / Salesforce Support | Open a case quoting Request ID `116b52e51713b93817d78942aabad0c1` |
| **Yes, after the website fix is deployed** | — | `ts` 13 digits in the payload | **Website `ts` defect (W2-a) was the cause** | — | Mark resolved; delete the test Leads |

If the failure email names a field the form must send, tell the web team (branch W3).

## 4. Results (admin fills in)

| # | Result |
|---|---|
| 1 Lead found? Where? | |
| 2 Failure email text | |
| 3 Require reCAPTCHA / pair exists / site key / secret match | |
| 4 Duplicate rules | |
| 5 Lead Source `Web` active; validation rules; required fields | |
| 6 Flows and Apex | |
| 7 Debug log and new test | |
| 8 Mirketa Leads arriving? | |
| 9 Optional test | |
