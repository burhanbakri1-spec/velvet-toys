import SectionTitle from '../../components/shared/SectionTitle';
import './Snackles.css';

export default function Snackles() {
  return (
    <div className="snackles-page">
      <div className="snackles-hero">
        <div className="container">
          <h1 className="snackles-hero-title">Snackles</h1>
          <p className="snackles-hero-subtitle">
            Cuddly snack characters that are soft, sweet, and huggable!
          </p>
        </div>
      </div>

      <section className="snackles-section container">
        <SectionTitle title="Meet Snackles" />
        <p className="snackles-intro">
          Snackles are adorable, collectible plush toys that look like your
          favorite snacks! Each Snackle has its own unique personality and
          comes in a variety of delicious-looking designs.
        </p>
        <div className="snackles-gallery">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="snackle-item">
              <div className="snackle-placeholder" />
              <p className="snackle-name">Snackle {i}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
