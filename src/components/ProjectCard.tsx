import Link from "next/link";
import type { Project } from "@/src/data/projects";
import { CountUpMetric } from "@/src/components/CountUpMetric";
import { DOMAIN_STYLES } from "@/src/lib/domain-colors";

// Creativeans' card timings, lifted directly: 0.5s on the card itself, 0.7s on
// the clip-path reveal, both on the same cubic-bezier.
const EASE = "ease-[cubic-bezier(0.4,0,0.2,1)]";

export function ProjectCard({ project }: { project: Project }) {
  const style = DOMAIN_STYLES[project.domain];

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group relative isolate flex flex-col justify-between gap-6 overflow-hidden corner-sweep border border-line bg-paper-raised/85 p-6 transition-all duration-500 ${EASE} hover:-translate-y-1.5 hover:border-line-strong hover:shadow-[0_24px_56px_-20px_rgba(0,0,0,0.95)]`}
    >
      {/* Their signature: a panel that irises open from bottom-centre over the
          card's own content. Purely a hover flourish — everything it says is
          either already in the card below or on the page it links to — so it
          stays out of the accessibility tree. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-10 flex flex-col justify-end gap-4 p-6 ${style.panel} [clip-path:circle(0%_at_50%_100%)] transition-[clip-path] duration-700 ${EASE} group-hover:[clip-path:circle(150%_at_50%_100%)]`}
      >
        <p className="font-display text-2xl italic leading-snug text-cream">
          {project.tagline}
        </p>
        <span className="flex items-center gap-3 text-sm text-cream">
          Read the case study
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cream text-[13px] text-terminal transition-transform duration-500 group-hover:rotate-45">
            ↗
          </span>
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <span className={`font-mono text-xs uppercase tracking-wide ${style.text}`}>
          {project.domain}
        </span>
        <h3 className="font-display text-2xl leading-tight text-cream">{project.title}</h3>
        {project.client ? <p className="text-sm text-cream/65">{project.client}</p> : null}
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {project.metrics.map((m) => (
          <div key={m.label} className="flex flex-col">
            <CountUpMetric
              value={m.value}
              className="font-mono text-lg font-semibold text-cream"
            />
            <span className="text-xs text-ink-muted">{m.label}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-mono text-xs text-ink-soft">{project.stack.join(" · ")}</p>
        <span className="flex items-center gap-1 font-mono text-sm text-steel">
          View case study
          <span className={`transition-transform duration-500 ${EASE} group-hover:translate-x-1`}>
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
