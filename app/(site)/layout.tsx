import type { ReactNode } from "react";

export default function SiteGroupLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      {/* Clearance for the floating nav, which is fixed rather than in flow. */}
      <main id="main-content" className="flex-1 pt-20 sm:pt-24">
        {children}
      </main>
    </div>
  );
}
