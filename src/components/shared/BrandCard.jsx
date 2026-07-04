import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cardHover, cardImageHover, fadeIn } from '../../utils/animations';
import './BrandCard.css';

export default function BrandCard({ brand }) {
  const { name, slug, image, description } = brand;

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="brand-card-wrapper"
        variants={cardHover}
        initial="rest"
        whileHover="hover"
      >
        <Link to={`/brands/${slug}`} className="brand-card">
          <div className="brand-card-image">
            {image ? (
              <motion.img
                src={image}
                alt={name}
                loading="lazy"
                variants={cardImageHover}
              />
            ) : (
              <div className="brand-card-placeholder">{name}</div>
            )}
          </div>
          <div className="brand-card-overlay">
            <h3 className="brand-card-name">{name}</h3>
            {description && <p className="brand-card-desc">{description}</p>}
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
