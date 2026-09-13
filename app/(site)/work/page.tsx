import type { Metadata } from "next";
import { Container } from "@/src/components/Container";
import { PageHeader } from "@/src/components/PageHeader";
import { WorkFilter } from "@/src/components/WorkFilter";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Production AI systems we've shipped: dental diagnosis, real-time trading, semantic search inside Postgres, and more. Filter by domain.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        title="Work that"
        shine="shipped."
        intro={
          <p>
            Every system we&rsquo;ve shipped, with the numbers we measured. Filter by domain.
          </p>
        }
      />
      <section className="py-14 sm:py-20">
        <Container>
          <WorkFilter />
        </Container>
      </section>
    </>
  );
}
