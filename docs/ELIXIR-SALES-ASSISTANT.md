# Elixir sales assistant

This branch adds a custom visitor assistant ("Ask Elixir"), temporary qualification state, editable demo-request recap and server-side Groq/Azure model adapters. Installing or building the branch does not activate external services.

On the public site the assistant behaves as a consultative Elixir specialist: it answers from approved site knowledge, asks one sharp qualifying question at a time (provider type and setting, size, current system, top pain, timeline), and after it has helped, or on clear buying intent, recommends booking a discovery call. The handoff is a **Book a discovery call** link to `https://www.elixirehr.com/contact-us/` (same tab); in-chat lead submission stays off in production.

## Going live on www.elixirehr.com

Build the production site with these Vite variables (build time, public, never secrets):

| Variable | Value | Effect |
| --- | --- | --- |
| `VITE_ELIXIR_ASSISTANT_MODE` | `hosted` | Shows the launcher and calls same-origin `/api/chat`. Use `off` as the kill switch (no launcher anywhere; the open event then sends visitors to Contact Us). Absent means off in production. |
| `VITE_ELIXIR_LEAD_SUBMISSION_ENABLED` | absent or `false` | Keeps the in-chat request form off. The discovery-call link is the production handoff. |
| `VITE_ELIXIR_HOSTED_PREVIEW_ENABLED` | absent | Only for the `latest` team preview. |

Set these Static Web Apps application settings on the **production** environment (encrypted backend settings; never in a `VITE_` variable, file or command argument):

| Setting | Value |
| --- | --- |
| `ASSISTANT_ENABLED` | `true` (absent or anything else returns a sanitized 503, and the widget shows the discovery-call fallback) |
| `ASSISTANT_PROVIDER` | `groq` or `azure` (default `azure`) |
| `GROQ_API_KEY`, `GROQ_MODEL` | when `groq`; `GROQ_MODEL=openai/gpt-oss-20b` is the tested model |
| `AZURE_OPENAI_ENDPOINT`, `AZURE_OPENAI_DEPLOYMENT`, `AZURE_OPENAI_API_KEY` | when `azure` |
| `ASSISTANT_KNOWLEDGE_MODE`, `ASSISTANT_REVIEW_ENVIRONMENT` | **absent** in production, so only the approved collection in `api/lib/knowledge.mjs` is used |
| `ASSISTANT_CLIENT_ADDRESS_SOURCE` | **absent** (`auto`, verified below: the second-to-last `x-forwarded-for` hop) |

Deploy `dist/` together with the clean API artifact from `node scripts/prepare-assistant-api.mjs` (Node 22, `/api/*` excluded from the SPA fallback), exactly as for the hosted preview below but against the production environment. A build made with `VITE_ELIXIR_ASSISTANT_MODE=hosted` runs hosted on any host that is not a preview host (`*.azurestaticapps.net`): `www.elixirehr.com`, the bare `elixirehr.com`, another custom domain, or `localhost` serving `dist/`. The resolver does not check the production hostname, so build with `hosted` only for the production deployment. Preview hosts keep their existing sample/`latest` behaviour; in-chat lead submission separately requires the exact origin `https://www.elixirehr.com` (see below). To switch the assistant off quickly, set `ASSISTANT_ENABLED=false` (immediate, widget shows the Contact Us fallback) or rebuild with `VITE_ELIXIR_ASSISTANT_MODE=off` (removes the launcher).

### Verify the client address headers (done 2026-11-19)

The per-client limit is only as good as the address it reads. If it read an edge or proxy hop, every visitor would share one bucket and the whole site would be held to 20 messages per 10 minutes and 60 per day.

**Result, measured once on the hosted `latest` preview on 2026-11-19:**

```
x-azure-clientip=absent; x-client-ip=absent; x-forwarded-for-entries=2; x-forwarded-for-hops=public-v4+port,public-v4+port; probe-match=-2
with a spoofed X-Forwarded-For: 203.0.113.9 ->
x-azure-clientip=absent; x-client-ip=absent; x-forwarded-for-entries=3; x-forwarded-for-hops=public-v4,public-v4+port,public-v4+port; probe-match=-2
```

