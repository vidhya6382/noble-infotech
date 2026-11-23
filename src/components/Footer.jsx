"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Globe, Mail, MapPin, Phone } from "lucide-react";
import { company, navLinks } from "@/data/site";
import services from "@/data/services";
import SocialIcon from "./SocialIcons";
import Logo from "./Logo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // { type: "ok" | "err", text }

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setStatus({ type: "err", text: "Please enter a valid email." });
      return;
    }
    // BACKEND: connect newsletter signup here (e.g. POST /api/newsletter { email }).
    setStatus({ type: "ok", text: "You're subscribed. Welcome aboard!" });
    setEmail("");
  };

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Logo />
            <p>
              Noble Infotech helps businesses grow with, websites, Meta Ads,
              reels, SEO and brand strategy, all from one trusted local team in Tenkasi.
            </p>
            <div className="social-row">
              {company.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                >
                  <SocialIcon name={s.name} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul className="footer-links">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Get in Touch</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={16} /> {company.address}
              </li>
              <li>
                <Phone size={16} />
                <span>
                  {company.phones.map((ph, i) => (
                    <span key={ph}>
                      {i > 0 && " / "}
                      <a href={`tel:${ph.replace(/\s/g, "")}`}>{ph}</a>
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <Globe size={16} /> <a href={`https://${company.website}`}>{company.website}</a>
              </li>
              <li>
                <Mail size={16} /> <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <Clock size={16} /> {company.hours}
              </li>
            </ul>
            
            {status && <p className={`newsletter-msg ${status.type}`}>{status.text}</p>}
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {company.fullName}. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
