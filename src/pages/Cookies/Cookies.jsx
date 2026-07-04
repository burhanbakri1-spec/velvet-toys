import './Cookies.css';

export default function Cookies() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <h1 className="legal-hero-title">Cookie Policy</h1>
        </div>
      </div>

      <section className="legal-content container">
        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files that are stored on your device when you visit
          a website. They help the website function properly and provide information
          to the website owners.
        </p>

        <h2>How We Use Cookies</h2>
        <p>
          We use cookies to improve your browsing experience, analyze site traffic,
          and personalize content. Some cookies are essential for the website to
          function properly.
        </p>

        <h2>Types of Cookies We Use</h2>
        <p>
          Essential cookies: Required for the website to function.<br />
          Analytics cookies: Help us understand how visitors interact with our site.<br />
          Functional cookies: Remember your preferences.
        </p>

        <h2>Managing Cookies</h2>
        <p>
          You can control and manage cookies through your browser settings. Please
          note that disabling certain cookies may affect the functionality of our
          website.
        </p>
      </section>
    </div>
  );
}
