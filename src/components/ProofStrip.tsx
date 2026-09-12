import { CinematicBackdrop } from "@/src/components/CinematicBackdrop";
import { VerifiedDot } from "@/src/components/VerifiedDot";

const PROOF_ITEMS = [
  {
    label: "Merged into pgedge/pgedge-vectorizer",
    href: "https://github.com/pgEdge/pgedge-vectorizer",
  },
  {
    label: "RL scenarios we built were used in Claude model training",
    href: undefined,
  },
  {
    label: "Live — fairstock.trade",
    href: "https://fairstock.trade",
  },
  {
    label: "Live — remembrly.ai",
    href: "https://remembrly.ai",
  },
] as const;

export function ProofStrip() {
  return (
    // Lands directly under the hero, so it carries the clip on rather than
    // capping it with a flat panel. The scrim opens near-black to meet the
    // bottom of the hero's own scrim, which hides the seam between the two.
    <div className="page-glow relative overflow-hidden bg-terminal py-4">
      <CinematicBackdrop
        overlayClassName="bg-gradient-to-b from-black/85 via-black/70 to-black/80"
        fade="bottom"
      />
      <ul className="relative z-10 mx-auto flex w-full max-w-6xl flex-col divide-y divide-white/10 px-6 sm:flex-row sm:flex-wrap sm:divide-y-0 sm:divide-x sm:divide-white/10 sm:px-8">
        {PROOF_ITEMS.map((item) => (
          <li key={item.label} className="flex-1 py-4 sm:px-6">
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2"
              >
                <VerifiedDot className="mt-1.5 shrink-0" />
                <span className="font-mono text-sm text-white/75 transition-colors group-hover:text-white">
                  {item.label} <span aria-hidden="true">↗</span>
                </span>
              </a>
            ) : (
              <div className="flex items-start gap-2">
                <VerifiedDot className="mt-1.5 shrink-0" />
                <span className="font-mono text-sm text-white/75">{item.label}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
