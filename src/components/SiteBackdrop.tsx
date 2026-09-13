import { ParticleField } from "@/src/components/ParticleField";

/**
 * The aurora and point cloud for the whole site, mounted once in the root
 * layout rather than per section.
 *
 * Fixed to the viewport, so the field stays put while content scrolls over it
 * — one canvas and one rAF loop for the entire site, and no seam where one
 * section's backdrop used to end and the next began.
 *
 * It sits at -z-10: a negative z-index child paints above its ancestor's
 * background but below in-flow content, so body's --color-paper still provides
 * the base colour underneath. Sections that want the field to show through
 * simply don't set a background; the colour bands stay opaque and cover it,
 * which is the intended contrast.
 */
export function SiteBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="aurora-layer" />
      {/* Dimmer than the old hero-only field: at full strength it now sits
          behind body copy on every page, not just one headline. */}
      <div className="absolute inset-0 opacity-55">
        <ParticleField count={260} />
      </div>
    </div>
  );
}
