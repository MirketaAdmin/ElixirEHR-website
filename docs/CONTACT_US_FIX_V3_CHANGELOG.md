# Contact Us → Web-to-Lead fix V3: changelog

**Branch:** `fix/contact-us-web-to-lead` (local, not pushed)

| File | Lines | Change | Reason |
|---|---|---|---|
| `src/components/forms/WebToLead/webToLeadHelpers.js` | 16 | `NOSCRIPT_MESSAGE` changed to "Please enable JavaScript to submit this form, or email info@elixirehr.com." | V3 brief, F-1 item 3 (exact wording) |
| `docs/CONTACT_US_FIX_V3_FINDINGS.md` | new | Step 1 values, Step 2 (skipped, awaiting permission), F-1 status, verification, conclusion | Deliverable |
| `docs/SALESFORCE_ELIXIR_KEYPAIR_RUNBOOK.md` | new | Admin runbook (verify, fix, retest, fall-back) and results table | Deliverable |
| `docs/CONTACT_US_FIX_V3_CHANGELOG.md` | new | This file | Deliverable |

The other F-1 items were already in `954b6f6` (V2). They are listed in [CONTACT_US_FIX_V2_CHANGELOG.md](CONTACT_US_FIX_V2_CHANGELOG.md):

- submit disabled until hydration
- token check with a message
- 15 s timeout
- `onUnavailable` read through a ref

No field names, native POST behaviour, design or Salesforce/Google settings were changed.

**Affected forms (shared component):**

- Contact Us
- About Us
- Why Elixir
- Referral Program
- EVV for Salesforce Field Service
- ONC MFA Use Cases
- No-Show Cost Calculator
