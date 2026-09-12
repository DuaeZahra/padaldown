import { HeroVideo } from "@/src/components/HeroVideo";

// One clip for the whole site. Keeping every page on the same URL means it is
// downloaded once and then served from cache (the CDN sends it immutable with a
// one-year max-age), so only a visitor landing directly on an interior page
// pays for it. Sections that use this keep .page-glow underneath as the
// instant-paint layer, so the band still looks right before the video
// arrives — or if it never does.
const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";

/**
 * Where the clip needs to dissolve into --color-paper rather than stop on a
 * hard edge partway through a bright frame:
 *
 * - "none"   the homepage hero, which owns the viewport and ends at the fold
 * - "bottom" page headers, which start under the nav and hand off to content
 * - "both"   mid-page bands with paper above and below them
 */
type Fade = "none" | "bottom" | "both";

export function CinematicBackdrop({
  overlayClassName = "bg-gradient-to-b from-black/70 via-black/40 to-black/80",
  fade = "none",
}: {
  overlayClassName?: string;
  fade?: Fade;
}) {
  return (
    <>
      <HeroVideo src={VIDEO_URL} />
      {/* Keeps foreground text readable regardless of the video's own contrast. */}
      <div className={`absolute inset-0 ${overlayClassName}`} aria-hidden="true" />
      {fade === "both" ? (
        <div
          className="absolute inset-x-0 top-0 h-40 bg-gradient-to-t from-transparent via-paper/75 to-paper"
          aria-hidden="true"
        />
      ) : null}
      {fade !== "none" ? (
        <div
          className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-paper/75 to-paper"
          aria-hidden="true"
        />
      ) : null}
    </>
  );
}
