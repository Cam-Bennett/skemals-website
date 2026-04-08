import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import GrainOverlay from "@/components/ui/GrainOverlay";
import Btn from "@/components/ui/Btn";
import FreeTrialForm from "./FreeTrialForm";

export const metadata: Metadata = {
  title: "MySkema Lite — Free 14-Day Experience | SkemaLS",
  description:
    "14 days of structured journaling that shows you exactly what's costing you. Free. No coaching yet — just clarity.",
  alternates: {
    canonical: "https://skemals.com/myskema-lite",
  },
  openGraph: {
    title: "MySkema Lite — Free 14-Day Experience | SkemaLS",
    description:
      "14 days of structured journaling that shows you exactly what's costing you. Free. No coaching yet — just clarity.",
    url: "https://skemals.com/myskema-lite",
    siteName: "SkemaLS",
    type: "website",
  },
};

const phases = [
  {
    num: "01",
    name: "Baseline",
    days: "Days 1–3",
    desc: "No structure. No optimization. Just describe your day as it actually is.",
  },
  {
    num: "02",
    name: "Pattern Recognition",
    days: "Days 4–7",
    desc: "Targeted prompts that reveal where your focus actually goes and what ends it.",
  },
  {
    num: "03",
    name: "Environment Mapping",
    days: "Days 8–10",
    desc: "Identify what's fixed in your situation vs. what's within your control to change.",
  },
  {
    num: "04",
    name: "Mechanism Naming",
    days: "Days 11–12",
    desc: "Learn the vocabulary for what you've been experiencing. Attention residue. Open loop tax. Urgency bias.",
  },
  {
    num: "05",
    name: "Problem Naming",
    days: "Days 13–14",
    desc: "Name the three things costing you the most — and see the gap between your best workday and what's actually happening.",
  },
];

const liteItems = [
  "You see your patterns",
  "You can name what's wrong",
  "You understand the mechanisms",
  "You know which questions to ask",
  "14-day self-awareness",
];

const fullItems = [
  "I see your patterns — and you see mine seeing yours",
  "We select the three highest-leverage issues together",
  "We design experiments against your specific constraints",
  "You get answers tested against real behavior, not theory",
  "90-day transformation with weekly review and external accountability",
];

const liteBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://skemals.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "MySkema Lite",
      item: "https://skemals.com/myskema-lite",
    },
  ],
};

