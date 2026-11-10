# Contact Us → Web-to-Lead fix: changelog

**Branch:** `fix/contact-us-web-to-lead` (local only, not pushed)

## Application code

**No application code changed.**

- Step 1 found no defect in the normal submission path.
- Step 2 (the coordinated live test) has not been run, so no branch is confirmed.
- Rule 7 forbids speculative changes.

The one confirmed website defect, F-1 (submission before hydration posts without a token), is in the component shared by all 7 lead forms. Its fix is proposed in [CONTACT_US_FIX_FINDINGS.md](CONTACT_US_FIX_FINDINGS.md) and awaits approval (rule 5).

## Documentation

| File | Change | Maps to |
|---|---|---|
| `docs/CONTACT_US_FIX_FINDINGS.md` | New: Step 1 audit (Q1–Q11, build check, F-1) and the Step 2 procedure and classification table | Step 1, Step 2 |
| `docs/SALESFORCE_ADMIN_ACTIONS.md` | New: admin actions before and after the coordinated test, per-branch actions, results table | Step 3, branches B–D |
| `docs/CONTACT_US_FIX_CHANGELOG.md` | New: this file | Step 5 |

`docs/ELIXIR_SALESFORCE_WEB_TO_LEAD_DIAGNOSTIC_REPORT.md` is not modified.

## Verification run

| Check | Result |
|---|---|
| `VITE_SITE_URL=https://www.elixirehr.com npm run build` | OK, 112/112 pages prerendered |
| `oid` and action in `dist/` | `00Dd0000000hivg` |
| `retURL` in `dist/` | `https://www.elixirehr.com/thank-you/` |
| Site key | Present once |
| Secret key in `dist/` | None |
| `debug` / `debugEmail` in `dist/` | None |
| Dev server (StrictMode) | 1 widget, 1 `api.js`, 1 token field, also after in-site navigation; 0 console errors |
| Live site, JS blocked | F-1 reproduced. The POST was aborted; nothing reached Salesforce. |
| Unit or component tests | **None exist in this project** (no test runner configured). Adding one would need a new dev dependency, which is not allowed without approval. |
