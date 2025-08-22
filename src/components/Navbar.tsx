import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          BusinessName
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact" className="btn">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
