import Reveal from "./Reveal";

export default function SectionHeader({ eyebrow, title, highlight, text, align = "center" }) {
  return (
    <Reveal className={`section-header ${align === "left" ? "left" : ""}`}>
      {eyebrow && (
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          {eyebrow}
        </span>
      )}
      <h2>
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}
