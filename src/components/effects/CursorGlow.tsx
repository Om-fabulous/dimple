"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    document.body.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="cursor-glow pointer-events-none fixed z-[9999] mix-blend-screen opacity-40 blur-2xl transition-opacity duration-300"
      style={{
        left: pos.x - 125,
        top: pos.y - 125,
        width: 250,
        height: 250,
        background:
          "radial-gradient(circle, var(--glow-cyan) 0%, var(--glow-purple) 50%, transparent 80%)",
      }}
      aria-hidden
    />
  );
}
