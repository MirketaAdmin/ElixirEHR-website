# Elixir visitor sales assistant — proposed design

Status: approved for implementation by the user's November 13, 2026 direction to proceed with the hosted model API. Production release and external-service activation remain separate integration gates.

## Intent and confirmed scope

Shruti clarified that the website assistant should collect visitor details, ask relevant questions about their current setup, help turn the visitor into a prospect, and arrange demos or booking requests. The user selected a custom website assistant integrated with the existing Azure website and Salesforce rather than a managed chatbot platform.

The intended audience is people evaluating Elixir for their organization. The assistant should answer useful questions before asking for contact details, understand follow-up questions, and give the sales team enough context to follow up without starting the conversation again.

## Existing implementation

- React 19, React Router and Vite; static pages are prerendered. The checkout has no implemented model API, chat service or application database.
- `src/layouts/MainLayout/MainLayout.jsx` supplies the common layout and is the site-wide integration point.
- `src/data/` contains structured page copy and FAQ collections. This is candidate knowledge, not blanket approval of every product claim.
- `src/routes/aliases.js` redirects `/request-demo/` and `/product-tour/` to `/contact-us/#contact`. There is no calendar availability lookup or meeting creation integration.
- `src/data/webToLead.js` maps first name, last name, email, phone, company and description to the existing Salesforce Web-to-Lead endpoint. The browser submits the form with reCAPTCHA and source-page information.
- The ROI request form demonstrates placing qualification context into Salesforce's `description`. New Salesforce custom fields are not required for an initial handoff.
- A redirect to `/thank-you/` is not a verified Salesforce lead receipt. The browser currently receives no lead ID.
- Existing preview behavior disables form submissions. It must continue to do so.

## Approaches considered

1. **Custom website assistant, selected by the user.** Reuse the current React site, establish a server-side conversation endpoint, and reuse the Salesforce lead contract. This permits control over branding, qualification behavior and handoff. The team owns the implementation and operational configuration.
2. **Managed chatbot platform.** Embed an agent configured in a separate platform and connect its knowledge and sales tools. This would bring separate platform administration and licensing decisions. It was not selected.

## Proposed visitor experience

1. A visitor opens the assistant from any page. It offers help with Elixir, selecting a relevant solution or requesting a demo. It explains that it is an automated assistant.
2. It answers the visitor's immediate question using approved product information and relevant links. Contact details are not a prerequisite to getting a product answer.
3. As the conversation develops, it asks one relevant question at a time. It remembers answers already provided, allows corrections and follows topic changes instead of restarting a questionnaire.
4. It asks about organization type, current systems, primary problem, approximate organization size and implementation timing only where those facts are useful to the conversation. Questions are skippable.
5. When the visitor wants follow-up, it collects contact details and shows an editable recap of the details and qualification summary. A visible form and an explicit visitor action control submission; the model cannot silently create a lead.
6. It hands the visitor to the configured demo path. Initially that is a demo **request** through the existing Salesforce flow. It claims a confirmed meeting only when an integrated scheduler has actually confirmed it.

Example proposed flow: a behavioral health visitor asks about replacing their EHR; the assistant explains relevant approved capabilities, asks what they use today and their main difficulty, learns the number of locations and intended timing, then offers to send those details with a demo request. These questions and phrasing are design proposals, not a sales policy approved by Shruti.

## Qualification and contact data

Candidate qualification fields: organization type/specialty, current EHR or practice-management software, whether Salesforce is used, approximate provider/location count, main need, implementation timing and product interests. Include only information volunteered or answered by the visitor; unknown values remain unknown.

Contact fields use the existing CRM mapping: first name, last name, work email, company and phone. Role/title and qualification answers can be included in the description. Proposed assistant behavior makes phone optional; the existing shared form's validation is not to be changed globally. The assistant's handoff will use its own explicit field requirements.

The recap includes the originating product page, explicitly selected interests, visitor-supplied contact details, the agreed summary and any preferred demo time with timezone. The assistant must preserve original product context even if the visitor subsequently navigates to Contact Us. Capture the originating page without arbitrary URL query strings or fragments; pass that known page URL to the handoff rather than replacing it with the final form's URL.

Proposed first-version qualification is descriptive. There is no invented lead score, automatic rejection rule, pricing quote or promise of product fit. Sales owners can define scoring and routing later.

## Knowledge and answer behavior

- Maintain a versioned knowledge collection with question/topic, approved answer, supporting URL/document, content owner, review date and `draft`/`approved` status.
- Shruti's Q&A list and existing FAQs seed a draft collection. Extracted website copy is not automatically approved.
- The production answer path uses approved entries only. Local preview fixtures are clearly marked sample content and never presented as approved facts.
- Retrieve relevant approved passages and pass them, the current question and bounded conversation context to the model. Updating knowledge does not require training a new model.
- Answers link to supporting sources. Unsupported capability, certification, pricing and timeline questions get an honest limitation and sales handoff rather than an invented answer.
- The assistant follows up on visitor needs but does not repeatedly push contact capture after refusal. Existing-customer support requests are directed to an approved support destination rather than treated as new sales leads.

## Application shape

Proposed implementation choices, subject to this design's approval:

