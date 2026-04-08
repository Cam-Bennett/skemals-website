"use client";

import { useState } from "react";
import Btn from "@/components/ui/Btn";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#0F0F1A",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "#E2E2E8",
  fontFamily: "inherit",
  fontSize: "16px",
  padding: "14px 18px",
  outline: "none",
  borderRadius: "6px",
  transition: "border-color 200ms ease",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "10px",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.35)",
  marginBottom: "10px",
  fontWeight: 600,
};

export default function FreeTrialForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      workSituation: (form.elements.namedItem("workSituation") as HTMLSelectElement).value,
      biggestQuestion: (form.elements.namedItem("biggestQuestion") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/free-trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Email camden@skemals.com directly.");
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          background: "#0F0F1A",
          border: "1px solid rgba(255,255,255,0.06)",
          borderLeft: "3px solid #DC2626",
          padding: "48px",
          borderRadius: "8px",
        }}
      >
        <p
          className="font-body font-semibold text-primary uppercase tracking-widest mb-4"
          style={{ fontSize: "11px", letterSpacing: "0.14em" }}
        >
          You&apos;re in.
        </p>
        <h3
          className="font-heading font-bold text-text-main mb-4"
          style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)", lineHeight: 1.2, letterSpacing: "-0.01em" }}
        >
          Day 1 is on its way.
        </h3>
        <p className="font-body text-text-soft" style={{ fontSize: "16px", lineHeight: 1.8 }}>
          Check your inbox. You&apos;ll have your first prompt within a few minutes. Over the next 14 days, the prompts do the work — just show up and answer honestly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <label htmlFor="firstName" style={labelStyle}>First Name</label>
        <input type="text" id="firstName" name="firstName" required placeholder="Your name" style={inputStyle} />
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>Email Address</label>
        <input type="email" id="email" name="email" required placeholder="where to send your first prompt" style={inputStyle} />
      </div>

      <div>
        <label htmlFor="workSituation" style={labelStyle}>How would you describe your work situation?</label>
        <select
          id="workSituation"
          name="workSituation"
          required
          defaultValue=""
          style={{ ...inputStyle, cursor: "pointer", appearance: "none" }}
        >
          <option value="" disabled>Select one</option>
          <option>Business owner — I control my own schedule</option>
          <option>Employee — hybrid, some flexibility</option>
          <option>Employee — in-office, limited flexibility</option>
          <option>Freelancer or independent</option>
          <option>Manager or team lead</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="biggestQuestion" style={labelStyle}>
          What&apos;s the one thing you most want to understand about how you work?{" "}
          <span style={{ opacity: 0.5 }}>(optional)</span>
        </label>
        <input
          type="text"
          id="biggestQuestion"
          name="biggestQuestion"
          placeholder="this helps me send relevant follow-ups"
          style={inputStyle}
        />
      </div>

      {errorMsg && (
        <p className="font-body text-primary" style={{ fontSize: "14px" }}>{errorMsg}</p>
      )}

      <div>
        <Btn
          as="button"
          type="submit"
          size="lg"
          disabled={status === "loading"}
          style={{ width: "100%", justifyContent: "center", opacity: status === "loading" ? 0.6 : 1 }}
        >
          {status === "loading" ? "Sending..." : "Send Me Day 1 →"}
        </Btn>
      </div>

      <p className="font-body text-muted" style={{ fontSize: "12px", lineHeight: 1.7 }}>
        Your email will be added to the SkemaLS list. You&apos;ll receive 14 daily prompts, then a follow-up sequence. Unsubscribe any time. I don&apos;t spam and I don&apos;t sell lists — I&apos;m a one-person operation in Wyoming.
      </p>
    </form>
  );
}
