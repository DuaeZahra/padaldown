"use client";

import { useEffect, useRef } from "react";
import { PROJECTS } from "@/src/data/projects";
import { DOMAIN_STYLES } from "@/src/lib/domain-colors";

// Every tile below is a real measured figure pulled straight from
// src/data/projects.ts — nothing here is decorative filler.
const TILES = PROJECTS.flatMap((project) =>
  project.metrics.map((metric) => ({
    key: `${project.slug}-${metric.label}`,
    value: metric.value,
    label: metric.label,
    project: project.title,
    domain: project.domain,
  })),
);

const COLUMNS = [
  TILES.filter((_, i) => i % 2 === 0),
  TILES.filter((_, i) => i % 2 === 1),
];

export function ParallaxNumbers() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const colRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Parallax drift only makes sense in the two-column desktop layout.
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;

      // 0 when the section's top hits the viewport top, 1 at its end.
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);

      // Columns drift at different rates, which is what reads as depth.
      const rates = [-90, -190];
      colRefs.current.forEach((col, i) => {
        if (col) col.style.transform = `translate3d(0, ${progress * rates[i]}px, 0)`;
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="by-the-numbers"
      className="relative border-t border-line bg-paper py-16 sm:py-24 lg:py-0"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-ink-soft">
                By the numbers
              </span>
            </div>
            <h2
              id="by-the-numbers"
              className="font-display text-3xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-4xl lg:text-5xl"
            >
              Everything we claim, we measured.
            </h2>
            <p className="max-w-md text-ink-muted">
              These are the actual figures from shipped systems — error margins, accuracy on
              held-out sets, records processed. No rounded-up marketing numbers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:py-[18vh]">
          {COLUMNS.map((column, colIndex) => (
            <div
              key={colIndex}
              ref={(el) => {
                colRefs.current[colIndex] = el;
              }}
              className="flex flex-col gap-5 will-change-transform"
            >
              {column.map((tile) => {
                const style = DOMAIN_STYLES[tile.domain];
                return (
                  <div
                    key={tile.key}
                    className="rounded-2xl border border-line bg-paper-raised p-5 transition-colors duration-300 hover:border-line-strong"
                  >
                    <span className={`font-mono text-2xl font-semibold ${style.text}`}>
                      {tile.value}
                    </span>
                    <p className="mt-1 text-sm text-ink-muted">{tile.label}</p>
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-wide text-ink-soft">
                      {tile.project}
                    </p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
