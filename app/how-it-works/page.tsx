import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Btn from "@/components/ui/Btn";

export const metadata: Metadata = {
  title: "How It Works — Pallume",
  description:
    "Pallume engagements have a beginning, a middle, and an end. Path A and Path B explained — stages, readiness signals, and what stays after graduation.",
  alternates: {
    canonical: "https://pallume.com/how-it-works",
  },
  openGraph: {
    title: "How It Works — Pallume",
    description:
      "Pallume engagements have a beginning, a middle, and an end. Path A and Path B explained — stages, readiness signals, and what stays after graduation.",
    url: "https://pallume.com/how-it-works",
    siteName: "Pallume",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://pallume.com/" },
    { "@type": "ListItem", position: 2, name: "How It Works", item: "https://pallume.com/how-it-works" },
  ],
};

const eyebrowStyle: React.CSSProperties = {
  fontSize: "11px",
  letterSpacing: "0.14em",
  color: "#C89B3C",
};

const mutedBody: React.CSSProperties = {
  fontSize: "17px",
  lineHeight: 1.8,
  color: "#B0B8C4",
};

const darkBody: React.CSSProperties = {
  fontSize: "17px",
  lineHeight: 1.8,
  color: "#1A1A1A",
};

const listItem: React.CSSProperties = {
  fontSize: "17px",
  lineHeight: 1.8,
  color: "#1A1A1A",
  display: "flex",
  gap: "12px",
};

