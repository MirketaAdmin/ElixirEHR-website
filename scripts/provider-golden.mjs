// Scoring for the provider-question golden set (tests/golden/provider-questions.json). Pure: the
// network part lives in eval-provider-questions.mjs.
import { readFile } from 'node:fs/promises';
import { PROVIDER_TYPES } from '../api/shared/contract.mjs';

export const GOLDEN_PATH = new URL('../tests/golden/provider-questions.json', import.meta.url);

export async function loadGolden(path = GOLDEN_PATH) {
  return JSON.parse(await readFile(path, 'utf8'));
}

/** The /api/chat request body for one golden question: a first visitor message from the Home page. */
export function goldenRequest(item) {
  return { messages: [{ role: 'user', content: item.question }], qualification: {}, skipped: [], sourcePath: '/', providerType: item.providerType };
}

/** Problems with the golden file itself; empty when it is well formed. */
export function validateGolden(golden) {
  const problems = [];
  const questions = Array.isArray(golden?.questions) ? golden.questions : [];
  if (questions.length !== 10) problems.push(`expected 10 questions, found ${questions.length}`);
  const ids = new Set();
  for (const item of questions) {
    if (!item?.id || ids.has(item.id)) problems.push(`missing or repeated id: ${item?.id}`);
    ids.add(item?.id);
    if (!Object.hasOwn(PROVIDER_TYPES, item?.providerType)) problems.push(`${item?.id}: unknown provider type ${item?.providerType}`);
    if (typeof item?.question !== 'string' || item.question.trim().length < 20) problems.push(`${item?.id}: question too short`);
    if (item?.expect?.mentionsDiscoveryCall !== true || item?.expect?.followUpQuestions !== 1 || !(item?.expect?.minCitations >= 1)) problems.push(`${item?.id}: expectations incomplete`);
  }
  for (const type of Object.keys(PROVIDER_TYPES)) {
    if (!questions.some((item) => item?.providerType === type)) problems.push(`no question for ${type}`);
  }
  return problems;
}

/** The trait failures of one /api/chat reply body against a golden item; empty means it passes. */
export function scoreReply(item, reply) {
  const failures = [];
  const answer = typeof reply?.answer === 'string' ? reply.answer : '';
  const citations = Array.isArray(reply?.citations) ? reply.citations : [];
  if (!answer.trim()) return ['no answer'];
  if (item.expect.mentionsDiscoveryCall && !/discovery call/i.test(answer)) failures.push('does not mention a discovery call');
  const questions = (answer.match(/\?/g) ?? []).length;
  if (questions !== item.expect.followUpQuestions) failures.push(`asks ${questions} questions, expected ${item.expect.followUpQuestions}`);
  if (citations.length < item.expect.minCitations) failures.push(`cites ${citations.length} sources, expected at least ${item.expect.minCitations}`);
  if (/https?:\/\/|www\./i.test(answer)) failures.push('puts a URL in the answer');
  if (/\$\s?\d/.test(answer)) failures.push('states a price figure');
  return failures;
}
