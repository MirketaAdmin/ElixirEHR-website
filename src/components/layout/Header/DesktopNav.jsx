import { useEffect, useId, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '../../../utils/cn';
import { mainNav, megaPanels, navContainsPath } from '../../../data/navigation';
import Icon from '../../ui/Icon/Icon';
import MegaMenu from './MegaMenu';
import styles from './DesktopNav.module.css';

// Grace period so the panel survives the pointer crossing the gap between trigger and panel.
const CLOSE_DELAY = 150;

/**
 * Desktop navigation (≥ 1200px), after the reference navbar: one trigger per mega panel (Home is
 * the logo). A panel opens on hover, on click and when its trigger gets keyboard focus; it stays open
 * while the pointer moves into it, and closes on pointer leave, Escape (focus returns to the
 * trigger), an outside click, focus leaving, or following a menu link. All panels stay mounted
 * so switching between triggers cross-fades them.
 */
function DesktopNav() {
  const baseId = useId();
  const { pathname } = useLocation();
  const [openIndex, setOpenIndex] = useState(null);
  const closeTimer = useRef(null);
  const navRef = useRef(null);
  const triggerRefs = useRef([]);
  const skipFocusOpen = useRef(false);
  const lastPointer = useRef(null);

  const cancelClose = () => clearTimeout(closeTimer.current);
  const open = (index) => {
    cancelClose();
    setOpenIndex(index);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenIndex(null), CLOSE_DELAY);
  };
  const close = () => {
    cancelClose();
    setOpenIndex(null);
  };

  useEffect(() => {
    if (openIndex === null) return undefined;

    function onPointerDown(event) {
      if (!navRef.current?.contains(event.target)) setOpenIndex(null);
    }
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        skipFocusOpen.current = true;
        triggerRefs.current[openIndex]?.focus();
        skipFocusOpen.current = false;
        setOpenIndex(null);
      }
    }
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [openIndex]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  return (
    <nav ref={navRef} aria-label="Primary" className={styles.nav}>
      <ul className={styles.list}>
        {megaPanels.map((panel, index) => {
          const isOpen = openIndex === index;
          const triggerId = `${baseId}-trigger-${index}`;
          const panelId = `${baseId}-panel-${index}`;
          const groups = mainNav.filter((group) => panel.groups.includes(group.label));
          const active = groups.some((group) => navContainsPath(group, pathname));
          return (
            <li
              key={panel.label}
              className={styles.item}
              onPointerEnter={(event) => event.pointerType === 'mouse' && open(index)}
              onPointerLeave={(event) => event.pointerType === 'mouse' && scheduleClose()}
              onBlur={(event) => {
                // Keyboard focus moved elsewhere (a click outside is handled by the pointer listener).
                if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) close();
              }}
            >
              <button
                ref={(node) => {
                  triggerRefs.current[index] = node;
                }}
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onPointerDown={(event) => {
                  lastPointer.current = event.pointerType;
                }}
                onClick={(event) => {
                  // A mouse is already hovering the trigger, so its panel is open: as in the
                  // reference, clicking keeps it open. Keyboard and touch toggle it.
                  const mouse = event.detail > 0 && lastPointer.current === 'mouse';
                  if (isOpen && !mouse) close();
                  else open(index);
                }}
                onFocus={(event) => {
                  // Like the reference's :focus-within: tabbing onto a trigger opens its panel.
                  if (!skipFocusOpen.current && event.currentTarget.matches(':focus-visible')) open(index);
                }}
                className={cn(styles.trigger, active && styles.active)}
              >
                {panel.label}
                <Icon name="expandMore" size={16} className={styles.chevron} />
              </button>
              <MegaMenu panel={panel} id={panelId} labelledBy={triggerId} open={isOpen} onNavigate={close} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default DesktopNav;
