import type { ReactNode } from "react";

export function ShineText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`shine-text inline-block ${className}`}>{children}</span>;
}
