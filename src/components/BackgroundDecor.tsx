/** Fixed decorative gradient blobs for section backgrounds. Lightweight, GPU-only. */
export function BackgroundDecor({ variant = 'default' }: { variant?: 'default' | 'subtle' }) {
  if (variant === 'subtle') {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl animate-drift" />
        <div className="absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl animate-drift [animation-delay:-6s]" />
      </div>
    );
  }
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-drift" />
      <div className="absolute right-[-10%] top-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl animate-drift [animation-delay:-8s]" />
      <div className="absolute bottom-[-12%] left-1/3 h-80 w-80 rounded-full bg-hover/40 blur-3xl animate-drift [animation-delay:-3s]" />
    </div>
  );
}
