export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div
        className="aurora-blob absolute -left-[20%] -top-[30%] h-[70vh] w-[70vw] rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, var(--aurora-cyan) 0%, transparent 70%)",
        }}
      />
      <div
        className="aurora-blob-delay absolute -right-[15%] top-[10%] h-[60vh] w-[60vw] rounded-full opacity-35"
        style={{
          background:
            "radial-gradient(circle, var(--aurora-purple) 0%, transparent 70%)",
        }}
      />
      <div
        className="aurora-blob absolute bottom-[-20%] left-[20%] h-[50vh] w-[50vw] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, var(--aurora-pink) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
