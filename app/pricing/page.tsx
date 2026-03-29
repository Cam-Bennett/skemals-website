import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Accordion from "@/components/ui/Accordion";
import Btn from "@/components/ui/Btn";
import { pricing } from "@/content/siteContent";

export const metadata: Metadata = {
  title: pricing.meta.title,
  description: pricing.meta.description,
};

/* ── Shared include-list item ──────────────────────────────── */
function IncludeItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 font-body text-text-soft" style={{ fontSize: "15px", lineHeight: 1.7 }}>
      <span style={{ color: "#DC2626", marginTop: "3px", flexShrink: 0 }}>—</span>
      {text}
    </li>
  );
}

/* ── Price display ──────────────────────────────────────────── */
function PriceLine({ price, note }: { price: string; note?: string }) {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "24px 0",
        margin: "32px 0",
      }}
    >
      <p
        className="font-heading font-bold text-text-main"
        style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.02em" }}
      >
        {price}
      </p>
      {note && (
        <p className="font-body text-muted mt-2" style={{ fontSize: "14px", lineHeight: 1.6 }}>
          {note}
        </p>
      )}
    </div>
  );
}

/* ── Path section wrapper ───────────────────────────────────── */
function PathSection({
  eyebrow,
  eyebrowColor,
  headline,
  body,
  price,
  priceNote,
  includes,
  includesNote,
  ctaLabel,
  ctaHref,
  alt,
}: {
  eyebrow: string;
  eyebrowColor: string;
  headline: string;
  body: string[];
  price: string;
  priceNote?: string;
  includes: string[];
  includesNote?: string;
  ctaLabel: string;
  ctaHref: string;
  alt?: boolean;
}) {
  return (
    <SectionWrapper bgAlt={alt}>
      <div style={{ maxWidth: "780px" }}>
        <p
          className="font-body font-semibold uppercase tracking-widest mb-4"
          style={{ fontSize: "11px", letterSpacing: "0.14em", color: eyebrowColor }}
        >
          {eyebrow}
        </p>
        <h2
          className="font-heading font-bold text-text-main mb-8"
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          {headline}
        </h2>

        {body.map((para, i) => (
          <p
            key={i}
            className="font-body text-text-soft mb-5"
            style={{ fontSize: "17px", lineHeight: 1.8 }}
          >
            {para}
          </p>
        ))}

        <PriceLine price={price} note={priceNote} />

        <p
          className="font-body font-semibold text-text-main mb-4"
          style={{ fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}
        >
          Includes
        </p>
        <ul className="flex flex-col gap-2 mb-4" style={{ listStyle: "none", padding: 0 }}>
          {includes.map((item, i) => (
            <IncludeItem key={i} text={item} />
          ))}
        </ul>

        {includesNote && (
          <p
            className="font-body text-muted mt-4 mb-8"
            style={{
              fontSize: "13px",
              lineHeight: 1.7,
              borderLeft: "2px solid rgba(255,255,255,0.08)",
              paddingLeft: "16px",
            }}
          >
            {includesNote}
          </p>
        )}

        <div style={{ marginTop: "32px" }}>
          <Btn as="a" href={ctaHref} size="lg">
            {ctaLabel}
          </Btn>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ── Page ───────────────────────────────────────────────────── */
export default function PricingPage() {
  return (
    <main style={{ paddingTop: "64px" }}>
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0A0A12",
          padding: "96px 24px 80px",
        }}
      >
        <div className="max-w-site mx-auto">
          <div style={{ maxWidth: "780px" }}>
            <p
              className="font-body font-semibold text-primary uppercase tracking-widest mb-4"
              style={{ fontSize: "11px", letterSpacing: "0.14em" }}
            >
              {pricing.hero.eyebrow}
            </p>
            <h1
              className="font-heading font-bold text-text-main mb-6"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              {pricing.hero.headline}
            </h1>
            <p
              className="font-body text-text-soft"
              style={{ fontSize: "18px", lineHeight: 1.8, maxWidth: "620px" }}
            >
              {pricing.hero.body}
            </p>
          </div>
        </div>
      </section>

      {/* ── Investment context ──────────────────────────────────── */}
      <SectionWrapper bgAlt>
        <div style={{ maxWidth: "680px" }}>
          <p
            className="font-body font-semibold text-primary uppercase tracking-widest mb-8"
            style={{ fontSize: "11px", letterSpacing: "0.14em" }}
          >
            {pricing.investmentContext.eyebrow}
          </p>
          <div className="flex flex-col gap-5">
            {pricing.investmentContext.paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-body text-text-soft"
                style={{ fontSize: "17px", lineHeight: 1.75 }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── PATH A ──────────────────────────────────────────────── */}
      <PathSection
        eyebrow={pricing.pathA.eyebrow}
        eyebrowColor={pricing.pathA.eyebrowColor}
        headline={pricing.pathA.headline}
        body={pricing.pathA.body}
        price={pricing.pathA.price}
        includes={pricing.pathA.includes}
        ctaLabel={pricing.pathA.cta.label}
        ctaHref={pricing.pathA.cta.href}
      />

      {/* ── PATH B ──────────────────────────────────────────────── */}
      <PathSection
        eyebrow={pricing.pathB.eyebrow}
        eyebrowColor={pricing.pathB.eyebrowColor}
        headline={pricing.pathB.headline}
        body={pricing.pathB.body}
        price={pricing.pathB.price}
        priceNote={pricing.pathB.priceNote}
        includes={pricing.pathB.includes}
        includesNote={pricing.pathB.includesNote}
        ctaLabel={pricing.pathB.cta.label}
        ctaHref={pricing.pathB.cta.href}
        alt
      />

      {/* ── PATH C ──────────────────────────────────────────────── */}
      <PathSection
        eyebrow={pricing.pathC.eyebrow}
        eyebrowColor={pricing.pathC.eyebrowColor}
        headline={pricing.pathC.headline}
        body={pricing.pathC.body}
        price={pricing.pathC.price}
        includes={[]}
        ctaLabel={pricing.pathC.cta.label}
        ctaHref={pricing.pathC.cta.href}
      />

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <SectionWrapper bgAlt>
        <p
          className="font-body font-semibold text-primary uppercase tracking-widest mb-4"
          style={{ fontSize: "11px", letterSpacing: "0.14em" }}
        >
          {pricing.faq.eyebrow}
        </p>
        <h2
          className="font-heading font-bold text-text-main mb-10"
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          {pricing.faq.headline}
        </h2>
        <div style={{ maxWidth: "720px" }}>
          <Accordion items={pricing.faq.items} />
        </div>
      </SectionWrapper>

      {/* ── Footer CTA ──────────────────────────────────────────── */}
      <SectionWrapper>
        <div
          className="rounded-2xl"
          style={{
            background: "rgba(220,38,38,0.05)",
            border: "1px solid rgba(220,38,38,0.15)",
            padding: "56px 48px",
            maxWidth: "680px",
          }}
        >
          <h2
            className="font-heading font-bold text-text-main mb-4"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            {pricing.footerCta.headline}
          </h2>
          <p
            className="font-body text-text-soft mb-8"
            style={{ fontSize: "17px", lineHeight: 1.8, maxWidth: "520px" }}
          >
            {pricing.footerCta.subheadline}
          </p>
          <Btn as="a" href={pricing.footerCta.cta.href} size="lg">
            {pricing.footerCta.cta.label}
          </Btn>
          <p
            className="font-body text-muted mt-5"
            style={{ fontSize: "13px", lineHeight: 1.6 }}
          >
            {pricing.footerCta.microCopy}
          </p>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
