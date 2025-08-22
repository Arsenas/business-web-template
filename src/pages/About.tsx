import Head from "../components/Head";
import { site } from "../siteConfig";

export default function About() {
  return (
    <section className="section">
      <Head title={`About — ${site.name}`} description="Learn more about our story and values." />
      <div className="container stack" style={{ "--space": "var(--space-4)" } as React.CSSProperties}>
        <h1>About Us</h1>
        <p>
          Here goes the story of your business, mission, and what makes you unique. Replace this placeholder text with
          real info.
        </p>
      </div>
    </section>
  );
}
