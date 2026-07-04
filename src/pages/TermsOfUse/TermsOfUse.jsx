import './TermsOfUse.css';

export default function TermsOfUse() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <h1 className="legal-hero-title">Terms of Use</h1>
        </div>
      </div>

      <section className="legal-content container">
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing and using this website, you accept and agree to be bound by
          these terms of use. If you do not agree to these terms, please do not
          use this website.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, images, and
          software, is the property of Velvet or its licensors and is protected by
          intellectual property laws.
        </p>

        <h2>Use of Website</h2>
        <p>
          You agree to use this website only for lawful purposes and in a way that
          does not infringe the rights of others or restrict their use of the website.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          Velvet shall not be liable for any damages arising from the use of or inability
          to use this website.
        </p>

        <h2>Changes</h2>
        <p>
          We reserve the right to modify these terms at any time. Changes will be
          effective immediately upon posting to the website.
        </p>
      </section>
    </div>
  );
}
