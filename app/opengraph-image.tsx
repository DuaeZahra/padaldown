import { ImageResponse } from "next/og";
import { SITE } from "@/src/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#12161D",
          color: "#F2F4F7",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#C77D2E" }} />
          <div style={{ fontSize: 28, letterSpacing: -0.5 }}>{SITE.shortName}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
            We build production AI systems. Not prototypes.
          </div>
          <div style={{ fontSize: 26, color: "#9AA5B1", maxWidth: 800 }}>
            Merged into pgEdge&rsquo;s pgvector tooling. RL scenarios used in Claude model
            training.
          </div>
        </div>

        <div style={{ display: "flex", gap: 40, fontSize: 22, color: "#C77D2E", fontFamily: "monospace" }}>
          <span>R² 0.89</span>
          <span>2.26° error</span>
          <span>92% accuracy</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
