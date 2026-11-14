# Elixir Sales Assistant Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Build the local sales-assistant preview and a configurable, server-side Azure-hosted model API adapter.

**Architecture:** A lazy React widget owns temporary conversation and contact state across route changes. A shared request/response contract supports an explicitly labeled local sample adapter and a separately configured Azure Functions `/api/chat` endpoint. Salesforce submission remains an explicit browser form action and is disabled in preview; scheduling remains a request until a real provider confirms it.

**Tech Stack:** Existing React/Vite/CSS Modules, native Node test runner and fetch, Azure Functions HTTP bindings. No model SDK or separate application database is needed for this increment.

**Spec:** `docs/superpowers/specs/2026-11-13-elixir-sales-assistant-design.md`

## Global Constraints

- User approved proceeding with the custom website assistant and hosted model API on November 13, 2026. Continue in the current dedicated feature branch; no production deployment, paid resource provisioning or real lead submission is part of this increment.
- Browser code never contains a model credential. Approved knowledge only in hosted mode; sample content is explicitly labeled and limited to local/preview mode.
- Existing shared forms' defaults and preview submission restrictions remain intact. Qualification and submission transitions are application-controlled.
- Preserve original product context without URL query strings/fragments. Do not persist raw conversations or contact details by default.
- Unknown facts, failed model requests and missing configuration never produce fabricated success, saved leads or confirmed meetings.

## Review Focus

- Visitor corrections, skipped questions and topic changes must not erase earlier explicit facts or repeat refused contact capture (Task 1).
- Malformed model JSON, fabricated citation IDs and overlong/hostile input must be rejected or safely normalized (Tasks 1–2).
- A production build with missing settings must never silently use sample answers or expose secrets (Tasks 2–3).
- Browser navigation, closing/reopening, retries and restarting during a pending request must preserve or reset state deliberately without stale responses (Task 3).
- Keyboard/mobile interaction and preview submission must work without creating a Salesforce lead or claiming a booking (Task 3).

---

### Task 1: Conversation contract, qualification state and sample knowledge

**Files:** Create `api/shared/contract.mjs`, `src/features/sales-assistant/conversation.mjs`, `src/features/sales-assistant/sample.mjs`, `tests/sales-assistant-state.test.mjs`.

**Interfaces:** `validateChatRequest(body)` returns bounded `{messages, qualification, skipped, sourcePath}` or throws a public validation error. `normalizeChatReply(value, sources)` returns `{answer, citations, qualification, nextField, intent}` using only recognized fields and trusted source URLs. `initialConversation(sourcePath)`, `conversationReducer(state,event)`, `buildLeadDescription(state)`, `nextQualificationField(qualification,skipped)`, `sampleReply(request)` are pure functions. Qualification keys: `organizationType`, `currentSystem`, `salesforceUsage`, `size`, `primaryNeed`, `timeline`; intent values: `explore`, `demo`, `support`, `decline`.

- [x] Write tests for request bounds, untrusted role/field rejection, citation filtering, explicit corrections and skipped fields, source-path sanitization, lead description, and deterministic sample follow-up behavior.
- [x] Run `node --test tests/sales-assistant-state.test.mjs`; confirm missing-feature failures.
- [x] Implement pure contracts, reducer and sample adapter. Reducer events explicitly distinguish pending request, success, failure, restart and visitor contact/qualification edits. A request generation ID prevents stale completion after restart.
- [x] Run the state tests and verify PASS.
- [x] Commit only Task 1 files.

### Task 2: Hosted model endpoint and local API runner

**Files:** Create `api/lib/knowledge.mjs`, `api/lib/hosted-model.mjs`, `api/lib/chat-handler.mjs`, `api/chat/index.cjs`, `api/chat/function.json`, `api/host.json`, `api/package.json`, `api/local.settings.example.json`, `scripts/assistant-api.mjs`, `tests/sales-assistant-api.test.mjs`; modify `.gitignore`.

**Interfaces:** `retrieveKnowledge(messages, entries)` returns approved relevant entries only. `createHostedModel({env,fetchImpl})` exposes `complete(request,sources)` using Azure's `/openai/v1/chat/completions` endpoint and a bounded timeout. `createChatHandler({env,fetchImpl,knowledge})` returns async handler `(body) => {status,body,headers}`; no secret/upstream-body logging or secret-bearing error responses. Function wrapper maps this to Azure HTTP context. Standalone runner listens on loopback for local integration checks.

- [x] Write tests for disabled/missing configuration, draft-only knowledge, input limits, invalid endpoint configuration, timeout/upstream failure sanitization, bounded context, grounded citation normalization and the real outgoing REST contract using an injected fetch transport.
- [x] Run `node --test tests/sales-assistant-api.test.mjs`; confirm missing-feature failures.
- [x] Implement retrieval, hosted transport and HTTP bindings. Gate paid calls with explicit server-side enablement; default knowledge collection is empty pending approval. Include conservative per-instance admission control but document that production requires deployment-level abuse controls.
- [x] Run both Node test files; verify PASS. Exercise the loopback HTTP runner with no configured model and confirm a useful unavailable response with no external call.
- [x] Commit only Task 2 files.

### Task 3: Accessible website widget and reviewable handoff

**Files:** Create `src/features/sales-assistant/AssistantLauncher.jsx`, `SalesAssistant.jsx`, `LeadReview.jsx`, `SalesAssistant.module.css`, `transport.mjs`, `tests/sales-assistant-client.test.mjs`, `scripts/check-assistant-browser.mjs`, `.env.example`, `docs/ELIXIR-SALES-ASSISTANT.md`; modify `src/layouts/MainLayout/MainLayout.jsx`, `src/components/forms/WebToLead/WebToLead.jsx`, `vite.config.js`, `package.json`.

**Interfaces:** Frontend `requestReply(request,{mode,signal})` validates the reply and chooses sample mode only in explicit local/preview configuration; hosted mode calls same-origin `/api/chat`. Launcher is off by default in production unless explicitly enabled with `VITE_ELIXIR_ASSISTANT_MODE=hosted`. `WebToLeadFields({sourceUrl})` adds an optional sanitized source override while preserving all defaults. Lead review uses existing CRM field names, editable qualification/contact summary, optional phone, explicit confirmation and current CAPTCHA. Submission additionally requires explicit release configuration and is blocked in sample/private preview.

- [x] Write transport/state tests for malformed response, network failure, mode safety and cancellation; run and confirm failure. Write a local browser flow check for missing launcher, keyboard use, sample multi-turn conversation, editable recap, route persistence and disabled external submissions; run before the widget exists and confirm the expected missing-widget failure.
- [x] Implement the lazy launcher, accessible dialog, transcript with plain text/trusted links, progressive qualification controls, error/retry flow and editable review. Keep long histories bounded for API requests while retaining visitor-visible conversation in temporary state.
- [x] Configure local Vite proxy for the optional loopback API, test/dev scripts, sample/hosted settings and operational instructions. Document actual provider config, content approval, deployment requirements and remaining real-service verification steps.
- [x] Run all Node tests, `npm run lint`, `npm run build`, and local browser checks at desktop/mobile widths. Inspect screenshots and browser console; verify sample mode makes no external model/CRM/calendar requests.
- [x] Commit Task 3 files; mark plan complete with evidence. Dispatch one independent whole-branch reviewer, fix material findings with focused regression tests, then provide local preview instructions and the remaining live configuration inputs. Do not merge, push or deploy.
