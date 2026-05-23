"use client";

import { motion } from "framer-motion";

type Props = {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  compact?: boolean;
};

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  compact = false,
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl ${compact ? "mb-4" : "mb-16"} ${alignClass}`}
    >
      {label && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/90 ${compact ? "mb-2" : "mb-4"}`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-[family-name:var(--font-playfair)] font-semibold leading-tight tracking-tight ${
          compact
            ? "text-2xl md:text-3xl lg:text-4xl"
            : "text-4xl md:text-5xl lg:text-6xl"
        }`}
        style={{ fontFamily: "var(--font-playfair), serif" }}
      >
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p
          className={`leading-relaxed text-muted ${compact ? "mt-2 text-sm md:text-base" : "mt-5 text-lg md:text-xl"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
