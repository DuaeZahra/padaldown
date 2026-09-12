export function ScrollCue() {
  return (
    <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
        Scroll
      </span>
      <span className="relative h-10 w-px overflow-hidden bg-white/20" aria-hidden="true">
        <span className="animate-scroll-cue absolute inset-x-0 top-0 h-4 bg-white/80" />
      </span>
    </div>
  );
}
