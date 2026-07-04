import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/logo.jpeg';
import { staggerFast, fadeIn } from '../../utils/animations';
import './Navbar.css';

const navItems = [
  { label: 'Brands', path: '/brands', hasDropdown: true },
  { label: 'About', path: '/about' },
  { label: 'News', path: '/news' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
  { label: 'Where to Buy', path: '/where-to-buy' },
];

const brandLinks = [
  { label: '5 Surprise', path: '/brands/5-surprise' },
  { label: 'Ballers', path: '/brands/ballers' },
  { label: 'Bunch O Balloons', path: '/brands/bunch-o-balloons' },
  { label: 'Bunch O Bubbles', path: '/brands/bunch-o-bubbles' },
  { label: 'Coco Cones', path: '/brands/coco-cones' },
  { label: 'Fidget', path: '/brands/fidget' },
  { label: 'Fuggler', path: '/brands/fuggler' },
  { label: 'MAX', path: '/brands/max' },
  { label: 'MAX Build More', path: '/brands/max-build-more' },
  { label: 'Metal Machines', path: '/brands/metal-machines' },
  { label: 'Mini Brands', path: '/brands/mini-brands' },
  { label: 'My Mini', path: '/brands/my-mini' },
  { label: 'OOSH', path: '/brands/oosh' },
  { label: 'Pets Alive', path: '/brands/pets-alive' },
  { label: 'Rainbocorns', path: '/brands/rainbocorns' },
  { label: 'Robo Alive', path: '/brands/robo-alive' },
  { label: 'Smashers', path: '/brands/smashers' },
  { label: 'Snackles', path: '/brands/snackles' },
  { label: 'Sparkle Girlz', path: '/brands/sparkle-girlz' },
  { label: 'X-Shot', path: '/brands/xshot' },
  { label: 'X-Shot Water', path: '/brands/xshot-water' },
];

const MotionLink = motion.create(Link);

export default function Navbar() {
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) => `level-one-a ${isActive(path) ? 'active' : ''}`;

  return (
    <motion.header
      className="header-wrp"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.12)' : '0 2px 10px rgba(0,0,0,0)',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <div className="header-desktop-inner">
        <div className="col-left">
          <motion.div
            className="header-logo"
            whileHover={{ scale: 1.03 }}
          >
            <Link to="/">
              <img src={logo} alt="Velvet" style={{ height: '40px', width: 'auto' }} />
            </Link>
          </motion.div>
          <nav className="desktop-nav">
            <ul className="level-one-ul">
              <li className="level-one-li">
                <motion.div
                  className={`level-one-a a-dropdown ${brandsOpen ? 'active' : ''}`}
                  onClick={() => setBrandsOpen(!brandsOpen)}
                  onMouseEnter={() => setBrandsOpen(true)}
                  whileHover={{ opacity: 0.7 }}
                  style={{ cursor: 'pointer' }}
                >
                  <div>Brands</div>
                  <motion.svg
                    width="14" height="8" viewBox="0 0 14 8" fill="none"
                    animate={{ rotate: brandsOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.4" />
                  </motion.svg>
                </motion.div>
                <AnimatePresence>
                  {brandsOpen && (
                    <motion.div
                      className="mega-menu"
                      onMouseLeave={() => setBrandsOpen(false)}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <motion.div
                        className="mega-menu-grid"
                        variants={staggerFast}
                        initial="hidden"
                        animate="visible"
                      >
                        {brandLinks.map((brand) => (
                          <motion.div key={brand.path} variants={fadeIn}>
                            <MotionLink
                              to={brand.path}
                              className="mega-menu-link"
                              onClick={() => setBrandsOpen(false)}
                              whileHover={{ x: 4, color: '#D6001C' }}
                            >
                              {brand.label}
                            </MotionLink>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              {navItems.filter(item => item.label !== 'Brands').map((item) => (
                <li key={item.path} className="level-one-li">
                  <MotionLink
                    to={item.path}
                    className={linkClass(item.path)}
                    whileHover={{ opacity: 0.7 }}
                  >
                    <div>{item.label}</div>
                  </MotionLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="col-right">
          <motion.button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ opacity: 0.7 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" />
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" />
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" />
            </svg>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu-overlay"
            onClick={() => setMobileOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="mobile-menu"
              onClick={e => e.stopPropagation()}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <motion.button
                className="mobile-close"
                onClick={() => setMobileOpen(false)}
                whileTap={{ scale: 0.9 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" />
                </svg>
              </motion.button>
              <motion.nav
                variants={staggerFast}
                initial="hidden"
                animate="visible"
              >
                {[...navItems, ...brandLinks.map(b => ({ ...b, label: `  ${b.label}`, isBrand: true }))].map((item) => (
                  <motion.div key={item.path} variants={fadeIn}>
                    <MotionLink
                      to={item.path}
                      className="mobile-nav-link"
                      onClick={() => setMobileOpen(false)}
                      whileHover={{ x: 8, color: '#D6001C' }}
                    >
                      {item.label}
                    </MotionLink>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
