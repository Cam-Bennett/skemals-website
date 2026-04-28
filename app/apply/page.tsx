import type { Metadata } from "next";
import Script from "next/script";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Apply — Pallume",
  description:
    "Pallume works with a limited number of clients at a time. This application helps Camden understand whether we're a fit before scheduling a call. Expect a response within 2 business days.",
  alternates: {
    canonical: "https://pallume.com/apply",
  },
  openGraph: {
    title: "Apply — Pallume",
    description:
      "Pallume works with a limited number of clients at a time. This application helps Camden understand whether we're a fit before scheduling a call.",
    url: "https://pallume.com/apply",
    siteName: "Pallume",
    type: "website",
  },
};

const applyBreadcrumb = {
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
      name: "Apply",
      item: "https://pallume.com/apply",
    },
  ],
};

export default function ApplyPage() {
  return (
    <main style={{ paddingTop: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(applyBreadcrumb) }}
      />
      <Script async src="https://tally.so/widgets/embed.js" />
      <Nav />

      {/* ── Header ─────────────────────────────────────────────────── */}
      <SectionWrapper
        style={{
          background:
            "radial-gradient(ellipse at 60% 0%, rgba(200,155,60,0.06) 0%, transparent 55%), #0F1B2D",
        }}
      >
        <div style={{ maxWidth: "680px" }}>
          <p
            className="font-body font-semibold text-primary uppercase tracking-widest mb-4"
            style={{ fontSize: "11px", letterSpacing: "0.14em" }}
          >
            APPLY
          </p>
          <h1
            className="font-heading font-bold text-text-main mb-4"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Apply to Work with Pallume
          </h1>
          <p
            className="font-body text-text-soft"
            style={{ fontSize: "17px", lineHeight: 1.75, maxWidth: "560px" }}
          >
            Pallume works with a limited number of clients at a time. This
            application helps Camden understand whether we&apos;re a fit before
            scheduling a call. Expect a response within 2 business days.
          </p>
        </div>
      </SectionWrapper>

      {/* ── Form ───────────────────────────────────────────────────── */}
      <SectionWrapper variant="light">
        <div style={{ maxWidth: "720px" }}>
          <iframe
            src="https://tally.so/embed/Gxop2o?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="800"
            style={{ border: 0, minHeight: "800px" }}
            title="Pallume Client Application"
          />
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
