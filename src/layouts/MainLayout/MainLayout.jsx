import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import MotionController from '../../components/motion/MotionController';
import CookieConsent from '../../components/consent/CookieConsent';

function MainLayout() {
  const { pathname, search, hash } = useLocation();

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

  // Every page URL ends with a slash: /about-us redirects to /about-us/ (the hosting config does the
  // same with a 308 for requests that reach the server; this covers the dev server and old links).
  if (!pathname.endsWith('/')) return <Navigate to={`${pathname}/${search}${hash}`} replace />;

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
