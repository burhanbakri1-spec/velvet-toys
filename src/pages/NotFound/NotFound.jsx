import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-text">Page not found</p>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    </div>
  );
}
