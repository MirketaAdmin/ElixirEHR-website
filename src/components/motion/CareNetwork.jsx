import { useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';
import styles from './CareNetwork.module.css';

/*
 * The site's signature motif: a quiet "care network" of nodes behind the dark hero and CTA
 * bands. Nodes drift slowly, nearby nodes are linked, and a few lime signals travel along the
 * links — patient, care team and system connecting, the platform's whole idea. The network
 * leans slightly toward the pointer.
 *
 * Cost is kept low:
 * - a single canvas at a capped pixel ratio, about 30fps;
 * - paused when off screen or the tab is hidden;
 * - fewer nodes on small screens.
 * With reduced motion it draws one still frame. It is decorative (aria-hidden) and sits under
 * the band's content.
 */

const LIME = [149, 193, 31];
const LAVENDER = [236, 222, 238];

function CareNetwork({ className, density = 1 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!context) return undefined;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = 0;
    let height = 0;
    let nodes = [];
    let signals = [];
    let frame = 0;
    let running = false;
    let last = 0;
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

    function seed() {
      const area = width * height;
      const count = Math.round(Math.min(34, Math.max(10, area / 26000)) * density);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: 1.2 + Math.random() * 1.6,
        hub: Math.random() < 0.18,
      }));
      signals = [];
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      seed();
      draw(0);
    }

    const linkDistance = () => Math.min(180, Math.max(110, width / 8));

    function draw(dt) {
      context.clearRect(0, 0, width, height);
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;
      const offsetX = pointer.x * 14;
      const offsetY = pointer.y * 10;
      const maxDistance = linkDistance();

      if (dt) {
        nodes.forEach((node) => {
          node.x += node.vx * dt;
          node.y += node.vy * dt;
          if (node.x < -20 || node.x > width + 20) node.vx *= -1;
          if (node.y < -20 || node.y > height + 20) node.vy *= -1;
        });
      }

      // Links between nearby nodes; occasionally one carries a signal.
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance > maxDistance) continue;
          const alpha = (1 - distance / maxDistance) * 0.22;
          context.strokeStyle = `rgba(${LAVENDER.join(',')}, ${alpha})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(a.x + offsetX, a.y + offsetY);
          context.lineTo(b.x + offsetX, b.y + offsetY);
          context.stroke();
          if (dt && signals.length < 4 && Math.random() < 0.0009 * dt) signals.push({ a, b, t: 0 });
        }
      }

      nodes.forEach((node) => {
        const color = node.hub ? LIME : LAVENDER;
        context.fillStyle = `rgba(${color.join(',')}, ${node.hub ? 0.75 : 0.45})`;
        context.beginPath();
        context.arc(node.x + offsetX, node.y + offsetY, node.r + (node.hub ? 0.8 : 0), 0, Math.PI * 2);
        context.fill();
      });

      // Signals: a lime pulse travelling along a link.
      signals = signals.filter((signal) => signal.t <= 1);
      signals.forEach((signal) => {
        signal.t += 0.0012 * dt;
        const x = signal.a.x + (signal.b.x - signal.a.x) * signal.t + offsetX;
        const y = signal.a.y + (signal.b.y - signal.a.y) * signal.t + offsetY;
        const glow = context.createRadialGradient(x, y, 0, x, y, 10);
        glow.addColorStop(0, `rgba(${LIME.join(',')}, 0.9)`);
        glow.addColorStop(1, `rgba(${LIME.join(',')}, 0)`);
        context.fillStyle = glow;
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2);
        context.fill();
      });
    }

    function tick(time) {
      if (!running) return;
      frame = requestAnimationFrame(tick);
      const elapsed = time - last;
      if (elapsed < 33) return;
      last = time;
      draw(Math.min(elapsed, 66) / 16);
    }

    function start() {
      if (running || reduce || document.hidden) return;
      running = true;
      last = performance.now();
      frame = requestAnimationFrame(tick);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(frame);
    }

    function onPointerMove(event) {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = (event.clientX - rect.left) / rect.width - 0.5;
      pointer.ty = (event.clientY - rect.top) / rect.height - 0.5;
    }

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const visibility = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
    visibility.observe(canvas);
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVisibility);
    const band = canvas.parentElement;
    band?.addEventListener('pointermove', onPointerMove, { passive: true });

    return () => {
      stop();
      resizeObserver.disconnect();
      visibility.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      band?.removeEventListener('pointermove', onPointerMove);
    };
  }, [density]);

  return <canvas ref={canvasRef} className={cn(styles.canvas, className)} aria-hidden="true" />;
}

export default CareNetwork;
