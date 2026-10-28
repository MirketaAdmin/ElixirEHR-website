import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import MotionController from '../../components/motion/MotionController';
import CookieConsent from '../../components/consent/CookieConsent';

function MainLayout() {
  const { pathname, hash } = useLocation();

  // Start each page at the top — or at its #anchor when the link names one (e.g. a demo request
  // landing on the Contact Us form).
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) target.scrollIntoView({ block: 'start' });
      else window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return (
    <CookieConsent>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MotionController />
    </CookieConsent>
  );
}

export default MainLayout;
