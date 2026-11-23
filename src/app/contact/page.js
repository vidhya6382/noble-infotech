import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SocialIcon from "@/components/SocialIcons";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { company } from "@/data/site";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Noble Infotech, 200, RC Church Street, Alangulam, Tamil Nadu 627851. Call 99943 53910 / 97513 45910 for software, website and digital marketing services.",
};

// Your exact office location on Google Maps
const MAPS_URL = "https://maps.app.goo.gl/DhMzkpvhfAvi5UAB6?g_st=aw";

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`;
  // Opens Gmail directly with a new email to your address
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${company.email}&su=${encodeURIComponent(
    "Enquiry from website"
  )}`;
  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    "Hi Noble Infotech, I'd like to know more about your services."
  )}`;
  const ext = { target: "_blank", rel: "noopener noreferrer" };

  return (
    <div className="contact-light">
      <PageHeader
        eyebrow="Contact Us"
        title="Let's Talk About"
        highlight="Your Business"
        text="Call, WhatsApp or visit our office. We'll get back to you within one working day."
        current="Contact"
      />
            <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal direction="up" className="office-box">
            <h3>Our Office Details</h3>

            <div className="office-grid">
              {/* Location → opens Google Maps */}
              <a href={MAPS_URL} {...ext} className="office-row" title="Open in Google Maps">
                <div className="icon-box">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4>Visit Our Office</h4>
                  <p>{company.address}</p>
                  <span className="info-action">
                    Open in Google Maps <ExternalLink size={13} />
                  </span>
                </div>
              </a>

              {/* Phone → starts a call */}
              <div className="office-row">
                <a href={`tel:${company.phones[0].replace(/\s/g, "")}`} className="icon-box" aria-label="Call us">
                  <Phone size={22} />
                </a>
                <div>
                  <h4>Call Us</h4>
                  {company.phones.map((ph) => (
                    <a key={ph} href={`tel:${ph.replace(/\s/g, "")}`} className="block-link">
                      {ph}
                    </a>
                  ))}
                  <span className="info-action">Tap a number to call</span>
                </div>
              </div>

              {/* WhatsApp → opens chat */}
              <a href={whatsappUrl} {...ext} className="office-row" title="Chat on WhatsApp">
                <div className="icon-box whatsapp-box">
                  <WhatsAppIcon size={22} />
                </div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>{company.phones[0]}</p>
                  <span className="info-action">
                    Chat with us instantly <ExternalLink size={13} />
                  </span>
                </div>
              </a>

              {/* Email → opens Gmail compose */}
              <a href={gmailUrl} {...ext} className="office-row" title="Send us an email in Gmail">
                <div className="icon-box">
                  <Mail size={22} />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>{company.email}</p>
                  <span className="info-action">
                    Write in Gmail <ExternalLink size={13} />
                  </span>
                </div>
              </a>

              <div className="office-row">
                <div className="icon-box">
                  <Clock size={22} />
                </div>
                <div>
                  <h4>Working Hours</h4>
                  <p>{company.hours}</p>
                </div>
              </div>
            </div>

            <div className="office-follow">
              <h4>Follow Us</h4>
              <div className="social-row">
                {company.socials.map((s) => (
                  <a key={s.name} href={s.href} className="social-btn" {...ext} aria-label={s.name}>
                    <SocialIcon name={s.name} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Google Map of the office location (no API key needed). */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="map-wrap">
            <iframe
              title="Noble Infotech location on Google Maps"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="map-label">
              <h4>{company.fullName}</h4>
              <p>{company.address}</p>
              <a href={MAPS_URL} {...ext} className="card-link">
                Get Directions →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}