import type { Domain } from "@/src/data/projects";

interface DomainStyle {
  text: string;
  border: string;
  dot: string;
  ring: string;
}

// One accent per project domain. Reuses the two existing brand accents
// (amber for Healthcare, steel for Data & Search — both already carried
// that meaning) and adds three new ones so the /work grid reads as
// genuinely varied rather than a wall of identical cards.
export const DOMAIN_STYLES: Record<Domain, DomainStyle> = {
  Healthcare: {
    text: "text-amber-dark",
    border: "border-t-amber",
    dot: "bg-amber",
    ring: "border-amber bg-amber-tint text-amber-dark",
  },
  "Data & Search": {
    text: "text-steel-dark",
    border: "border-t-steel",
    dot: "bg-steel",
    ring: "border-steel bg-steel-tint text-steel-dark",
  },
  Fintech: {
    text: "text-fintech",
    border: "border-t-fintech",
    dot: "bg-fintech",
    ring: "border-fintech bg-fintech-tint text-fintech",
  },
  "Generative AI": {
    text: "text-genai",
    border: "border-t-genai",
    dot: "bg-genai",
    ring: "border-genai bg-genai-tint text-genai",
  },
  Automation: {
    text: "text-automation",
    border: "border-t-automation",
    dot: "bg-automation",
    ring: "border-automation bg-automation-tint text-automation",
  },
};
