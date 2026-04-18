"use client";

import { useState } from "react";
import Link from "next/link";
import { faq, pricing } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

const SELECTED_QUESTIONS = [
  "Isn't this just ChatGPT? I could do this myself.",
  "How much time does this take each day?",
  "$1,000/month is a lot.",
  "What if I fall off the system or get busy?",
  "Is there a minimum commitment?",
];

const allItems = [
  ...faq.items,
  ...pricing.faq.items,
];

const items = SELECTED_QUESTIONS.map(
  (q) => allItems.find((item) => item.question === q)!
);

function AccordionLight({ items }: { items: typeof allItems }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div style={{ borderTop: "1px solid #E5E1D8" }}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} style={{ borderBottom: "1px solid #E5E1D8" }}>
            <button
              aria-expanded={isOpen}
              onClick={() => toggle(i)}
              className="w-full flex items-start justify-between gap-6 text-left py-6 group"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <span
                className="font-heading font-semibold"
                style={{
                  fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                  lineHeight: 1.4,
                  color: isOpen ? "#C89B3C" : "#1A1A1A",
                  transition: "color 150ms ease",
                }}
              >
                {item.question}
              </span>
              <span
                className="flex-shrink-0 flex items-center justify-center rounded-full"
                aria-hidden="true"
                style={{
                  width: "28px",
                  height: "28px",
                  marginTop: "2px",
                  border: `1px solid ${isOpen ? "rgba(200,155,60,0.4)" : "#E5E1D8"}`,
                  color: isOpen ? "#C89B3C" : "#6B7280",
                  transition: "color 150ms ease, border-color 150ms ease",
                  fontSize: "18px",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
              style={{
                maxHeight: isOpen ? "2000px" : "0",
                overflow: "hidden",
                transition: isOpen
                  ? "max-height 0.5s cubic-bezier(0.16,1,0.3,1)"
                  : "max-height 0.25s cubic-bezier(0.4,0,1,1)",
              }}
            >
              <div className="flex flex-col" style={{ gap: "16px", paddingBottom: "24px", maxWidth: "680px" }}>
                {item.answer.map((para, j) => (
                  <p
                    key={j}
                    className="font-sans"
                    style={{ fontSize: "16px", lineHeight: 1.8, color: "#6B7280" }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function HomepageFAQ() {
  return (
    <SectionWrapper variant="light">
      <p
        className="font-sans font-semibold uppercase tracking-widest mb-4"
        style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C89B3C" }}
      >
        COMMON QUESTIONS
      </p>

      <h2
        className="font-serif font-semibold mb-10"
        style={{
          fontSize: "clamp(28px, 3.5vw, 40px)",
          lineHeight: 1.2,
          color: "#1A1A1A",
        }}
      >
        Before you decide.
      </h2>

      <div style={{ maxWidth: "800px" }}>
        <AccordionLight items={items} />

        <p className="font-sans mt-8" style={{ fontSize: "14px" }}>
          <Link
            href="/faq"
            style={{
              color: "#C89B3C",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            More questions →
          </Link>
        </p>
      </div>
    </SectionWrapper>
  );
}
