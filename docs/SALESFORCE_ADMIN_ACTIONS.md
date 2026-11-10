# Salesforce admin actions: Elixir Web-to-Lead

**Date:** 10 Nov 2026

**Org:** `00Dd0000000hivg`

**Status:** ADMIN ACTION REQUIRED to identify the root cause.

The website posts correctly (see [CONTACT_US_FIX_FINDINGS.md](CONTACT_US_FIX_FINDINGS.md)). The missing Leads cannot be explained without the evidence below.

**Do not:**

- rotate or create reCAPTCHA keys
- generate a new Web-to-Lead form
- change any setting before recording its current value

**Never paste a secret key** into email, chat, tickets or these documents.

## 1. Before the coordinated test

| # | Action | Setup path | Record |
|---|---|---|---|
| 1 | Add a debug-log trace flag on the Web-to-Lead **Default Lead Creator**: Apex Code = Debug, Workflow = Info, Validation = Info, 1 hour | Setup → Debug Logs → New | User name |
| 2 | Record the Web-to-Lead settings | Setup → Web-to-Lead | Enabled? **Require reCAPTCHA Verification** on or off? Default Lead Creator, and is that user active? |
| 3 | Inspect key pair **ElixirEHR**; do not edit it | Setup → Web-to-Lead → Create Web-to-Lead Form → reCAPTCHA API Key Pair lookup | Site key = `6Lf5QdAZAAAAAMpIeeAGEDVzMQ0JSHFpdUYIZQs_`? Last modified by and when? |
| 4 | Compare the ElixirEHR **secret key** with the secret shown for site key `6Lf5Qd…` in the Google reCAPTCHA admin. Do this privately; record only "match" or "no match". | google.com/recaptcha/admin (key owner) | Match or no match. Key type (must be v2 Checkbox). Domains (must cover `elixirehr.com` and `www.elixirehr.com`). Key active? |
| 5 | Search for the 6 Nov diagnostic Lead `w2l-diagnostic@example.com`: Request ID `116b52e51713b93817d78942aabad0c1`, sent 08:15:23 GMT, **no token** | All Leads, Recycle Bin, Contacts | Found or not found, and where. Read the result with the table in section 7d of the diagnostic report. |

## 2. During and after the coordinated test

Follow Step 2 of [CONTACT_US_FIX_FINDINGS.md](CONTACT_US_FIX_FINDINGS.md). Within 15 minutes:

- Search the test email in All Leads, the Recycle Bin and converted records.
- Check the Default Lead Creator's inbox for a Web-to-Lead failure email.
- Read the debug log at the submit time.

## 3. Then, depending on the result

| Branch | What the admin does | Setup path | Verify by |
|---|---|---|---|
| B: secret key mismatch | Paste Google's secret for `6Lf5Qd…` into key pair ElixirEHR. Same key; no new pair. | Web-to-Lead reCAPTCHA key pair | Repeat the coordinated test once |
| B: domain missing | The key owner adds `elixirehr.com` (and `www.elixirehr.com` if domain checking is strict) to the key | Google reCAPTCHA admin → key settings | Repeat the test |
| C: rule, Flow or required field | Record the exact error from the email or log. Fix the responsible validation rule, duplicate rule, Flow or trigger, or required field (for example, exempt Lead Source = Web, or set the duplicate rule to Allow with an alert). Tell the web team if the error names a field the form does not send. | Object Manager → Lead → Validation Rules or Fields; Duplicate Rules; Flows | Repeat the test |
| D: assignment or visibility | Record the active assignment rule and the queue or owner it sets. Adjust routing, queue membership, list views or sharing so the sales team sees website Leads. | Lead Assignment Rules; Queues; Sharing Settings | The test Lead is visible to the intended team |
| E: working | Nothing in Salesforce. Delete the test Leads. | — | — |

**Always:**

- Delete the test Leads, including `w2l-diagnostic@example.com` if it exists.
- Remove the trace flag afterwards.

## 4. Results (to be filled in)

| Item | Result |
|---|---|
| Web-to-Lead enabled / Require reCAPTCHA | |
| Default Lead Creator (active?) | |
| ElixirEHR site key matches | |
| Secret matches Google (yes or no only) | |
| Google key type and domains | |
| 6 Nov diagnostic Lead found? | |
| Coordinated test: token length, Request ID | |
| Coordinated test: Lead found? Owner? | |
| Failure email or debug-log error | |
| Branch | |
