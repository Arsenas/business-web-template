import { Link } from "react-router-dom";
import Head from "../components/Head";
import JsonLd from "../components/JsonLd";
import type { LocalBusiness } from "../components/JsonLd";
import { site } from "../siteConfig";

export default function Home() {
  // Schema objektas pagal tavo tipą
  const schema: LocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    description: site.description,
    address: { "@type": "PostalAddress", ...site.address },
  };

  return (
    <>
      <Head title={`${site.name} — ${site.tagline}`} description={site.description} />

      <JsonLd data={schema} id="org-schema" />

      <a href="#content" className="sr-only">
        Skip to content
      </a>

      <section className="hero" id="content">
        <div className="container">
          <h1>{site.name}</h1>
          <p>{site.tagline}</p>
          <Link to="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>

      <section className="section services">
        <div className="container">
          <header className="section-header stack" style={{ "--space": "var(--space-3)" } as React.CSSProperties}>
            <h2>Our Services</h2>
            <p className="muted">Replace these cards with real offerings.</p>
          </header>
          <div className="grid cols-3">
            <article className="card stack">
              <h3>Service 1</h3>
              <p>Short description about this service.</p>
            </article>
            <article className="card stack">
              <h3>Service 2</h3>
              <p>Short description about this service.</p>
            </article>
            <article className="card stack">
              <h3>Service 3</h3>
              <p>Short description about this service.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to work with us?</h2>
          <Link to="/contact" className="btn-primary">
            Contact Now
          </Link>
        </div>
      </section>
    </>
  );
}
