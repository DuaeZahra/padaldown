export const SITE = {
  name: "PedalDown Technologies",
  shortName: "PedalDown",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pedaldown.tech",
  description:
    "PedalDown Technologies is an AI engineering studio in Pakistan. We build semantic search inside Postgres and diagnostic imaging systems used in production, not prototypes.",
  email: "duazahra796@gmail.com",
  // Google Appointment Schedule. "Book a call" points here rather than at the
  // contact form, so the visitor picks a slot instead of waiting on a reply.
  bookingUrl: "https://calendar.app.google/ah1SGptByoVoLfeU8",
  location: "Working with clients globally",
  role: "Sales Lead",
} as const;

export const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
