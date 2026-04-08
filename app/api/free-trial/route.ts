import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const DAY_1_PROMPT =
  "Without changing anything about your day, describe what happened from the moment you sat down to work until now. What did you intend to do? What did you actually do? Don't analyze it — just describe it.";

const SETUP_INSTRUCTIONS = `1. Go to claude.ai (a free account works fine)
2. Start a new chat — name it "MySkema Lite Journal"
3. Paste today's prompt and respond honestly
4. Keep all 14 entries in the same chat — the context builds over time`;

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { firstName, email, workSituation, biggestQuestion } = body;

    if (!firstName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Day 1 email to the user
    await resend.emails.send({
      from: "Camden at SkemaLS <onboarding@resend.dev>",
      to: email,
      subject: "Your MySkema Lite journey starts now — Day 1",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #0A0A12; color: #E2E2E8; padding: 48px 40px;">
          <p style="font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: #DC2626; margin: 0 0 32px;">
            MySkema Lite — Day 1 of 14
          </p>

          <h1 style="font-size: 26px; font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; color: #FFFFFF; margin: 0 0 20px;">
            You're in, ${firstName}.
          </h1>

          <p style="font-size: 16px; line-height: 1.8; color: rgba(226,226,232,0.7); margin: 0 0 32px;">
            Here's your Day 1 prompt. Paste it into a new Claude chat and respond as honestly as you can.
            Don't overthink it — this phase is pure observation.
          </p>

          <div style="background: #0F0F1A; border-left: 3px solid #DC2626; padding: 28px 32px; margin: 0 0 32px;">
            <p style="font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #DC2626; margin: 0 0 12px;">
              Day 1 Prompt — Baseline
            </p>
            <p style="font-size: 17px; line-height: 1.75; color: #E2E2E8; font-style: italic; margin: 0;">
              &ldquo;${DAY_1_PROMPT}&rdquo;
            </p>
          </div>

          <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 28px; margin: 0 0 32px;">
            <p style="font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.25); margin: 0 0 16px;">
              How to use your prompts
            </p>
            <p style="font-size: 15px; line-height: 1.9; color: rgba(226,226,232,0.6); white-space: pre-line; margin: 0;">
${SETUP_INSTRUCTIONS}
            </p>
          </div>

          <p style="font-size: 15px; line-height: 1.8; color: rgba(226,226,232,0.45); margin: 0 0 8px;">
            Day 2 arrives tomorrow. Keep your Claude chat open — the context builds across all 14 entries.
          </p>

          <p style="font-size: 15px; line-height: 1.8; color: rgba(226,226,232,0.45); margin: 0 0 40px;">
            — Camden
          </p>

          <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 24px;">
            <p style="font-size: 11px; color: rgba(255,255,255,0.2); line-height: 1.6; margin: 0;">
              SkemaLS &middot; Pinedale, Wyoming &middot;
              <a href="https://skemals.com" style="color: rgba(255,255,255,0.2); text-decoration: none;">skemals.com</a><br>
              You signed up for MySkema Lite.
            </p>
          </div>
        </div>
      `,
    });

    // Notification to Camden
    await resend.emails.send({
      from: "MySkema Lite <onboarding@resend.dev>",
      to: "camden@skemals.com",
      subject: `New free trial signup — ${firstName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px; color: #111;">
          <h2 style="font-size: 20px; margin: 0 0 24px;">New MySkema Lite signup</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr><td style="padding: 10px 0; color: #666; width: 160px; vertical-align: top;">Name</td><td style="padding: 10px 0; font-weight: 600;">${firstName}</td></tr>
            <tr style="background: #f9f9f9;"><td style="padding: 10px; color: #666; vertical-align: top;">Email</td><td style="padding: 10px; font-weight: 600;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; color: #666; vertical-align: top;">Work situation</td><td style="padding: 10px 0;">${workSituation || "—"}</td></tr>
            <tr style="background: #f9f9f9;"><td style="padding: 10px; color: #666; vertical-align: top;">Biggest question</td><td style="padding: 10px;">${biggestQuestion || "—"}</td></tr>
          </table>
          <p style="font-size: 13px; color: #999; margin-top: 24px;">Add to ActiveCampaign drip to trigger 14-day sequence.</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Free trial signup error:", err);
    return NextResponse.json({ error: "Failed to process signup" }, { status: 500 });
  }
}