The edge keeps whatever `x-forwarded-for` the client sent, then appends the visitor address and its own hop, so the visitor is always the **second-to-last** hop (`probe-match=-2`: the tester's own public address, sent in `x-elixir-address-probe`, matched that hop; no address is ever echoed). `auto` reads only that second-to-last hop and never `x-azure-clientip` (the edge does not send it, so a client could set its own), so production needs no `ASSISTANT_CLIENT_ADDRESS_SOURCE` setting. The first hop is client-controlled and the last hop is the edge, so `forwarded-first` and `forwarded-last` must not be used here.

Other values for `ASSISTANT_CLIENT_ADDRESS_SOURCE`: `azure-clientip`, `client-ip`, `forwarded-first`, `forwarded-last`, `forwarded-second-last`, `off` (per-client limit disabled; the per-worker caps and the browser session cap remain).

## Discovery-call handoff and fallbacks

- A slim **Book a discovery call** bar is always visible at the top of the open assistant.
- A highlighted discovery card appears after a demo/pricing intent, once the assistant has answered three visitor messages, when the visitor reaches the session message cap, and whenever the model is unavailable, disabled, rate limited or errors. Every error message is paired with the same link, so there is no dead end. After a visitor declines contact the link stays available but is not pushed.
- Previews and local development keep the editable demo-request recap (`Request a demo`, `Keep exploring`) so the existing review flow can still be tested; it never submits there.

## Cost controls

- **Per visitor session:** the widget allows 12 visitor messages per browser session (sessionStorage, with an in-memory fallback; **Start over** does not reset it). After that the composer is disabled and the discovery card explains the next step; no further model calls are made.
- **Per client address (server):** 20 model-backed messages per 10 minutes and 60 per 24 hours for each address, in a bounded in-memory map (5,000 most recently seen addresses) per API worker. By default (`ASSISTANT_CLIENT_ADDRESS_SOURCE` absent or `auto`) the address is the second-to-last `x-forwarded-for` hop (the only hop when there is one), the visitor address the edge appends; client-supplied hops and a client-sent `x-azure-clientip` are ignored. An operator can pick `azure-clientip`, `client-ip`, `forwarded-first`, `forwarded-last`, `forwarded-second-last` or `off` instead (see **Verify the client address headers**). The per-worker caps are checked first, so a call the worker turns away as busy does not use up the visitor's allowance, and calls the limiter itself rejects are not counted. Over the limit the API returns a sanitized 429 with `Retry-After`; requests without an identifiable address are left to the per-worker caps.
- **Per worker:** every provider has a daily cap. Groq: four calls/minute, one concurrent, 100/day. Azure: 30/minute, four concurrent, and `ASSISTANT_AZURE_DAILY_CAP` calls per day (a positive whole number; default 300; an invalid value falls back to 300). A full daily cap returns the sanitized 429 with `Retry-After: 3600`.
- Greetings with no matching knowledge are answered from a small grounded fallback (platform overview, discovery call and, with page context, the matching product pages) rather than a full retrieval set. Visitor text is never logged.

The Home page funnel's inline answers (below) go through the same `/api/chat` and the same browser session budget, so they are bounded by all of these. All three are per instance and reset on restart; they bound accidental and casual cost, not a determined attacker. A monitored provider budget remains the account-level backstop.

## Inline answers in the Home page funnel

The "What kind of provider are you?" section right below the Home banner (`src/pages/Home/sections/ProviderFunnelSection/`, `src/features/provider-funnel/`) walks a visitor through four static steps: their world, what they need, why Elixir fits, and the next step. The steps themselves cost nothing. Two optional, visitor-started model calls sit on top, both handled by `src/features/provider-funnel/inlineAssistant.mjs`:

- **Tailored answer (Why Elixir step).** **Tailor this to my practice with Elixir AI** sends the funnel's composed prompt (`composeAssistantPrompt` in `funnelLogic.mjs`: the provider type's intro plus the picked needs) once to `/api/chat`, with the provider type as page context and `/` as the source page. The answer, with its sources, appears under the static points, which stay visible. Going back and forward does not resend; changing the picked needs offers the button again for the new prompt.
- **Question box (Next step).** A small **Ask Elixir AI a question about your practice** box answers free-form questions inline. Each question carries the earlier inline turns (including the tailored exchange) as context, built by the assistant's own `chatRequest`, so the persona prompt is not duplicated anywhere. The modal assistant (**Ask Elixir a question**, the floating launcher) works as before.
- **Caps.** Each inline call uses one message of the same 12-per-session browser budget as the modal (`discovery.mjs`, sessionStorage key `elixir-assistant-visitor-messages`), and then passes the per-client and per-worker caps above.
- **Fallbacks.** When the assistant is built `off`, the AI controls are not shown; the static points stay and a **Book a discovery call** link takes their place. When a request fails, the points stay and the error is paired with the discovery link and a retry (a failed question stays in the box). When the session budget is spent, nothing is sent; the discovery link replaces the button and the question box.
- **Discovery call on every step.** Steps 1 to 3 show a subtle **Book a discovery call** link; the last step keeps the primary button. All go to https://www.elixirehr.com/contact-us/.
- **What is stored.** Nothing server-side except the in-memory per-address and per-worker counters above, which reset on restart. Visitor text is not logged or saved. In the browser, sessionStorage holds only the visitor message count (`elixir-assistant-visitor-messages`) and the launcher's play-once pulse flag (`elixir-assistant-pulsed`); the inline conversation lives in page memory and is gone on reload, **Start over** or a new provider type. Visitor messages are sent to the configured model provider to produce the answer and are not stored by the site.

