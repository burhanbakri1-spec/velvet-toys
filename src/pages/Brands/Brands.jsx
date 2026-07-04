import BrandGrid from '../../components/shared/BrandGrid';
import SectionTitle from '../../components/shared/SectionTitle';
import BrandsData from '../../data/brands';
import brandsHeroBg from '../../assets/images/collection-4dce34bf45802e2e4724c17b51b0980b.png';
import './Brands.css';

export default function Brands() {
  return (
    <div className="brands-page">
      <div className="brands-hero" style={{ backgroundImage: `url(${brandsHeroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="brands-hero-overlay" />
        <div className="container">
          <h1 className="brands-hero-title">Our Brands</h1>
          <p className="brands-hero-subtitle">
            Discover our range of award-winning toys loved by kids worldwide.
          </p>
        </div>
      </div>

      <section className="brands-section container">
        <BrandGrid brands={BrandsData} />
      </section>
    </div>
  );
}
