"use client";

import { useId, useState } from "react";
import type { ReactNode } from "react";
import { Container } from "@/src/components/Container";

const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";

export interface BandItem {
  /** A band tone class, e.g. "bg-band-rust". */
  tone: string;
  title: string;
  kicker?: string;
  body: ReactNode;
  /** Right-hand column — a stat, a pull quote, a proof line. */
  aside?: ReactNode;
}

/**
 * Creativeans' services accordion. Collapsed bands are thin rows carrying only
 * the serif italic title and a +; opening one expands it to the numbered
 * circle, the body and the aside.
 *
 * Their version animates height via @keyframes against a measured content
 * height. A grid-template-rows 0fr→1fr transition gets the same easing without
 * having to measure anything, and degrades to an instant open under
 * prefers-reduced-motion, which globals.css already forces.
 */
export function BandAccordion({
  items,
  /** Which band starts open. Pass -1 to start fully collapsed. */
  initialOpen = 0,
  label,
}: {
  items: BandItem[];
  initialOpen?: number;
  label: string;
}) {
  const [open, setOpen] = useState(initialOpen);
  const baseId = useId();

  return (
    <div role="region" aria-label={label}>
      {items.map((item, i) => {
        const isOpen = i === open;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;

        return (
          <section key={item.title} className={item.tone}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="group w-full cursor-pointer py-6 text-left sm:py-7"
              >
                <Container className="flex items-center justify-between gap-6">
                  <span className="font-display text-3xl italic leading-tight text-cream sm:text-4xl">
                    {item.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="relative flex h-7 w-7 shrink-0 items-center justify-center text-cream"
                  >
                    <span className="absolute h-px w-5 bg-current" />
                    <span
                      className="absolute h-px w-5 bg-current transition-transform duration-500"
                      style={{
                        transitionTimingFunction: EASE,
                        transform: isOpen ? "rotate(0deg)" : "rotate(90deg)",
                      }}
                    />
                  </span>
                </Container>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="grid transition-[grid-template-rows] duration-700"
              style={{
                transitionTimingFunction: EASE,
                gridTemplateRows: isOpen ? "1fr" : "0fr",
              }}
            >
              <div className="overflow-hidden">
                <Container className="grid grid-cols-1 gap-10 pb-14 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-16">
                  <div className="flex flex-col gap-5">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/45 font-display text-lg text-cream"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    {item.kicker ? (
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream/70">
                        {item.kicker}
                      </span>
                    ) : null}
                    <div className="flex max-w-xl flex-col gap-4 text-[15px] leading-relaxed text-cream/85">
                      {item.body}
                    </div>
                  </div>
                  {item.aside ? <div>{item.aside}</div> : null}
                </Container>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
