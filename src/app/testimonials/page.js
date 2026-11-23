import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import TestimonialSlider from "@/components/TestimonialSlider";
import StarRating from "@/components/StarRating";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Avatar from "@/components/Avatar";
import { getTestimonials } from "@/lib/api";

export const metadata = {
  title: "Testimonials",
  description: "What our clients say about working with Noble Infotech.",
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();
  const avg = testimonials.reduce((sum, t) => sum + t.rating, 0) / (testimonials.length || 1);

  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="What Our"
        highlight="Clients Say"
        text="Our clients' growth is the best proof of our work. Here's what businesses say about working with us."
        current="Testimonials"
      />

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal className="rating-summary">
            <div className="rating-box glass">
              <strong className="gradient-text">{avg.toFixed(1)}/5</strong>
              <StarRating rating={Math.round(avg)} size={16} />
              <span style={{ display: "block" }}>Average rating</span>
            </div>
            <div className="rating-box glass">
              <strong className="gradient-text">{testimonials.length}+</strong>
              <span>Client reviews</span>
            </div>
            <div className="rating-box glass">
              <strong className="gradient-text">8</strong>
              <span>Services offered</span>
            </div>
          </Reveal>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeader eyebrow="All Reviews" title="Client" highlight="Reviews" />
          <div className="review-grid">
            {testimonials.map((t, i) => (
              <Reveal key={t.id} delay={(i % 3) * 0.08} className="card review-card">
                {t.isSample && <span className="sample-badge">Sample review</span>}
                <StarRating rating={t.rating} size={16} />
                <p>&ldquo;{t.review}&rdquo;</p>
                <div className="testimonial-author">
                  <Avatar name={t.company} image={t.image} size={46} />
                  <div>
                    <h4>{t.name}</h4>
                    <span>
                      {t.role}, {t.company}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Become Our Next Success Story" />
    </>
  );
}
