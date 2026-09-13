import { BandAccordion, type BandItem } from "@/src/components/BandAccordion";

const STEPS: BandItem[] = [
  {
    tone: "bg-band-plum",
    title: "Pilot",
    body: (
      <p>
        A scoped, paid pilot against your actual data or images. Small enough to say yes to
        without a procurement cycle.
      </p>
    ),
    aside: <Duration value="2–3 weeks" />,
  },
  {
    tone: "bg-band-teal",
    title: "Build",
    body: (
      <p>
        We build the production system: the pipeline, the interface, the evaluation. You see
        working software the whole way through.
      </p>
    ),
    aside: <Duration value="6–12 weeks" />,
  },
  {
    tone: "bg-band-ochre",
    title: "Run",
    body: (
      <p>
        An ongoing retainer to operate, monitor, and extend the system as your data and
        requirements change.
      </p>
    ),
    aside: <Duration value="Ongoing" />,
  },
];

function Duration({ value }: { value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream/60">
        Typical duration
      </span>
      <span className="font-display text-3xl italic text-cream sm:text-4xl">{value}</span>
    </div>
  );
}

export function EngagementLadder() {
  return <BandAccordion items={STEPS} label="How we engage" />;
}
