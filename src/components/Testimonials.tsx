"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Priya S.",
    role: "Entrepreneur",
    story: "I went from constant overthinking to finally feeling at peace. Dimple helped me rebuild my confidence from the inside out.",
    theme: "Mindset Breakthrough",
    stars: 5,
  },
  {
    name: "Ananya M.",
    role: "Creative Professional",
    story: "Her emotional healing guidance changed my life. I learned that my emotions deserve understanding — not suppression.",
    theme: "Emotional Healing",
    stars: 5,
  },
  {
    name: "Rhea K.",
    role: "Mother & Leader",
    story: "After grief and heartbreak, I thought I was broken. Dimple showed me I was rebuilding — and now I feel unstoppable.",
    theme: "Grief Transformation",
    stars: 5,
  },
  {
    name: "Meera T.",
    role: "Corporate Executive",
    story: "Anxiety and self-doubt ruled my life. Through her coaching, I rediscovered my self-worth and protect my energy daily.",
    theme: "Confidence Growth",
    stars: 5,
  },
  {
    name: "Sonia V.",
    role: "Wellness Advocate",
    story: "The mindset shifts I experienced were profound. I finally believe that my healing journey matters — and so do I.",
    theme: "Self-Worth Revival",
    stars: 5,
  },
  {
    name: "Nisha R.",
    role: "Founder",
    story: "The best investment I have ever made. I shifted from a scarcity mindset to pure abundance in just a few weeks.",
    theme: "Abundance Mindset",
    stars: 5,
  },
  {
    name: "Tara B.",
    role: "Designer",
    story: "I didn't realize how much emotional baggage I was carrying until I worked with Dimple. Now I feel incredibly light and free.",
    theme: "Inner Peace",
    stars: 5,
  },
  {
    name: "Kavya D.",
    role: "Marketing Director",
    story: "A true awakening. I've learned how to set boundaries without guilt and honor my own needs first.",
    theme: "Boundary Setting",
    stars: 5,
  },
  {
    name: "Maya L.",
    role: "Life Coach",
    story: "Dimple's coaching style is beautifully intuitive. She held space for my deepest fears and helped me turn them into strengths.",
    theme: "Overcoming Fear",
    stars: 5,
  },
  {
    name: "Aarti J.",
    role: "Software Engineer",
    story: "I broke the cycle of perfectionism and burnout. I am now thriving with a grounded, sustainable, and peaceful mindset.",
    theme: "Burnout Recovery",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/5 via-transparent to-purple-950/5" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          label="Transformation Stories"
          title="Lives Changed, Hearts Healed"
          subtitle="Real stories of emotional breakthroughs, confidence rebirth, and mindset transformations."
        />

        <motion.div 
          className="relative mt-12 flex overflow-hidden mask-image-fade whitespace-nowrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}
        >
          <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused] pb-6">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div
                key={i}
                className="glass-panel glow-border group relative w-[320px] md:w-[380px] shrink-0 whitespace-normal overflow-hidden rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl transition-all group-hover:bg-purple-500/25" />
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-500 dark:text-cyan-400/80">
                  {t.theme}
                </span>
                <p className="mt-4 text-body leading-relaxed">&ldquo;{t.story}&rdquo;</p>
                <div className="mt-2 flex gap-0.5 text-amber-500 dark:text-amber-400/80">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
                <footer className="mt-6 flex items-center gap-3 border-t border-black/10 dark:border-white/5 pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 text-sm font-semibold text-solid-heading">
                    {t.name[0]}
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-solid-heading">{t.name}</cite>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </footer>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
