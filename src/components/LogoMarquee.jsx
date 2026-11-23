import { industries } from "@/data/site";

/** Infinite scrolling strip of industries served. */
export default function LogoMarquee() {
  const items = [...industries, ...industries];
  return (
    <div className="logo-strip">
      <div className="container">
        <p>Helping businesses across every industry</p>
        <div className="marquee-mask">
          <div className="marquee">
            {items.map((name, i) => (
              <span key={`${name}-${i}`} aria-hidden={i >= industries.length}>
                <i className="marquee-dot" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
