import { BandAccordion, type BandItem } from "@/src/components/BandAccordion";
import { PillLink } from "@/src/components/PillLink";

/** The capability list for a band — the actual competencies, not prose. */
function CapabilityList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-baseline gap-3 text-[15px] text-cream/85">
          <span className="h-1 w-1 shrink-0 rounded-full bg-cream/50" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// The three competency groups from the company profile, in the profile's own
// order and grouping, each closing on the piece of work that proves it.
const GROUPS: BandItem[] = [
  {
    tone: "bg-band-slate",
    kicker: "Models and research",
    title: "Machine Learning & AI",
    body: (
      <>
        <p>
          Model work that gets measured, not demoed. Every system we ship reports its error
          margins. A 2.26° mean error on a diagnostic model is published the same way a
          precision bug on H100 is reported honestly.
        </p>
        <PillLink href="/work/rl-training-environments" className="mt-2">
          See the RL training work
        </PillLink>
      </>
    ),
    aside: (
      <CapabilityList
        items={[
          "Deep learning with CNNs and GANs",
          "NLP and LLM integration",
          "Computer vision",
          "Reinforcement learning",
          "AutoML (H2O.ai)",
        ]}
      />
    ),
  },
  {
    tone: "bg-band-rust",
    kicker: "Shipped product, not a notebook",
    title: "Full-Stack AI Products",
    body: (
      <>
        <p>
          A model is the easy half. We build the pipeline, the API, the interface and the
          evaluation around it, so what you get is a running product your team can operate.
          Two of them are live in production today.
        </p>
        <PillLink href="/work/fairstock" className="mt-2">
          See a live platform
        </PillLink>
      </>
    ),
    aside: (
      <CapabilityList
        items={[
          "Flask and FastAPI backends",
          "React frontend development",
          "REST API design and deployment",
          "Real-time systems (Kafka, Redis)",
          "Database design (SQL and NoSQL)",
        ]}
      />
    ),
  },
  {
    tone: "bg-band-forest",
    kicker: "The work most studios outsource",
    title: "Specialized Engineering",
    body: (
      <>
        <p>
          Kernel-level GPU optimization, on-chain systems, diagnostic imaging, and vector search
          built into the database you already run. Our vectorizer code is merged into pgEdge&rsquo;s
          official repository, not a private fork of it.
        </p>
        <PillLink href="https://github.com/pgEdge/pgedge-vectorizer" className="mt-2">
          View the merged repository
        </PillLink>
      </>
    ),
    aside: (
      <CapabilityList
        items={[
          "CUDA / Triton kernels on H100",
          "Precision optimization across INT8, INT4, BF16, FP16",
          "Blockchain (Ethereum, Solidity, Web3.js)",
          "Medical imaging and diagnostics",
          "Generative AI (Stable Diffusion, CLIP, SAM)",
          "Vector databases (PostgreSQL + pgvector)",
        ]}
      />
    ),
  },
];

export function Capabilities() {
  return <BandAccordion items={GROUPS} label="What we do" />;
}
