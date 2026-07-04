import { useParams, Link } from 'react-router-dom';
import ProductCard from '../../components/shared/ProductCard';
import SectionTitle from '../../components/shared/SectionTitle';
import brands, { brandProducts } from '../../data/brands';
import './BrandDetail.css';

export default function BrandDetail() {
  const { brand } = useParams();
  const brandInfo = brands.find((b) => b.slug === brand);
  const products = brandProducts[brand] || [];

  if (!brandInfo) {
    return (
      <div className="brand-detail-page">
        <div className="container">
          <h1>Brand not found</h1>
          <Link to="/brands">View all brands</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="brand-detail-page">
      <div className="brand-detail-hero" style={{ backgroundImage: brandInfo.image ? `url(${brandInfo.image})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="brand-detail-hero-overlay" />
        <div className="container">
          <h1 className="brand-detail-title">{brandInfo.name}</h1>
          {brandInfo.description && (
            <p className="brand-detail-desc">{brandInfo.description}</p>
          )}
        </div>
      </div>

      <section className="brand-detail-section container">
        <SectionTitle title="Products" />
        {products.length > 0 ? (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                brandSlug={brand}
              />
            ))}
          </div>
        ) : (
          <p>Product information coming soon.</p>
        )}
      </section>
    </div>
  );
}
