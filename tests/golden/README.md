# AGENT-GENERATED - ORACLE REVIEW NEEDED

`provider-questions.json` holds 10 hand-written provider-type questions for the Ask Elixir persona,
two per provider type the Home page funnel offers. They were written by an agent and have not yet
been reviewed by the product owner (the oracle). Until that review, treat them as candidate
expectations, not accepted ones.

Each question shows buying intent (pricing, implementation, migration, timeline, vendor comparison
or a demo), so the persona's own rules say the reply should:

- recommend a discovery call (`mentionsDiscoveryCall`);
- end with exactly one qualifying question (`followUpQuestions`: 1);
- be grounded in reviewed knowledge: at least one citation (`minCitations`), and no invented pricing
  figures or URLs in the answer.

`tests/provider-golden.test.mjs` checks the file's shape and the scoring rules with no network.
`npm run eval:provider-questions` sends the questions to a live `/api/chat` only when
`ELIXIR_EVAL_URL` is set (for example the `latest` preview origin); otherwise it skips and costs
nothing. Each question is one model call against that deployment's caps.
