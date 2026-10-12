import { useEffect, useId, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '../../../utils/cn';
import { mainNav, navContainsPath } from '../../../data/navigation';
import Icon from '../../ui/Icon/Icon';
import MegaMenu from './MegaMenu';
import styles from './DesktopNav.module.css';

// Grace period so the panel survives the pointer crossing the gap between trigger and panel.
const CLOSE_DELAY = 150;

/**
 * Desktop navigation (≥ 1200px). Each top-level item is a disclosure button: it opens its panel
 * on hover or click, stays open while the pointer moves into the panel, and closes on pointer
 * leave, Escape (focus returns to the trigger), an outside click, focus leaving, or following a
 * menu link.
 */
function DesktopNav() {
  const baseId = useId();
  const { pathname } = useLocation();
  const [openIndex, setOpenIndex] = useState(null);
  const closeTimer = useRef(null);
  const navRef = useRef(null);
  const triggerRefs = useRef([]);

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
        triggerRefs.current[openIndex]?.focus();
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
        {mainNav.map((item, index) => {
          const isOpen = openIndex === index;
          const triggerId = `${baseId}-trigger-${index}`;
          const panelId = `${baseId}-panel-${index}`;
          return (
            <li
              key={item.label}
              className={cn(styles.item, item.layout === 'dropdown' && styles.dropdownItem)}
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
                onClick={() => (isOpen ? close() : open(index))}
                className={cn(styles.trigger, navContainsPath(item, pathname) && styles.active)}
              >
                {item.label}
                <Icon name="expandMore" size={20} className={cn(styles.chevron, isOpen && styles.chevronOpen)} />
              </button>
              {isOpen && <MegaMenu item={item} id={panelId} labelledBy={triggerId} onNavigate={close} />}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default DesktopNav;
