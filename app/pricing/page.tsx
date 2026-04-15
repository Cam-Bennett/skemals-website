import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Accordion from "@/components/ui/Accordion";
import Btn from "@/components/ui/Btn";
import { pricing } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Pricing — Pallume",
  description: pricing.meta.description,
  alternates: {
    canonical: "https://pallume.com/pricing",
  },
  openGraph: {
    title: "Pricing — Pallume",
    description: pricing.meta.description,
    url: "https://pallume.com/pricing",
    siteName: "Pallume",
    type: "website",
  },
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
  scopeParagraph,
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
  includes?: string[];
  includesNote?: string;
  scopeParagraph?: string;
  ctaLabel: string;
  ctaHref: string;
  alt?: boolean;
}) {
  return (
    <SectionWrapper variant={alt ? "light" : "white"}>
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

        {includes && includes.length > 0 && (
          <>
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
          </>
        )}

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

        {scopeParagraph && (
          <p
            className="font-body text-text-soft mb-8"
            style={{ fontSize: "16px", lineHeight: 1.8 }}
          >
            {scopeParagraph}
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pallume Journal AI Accountability System",
  description:
    "Custom-built AI execution system for business owners. Includes intake interview, system configuration, daily check-in, and weekly coaching review. Not a template — built specifically for your goals, patterns, and constraints.",
  provider: {
    "@type": "Organization",
    "@id": "https://pallume.com/#organization",
    name: "Pallume",
  },
  areaServed: "United States",
  url: "https://pallume.com/pricing",
  offers: [
    {
      "@type": "Offer",
      name: "PATH A — Individual",
      price: "1000",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1000",
        priceCurrency: "USD",
        unitText: "MONTH",
      },
      eligibleRegion: "US",
    },
    {
      "@type": "Offer",
      name: "PATH B — Organizational (1–3 person teams)",
      price: "1500",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1500",
        priceCurrency: "USD",
        unitText: "MONTH",
      },
      eligibleRegion: "US",
    },
  ],
};

const pricingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricing.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.join(" "),
    },
  })),
};

const pricingBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://pallume.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Pricing",
      item: "https://pallume.com/pricing",
    },
  ],
};

/* ── Page ───────────────────────────────────────────────────── */
export default function PricingPage() {
  return (
    <main style={{ paddingTop: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingBreadcrumb) }}
      />
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#0F1B2D",
          minHeight: "52vh",
          display: "flex",
          alignItems: "flex-end",
          padding: "0 24px 56px",
        }}
      >
        <Image
          src="/images/Abstract-4.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", opacity: 0.95, zIndex: 0 }}
        />
        {/* Bottom fade for headline contrast */}
        <div
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: "320px",
            background: "linear-gradient(to bottom, transparent, rgba(10,10,18,0.7) 50%, #0F1B2D)",
            zIndex: 1,
          }}
        />
        <div className="max-w-site mx-auto w-full" style={{ position: "relative", zIndex: 2 }}>
          <p
            className="font-body font-semibold text-primary uppercase tracking-widest mb-4"
            style={{ fontSize: "11px", letterSpacing: "0.14em" }}
          >
            {pricing.hero.eyebrow}
          </p>
          <h1
            className="font-heading font-bold text-text-main"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "720px",
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            }}
          >
            {pricing.hero.headline}
          </h1>
        </div>
      </section>

      {/* ── Investment context ──────────────────────────────────── */}
      <SectionWrapper variant="light">
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
        scopeParagraph={pricing.pathC.scopeParagraph}
        ctaLabel={pricing.pathC.cta.label}
        ctaHref={pricing.pathC.cta.href}
      />

      {/* ── Risk reversal ───────────────────────────────────────── */}
      <SectionWrapper>
        <div style={{ maxWidth: "680px" }}>
          <p
            className="font-body font-semibold text-primary uppercase tracking-widest mb-8"
            style={{ fontSize: "11px", letterSpacing: "0.14em" }}
          >
            {pricing.riskReversal.eyebrow}
          </p>
          <div className="flex flex-col gap-5">
            {pricing.riskReversal.paragraphs.map((p, i) => (
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

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <SectionWrapper variant="light">
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
            background: "rgba(200,155,60,0.05)",
            border: "1px solid rgba(200,155,60,0.15)",
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
          <p className="font-body text-muted mt-4" style={{ fontSize: "13px" }}>
            Not ready to commit?{" "}
            <a
              href="/myskema-lite"
              className="hover:text-text-soft transition-colors duration-150"
              style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Try Pallume Journal Lite free — 14 days, no obligation.
            </a>
          </p>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
