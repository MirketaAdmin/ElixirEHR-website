// Deterministic browser check of the Home page provider funnel: every provider type, every step,
// the discovery-call link on each step, the one-time tailored answer and the inline question box
// against a mocked same-origin /api/chat (no model call, no cost), the error and session-limit
// fallbacks, and the assistant-off fallback.
//
// By default it starts two local Vite dev servers itself (hosted mode and off mode, headless, no
// window) and stops them by their own process ids. Set FUNNEL_TEST_URL and FUNNEL_OFF_TEST_URL to
// use servers that are already running. Playwright and the browser are installed independently,
// as for check-assistant-browser.mjs: set PLAYWRIGHT_MODULE_PATH and CHROME_EXECUTABLE when they
// are not on the default resolution paths.
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { DISCOVERY_CALL_URL, FUNNEL_STEPS, providerTypes } from '../src/features/provider-funnel/funnelData.mjs';
import { composeAssistantPrompt } from '../src/features/provider-funnel/funnelLogic.mjs';
import { MAX_VISITOR_MESSAGES, SESSION_BUDGET_KEY } from '../src/features/sales-assistant/discovery.mjs';

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE_PATH ? pathToFileURL(process.env.PLAYWRIGHT_MODULE_PATH).href : 'playwright');
const root = fileURLToPath(new URL('..', import.meta.url));
const screenshotDir = process.env.FUNNEL_SCREENSHOT_DIR ?? 'work/funnel-check';
await mkdir(screenshotDir, { recursive: true });

const servers = [];
async function devServer(mode, port) {
  const child = spawn(process.execPath, [`${root}node_modules/vite/bin/vite.js`, '--host', '127.0.0.1', '--port', String(port), '--strictPort'], {
    cwd: root,
    env: { ...process.env, VITE_ELIXIR_ASSISTANT_MODE: mode },
    stdio: 'ignore',
    windowsHide: true,
  });
  servers.push(child);
  const url = `http://127.0.0.1:${port}`;
  const deadline = Date.now() + 30000;
  while (Date.now() < deadline) {
    if (child.exitCode !== null) throw new Error(`The ${mode} dev server exited early (code ${child.exitCode}).`);
    try {
      if ((await fetch(url)).ok) return url;
    } catch { /* not listening yet */ }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`The ${mode} dev server did not start on ${url}.`);
}
function stopServers() {
  for (const child of servers) if (child.exitCode === null) child.kill('SIGTERM');
}

const answerFor = (body) => {
  const last = body.messages.at(-1).content;
  return last.endsWith('How would Elixir help us?')
    ? `Tailored answer for ${body.providerType}: Elixir fits your practice. A discovery call can show it with your workflows. What would you like to see first?`
    : `Inline answer for ${body.providerType}: ${last}`;
};

