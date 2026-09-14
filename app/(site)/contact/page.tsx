import type { Metadata } from "next";
import { Container } from "@/src/components/Container";
import { PageHeader } from "@/src/components/PageHeader";
import { ContactForm } from "./ContactForm";
import { SITE } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE.name}. ${SITE.location}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Tell us what you’re"
        shine="building."
        intro={
          <p>
            We&rsquo;ll tell you honestly whether a pilot makes sense, and what it would take.
          </p>
        }
      />

      <section className="py-14 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <dl className="flex flex-col gap-6">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-ink-soft">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-mono text-steel hover:text-steel-dark"
                >
                  {SITE.email}
                </a>
              </dd>
            </div>
          </dl>

          <ContactForm />
        </Container>
      </section>
    </>
  );
}
