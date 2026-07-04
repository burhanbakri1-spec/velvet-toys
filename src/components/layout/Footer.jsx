import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, staggerContainer, linkHover } from '../../utils/animations';
import './Footer.css';

const footerGroups = [
  { heading: 'Quicklinks', links: [
    { label: 'Home', path: '/' },
    { label: 'News', path: '/news' },
    { label: 'Where to Buy', path: '/where-to-buy' },
    { label: 'Recalls & Safety', path: '/voluntary-recall-notice' },
  ]},
  { heading: 'Our Company', links: [
    { label: 'About Us', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
    { label: 'Patents', path: 'https://patents.velvettoys.com/', external: true },
  ]},
  { heading: 'Follow Us', links: [
    { label: '@lifeatvelvet', path: 'https://instagram.com/lifeatvelvet', external: true },
    { label: 'LinkedIn', path: 'https://www.linkedin.com/company/velvet', external: true },
    { label: 'TikTok', path: 'https://www.tiktok.com/@velvettoys', external: true },
  ]},
  { heading: 'Policies', links: [
    { label: 'Terms of Use', path: '/terms-of-use' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Cookie Policy', path: '/cookies' },
    { label: 'Declaration of Conformity', path: 'https://patents.velvettoys.com/wp-content/uploads/2025/11/EC-DECLARATION-OF-CONFORMITY.pdf', external: true },
  ]},
];

const MotionLink = motion.create(Link);
const MotionA = motion.create('a');

export default function Footer() {
  return (
    <footer>
      <div className="footer-main-container">
        <motion.div
          className="footer-title-btn-container"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="footer-title">Come work with us.</h2>
          <Link to="/careers" className="footer-careers-cta">
            <motion.div
              className="linkstyle__StyledLink footer-link-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Careers
            </motion.div>
          </Link>
        </motion.div>

        <motion.div
          className="footer-links-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {footerGroups.map((group) => (
            <motion.div
              key={group.heading}
              className="footer-link-group"
              variants={fadeIn}
            >
              <h4 className="footer-heading">{group.heading}</h4>
              <ul>
                {group.links.map((link) => (
                  <motion.li key={link.label} variants={fadeIn}>
                    {link.external ? (
                      <MotionA
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                        variants={linkHover}
                        initial="rest"
                        whileHover="hover"
                      >
                        {link.label}
                      </MotionA>
                    ) : (
                      <MotionLink
                        to={link.path}
                        className="footer-link"
                        variants={linkHover}
                        initial="rest"
                        whileHover="hover"
                      >
                        {link.label}
                      </MotionLink>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="footer-bottom"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="footer-social-grid">
            <MotionA
              href="https://www.facebook.com/VelvetToys/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.2, color: '#ccc' }}
              whileTap={{ scale: 0.9 }}
            >
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" width="20" height="20"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
            </MotionA>
            <MotionA
              href="https://www.instagram.com/velvet.toys/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.2, color: '#ccc' }}
              whileTap={{ scale: 0.9 }}
            >
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" width="20" height="20"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </MotionA>
            <MotionA
              href="https://www.linkedin.com/company/velvet"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.2, color: '#ccc' }}
              whileTap={{ scale: 0.9 }}
            >
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" width="20" height="20"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            </MotionA>
          </div>
          <motion.div
            className="footer-bottom-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            &copy; {new Date().getFullYear()} Velvet. All rights reserved. All audio, visual and textual content on this site (including all names, characters, images, trademarks and logos) are protected by trademarks, copyrights and other Intellectual Property rights owned by Velvet or its subsidiaries, licensors, licensees, suppliers and accounts.
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
