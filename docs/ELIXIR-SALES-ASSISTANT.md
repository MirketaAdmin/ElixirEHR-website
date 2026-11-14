# Elixir sales assistant

This branch adds a custom visitor assistant, temporary qualification state, editable demo-request recap and an Azure-hosted model API adapter. Live services are not activated by installing or building the branch.

## Try the local preview

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm run dev -- --host 127.0.0.1
```

Open the local site and choose **Ask Elixir**. Development defaults to explicitly labeled sample replies. Product questions, optional qualification, skipping, contact refusal, editable contact/request recap, navigation and restart can be exercised. The preview never sends a model call, CRM submission or booking. It holds conversation/contact state in memory and clears it on refresh. Back/reopen and pending replies preserve contact drafts. A visitor may request a demo after previously declining contact. That preference is included in bounded model context, so history trimming does not erase it.

Production builds default to the assistant being off, including on private-preview hosts. `VITE_ELIXIR_ASSISTANT_MODE=sample` does not enable sample replies on the public production host. When explicitly enabled on a private-preview mode/host, the widget uses sample replies. `VITE_ELIXIR_ASSISTANT_MODE=off` disables the widget everywhere. A hosted production build must explicitly use `VITE_ELIXIR_ASSISTANT_MODE=hosted`.

## Hosted model adapter

The browser calls same-origin `POST /api/chat`; credentials never enter the browser bundle. The API uses the Azure-hosted v1 chat-completions REST contract with structured JSON replies. The model deployment must support JSON-object responses and `max_completion_tokens`. No particular model is selected or provisioned by this branch.

Required server-side application settings:

- `ASSISTANT_ENABLED=true` — explicit enablement; absent/false disables the endpoint.
- `AZURE_OPENAI_ENDPOINT` — HTTPS resource root on `*.openai.azure.com` or `*.services.ai.azure.com`.
- `AZURE_OPENAI_DEPLOYMENT` — the actual compatible deployment name.
- `AZURE_OPENAI_API_KEY` — the resource credential, entered through the approved secret/application-settings workflow. Never place it in a `VITE_` variable, command argument, document or chat.

`api/local.settings.example.json` gives the Azure Functions settings shape. Actual local settings and environment files are ignored by Git. For the standalone loopback runner, supply settings securely through the environment (or an ignored Node environment file) and use `npm run assistant:api`. The Vite dev server proxies `/api/chat` to `127.0.0.1:7071`. `ASSISTANT_API_PORT` may override the standalone listener; update the local proxy to match if needed.

Without complete configuration the handler returns an unavailable response, not a sample answer. Provider errors and credentials are not returned or logged. The request is bounded to 24 messages, 2,000 characters per user message and 18,000 total conversation characters; requests over 32 KB are rejected. The model call times out after 20 seconds. The browser sends recent bounded context plus structured qualification, while displaying the complete temporary conversation.

## Approved knowledge

The production collection is `api/lib/knowledge.mjs`. It is deliberately empty until the product owner supplies and approves content. Each entry needs `id`, `status: 'approved'`, `owner`, `reviewedAt` (`YYYY-MM-DD`), `title`, HTTPS `url` and `content` (up to 3,000 characters). Keep draft entries marked `draft`; they are never retrieved. The initial retriever ranks approved entries by recent conversational terms and sends up to four passages. Replace the retrieval adapter when corpus scale or evaluation results justify it.

Existing FAQs can seed draft entries but are not automatically approved. No custom model training is involved. Only source IDs from retrieved entries can become visible links. Qualification extraction is restricted to literal text from the latest visitor message; the review form remains authoritative before any submission.

## CRM and demo requests

The assistant reuses `src/data/webToLead.js` and the existing native Salesforce form/CAPTCHA contract. Shared forms retain their current behavior. The new optional `sourceUrl` override in `WebToLeadFields` preserves a sanitized original product-page URL; arbitrary query strings/fragments are excluded from assistant attribution.

Assistant contact fields are first name, last name, work email and organization, with optional phone and role. Qualification and preferred time/timezone are included in an editable `description`. No new Salesforce custom fields or lead scores are assumed.

To permit real submission, all of these must hold: hosted mode, non-private-preview site, exact origin `https://www.elixirehr.com`, and `VITE_ELIXIR_LEAD_SUBMISSION_ENABLED=true` at build time. The visitor must review the form, complete CAPTCHA and explicitly submit. Leave the flag false until one separately authorized test is confirmed in the CRM by the CRM owner. A thank-you redirect does not prove a lead was saved; the UI does not claim that it does.

There is no live calendar integration in this increment. A preferred demo time is a request, never a reservation. The team must supply its booking provider, owner/calendar and confirmation rules before adding actual meeting creation. Raw chats are not sent to Salesforce; the visitor-approved summary is the handoff.

## Deploying later

Azure HTTP bindings live in `api/chat/function.json`, `api/chat/index.cjs` and `api/host.json`; the dependency-free handler is contained in `api/`. Use a supported Azure Functions Node runtime with native fetch (Node 20 or later; verify current Azure support before deployment). This uses the supported function.json programming model, not the `@azure/functions` registration model.

Deployment must package **both** `dist/` and `api/`; the existing static-only deployment process is not automatically sufficient. Verify the actual Azure host/API deployment path, route behavior and environment settings before release. Do not copy a bare upstream build over an approved protected preview configuration.

Admission control currently caps each API worker at 30 model calls/minute and four concurrent calls. This is not a distributed/public abuse-control boundary. Before public enablement, configure deployment-level rate/abuse controls and a monitored model budget, verify the selected model's data processing settings, and review site privacy copy against the actual processing. Operational logs should not contain visitor messages, contacts or credentials.

The feature is on a separate local branch because the existing GOD process may deploy GitHub `main`. No workflow, scheduled task, cloud resource or production configuration was changed.

## Verification

```sh
npm run test:assistant
npm run lint
npm run build
```

`scripts/check-assistant-browser.mjs` checks the local sample flow at desktop/mobile widths, optional qualification, editable recap, original page attribution after navigation, Escape/focus restoration, no browser exceptions and zero model/CRM/calendar requests. It uses an independently installed Playwright package and browser: set `PLAYWRIGHT_MODULE_PATH` and `CHROME_EXECUTABLE` when those are not on the default resolution paths. `ASSISTANT_TEST_URL` and `ASSISTANT_SCREENSHOT_DIR` are optional overrides.

`scripts/check-assistant-hosted-browser.mjs` exercises the hosted UI against a controlled same-origin response fixture: a pending response while a draft is edited, adaptive/null qualification questions, contact refusal and subsequent explicit opt-in. Start a second local Vite instance with `VITE_ELIXIR_ASSISTANT_MODE=hosted` on port 5174 (or set `ASSISTANT_HOSTED_TEST_URL`). This test intercepts `/api/chat` and never calls an actual model.

These checks validate the adapter contract using a controlled transport, not real Azure inference, CRM delivery or calendar availability. Those require the separately configured services and their explicit integration checks.

Provider references: [Azure chat REST contract](https://learn.microsoft.com/en-us/azure/foundry/openai/latest), [Azure Static Web Apps APIs](https://learn.microsoft.com/en-us/azure/static-web-apps/apis-overview), [Functions Node programming models](https://learn.microsoft.com/en-us/azure/azure-functions/functions-reference-node).
