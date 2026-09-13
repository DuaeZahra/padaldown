"use client";

import { useState } from "react";

const STACK = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "FastAPI",
  "Flask",
  "React",
  "PostgreSQL + pgvector",
  "Redis",
  "Kafka",
  "CUDA / Triton on H100",
  "Solidity",
];

// One track, not the two counter-scrolling rows creativeans uses for their
// portfolio. This is a list of eleven technologies, not a showcase — a second
// row doubled the motion without adding anything to read.
const ROWS = [{ items: STACK, animation: "animate-marquee" }] as const;

export function StackMarquee() {
  // WCAG 2.2.2: moving content that starts on its own needs a way to
  // stop it. Hover/focus pauses too, but this is the explicit control.
  const [paused, setPaused] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div
        className="group relative flex flex-col gap-3 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Soft edges so items enter and leave instead of popping. */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent"
          aria-hidden="true"
        />

        {ROWS.map((row, rowIndex) => (
          <ul
            key={row.animation}
            className={`${row.animation} flex w-max items-center gap-3`}
            data-paused={paused ? "true" : "false"}
            aria-label={rowIndex === 0 ? "Technologies we work in" : undefined}
            aria-hidden={rowIndex === 1}
          >
            {/* Duplicated once so the 50% slide loops seamlessly. The copy
                is hidden from assistive tech to avoid reading it twice. */}
            {[0, 1].map((copy) => (
              <li key={copy} className="flex items-center gap-3" aria-hidden={copy === 1}>
                {row.items.map((tech) => (
                  <span
                    key={tech}
                    className="whitespace-nowrap rounded-full border border-line px-4 py-2 font-mono text-xs text-ink-muted transition-colors duration-500 hover:border-line-strong hover:text-cream"
                  >
                    {tech}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        ))}
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="font-mono text-xs text-ink-soft underline decoration-line-strong underline-offset-4 transition-colors hover:text-ink"
        >
          {paused ? "Resume" : "Pause"} scrolling
        </button>
      </div>
    </div>
  );
}