The mode comes from the same build setting as the floating assistant (`src/features/sales-assistant/assistantMode.js`), so both switch on and off together.

## Opening the assistant from any page

Any code on the site can open the assistant:

```js
window.dispatchEvent(new CustomEvent('elixir:open-assistant', { detail: { providerType: 'treatment-center', prompt: null } }));
```

`providerType` is one of `online-behavioral-health`, `treatment-center`, `cybhi`, `homecare`, `specialty-clinic`, or `null`; unknown values are ignored. `prompt` is an optional first visitor message: it prefills the input and is never sent automatically. The assistant opens, focuses its input, tailors an untouched greeting, and sends the provider type to the API as page context (a hint, never a visitor-stated qualification fact) and into the demo recap. `openAssistant()` and `listenForOpenAssistant()` in `src/features/sales-assistant/openAssistant.mjs` wrap the same event. The listener is registered after hydration; when the assistant is built `off`, the event sends the visitor to the Contact Us page.

## Try the local preview

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm run dev -- --host 127.0.0.1
```

Open the local site and choose **Ask Elixir**. Development defaults to explicitly labeled sample replies. Product questions, optional qualification, skipping, contact refusal, editable contact/request recap, navigation and restart can be exercised. The preview never sends a model call, CRM submission or booking. It holds conversation/contact state in memory and clears it on refresh. Back/reopen and pending replies preserve contact drafts. A visitor may request a demo after previously declining contact. That preference is included in bounded model context, so history trimming does not erase it.

Production builds default to the assistant being off, including on private-preview hosts. `VITE_ELIXIR_ASSISTANT_MODE=sample` does not enable sample replies on the public production host. Preview hosts use sample replies unless a hosted build also sets `VITE_ELIXIR_HOSTED_PREVIEW_ENABLED=true` and runs on the exact existing `latest` hostname below. `PRIVATE_PREVIEW` remains true for that exception, so CRM and other form submissions remain disabled. `VITE_ELIXIR_ASSISTANT_MODE=off` disables the widget everywhere. A hosted production build must explicitly use `VITE_ELIXIR_ASSISTANT_MODE=hosted`.

## Hosted model adapter

The browser calls same-origin `POST /api/chat`; credentials never enter the browser bundle. The API supports Groq and Azure v1 chat-completions with validated JSON replies. Groq GPT-OSS 20B/120B use strict JSON-schema responses with required, closed objects and nullable unknown qualification fields. This replaces JSON-object mode, which was observed returning Groq HTTP400 `tool_use_failed` for a clinic licensing question with no tools configured. Azure and other Groq models retain JSON-object mode. The selected model must support its configured response format and `max_completion_tokens`. Timeouts, output-length bounds and failure handling still apply.

Clinic headcount does not establish a license count. When approved licensing rules are unavailable, the assistant must ask which staff roles need access and explain that the Elixir team confirms licensing; it must not assume one license per employee or provider.

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

The production collection is `api/lib/knowledge.mjs`: 21 entries condensed only from copy already on the site (platform overview, EHR, RCM, AI-assisted billing, behavioral health, addiction treatment, treatment centers, mental health, telehealth, EVV, the caregiver app, Salesforce Field Service EVV, patient portal, Kratu AI, HIPAA/BAA, security and ONC certification, outpatient clinics, small practices, aesthetic practices, student health/CYBHI and the discovery call). Each records its `sourceFile`, owner `Elixir marketing (approved on merge to main)` and `reviewedAt` `2026-11-19`; approval is given by merging to main. Tests check every URL is a real route in `src/App.jsx`, every source file exists, content stays within 3,000 characters and no prices are quoted. When a page changes, update its entry in the same change. Each entry needs `id`, `status: 'approved'`, `owner`, `reviewedAt` (`YYYY-MM-DD`), `title`, HTTPS `url` and `content` (up to 3,000 characters). Drafts are excluded by default. The explicit two-setting `latest` review mode loads `api/lib/review-knowledge.mjs`, small draft summaries with source-file provenance from the current live baseline. The date there records capture, not approval. The UI and model instructions identify this mode as a team test. The retriever scores recent visitor messages against titles, content and per-entry keywords (ignoring stop words), boosts pages that match the page context, and sends up to four passages, with a small grounded fallback for greetings and qualification-only turns.

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

Groq admission control caps each API worker at four calls/minute, one concurrent call and 100 calls per rolling 24 hours. Azure mode allows 30 calls/minute, four concurrent calls and `ASSISTANT_AZURE_DAILY_CAP` (default 300) calls per rolling 24 hours. Worker restarts reset the counters; they are not a distributed or account-wide budget. Provider 429 responses become a sanitized retryable response with a bounded Retry-After header. The Groq account's quota is shared with the Case Rezolver demo. Before production enablement, configure deployment-level abuse controls and a monitored model budget, verify data processing settings, and review site privacy copy against the actual processing. Operational logs should not contain visitor messages, contacts or credentials.

The feature is on a separate local branch because the existing GOD process may deploy GitHub `main`. The authorized deployment targets the existing named team-test environment only. No workflow, scheduled task or production configuration is changed.

## Verification

```sh
npm test            # every tests/*.test.mjs
npm run lint
npm run build
```

`npm run test:funnel-browser` (`scripts/check-funnel-browser.mjs`) checks the Home page funnel in a headless browser: it starts its own local Vite servers in hosted mode and off mode (or uses `FUNNEL_TEST_URL` and `FUNNEL_OFF_TEST_URL`), picks each of the five provider types, steps through all four steps, checks the discovery-call link on every step, the one-time tailored answer and the inline question box against a mocked `/api/chat`, the error and session-limit fallbacks, and the off-mode fallback. It never calls a model. It uses the same independently installed Playwright as below (`PLAYWRIGHT_MODULE_PATH`, `CHROME_EXECUTABLE`); screenshots go to `work/funnel-check` (`FUNNEL_SCREENSHOT_DIR`).

`tests/golden/provider-questions.json` holds 10 agent-written provider-type questions with expected traits (recommends a discovery call, exactly one follow-up question, cites reviewed knowledge, no invented prices or URLs); they await owner review (`tests/golden/README.md`). `npm run eval:provider-questions` scores them against a live `/api/chat` only when `ELIXIR_EVAL_URL` is set, and skips at no cost otherwise.

`scripts/check-assistant-browser.mjs` checks the local sample flow at desktop/mobile widths, optional qualification, editable recap, original page attribution after navigation, Escape/focus restoration, no browser exceptions and zero model/CRM/calendar requests. It uses an independently installed Playwright package and browser: set `PLAYWRIGHT_MODULE_PATH` and `CHROME_EXECUTABLE` when those are not on the default resolution paths. `ASSISTANT_TEST_URL` and `ASSISTANT_SCREENSHOT_DIR` are optional overrides.

`scripts/check-assistant-hosted-browser.mjs` exercises the hosted UI against a controlled same-origin response fixture: a pending response while a draft is edited, adaptive/null qualification questions, contact refusal and subsequent explicit opt-in. Start a second local Vite instance with `VITE_ELIXIR_ASSISTANT_MODE=hosted` on port 5174 (or set `ASSISTANT_HOSTED_TEST_URL`). This test intercepts `/api/chat` and never calls an actual model.

These automated checks validate the adapter contract using controlled transports. Real Groq smoke checks use synthetic questions without patient or visitor data. CRM delivery and calendar availability are not enabled or verified by this integration.

Provider references: [Groq OpenAI compatibility](https://console.groq.com/docs/openai), [Groq strict structured responses](https://console.groq.com/docs/structured-outputs), [Groq GPT-OSS 20B](https://console.groq.com/docs/model/openai/gpt-oss-20b), [Groq shared rate limits](https://console.groq.com/docs/rate-limits), [encrypted SWA settings](https://learn.microsoft.com/en-us/azure/static-web-apps/application-settings), [managed Functions limitations](https://learn.microsoft.com/en-us/azure/static-web-apps/apis-functions), [Key Vault pricing](https://azure.microsoft.com/en-gb/pricing/details/key-vault/), [Azure chat REST contract](https://learn.microsoft.com/en-us/azure/foundry/openai/latest).
