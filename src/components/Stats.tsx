"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useAnimatedCounter, useInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const STATS = [
  { label: "Lives Transformed", value: 2500, suffix: "+" },
  { label: "Healing Sessions", value: 5000, suffix: "+" },
  { label: "Emotional Breakthroughs", value: 3200, suffix: "+" },
  { label: "Happy Clients", value: 1800, suffix: "+" },
  { label: "Programs Completed", value: 450, suffix: "+" },
];

function StatCard({
  label,
  value,
  suffix,
  active,
}: {
  label: string;
  value: number;
  suffix: string;
  active: boolean;
}) {
  const count = useAnimatedCounter(value, active);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="glass-panel glow-border relative overflow-hidden rounded-2xl p-8 text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />
      <p className="relative text-4xl font-bold md:text-5xl">
        <span className="gradient-text">
          {count.toLocaleString()}
          {suffix}
        </span>
      </p>
      <p className="relative mt-2 text-sm uppercase tracking-wider text-muted">
        {label}
      </p>
    </motion.div>
  );
}

export function Stats() {
  const { ref, inView } = useInView(0.3);

  return (
    <section className="section-padding relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          label="Impact"
          title="Numbers That Tell Stories"
          subtitle="Every number represents a soul who chose healing, growth, and transformation."
        />

        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {STATS.map((stat) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              active={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
