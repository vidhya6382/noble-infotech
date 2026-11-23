import { company } from "@/data/site";
import WhatsAppIcon from "./WhatsAppIcon";

/** Floating WhatsApp chat button (bottom-left). */
export default function WhatsAppButton() {
  const text = encodeURIComponent("Hi Noble Infotech, I'd like to know more about your services.");
  return (
    <a
      href={`https://wa.me/${company.whatsapp}?text=${text}`}
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
