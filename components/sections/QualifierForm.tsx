"use client";

import { useState } from "react";
import { qualifierForm } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Btn from "@/components/ui/Btn";

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
  fontFamily: "var(--font-sans), sans-serif",
  fontSize: "15px",
  color: "#1A1A1A",
  background: "#FFFFFF",
  border: "1px solid #E5E1D8",
  borderRadius: "6px",
  padding: "14px 18px",
  outline: "none",
  width: "100%",
  resize: "vertical" as const,
  lineHeight: "1.6",
};

const inputFocusStyle: React.CSSProperties = {
  ...inputStyle,
  borderColor: "#C89B3C",
  boxShadow: "0 0 0 2px rgba(200,155,60,0.15)",
};

export default function QualifierForm() {
  const [step, setStep] = useState(0);
  const [state, setState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
      setSubmitError("Something went wrong. Email camden@livewyoming.net directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <SectionWrapper id="qualifier" variant="light">
      <p
        className="font-sans font-semibold uppercase tracking-widest text-xs mb-4"
        style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C89B3C" }}
      >
        {qualifierForm.label}
      </p>
      <h2
        className="font-serif font-semibold mb-3"
        style={{
          fontSize: "clamp(28px, 3.5vw, 40px)",
          lineHeight: 1.2,
          color: "#1A1A1A",
        }}
      >
        {qualifierForm.headline}
      </h2>
      <p
        className="font-sans mb-10"
        style={{ fontSize: "17px", lineHeight: 1.7, color: "#6B7280" }}
      >
        {qualifierForm.subhead}
      </p>

      <div style={{ maxWidth: "560px" }}>
        {!submitted ? (
          <>
            {/* Progress bar */}
            <div className="flex gap-1.5 mb-10">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: "3px",
                    borderRadius: "2px",
                    background: i <= step ? "#C89B3C" : "#E5E1D8",
                    transition: "background-color 0.3s",
                  }}
                />
              ))}
            </div>

            <p
              className="font-serif font-semibold mb-6"
              style={{ fontSize: "20px", lineHeight: 1.35, color: "#1A1A1A" }}
            >
              {currentStep.question}
            </p>

            {currentStep.type === "textarea" &&
              textareaFields.includes(currentStep.id) && (
                <textarea
                  rows={4}
                  placeholder={"placeholder" in currentStep ? currentStep.placeholder : ""}
                  value={state[currentStep.id as keyof FormState] as string}
                  onChange={(e) =>
                    setState({ ...state, [currentStep.id]: e.target.value })
                  }
                  onFocus={() => setFocusedField(currentStep.id)}
                  onBlur={() => setFocusedField(null)}
                  style={focusedField === currentStep.id ? inputFocusStyle : inputStyle}
                />
              )}

            {currentStep.type === "single-select" && "options" in currentStep && (
              <div className="flex flex-col gap-3">
                {currentStep.options!.map((opt) => {
                  const selected = state.path === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => setState({ ...state, path: opt.value })}
                      className="text-left font-sans rounded-lg transition-all duration-150"
                      style={{
                        padding: "14px 18px",
                        fontSize: "15px",
                        background: selected ? "rgba(200,155,60,0.08)" : "#FFFFFF",
                        border: selected
                          ? "1px solid rgba(200,155,60,0.4)"
                          : "1px solid #E5E1D8",
                        color: selected ? "#1A1A1A" : "#6B7280",
                        lineHeight: 1.5,
                      }}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            )}

            {currentStep.type === "contact" && (
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder={"namePlaceholder" in currentStep ? currentStep.namePlaceholder : ""}
                  value={state.name}
                  onChange={(e) => setState({ ...state, name: e.target.value })}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  style={focusedField === "name" ? inputFocusStyle : inputStyle}
                />
                <input
                  type="email"
                  placeholder={"emailPlaceholder" in currentStep ? currentStep.emailPlaceholder : ""}
                  value={state.email}
                  onChange={(e) => setState({ ...state, email: e.target.value })}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  style={focusedField === "email" ? inputFocusStyle : inputStyle}
                />
                <input
                  type="text"
                  name="_honeypot"
                  tabIndex={-1}
                  aria-hidden="true"
                  style={{ display: "none" }}
                />
              </div>
            )}

            <div className="flex gap-4 mt-8 items-center">
              <button
                onClick={handleBack}
                disabled={step === 0}
                className="font-sans font-medium text-sm transition-colors duration-150"
                style={{
                  opacity: step === 0 ? 0.3 : 1,
                  background: "none",
                  border: "none",
                  cursor: step === 0 ? "not-allowed" : "pointer",
                  color: "#6B7280",
                  padding: "0",
                }}
              >
                {qualifierForm.backLabel}
              </button>

              {step < totalSteps - 1 ? (
                <Btn
                  onClick={handleNext}
                  disabled={!canProceed}
                  style={{ opacity: !canProceed ? 0.4 : 1, cursor: !canProceed ? "not-allowed" : "pointer" }}
                >
                  {qualifierForm.nextLabel}
                </Btn>
              ) : (
                <Btn
                  onClick={handleSubmit}
                  disabled={!canProceed || submitting}
                  style={{ opacity: !canProceed || submitting ? 0.4 : 1, cursor: !canProceed || submitting ? "not-allowed" : "pointer" }}
                >
                  {submitting ? "Sending…" : qualifierForm.submitLabel}
                </Btn>
              )}
            </div>

            {submitError && (
              <p className="font-sans mt-4" style={{ fontSize: "14px", color: "#C89B3C" }}>
                {submitError}
              </p>
            )}
          </>
        ) : (
          <div
            className="rounded-xl"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E1D8",
              borderLeft: "3px solid #C89B3C",
              padding: "36px 32px",
            }}
          >
            <p
              className="font-sans font-semibold uppercase tracking-widest mb-4"
              style={{ fontSize: "11px", color: "#C89B3C", letterSpacing: "0.1em" }}
            >
              Application received
            </p>
            <p
              className="font-sans"
              style={{ fontSize: "16px", lineHeight: 1.8, color: "#6B7280" }}
            >
              {qualifierForm.confirmationMessage}
            </p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
