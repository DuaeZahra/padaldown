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
        className="group flex flex-col gap-1 py-4 transition-colors hover:bg-paper sm:flex-row sm:items-center sm:justify-between sm:gap-4"
      >
        <span className="flex flex-wrap items-baseline gap-x-3">
          <span className="font-mono text-sm text-ink group-hover:text-steel">
            {project.title}
          </span>
          <span className="text-sm text-ink-muted">{project.tagline}</span>
        </span>
        <span
          className={`flex shrink-0 items-center gap-1.5 font-mono text-xs uppercase tracking-wide ${style.text}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} aria-hidden="true" />
          {project.domain}
        </span>
      </Link>
    </li>
  );
}
