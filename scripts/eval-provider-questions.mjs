// Sends the provider-question golden set to a live /api/chat and scores each reply. Runs only when
// ELIXIR_EVAL_URL is set (an origin such as the latest preview); otherwise it skips, so it costs
// nothing by default. Visitor text and replies stay in this process; it prints only ids and traits.
import { goldenRequest, loadGolden, scoreReply, validateGolden } from './provider-golden.mjs';

const origin = process.env.ELIXIR_EVAL_URL?.trim();
if (!origin) {
  console.log('SKIP: set ELIXIR_EVAL_URL to evaluate the provider-question golden set against a live /api/chat (no requests sent).');
  process.exit(0);
}
const endpoint = new URL('/api/chat', origin).href;
const golden = await loadGolden();
const problems = validateGolden(golden);
if (problems.length) {
  console.error(`The golden file is malformed:\n- ${problems.join('\n- ')}`);
  process.exit(1);
}

let failed = 0;
for (const item of golden.questions) {
  let failures;
  try {
    const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(goldenRequest(item)), signal: AbortSignal.timeout(60000) });
    failures = response.ok ? scoreReply(item, await response.json()) : [`HTTP ${response.status}`];
  } catch (error) {
    failures = [`request failed: ${error.name}`];
  }
  if (failures.length) failed++;
  console.log(`${failures.length ? 'FAIL' : 'PASS'} ${item.id}${failures.length ? `: ${failures.join('; ')}` : ''}`);
}
console.log(`${golden.questions.length - failed}/${golden.questions.length} golden questions passed (${golden.status}).`);
process.exit(failed ? 1 : 0);
