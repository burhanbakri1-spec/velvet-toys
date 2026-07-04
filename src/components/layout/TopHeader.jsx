import { useState } from 'react';
import { Link } from 'react-router-dom';
import './TopHeader.css';

const languages = [
  { label: 'English (US)', value: 'us', path: '/' },
  { label: 'English (GB)', value: 'gb', path: '/gb' },
  { label: 'English (NZ)', value: 'nz', path: '/nz' },
  { label: 'Deutsch', value: 'de', path: '/de' },
  { label: 'Français', value: 'fr', path: '/fr' },
  { label: 'Español', value: 'es', path: '/es' },
];

export default function TopHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="top-header">
      <div className="top-header-inner">
        <div className="product-recall-container">Play Reimagined.</div>
        <nav className="region-dropdown">
          <ul>
            <li className="first-dropdown-wrapper">
              <button onClick={() => setOpen(!open)}>
                <span>English (US)</span>
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </button>
              {open && (
                <ul>
                  {languages.map((lang) => (
                    <li key={lang.value}>
                      <Link to={lang.path} onClick={() => setOpen(false)}>
                        <div>{lang.label}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
