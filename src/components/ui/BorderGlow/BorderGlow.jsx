import { useCallback, useEffect, useRef } from 'react';
import { cn } from '../../../utils/cn';
import styles from './BorderGlow.module.css';

/*
 * Edge glow card, adapted from React Bits "Border Glow" (reactbits.dev/components/border-glow).
 * The pointer's angle around the card's centre and its proximity to the edge are written to CSS
 * variables (no React re-renders); conic-gradient masks light the border nearest the pointer.
 * `sweep` plays the reference's one-off glow sweep around the edge — here when the card first
 * scrolls into view (skipped for reduced motion). Colours default to Elixir lime and lavender.
 * The glow extends `glowRadius` px beyond the card, so the consuming section should clip
 * horizontal overflow (`overflow-x: clip`) where cards reach the page edge.
 */

function parseHsl(value) {
  const match = value.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  return match ? match.slice(1, 4).map(Number) : [77, 72, 60];
}

function glowVars(glowColor, intensity) {
  const [h, s, l] = parseHsl(glowColor);
  const keys = ['', '-60', '-50', '-40', '-30', '-20', '-10'];
  const opacities = [100, 60, 50, 40, 30, 20, 10];
  return Object.fromEntries(
    keys.map((key, i) => [`--glow-color${key}`, `hsl(${h}deg ${s}% ${l}% / ${Math.min(opacities[i] * intensity, 100)}%)`]),
  );
}

const GRADIENT_POSITIONS = ['80% 55%', '69% 34%', '8% 6%', '41% 38%', '86% 85%', '82% 18%', '51% 4%'];
const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1];

function gradientVars(colors) {
  const vars = Object.fromEntries(
    GRADIENT_POSITIONS.map((position, i) => [
      `--gradient-${i}`,
      `radial-gradient(at ${position}, ${colors[Math.min(COLOR_MAP[i], colors.length - 1)]} 0px, transparent 50%)`,
    ]),
  );
  vars['--gradient-base'] = `linear-gradient(${colors[0]} 0 100%)`;
  return vars;
}

const easeOut = (t) => 1 - (1 - t) ** 3;
const easeIn = (t) => t ** 3;

function tween({ from, to, duration, delay = 0, ease, onUpdate, onEnd }) {
  let frame;
  let start;
  const step = (now) => {
    start ??= now;
    const t = Math.min((now - start) / duration, 1);
    onUpdate(from + (to - from) * ease(t));
    if (t < 1) frame = requestAnimationFrame(step);
    else onEnd?.();
  };
  const timer = setTimeout(() => (frame = requestAnimationFrame(step)), delay);
  return () => {
    clearTimeout(timer);
    cancelAnimationFrame(frame);
  };
}

function BorderGlow({
  as: Tag = 'div',
  children,
  className,
  innerClassName,
  edgeSensitivity = 30,
  glowColor = '77 72 60',
  backgroundColor = '#3c2658',
  glowRadius = 32,
  glowIntensity = 0.7,
  coneSpread = 25,
  colors = ['#95c11f', '#c9b6e4', '#ecdeee'],
  fillOpacity = 0.25,
  sweep = false,
  sweepDelay = 0,
  style,
  ...rest
}) {
  const ref = useRef(null);

  const handlePointerMove = useCallback((event) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = event.clientX - rect.left - cx;
    const dy = event.clientY - rect.top - cy;
    const kx = dx === 0 ? Infinity : cx / Math.abs(dx);
    const ky = dy === 0 ? Infinity : cy / Math.abs(dy);
    const proximity = Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
    let angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
    if (angle < 0) angle += 360;
    card.style.setProperty('--edge-proximity', (proximity * 100).toFixed(3));
    card.style.setProperty('--cursor-angle', `${angle.toFixed(3)}deg`);
  }, []);

  useEffect(() => {
    const card = ref.current;
    if (!sweep || !card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const cancels = [];
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const startAngle = 110;
        const endAngle = 465;
        const setAngle = (v) => card.style.setProperty('--cursor-angle', `${startAngle + (endAngle - startAngle) * (v / 100)}deg`);
        const setEdge = (v) => card.style.setProperty('--edge-proximity', v);
        card.classList.add(styles.sweeping);
        setAngle(0);
        cancels.push(
          tween({ from: 0, to: 100, duration: 500, delay: sweepDelay, ease: easeOut, onUpdate: setEdge }),
          tween({ from: 0, to: 50, duration: 1500, delay: sweepDelay, ease: easeIn, onUpdate: setAngle }),
          tween({ from: 50, to: 100, duration: 2250, delay: sweepDelay + 1500, ease: easeOut, onUpdate: setAngle }),
          tween({
            from: 100,
            to: 0,
            duration: 1500,
            delay: sweepDelay + 2500,
            ease: easeIn,
            onUpdate: setEdge,
            onEnd: () => card.classList.remove(styles.sweeping),
          }),
        );
      },
      { threshold: 0.4 },
    );
    observer.observe(card);
    return () => {
      observer.disconnect();
      cancels.forEach((cancel) => cancel());
    };
  }, [sweep, sweepDelay]);

  return (
    <Tag
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn(styles.card, className)}
      style={{
        '--card-bg': backgroundColor,
        '--edge-sensitivity': edgeSensitivity,
        '--glow-padding': `${glowRadius}px`,
        '--cone-spread': coneSpread,
        '--fill-opacity': fillOpacity,
        ...glowVars(glowColor, glowIntensity),
        ...gradientVars(colors),
        ...style,
      }}
      {...rest}
    >
      <span className={styles.edgeLight} aria-hidden="true" />
      <div className={cn(styles.inner, innerClassName)}>{children}</div>
    </Tag>
  );
}

export default BorderGlow;
