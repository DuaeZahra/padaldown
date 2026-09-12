import Link from "next/link";
import type { Project } from "@/src/data/projects";
import { CountUpMetric } from "@/src/components/CountUpMetric";
import { DOMAIN_STYLES } from "@/src/lib/domain-colors";

export function ProjectCard({ project }: { project: Project }) {
  const style = DOMAIN_STYLES[project.domain];

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group flex flex-col justify-between gap-6 rounded-sm border border-t-2 border-line bg-paper-raised p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_18px_44px_-18px_rgba(0,0,0,0.95)] ${style.border}`}
    >
      <div className="flex flex-col gap-3">
        <span className={`font-mono text-xs uppercase tracking-wide ${style.text}`}>
          {project.domain}
        </span>
        <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
        {project.client ? (
          <p className="text-sm text-ink-muted">{project.client}</p>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {project.metrics.map((m) => (
          <div key={m.label} className="flex flex-col">
            <CountUpMetric
              value={m.value}
              className={`font-mono text-lg font-semibold ${style.text}`}
            />
            <span className="text-xs text-ink-muted">{m.label}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-mono text-xs text-ink-soft">{project.stack.join(" · ")}</p>
        <span className="flex items-center gap-1 font-mono text-sm text-steel group-hover:text-steel-dark">
          View case study
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
