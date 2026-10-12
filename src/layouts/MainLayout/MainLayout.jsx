import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';

function MainLayout() {
  const { pathname } = useLocation();

  // Start each page at the top when navigating between routes.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
