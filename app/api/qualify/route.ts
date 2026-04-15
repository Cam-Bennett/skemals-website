import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const PATH_LABELS: Record<string, string> = {
  "PATH-A": "PATH A — The Person",
  "PATH-B": "PATH B — The Business",
  "PATH-C": "PATH C — Both",
  "PATH-UNKNOWN": "Unknown",
};

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { businessContext, path, executionGap, priorAttempts, motivation, name, email, pathTag } = body;

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

    const resolvedTag = pathTag ?? "PATH-UNKNOWN";
    const pathLabel = PATH_LABELS[resolvedTag] ?? resolvedTag;

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; color: #111;">
        <h2 style="margin-bottom: 4px;">New Pallume Application</h2>
        <p style="color: #666; margin-top: 0;">Submitted by ${name} &lt;${email}&gt;</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; font-weight: 600; width: 200px; vertical-align: top;">Path</td>
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
            <td style="padding: 10px; font-weight: 600; vertical-align: top;">Business context</td>
            <td style="padding: 10px; white-space: pre-wrap;">${businessContext ?? "—"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; vertical-align: top;">Execution gap</td>
            <td style="padding: 10px 0; white-space: pre-wrap;">${executionGap ?? "—"}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px; font-weight: 600; vertical-align: top;">Prior attempts</td>
            <td style="padding: 10px; white-space: pre-wrap;">${priorAttempts ?? "—"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; vertical-align: top;">Motivation</td>
            <td style="padding: 10px 0; white-space: pre-wrap;">${motivation ?? "—"}</td>
          </tr>
        </table>

        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
        <p style="color: #999; font-size: 13px;">Sent from pallume.com application form</p>
      </div>
    `;

    await resend.emails.send({
      from: "Pallume Applications <onboarding@resend.dev>",
      to: "[EMAIL]",
      replyTo: email,
      subject: `New application — ${name} (${pathLabel})`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Application email error:", err);
    return NextResponse.json(
      { error: "Failed to send" },
      { status: 500 }
    );
  }
}
