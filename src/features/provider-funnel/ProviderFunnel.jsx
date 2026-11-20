import { useEffect, useId, useReducer, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button/Button';
import Icon from '../../components/ui/Icon/Icon';
import { cn } from '../../utils/cn';
import { MAX_USER_LENGTH } from '../../../api/shared/contract.mjs';
import { ASSISTANT_MODE } from '../sales-assistant/assistantMode';
import { browserSessionStorage, createSessionBudget } from '../sales-assistant/discovery.mjs';
import { DISCOVERY_CALL_URL, FUNNEL_STEPS, providerTypes } from './funnelData.mjs';
import {
  buildAssistantEventDetail,
  buildWhyElixir,
  clampStep,
  composeAssistantPrompt,
  getProviderType,
  openAssistant,
  resolveNeeds,
  toggleNeed,
} from './funnelLogic.mjs';
import { askInline, inlineAvailable, inlineConversation, inlineReducer, questionTurns } from './inlineAssistant.mjs';
import styles from './ProviderFunnel.module.css';

const LAST_STEP = FUNNEL_STEPS.length - 1;

/**
 * The guided provider funnel: pick a provider type, then step through a short, predefined
 * presentation (your world, what you need, why Elixir, next step). The steps themselves are
 * static (funnelData.mjs). Model calls happen only when the visitor asks: a one-time tailored
 * answer on the Why Elixir step and a question box on the last step, both through the site
 * assistant's transport and its per-session message budget (inlineAssistant.mjs). The visitor can
 * also open the floating assistant through the shared `elixir:open-assistant` event.
 */
function ProviderFunnel() {
  const [typeId, setTypeId] = useState(null);
  const [step, setStep] = useState(0);
  const [furthestStep, setFurthestStep] = useState(0);
  const [needIds, setNeedIds] = useState([]);
  const [assistantNotice, setAssistantNotice] = useState('');
  const [chat, dispatchChat] = useReducer(inlineReducer, null, () => inlineConversation());
  // The latest tailored answer: the prompt it answered and where its question sits in the
  // conversation; summaryIndices keeps every tailored exchange out of the question log.
  const [summary, setSummary] = useState(null);
  const [summaryIndices, setSummaryIndices] = useState([]);
  // What stopped the last inline request: '' | 'off' | 'limit' | 'error' (with `message`), per kind.
  const [inlineIssue, setInlineIssue] = useState({ summary: null, question: null });
  const [budget] = useState(() => createSessionBudget({ storage: browserSessionStorage() }));
  const inlineSequence = useRef(0);
  const inlineController = useRef(null);

  // Focus moves only after the visitor acts, never on first render or in the prerender.
  const focusTarget = useRef(null);
  const stepHeadingRef = useRef(null);
  const cardRefs = useRef({});
  const baseId = useId();

  const type = getProviderType(typeId);

  useEffect(() => () => inlineController.current?.abort(), []);

  useEffect(() => {
    const target = focusTarget.current;
    focusTarget.current = null;
    if (target === 'step') stepHeadingRef.current?.focus();
    else if (target) cardRefs.current[target]?.focus();
  });

  function resetInline(nextType) {
    inlineController.current?.abort();
    inlineSequence.current += 1;
    dispatchChat({ type: 'init', typeId: nextType });
    setSummary(null);
    setSummaryIndices([]);
    setInlineIssue({ summary: null, question: null });
  }

  function chooseType(id) {
    resetInline(id);
    setTypeId(id);
    setStep(0);
    setFurthestStep(0);
    setNeedIds([]);
    setAssistantNotice('');
    focusTarget.current = 'step';
  }

  function goTo(index) {
    const next = clampStep(index);
    setStep(next);
    setFurthestStep((furthest) => Math.max(furthest, next));
    setAssistantNotice('');
    focusTarget.current = 'step';
  }

  function restart() {
    const previous = typeId;
    resetInline(null);
    setTypeId(null);
    setStep(0);
    setFurthestStep(0);
    setNeedIds([]);
    setAssistantNotice('');
    focusTarget.current = previous;
  }

  function askElixir() {
    const opened = openAssistant(buildAssistantEventDetail(typeId, needIds));
    setAssistantNotice(
      opened
        ? 'Opening the Elixir assistant with your question filled in. Nothing is sent until you send it.'
        : 'The assistant is not available right now. Book a discovery call and we will answer your questions directly.',
    );
  }

  // One inline request at a time; each counts against the assistant's per-session message budget.
  async function ask(kind, text) {
    if (chat.pending) return false;
    const id = ++inlineSequence.current;
    inlineController.current?.abort();
    inlineController.current = new AbortController();
    const questionIndex = chat.messages.length;
    let result;
    try {
      result = await askInline({
        state: chat,
        text,
        mode: ASSISTANT_MODE,
        budget,
        signal: inlineController.current.signal,
        onStart: (question) => {
          dispatchChat({ type: 'request', id, text: question });
          if (kind === 'summary') {
            setSummary({ prompt: text, index: questionIndex });
            setSummaryIndices((indices) => [...indices, questionIndex]);
          }
        },
      });
    } catch (error) {
      if (error?.name === 'AbortError') return false;
      throw error;
    }
    if (id !== inlineSequence.current) return false;
    if (result.status === 'ok') {
      dispatchChat({ type: 'success', id, reply: result.reply });
      setInlineIssue((issues) => ({ ...issues, [kind]: null }));
      return true;
    }
    if (result.status === 'error') dispatchChat({ type: 'failure', id, error: result.message });
    if (kind === 'summary' && result.status === 'error') {
      setSummary(null);
      setSummaryIndices((indices) => indices.filter((index) => index !== questionIndex));
    }
    if (result.status !== 'empty') setInlineIssue((issues) => ({ ...issues, [kind]: { status: result.status, message: result.message ?? '' } }));
    return false;
  }

  const prompt = type ? composeAssistantPrompt(type.id, needIds) : null;
  const summaryReply = summary && summary.prompt === prompt ? chat.messages[summary.index + 1] ?? null : null;
  const summaryPending = Boolean(summary && summary.prompt === prompt && !summaryReply && chat.pending);
  const inline = {
    available: inlineAvailable(ASSISTANT_MODE),
    pending: chat.pending,
    turns: questionTurns(chat.messages, summaryIndices),
    summaryReply,
    summaryPending,
    issue: inlineIssue,
    onSummary: () => (prompt ? ask('summary', prompt) : Promise.resolve(false)),
    onQuestion: (text) => ask('question', text),
  };

  const stepLabelId = `${baseId}-step-label`;

  return (
    <div className={styles.funnel}>
      <ul className={styles.types} aria-label="Provider types">
        {providerTypes.map((option) => {
          const selected = option.id === typeId;
          return (
            <li key={option.id}>
              <button
                type="button"
                ref={(node) => {
                  cardRefs.current[option.id] = node;
                }}
                className={cn(styles.typeCard, selected && styles.typeCardSelected)}
                aria-pressed={selected}
                aria-controls={type ? `${baseId}-stage` : undefined}
                onClick={() => chooseType(option.id)}
              >
                <span className={styles.typeLabel}>{option.label}</span>
                <span className={styles.typeTeaser}>{option.teaser}</span>
                <span className={styles.typeAction} aria-hidden="true">
                  {selected ? 'Selected' : 'Start'}
                  <Icon name={selected ? 'check' : 'arrowRight'} size={18} />
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {type && (
        <section id={`${baseId}-stage`} className={styles.stage} aria-label={`${type.label} presentation`}>
          <div className={styles.stageTop}>
            <p className={styles.stageType}>
              <span className={styles.stageTypeLabel}>Your presentation:</span> {type.label}
            </p>
            <nav aria-label="Presentation steps">
              <ol className={styles.dots}>
                {FUNNEL_STEPS.map((item, index) => {
                  const current = index === step;
                  const reachable = index <= furthestStep;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        className={cn(styles.dot, current && styles.dotCurrent, reachable && styles.dotReached)}
                        aria-current={current ? 'step' : undefined}
                        disabled={!reachable}
                        onClick={() => goTo(index)}
                      >
                        <span className="visually-hidden">
                          Step {index + 1} of {FUNNEL_STEPS.length}: {item.label}
                          {current ? ' (current)' : ''}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>

          <p className={styles.stepCounter}>
            Step {step + 1} of {FUNNEL_STEPS.length}: {FUNNEL_STEPS[step].label}
          </p>

          <div key={`${type.id}-${step}`} className={styles.slide}>
            {step === 0 && <WorldStep type={type} headingRef={stepHeadingRef} headingId={stepLabelId} />}
            {step === 1 && (
              <NeedsStep
                type={type}
                needIds={needIds}
                onToggle={(id) => setNeedIds((current) => toggleNeed(current, id))}
                headingRef={stepHeadingRef}
                headingId={stepLabelId}
              />
            )}
            {step === 2 && (
              <WhyStep
                type={type}
                needIds={needIds}
                inline={inline}
                headingRef={stepHeadingRef}
                headingId={stepLabelId}
              />
            )}
            {step === 3 && (
              <CloseStep
                type={type}
                needIds={needIds}
                onAsk={askElixir}
                notice={assistantNotice}
                inline={inline}
                headingRef={stepHeadingRef}
                headingId={stepLabelId}
              />
            )}
          </div>

          {step < LAST_STEP && (
            <p className={styles.discoveryNote}>
              Prefer to talk it through?{' '}
              <a className={styles.discoveryLink} href={DISCOVERY_CALL_URL}>
                Book a discovery call
              </a>
            </p>
          )}

          <div className={styles.controls}>
            <Button variant="outline" size="sm" onClick={() => goTo(step - 1)} disabled={step === 0}>
              <Icon name="arrowLeft" size={18} />
              Back
            </Button>
            <button type="button" className={styles.restart} onClick={restart}>
              Start over
            </button>
            {step < LAST_STEP ? (
              <Button variant="tertiary" size="sm" onClick={() => goTo(step + 1)}>
                {step === 0 ? 'What are you looking for?' : 'Next'}
                <Icon name="arrowRight" size={18} />
              </Button>
            ) : (
              <span className={styles.controlSpacer} aria-hidden="true" />
            )}
          </div>
        </section>
      )}
    </div>
  );
}

function StepHeading({ headingRef, headingId, eyebrow, children }) {
  return (
    <header className={styles.stepHeader}>
      <p className={styles.stepEyebrow}>{eyebrow}</p>
      <h3 id={headingId} ref={headingRef} tabIndex={-1} className={styles.stepTitle}>
        {children}
      </h3>
    </header>
  );
}

function WorldStep({ type, headingRef, headingId }) {
  const { world } = type;
  return (
    <>
      <StepHeading headingRef={headingRef} headingId={headingId} eyebrow={`Your world: ${type.label}`}>
        {world.headline}
      </StepHeading>
      <p className={styles.intro}>{world.intro}</p>
      <h4 className={styles.subTitle}>Challenges we hear about</h4>
      <ul className={styles.challenges}>
        {world.challenges.map((challenge) => (
          <li key={challenge}>{challenge}</li>
        ))}
      </ul>
      {world.note && <p className={styles.note}>{world.note}</p>}
    </>
  );
}

function NeedsStep({ type, needIds, onToggle, headingRef, headingId }) {
  const selectedCount = resolveNeeds(type.id, needIds).length;
  return (
    <>
      <StepHeading headingRef={headingRef} headingId={headingId} eyebrow="Pick as many as apply">
        What are you looking for?
      </StepHeading>
      <ul className={styles.needs}>
        {type.needs.map((need) => {
          const selected = needIds.includes(need.id);
          return (
            <li key={need.id}>
              <button
                type="button"
                className={cn(styles.needCard, selected && styles.needCardSelected)}
                aria-pressed={selected}
                onClick={() => onToggle(need.id)}
              >
                <span className={styles.needCheck} aria-hidden="true">
                  {selected && <Icon name="check" size={16} />}
                </span>
                {need.label}
              </button>
            </li>
          );
        })}
      </ul>
      <p className={styles.hint} aria-live="polite">
        {selectedCount
          ? `${selectedCount} selected. Next shows how Elixir answers ${selectedCount === 1 ? 'it' : 'them'}.`
          : 'Nothing selected yet. You can also skip ahead for the essentials.'}
      </p>
    </>
  );
}

function WhyStep({ type, needIds, inline, headingRef, headingId }) {
  const why = buildWhyElixir(type.id, needIds);
  return (
    <>
      <StepHeading headingRef={headingRef} headingId={headingId} eyebrow="Tailored for you">
        {why.title}
      </StepHeading>
      <p className={styles.intro}>{why.lead}</p>
      <ol className={styles.points}>
        {why.points.map((point, index) => (
          <li key={point.id} className={styles.point}>
            <span className={styles.pointNumber} aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h4 className={styles.pointTitle}>{point.title}</h4>
              <p className={styles.pointText}>{point.text}</p>
              <Link to={point.to} className={styles.pointLink}>
                Read more: {point.linkLabel}
                <Icon name="chevronRight" size={16} />
              </Link>
            </div>
          </li>
        ))}
      </ol>
      <TailoredAnswer inline={inline} audience={type.audience} />
    </>
  );
}

function DiscoveryFallback({ children }) {
  return (
    <p className={styles.fallback}>
      {children}{' '}
      <a className={styles.fallbackLink} href={DISCOVERY_CALL_URL}>
        Book a discovery call
      </a>
    </p>
  );
}

function fallbackCopy(issue, subject) {
  if (!issue || issue.status === 'off') {
    return `Want ${subject} for your practice? Our team can walk you through it on a discovery call.`;
  }
  if (issue.status === 'limit') {
    return 'You have reached this visit’s limit for assistant answers. A discovery call is the best next step.';
  }
  return `${issue.message} The points above still apply, and our team can answer the rest on a discovery call.`;
}

function Sources({ citations }) {
  if (!citations?.length) return null;
  return (
    <ul className={styles.sources}>
      {citations.map((source) => (
        <li key={source.id}>
          <a href={source.url}>{source.title}</a>
        </li>
      ))}
    </ul>
  );
}

/** The one-time, AI-tailored answer under the static points. The static points always stay. */
function TailoredAnswer({ inline, audience }) {
  const issue = inline.issue.summary;
  if (!inline.available) {
    return (
      <div className={styles.tailored}>
        <DiscoveryFallback>{fallbackCopy(null, 'this tailored')}</DiscoveryFallback>
      </div>
    );
  }
  return (
    <div className={styles.tailored} aria-live="polite">
      {inline.summaryReply ? (
        <section className={styles.aiAnswer} aria-label="Tailored answer from Elixir AI">
          <p className={styles.aiEyebrow}>Elixir AI · tailored for {audience}</p>
          <p className={styles.aiText}>{inline.summaryReply.content}</p>
          <Sources citations={inline.summaryReply.citations} />
          <p className={styles.aiNote}>
            Automated answer. Have a question about it? Ask on the next step, or{' '}
            <a className={styles.fallbackLink} href={DISCOVERY_CALL_URL}>
              book a discovery call
            </a>
            .
          </p>
        </section>
      ) : inline.summaryPending ? (
        <p className={styles.pending} role="status">
          Tailoring an answer for your practice…
        </p>
      ) : issue && issue.status !== 'error' ? (
        <DiscoveryFallback>{fallbackCopy(issue, 'this tailored')}</DiscoveryFallback>
      ) : (
        <>
          {issue && <DiscoveryFallback>{fallbackCopy(issue, 'this tailored')}</DiscoveryFallback>}
          <Button variant="outline" size="sm" onClick={inline.onSummary} disabled={inline.pending}>
            <Icon name="sparkle" size={18} />
            {issue ? 'Try the tailored answer again' : 'Tailor this to my practice with Elixir AI'}
          </Button>
          <p className={styles.aiNote}>Sends your selections above to the Elixir assistant once. Please avoid patient information.</p>
        </>
      )}
    </div>
  );
}

/** A small question box answered inline by the same assistant, under the same limits. */
function InlineQuestions({ inline }) {
  const [draft, setDraft] = useState('');
  const fieldId = useId();
  const issue = inline.issue.question;
  if (!inline.available) {
    return (
      <div className={styles.qa}>
        <DiscoveryFallback>Have a question? Our team will answer it directly on a discovery call.</DiscoveryFallback>
      </div>
    );
  }
  const blocked = issue?.status === 'limit' || issue?.status === 'off';
  async function submit(event) {
    event.preventDefault();
    const text = draft.trim();
    if (!text || inline.pending) return;
    setDraft('');
    const answered = await inline.onQuestion(text);
    if (!answered) setDraft((current) => current || text);
  }
  return (
    <section className={styles.qa} aria-label="Ask a question about Elixir">
      {inline.turns.length > 0 && (
        <div className={styles.qaLog} role="log" aria-label="Your questions and answers" aria-live="polite">
          {inline.turns.map((turn) => (
            <div key={turn.index} className={turn.role === 'user' ? styles.qaQuestion : styles.qaAnswer}>
              <span className={styles.qaSpeaker}>{turn.role === 'user' ? 'You' : 'Elixir AI'}</span>
              <p>{turn.content}</p>
              {turn.role === 'assistant' && <Sources citations={turn.citations} />}
            </div>
          ))}
        </div>
      )}
      {inline.pending && !inline.summaryPending && (
        <p className={styles.pending} role="status">
          Finding a helpful answer…
        </p>
      )}
      {issue && <DiscoveryFallback>{fallbackCopy(issue, 'an answer')}</DiscoveryFallback>}
      {!blocked && (
        <form className={styles.qaForm} onSubmit={submit}>
          <label htmlFor={fieldId} className={styles.qaLabel}>
            Ask Elixir AI a question about your practice
          </label>
          <div className={styles.qaRow}>
            <input
              id={fieldId}
              className={styles.qaInput}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              maxLength={MAX_USER_LENGTH}
              autoComplete="off"
              placeholder="For example: how does billing work for us?"
            />
            <Button type="submit" variant="outline" size="sm" disabled={inline.pending || !draft.trim()}>
              Ask
            </Button>
          </div>
          <p className={styles.aiNote}>Automated answers. Please avoid patient information.</p>
        </form>
      )}
    </section>
  );
}

function CloseStep({ type, needIds, onAsk, notice, inline, headingRef, headingId }) {
  const needs = resolveNeeds(type.id, needIds);
  return (
    <>
      <StepHeading headingRef={headingRef} headingId={headingId} eyebrow="Next step">
        See it with your own workflows
      </StepHeading>
      <p className={styles.intro}>
        A discovery call walks through Elixir against how your team actually works. Or ask the Elixir assistant a
        question first, starting from what you picked here.
      </p>
      <div className={styles.recap}>
        <p className={styles.recapTitle}>Your selections</p>
        <p className={styles.recapText}>
          {type.label}
          {needs.length ? `: ${needs.map((need) => need.label).join(' · ')}` : ''}
        </p>
      </div>
      <div className={styles.ctas}>
        <Button variant="tertiary" size="lg" href={DISCOVERY_CALL_URL}>
          Book a discovery call
          <Icon name="arrowRight" size={20} />
        </Button>
        <Button variant="outline" size="lg" onClick={onAsk}>
          <Icon name="sparkle" size={20} />
          Ask Elixir a question
        </Button>
      </div>
      <p className={styles.hint} role="status">
        {notice}
      </p>
      <InlineQuestions inline={inline} />
    </>
  );
}

export default ProviderFunnel;
