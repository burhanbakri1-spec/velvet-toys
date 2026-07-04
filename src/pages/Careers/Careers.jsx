import { motion } from 'framer-motion';
import SectionTitle from '../../components/shared/SectionTitle';
import { fadeIn, fadeInUp, staggerContainer } from '../../utils/animations';
import './Careers.css';

export default function Careers() {
  return (
    <div className="careers-page">
      <div className="careers-hero">
        <div className="container">
          <h1 className="careers-hero-title">Careers</h1>
          <p className="careers-hero-subtitle">Join the Velvet team.</p>
        </div>
      </div>

      <motion.section
        className="careers-section container"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle title="Work With Us" />
        <motion.p
          className="careers-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Velvet is a young, innovative, fast-growing toy company seeking motivated
          and talented people to join our global team. We are always looking for
          creative individuals who are passionate about play.
        </motion.p>
        <motion.div
          className="careers-cta-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <a
            href="https://velvet.com/careers"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Open Positions
          </a>
        </motion.div>
      </motion.section>

      <motion.section
        className="careers-values bg-light"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          <SectionTitle title="Why Velvet?" align="center" />
          <motion.div
            className="values-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="value-card" variants={fadeInUp}>
              <h3>Innovation</h3>
              <p>We push boundaries and reimagine what play can be.</p>
            </motion.div>
            <motion.div className="value-card" variants={fadeInUp}>
              <h3>Global Reach</h3>
              <p>Work with a team that reaches over 120 countries.</p>
            </motion.div>
            <motion.div className="value-card" variants={fadeInUp}>
              <h3>Creativity</h3>
              <p>Bring your ideas to life in a dynamic environment.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
