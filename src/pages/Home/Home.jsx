import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../../components/shared/HeroSection';
import BrandGrid from '../../components/shared/BrandGrid';
import SectionTitle from '../../components/shared/SectionTitle';
import brands from '../../data/brands';
import heroBg from '../../assets/images/collection-4dce34bf45802e2e4724c17b51b0980b.png';
import { fadeIn, fadeInLeft, fadeInRight } from '../../utils/animations';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection
        title="Reimagining Play, Every Day."
        subtitle="Inspired by the limitless possibilities of kids' imaginations, Velvet is an award-winning company devoted to reimagining what it means to play."
        backgroundImage={heroBg}
        height="100vh"
      >
        <div className="hero-banner-links">
          <Link to="/brands" className="btn btn-outline-light">
            Explore Brands
          </Link>
        </div>
      </HeroSection>

      <motion.section
        className="home-section container"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <SectionTitle
          title="Our Brands"
          subtitle="Discover our award-winning toy brands loved by kids worldwide."
          align="center"
        />
        <BrandGrid brands={brands} />
        <motion.div
          className="home-cta"
          style={{ textAlign: 'center', marginTop: '40px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link to="/brands" className="btn btn-outline">View All Brands</Link>
        </motion.div>
      </motion.section>

      <motion.section
        className="home-section home-about bg-light"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          <div className="home-about-grid">
            <motion.div
              className="home-about-content"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionTitle title="About Velvet" />
              <p>
                Velvet is one of the largest toy companies in the world, distributing
                to all major retailers in over 120 countries. Our brands include
                Bunch O Balloons, XSHOT, Rainbocorns, Robo Alive, Smashers,
                5 Surprise, and Pets Alive.
              </p>
              <Link to="/about" className="btn btn-outline" style={{ marginTop: '24px', display: 'inline-block' }}>
                Learn More
              </Link>
            </motion.div>
            <motion.div
              className="home-about-image"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="home-about-placeholder" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="home-section home-cta-section bg-red"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container text-center">
          <motion.h2
            className="cta-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Join the Team
          </motion.h2>
          <motion.p
            className="cta-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            We're always looking for talented people to join our global team.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/careers" className="btn btn-light">View Careers</Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
