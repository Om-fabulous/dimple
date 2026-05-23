"use client";

import { useMagnetic } from "@/lib/hooks";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  onClick?: () => void;
};

export function Button({
  href = "#community",
  children,
  variant = "primary",
  className = "",
  onClick,
}: Props) {
  const { ref, onMove, onLeave } = useMagnetic(0.2);
  const base =
    "relative inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300";
  const variantClass =
    variant === "primary" ? "btn-primary text-on-accent" : "btn-ghost";

  const inner = (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variantClass} ${className}`}
    >
      {children}
    </motion.span>
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className="border-0 bg-transparent p-0">
        {inner}
      </button>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {inner}
    </Link>
  );
}
