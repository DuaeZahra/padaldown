"use client";

import Link from "next/link";
import type { Project } from "@/src/data/projects";
import { DOMAIN_STYLES } from "@/src/lib/domain-colors";
import { useReveal } from "@/src/lib/useReveal";

export function OtherWorkRow({ project, delay = 0 }: { project: Project; delay?: number }) {
  const style = DOMAIN_STYLES[project.domain];
  const { ref, revealClassName } = useReveal<HTMLLIElement>();

  return (
    <li ref={ref} style={{ animationDelay: `${delay}ms` }} className={revealClassName}>
      <Link
        href={`/work/${project.slug}`}
        className="group relative flex flex-col gap-1 overflow-hidden py-4 pl-0 transition-[padding] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:pl-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
      >
        {/* A tone bar wipes in from the left as the row indents under it. */}
        <span
          aria-hidden="true"
          className={`absolute inset-y-0 left-0 w-1 origin-top scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-y-100 ${style.dot}`}
        />
        <span className="flex flex-wrap items-baseline gap-x-3">
          <span className="font-display text-xl text-cream transition-colors duration-500 group-hover:text-steel">
            {project.title}
          </span>
          <span className="text-sm text-cream/65">{project.tagline}</span>
        </span>
        <span
          className={`flex shrink-0 items-center gap-1.5 font-mono text-xs uppercase tracking-wide transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-x-1 ${style.text}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} aria-hidden="true" />
          {project.domain}
        </span>
      </Link>
    </li>
  );
}
