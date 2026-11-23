import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

/** Hero banner used at the top of every inner page. */
export default function PageHeader({ eyebrow, title, highlight, text, current }) {
  return (
    <section className="page-header">
      <div className="hero-grid-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="container">
        <Reveal>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            {eyebrow}
          </span>
          <h1>
            {title} <span className="gradient-text">{highlight}</span>
          </h1>
          <p>{text}</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span className="current">{current}</span>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
