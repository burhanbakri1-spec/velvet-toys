import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';
import './SectionTitle.css';

export default function SectionTitle({ title, subtitle, align = 'left' }) {
  return (
    <motion.div
      className={`section-title ${align}`}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="section-title-text">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </motion.div>
  );
}
