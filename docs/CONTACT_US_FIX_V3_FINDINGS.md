# Contact Us → Web-to-Lead: V3 findings (key pair suspected)

**Date:** 10 Nov 2026
**Branch:** `fix/contact-us-web-to-lead` (local; also merged into local `main` as `773262b`; nothing pushed)
**Status:** **WEBSITE SIDE CLEAR – ADMIN KEY-PAIR CHECK REQUIRED**

F-1 and the `ts` fix are implemented but **not deployed**.

**For:** the Elixir product team and whoever runs the Salesforce checks in the runbook.

## 0. Correction to the brief's evidence

The brief treats the 10 Nov live test (~13:30 IST, `satyamjha217@gmail.com`) as evidence that the **key pair** is wrong. That conclusion does not follow from the test:

- The test ran on the **live site**, whose code still had defect **W2-a**: every real click posted `captcha_settings` with `"ts":""`. This was reproduced on the live site with a trusted click on 4 pages ([CONTACT_US_FIX_V2_FINDINGS.md](CONTACT_US_FIX_V2_FINDINGS.md), section 1b).
- Mirketa's own investigation found that an empty `ts` makes Salesforce drop the Lead, in this same org.
- So that missing Lead is **already explained by a website defect**. The fix exists (`954b6f6`) but is not live.

**What this means for the key pair:** it is neither proven wrong nor proven right. The runbook checks it. The retest has to run **after** the `ts` fix is deployed; otherwise it cannot separate the two causes.

## 1. Step 1: code values (read-only)

