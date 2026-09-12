export function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-2xl font-semibold text-amber-dark sm:text-3xl">{value}</span>
      <span className="text-sm text-ink-muted">{label}</span>
    </div>
  );
}
