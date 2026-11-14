# Elixir sales assistant

This branch adds a custom visitor assistant, temporary qualification state, editable demo-request recap and server-side Groq/Azure model adapters. Installing or building the branch does not activate external services.

## Try the local preview

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm run dev -- --host 127.0.0.1
```

Open the local site and choose **Ask Elixir**. Development defaults to explicitly labeled sample replies. Product questions, optional qualification, skipping, contact refusal, editable contact/request recap, navigation and restart can be exercised. The preview never sends a model call, CRM submission or booking. It holds conversation/contact state in memory and clears it on refresh. Back/reopen and pending replies preserve contact drafts. A visitor may request a demo after previously declining contact. That preference is included in bounded model context, so history trimming does not erase it.

Production builds default to the assistant being off, including on private-preview hosts. `VITE_ELIXIR_ASSISTANT_MODE=sample` does not enable sample replies on the public production host. Preview hosts use sample replies unless a hosted build also sets `VITE_ELIXIR_HOSTED_PREVIEW_ENABLED=true` and runs on the exact existing `latest` hostname below. `PRIVATE_PREVIEW` remains true for that exception, so CRM and other form submissions remain disabled. `VITE_ELIXIR_ASSISTANT_MODE=off` disables the widget everywhere. A hosted production build must explicitly use `VITE_ELIXIR_ASSISTANT_MODE=hosted`.

## Hosted model adapter

The browser calls same-origin `POST /api/chat`; credentials never enter the browser bundle. The API supports Groq and Azure v1 chat-completions with validated JSON replies. The selected model must support JSON-object responses and `max_completion_tokens`.

Required server-side application settings:

- `ASSISTANT_ENABLED=true` — explicit enablement; absent/false disables the endpoint.
- `ASSISTANT_PROVIDER=groq` selects the fixed HTTPS Groq endpoint. The team preview uses `GROQ_MODEL=openai/gpt-oss-20b` and server-only `GROQ_API_KEY`, reusing the authorized Case Rezolver demo account. No account plan was upgraded. The demo's older Llama model was absent from this account's available-model list.
- For the draft-knowledge team test only, both `ASSISTANT_KNOWLEDGE_MODE=review` and `ASSISTANT_REVIEW_ENVIRONMENT=latest` are required. Leave them absent for approved production knowledge.
- Alternatively, `ASSISTANT_PROVIDER=azure` (the default) uses the following Azure settings:
- `AZURE_OPENAI_ENDPOINT` — HTTPS resource root on `*.openai.azure.com` or `*.services.ai.azure.com`.
- `AZURE_OPENAI_DEPLOYMENT` — the actual compatible deployment name.
- `AZURE_OPENAI_API_KEY` — the resource credential, entered through the approved secret/application-settings workflow. Never place it in a `VITE_` variable, command argument, document or chat.

Store the Groq credential in the **latest environment's encrypted backend application settings**. Static Web Apps managed Functions do not support managed identity or Key Vault references. Key Vault charges by operation and is not a permanent free store; using it as a runtime source would require a different backend arrangement. No vault or paid resource is provisioned by this integration. Credential transfer scripts read into process memory and use SSH stdin and HTTPS request bodies; never print values or supply them as command arguments.

`api/local.settings.example.json` gives the Azure Functions settings shape. Actual local settings and environment files are ignored by Git. For the standalone loopback runner, supply settings securely through the environment (or an ignored Node environment file) and use `npm run assistant:api`. The Vite dev server proxies `/api/chat` to `127.0.0.1:7071`. `ASSISTANT_API_PORT` may override the standalone listener; update the local proxy to match if needed.

Without complete configuration the handler returns an unavailable response, not a sample answer. Provider errors and credentials are not returned or logged. The request is bounded to 24 messages, 2,000 characters per user message and 18,000 total conversation characters; requests over 32 KB are rejected. The model call times out after 20 seconds. The browser sends recent bounded context plus structured qualification, while displaying the complete temporary conversation.

## Approved knowledge

The production collection is `api/lib/knowledge.mjs`. It is deliberately empty until the product owner supplies and approves content. Each entry needs `id`, `status: 'approved'`, `owner`, `reviewedAt` (`YYYY-MM-DD`), `title`, HTTPS `url` and `content` (up to 3,000 characters). Drafts are excluded by default. The explicit two-setting `latest` review mode loads `api/lib/review-knowledge.mjs`, small draft summaries with source-file provenance from the current live baseline. The date there records capture, not approval. The UI and model instructions identify this mode as a team test. The retriever sends up to four matching passages, with an overview fallback for greetings and qualification-only turns in that test mode.

Existing FAQs can seed draft entries but are not automatically approved. No custom model training is involved. Only source IDs from retrieved entries can become visible links. Qualification extraction is restricted to literal text from the latest visitor message; the review form remains authoritative before any submission.

## CRM and demo requests

The assistant reuses `src/data/webToLead.js` and the existing native Salesforce form/CAPTCHA contract. Shared forms retain their current behavior. The new optional `sourceUrl` override in `WebToLeadFields` preserves a sanitized original product-page URL; arbitrary query strings/fragments are excluded from assistant attribution.

Assistant contact fields are first name, last name, work email and organization, with optional phone and role. Qualification and preferred time/timezone are included in an editable `description`. No new Salesforce custom fields or lead scores are assumed.

To permit real submission, all of these must hold: hosted mode, non-private-preview site, exact origin `https://www.elixirehr.com`, and `VITE_ELIXIR_LEAD_SUBMISSION_ENABLED=true` at build time. The visitor must review the form, complete CAPTCHA and explicitly submit. Leave the flag false until one separately authorized test is confirmed in the CRM by the CRM owner. A thank-you redirect does not prove a lead was saved; the UI does not claim that it does.

