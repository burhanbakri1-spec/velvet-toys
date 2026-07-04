import { useParams, Link } from 'react-router-dom';
import './NewsArticle.css';

const articles = {
  'levelling-the-playing-field-dream-day-with-tyson': {
    title: 'Levelling the Playing Field: Dream Day with Tyson',
    date: '2024',
    content: 'Velvet partnered with Tyson to create an unforgettable day for kids, continuing our commitment to levelling the playing field and giving every child the chance to play.',
  },
  'new-york-magazine-speaks-with-our-ceo-nick-mowbray-on-mini-brands-sell-out-success': {
    title: 'New York Magazine Speaks with Our CEO Nick Mowbray on Mini Brands Sell-Out Success',
    date: '2024',
    content: 'Nick Mowbray discusses the phenomenal success of Mini Brands and what makes Velvet one of the fastest-growing toy companies in the world.',
  },
};

export default function NewsArticle() {
  const { slug } = useParams();
  const article = slug ? articles[slug] : null;

  if (!article) {
    return (
      <div className="news-article-page">
        <div className="container">
          <h1>Article not found</h1>
          <Link to="/news">Back to News</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="news-article-page">
      <div className="news-article-hero">
        <div className="container">
          <Link to="/news" className="back-link">&larr; News</Link>
          <h1 className="news-article-title">{article.title}</h1>
          <span className="news-article-date">{article.date}</span>
        </div>
      </div>

      <section className="news-article-content container">
        <p>{article.content}</p>
      </section>
    </div>
  );
}
