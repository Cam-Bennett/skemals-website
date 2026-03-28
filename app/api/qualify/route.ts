import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const PATH_LABELS: Record<string, string> = {
  A: "PATH A — The Person (Personal accountability)",
  B: "PATH B — The Business (Structural/operational)",
  C: "PATH C — Both (Business owner, inseparable)",
};

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { path, frustration, tried, outcome, name, email } = body;

    // Basic validation
    if (!name || !email || !path) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Honeypot check (field should be empty)
    if (body._honeypot) {
      return NextResponse.json({ ok: true }); // silently discard
    }

    const pathLabel = PATH_LABELS[path] ?? path;
    const triedList =
      Array.isArray(tried) && tried.length > 0
        ? tried.join(", ")
        : "Nothing listed";

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; color: #111;">
        <h2 style="margin-bottom: 4px;">New SkemaLS Qualifier Submission</h2>
        <p style="color: #666; margin-top: 0;">Submitted by ${name} &lt;${email}&gt;</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; font-weight: 600; width: 180px; vertical-align: top;">Path</td>
            <td style="padding: 10px 0;">${pathLabel}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px; font-weight: 600; vertical-align: top;">Name</td>
            <td style="padding: 10px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; vertical-align: top;">Email</td>
            <td style="padding: 10px 0;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px; font-weight: 600; vertical-align: top;">Frustrating day</td>
            <td style="padding: 10px; white-space: pre-wrap;">${frustration}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; vertical-align: top;">What they've tried</td>
            <td style="padding: 10px 0;">${triedList}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px; font-weight: 600; vertical-align: top;">90-day outcome</td>
            <td style="padding: 10px; white-space: pre-wrap;">${outcome}</td>
          </tr>
        </table>

        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
        <p style="color: #999; font-size: 13px;">Sent from skemals.com qualifier form</p>
      </div>
    `;

    await resend.emails.send({
      from: "SkemaLS Qualifier <onboarding@resend.dev>",
      to: "camden@skemals.com",
      replyTo: email,
      subject: `New qualifier — ${name} (${path})`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Qualifier email error:", err);
    return NextResponse.json(
      { error: "Failed to send" },
      { status: 500 }
    );
  }
}
