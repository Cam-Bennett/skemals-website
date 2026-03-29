"use client";

import { useState } from "react";
import { qualifierForm } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Btn from "@/components/ui/Btn";

// A_both → routes to PATH A tag. All unique values for clean selection state.
const PATH_TAG_MAP: Record<string, string> = {
  A: "PATH-A",
  B: "PATH-B",
  A_both: "PATH-A",
  C: "PATH-C",
};

interface FormState {
  businessContext: string;
  path: string;
  executionGap: string;
  priorAttempts: string;
  motivation: string;
  name: string;
  email: string;
}

const initialState: FormState = {
  businessContext: "",
  path: "",
  executionGap: "",
  priorAttempts: "",
  motivation: "",
  name: "",
  email: "",
};

const textareaFields = ["businessContext", "executionGap", "priorAttempts", "motivation"];

function isStepComplete(stepIndex: number, state: FormState): boolean {
  switch (stepIndex) {
    case 0: return state.businessContext.trim() !== "";
    case 1: return state.path !== "";
    case 2: return state.executionGap.trim() !== "";
    case 3: return state.priorAttempts.trim() !== "";
    case 4: return state.motivation.trim() !== "";
    case 5: return state.name.trim() !== "" && state.email.trim() !== "";
    default: return false;
  }
}

const inputStyle: React.CSSProperties = {
  fontFamily: "var(--font-karla), sans-serif",
  fontSize: "15px",
  color: "#F1F0EE",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "8px",
  padding: "14px 18px",
  outline: "none",
  width: "100%",
  resize: "vertical" as const,
};

export default function QualifierForm() {
  const [step, setStep] = useState(0);
  const [state, setState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const totalSteps = qualifierForm.steps.length;
  const currentStep = qualifierForm.steps[step];
  const canProceed = isStepComplete(step, state);

  function handleNext() {
    if (step < totalSteps - 1) setStep(step + 1);
  }

  function handleBack() {
    if (step > 0) setStep(step - 1);
  }

  async function handleSubmit() {
    setSubmitting(true);
    setSubmitError("");
    try {
      const payload = {
        ...state,
        pathTag: PATH_TAG_MAP[state.path] ?? "PATH-UNKNOWN",
      };
      const res = await fetch("/api/qualify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Send failed");

      type GtagFn = (...args: unknown[]) => void;
      if (typeof window !== "undefined" && typeof (window as Window & { gtag?: GtagFn }).gtag === "function") {
        (window as Window & { gtag?: GtagFn }).gtag!("event", "application_submit", {
          event_category: "engagement",
          event_label: PATH_TAG_MAP[state.path] ?? "PATH-UNKNOWN",
        });
      }
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Email camden@skemals.com directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <SectionWrapper
      id="qualifier"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.06) 0%, transparent 60%), #0A0A12",
      }}
    >
      <p className="font-body font-semibold text-primary uppercase tracking-widest text-xs mb-4">
        {qualifierForm.label}
      </p>
      <h2
        className="font-heading font-bold text-text-main mb-3"
        style={{
          fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}
      >
        {qualifierForm.headline}
      </h2>
      <p
        className="font-body text-text-soft mb-10"
        style={{ fontSize: "17px", lineHeight: 1.7 }}
      >
        {qualifierForm.subhead}
      </p>

      <div style={{ maxWidth: "560px" }}>
        {!submitted ? (
          <>
            {/* Progress bar — 6 segments */}
            <div className="flex gap-1.5 mb-10">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: "3px",
                    borderRadius: "2px",
                    background: i <= step ? "#DC2626" : "rgba(255,255,255,0.06)",
                    transition: "background-color 0.3s",
                  }}
                />
              ))}
            </div>

            {/* Question */}
            <p
              className="font-heading font-semibold text-text-main mb-6"
              style={{ fontSize: "18px", lineHeight: 1.4 }}
            >
              {currentStep.question}
            </p>

            {/* Textarea */}
            {currentStep.type === "textarea" &&
              textareaFields.includes(currentStep.id) && (
                <textarea
                  rows={4}
                  placeholder={"placeholder" in currentStep ? currentStep.placeholder : ""}
                  value={state[currentStep.id as keyof FormState] as string}
                  onChange={(e) =>
                    setState({ ...state, [currentStep.id]: e.target.value })
                  }
                  style={inputStyle}
                />
              )}

            {/* Single-select — unique values, clean highlight */}
            {currentStep.type === "single-select" && "options" in currentStep && (
              <div className="flex flex-col gap-3">
                {currentStep.options!.map((opt) => {
                  const selected = state.path === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => setState({ ...state, path: opt.value })}
                      className="text-left font-body rounded-lg transition-all duration-150"
                      style={{
                        padding: "14px 18px",
                        fontSize: "15px",
                        background: selected
                          ? "rgba(220,38,38,0.1)"
                          : "rgba(255,255,255,0.03)",
                        border: selected
                          ? "1px solid rgba(220,38,38,0.3)"
                          : "1px solid rgba(255,255,255,0.06)",
                        color: selected ? "#F1F0EE" : "#C4C3BF",
                      }}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Contact fields */}
            {currentStep.type === "contact" && (
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder={"namePlaceholder" in currentStep ? currentStep.namePlaceholder : ""}
                  value={state.name}
                  onChange={(e) => setState({ ...state, name: e.target.value })}
                  style={inputStyle}
                />
                <input
                  type="email"
                  placeholder={"emailPlaceholder" in currentStep ? currentStep.emailPlaceholder : ""}
                  value={state.email}
                  onChange={(e) => setState({ ...state, email: e.target.value })}
                  style={inputStyle}
                />
                {/* Honeypot */}
                <input
                  type="text"
                  name="_honeypot"
                  tabIndex={-1}
                  aria-hidden="true"
                  style={{ display: "none" }}
                />
              </div>
            )}

            {/* Navigation */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={handleBack}
                disabled={step === 0}
                className="font-body font-semibold text-sm text-muted transition-colors duration-150"
                style={{
                  opacity: step === 0 ? 0.3 : 1,
                  background: "none",
                  border: "none",
                  cursor: step === 0 ? "not-allowed" : "pointer",
                  padding: "16px 0",
                }}
              >
                {qualifierForm.backLabel}
              </button>

              {step < totalSteps - 1 ? (
                <Btn
                  onClick={handleNext}
                  disabled={!canProceed}
                  style={{
                    opacity: !canProceed ? 0.4 : 1,
                    cursor: !canProceed ? "not-allowed" : "pointer",
                  }}
                >
                  {qualifierForm.nextLabel}
                </Btn>
              ) : (
                <Btn
                  onClick={handleSubmit}
                  disabled={!canProceed || submitting}
                  style={{
                    opacity: !canProceed || submitting ? 0.4 : 1,
                    cursor: !canProceed || submitting ? "not-allowed" : "pointer",
                  }}
                >
                  {submitting ? "Sending…" : qualifierForm.submitLabel}
                </Btn>
              )}
            </div>

            {submitError && (
              <p className="font-body text-primary mt-4" style={{ fontSize: "14px" }}>
                {submitError}
              </p>
            )}
          </>
        ) : (
          /* Confirmation screen */
          <div
            className="rounded-xl"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "36px 32px",
            }}
          >
            <p className="font-heading font-bold text-primary uppercase tracking-widest text-xs mb-4">
              Application received
            </p>
            <p
              className="font-body text-text-soft"
              style={{ fontSize: "16px", lineHeight: 1.8 }}
            >
              {qualifierForm.confirmationMessage}
            </p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
