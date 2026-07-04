import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cardHover, cardImageHover, fadeIn } from '../../utils/animations';
import './ProductCard.css';

export default function ProductCard({ product, brandSlug }) {
  const { name, slug, image } = product;

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={cardHover}
        initial="rest"
        whileHover="hover"
      >
        <Link to={`/brands/${brandSlug}/${slug}`} className="product-card">
          <div className="product-card-image">
            {image ? (
              <motion.img
                src={image}
                alt={name}
                loading="lazy"
                variants={cardImageHover}
              />
            ) : (
              <div className="product-card-placeholder">{name}</div>
            )}
          </div>
          <h4 className="product-card-name">{name}</h4>
        </Link>
      </motion.div>
    </motion.div>
  );
}
