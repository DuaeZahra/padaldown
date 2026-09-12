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
    <div className="border-y border-line bg-paper-raised">
      <ul className="mx-auto flex w-full max-w-6xl flex-col divide-y divide-line px-6 sm:flex-row sm:flex-wrap sm:divide-y-0 sm:divide-x sm:px-8">
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
                <span className="font-mono text-sm text-ink-muted group-hover:text-ink">
                  {item.label} <span aria-hidden="true">↗</span>
                </span>
              </a>
            ) : (
              <div className="flex items-start gap-2">
                <VerifiedDot className="mt-1.5 shrink-0" />
                <span className="font-mono text-sm text-ink-muted">{item.label}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
