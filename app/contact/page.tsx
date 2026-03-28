import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Btn from "@/components/ui/Btn";
import { contact } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Contact — SkemaLS",
  description:
    "Start with the 5-question qualifier. 90 seconds. Routes you to the right path and gets your answers directly to Camden.",
};

export default function ContactPage() {
  return (
    <main style={{ paddingTop: "64px" }}>
      <Nav />

      {/* ── Main section ─────────────────────────────────────────── */}
      <SectionWrapper
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#0A0A12",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src="/images/abstract-2.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", opacity: 0.18, zIndex: 0 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10,10,18,0.72)",
            zIndex: 1,
          }}
        />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "640px" }}>
          {/* Eyebrow */}
          <p
            className="font-body font-semibold text-primary uppercase tracking-widest mb-4"
            style={{ fontSize: "11px", letterSpacing: "0.14em" }}
          >
            {contact.eyebrow}
          </p>

          {/* Headline */}
          <h1
            className="font-heading font-bold text-text-main mb-6"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {contact.headline}
          </h1>

          {/* Body */}
          <p
            className="font-body text-text-soft mb-10"
            style={{ fontSize: "17px", lineHeight: 1.8, maxWidth: "520px" }}
          >
            {contact.body}
          </p>

          {/* CTA */}
          <Btn as="a" href={contact.buttonHref} size="lg">
            {contact.buttonLabel}
          </Btn>

          {/* Direct contact block */}
          <div
            style={{
              marginTop: "56px",
              paddingTop: "40px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p
              className="font-body text-muted mb-4"
              style={{ fontSize: "13px", letterSpacing: "0.04em" }}
            >
              {contact.directContact.label}
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${contact.directContact.email}`}
                className="font-body text-text-soft hover:text-primary"
                style={{
                  fontSize: "16px",
                  textDecoration: "none",
                  transition: "color 150ms ease",
                }}
              >
                {contact.directContact.email}
              </a>
              <a
                href={`tel:${contact.directContact.phone.replace(/\./g, "")}`}
                className="font-body text-text-soft hover:text-primary"
                style={{
                  fontSize: "16px",
                  textDecoration: "none",
                  transition: "color 150ms ease",
                }}
              >
                {contact.directContact.phone}
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
