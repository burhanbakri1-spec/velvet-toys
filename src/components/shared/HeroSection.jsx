import { motion } from 'framer-motion';
import { heroText, heroSubtitle, heroChildren } from '../../utils/animations';
import './HeroSection.css';

export default function HeroSection({ title, subtitle, backgroundImage, overlay = 'gradient', height = '100vh', children }) {
  return (
    <section className="hero-section" style={{ height }}>
      {backgroundImage && (
        <motion.div
          className="hero-background"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        >
          <img src={backgroundImage} alt="" />
        </motion.div>
      )}
      {overlay === 'gradient' && <div className="hero-gradient" />}
      {overlay === 'dark' && <div className="hero-dark-overlay" />}
      <div className="hero-content">
        {title && (
          <motion.h1
            className="hero-title"
            variants={heroText}
            initial="hidden"
            animate="visible"
          >
            {title}
          </motion.h1>
        )}
        {subtitle && (
          <motion.p
            className="hero-subtitle"
            variants={heroSubtitle}
            initial="hidden"
            animate="visible"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            variants={heroChildren}
            initial="hidden"
            animate="visible"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