- A lazily loaded React widget attached through the shared layout, with a mobile layout, accessible name, keyboard controls, focus restoration and clear pending/error/retry states.
- A small conversation-state layer keeps messages, qualification facts and the editable recap in memory for the current page session. The widget survives client-side navigation. Refresh starts a new conversation in the first version; cross-device or long-term transcript continuity is not included.
- A server-side `/api/chat` contract handles model access, approved-knowledge retrieval, input limits, bounded context and structured response validation. Provider secrets remain server-side. Browser code never contains a model credential.
- Use a provider adapter. The first local milestone uses a deterministic sample adapter and the same API contract as the live adapter. This exercises the intended flow without provisioning services or pretending sample replies are live model output.
- The production candidate is an Azure-hosted model endpoint behind an Azure Functions chat API. The specific model deployment and hosting configuration must be verified before integration; this proposal does not assume the account already has model access or authorize paid resources.
- Submission and booking transitions are application-controlled. Model output may suggest an intent or next question; it is not permission to execute a CRM or calendar action.

## Salesforce handoff and booking

For the initial integration, reuse the established browser Web-to-Lead contract with an editable summary, validation, existing reCAPTCHA and explicit submission. Keep source attribution, qualification context and contact fields intact. Any new configurable behavior must preserve current forms' defaults.

The UI describes the transition as submitting a request to Salesforce. It must not assert a saved lead, sales assignment, email receipt or confirmed appointment based solely on a redirect. A production readiness check must verify one explicitly authorized test submission in Salesforce through an appropriate authorized account or administrator confirmation. That verification is not permission to submit tests now.

After the sales owner supplies an approved scheduling URL or service, integrate it through a booking adapter. The implementation must account for timezone and availability before claiming a meeting. Until then, preferred times are request notes for the sales team, not reserved slots. Anonymous visitors do not receive access to internal staff calendars or CRM records.

An authenticated server-side Salesforce API integration could later provide stronger receipt and duplicate controls. It is a separate integration decision, not silently added as a requirement for the local milestone.

## Storage decision

No separate database is required for the first local milestone. Knowledge lives in versioned files, conversation state is temporary, and submitted prospect details use Salesforce as the system of record. This meets the selected architecture without selecting a database before its purpose is known.

Persistent raw transcripts, analytics, resumable conversations and an administrative knowledge editor are later decisions. If requested, choose storage and retention rules explicitly; do not begin retaining full chats by default. Keep operational logs free of visitor messages and contact details. A production rate limiter may use managed shared storage; that does not imply retaining conversations.

## Milestones and release boundaries

### 1. Reviewable local preview

Build the accessible widget, conversation/qualification state, sample knowledge adapter, editable contact recap and non-submitting Salesforce/booking handoff. Use sample visitors. The preview visibly identifies sample replies and disabled external submission. Do not install dependencies or write product code before approval of this design.

### 2. Real answers and verified lead delivery

Add approved knowledge and a configured server-side model. Verify the deployment method can deploy the API along with the static website; static-only deployment is insufficient. Set appropriate input/rate limits, timeouts, context bounds and non-PII operational monitoring. Check the actual Azure API constraints before choosing streaming or long-running requests. Verify an authorized CRM receipt test and recovery behavior before enabling visitor submission.

### 3. Calendar connection and release

Connect the sales team's chosen booking service when available; otherwise retain the clearly described demo-request path. Review the complete user experience and content, check privacy copy for the actual processing/retention behavior, and obtain the user's production-release direction. No push to `main`, production deployment, cloud provisioning, messages to the team or live leads are part of the design-preparation step. The existing GOD deployment process may deploy `main`, so development and review belong on a separate branch.

## Acceptance criteria

- Multi-turn questions retain relevant context; changing a fact updates the recap and avoids asking it again unnecessarily.
- Qualification questions follow the visitor's stated needs; a visitor may skip them and still receive an answer.
- Unknown product facts produce a limitation and relevant handoff; draft content is not used for production answers.
- Contact capture includes review/correction and a deliberate submit action. A failed or unverified handoff never produces a false lead/booking confirmation.
- Original product interest survives site navigation and is present in the lead handoff.
- Mobile and keyboard users can open, use, close and return focus from the widget; existing navigation and forms continue working.
- Retry, timeout, missing model configuration and unavailable booking paths have useful behavior.
- Local sample mode sends no model request, Salesforce lead, email or calendar booking.
- Relevant state/contract tests, source lint, production build and browser checks verify behavior. Visual-only details do not need tests that merely mirror their markup.

## External inputs and remaining integration gates

Needed for production, not to begin the approved local milestone:

- Shruti/product-owner approval of knowledge and commercial claims, plus a real support destination.
- Authorized model endpoint configuration and a confirmed usage budget.
- Sales/CRM owner confirmation of required contact fields, routing, receipt verification and whether description-based qualification is acceptable.
- The team's booking provider/link and its availability, meeting ownership, duration and confirmation rules for actual appointment booking.
- A decision on any persistent transcript retention, analytics or administrative content editing, if those are requested later.

Builder may settle component/file organization, small visual details consistent with `DESIGN-SYSTEM.md`, fixture wording, retrieval mechanics for the small initial knowledge collection and test-tool choices. Do not turn any unspecified product fact, cost, external authorization or meeting rule into an assumption.
