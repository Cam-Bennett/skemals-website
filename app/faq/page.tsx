import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Btn from "@/components/ui/Btn";
import Accordion from "@/components/ui/Accordion";
import { faq } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "FAQ — SkemaLS",
  description:
    "Common questions about SkemaLS, MySkema, and how the AI accountability system works. Built by Camden Bennett.",
};

/* ── FAQPage JSON-LD schema ──────────────────────────────────────── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main style={{ paddingTop: "64px" }}>
        <Nav />

        {/* ── Header section ──────────────────────────────────────── */}
        <SectionWrapper
          style={{
            position: "relative",
            overflow: "hidden",
            background: "#0A0A12",
          }}
        >
          <Image
            src="/images/abstract-1.png"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", opacity: 0.45, zIndex: 0 }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(10,10,18,0.48)",
              zIndex: 1,
            }}
          />
          <div style={{ position: "relative", zIndex: 2 }}>
            <p
              className="font-body font-semibold text-primary uppercase tracking-widest mb-4"
              style={{ fontSize: "11px", letterSpacing: "0.14em" }}
            >
              {faq.eyebrow}
            </p>
            <h1
              className="font-heading font-bold text-text-main"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                maxWidth: "720px",
              }}
            >
              {faq.headline}
            </h1>
          </div>
        </SectionWrapper>

        {/* ── Accordion section ───────────────────────────────────── */}
        <SectionWrapper bgAlt>
          <div style={{ maxWidth: "800px" }}>
            <Accordion items={faq.items} />
          </div>
        </SectionWrapper>

        {/* ── Bottom CTA ──────────────────────────────────────────── */}
        <SectionWrapper
          style={{
            background:
              "radial-gradient(ellipse at 30% 80%, rgba(37,99,235,0.07) 0%, transparent 55%), #0A0A12",
          }}
        >
          <div style={{ maxWidth: "600px" }}>
            <h2
              className="font-heading font-bold text-text-main mb-4"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              {faq.cta.headline}
            </h2>
            <p
              className="font-body text-text-soft mb-8"
              style={{ fontSize: "16px", lineHeight: 1.8 }}
            >
              {faq.cta.body}
            </p>
            <Btn as="a" href={faq.cta.buttonHref} size="lg">
              {faq.cta.buttonLabel}
            </Btn>
          </div>
        </SectionWrapper>

        <Footer />
      </main>
    </>
  );
}
