export default function Contact() {
  return (
    <section className="container" style={{ padding: "3rem 0" }}>
      <h1>Contact Us</h1>
      <form className="contact-form" style={{ display: "grid", gap: "1rem", maxWidth: "500px" }}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows={5} placeholder="Your Message"></textarea>
        <button type="submit" className="btn-primary">
          Send Message
        </button>
      </form>
    </section>
  );
}
