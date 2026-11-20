import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createChatHandler } from '../api/lib/chat-handler.mjs';
import { approvedKnowledge, retrieveKnowledge, fallbackKnowledge, isUsableEntry } from '../api/lib/knowledge.mjs';
import { reviewKnowledge } from '../api/lib/review-knowledge.mjs';
import { addressHeaderDiagnostic, clientAddress, clientAddressSource, createClientLimiter } from '../api/lib/client-limit.mjs';
import { DISCOVERY_URL, PROVIDER_TYPES, validateChatRequest } from '../api/shared/contract.mjs';
import { chatRequest, conversationReducer, initialConversation, buildLeadDescription, welcomeFor, WELCOME } from '../src/features/sales-assistant/conversation.mjs';
import { createSessionBudget, discoveryCta, MAX_VISITOR_MESSAGES } from '../src/features/sales-assistant/discovery.mjs';
import { OPEN_ASSISTANT_EVENT, PROVIDER_TYPE_IDS, listenForOpenAssistant, openAssistant, parseOpenAssistantDetail } from '../src/features/sales-assistant/openAssistant.mjs';
import { resolveAssistantMode } from '../src/features/sales-assistant/transport.mjs';

const env = { ASSISTANT_ENABLED: 'true', AZURE_OPENAI_ENDPOINT: 'https://example.openai.azure.com', AZURE_OPENAI_DEPLOYMENT: 'configured-small-model', AZURE_OPENAI_API_KEY: 'test-only-not-a-real-key' };
const modelReply = (reply = {}) => new Response(JSON.stringify({ choices: [{ message: { content: JSON.stringify({ answer: 'A grounded answer.', citationIds: [], qualification: {}, nextField: null, intent: 'explore', ...reply }) } }] }));
const ask = (content, extra = {}) => ({ messages: [{ role: 'user', content }], qualification: {}, skipped: [], sourcePath: '/', ...extra });

