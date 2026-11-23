"use client";

import { useEffect, useRef, useState } from "react";

/** Sticky quick-jump bar for the Services page with scroll-spy highlighting. */
export default function ServiceTabs({ services = [] }) {
  const [active, setActive] = useState(services[0]?.id);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    services.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [services]);

  // Keep the active tab visible in the horizontal scroller
  useEffect(() => {
    // (scrolls only the tab bar, never the page)
    const bar = barRef.current;
    const tab = bar?.querySelector(`[data-id="${active}"]`);
    if (!bar || !tab) return;
    const left = tab.offsetLeft - bar.clientWidth / 2 + tab.clientWidth / 2;
    bar.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <div className="service-tabs">
      <div className="container">
        <nav className="service-tabs-inner" ref={barRef} aria-label="Jump to service">
          {services.map((s) => (
            <a
              key={s.id}
              data-id={s.id}
              href={`#${s.id}`}
              className={`service-tab ${active === s.id ? "active" : ""}`}
            >
              {s.shortTitle}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
