// A controlled same-origin API fixture exercises the hosted UI without a paid model call.
import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE_PATH ? pathToFileURL(process.env.PLAYWRIGHT_MODULE_PATH).href : 'playwright');
const base = process.env.ASSISTANT_HOSTED_TEST_URL ?? 'http://127.0.0.1:5174';
const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_EXECUTABLE ? { executablePath: process.env.CHROME_EXECUTABLE } : {}) });
try {
  const page = await browser.newPage();
  await page.route('**/*', (route) => route.request().url().startsWith(base) ? route.continue() : route.abort());
  let release; let started;
  const pending = new Promise((resolve) => { release = resolve; });
  const firstStarted = new Promise((resolve) => { started = resolve; });
  const requests = [];
  await page.route(`${base}/api/chat`, async (route) => {
    const request = route.request().postDataJSON(); requests.push(request);
    if (requests.length === 1) { started(); await pending; }
    const n = requests.length;
    await route.fulfill({ contentType: 'application/json', body: JSON.stringify({ answer: n === 1 ? 'When are you hoping to make a change?' : n === 3 ? 'Please review your demo request.' : 'We can continue without contact information.', qualification: {}, citations: [], nextField: n === 1 ? 'timeline' : null, intent: n === 3 ? 'demo' : 'explore' }) });
  });
  await page.goto(`${base}/behavioral-health-ehr/`, { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Reject Non-Essential', exact: true }).click();
  await page.getByRole('button', { name: 'Ask Elixir', exact: true }).click();
  const dialog = page.getByRole('dialog', { name: 'Elixir assistant', exact: true });
  const send = async (text) => { await dialog.getByRole('textbox', { name: 'Your question', exact: true }).fill(text); await dialog.getByRole('button', { name: 'Send message', exact: true }).click(); };
  await send('Tell me about EHR implementation timing'); await firstStarted;
  await dialog.getByRole('button', { name: 'Request a demo', exact: true }).click();
  await dialog.getByLabel('First name', { exact: true }).fill('Alex');
  await dialog.getByLabel('Request summary', { exact: true }).fill('Please keep this draft.');
  const response = page.waitForResponse(`${base}/api/chat`); release(); await response;
  assert.equal(await dialog.getByLabel('First name', { exact: true }).inputValue(), 'Alex');
  assert.equal(await dialog.getByLabel('Request summary', { exact: true }).inputValue(), 'Please keep this draft.');
  await dialog.getByRole('button', { name: 'Back to conversation', exact: true }).click();
  await dialog.getByLabel('When are you hoping to make a change?', { exact: true }).waitFor();
  assert.equal(await dialog.getByLabel('What kind of healthcare organization are you with?', { exact: true }).count(), 0);
  await dialog.getByRole('button', { name: 'Keep exploring', exact: true }).click();
  await send('Tell me more about EHR');
  await dialog.getByText('We can continue without contact information.', { exact: true }).waitFor();
  assert.equal(requests[1].contactPreference, 'declined');
  assert.equal(await dialog.locator('#elixir-qualification').count(), 0);
  await send('I changed my mind. Please arrange a demo.');
  await dialog.getByLabel('First name', { exact: true }).waitFor();
  assert.equal(requests[2].contactPreference, 'requested');
  assert.equal(await dialog.getByLabel('Request summary', { exact: true }).inputValue(), 'Please keep this draft.');
  console.log('PASS: deferred hosted reply preserves lead draft; selected question, null question and contact preference/reopt-in follow API contract. No external API used.');
} finally { await browser.close(); }
