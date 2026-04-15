import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs"; // fs requires nodejs runtime

export const alt = "Pallume — Your Own AI Execution System";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const heroBuffer = readFileSync(
    join(process.cwd(), "public", "images", "hero-abstract.png")
  );
  const heroBase64 = `data:image/png;base64,${heroBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          position: "relative",
          display: "flex",
          backgroundColor: "#0A0A12",
        }}
      >
        {/* Hero image — low opacity base layer */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroBase64}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.3,
          }}
        />

        {/* Gradient overlay — heavier on left so text reads cleanly */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(105deg, rgba(10,10,18,0.92) 0%, rgba(10,10,18,0.65) 60%, rgba(10,10,18,0.45) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 88px",
            gap: "0",
          }}
        >
          {/* Wordmark row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "32px",
            }}
          >
            {/* Red accent dot */}
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#DC2626",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                color: "#DC2626",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Pallume
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              fontFamily: "sans-serif",
              fontWeight: 700,
              fontSize: "54px",
              color: "#F1F0EE",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              maxWidth: "820px",
              marginBottom: "20px",
            }}
          >
            Your own AI execution system.
          </div>

          {/* Tagline */}
          <div
            style={{
              fontFamily: "sans-serif",
              fontWeight: 400,
              fontSize: "22px",
              color: "#C4C3BF",
              lineHeight: 1.5,
              maxWidth: "560px",
              marginBottom: "36px",
            }}
          >
            Built by a coach. Running every morning.
          </div>

          {/* Brand color strip */}
          <div style={{ display: "flex", gap: "8px" }}>
            <div
              style={{
                width: "48px",
                height: "4px",
                backgroundColor: "#DC2626",
                borderRadius: "2px",
              }}
            />
            <div
              style={{
                width: "48px",
                height: "4px",
                backgroundColor: "#2563EB",
                borderRadius: "2px",
              }}
            />
            <div
              style={{
                width: "48px",
                height: "4px",
                backgroundColor: "#7C3AED",
                borderRadius: "2px",
              }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