| Value | Code | Result |
|---|---|---|
| `webToLead.captcha.keyName` | [webToLead.js:18](../src/data/webToLead.js#L18) | `ElixirEHR`: exact, case-sensitive ✔ |
| `webToLead.captcha.siteKey` | [webToLead.js:19](../src/data/webToLead.js#L19) | starts `6Lf5QdAZ` ✔ (the same key renders without error on www.elixirehr.com) |
| `webToLead.leadSource` | [webToLead.js:16](../src/data/webToLead.js#L16) | `Web`; see the note below |
| `webToLead.orgId` | [webToLead.js:9](../src/data/webToLead.js#L9) | `00Dd0000000hivg` ✔ |
| `webToLead.action` | [webToLead.js:8](../src/data/webToLead.js#L8) | `https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dd0000000hivg` ✔ |
| `webToLead.returnUrl` | [webToLead.js:13-15](../src/data/webToLead.js#L13-L15), [siteUrl.js:5](../src/utils/siteUrl.js#L5) | `https://www.elixirehr.com/thank-you/` when built with `VITE_SITE_URL=https://www.elixirehr.com`; otherwise the no-www fallback ⚠ (build setting) |
| `captcha_settings` keys | [WebToLead.jsx:12-13](../src/components/forms/WebToLead/WebToLead.jsx#L12-L13) | exactly `keyname`, `fallback`, `orgId`, `ts`; `ts` is a 13-digit ms string ✔ |
| Phone field | [webToLead.js:26](../src/data/webToLead.js#L26) | `mobile`, as in the snippet chosen on 10 Nov ✔ |

**No code value mismatch.** All values match the Salesforce-generated ElixirEHR snippet.

### Lead Source

`Web` is the same value Mirketa's form sends to this org. **Elixir and Mirketa Leads cannot be told apart by Lead Source.** That would also explain why "Web" Leads arriving today do not prove that Elixir's form works.

**Recommendation (not implemented):**

1. The admin creates or confirms a distinct, active Lead Source picklist value, for example `Elixir Website`.
2. The product team approves it.
3. Then change `leadSource` in [webToLead.js:16](../src/data/webToLead.js#L16).

The value must already exist in the picklist before the form sends it. Until then, Elixir Leads can be identified by the 10 Nov retest email, or by Description and Company.

## 2. Step 2: read-only Salesforce check

**Skipped: awaiting your permission.** The `sf` CLI is installed on this machine (`C:\Program Files\sf\bin\sf`). As the brief asks, nothing was run, not even an auth check. With your approval I would run only:

- `sf org list`, to see whether an org is already authenticated. I will not log in.
- If one is authenticated: the two read-only SOQL queries from the brief (`--all-rows` on the email; Lead Source counts for the last 30 days).

## 3. Step 3: F-1 (approved)

Already implemented in `954b6f6` (V2). This pass only aligned the `<noscript>` text with the brief.

| Requirement | Status | Where |
|---|---|---|
| Submit disabled in the prerendered HTML, enabled after hydration | Done | `useHydrated()` in [webToLeadHelpers.js](../src/components/forms/WebToLead/webToLeadHelpers.js); [ContactForm.jsx:49,100](../src/components/sections/ContactSection/ContactForm.jsx#L100); [BriefSection.jsx:42,107](../src/pages/NoShowRoiCalculator/sections/BriefSection/BriefSection.jsx#L107) |
| Empty token → `preventDefault()` + message | Already present | "Please confirm you are not a robot, then submit again." ([ContactForm.jsx:16,56-60](../src/components/sections/ContactSection/ContactForm.jsx#L56-L60)). The existing approved message is kept, since the brief says "if not already present". |
| `<noscript>` text | Done, wording updated | "Please enable JavaScript to submit this form, or email info@elixirehr.com." |
| ~15 s reCAPTCHA load timeout → `onUnavailable` | Done | [WebToLead.jsx:51,73-80](../src/components/forms/WebToLead/WebToLead.jsx#L73-L80) |
| `onUnavailable` read through a ref | Done | [WebToLead.jsx:91-92,105](../src/components/forms/WebToLead/WebToLead.jsx#L91-L92) |

**One deliberate difference from the brief:** on timeout, the shared `scriptPromise` is **not cleared**.

- **Why:** clearing it would let the next form mount add a **second** `api.js` while the first may still arrive, which is the duplicate-script problem.
- **What happens on timeout instead:** only that form stops waiting.
- **What still resets the promise:** a real load error (`onerror`) still clears it ([WebToLead.jsx:62](../src/components/forms/WebToLead/WebToLead.jsx#L62)), so a later form can retry.

**Unchanged:** native POST, field names, design and copy.

**Affected forms (shared code), 7:**

- Contact Us
- About Us
- Why Elixir
- Referral Program
- EVV for Salesforce Field Service
- ONC MFA Use Cases
- No-Show Cost Calculator (brief form)

## 4. Step 5: verification

| Check | Result |
|---|---|
| `npm run build` (`VITE_SITE_URL=https://www.elixirehr.com`) | 112/112 pages |
| Lint | Clean |
| `dist/`: oid | `00Dd0000000hivg` ✔ |
| `dist/`: keyname | `` keyName:`ElixirEHR` `` ✔ |
| `dist/`: site key | `6Lf5QdAZ…` once ✔ |
| `dist/`: secret key | **None.** The only `6L…` 40-character string outside base64 image data is the site key. |
| Prerendered HTML, all 7 pages | Submit `disabled`; new `<noscript>` text present |
| Dev server (`vite`, StrictMode), all 7 forms, 13 checks each | **91/91 PASS**. Covers: reCAPTCHA renders (1 widget, 1 `api.js`); not ticked → submit blocked with message; expired → message; valid → exactly 1 POST (aborted, nothing sent to Salesforce). In-site navigation PASS; 0 JS errors. |
| Production build, real-click POST (V2 / 10 Nov) | 13-digit `ts`, `mobile`, keyname `ElixirEHR`, token, on 7/7 |

Two dev-only notes:

- Without `VITE_SITE_URL`, dev builds `retURL` without www.
- The dev server needed longer waits on first compile.

## 5. Conclusion

- **Website: clear.** All values are correct. The one proven website cause of lost Leads (W2-a, empty `ts`) is fixed on this branch and on local `main`, but **not yet deployed**.
- **Key pair: unverified.** The admin works through [SALESFORCE_ELIXIR_KEYPAIR_RUNBOOK.md](SALESFORCE_ELIXIR_KEYPAIR_RUNBOOK.md), sections A and D. Section B applies only if A shows a mismatch.
- **Order:**
  1. Deploy (after approval).
  2. Retest once (runbook section C).
  3. If there is still no Lead, the key pair or Salesforce automation is the cause (runbook section D).
