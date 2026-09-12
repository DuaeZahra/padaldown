"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/src/lib/useReveal";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, revealClassName } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      className={`${className} ${revealClassName}`}
    >
      {children}
    </div>
  );
}
