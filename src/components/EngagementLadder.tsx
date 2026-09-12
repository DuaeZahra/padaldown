"use client";

import { useReveal } from "@/src/lib/useReveal";

const STEPS = [
  {
    step: "01",
    title: "Pilot",
    duration: "2–3 weeks",
    description:
      "A scoped, paid pilot against your actual data or images. Small enough to say yes to without a procurement cycle.",
  },
  {
    step: "02",
    title: "Build",
    duration: "6–12 weeks",
    description:
      "We build the production system: the pipeline, the interface, the evaluation. You see working software the whole way through.",
  },
  {
    step: "03",
    title: "Run",
    duration: "Ongoing",
    description:
      "An ongoing retainer to operate, monitor, and extend the system as your data and requirements change.",
  },
];

function Step({ s, i }: { s: (typeof STEPS)[number]; i: number }) {
  const { ref, revealClassName } = useReveal<HTMLLIElement>();

  return (
    <li
      ref={ref}
      style={{ animationDelay: `${i * 100}ms` }}
      className={`flex flex-col gap-3 ${revealClassName}`}
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm text-ink-soft">{s.step}</span>
        <span
          className="h-px flex-1 bg-line-strong"
          style={{ opacity: 1 - i * 0.3 }}
          aria-hidden="true"
        />
      </div>
      <h3 className="font-display text-xl font-semibold text-ink">{s.title}</h3>
      <span className="font-mono text-xs uppercase tracking-wide text-ink-soft">
        {s.duration}
      </span>
      <p className="text-sm leading-relaxed text-ink-muted">{s.description}</p>
    </li>
  );
}

export function EngagementLadder() {
  return (
    <ol className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {STEPS.map((s, i) => (
        <Step key={s.step} s={s} i={i} />
      ))}
    </ol>
  );
}
