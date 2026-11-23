import Link from "next/link";
import { Code2, Cpu, Megaphone, MessageCircle, Phone, Search, TrendingUp } from "lucide-react";
import SmartImage from "./SmartImage";
import GetStartedButton from "./GetStartedButton";
import { company } from "@/data/site";

const bars = [40, 65, 50, 80, 70, 100];

// Quick service highlights shown under the hero buttons
const highlights = [
  { icon: Cpu, title: "Custom Software", text: "Billing, CRM & apps", href: "/services#software-development" },
  { icon: Megaphone, title: "Meta Ads", text: "Facebook & Instagram", href: "/services#digital-marketing" },
  { icon: Search, title: "SEO", text: "Rank on Google & Maps", href: "/services#seo" },
  { icon: MessageCircle, title: "WhatsApp Support", text: "Quick replies, 24/7", href: "https://wa.me/919994353910" },
];

// Animations are pure CSS (see .anim-* in globals.css) so the hero never appears blank.
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="container hero-inner">
        <div className="hero-content">
                    <div className="anim-up" style={{ "--d": "0.05s" }}>
            <span className="eyebrow hero-eyebrow">
              <span className="eyebrow-dot" />
              <span className="he-word" style={{ "--w": 0 }}>Software</span>
              <span className="he-sep">✦</span>
              <span className="he-word" style={{ "--w": 1 }}>Websites</span>
              <span className="he-sep">✦</span>
              <span className="he-word" style={{ "--w": 2 }}>Digital Marketing</span>
            </span>
          </div>
          <h1 className="anim-up" style={{ "--d": "0.15s" }}>
            Grow Your Business <span className="gradient-text">Digitally</span> With Noble Infotech
          </h1>

          <p className="hero-sub anim-up" style={{ "--d": "0.25s" }}>
            From custom software and websites to Meta Ads, reels and SEO, we help businesses in
            Tenkasi and across Tamil Nadu get more customers online.
          </p>

          <div className="hero-actions anim-up" style={{ "--d": "0.35s" }}>
            <GetStartedButton>Get Started</GetStartedButton>
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="btn btn-outline">
              <Phone size={18} /> {company.phone}
            </a>
          </div>

          <div className="hero-highlights anim-up" style={{ "--d": "0.45s" }}>
            {highlights.map(({ icon: HIcon, title, text, href }) => (
              <Link
                key={title}
                href={href}
                className="hh-card"
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="hh-icon">
                  <HIcon size={20} />
                </span>
                <span className="hh-text">
                  <strong>{title}</strong>
                  <small>{text}</small>
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="hero-visual anim-zoom" style={{ "--d": "0.3s" }}>
          <div className="hero-image-wrap">
            <SmartImage
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
              alt="Team planning a digital marketing campaign"
              eager
            />
          </div>

          <div className="float-card fc-1 float-a">
            <span className="fc-icon">
              <TrendingUp size={20} />
            </span>
            <div>
              <div className="fc-value">More Leads</div>
              <div className="fc-label">from Meta & Google Ads</div>
            </div>
          </div>

          <div className="float-card fc-2 float-b">
            <div className="mini-bars" aria-hidden="true">
              {bars.map((h, i) => (
                <span key={i} style={{ height: `${h}%`, "--i": i }} />
              ))}
            </div>
            <div>
              <div className="fc-value">Growth</div>
              <div className="fc-label">tracked every month</div>
            </div>
          </div>

          <div className="float-card fc-3 float-a" style={{ animationDelay: "1s" }}>
            <span className="fc-icon">
              <Code2 size={20} />
            </span>
            <div>
              <div className="fc-value">Custom</div>
              <div className="fc-label">Websites</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}