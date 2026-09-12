import { HeroVideo } from "@/src/components/HeroVideo";

// One clip for the whole site. Keeping every page on the same URL means it is
// downloaded once and then served from cache (the CDN sends it immutable with a
// one-year max-age), so only a visitor landing directly on an interior page
// pays for it. Sections that use this keep .page-glow underneath as the
// instant-paint layer, so the header still looks right before the video
// arrives — or if it never does.
const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";

export function CinematicBackdrop({
  overlayClassName = "bg-gradient-to-b from-black/70 via-black/40 to-black/80",
  /** Interior headers set this so the clip dissolves into --color-paper instead
   *  of stopping on a hard edge partway through a bright frame. The homepage
   *  hero doesn't: it owns the whole viewport and ends at the fold. */
  fadeToPage = false,
}: {
  overlayClassName?: string;
  fadeToPage?: boolean;
}) {
  return (
    <>
      <HeroVideo src={VIDEO_URL} />
      {/* Keeps foreground text readable regardless of the video's own contrast. */}
      <div className={`absolute inset-0 ${overlayClassName}`} aria-hidden="true" />
      {fadeToPage ? (
        <div
          className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-paper/75 to-paper"
          aria-hidden="true"
        />
      ) : null}
    </>
  );
}