async function newPage(browser, base, { mockStatus = 200, budgetUsed = 0 } = {}) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 1000 } });
  if (budgetUsed) await context.addInitScript(([key, value]) => window.sessionStorage.setItem(key, value), [SESSION_BUDGET_KEY, String(budgetUsed)]);
  const page = await context.newPage();
  const errors = [];
  const chat = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.route('**/*', (route) => (route.request().url().startsWith(base) ? route.continue() : route.abort()));
  await page.route(`${base}/api/chat`, async (route) => {
    const body = route.request().postDataJSON();
    chat.push(body);
    if (mockStatus !== 200) return route.fulfill({ status: mockStatus, contentType: 'application/json', body: JSON.stringify({ code: 'ASSISTANT_UNAVAILABLE', error: 'unavailable' }) });
    return route.fulfill({ contentType: 'application/json', body: JSON.stringify({ answer: answerFor(body), citations: [{ id: 'ehr', title: 'EHR overview', url: 'https://www.elixirehr.com/electronic-health-record/' }], qualification: {}, nextField: null, intent: 'explore' }) });
  });
  await page.goto(`${base}/`, { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Reject Non-Essential', exact: true }).click();
  return { context, page, errors, chat };
}

async function chooseType(page, type) {
  const card = page.getByRole('list', { name: 'Provider types', exact: true }).getByRole('button', { name: new RegExp(`^${type.label}`) });
  await card.click();
  const stage = page.getByRole('region', { name: `${type.label} presentation`, exact: true });
  await stage.waitFor();
  return stage;
}

async function assertDiscoveryLinks(stage, stepIndex) {
  await stage.getByText(`Step ${stepIndex + 1} of ${FUNNEL_STEPS.length}: ${FUNNEL_STEPS[stepIndex].label}`, { exact: true }).waitFor();
  const links = stage.getByRole('link', { name: 'Book a discovery call', exact: true });
  const count = await links.count();
  assert.ok(count >= 1, `step ${stepIndex + 1} shows a discovery-call link`);
  for (let index = 0; index < count; index++) assert.equal(await links.nth(index).getAttribute('href'), DISCOVERY_CALL_URL);
}

const next = (stage, stepIndex) => stage.getByRole('button', { name: stepIndex === 0 ? 'What are you looking for?' : 'Next', exact: true }).click();
const staticPoints = (stage) => stage.locator('ol:has(h4) > li');

const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_EXECUTABLE ? { executablePath: process.env.CHROME_EXECUTABLE } : {}) });
try {
  const hostedBase = process.env.FUNNEL_TEST_URL ?? (await devServer('hosted', 5191));
  const offBase = process.env.FUNNEL_OFF_TEST_URL ?? (await devServer('off', 5192));

  // 1. Hosted mode: every provider type, every step, tailored answer and inline question.
  for (const type of providerTypes) {
    const { context, page, errors, chat } = await newPage(browser, hostedBase);
    const stage = await chooseType(page, type);
    await assertDiscoveryLinks(stage, 0);
    await next(stage, 0);
    await assertDiscoveryLinks(stage, 1);
    const need = type.needs[0];
    await stage.getByRole('button', { name: need.label, exact: true }).click();
    assert.equal(await stage.getByRole('button', { name: need.label, exact: true }).getAttribute('aria-pressed'), 'true');
    await next(stage, 1);
    await assertDiscoveryLinks(stage, 2);
    const pointCount = await staticPoints(stage).count();
    assert.ok(pointCount >= 3, `${type.id}: the static points are shown`);
    assert.equal(chat.length, 0, `${type.id}: nothing is sent before the visitor asks`);
    await stage.getByRole('button', { name: 'Tailor this to my practice with Elixir AI', exact: true }).click();
    const tailored = stage.getByRole('region', { name: 'Tailored answer from Elixir AI', exact: true });
    await tailored.getByText(`Tailored answer for ${type.id}:`, { exact: false }).waitFor();
    assert.equal(await tailored.getByRole('link', { name: 'EHR overview', exact: true }).getAttribute('href'), 'https://www.elixirehr.com/electronic-health-record/');
    assert.equal(await staticPoints(stage).count(), pointCount, `${type.id}: the static points stay visible beside the AI answer`);
    assert.equal(chat.length, 1);
    assert.equal(chat[0].providerType, type.id);
    assert.equal(chat[0].sourcePath, '/');
    assert.equal(chat[0].messages.at(-1).content, composeAssistantPrompt(type.id, [need.id]));
    assert.equal(await stage.getByRole('button', { name: 'Tailor this to my practice with Elixir AI', exact: true }).count(), 0, `${type.id}: the tailored answer is sent once`);
    await next(stage, 2);
    await stage.getByText(`Step 4 of ${FUNNEL_STEPS.length}: ${FUNNEL_STEPS[3].label}`, { exact: true }).waitFor();
    const primary = stage.getByRole('link', { name: 'Book a discovery call', exact: true }).first();
    assert.equal(await primary.getAttribute('href'), DISCOVERY_CALL_URL);
    await stage.getByRole('button', { name: 'Ask Elixir a question', exact: true }).waitFor();
    const question = `Does Elixir handle ${need.label.toLowerCase()}?`;
    await stage.getByLabel('Ask Elixir AI a question about your practice', { exact: true }).fill(question);
    await stage.getByRole('button', { name: 'Ask', exact: true }).click();
    const log = stage.getByRole('log', { name: 'Your questions and answers', exact: true });
    await log.getByText(`Inline answer for ${type.id}: ${question}`, { exact: true }).waitFor();
    assert.equal(chat.length, 2);
    assert.equal(chat[1].messages.at(-1).content, question);
    assert.equal(chat[1].messages.at(-3).content, composeAssistantPrompt(type.id, [need.id]), `${type.id}: the question carries the tailored exchange as context`);
    assert.equal(await log.getByText('Tailored answer for', { exact: false }).count(), 0, `${type.id}: the question log does not repeat the tailored answer`);
    assert.equal(await page.evaluate((key) => window.sessionStorage.getItem(key), SESSION_BUDGET_KEY), '2', `${type.id}: both calls count against the session cap`);
    await stage.getByRole('button', { name: 'Back', exact: true }).click();
    await tailored.getByText(`Tailored answer for ${type.id}:`, { exact: false }).waitFor();
    assert.equal(chat.length, 2, `${type.id}: returning to Why Elixir does not resend`);
    if (type === providerTypes[0]) await stage.screenshot({ path: `${screenshotDir}/hosted-${type.id}.png`, animations: 'disabled' });
    assert.deepEqual(errors, []);
    await context.close();
  }

  // 2. Hosted mode, failing API: static points stay, discovery link and a retry are offered.
  {
    const type = providerTypes[1];
    const { context, page, errors, chat } = await newPage(browser, hostedBase, { mockStatus: 503 });
    const stage = await chooseType(page, type);
    await next(stage, 0);
    await next(stage, 1);
    const pointCount = await staticPoints(stage).count();
    await stage.getByRole('button', { name: 'Tailor this to my practice with Elixir AI', exact: true }).click();
    await stage.getByRole('button', { name: 'Try the tailored answer again', exact: true }).waitFor();
    await stage.getByText(/temporarily unavailable/).waitFor();
    assert.equal(await staticPoints(stage).count(), pointCount);
    await assertDiscoveryLinks(stage, 2);
    assert.ok((await stage.getByRole('link', { name: 'Book a discovery call', exact: true }).count()) >= 2, 'the error shows its own discovery-call link');
    await next(stage, 2);
    await stage.getByLabel('Ask Elixir AI a question about your practice', { exact: true }).fill('Can you help?');
    await stage.getByRole('button', { name: 'Ask', exact: true }).click();
    await stage.getByText(/temporarily unavailable/).waitFor();
    assert.equal(await stage.getByLabel('Ask Elixir AI a question about your practice', { exact: true }).inputValue(), 'Can you help?', 'a failed question is kept for retry');
    assert.equal(chat.length, 2);
    assert.deepEqual(errors, []);
    await context.close();
  }

  // 3. Hosted mode, session cap already spent: nothing is sent; the discovery link takes over.
  {
    const type = providerTypes[2];
    const { context, page, errors, chat } = await newPage(browser, hostedBase, { budgetUsed: MAX_VISITOR_MESSAGES });
    const stage = await chooseType(page, type);
    await next(stage, 0);
    await next(stage, 1);
    await stage.getByRole('button', { name: 'Tailor this to my practice with Elixir AI', exact: true }).click();
    await stage.getByText(/reached this visit’s limit/).waitFor();
    assert.equal(await stage.getByRole('button', { name: /Tailor this|Try the tailored/ }).count(), 0);
    await next(stage, 2);
    await stage.getByLabel('Ask Elixir AI a question about your practice', { exact: true }).fill('One more question');
    await stage.getByRole('button', { name: 'Ask', exact: true }).click();
    await stage.getByText(/reached this visit’s limit/).waitFor();
    assert.equal(await stage.getByLabel('Ask Elixir AI a question about your practice', { exact: true }).count(), 0, 'the question box closes at the limit');
    assert.equal(chat.length, 0);
    assert.deepEqual(errors, []);
    await context.close();
  }

  // 4. Assistant off: static flow with discovery-call fallbacks, no AI controls, no requests.
  for (const type of providerTypes) {
    const { context, page, errors, chat } = await newPage(browser, offBase);
    const stage = await chooseType(page, type);
    await assertDiscoveryLinks(stage, 0);
    await next(stage, 0);
    await assertDiscoveryLinks(stage, 1);
    await next(stage, 1);
    await assertDiscoveryLinks(stage, 2);
    assert.ok((await staticPoints(stage).count()) >= 3);
    assert.equal(await stage.getByRole('button', { name: /Elixir AI/ }).count(), 0);
    await stage.getByText(/Our team can walk you through it on a discovery call/).waitFor();
    await next(stage, 2);
    await stage.getByText(/Our team will answer it directly on a discovery call/).waitFor();
    assert.equal(await stage.getByLabel('Ask Elixir AI a question about your practice', { exact: true }).count(), 0);
    const links = stage.getByRole('link', { name: 'Book a discovery call', exact: true });
    for (let index = 0; index < (await links.count()); index++) assert.equal(await links.nth(index).getAttribute('href'), DISCOVERY_CALL_URL);
    assert.equal(await page.getByRole('button', { name: 'Ask Elixir', exact: true }).count(), 0, 'the floating launcher stays hidden when off');
    if (type === providerTypes[0]) await stage.screenshot({ path: `${screenshotDir}/off-${type.id}.png`, animations: 'disabled' });
    assert.equal(chat.length, 0);
    assert.deepEqual(errors, []);
    await context.close();
  }

  console.log(`PASS: ${providerTypes.length} provider types x ${FUNNEL_STEPS.length} steps in hosted (mocked /api/chat) and off mode; discovery link on every step; tailored answer sent once; inline Q&A with context; error and session-limit fallbacks; zero unmocked requests.`);
} finally {
  await browser.close();
  stopServers();
}
