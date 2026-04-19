export function GradientBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-32 -left-24 h-[42rem] w-[42rem] rounded-full opacity-60 blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, var(--color-glow-indigo), transparent 60%)" }}
      />
      <div
        className="absolute top-1/3 -right-32 h-[36rem] w-[36rem] rounded-full opacity-50 blur-3xl animate-blob"
        style={{
          background: "radial-gradient(circle, var(--color-glow-cyan), transparent 60%)",
          animationDelay: "-7s",
        }}
      />
      <div
        className="absolute -bottom-40 left-1/4 h-[40rem] w-[40rem] rounded-full opacity-50 blur-3xl animate-blob"
        style={{
          background: "radial-gradient(circle, var(--color-glow-magenta), transparent 60%)",
          animationDelay: "-14s",
        }}
      />
    </div>
  );
}
