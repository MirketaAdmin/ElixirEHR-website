# Runbook: Elixir reCAPTCHA key pair (Salesforce org `00Dd0000000hivg`)

> **Updated 10 Nov 2026:** the website now uses the key pair **`elixirEHR_website_2026`** with site key **`6Lc3fhkuAAAAAEq4gX48wD-DNVEyl6SSw5Fo3TRg`** (commit `c2b7a02`). It replaces `ElixirEHR` / `6Lf5QdAZ…`. Every check below refers to the new pair.

**For:** the Salesforce admin, plus the owner of the Google reCAPTCHA key.

**Rules:**

- Never paste a secret key into chat, email, tickets or this document. Record only "match", "no match" or "cannot verify".
- Record each value **before** changing anything.
- Section B needs admin approval.

**Background:**

- The website sends keyname `elixirEHR_website_2026`, site key `6Lc3fhku…`, `oid` and `orgId` `00Dd0000000hivg`, and `lead_source` `Web`.
- A website defect (empty `captcha_settings.ts`) was fixed on 10 Nov 2026. **Run section C only after that fix is deployed**, otherwise the result is not conclusive.
- Mirketa's form uses key pair `Mirketa_New` in the same org and also sends Lead Source `Web`.

## A. Verify (no changes)

1. **Key pair exists.** Setup → Quick Find "Web-to-Lead" → Web-to-Lead settings. Open the reCAPTCHA API key pairs; in many orgs they are reached from **Create Web-to-Lead Form → Include reCAPTCHA → API Key Pair** lookup, which you only view. Confirm that a pair named exactly **`elixirEHR_website_2026`** exists (spelling and case), and that there is only one.
2. **Site key matches.** The `elixirEHR_website_2026` pair's site key starts with **`6Lc3fhku`** and is `6Lc3fhkuAAAAAEq4gX48wD-DNVEyl6SSw5Fo3TRg`.
3. **Compare with `Mirketa_New`** (which works). Note any difference in how the two pairs are set up: for example, when each was last modified and by whom, and whether one was created more recently.
4. **Google console** (https://www.google.com/recaptcha/admin, signed in as the key owner):
   - Find the site whose site key is `6Lc3fhku…`.
   - Confirm the type is **reCAPTCHA v2, "I'm not a robot" Checkbox**.
   - Confirm the domains include **`elixirehr.com`**. `www.elixirehr.com` is covered unless domain verification is restricted; add it if in doubt.
   - Note whether "Verify the origin of reCAPTCHA solutions" is on.
   - **Compare the Secret key** shown there with the secret stored in the Salesforce `elixirEHR_website_2026` pair. Record only match, no match or cannot verify.
5. **Web-to-Lead settings.** Record whether "Require reCAPTCHA Verification" is on or off, who the Default Lead Creator is, and whether that user is active.

## B. Fix (admin approval required; only if section A shows a problem)

6. **Secret mismatch.** In the Google console → that site → Settings → reCAPTCHA keys, copy the **Secret key**. In Salesforce, edit the `elixirEHR_website_2026` key pair, paste the secret and save. Do not share the secret anywhere else.
7. **Site key mismatch.** If the `elixirEHR_website_2026` pair's site key is not `6Lc3fhku…`, update the pair's site key **and** secret **together**, both from the same Google site (`6Lc3fhku…`). Never mix a site key from one Google site with a secret from another.
8. **Pair missing or misnamed.** Create or rename it to exactly `elixirEHR_website_2026`, holding the `6Lc3fhku…` site key and its secret. Tell the web team if you would rather use a different name, because the form's keyname must match it exactly.

## C. Retest (after the website fix is deployed)

9. Open https://www.elixirehr.com/contact-us/ in a new incognito window, with DevTools → Network → **Preserve log** ticked.
10. Submit once:
    - **Email:** a **new unique** address, for example `elixir-test-<date>@<your domain>`
    - **Company:** "Elixir Test Clinic" (not "mirketa", which already exists in the org)
    - **reCAPTCHA:** ticked by hand
11. In Network → `servlet.WebToLead` → Payload, confirm:
    - `captcha_settings` shows `"keyname":"elixirEHR_website_2026"` and `"ts"` with **13 digits**
    - `g-recaptcha-response` is non-empty (record the length only)
    - `mobile` is present
12. Within 2 minutes, search **All Leads** for that email, and also check the Recycle Bin.

## D. If there is still no Lead

13. Check the **Default Lead Creator's** inbox for a Web-to-Lead failure email, and record the exact text.
14. Set a **debug-log trace flag** on the Default Lead Creator (Apex = Debug, Workflow = Info, Validation = Info), then repeat step 10 with another new email.
15. Check:
    - Lead **validation rules**
    - **Duplicate rules** set to Block
    - required fields
    - whether the **Lead Source** value `Web` is active (also for the Lead record type)
    - active **Flows** and **Apex triggers** on Lead
16. **Optional decisive test** (admin decision): turn off "Require reCAPTCHA Verification" briefly, submit one unique test, then turn it **back on immediately**.
    - **Lead appears:** it is a key-pair problem (section B).
    - **No Lead:** it is not reCAPTCHA; use the debug log from step 14.

## Results

| # | Check | Result | Notes |
|---|---|---|---|
| 1 | `elixirEHR_website_2026` pair exists, exact name, only one | | |
| 2 | Pair site key = `6Lc3fhku…` | | |
| 3 | Difference from `Mirketa_New` | | |
| 4 | Google: v2 checkbox; domains; secret match (match / no match / cannot verify) | | |
| 5 | Require reCAPTCHA on or off; Default Lead Creator active | | |
| 6 | Secret updated? (only if no match) | | |
| 7 | Site key and secret updated together? (only if needed) | | |
| 8 | Pair created or renamed? (only if needed) | | |
| 9–11 | Retest payload: keyname, `ts` digits, token length, `mobile` | | |
| 12 | Lead found? Owner? | | |
| 13 | Failure email text | | |
| 14 | Debug-log findings | | |
| 15 | Validation, duplicate, required fields, Lead Source, Flows and Apex | | |
| 16 | Optional test result | | |

## Recommendation: separate Lead Source

Both sites send `lead_source = Web`, so Elixir and Mirketa Leads look the same in reports. If you agree:

1. Add or confirm a distinct active picklist value, for example **`Elixir Website`**.
2. Tell the web team the exact value; they will change one line ([webToLead.js:16](../src/data/webToLead.js#L16)).
