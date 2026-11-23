import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import servicesData from "@/data/services";

const services = Array.isArray(servicesData) ? servicesData : servicesData.services;

export default function ServiceDetail({ id }) {
  const item = services.find((s) => s.id === id);
  if (!item) notFound();

  const others = services.filter((s) => s.id !== item.id);

  return (
    <div>
      <PageHeader
        eyebrow="Our Services"
        title={item.title}
        text={item.tagline}
        current={item.shortTitle}
      />

      <section className="section">
        <div
          className="container"
          style={{ display: "grid", gap: 40, gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", alignItems: "center" }}
        >
          <Reveal direction="up">
            <h2>{item.title}</h2>
            <p style={{ margin: "16px 0 24px" }}>{item.description}</p>

            <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
              {item.features.map((f) => (
                <li key={f} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <CheckCircle2 size={20} /> <span>{f}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 32 }}>
              <Link href="/contact" className="btn btn-primary">
                Get a Free Quote <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>

          <Reveal direction="up">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", borderRadius: 20, objectFit: "cover" }}
            />
            {item.highlight && (
              <p style={{ marginTop: 16, textAlign: "center" }}>
                <strong>{item.highlight.value}</strong> {item.highlight.label}
              </p>
            )}
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h3 style={{ marginBottom: 20 }}>Other Services</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {others.map((s) => (
              <Link key={s.id} href={`/services/${s.id}`} className="card-link">
                {s.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}