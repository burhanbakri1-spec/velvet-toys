import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/shared/SectionTitle';
import { fadeIn, fadeInUp, staggerContainer } from '../../utils/animations';
import './News.css';

const newsArticles = [
  {
    slug: 'levelling-the-playing-field-dream-day-with-tyson',
    title: 'Levelling the Playing Field: Dream Day with Tyson',
    date: '2024',
    excerpt: 'Velvet partnered with Tyson to create an unforgettable day for kids.',
  },
  {
    slug: 'new-york-magazine-speaks-with-our-ceo-nick-mowbray-on-mini-brands-sell-out-success',
    title: 'New York Magazine Speaks with Our CEO Nick Mowbray on Mini Brands Sell-Out Success',
    date: '2024',
    excerpt: 'Nick Mowbray discusses the phenomenal success of Mini Brands.',
  },
];

export default function News() {
  return (
    <div className="news-page">
      <div className="news-hero">
        <div className="container">
          <h1 className="news-hero-title">News</h1>
          <p className="news-hero-subtitle">
            The latest from Velvet.
          </p>
        </div>
      </div>

      <motion.section
        className="news-section container"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <SectionTitle title="Latest News" />
        <motion.div
          className="news-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {newsArticles.map((article) => (
            <motion.div key={article.slug} variants={fadeInUp}>
              <Link to={`/news/${article.slug}`} className="news-card">
                <div className="news-card-image">
                  <div className="news-card-placeholder" />
                </div>
                <div className="news-card-content">
                  <span className="news-card-date">{article.date}</span>
                  <h3 className="news-card-title">{article.title}</h3>
                  <p className="news-card-excerpt">{article.excerpt}</p>
                  <span className="news-card-link">Read More</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