There is no live calendar integration in this increment. A preferred demo time is a request, never a reservation. The team must supply its booking provider, owner/calendar and confirmation rules before adding actual meeting creation. Raw chats are not sent to Salesforce; the visitor-approved summary is the handoff.

## Deploying later

### Existing public team preview

The Azure app named `elixir-website-preview` also serves the live custom domain. Its **default/production environment must not be used for testing**. The existing named environment `latest` is the separate public team link: `https://thankful-mud-07aadb71e-latest.westus2.3.azurestaticapps.net`.

To sync a team preview, first verify the live deployed commit/artifact and fetch its current `staticwebapp.config.json` from the owning deployment checkout into a local scratch file. Then run `npm run build:team-preview -- <routing-config.json>`. This builds both client and SSR in preview mode, enables sample assistant replies, disables lead submission, preserves the live routing rules, removes production tracking from every HTML page, adds noindex metadata/headers and disallow robots policy, and adds a CSP blocking submissions and external script/connect targets. The artifact's `preview-info.json` records the live source baseline and feature revision.

That default build remains static and sample-only. For the authorized hosted team test, run `npm run build:team-preview -- <routing-config.json> --hosted`, then `node scripts/prepare-assistant-api.mjs`. The latter creates `work/team-preview-api` using an explicit runtime-file allowlist; **never deploy raw `api/`**, which may contain ignored local credentials. Package the clean API artifact alongside `dist/`. The hosted manifest records `apiIncluded=true`, Node 22 is selected and `/api/*` is excluded from the SPA fallback. The public widget says draft knowledge and requests disabled.

Deploy using the existing authenticated SWA CLI with explicit `--env latest`, the clean `--api-location`, `--api-language node --api-version 22`. Read any deployment credential directly into the deploy process environment; never write it to an artifact or command argument. Backend settings must be read, merged and written exclusively through the `/builds/latest` environment endpoint; preserve unrelated settings. After deployment verify anonymous page/deep-link/asset access, a real same-origin model reply and disabled forms, then recheck that live artifact hashes are unchanged.

Azure HTTP bindings live in `api/chat/function.json`, `api/chat/index.cjs` and `api/host.json`; the dependency-free handler is contained in `api/`. Use a supported Azure Functions Node runtime with native fetch (Node 20 or later; verify current Azure support before deployment). This uses the supported function.json programming model, not the `@azure/functions` registration model.

Deployment must package **both** `dist/` and `api/`; the existing static-only deployment process is not automatically sufficient. Verify the actual Azure host/API deployment path, route behavior and environment settings before release. Do not copy a bare upstream build over an approved protected preview configuration.

Groq admission control caps each API worker at four calls/minute, one concurrent call and 100 calls per rolling 24 hours. Worker restarts reset the counters; they are not a distributed or account-wide budget. Azure mode retains 30 calls/minute and four concurrent calls. Provider 429 responses become a sanitized retryable response with a bounded Retry-After header. The Groq account's quota is shared with the Case Rezolver demo. Before production enablement, configure deployment-level abuse controls and a monitored model budget, verify data processing settings, and review site privacy copy against the actual processing. Operational logs should not contain visitor messages, contacts or credentials.

The feature is on a separate local branch because the existing GOD process may deploy GitHub `main`. The authorized deployment targets the existing named team-test environment only. No workflow, scheduled task or production configuration is changed.

## Verification

```sh
npm run test:assistant
npm run lint
npm run build
```

`scripts/check-assistant-browser.mjs` checks the local sample flow at desktop/mobile widths, optional qualification, editable recap, original page attribution after navigation, Escape/focus restoration, no browser exceptions and zero model/CRM/calendar requests. It uses an independently installed Playwright package and browser: set `PLAYWRIGHT_MODULE_PATH` and `CHROME_EXECUTABLE` when those are not on the default resolution paths. `ASSISTANT_TEST_URL` and `ASSISTANT_SCREENSHOT_DIR` are optional overrides.

`scripts/check-assistant-hosted-browser.mjs` exercises the hosted UI against a controlled same-origin response fixture: a pending response while a draft is edited, adaptive/null qualification questions, contact refusal and subsequent explicit opt-in. Start a second local Vite instance with `VITE_ELIXIR_ASSISTANT_MODE=hosted` on port 5174 (or set `ASSISTANT_HOSTED_TEST_URL`). This test intercepts `/api/chat` and never calls an actual model.

These automated checks validate the adapter contract using controlled transports. Real Groq smoke checks use synthetic questions without patient or visitor data. CRM delivery and calendar availability are not enabled or verified by this integration.

Provider references: [Groq OpenAI compatibility](https://console.groq.com/docs/openai), [Groq GPT-OSS 20B](https://console.groq.com/docs/model/openai/gpt-oss-20b), [Groq shared rate limits](https://console.groq.com/docs/rate-limits), [encrypted SWA settings](https://learn.microsoft.com/en-us/azure/static-web-apps/application-settings), [managed Functions limitations](https://learn.microsoft.com/en-us/azure/static-web-apps/apis-functions), [Key Vault pricing](https://azure.microsoft.com/en-gb/pricing/details/key-vault/), [Azure chat REST contract](https://learn.microsoft.com/en-us/azure/foundry/openai/latest).
