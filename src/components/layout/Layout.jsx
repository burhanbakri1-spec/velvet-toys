import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import TopHeader from './TopHeader';
import Navbar from './Navbar';
import Footer from './Footer';
import { pageTransition } from '../../utils/animations';

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
