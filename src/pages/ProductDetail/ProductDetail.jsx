import { useParams, Link } from 'react-router-dom';
import brands, { brandProducts } from '../../data/brands';
import './ProductDetail.css';

export default function ProductDetail() {
  const { brand, product } = useParams();
  const brandInfo = brands.find((b) => b.slug === brand);
  const products = brandProducts[brand] || [];
  const productInfo = products.find((p) => p.slug === product);

  if (!brandInfo || !productInfo) {
    return (
      <div className="product-detail-page">
        <div className="container">
          <h1>Product not found</h1>
          <Link to="/brands">View all brands</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-hero">
        <div className="container">
          <Link to={`/brands/${brand}`} className="product-back-link">
            &larr; {brandInfo.name}
          </Link>
          <h1 className="product-detail-title">{productInfo.name}</h1>
        </div>
      </div>

      <section className="product-detail-section container">
        <div className="product-detail-layout">
          <div className="product-detail-image">
            <div className="product-image-placeholder">
              {productInfo.name}
            </div>
          </div>
          <div className="product-detail-info">
            <h2>{productInfo.name}</h2>
            <p>Product details and description coming soon.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
