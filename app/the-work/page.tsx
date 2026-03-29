import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Btn from "@/components/ui/Btn";
import { articles } from "@/content/articles";
import { theWork } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "The Work — SkemaLS",
  description:
    "Case studies, process writing, and field notes from inside the system. Written for business owners who've already tried the standard solutions.",
};

export default function TheWorkPage() {
  return (
    <main style={{ paddingTop: "64px" }}>
      <Nav />

      {/* ── Header ─────────────────────────────────────────────────── */}
      <SectionWrapper
        style={{
          background:
            "radial-gradient(ellipse at 60% 0%, rgba(220,38,38,0.08) 0%, transparent 55%), #0A0A12",
        }}
      >
        <p
          className="font-body font-semibold text-primary uppercase tracking-widest mb-4"
          style={{ fontSize: "11px", letterSpacing: "0.14em" }}
        >
          THE WORK
        </p>
        <h1
          className="font-heading font-bold text-text-main"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: "680px",
          }}
        >
          {theWork.headline}
        </h1>
      </SectionWrapper>

      {/* ── Article list ───────────────────────────────────────────── */}
      <SectionWrapper bgAlt>
        <div
          className="flex flex-col"
          style={{ maxWidth: "720px", gap: "0" }}
        >
          {articles.map((article, i) => (
            <Link
              key={article.slug}
              href={`/the-work/${article.slug}`}
              style={{ textDecoration: "none" }}
            >
              <article
                style={{
                  padding: "40px 0",
                  borderBottom:
                    i < articles.length - 1
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                  cursor: "pointer",
                }}
                className="group"
              >
                <p
                  className="font-body font-semibold text-primary uppercase tracking-widest mb-3"
                  style={{ fontSize: "11px", letterSpacing: "0.14em" }}
                >
                  {article.category}
                </p>
                <h2
                  className="font-heading font-bold text-text-main mb-3 group-hover:text-primary"
                  style={{
                    fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                    transition: "color 150ms ease",
                  }}
                >
                  {article.title}
                </h2>
                <p
                  className="font-body text-text-soft mb-4"
                  style={{ fontSize: "16px", lineHeight: 1.7, maxWidth: "580px" }}
                >
                  {article.excerpt}
                </p>
                <span
                  className="font-body font-semibold text-primary"
                  style={{ fontSize: "14px", letterSpacing: "0.02em" }}
                >
                  Read →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Bottom CTA ─────────────────────────────────────────────── */}
      <SectionWrapper>
        <div style={{ maxWidth: "600px" }}>
          <p
            className="font-body font-semibold text-primary uppercase tracking-widest mb-6"
            style={{ fontSize: "11px", letterSpacing: "0.14em" }}
          >
            {theWork.cta.eyebrow}
          </p>
          <p
            className="font-body text-text-soft mb-8"
            style={{ fontSize: "17px", lineHeight: 1.8 }}
          >
            {theWork.cta.body}
          </p>
          <Btn as="a" href={theWork.cta.buttonHref} size="lg">
            {theWork.cta.buttonLabel}
          </Btn>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
