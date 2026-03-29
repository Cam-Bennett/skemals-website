"use client";

import { useState, useEffect } from "react";
import { qualifierForm } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Btn from "@/components/ui/Btn";

type PathKey = "A" | "B" | "C" | "both" | "custom";

interface FormState {
  path: string;
  frustration: string;
  tried: string[];
  outcome: string;
  name: string;
  email: string;
}

const initialState: FormState = {
  path: "",
  frustration: "",
  tried: [],
  outcome: "",
  name: "",
  email: "",
};

// Maps URL ?path= param to Q1 option values
const PATH_PARAM_MAP: Record<string, string> = {
  a: "A",
  b: "B",
  c: "C",
};

function isStepComplete(stepIndex: number, state: FormState): boolean {
  switch (stepIndex) {
    case 0:
      return state.path !== "";
    case 1:
      return state.frustration.trim() !== "";
    case 2:
      return true; // multi-select, optional
    case 3:
      return state.outcome.trim() !== "";
    case 4:
      return state.name.trim() !== "" && state.email.trim() !== "";
    default:
      return false;
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

  // On mount: read ?path=a/b/c from URL and pre-select Q1
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pathParam = params.get("path")?.toLowerCase();
    if (pathParam && PATH_PARAM_MAP[pathParam]) {
      setState((prev) => ({ ...prev, path: PATH_PARAM_MAP[pathParam] }));
    }
  }, []);

  const totalSteps = qualifierForm.steps.length;
  const currentStep = qualifierForm.steps[step];
  const canProceed = isStepComplete(step, state);

  function handleNext() {
    if (step < totalSteps - 1) setStep(step + 1);
  }

  function handleBack() {
    if (step > 0) setStep(step - 1);
    // If navigating back to step 0, clear the pre-selected path so the
    // user can make a fresh choice without the URL param locking them in.
    if (step === 1) {
      setState((prev) => ({ ...prev, path: "" }));
    }
  }

  async function handleSubmit() {
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/qualify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      if (!res.ok) throw new Error("Send failed");
      // Fire GA4 conversion event
      type GtagFn = (...args: unknown[]) => void;
      if (typeof window !== "undefined" && typeof (window as Window & { gtag?: GtagFn }).gtag === "function") {
        (window as Window & { gtag?: GtagFn }).gtag!("event", "qualifier_submit", {
          event_category: "engagement",
          event_label: `PATH_${state.path}`,
        });
      }
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Email camden@skemals.com directly.");
    } finally {
      setSubmitting(false);
    }
  }

  function toggleMulti(value: string) {
    setState((prev) => ({
      ...prev,
      tried: prev.tried.includes(value)
        ? prev.tried.filter((v) => v !== value)
        : [...prev.tried, value],
    }));
  }

  const validPathKeys: PathKey[] = ["A", "B", "C", "both", "custom"];
  // "both" resolves to PATH A result; "custom" resolves to custom result
  type ResultKey = "A" | "B" | "C" | "custom";
  const resolvedKey: ResultKey =
    state.path === "both" ? "A" : (state.path as ResultKey);
  const pathResult =
    state.path && validPathKeys.includes(state.path as PathKey)
      ? qualifierForm.result[resolvedKey]
      : qualifierForm.result["A"];

  const pathColor =
    state.path === "A" || state.path === "both"
      ? "#DC2626"
      : state.path === "B"
      ? "#2563EB"
      : "#7C3AED";

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
            {/* Progress bar */}
            <div className="flex gap-1.5 mb-10">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: "3px",
                    borderRadius: "2px",
                    background:
                      i <= step ? "#DC2626" : "rgba(255,255,255,0.06)",
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

            {/* Input area */}
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

            {currentStep.type === "textarea" && "placeholder" in currentStep && (
              <textarea
                rows={4}
                placeholder={currentStep.placeholder}
                value={
                  currentStep.id === "frustration" ? state.frustration : state.outcome
                }
                onChange={(e) =>
                  setState({
                    ...state,
                    [currentStep.id]: e.target.value,
                  })
                }
                style={inputStyle}
              />
            )}

            {currentStep.type === "multi-select" && "options" in currentStep && (
              <div className="flex flex-col gap-3">
                {currentStep.options!.map((opt) => {
                  const selected = state.tried.includes(opt.value);
                  return (
                    <button
                      key={opt.value}
                      onClick={() => toggleMulti(opt.value)}
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
          /* Result screen */
          <div
            className="rounded-xl"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "36px 32px",
            }}
          >
            <p
              className="font-heading font-bold uppercase tracking-widest text-xs mb-4"
              style={{ color: pathColor }}
            >
              {pathResult.pathLabel}
            </p>
            <h3
              className="font-heading font-bold text-text-main mb-4"
              style={{ fontSize: "22px", lineHeight: 1.3, letterSpacing: "-0.01em" }}
            >
              {pathResult.title}
            </h3>
            <p
              className="font-body text-text-soft mb-8"
              style={{ fontSize: "16px", lineHeight: 1.7 }}
            >
              {qualifierForm.resultDescription}
            </p>
            <Btn as="a" href="/contact">
              {qualifierForm.resultCta}
            </Btn>
          </div>
        )}
      </div>

      {/* After-submit expectations */}
      <p
        className="font-body text-muted mt-8"
        style={{ fontSize: "13px", lineHeight: 1.8, maxWidth: "480px" }}
      >
        {qualifierForm.afterSubmit}
      </p>
    </SectionWrapper>
  );
}
