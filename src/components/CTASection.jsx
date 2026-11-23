import { Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import Reveal from "./Reveal";
import GetStartedButton from "./GetStartedButton";
import { company } from "@/data/site";

export default function CTASection({
  title = "Ready to Take Your Business Online?",
  text = "Talk to Noble Infotech today for a free consultation and a plan made for your business and budget.",
}) {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="cta">
          <div className="cta-grid-bg" />
          <div className="cta-content">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="cta-actions">
              <GetStartedButton className="btn btn-white">Get Started</GetStartedButton>
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="btn btn-ghost-white">
                <Phone size={18} /> {company.phone}
              </a>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                className="btn btn-ghost-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={18} /> WhatsApp Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
