import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import StatsCounter from "@/components/StatsCounter";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import SmartImage from "@/components/SmartImage";
import GetStartedButton from "@/components/GetStartedButton";
import { getServices, getTestimonials } from "@/lib/api";
import { stats, whyChooseUs } from "@/data/site";

const process = [
  { title: "Free Consultation", text: "We understand your business, customers and goals, at our office or over a call." },
  { title: "Plan & Quote", text: "A clear plan with the right services, timeline and a transparent price." },
  { title: "Build & Launch", text: "Our team designs, develops and launches, with your feedback at every step." },
  { title: "Grow & Support", text: "We track results, improve every month and support you whenever you need." },
];

export default async function HomePage() {
  const [services, testimonials] = await Promise.all([getServices(), getTestimonials()]);

  return (
    <>
      <Hero />
      <LogoMarquee />

      {/* ---------- Company introduction ---------- */}
      <section className="section">
        <div className="container split">
          <Reveal direction="right" className="split-media">
            <SmartImage
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Noble Infotech team working together"
            />
            <a
              href="https://maps.app.goo.gl/DhMzkpvhfAvi5UAB6?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="split-badge glass"
              title="Open our location in Google Maps"
            >
              <MapPin size={18} className="badge-icon" />
              <div>
                <strong>Alangulam, Tenkasi</strong>
                <span>Your local digital partner · Get directions →</span>
              </div>
            </a>
          </Reveal>

          <Reveal direction="left" className="split-content">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              About Noble Infotech
            </span>
            <h2>
              Your Complete <span className="gradient-text">Digital Partner</span> in Tenkasi.
            </h2>
            <p>
              Noble Infotech is a software development and digital marketing company based in
              Alangulam, Tenkasi. We help shops, schools, clinics, startups and growing businesses
              build a strong presence online and win more customers.
            </p>
            <p>
              Our developers, designers and marketers work together as one team. Your software,
              website, ads, reels and SEO all work towards one goal: growing your business.
            </p>
            <ul className="check-list">
              {[
                "Mobile-friendly websites",
                "Meta Ads & Google Ads campaigns",
                "Reels, posters & creative design",
                "SEO & Google Maps ranking",
                "Support in Tamil & English",
              ].map((point) => (
                <li key={point}>
                  <CheckCircle2 size={18} /> {point}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <Link href="/about" className="btn btn-primary">
                Know More About Us <ArrowRight size={18} />
              </Link>
              <GetStartedButton>Get Started</GetStartedButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Services preview ---------- */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeader
            eyebrow="Our Services"
            title="Services That"
            highlight="Grow Your Business"
            text="Everything you need to build, market and grow your business online, from one trusted team."
          />
          <div className="grid-4">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          {/* GET STARTED - In empty place below Services cards */}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <GetStartedButton>Get Started</GetStartedButton>
          </div>
        </div>
      </section>

      {/* ---------- Why choose us ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Why Noble Infotech"
            title="Why Businesses"
            highlight="Choose Us"
            text="We're more than a vendor. We're a long-term partner invested in your growth."
          />
          <div className="grid-3">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.1} className="card feature-card">
                <div className="icon-box">
                  <Icon name={item.icon} size={26} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>

          {/* GET STARTED - In empty place below Why Choose Us cards */}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <GetStartedButton>Get Started</GetStartedButton>
          </div>
        </div>
      </section>

      {/* ---------- Statistics ---------- */}
      <section className="section-sm">
        <div className="container">
          <StatsCounter stats={stats} />

          {/* GET STARTED - Below Stats */}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <GetStartedButton>Get Started</GetStartedButton>
          </div>
        </div>
      </section>

      {/* ---------- How we work ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="How We Work"
            title="Simple"
            highlight="4-Step Process"
            text="Clear steps from the first conversation to long-term growth."
          />
          <div className="grid-4 process-grid">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1} className="card process-step">
                <div className="process-num gradient-text">0{i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>

          {/* GET STARTED - Below Process */}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <GetStartedButton>Get Started</GetStartedButton>
          </div>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeader
            eyebrow="Testimonials"
            title="What Our"
            highlight="Clients Say"
            text="Feedback from businesses we've helped grow."
          />
          <TestimonialSlider testimonials={testimonials} />

          {/* GET STARTED - Below Testimonials */}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <GetStartedButton>Get Started</GetStartedButton>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}