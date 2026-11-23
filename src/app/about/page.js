import { Compass, Rocket } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import StatsCounter from "@/components/StatsCounter";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import SmartImage from "@/components/SmartImage";
import { achievements, stats, team, values } from "@/data/site";

export const metadata = {
  title: "About Us",
  description:
    "About Noble Infotech, Alangulam, Tenkasi: our story, mission, vision, values and the teams behind our software and digital marketing work.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Building Digital Success for"
        highlight="Local Businesses"
        text="Noble Infotech brings software, web and marketing expertise together to help businesses in Tenkasi and across Tamil Nadu grow."
        current="About"
      />

      {/* ---------- Company overview ---------- */}
      <section className="section">
        <div className="container split">
          <Reveal direction="right" className="split-media">
            <SmartImage
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
              alt="Noble Infotech planning meeting"
            />
          </Reveal>
          <Reveal direction="left" className="split-content">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Company Overview
            </span>
            <h2>
              Technology & Marketing, <span className="gradient-text">Under One Roof</span>
            </h2>
            <p>
              Noble Infotech is based at Ramarkovil Street, Alangulam, in Tenkasi district. We started
              with a simple idea: every business, big or small, deserves the same quality of software and
              digital marketing that large companies use.
            </p>
            <p>
              Today we build customized software, professional websites and complete marketing
              campaigns for retail shops, textile showrooms, schools, clinics, restaurants and startups.
            </p>
            <p>
              Because development, design and marketing sit in one team, our clients get one point of
              contact, faster delivery and results that work together.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Mission & Vision ---------- */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeader eyebrow="Our Purpose" title="Mission &" highlight="Vision" />
          <div className="grid-2">
            <Reveal direction="right" className="card mv-card">
              <div className="icon-box">
                <Rocket size={26} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To help businesses grow with reliable software, modern websites and result-driven
                digital marketing, delivered with honesty, at a fair price, with support people can count on.
              </p>
            </Reveal>
            <Reveal direction="left" className="card mv-card">
              <div className="icon-box">
                <Compass size={26} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted technology and digital marketing partner in South Tamil Nadu,
                taking local businesses online and helping them compete anywhere.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Values ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="What Drives Us"
            title="Our Core"
            highlight="Values"
            text="The principles behind every project we take on."
          />
          <div className="grid-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="card feature-card">
                <div className="icon-box">
                  <Icon name={v.icon} size={26} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Team ---------- */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeader
            eyebrow="Our Team"
            title="The Teams Behind"
            highlight="Your Growth"
            text="Specialists in development, marketing, design and content, working together on every project."
          />
          <div className="grid-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08} className="card team-dept">
                <div className="team-dept-icon">
                  <Icon name={member.icon} size={30} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Achievements ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="What We Deliver" title="Our" highlight="Strengths" />
          <div className="grid-2" style={{ marginBottom: 60 }}>
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={(i % 2) * 0.1} className="card achievement">
                <div className="icon-box">
                  <Icon name={a.icon} size={26} />
                </div>
                <div>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <StatsCounter stats={stats} />
        </div>
      </section>

      <CTASection title="Let's Build Something Great Together" />
    </>
  );
}