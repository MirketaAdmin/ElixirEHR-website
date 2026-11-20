import { useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button/Button';
import Icon from '../../components/ui/Icon/Icon';
import { cn } from '../../utils/cn';
import { DISCOVERY_CALL_URL, FUNNEL_STEPS, providerTypes } from './funnelData.mjs';
import {
  buildAssistantEventDetail,
  buildWhyElixir,
  clampStep,
  getProviderType,
  openAssistant,
  resolveNeeds,
  toggleNeed,
} from './funnelLogic.mjs';
import styles from './ProviderFunnel.module.css';

const LAST_STEP = FUNNEL_STEPS.length - 1;

/**
 * The guided provider funnel: pick a provider type, then step through a short, predefined
 * presentation (your world, what you need, why Elixir, next step). All content is static
 * (funnelData.mjs), so it costs nothing to run; the visitor can hand off to the site assistant
 * on the last step through the shared `elixir:open-assistant` event.
 */
function ProviderFunnel() {
  const [typeId, setTypeId] = useState(null);
  const [step, setStep] = useState(0);
  const [furthestStep, setFurthestStep] = useState(0);
  const [needIds, setNeedIds] = useState([]);
  const [assistantNotice, setAssistantNotice] = useState('');

  // Focus moves only after the visitor acts, never on first render or in the prerender.
  const focusTarget = useRef(null);
  const stepHeadingRef = useRef(null);
  const cardRefs = useRef({});
  const baseId = useId();

  const type = getProviderType(typeId);

  useEffect(() => {
    const target = focusTarget.current;
    focusTarget.current = null;
    if (target === 'step') stepHeadingRef.current?.focus();
    else if (target) cardRefs.current[target]?.focus();
  });

  function chooseType(id) {
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
              <WhyStep type={type} needIds={needIds} headingRef={stepHeadingRef} headingId={stepLabelId} />
            )}
            {step === 3 && (
              <CloseStep
                type={type}
                needIds={needIds}
                onAsk={askElixir}
                notice={assistantNotice}
                headingRef={stepHeadingRef}
                headingId={stepLabelId}
              />
            )}
          </div>

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

function WhyStep({ type, needIds, headingRef, headingId }) {
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
    </>
  );
}

function CloseStep({ type, needIds, onAsk, notice, headingRef, headingId }) {
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
    </>
  );
}

export default ProviderFunnel;
