"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSpotlight } from "@/lib/hooks";
import { motion } from "framer-motion";

const ITEMS = [
  {
    title: "Healing Affirmation",
    content: "Healing begins when you finally choose yourself.",
    size: "lg",
    accent: "cyan",
  },
  {
    title: "Emotional Wellness",
    content: "Your emotions deserve understanding, not suppression.",
    size: "sm",
    accent: "purple",
  },
  {
    title: "Mindset Shift",
    content: "Your mindset creates your reality.",
    size: "sm",
    accent: "blue",
  },
  {
    title: "Confidence Reminder",
    content: "Stop doubting your worth.",
    size: "md",
    accent: "pink",
  },
  {
    title: "Self-Love Guidance",
    content: "Self-love changes everything.",
    size: "md",
    accent: "rose",
  },
  {
    title: "Emotional Intelligence",
    content: "Protect your energy.",
    size: "sm",
    accent: "teal",
  },
  {
    title: "Peace & Healing",
    content: "You deserve peace, healing, and emotional freedom.",
    size: "lg",
    accent: "indigo",
  },
  {
    title: "Personal Growth",
    content: "Growth starts when self-awareness begins.",
    size: "sm",
    accent: "violet",
  },
  {
    title: "Transformation",
    content: "Transform your inner world.",
    size: "md",
    accent: "fuchsia",
  },
  {
    title: "Resilience",
    content: "The strongest people heal silently.",
    size: "sm",
    accent: "cyan",
  },
  {
    title: "Healing Journey",
    content: "Your healing journey matters.",
    size: "md",
    accent: "purple",
  },
  {
    title: "Freedom",
    content: "Let go of emotional pain and become unstoppable.",
    size: "sm",
    accent: "pink",
  },
];

const SIZE_MAP: Record<string, string> = {
  sm: "col-span-1 row-span-1",
  md: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
  lg: "col-span-1 row-span-2 md:col-span-2 md:row-span-2",
};

const ACCENT: Record<string, string> = {
  cyan: "from-cyan-500/20",
  purple: "from-purple-500/20",
  blue: "from-blue-500/20",
  pink: "from-pink-500/20",
  rose: "from-rose-500/20",
  teal: "from-teal-500/20",
  indigo: "from-indigo-500/20",
  violet: "from-violet-500/20",
  fuchsia: "from-fuchsia-500/20",
};

export function BentoGrid() {
  const onSpotlight = useSpotlight();

  return (
    <section className="section-padding relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          label="Wisdom Library"
          title="Bento Grid of Healing"
          subtitle="Interactive affirmations, mindset lessons, and emotional wellness insights — curated for your transformation."
        />

        <div className="grid auto-rows-[140px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[160px]">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              onMouseMove={onSpotlight}
              className={`spotlight-card glow-border glass-panel group relative flex flex-col justify-end overflow-hidden rounded-2xl p-5 transition-transform hover:-translate-y-1 ${SIZE_MAP[item.size]}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${ACCENT[item.accent]} to-transparent opacity-60 transition-opacity group-hover:opacity-100`}
              />
              <p className="relative text-[10px] font-semibold uppercase tracking-wider text-cyan-400/70">
                {item.title}
              </p>
              <p
                className="relative mt-2 text-sm font-medium leading-snug text-foreground/90 dark:text-white/90 md:text-base"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                &ldquo;{item.content}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
