import Link from "next/link";
import { Reveal } from "@/src/components/Reveal";

const WEDGES = [
  {
    accent: "steel" as const,
    kicker: "Semantic search & RAG",
    problem:
      "“Our product's search only matches keywords. Customers describe what they want in plain language and get nothing back.”",
    approach:
      "We make your product's search understand meaning instead of keywords — built into the PostgreSQL you already run, so you don't add a vector database to your stack.",
    proof: "Our vectorizer code is merged into pgEdge's official repository.",
    proofHref: "https://github.com/pgEdge/pgedge-vectorizer",
    proofLabel: "View the merged repository",
  },
  {
    accent: "amber" as const,
    kicker: "Clinical imaging automation",
    problem:
      "“Our clinicians spend real, billable minutes per case on manual measurement from scans.”",
    approach:
      "We automate diagnostic measurement from medical images. Our dental angle model, built for Aga Khan University, replaces roughly 25 minutes of manual work per case at 2.26° mean error.",
    proof: "Deployed system, published error margins, R² 0.89.",
    proofHref: "/work/ai-dental-diagnosis",
    proofLabel: "Read the case study",
  },
];

export function WedgeCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {WEDGES.map((wedge, i) => (
        <Reveal key={wedge.kicker} delay={i * 100}>
          <div
            className={`flex h-full flex-col gap-5 rounded-sm border-t-2 bg-paper-raised p-6 transition-shadow duration-300 hover:shadow-[0_18px_44px_-18px_rgba(0,0,0,0.95)] sm:p-8 ${
              wedge.accent === "steel" ? "border-t-steel" : "border-t-amber"
            }`}
          >
            <span
              className={`font-mono text-xs uppercase tracking-wide ${
                wedge.accent === "steel" ? "text-steel" : "text-amber-dark"
              }`}
            >
              {wedge.kicker}
            </span>
            <p className="font-display text-lg leading-snug text-ink-muted">{wedge.problem}</p>
            <p className="text-base leading-relaxed text-ink">{wedge.approach}</p>
            <Link
              href={wedge.proofHref}
              target={wedge.proofHref.startsWith("http") ? "_blank" : undefined}
              rel={wedge.proofHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className="mt-auto flex items-center gap-2 font-mono text-sm text-ink-muted hover:text-ink"
            >
              <span
                className={`inline-block h-1.5 w-1.5 rounded-full ${
                  wedge.accent === "steel" ? "bg-steel" : "bg-amber"
                }`}
                aria-hidden="true"
              />
              {wedge.proof} {wedge.proofLabel} →
            </Link>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
