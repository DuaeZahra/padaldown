"use client";

import { useEffect, useRef, useState } from "react";

interface ParsedMetric {
  prefix: string;
  number: number;
  decimals: number;
  suffix: string;
  hasComma: boolean;
}

function parseMetric(value: string): ParsedMetric | null {
  const match = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const clean = numStr.replace(/,/g, "");
  const decimals = clean.includes(".") ? clean.split(".")[1].length : 0;
  return {
    prefix,
    number: Number.parseFloat(clean),
    decimals,
    suffix,
    hasComma: numStr.includes(","),
  };
}

function format(n: number, decimals: number, hasComma: boolean) {
  const fixed = n.toFixed(decimals);
  if (!hasComma) return fixed;
  const [intPart, decPart] = fixed.split(".");
  const withCommas = Number(intPart).toLocaleString("en-US");
  return decPart ? `${withCommas}.${decPart}` : withCommas;
}

// Animates a metric like "20,000+" or "2.26°" counting up from zero the
// first time it scrolls into view. Falls back to the plain final value
// for non-numeric metrics ("Live", "Merged", ...) and for anyone with
// prefers-reduced-motion set.
export function CountUpMetric({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const parsed = parseMetric(value);

  useEffect(() => {
    // No reset of `display` here: it is seeded from `value` on mount and
    // the animation below always lands back on the exact `value` string,
    // so the rendered number is never left mid-count.
    if (!parsed || !ref.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let frame: number;
    let cancelled = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || cancelled) return;
        observer.disconnect();

        const duration = 800;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - (1 - progress) ** 3;
          setDisplay(
            `${parsed.prefix}${format(parsed.number * eased, parsed.decimals, parsed.hasComma)}${parsed.suffix}`,
          );
          if (progress < 1) {
            frame = requestAnimationFrame(tick);
          } else {
            setDisplay(value);
          }
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(ref.current);

    return () => {
      cancelled = true;
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden={parsed ? "true" : undefined}>{display}</span>
      {parsed ? <span className="sr-only">{value}</span> : null}
    </span>
  );
}
