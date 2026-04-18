"use client";

import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string[];
}

interface AccordionProps {
  items: AccordionItem[];
  variant?: "dark" | "light";
}

export default function Accordion({ items, variant = "dark" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const isLight = variant === "light";
  const borderColor = isLight ? "#E5E1D8" : "rgba(255,255,255,0.06)";
  const questionColor = isLight ? "#1A1A1A" : "#F8F6F0";
  const questionOpenColor = "#C89B3C";
  const indicatorBorder = isLight ? "#E5E1D8" : "rgba(255,255,255,0.12)";
  const indicatorBorderOpen = isLight ? "rgba(200,155,60,0.4)" : "rgba(220,38,38,0.4)";
  const indicatorColor = isLight ? "#6B7280" : "#C4C3BF";
  const indicatorOpenColor = "#C89B3C";

  return (
    <div
      role="list"
      style={{ borderTop: `1px solid ${borderColor}` }}
    >
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            role="listitem"
            style={{ borderBottom: `1px solid ${borderColor}` }}
          >
            <button
              aria-expanded={isOpen}
              onClick={() => toggle(i)}
              className="w-full flex items-start justify-between gap-6 text-left py-6"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <span
                className="font-heading font-semibold"
                style={{
                  fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                  lineHeight: 1.4,
                  color: isOpen ? questionOpenColor : questionColor,
                  transition: "color 150ms ease",
                }}
              >
                {item.question}
              </span>
              {/* Plus / minus indicator */}
              <span
                className="flex-shrink-0 flex items-center justify-center rounded-full"
                aria-hidden="true"
                style={{
                  width: "28px",
                  height: "28px",
                  marginTop: "2px",
                  border: `1px solid ${isOpen ? indicatorBorderOpen : indicatorBorder}`,
                  color: isOpen ? indicatorOpenColor : indicatorColor,
                  transition: "color 150ms ease, border-color 150ms ease",
                  fontSize: "18px",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {/* Answer panel — CSS max-height transition for smooth expand */}
            <div
              style={{
                maxHeight: isOpen ? "2000px" : "0",
                overflow: "hidden",
                transition: isOpen
                  ? "max-height 0.5s cubic-bezier(0.16,1,0.3,1)"
                  : "max-height 0.25s cubic-bezier(0.4,0,1,1)",
              }}
            >
              <div
                className="flex flex-col"
                style={{ gap: "16px", paddingBottom: "24px", maxWidth: "680px" }}
              >
                {item.answer.map((para, j) => (
                  <p
                    key={j}
                    className="font-body text-text-soft"
                    style={{ fontSize: "16px", lineHeight: 1.8 }}
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
