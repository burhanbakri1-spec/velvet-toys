import { Link } from 'react-router-dom';
import SectionTitle from '../../components/shared/SectionTitle';
import brands from '../../data/brands';
import './WhereToBuy.css';

const retailers = [
  { name: 'Amazon', url: 'https://www.amazon.com' },
  { name: 'Walmart', url: 'https://www.walmart.com' },
  { name: 'Target', url: 'https://www.target.com' },
  { name: 'Toy R Us', url: 'https://www.toysrus.com' },
];

export default function WhereToBuy() {
  return (
    <div className="wtb-page">
      <div className="wtb-hero">
        <div className="container">
          <h1 className="wtb-hero-title">Where to Buy</h1>
          <p className="wtb-hero-subtitle">
            Find Velvet toys at a retailer near you.
          </p>
        </div>
      </div>

      <section className="wtb-section container">
        <SectionTitle title="Shop Online" align="left" />
        <div className="retailer-grid">
          {retailers.map((retailer) => (
            <a
              key={retailer.name}
              href={retailer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="retailer-card"
            >
              <h3>{retailer.name}</h3>
              <span className="retailer-link">Shop Now &rarr;</span>
            </a>
          ))}
        </div>
      </section>

      <section className="wtb-section bg-light">
        <div className="container">
          <SectionTitle title="Shop by Brand" align="center" />
          <div className="brand-links-grid">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                to={`/brands/${brand.slug}`}
                className="brand-link"
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
