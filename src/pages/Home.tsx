import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Welcome to BusinessName</h1>
          <p>Your short catchy slogan goes here.</p>
          <Link to="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="card">Service 1</div>
            <div className="card">Service 2</div>
            <div className="card">Service 3</div>
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
