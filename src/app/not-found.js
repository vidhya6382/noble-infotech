import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="page-header" style={{ minHeight: "80vh", display: "grid", placeItems: "center" }}>
      <div className="hero-grid-bg" />
      <div className="orb orb-1" />
      <div className="container">
        <h1>
          <span className="gradient-text">404</span>
        </h1>
        <p style={{ marginBottom: 32 }}>This page wandered off. Let&apos;s get you back on track.</p>
        <Link href="/" className="btn btn-primary">
          Back to Home <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
