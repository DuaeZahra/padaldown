import { ImageResponse } from "next/og";
import { getProjectBySlug, PROJECTS } from "@/src/data/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const title = project?.title ?? "PedalDown Technologies";
  const domain = project?.domain ?? "";
  const metric = project?.metrics[0];

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
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 24, color: "#9AA5B1" }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: "#2F8F5B" }} />
          PedalDown Technologies | {domain}
        </div>

        <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.1, maxWidth: 950 }}>
          {title}
        </div>

        {metric ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 48, color: "#C77D2E", fontFamily: "monospace" }}>
              {metric.value}
            </div>
            <div style={{ fontSize: 22, color: "#9AA5B1" }}>{metric.label}</div>
          </div>
        ) : null}
      </div>
    ),
    { ...size },
  );
}
