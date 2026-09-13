import type { Metadata } from "next";
import { Instrument_Serif, Roboto, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/src/components/FloatingNav";
import { SiteBackdrop } from "@/src/components/SiteBackdrop";
import { SITE } from "@/src/lib/site";

// The display face carries the whole look, and its italic does most of the
// work — headlines lean on it for emphasis mid-sentence.
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — AI engineering studio`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} — AI engineering studio`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — AI engineering studio`,
    description: SITE.description,
  },
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phoneHref,
  description: SITE.description,
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${roboto.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteBackdrop />
        <FloatingNav />
        {children}
      </body>
    </html>
  );
}
