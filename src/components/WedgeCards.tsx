import { BandAccordion, type BandItem } from "@/src/components/BandAccordion";
import { PillLink } from "@/src/components/PillLink";

const WEDGES: BandItem[] = [
  {
    tone: "bg-band-slate",
    kicker: "Semantic search & RAG",
    title: "Search that understands meaning",
    body: (
      <>
        <p>
          We make your product&rsquo;s search understand meaning instead of keywords — built into
          the PostgreSQL you already run, so you don&rsquo;t add a vector database to your stack.
        </p>
        <p className="text-cream/70">
          Our vectorizer code is merged into pgEdge&rsquo;s official repository.
        </p>
        <PillLink href="https://github.com/pgEdge/pgedge-vectorizer" className="mt-2">
          View the merged repository
        </PillLink>
      </>
    ),
    aside: (
      <blockquote className="font-display text-2xl italic leading-snug text-cream/90 sm:text-3xl">
        “Our product&rsquo;s search only matches keywords. Customers describe what they want in
        plain language and get nothing back.”
      </blockquote>
    ),
  },
  {
    tone: "bg-band-rust",
    kicker: "Clinical imaging automation",
    title: "Measurement without the manual pass",
    body: (
      <>
        <p>
          We automate diagnostic measurement from medical images. Our dental angle model, built
          for Aga Khan University, replaces roughly 25 minutes of manual work per case at 2.26°
          mean error.
        </p>
        <p className="text-cream/70">Deployed system, published error margins, R² 0.89.</p>
        <PillLink href="/work/ai-dental-diagnosis" className="mt-2">
          Read the case study
        </PillLink>
      </>
    ),
    aside: (
      <blockquote className="font-display text-2xl italic leading-snug text-cream/90 sm:text-3xl">
        “Our clinicians spend real, billable minutes per case on manual measurement from scans.”
      </blockquote>
    ),
  },
];

export function WedgeCards() {
  return <BandAccordion items={WEDGES} label="What we do" />;
}
