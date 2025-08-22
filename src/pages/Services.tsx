import Head from "../components/Head";
import { site } from "../siteConfig";

export default function Services() {
  return (
    <section className="section">
      <Head title={`Services — ${site.name}`} description="See what we offer and pricing." />
      <div className="container stack" style={{ "--space": "var(--space-4)" } as React.CSSProperties}>
        <h1>Our Services</h1>
        <ul className="stack">
          <li>
            <strong>Service One</strong> — short description
          </li>
          <li>
            <strong>Service Two</strong> — short description
          </li>
          <li>
            <strong>Service Three</strong> — short description
          </li>
        </ul>
      </div>
    </section>
  );
}
