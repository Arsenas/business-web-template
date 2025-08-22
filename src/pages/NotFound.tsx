import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container stack" style={{ "--space": "var(--space-4)" } as React.CSSProperties}>
        <h1>Page not found</h1>
        <p>We couldn’t find what you were looking for.</p>
        <Link to="/" className="btn">
          Go Home
        </Link>
      </div>
    </section>
  );
}