// Every page route registered in src/App.jsx, as the absolute production URL.
function siteRoutes() {
  const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8');
  const routes = new Set(['https://www.elixirehr.com/']);
  for (const [, path] of app.matchAll(/<Route path="([a-z0-9/-]+)" element=\{<(?!Navigate)/g)) routes.add(`https://www.elixirehr.com/${path}/`);
  return routes;
}

test('production knowledge is approved, bounded, sourced from the site and points at real routes', () => {
  const routes = siteRoutes();
  assert.ok(routes.has('https://www.elixirehr.com/contact-us/'));
  const ids = new Set();
  assert.ok(approvedKnowledge.length >= 15);
  for (const entry of approvedKnowledge) {
    assert.equal(entry.status, 'approved', entry.id);
    assert.equal(entry.owner, 'Elixir marketing (approved on merge to main)', entry.id);
    assert.equal(entry.reviewedAt, '2026-11-19', entry.id);
    assert.ok(entry.content.length > 200 && entry.content.length <= 3000, entry.id);
    assert.ok(routes.has(entry.url), `${entry.id}: ${entry.url} is not a site route`);
    assert.ok(isUsableEntry(entry), entry.id);
    assert.equal(ids.has(entry.id), false, `duplicate ${entry.id}`);
    ids.add(entry.id);
    assert.doesNotMatch(entry.content, /\$\s?\d/, `${entry.id} must not quote prices`);
    for (const file of entry.sourceFile.split('; ')) assert.ok(readFileSync(new URL(`../${file}`, import.meta.url), 'utf8').length > 0, `${entry.id} source ${file}`);
  }
  for (const id of ['platform-overview', 'ehr', 'rcm', 'behavioral-health', 'addiction-treatment', 'treatment-center', 'mental-health', 'telehealth', 'evv', 'caregiver-app', 'patient-portal', 'kratu-ai', 'hipaa-baa', 'security-certification', 'outpatient-clinics', 'small-practices', 'student-health-cybhi', 'discovery-call']) assert.ok(ids.has(id), `missing ${id}`);
  for (const entry of reviewKnowledge) assert.ok(routes.has(entry.url), `review ${entry.id}: ${entry.url}`);
});

test('retrieval finds the topic, uses page context and falls back to grounded overview context', () => {
  const top = (text, options) => retrieveKnowledge([{ role: 'user', content: text }], approvedKnowledge, options).map((entry) => entry.id);
  assert.equal(top('We run residential detox and need better admissions and census tracking')[0], 'addiction-treatment');
  assert.ok(top('Do you support EVV for home care with Sandata?').includes('evv'));
  assert.equal(top('We are a California school district billing CYBHI')[0], 'student-health-cybhi');
  assert.ok(top('Tell me about the Kratu ambient scribe').includes('kratu-ai'));
  assert.ok(top('How much does it cost?').includes('discovery-call'));
  assert.deepEqual(top('hi'), []);
  assert.ok(top('We want to improve our intake process', { providerType: 'treatment-center' }).slice(0, 2).some((id) => ['treatment-center', 'addiction-treatment'].includes(id)));
  assert.deepEqual(fallbackKnowledge(approvedKnowledge, { providerType: 'homecare' }).map((entry) => entry.id), ['evv', 'caregiver-app', 'platform-overview', 'discovery-call']);
  assert.deepEqual(fallbackKnowledge(approvedKnowledge).map((entry) => entry.id), ['platform-overview', 'discovery-call']);
  assert.deepEqual(fallbackKnowledge(approvedKnowledge.map((entry) => ({ ...entry, status: 'draft' }))), []);
});

test('the persona asks one question at a time, steers to a discovery call and carries page context', async () => {
  let outgoing;
  const handler = createChatHandler({ env, fetchImpl: async (_url, options) => { outgoing = JSON.parse(options.body); return modelReply({ citationIds: ['platform-overview'] }); } });
  const result = await handler(ask('hi', { providerType: 'cybhi' }));
  assert.equal(result.status, 200);
  const instructions = outgoing.messages[0].content;
  assert.match(instructions, /consultative Elixir specialist/);
  assert.match(instructions, /exactly one sharp qualifying question/);
  assert.match(instructions, /Book a discovery call/);
  assert.match(instructions, /Do not invent pricing, certification/);
  assert.match(instructions, /Do not infer a license count from headcount/);
  assert.match(instructions, /untrusted/);
  assert.match(instructions, new RegExp(PROVIDER_TYPES.cybhi));
  assert.match(instructions, /Visitor messages so far: 1/);
  assert.match(instructions, /student-health-cybhi/);
  assert.match(instructions, /discovery-call/);
  assert.equal(result.body.citations[0].url, 'https://www.elixirehr.com/why-elixir/');
  assert.equal((await handler(ask('hi', { providerType: 'not-a-provider' }))).status, 400);
  assert.equal(validateChatRequest(ask('hi', { providerType: null })).providerType, null);
});

test('client addresses come from Azure headers and ignore client-supplied forwarding entries', () => {
  assert.equal(clientAddress({ 'x-azure-clientip': '203.0.113.7', 'x-forwarded-for': '198.51.100.1' }), '203.0.113.7');
  assert.equal(clientAddress({ 'x-forwarded-for': '1.1.1.1, 203.0.113.9:51234' }), '1.1.1.1');
  // A spoofed client entry does not move the visitor: the edge appends the visitor, then its own hop.
  assert.equal(clientAddress({ 'x-forwarded-for': '6.6.6.6, 203.0.113.9:51234, 198.51.100.200:443' }), '203.0.113.9');
  assert.equal(clientAddress({ 'x-forwarded-for': '[2001:db8::1]:443' }), '2001:db8::1');
  assert.equal(clientAddress(new Headers({ 'x-forwarded-for': '2001:DB8::2' })), '2001:db8::2');
  assert.equal(clientAddress({ 'x-forwarded-for': '<script>' }), null);
  assert.equal(clientAddress({}), null);
  assert.equal(clientAddress(undefined), null);
});

test('per-client limiter is bounded, windowed and does not count rejected calls', () => {
  let time = 0;
  const limiter = createClientLimiter({ limit: 2, windowMs: 1000, dailyLimit: 3, maxClients: 3, now: () => time });
  assert.equal(limiter.take('a').allowed, true);
  assert.equal(limiter.take('a').allowed, true);
  const blocked = limiter.take('a');
  assert.equal(blocked.allowed, false);
  assert.equal(blocked.retryAfter, '1');
  assert.equal(limiter.take('b').allowed, true);
  time = 1000;
  assert.equal(limiter.take('a').allowed, true);
  time = 2000;
  assert.equal(limiter.take('a').allowed, false, 'daily limit');
  for (const client of ['c', 'd', 'e', 'f']) limiter.take(client);
  assert.equal(limiter.size, 3);
  assert.equal(limiter.take(null).allowed, true);
});

test('the API returns a sanitized 429 once one client exceeds its share, while others continue', async () => {
  let calls = 0;
  const handler = createChatHandler({ env, clientLimiter: createClientLimiter({ limit: 2 }), fetchImpl: async () => { calls++; return modelReply(); } });
  const from = (ip) => ({ headers: { 'x-azure-clientip': ip } });
  const body = ask('Tell me about your EHR templates');
  assert.equal((await handler(body, from('203.0.113.1'))).status, 200);
  assert.equal((await handler(body, from('203.0.113.1'))).status, 200);
  const limited = await handler(body, from('203.0.113.1'));
  assert.equal(limited.status, 429);
  assert.equal(limited.body.code, 'PLEASE_WAIT');
  assert.match(limited.headers['Retry-After'], /^\d+$/);
  assert.doesNotMatch(JSON.stringify(limited), /203\.0\.113|EHR templates|test-only/);
  assert.equal(calls, 2);
  assert.equal((await handler(body, from('203.0.113.2'))).status, 200);
  assert.equal(calls, 3);
});

test('discovery CTA is always available and escalates on intent, depth, failure and the session cap', () => {
  let state = initialConversation('/', { leadForm: false });
  assert.deepEqual([discoveryCta(state).tone, discoveryCta(state).href, discoveryCta(state).label], ['available', DISCOVERY_URL, 'Book a discovery call']);
  assert.equal(DISCOVERY_URL, 'https://www.elixirehr.com/contact-us/');
  for (let id = 1; id <= 3; id++) {
    state = conversationReducer(state, { type: 'request', id, text: `Question ${id}` });
    state = conversationReducer(state, { type: 'success', id, reply: { answer: 'Answer', intent: 'explore', qualification: {}, nextField: null } });
    assert.equal(discoveryCta(state).tone, id < 3 ? 'available' : 'recommended');
  }
  let demo = conversationReducer(initialConversation('/', { leadForm: false }), { type: 'request', id: 1, text: 'What would this cost us?' });
  demo = conversationReducer(demo, { type: 'success', id: 1, reply: { answer: 'Let us scope it', intent: 'demo', qualification: {}, nextField: null } });
  assert.equal(demo.showReview, false, 'production hands over with the link, not the in-chat form');
  assert.equal(discoveryCta(demo).tone, 'recommended');
  const failed = conversationReducer(conversationReducer(initialConversation('/'), { type: 'request', id: 1, text: 'Hello' }), { type: 'failure', id: 1, error: 'The assistant is busy.' });
  assert.equal(discoveryCta(failed).tone, 'fallback');
  assert.equal(discoveryCta(initialConversation('/'), { mode: 'off' }).tone, 'fallback');
  assert.equal(discoveryCta(state, { capReached: true }).tone, 'limit');
  assert.match(discoveryCta(state, { capReached: true }).text, /limit/);
  const declined = conversationReducer(state, { type: 'decline' });
  assert.equal(discoveryCta(declined).tone, 'available');
});

test('session message cap survives restarts and storage failures', () => {
  const store = new Map();
  const storage = { getItem: (key) => store.get(key) ?? null, setItem: (key, value) => store.set(key, value) };
  const budget = createSessionBudget({ storage });
  assert.equal(MAX_VISITOR_MESSAGES, 12);
  for (let n = 0; n < 12; n++) { assert.equal(budget.exhausted(), false); budget.consume(); }
  assert.equal(budget.exhausted(), true);
  assert.equal(createSessionBudget({ storage }).remaining(), 0, 'a new widget instance in the same session keeps the count');
  const broken = createSessionBudget({ storage: { getItem() { throw new Error('blocked'); }, setItem() { throw new Error('blocked'); } }, cap: 2 });
  broken.consume(); broken.consume();
  assert.equal(broken.exhausted(), true);
  const tampered = createSessionBudget({ storage: { getItem: () => 'garbage', setItem() {} }, cap: 1 });
  assert.equal(tampered.remaining(), 1);
});

test('page context from the open event tailors the greeting, the request and the recap', () => {
  let state = initialConversation('/', { providerType: 'treatment-center' });
  assert.equal(state.providerType, 'treatment-center');
  assert.notEqual(state.messages[0].content, WELCOME);
  assert.equal(initialConversation('/', { providerType: 'nope' }).messages[0].content, WELCOME);
  state = conversationReducer(initialConversation('/'), { type: 'context', providerType: 'homecare' });
  assert.equal(state.messages[0].content, welcomeFor('homecare'));
  assert.equal(chatRequest(state, 'We need EVV').providerType, 'homecare');
  assert.equal(validateChatRequest(chatRequest(state, 'We need EVV')).providerType, 'homecare');
  assert.match(buildLeadDescription(state), /Home care/);
  assert.equal(chatRequest(initialConversation('/'), 'Hello').providerType, undefined);
  state = conversationReducer(state, { type: 'request', id: 1, text: 'Hello' });
  const ongoing = conversationReducer(state, { type: 'context', providerType: 'cybhi' });
  assert.equal(ongoing.providerType, 'cybhi');
  assert.equal(ongoing.messages, state.messages, 'an ongoing conversation keeps its history');
  assert.equal(conversationReducer(state, { type: 'context', providerType: 'bogus' }), state);
  assert.equal(conversationReducer(ongoing, { type: 'restart' }).providerType, 'cybhi');
});

test('the shared elixir:open-assistant event validates provider ids and prefills without sending', () => {
  assert.equal(OPEN_ASSISTANT_EVENT, 'elixir:open-assistant');
  assert.deepEqual(PROVIDER_TYPE_IDS, ['online-behavioral-health', 'treatment-center', 'cybhi', 'homecare', 'specialty-clinic']);
  assert.deepEqual(parseOpenAssistantDetail({ providerType: 'cybhi', prompt: '  How do we start claiming?  ' }), { providerType: 'cybhi', prompt: 'How do we start claiming?' });
  assert.deepEqual(parseOpenAssistantDetail({ providerType: 'unknown', prompt: '   ' }), { providerType: null, prompt: null });
  assert.deepEqual(parseOpenAssistantDetail(null), { providerType: null, prompt: null });
  assert.equal(parseOpenAssistantDetail({ prompt: 'x'.repeat(5000) }).prompt.length, 2000);
  const target = new EventTarget();
  const received = [];
  const stop = listenForOpenAssistant(target, (detail) => received.push(detail));
  target.dispatchEvent(new CustomEvent('elixir:open-assistant', { detail: { providerType: 'specialty-clinic', prompt: null } }));
  openAssistant({ providerType: 'online-behavioral-health', prompt: 'We see clients by video' }, target);
  target.dispatchEvent(new CustomEvent('elixir:open-assistant'));
  stop();
  openAssistant({ providerType: 'homecare' }, target);
  assert.deepEqual(received, [
    { providerType: 'specialty-clinic', prompt: null },
    { providerType: 'online-behavioral-health', prompt: 'We see clients by video' },
    { providerType: null, prompt: null },
  ]);
  assert.equal(openAssistant({}, null), false);
});

test('production on www.elixirehr.com runs hosted only when built hosted; off stays a kill switch', () => {
  assert.equal(resolveAssistantMode({ requested: 'hosted', hostname: 'www.elixirehr.com' }), 'hosted');
  assert.equal(resolveAssistantMode({ requested: 'off', hostname: 'www.elixirehr.com' }), 'off');
  assert.equal(resolveAssistantMode({ hostname: 'www.elixirehr.com' }), 'off');
  assert.equal(resolveAssistantMode({ requested: 'sample', hostname: 'www.elixirehr.com' }), 'off');
  assert.equal(resolveAssistantMode({ requested: 'hosted', preview: true, hostedPreview: true, hostname: 'thankful-mud-07aadb71e-latest.westus2.3.azurestaticapps.net' }), 'hosted');
});

test('a call the per-worker cap turns away does not use up the visitor allowance', async () => {
  let takes = 0;
  const spy = { take: () => { takes++; return { allowed: true }; } };
  let release;
  const pending = new Promise((resolve) => { release = resolve; });
  const groqEnv = { ASSISTANT_ENABLED: 'true', ASSISTANT_PROVIDER: 'groq', GROQ_API_KEY: 'test-only-not-a-real-key', GROQ_MODEL: 'test-model' };
  const handler = createChatHandler({ env: groqEnv, clientLimiter: spy, fetchImpl: async () => { await pending; return modelReply(); } });
  const from = { headers: { 'x-azure-clientip': '203.0.113.5' } };
  const first = handler(ask('Tell me about your EHR templates'), from);
  const busy = await handler(ask('Tell me about your EHR templates'), from);
  assert.equal(busy.status, 429);
  assert.match(busy.body.error, /busy/);
  assert.equal(takes, 1, 'the worker-cap rejection must not be counted against the client');
  release();
  assert.equal((await first).status, 200);
});

test('the client address source is configurable and the header diagnostic reports presence only', async () => {
  const headers = { 'x-azure-clientip': '203.0.113.7', 'x-client-ip': '198.51.100.4', 'x-forwarded-for': '198.51.100.9, 10.0.0.1' };
  assert.equal(clientAddress(headers), '203.0.113.7');
  assert.equal(clientAddress(headers, { source: 'auto' }), '203.0.113.7');
  assert.equal(clientAddress(headers, { source: 'azure-clientip' }), '203.0.113.7');
  assert.equal(clientAddress(headers, { source: 'client-ip' }), '198.51.100.4');
  assert.equal(clientAddress(headers, { source: 'forwarded-first' }), '198.51.100.9');
  assert.equal(clientAddress(headers, { source: 'forwarded-last' }), '10.0.0.1');
  assert.equal(clientAddress({ 'x-forwarded-for': '1.2.3.4, 198.51.100.9:5000, 10.0.0.1' }, { source: 'forwarded-second-last' }), '198.51.100.9');
  assert.equal(clientAddress({ 'x-forwarded-for': '198.51.100.9' }, { source: 'forwarded-second-last' }), '198.51.100.9');
  assert.equal(clientAddress(headers, { source: 'off' }), null);
  assert.equal(clientAddress({ 'x-forwarded-for': '198.51.100.9' }, { source: 'client-ip' }), null);
  assert.equal(clientAddressSource(' Client-IP '), 'client-ip');
  assert.equal(clientAddressSource('anything-else'), 'auto');
  assert.equal(clientAddressSource(undefined), 'auto');
  assert.equal(addressHeaderDiagnostic(headers), 'x-azure-clientip=present; x-client-ip=present; x-forwarded-for-entries=2; x-forwarded-for-hops=public-v4,private-v4');
  assert.equal(addressHeaderDiagnostic({ 'x-forwarded-for': '203.0.113.9, 198.51.100.2:5123, [2001:db8::1]:443' }), 'x-azure-clientip=absent; x-client-ip=absent; x-forwarded-for-entries=3; x-forwarded-for-hops=public-v4,public-v4+port,public-v6+port');
  assert.equal(addressHeaderDiagnostic({}), 'x-azure-clientip=absent; x-client-ip=absent; x-forwarded-for-entries=0');
  assert.match(addressHeaderDiagnostic({ 'x-forwarded-for': '1.2.3.4, 198.51.100.9:5000, 203.0.113.1:443', 'x-elixir-address-probe': '198.51.100.9' }), /; probe-match=-2$/);
  assert.match(addressHeaderDiagnostic({ 'x-forwarded-for': '203.0.113.1:443', 'x-elixir-address-probe': '198.51.100.9' }), /; probe-match=none$/);
  assert.doesNotMatch(addressHeaderDiagnostic({ 'x-forwarded-for': '198.51.100.9', 'x-elixir-address-probe': '198.51.100.9' }), /198\.51/);
  assert.doesNotMatch(addressHeaderDiagnostic(headers), /203\.0|198\.51|10\.0/);

  // The source setting reaches the handler: with `off` one address is never limited per client.
  const offHandler = createChatHandler({ env: { ...env, ASSISTANT_CLIENT_ADDRESS_SOURCE: 'off' }, clientLimiter: createClientLimiter({ limit: 1 }), fetchImpl: async () => modelReply() });
  for (let i = 0; i < 3; i++) assert.equal((await offHandler(ask('Tell me about your EHR templates'), { headers })).status, 200);

  // The diagnostic header appears only on the `latest` review environment with the flag set.
  const body = ask('Tell me about your EHR templates');
  const latest = createChatHandler({ env: { ...env, ASSISTANT_ADDRESS_DIAGNOSTIC: 'true', ASSISTANT_KNOWLEDGE_MODE: 'review', ASSISTANT_REVIEW_ENVIRONMENT: 'latest' }, fetchImpl: async () => modelReply() });
  const diagnosed = await latest(body, { headers });
  assert.equal(diagnosed.headers['X-Elixir-Address-Headers'], 'x-azure-clientip=present; x-client-ip=present; x-forwarded-for-entries=2; x-forwarded-for-hops=public-v4,private-v4');
  assert.doesNotMatch(JSON.stringify(diagnosed), /203\.0\.113|198\.51\.100/);
  const production = createChatHandler({ env: { ...env, ASSISTANT_ADDRESS_DIAGNOSTIC: 'true' }, fetchImpl: async () => modelReply() });
  assert.equal((await production(body, { headers })).headers['X-Elixir-Address-Headers'], undefined);
});
