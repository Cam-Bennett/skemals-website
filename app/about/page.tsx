"use client";

import { useEffect } from "react";
import Image from "next/image";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Btn from "@/components/ui/Btn";
import { about } from "@/content/siteContent";

/* ------------------------------------------------------------------ */
/* Scroll-reveal hook                                                   */
/* ------------------------------------------------------------------ */
function useReveal() {
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay ?? "0";
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add("reveal-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ------------------------------------------------------------------ */
/* Reusable sub-components                                              */
/* ------------------------------------------------------------------ */

interface EyebrowProps {
  text: string;
}
function Eyebrow({ text }: EyebrowProps) {
  return (
    <p
      className="font-body font-semibold text-primary uppercase tracking-widest mb-4"
      style={{ fontSize: "11px", letterSpacing: "0.14em" }}
    >
      {text}
    </p>
  );
}

interface HeadlineProps {
  text: string;
}
function SectionHeadline({ text }: HeadlineProps) {
  return (
    <h2
      className="font-heading font-bold text-text-main mb-8"
      style={{
        fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)",
        lineHeight: 1.15,
        letterSpacing: "-0.02em",
      }}
    >
      {text}
    </h2>
  );
}

interface BodyParaProps {
  text: string;
  delayMs?: number;
}
function BodyPara({ text, delayMs = 0 }: BodyParaProps) {
  return (
    <p
      data-reveal
      data-reveal-delay={delayMs}
      className="font-body text-text-soft reveal-hidden"
      style={{ fontSize: "16px", lineHeight: 1.8 }}
    >
      {text}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  useReveal();

  return (
    <>
      {/* Inline reveal styles — avoids external CSS file dependency */}
      <style>{`
        .reveal-hidden {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1),
                      transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .reveal-visible {
          opacity: 1 !important;
          transform: none !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal-hidden {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <main style={{ paddingTop: "64px" /* nav height */ }}>
        <Nav />

        {/* ── SECTION 1 — Hard split: dark left / image right ─────── */}
        <section
          style={{
            display: "flex",
            minHeight: "80vh",
            overflow: "hidden",
          }}
        >
          {/* LEFT — solid dark panel with headshot + text */}
          <div
            style={{
              flex: "0 0 50%",
              background: "#0A0A12",
              padding: "80px 56px 80px 48px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              className="flex flex-col md:flex-row gap-10 items-start"
              style={{ maxWidth: "560px" }}
            >
              {/* Headshot */}
              <div
                className="relative rounded-xl overflow-hidden reveal-hidden flex-shrink-0"
                data-reveal
                data-reveal-delay="0"
                style={{
                  width: "160px",
                  aspectRatio: "4 / 5",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <Image
                  src={about.section1.imageSrc}
                  alt={about.section1.imageAlt}
                  fill
                  priority
                  className="object-cover object-top"
                  style={{ filter: "brightness(0.95) contrast(1.05)" }}
                  sizes="160px"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-5">
                <Eyebrow text={about.section1.eyebrow} />
                <h1
                  data-reveal
                  data-reveal-delay="80"
                  className="font-heading font-bold text-text-main reveal-hidden"
                  style={{
                    fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {about.section1.headline}
                </h1>
                {about.section1.paragraphs.map((p, i) => (
                  <BodyPara key={i} text={p} delayMs={(i + 1) * 80} />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — image at near-full opacity, thin feather at seam */}
          <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
            <Image
              src="/images/abstract-3.png"
              alt=""
              fill
              priority
              sizes="50vw"
              style={{ objectFit: "cover", objectPosition: "center", opacity: 0.92 }}
            />
            {/* Thin left-edge feather to blend with dark panel */}
            <div
              style={{
                position: "absolute",
                inset: "0 auto 0 0",
                width: "100px",
                background: "linear-gradient(to right, #0A0A12, transparent)",
                zIndex: 1,
              }}
            />
          </div>
        </section>

        {/* ── SECTION 2 — The Search ───────────────────────────────── */}
        <SectionWrapper bgAlt>
          <Eyebrow text={about.section2.eyebrow} />
          <div
            data-reveal
            data-reveal-delay="0"
            className="reveal-hidden"
            style={{ maxWidth: "720px" }}
          >
            <SectionHeadline text={about.section2.headline} />
          </div>
          <div className="flex flex-col gap-5" style={{ maxWidth: "720px" }}>
            {about.section2.paragraphs.map((p, i) => (
              <BodyPara key={i} text={p} delayMs={i * 60} />
            ))}
          </div>
        </SectionWrapper>

        {/* ── SECTION 3 — The Background ──────────────────────────── */}
        <SectionWrapper
          style={{
            background:
              "radial-gradient(ellipse at 10% 60%, rgba(220,38,38,0.05) 0%, transparent 55%), #0A0A12",
          }}
        >
          <Eyebrow text={about.section3.eyebrow} />
          <div
            data-reveal
            data-reveal-delay="0"
            className="reveal-hidden"
            style={{ maxWidth: "720px" }}
          >
            <SectionHeadline text={about.section3.headline} />
          </div>
          <div className="flex flex-col gap-5" style={{ maxWidth: "720px" }}>
            {about.section3.paragraphs.map((p, i) => (
              <BodyPara key={i} text={p} delayMs={i * 60} />
            ))}
          </div>
        </SectionWrapper>

        {/* ── SECTION 4 — What This Produces ──────────────────────── */}
        <SectionWrapper bgAlt>
          <Eyebrow text={about.section4.eyebrow} />
          <div
            data-reveal
            data-reveal-delay="0"
            className="reveal-hidden"
            style={{ maxWidth: "720px" }}
          >
            <SectionHeadline text={about.section4.headline} />
          </div>

          <div className="flex flex-col gap-5" style={{ maxWidth: "720px" }}>
            {about.section4.paragraphs.map((p, i) => (
              <BodyPara key={i} text={p} delayMs={i * 60} />
            ))}
          </div>
        </SectionWrapper>

        {/* ── SECTION 5 — Why This Works ───────────────────────────── */}
        <SectionWrapper
          style={{
            background:
              "radial-gradient(ellipse at 90% 80%, rgba(220,38,38,0.06) 0%, transparent 55%), #0A0A12",
          }}
        >
          <Eyebrow text={about.section5.eyebrow} />
          <div
            data-reveal
            data-reveal-delay="0"
            className="reveal-hidden"
            style={{ maxWidth: "720px" }}
          >
            <SectionHeadline text={about.section5.headline} />
          </div>

          <div className="flex flex-col gap-5" style={{ maxWidth: "720px" }}>
            {about.section5.paragraphs.map((p, i) => (
              <BodyPara key={i} text={p} delayMs={i * 60} />
            ))}
          </div>

          {/* Byline */}
          <p
            data-reveal
            data-reveal-delay="200"
            className="font-body reveal-hidden"
            style={{
              fontSize: "13px",
              color: "#6B7280",
              marginTop: "40px",
              maxWidth: "720px",
            }}
          >
            {about.section5.byline}
          </p>

          {/* CTA */}
          <div
            data-reveal
            data-reveal-delay="360"
            className="reveal-hidden"
            style={{ marginTop: "40px" }}
          >
            <Btn as="a" href={about.cta.buttonHref} size="lg">
              {about.cta.buttonLabel}
            </Btn>
          </div>
        </SectionWrapper>

        <Footer />
      </main>
    </>
  );
}
