"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { PROJECTS } from "@/src/data/projects";
import { DOMAIN_STYLES } from "@/src/lib/domain-colors";

// One headline figure per project, not every metric we hold. Rendering all of
// them meant "AI Dental Diagnosis Tool" captioned three tiles in a row, which
// read as padding rather than evidence — and the wall got taller with every
// project added. Each project's first metric is its authored headline number.
const TILES = PROJECTS.filter((project) => project.metrics.length > 0).map((project) => ({
  slug: project.slug,
  value: project.metrics[0].value,
  label: project.metrics[0].label,
  project: project.title,
  domain: project.domain,
}));

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
      const rates = [-60, -130];
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
      className="relative py-16 sm:py-24 lg:py-0"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Sticky, so the claim stays on screen while the evidence scrolls past
            it — the same pairing creativeans uses for their benefits row. */}
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-ink-soft">
                By the numbers
              </span>
            </div>
            <h2
              id="by-the-numbers"
              className="font-display text-4xl leading-[1.05] tracking-tight text-cream sm:text-5xl"
            >
              Everything we claim, we <em className="italic">measured</em>.
            </h2>
            <p className="max-w-md text-cream/70">
              These are the actual figures from shipped systems — error margins, accuracy on
              held-out sets, records processed. No rounded-up marketing numbers.
            </p>
            <Link
              href="/work"
              className="mt-2 w-fit font-mono text-sm text-steel transition-colors hover:text-steel-dark"
            >
              See all {TILES.length} projects →
            </Link>
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
                  // Every figure now leads to the work that produced it, which
                  // is the whole point of claiming it was measured.
                  <Link
                    key={tile.slug}
                    href={`/work/${tile.slug}`}
                    className="group corner-sweep border border-line bg-paper-raised/85 p-5 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:border-line-strong"
                  >
                    <span className={`font-mono text-2xl font-semibold ${style.text}`}>
                      {tile.value}
                    </span>
                    <p className="mt-1 text-sm text-cream/75">{tile.label}</p>
                    <p className="mt-3 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-ink-soft">
                      {tile.project}
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-500 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </p>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
