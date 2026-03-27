import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import PathSelector from "@/components/sections/PathSelector";
import HowItWorks from "@/components/sections/HowItWorks";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Btn from "@/components/ui/Btn";
import { services } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Services — SkemaLS",
  description:
    "Three paths: personal accountability, business systems, or both. Custom AI coaching built around how you actually work.",
};

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: "64px" }}>
      <Nav />

      {/* ── Page header ──────────────────────────────────────────── */}
      <SectionWrapper
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 60%), #0A0A12",
        }}
      >
        <p
          className="font-body font-semibold text-primary uppercase tracking-widest mb-4"
          style={{ fontSize: "11px", letterSpacing: "0.14em" }}
        >
          {services.eyebrow}
        </p>
        <h1
          className="font-heading font-bold text-text-main mb-4"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: "720px",
          }}
        >
          {services.headline}
        </h1>
        <p
          className="font-body text-text-soft"
          style={{ fontSize: "17px", lineHeight: 1.75, maxWidth: "560px" }}
        >
          {services.subheadline}
        </p>
      </SectionWrapper>

      {/* ── PATH cards (reused from homepage) ────────────────────── */}
      <PathSelector />

      {/* ── How It Works (reused from homepage) ──────────────────── */}
      <HowItWorks />

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <SectionWrapper
        style={{
          background:
            "radial-gradient(ellipse at 70% 80%, rgba(220,38,38,0.07) 0%, transparent 55%), #0A0A12",
        }}
      >
        <div style={{ maxWidth: "560px" }}>
          <h2
            className="font-heading font-bold text-text-main mb-4"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            {services.cta.headline}
          </h2>
          <p
            className="font-body text-text-soft mb-8"
            style={{ fontSize: "16px", lineHeight: 1.8 }}
          >
            {services.cta.body}
          </p>
          <Btn as="a" href={services.cta.buttonHref} size="lg">
            {services.cta.buttonLabel}
          </Btn>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
