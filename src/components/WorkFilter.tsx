"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/src/components/ProjectCard";
import { Reveal } from "@/src/components/Reveal";
import { DOMAINS, PROJECTS, type Domain } from "@/src/data/projects";
import { DOMAIN_STYLES } from "@/src/lib/domain-colors";

const FILTERS: (Domain | "All")[] = ["All", ...DOMAINS];

export function WorkFilter() {
  const [active, setActive] = useState<Domain | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? PROJECTS : PROJECTS.filter((p) => p.domain === active)),
    [active],
  );

  return (
    <div className="flex flex-col gap-8">
      <h2 className="sr-only">Projects</h2>
      <div
        role="group"
        aria-label="Filter by domain"
        className="flex flex-wrap gap-2"
      >
        {FILTERS.map((filter) => {
          const activeStyle = filter === "All" ? "border-steel bg-steel-tint text-steel-dark" : DOMAIN_STYLES[filter].ring;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={active === filter}
              onClick={() => setActive(filter)}
              className={`rounded-sm border px-3.5 py-1.5 font-mono text-sm transition-colors ${
                active === filter
                  ? activeStyle
                  : "border-line text-ink-muted hover:border-line-strong hover:text-ink"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <p className="font-mono text-xs text-ink-soft" aria-live="polite">
        {filtered.length} project{filtered.length === 1 ? "" : "s"}
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 6) * 60}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