export default function MySkemaLitePage() {
  return (
    <main style={{ paddingTop: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(liteBreadcrumb) }}
      />
      <Nav />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section
        className="grid grid-cols-1 md:grid-cols-2"
        style={{
          background: "#0A0A12",
          minHeight: "88vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <GrainOverlay />

        {/* Left — headline + CTA */}
        <div
          style={{
            padding: "clamp(72px, 10vw, 128px) clamp(24px, 4vw, 64px) 72px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <p
            className="font-body font-semibold text-primary uppercase tracking-widest mb-6"
            style={{ fontSize: "11px", letterSpacing: "0.14em" }}
          >
            MySkema Lite — Free 14-Day Experience
          </p>
          <h1
            className="font-heading font-bold text-text-main"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "24px",
            }}
          >
            You already know
            <br />
            something&apos;s
            <br />
            <span style={{ color: "#DC2626" }}>costing you.</span>
          </h1>
          <p
            className="font-body text-text-soft"
            style={{
              fontSize: "clamp(16px, 1.8vw, 18px)",
              lineHeight: 1.75,
              maxWidth: "440px",
              marginBottom: "40px",
            }}
          >
            In 14 days of structured journaling, you&apos;ll know exactly what it is — and why it keeps winning.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap" }}>
            <Btn as="a" href="#get-started" size="lg">
              Start Free Today
            </Btn>
            <a
              href="#what-it-is"
              className="font-body text-muted hover:text-text-soft"
              style={{
                fontSize: "13px",
                letterSpacing: "0.04em",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                paddingBottom: "2px",
                transition: "color 150ms ease",
              }}
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Right — journal card mockup */}
        <div
          className="hidden md:flex"
          style={{
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #0A0A12 0%, #0f0f1a 50%, #0A0A12 100%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(220,38,38,0.025) 60px, rgba(220,38,38,0.025) 61px)",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 2,
              width: "340px",
              background: "#0F0F1A",
              border: "1px solid rgba(255,255,255,0.07)",
              borderLeft: "3px solid #DC2626",
              padding: "32px",
              borderRadius: "2px",
            }}
          >
            <p
              className="font-body font-semibold text-primary uppercase tracking-widest mb-5"
              style={{ fontSize: "10px", letterSpacing: "0.15em" }}
            >
              Day 5 of 14
            </p>
            <p
              className="font-body text-muted"
              style={{ fontSize: "14px", lineHeight: 1.75, fontStyle: "italic" }}
            >
              &ldquo;Count how many times today you were pulled away from something you didn&apos;t initiate.&rdquo;
            </p>
            <div
              style={{
                marginTop: "16px",
                paddingTop: "16px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p
                className="font-body text-text-soft"
                style={{ fontSize: "12px", lineHeight: 1.9, opacity: 0.7 }}
              >
                11 interruptions. Maybe more. Each one — I had to restart. I thought I was just bad at focus. Turns out I&apos;ve never had a chance to find out.
                <span
                  style={{
                    display: "inline-block",
                    width: "2px",
                    height: "12px",
                    background: "#DC2626",
                    marginLeft: "3px",
                    verticalAlign: "middle",
                    opacity: 0.8,
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Truth section ───────────────────────────────────────── */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "96px 24px",
          background: "#0A0A12",
        }}
      >
        <div
          className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "80px", alignItems: "center" }}
        >
          <div>
            <p
              className="font-body font-semibold text-primary uppercase tracking-widest mb-6"
              style={{ fontSize: "10px", letterSpacing: "0.2em" }}
            >
              The Research
            </p>
            <h2
              className="font-heading font-bold text-text-main mb-6"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Your focus isn&apos;t broken.{" "}
              <span style={{ color: "#DC2626" }}>Your environment is.</span>
            </h2>
            <p className="font-body text-text-soft mb-5" style={{ fontSize: "17px", lineHeight: 1.8 }}>
              The average knowledge worker is interrupted every 3–5 minutes. After each interruption, full focus recovery takes 23 minutes. Most people spend more time recovering from interruptions than doing uninterrupted work.
            </p>
            <p className="font-body text-text-soft" style={{ fontSize: "17px", lineHeight: 1.8 }}>
              That&apos;s not a discipline problem. That&apos;s a design problem. And design problems have solutions.
            </p>
          </div>

          {/* Stat grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {[
              { number: "23", label: "minutes to recover\nfrom one interruption" },
              { number: "3–5", label: "minutes between\ninterruptions on average" },
              { number: "4", label: "hours — the daily\nlimit for deep work" },
              { number: "14", label: "days to see your\nown patterns clearly" },
            ].map(({ number, label }) => (
              <div key={number} style={{ background: "#0F0F1A", padding: "32px 28px" }}>
                <p
                  className="font-heading font-bold text-primary"
                  style={{ fontSize: "48px", lineHeight: 1, marginBottom: "8px" }}
                >
                  {number}
                </p>
                <p
                  className="font-body text-muted"
                  style={{ fontSize: "12px", lineHeight: 1.6, whiteSpace: "pre-line" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What it is ──────────────────────────────────────────── */}
      <section
        id="what-it-is"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "96px 24px",
          background: "#0F0F1A",
        }}
      >
        <div className="max-w-site mx-auto">
          {/* Section header */}
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "64px", marginBottom: "64px", alignItems: "end" }}
          >
            <div>
              <p
                className="font-body font-semibold text-primary uppercase tracking-widest mb-6"
                style={{ fontSize: "10px", letterSpacing: "0.2em" }}
              >
                The Method
              </p>
              <h2
                className="font-heading font-bold text-text-main"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                14 days. Five phases.{" "}
                <span style={{ color: "#DC2626" }}>One clear picture.</span>
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="font-body text-text-soft mb-5" style={{ fontSize: "17px", lineHeight: 1.8 }}>
                MySkema Lite is a structured diagnostic — not a productivity course, not a template pack, not another system to maintain. Each day takes 5–10 minutes. The prompts are designed to surface patterns you can&apos;t see from the inside of your own day.
              </p>
              <p className="font-body text-text-soft" style={{ fontSize: "17px", lineHeight: 1.8 }}>
                By day 14, you won&apos;t have all the answers. But you&apos;ll be asking the right questions for the first time.
              </p>
            </div>
          </div>

          {/* Phases grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-5"
            style={{
              gap: "1px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {phases.map((phase) => (
              <div key={phase.num} style={{ background: "#0A0A12", padding: "28px 20px" }}>
                <p
                  className="font-heading font-bold"
                  style={{ fontSize: "36px", color: "rgba(255,255,255,0.07)", lineHeight: 1, marginBottom: "12px" }}
                >
                  {phase.num}
                </p>
                <p
                  className="font-body font-semibold text-primary uppercase tracking-widest mb-2"
                  style={{ fontSize: "9px", letterSpacing: "0.15em" }}
                >
                  {phase.name}
                </p>
                <p className="font-body text-muted mb-3" style={{ fontSize: "11px" }}>
                  {phase.days}
                </p>
                <p className="font-body text-text-soft" style={{ fontSize: "13px", lineHeight: 1.65 }}>
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison ──────────────────────────────────────────── */}
      <section
        style={{
          padding: "96px 24px",
          background: "#0A0A12",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-site mx-auto">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p
              className="font-body font-semibold text-primary uppercase tracking-widest mb-5"
              style={{ fontSize: "10px", letterSpacing: "0.2em" }}
            >
              Lite vs. Full
            </p>
            <h2
              className="font-heading font-bold text-text-main"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Awareness is the start.{" "}
              <span style={{ color: "#DC2626" }}>Not the destination.</span>
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "40px", maxWidth: "880px", margin: "0 auto" }}
          >
            {/* Lite */}
            <div>
              <p
                className="font-body font-semibold text-muted uppercase tracking-widest mb-6"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  paddingBottom: "16px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                MySkema Lite — Free
              </p>
              {liteItems.map((item) => (
                <div key={item} className="flex items-start gap-3 mb-4">
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,0.2)",
                      background: "transparent",
                      flexShrink: 0,
                      marginTop: "8px",
                    }}
                  />
                  <p className="font-body text-muted" style={{ fontSize: "15px", lineHeight: 1.6 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div
              className="hidden md:block"
              style={{ width: "1px", background: "rgba(255,255,255,0.06)", position: "relative" }}
            >
              <span
                className="font-heading font-bold"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.15)",
                  background: "#0A0A12",
                  padding: "8px 4px",
                  letterSpacing: "0.1em",
                }}
              >
                VS
              </span>
            </div>

            {/* Full */}
            <div>
              <p
                className="font-body font-semibold text-primary uppercase tracking-widest mb-6"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  paddingBottom: "16px",
                  borderBottom: "1px solid rgba(220,38,38,0.2)",
                }}
              >
                Full MySkema — $1,000/mo
              </p>
              {fullItems.map((item) => (
                <div key={item} className="flex items-start gap-3 mb-4">
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#DC2626",
                      flexShrink: 0,
                      marginTop: "8px",
                    }}
                  />
                  <p className="font-body text-text-soft" style={{ fontSize: "15px", lineHeight: 1.6 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Promise ─────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0F0F1A",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "96px 24px",
        }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <p
            className="font-body font-semibold text-primary uppercase tracking-widest mb-5"
            style={{ fontSize: "10px", letterSpacing: "0.2em" }}
          >
            The Unspoken Promise
          </p>
          <h2
            className="font-heading font-bold text-text-main mb-8"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            You&apos;ll know what&apos;s costing you.{" "}
            <span style={{ color: "#DC2626" }}>Exactly.</span>
          </h2>
          <p className="font-body text-text-soft mb-5" style={{ fontSize: "18px", lineHeight: 1.8 }}>
            Not a productivity style quiz. Not a template to fill out once and forget. A 14-day journal process that produces an honest picture of how you actually work — the patterns, the constraints, the mechanisms, and the gap between where you are and where you want to be.
          </p>
          <p className="font-body text-text-soft mb-10" style={{ fontSize: "18px", lineHeight: 1.8 }}>
            No coaching yet. Just clarity. The coaching is what happens after.
          </p>
          <Btn as="a" href="#get-started" size="lg">
            Start MySkema Lite — Free
          </Btn>
        </div>
      </section>

      {/* ── Form ────────────────────────────────────────────────── */}
      <section id="get-started" style={{ padding: "96px 24px", background: "#0A0A12" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <p
            className="font-body font-semibold text-primary uppercase tracking-widest mb-4"
            style={{ fontSize: "11px", letterSpacing: "0.14em" }}
          >
            Get Started
          </p>
          <h2
            className="font-heading font-bold text-text-main mb-4"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            14 days.{" "}
            <span style={{ color: "#DC2626" }}>No cost.</span> No credit card. No obligation.
          </h2>
          <p className="font-body text-text-soft mb-10" style={{ fontSize: "17px", lineHeight: 1.8 }}>
            You&apos;ll receive your first prompt today. One per day for 14 days. The journal lives in your own Claude account — you own it.
          </p>
          <FreeTrialForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
