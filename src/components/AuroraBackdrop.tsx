/**
 * The soft drifting color field behind dark sections — purple, blue, cyan and
 * rust, blurred until they read as one aurora rather than four blobs.
 *
 * Creativeans gets this effect from a video run at brightness(0.2). Four CSS
 * radial gradients land in the same place for no download and no decoder,
 * which is why this replaced the 7.4MB clip that used to sit here.
 *
 * Where the aurora meets a --color-paper section it has to dissolve rather
 * than stop on an edge:
 *
 * - "none"   the hero, which owns the viewport and ends at the fold
 * - "bottom" page headers, which start under the nav and hand off to content
 * - "both"   mid-page bands with paper above and below them
 */
type Fade = "none" | "bottom" | "both";

export function AuroraBackdrop({
  /** Dials the whole field down under dense or small text. */
  className = "",
  fade = "none",
}: {
  className?: string;
  fade?: Fade;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className={`aurora-layer ${className}`} />
      {fade === "both" ? (
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-t from-transparent via-paper/75 to-paper" />
      ) : null}
      {fade !== "none" ? (
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-paper/75 to-paper" />
      ) : null}
    </div>
  );
}
