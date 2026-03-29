"use client";

import { useEffect } from "react";
import Image from "next/image";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GrainOverlay from "@/components/ui/GrainOverlay";
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
/* Sub-components                                                       */
/* ------------------------------------------------------------------ */

function Eyebrow({ text }: { text: string }) {
  return (
    <p
      className="font-body font-semibold text-primary uppercase tracking-widest mb-4"
      style={{ fontSize: "11px", letterSpacing: "0.14em" }}
    >
      {text}
    </p>
  );
}

function SectionHeadline({ text }: { text: string }) {
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

function BodyPara({ text, delayMs = 0 }: { text: string; delayMs?: number }) {
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
          .reveal-hidden { opacity: 1; transform: none; transition: none; }
        }
      `}</style>

      <main style={{ paddingTop: "64px" }}>
        <Nav />

        {/* ── HERO — full-width image, no text ─────────────────────── */}
        <section
          style={{
            position: "relative",
            height: "clamp(420px, 60vw, 740px)",
            overflow: "hidden",
            background: "#0A0A12",
          }}
        >
          <Image
            src="/images/abstract-3.png"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center 20%",
              opacity: 0.95,
            }}
          />
          {/* Thin bottom fade only — image does the work */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              height: "160px",
              background: "linear-gradient(to bottom, transparent, #0A0A12)",
            }}
          />
          <GrainOverlay />
        </section>

        {/* ── HEADSHOT + EYEBROW + H1 — transparent, floats over hero  */}
        <section
          className="px-6"
          style={{
            background: "transparent",
            marginTop: "clamp(-280px, -38vw, -460px)",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div className="max-w-site mx-auto">
            {/* Headshot card */}
            <div
              style={{
                width: "200px",
                marginBottom: "24px",
                background: "#111119",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "14px",
                padding: "12px",
                boxShadow: "0 32px 80px rgba(0,0,0,0.65), 0 4px 20px rgba(0,0,0,0.50)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "176px",
                  height: "220px",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={about.section1.imageSrc}
                  alt={about.section1.imageAlt}
                  fill
                  priority
                  sizes="176px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                    filter: "brightness(0.96) contrast(1.04)",
                  }}
                />
              </div>
              <p
                className="font-body font-semibold text-muted uppercase text-center"
                style={{ fontSize: "11px", letterSpacing: "0.05em", marginTop: "10px" }}
              >
                Camden Bennett · Founder
              </p>
            </div>

            {/* Eyebrow */}
            <Eyebrow text={about.section1.eyebrow} />

            {/* H1 — partially over hero image */}
            <h1
              className="font-heading font-bold text-text-main"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                maxWidth: "720px",
                textShadow: "0 2px 24px rgba(0,0,0,0.55)",
              }}
            >
              {about.section1.headline}
            </h1>
          </div>
        </section>

        {/* ── SECTION 1 BODY — dark, all paragraphs ────────────────── */}
        <section
          className="relative overflow-hidden px-6"
          style={{ background: "#0A0A12", paddingTop: "56px", paddingBottom: "96px" }}
        >
          <GrainOverlay />
          <div className="relative z-10 max-w-site mx-auto">
            <div className="flex flex-col gap-5" style={{ maxWidth: "720px" }}>
              {about.section1.paragraphs.map((p, i) => (
                <BodyPara key={i} text={p} delayMs={i * 60} />
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 2 — The Background ───────────────────────────── */}
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

        {/* ── SECTION 3 — How I Work Now ───────────────────────────── */}
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

        {/* ── SECTION 4 — What This Produces ───────────────────────── */}
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
