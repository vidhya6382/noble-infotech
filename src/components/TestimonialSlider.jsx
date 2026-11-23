"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import StarRating from "./StarRating";
import Avatar from "./Avatar";

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 120 : -120, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -120 : 120, opacity: 0 }),
};

/**
 * Interactive testimonial slider: arrows, dots, keyboard, swipe/drag and autoplay
 * (autoplay pauses on hover).
 * Props: testimonials = Array<{ id, name, role, company, rating, review, image }>
 */
export default function TestimonialSlider({ testimonials = [], interval = 6000 }) {
  const [[index, direction], setState] = useState([0, 0]);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const paginate = useCallback(
    (dir) => setState(([i]) => [(i + dir + total) % total, dir]),
    [total]
  );

  const goTo = (i) => setState(([current]) => [i, i > current ? 1 : -1]);

  useEffect(() => {
    if (paused || total < 2) return;
    const id = setInterval(() => paginate(1), interval);
    return () => clearInterval(id);
  }, [paused, paginate, interval, total, index]);

  if (!total) return null;
  const t = testimonials[index];

  return (
    <div
      className="slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") paginate(-1);
        if (e.key === "ArrowRight") paginate(1);
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      tabIndex={0}
    >
      <div className="slider-viewport">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={t.id}
            className="testimonial-card"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) paginate(1);
              else if (info.offset.x > 80) paginate(-1);
            }}
            aria-live="polite"
          >
            <Quote size={56} className="quote-icon" />
            {t.isSample && <span className="sample-badge">Sample review</span>}
            <StarRating rating={t.rating} />
            <p className="testimonial-text">&ldquo;{t.review}&rdquo;</p>
            <div className="testimonial-author">
              <Avatar name={t.company} image={t.image} />
              <div>
                <h4>{t.name}</h4>
                <span>
                  {t.role}, {t.company}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="slider-controls">
        <button type="button" className="slider-arrow" onClick={() => paginate(-1)} aria-label="Previous testimonial">
          <ChevronLeft size={22} />
        </button>
        <div className="slider-dots">
          {testimonials.map((item, i) => (
            <button
              key={item.id}
              type="button"
              className={`slider-dot ${i === index ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
        <button type="button" className="slider-arrow" onClick={() => paginate(1)} aria-label="Next testimonial">
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
}
