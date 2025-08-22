import { useState } from "react";
import type { FormEvent } from "react";
import Head from "../components/Head";
import { site } from "../siteConfig";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("loading");
    try {
      const r = await fetch("https://formspree.io/f/FORM_ID", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (r.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section">
      <Head title={`Contact — ${site.name}`} description="Get in touch." />
      <div className="container stack" style={{ "--space": "var(--space-5)" } as React.CSSProperties}>
        <h1>Contact Us</h1>

        <form
          onSubmit={onSubmit}
          className="stack"
          style={{ "--space": "var(--space-3)", maxWidth: 520 } as React.CSSProperties}
        >
          <input type="text" name="name" placeholder="Your Name" autoComplete="name" required />
          <input type="email" name="email" placeholder="Your Email" autoComplete="email" required />
          <textarea name="message" rows={5} placeholder="Your Message" required />
          <button type="submit" className="btn-primary" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status === "ok" && <p role="status">Thanks! We’ll get back to you shortly.</p>}
          {status === "error" && <p role="status">Something went wrong. Please try again.</p>}
        </form>

        <div className="stack" style={{ "--space": "var(--space-2)" } as React.CSSProperties}>
          <p>
            <strong>Email:</strong> {site.email}
          </p>
          <p>
            <strong>Phone:</strong> {site.phone}
          </p>
          <p>
            <strong>Address:</strong> {site.address.streetAddress}, {site.address.addressLocality}
          </p>
        </div>
      </div>
    </section>
  );
}
