import { motion } from 'framer-motion';
import BrandCard from './BrandCard';
import { staggerContainer } from '../../utils/animations';
import './BrandGrid.css';

export default function BrandGrid({ brands }) {
  return (
    <motion.div
      className="brand-grid"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      {brands.map((brand) => (
        <BrandCard key={brand.slug} brand={brand} />
      ))}
    </motion.div>
  );
}
