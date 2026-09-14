export interface Testimonial {
  /** The client's own words. Keep it as they wrote or said it. */
  quote: string;
  /** Who said it. */
  name: string;
  /** Their role and company, e.g. "Head of Radiology, Aga Khan University". */
  title: string;
  /** Optional slug from PROJECTS, to link the quote to the work it refers to. */
  projectSlug?: string;
}

// Real client quotes only. The section renders nothing while this array is
// empty, so the site never shows invented praise: a fabricated testimonial
// attributed to a real organisation is the one claim on here that could not be
// walked back.
//
// To add one, append an object:
//   {
//     quote: "They shipped in six weeks what our last vendor quoted six months for.",
//     name: "Jane Doe",
//     title: "VP Engineering, Acme",
//     projectSlug: "fairstock",
//   }
export const TESTIMONIALS: Testimonial[] = [];
