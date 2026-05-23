"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

const REELS = [
  {
    theme: "Emotional Healing",
    quote: "Healing begins when you finally choose yourself.",
    gradient: "from-cyan-900/80 to-blue-900/80",
    tag: "Healing",
  },
  {
    theme: "Mindset Lessons",
    quote: "Your mindset creates your reality.",
    gradient: "from-purple-900/80 to-indigo-900/80",
    tag: "Mindset",
  },
  {
    theme: "Confidence Reminders",
    quote: "Stop doubting your worth.",
    gradient: "from-pink-900/80 to-rose-900/80",
    tag: "Confidence",
  },
  {
    theme: "Overthinking Solutions",
    quote: "Overthinking steals your happiness.",
    gradient: "from-blue-900/80 to-cyan-900/80",
    tag: "Peace",
  },
  {
    theme: "Self-Love Affirmations",
    quote: "Self-love changes everything.",
    gradient: "from-violet-900/80 to-purple-900/80",
    tag: "Self-Love",
  },
  {
    theme: "Emotional Boundaries",
    quote: "Protect your energy.",
    gradient: "from-teal-900/80 to-emerald-900/80",
    tag: "Boundaries",
  },
  {
    theme: "Healing After Heartbreak",
    quote: "You are not broken, you are rebuilding.",
    gradient: "from-rose-900/80 to-pink-900/80",
    tag: "Heartbreak",
  },
  {
    theme: "Inner Peace Guidance",
    quote: "You deserve peace, healing, and emotional freedom.",
    gradient: "from-indigo-900/80 to-blue-900/80",
    tag: "Peace",
  },
  {
    theme: "Transformation Quotes",
    quote: "Let go of emotional pain and become unstoppable.",
    gradient: "from-fuchsia-900/80 to-purple-900/80",
    tag: "Growth",
  },
];

export function Reels() {
  return (
    <section id="reels" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          label="Instagram Wisdom"
          title="Reels That Heal"
          subtitle="Vertical wisdom cards inspired by Dimple's emotionally intelligent content — healing advice, mindset shifts, and transformation reminders."
        />

        <div className="flex gap-5 overflow-x-auto pb-6 scrollbar-thin md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-3">
          {REELS.map((reel, i) => (
            <motion.article
              key={reel.theme}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="reel-card glow-border glass-panel group relative min-w-[220px] shrink-0 cursor-pointer overflow-hidden rounded-3xl md:min-w-0"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-b ${reel.gradient}`}
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.15),transparent_60%)]" />

              <div className="relative flex h-full flex-col justify-between p-6">
                <div>
                  <span className="rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-200/90">
                    {reel.tag}
                  </span>
                  <p className="mt-4 text-xs text-foreground/70 dark:text-white/50">{reel.theme}</p>
                </div>

                <div>
                  <p
                    className="text-lg font-medium leading-snug text-foreground/95 dark:text-white/95"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    &ldquo;{reel.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs text-foreground/60 dark:text-white/40">@dimpleagarwal</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 text-sm transition-colors group-hover:bg-cyan-500/30">
                      ▶
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