export default function HowItWorksPage() {
  return (
    <main style={{ paddingTop: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Nav />

      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <SectionWrapper
        style={{
          background:
            "radial-gradient(ellipse at 60% 0%, rgba(200,155,60,0.06) 0%, transparent 55%), #0F1B2D",
        }}
      >
        <div style={{ maxWidth: "720px" }}>
          <p
            className="font-body font-semibold uppercase tracking-widest mb-4"
            style={eyebrowStyle}
          >
            HOW IT WORKS
          </p>
          <h1
            className="font-heading font-bold text-text-main mb-6"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Where You Start. Where You Finish.
          </h1>
          <p className="font-body" style={{ ...mutedBody, maxWidth: "600px" }}>
            Pallume engagements have a beginning, a middle, and an end. The end is the point.
            You&apos;re not signing up for an indefinite coaching relationship — you&apos;re
            signing up for a transformation that finishes.
          </p>
        </div>
      </SectionWrapper>

      {/* ── Section 2: What to Expect ─────────────────────────────────── */}
      <SectionWrapper variant="white">
        <div style={{ maxWidth: "680px" }}>
          <p
            className="font-body font-semibold uppercase tracking-widest mb-6"
            style={eyebrowStyle}
          >
            EXPECTATIONS
          </p>
          <h2
            className="font-heading font-bold mb-8"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#1A1A1A",
            }}
          >
            What to Expect — and What&apos;s Expected of You
          </h2>
          <div className="flex flex-col" style={{ gap: "24px" }}>
            {[
              "Pallume is not a self-paced course. There's no dashboard to unlock. There's no next module waiting when you feel ready.",
              "I set the pace. You focus.",
              "The reason this works is the same reason it's uncomfortable for people who are used to moving fast: foundation has to hold before the next layer goes on. For most clients starting with basic AI experience, Stage 1 takes two to four weeks. That's not a slow start — that's the system working.",
              "During that time, you'll have one job: journal every day and engage honestly with it. Not to check a box. Not to report what happened. To think on paper, surface what's actually blocking you, and start building the habit of using AI as a thinking partner instead of a search engine.",
              "While you do that, I'll send you short emails — one every few days — covering the basics: what a project is, what Project Instructions are, what Knowledge Documents are, and what I'm actually looking for before I say you're ready to move forward.",
              "When I see it happening — when the entries are real, the thinking is showing up, and the foundation is holding — I'll tell you. That's when we move.",
              "Until then: trust the pace. It's deliberate.",
              "On communication: I review and respond to client messages once daily during a dedicated block. There are no emergencies in this work that require an immediate response. You'll hear back within 24 hours. This boundary is part of the model — I'm showing you what sustainable operating looks like, not just coaching you toward it.",
            ].map((para, i) => (
              <p key={i} className="font-body" style={darkBody}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── Section 3: Step 0 ────────────────────────────────────────── */}
      <SectionWrapper>
        <div style={{ maxWidth: "680px" }}>
          <p
            className="font-body font-semibold uppercase tracking-widest mb-6"
            style={eyebrowStyle}
          >
            STEP 0
          </p>
          <h2
            className="font-heading font-bold text-text-main mb-8"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Application &amp; Targets
          </h2>
          <div className="flex flex-col" style={{ gap: "20px" }}>
            <p className="font-body" style={mutedBody}>
              Before we start, you fill out a client application. The most important question on
              it isn&apos;t about your business. It&apos;s this:
            </p>
            <p
              className="font-body font-semibold"
              style={{
                ...mutedBody,
                color: "#F8F6F0",
                borderLeft: "3px solid #C89B3C",
                paddingLeft: "20px",
              }}
            >
              What are the one to three outcomes that — if we made real progress on them — would
              make this engagement worth it?
            </p>
            <p className="font-body" style={mutedBody}>
              These become your targets. Everything we build, every system we deploy, every weekly
              review we run, traces back to them. If a tactic doesn&apos;t serve a target, we
              don&apos;t do it.
            </p>
            <p className="font-body" style={mutedBody}>
              Targets are usually some combination of:
            </p>
            <ul className="flex flex-col" style={{ gap: "10px", paddingLeft: "0", listStyle: "none" }}>
              {[
                "A persistent business problem you've tried to solve and haven't",
                "A personal pattern that's costing you",
                "A capability you need but haven't built",
              ].map((item, i) => (
                <li key={i} style={{ ...listItem, color: "#B0B8C4" }}>
                  <span style={{ color: "#C89B3C", flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-body" style={mutedBody}>
              We pick them together at intake. We don&apos;t change them mid-engagement unless
              something fundamental shifts.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Section 4: Path A ────────────────────────────────────────── */}
      <SectionWrapper variant="white">
        <div style={{ maxWidth: "800px" }}>
          <p
            className="font-body font-semibold uppercase tracking-widest mb-4"
            style={eyebrowStyle}
          >
            PATH A
          </p>
          <h2
            className="font-heading font-bold mb-2"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#1A1A1A",
            }}
          >
            Individual Engagement
          </h2>
          <p
            className="font-body mb-12"
            style={{ fontSize: "16px", color: "#374151", lineHeight: 1.6 }}
          >
            Starting at $1,000/month. 2–7 months based on readiness, not the calendar.
          </p>

          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
          >
            {[
              {
                stage: "Stage 1",
                label: "Foundation",
                body: "We build the infrastructure. Custom journal configured to your work. Your first system built and delivered. Notion set up the way you actually need it. Capture habit established.",
                signal: "You're ready to move on when the journal is producing real thinking — not performance — and the first system is live and being used.",
              },
              {
                stage: "Stage 2",
                label: "System in Motion",
                body: "The system runs in your real work. We refine it weekly. Progress against your targets gets tracked. You start to understand why it works, not just how to use it.",
                signal: "You're ready to move on when your first target is showing measurable movement and you're thinking in systems, not just tasks.",
              },
              {
                stage: "Stage 3",
                label: "Building Your Own",
                body: "You build your second system — using the same methodology, with me advising rather than constructing. Research, prompting, and project setup become skills you own.",
                signal: "You're ready to graduate when you've built and deployed at least one system on your own and you know which tool to reach for when new problems surface.",
              },
            ].map((card) => (
              <div
                key={card.stage}
                className="flex flex-col rounded-xl"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E1D8",
                  borderTop: "3px solid #C89B3C",
                  padding: "28px 24px",
                }}
              >
                <p
                  className="font-body font-semibold uppercase tracking-widest mb-2"
                  style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#C89B3C" }}
                >
                  {card.stage}
                </p>
                <h3
                  className="font-heading font-bold mb-4"
                  style={{ fontSize: "18px", color: "#1A1A1A", lineHeight: 1.2 }}
                >
                  {card.label}
                </h3>
                <p className="font-body mb-6 flex-1" style={{ fontSize: "16px", lineHeight: 1.75, color: "#1A1A1A" }}>
                  {card.body}
                </p>
                <div
                  style={{
                    borderTop: "1px solid #E5E1D8",
                    paddingTop: "16px",
                    marginTop: "auto",
                  }}
                >
                  <p
                    className="font-body font-semibold mb-1"
                    style={{ fontSize: "11px", letterSpacing: "0.08em", color: "#C89B3C", textTransform: "uppercase" }}
                  >
                    Readiness Signal
                  </p>
                  <p className="font-body" style={{ fontSize: "15px", lineHeight: 1.7, color: "#374151" }}>
                    {card.signal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── Section 5: Path B ────────────────────────────────────────── */}
      <SectionWrapper>
        <div style={{ maxWidth: "680px" }}>
          <p
            className="font-body font-semibold uppercase tracking-widest mb-4"
            style={eyebrowStyle}
          >
            PATH B
          </p>
          <h2
            className="font-heading font-bold text-text-main mb-2"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Strategic Consulting
          </h2>
          <p
            className="font-body mb-12"
            style={{ fontSize: "16px", color: "#374151", lineHeight: 1.6 }}
          >
            Starting at $1,500/month. Scoped to the organizational challenge. Typically 3–9 months.
          </p>

          <div className="flex flex-col" style={{ gap: "0" }}>
            {[
              {
                phase: "Phase 1",
                label: "Diagnosis",
                body: "We map what's actually broken. Full intake with decision-makers. Up to three measurable outcomes defined. Stakeholders confirm the targets before we build anything.",
              },
              {
                phase: "Phase 2",
                label: "Build",
                body: "Systems designed around the diagnosed bottleneck. Pilot users trained. Weekly refinement based on real-world friction.",
              },
              {
                phase: "Phase 3",
                label: "Scale & Handoff",
                body: "Systems extend to the broader team. Internal champions trained to maintain and update configurations. Documentation built for independent operation.",
              },
            ].map((phase, i, arr) => (
              <div
                key={phase.phase}
                style={{
                  padding: "28px 0",
                  borderBottom: i < arr.length - 1 ? "1px solid rgba(200,155,60,0.15)" : "none",
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  gap: "32px",
                  alignItems: "start",
                }}
              >
                <div>
                  <p
                    className="font-body font-semibold uppercase tracking-widest mb-1"
                    style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#C89B3C" }}
                  >
                    {phase.phase}
                  </p>
                  <p
                    className="font-heading font-bold text-text-main"
                    style={{ fontSize: "16px", lineHeight: 1.2 }}
                  >
                    {phase.label}
                  </p>
                </div>
                <p className="font-body" style={mutedBody}>
                  {phase.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── Path C ───────────────────────────────────────────────────── */}
      <SectionWrapper variant="white">
        <div style={{ maxWidth: "680px" }}>
          <p
            className="font-body font-semibold uppercase tracking-widest mb-4"
            style={eyebrowStyle}
          >
            PATH C
          </p>
          <h2
            className="font-heading font-bold mb-4"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#1A1A1A",
            }}
          >
            Custom Engagements
          </h2>
          <p className="font-body" style={darkBody}>
            Some clients return after completing Path A or B with a new, specific challenge that
            doesn&apos;t fit either standard path. These are scoped individually. If that&apos;s
            where you are, apply and tell us what you&apos;re working on.
          </p>
        </div>
      </SectionWrapper>

      {/* ── Section 6: What Stays After Graduation ───────────────────── */}
      <SectionWrapper>
        <div style={{ maxWidth: "680px" }}>
          <p
            className="font-body font-semibold uppercase tracking-widest mb-6"
            style={eyebrowStyle}
          >
            GRADUATION
          </p>
          <h2
            className="font-heading font-bold text-text-main mb-8"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            What Stays After Graduation
          </h2>
          <p className="font-body mb-6" style={mutedBody}>
            You don&apos;t need us anymore — and that&apos;s the point.
          </p>
          <p className="font-body mb-6" style={mutedBody}>
            What changes: weekly sessions end.
          </p>
          <p className="font-body mb-4" style={{ ...mutedBody, color: "#F8F6F0" }}>
            What stays:
          </p>
          <ul className="flex flex-col" style={{ gap: "12px", listStyle: "none", padding: 0 }}>
            {[
              "The systems you built (they live in your Claude Pro account, not ours)",
              "The methodology (documented so you can build new systems when new problems show up)",
              "Community membership (you stay on the Pallume email list — insights, frameworks, and updates that apply to graduates)",
              "The door (always open for a new engagement when life or work brings something the original work didn't cover)",
            ].map((item, i) => (
              <li key={i} style={{ ...listItem, color: "#B0B8C4" }}>
                <span style={{ color: "#C89B3C", flexShrink: 0 }}>—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* ── Section 7: What We Don't Do ──────────────────────────────── */}
      <SectionWrapper variant="white">
        <div style={{ maxWidth: "600px" }}>
          <p
            className="font-body font-semibold uppercase tracking-widest mb-6"
            style={eyebrowStyle}
          >
            BOUNDARIES
          </p>
          <h2
            className="font-heading font-bold mb-8"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#1A1A1A",
            }}
          >
            What We Don&apos;t Do
          </h2>
          <ul className="flex flex-col" style={{ gap: "14px", listStyle: "none", padding: 0 }}>
            {[
              "We don't run your business for you.",
              "We don't sell more services as you progress.",
              "We don't keep you dependent.",
              "We don't move you on the calendar. You move when you're ready.",
            ].map((item, i) => (
              <li key={i} style={listItem}>
                <span style={{ color: "#C89B3C", flexShrink: 0 }}>—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* ── Section 8: What You Need to Bring ───────────────────────── */}
      <SectionWrapper variant="light">
        <div style={{ maxWidth: "600px" }}>
          <p
            className="font-body font-semibold uppercase tracking-widest mb-6"
            style={eyebrowStyle}
          >
            REQUIREMENTS
          </p>
          <h2
            className="font-heading font-bold mb-8"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#1A1A1A",
            }}
          >
            What You Need to Bring
          </h2>
          <ul className="flex flex-col" style={{ gap: "14px", listStyle: "none", padding: 0 }}>
            {[
              "A Claude Pro account ($20/month — yours, not ours)",
              "A real problem you're motivated to solve",
              "30–60 minutes a week for sessions and journal review",
              "The willingness to actually use the systems we build",
            ].map((item, i) => (
              <li key={i} style={listItem}>
                <span style={{ color: "#C89B3C", flexShrink: 0 }}>—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* ── Section 9: CTA ───────────────────────────────────────────── */}
      <SectionWrapper
        style={{
          background:
            "radial-gradient(ellipse at 40% 80%, rgba(200,155,60,0.05) 0%, transparent 55%), #0F1B2D",
        }}
      >
        <div style={{ maxWidth: "560px" }}>
          <h2
            className="font-heading font-bold text-text-main mb-8"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Ready to Apply?
          </h2>
          <Btn as="a" href="/apply" size="lg">
            Apply to Work with Pallume
          </Btn>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
