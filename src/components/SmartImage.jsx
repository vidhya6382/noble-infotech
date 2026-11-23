"use client";

import { useEffect, useRef, useState } from "react";

const FALLBACK = "/images/fallback.svg";

/**
 * Image with lazy loading and a branded fallback if the source fails to load.
 * Works with remote URLs (from the API / Unsplash) and local files in /public/images.
 */
export default function SmartImage({ src, alt = "", className, eager = false, ...props }) {
  const [current, setCurrent] = useState(src || FALLBACK);
  const ref = useRef(null);

  // If the image already failed before React hydrated, onError never fired — check manually.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0 && current !== FALLBACK) {
      setCurrent(FALLBACK);
    }
  }, [current]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={current}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => current !== FALLBACK && setCurrent(FALLBACK)}
      {...props}
    />
  );
}
