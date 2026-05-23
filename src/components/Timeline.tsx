"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STAGES = [
  {
    phase: "Pain",
    title: "Acknowledge the Wound",
    desc: "Every healing journey begins with honoring where you are — your pain is valid.",
    color: "from-rose-500 to-pink-600",
    icon: "🌑",
  },
  {
    phase: "Self-Awareness",
    title: "Awaken Within",
    desc: "Growth starts when self-awareness begins. See yourself clearly, without judgment.",
    color: "from-purple-500 to-violet-600",
    icon: "🔮",
  },
  {
    phase: "Healing",
    title: "Choose Yourself",
    desc: "Healing begins when you finally choose yourself. Release what no longer serves you.",
    color: "from-blue-500 to-cyan-500",
    icon: "💧",
  },
  {
    phase: "Confidence",
    title: "Rebuild Your Power",
    desc: "Confidence is built from emotional healing — layer by layer, breath by breath.",
    color: "from-cyan-400 to-teal-500",
    icon: "⚡",
  },
  {
    phase: "Emotional Strength",
    title: "Heal Silently, Grow Loudly",
    desc: "The strongest people heal silently. Your resilience becomes your superpower.",
    color: "from-indigo-500 to-purple-500",
    icon: "🛡️",
  },
  {
    phase: "Inner Peace",
    title: "Reclaim Your Calm",
    desc: "You deserve peace, healing, and emotional freedom. Protect your energy fiercely.",
    color: "from-teal-400 to-emerald-500",
    icon: "🕊️",
  },
  {
    phase: "Personal Growth",
    title: "Become Unstoppable",
    desc: "Transform your inner world. Let go of emotional pain and rise into your purpose.",
    color: "from-pink-400 to-rose-400",
    icon: "🌟",
  },
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="section-padding relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <SectionHeading
          label="Your Transformation"
          title="The Healing Journey"
          subtitle="From pain to peace — a cinematic path through emotional evolution, guided every step of the way."
        />

        <div ref={containerRef} className="relative">
          <div className="absolute left-6 top-0 h-full w-0.5 overflow-hidden rounded-full bg-black/5 dark:bg-white/5 md:left-1/2 md:-translate-x-px">
            <motion.div
              style={{ height: lineHeight }}
              className="timeline-line w-full origin-top rounded-full"
            />
          </div>

          <div className="space-y-12">
            {STAGES.map((stage, i) => (
              <motion.div
                key={stage.phase}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-elevated text-xl md:left-1/2">
                  {stage.icon}
                </div>

                <div
                  className={`ml-16 flex-1 md:ml-0 ${
                    i % 2 === 0 ? "md:pr-[calc(50%+2rem)] md:text-right" : "md:pl-[calc(50%+2rem)]"
                  }`}
                >
                  <span
                    className={`inline-block rounded-full bg-gradient-to-r ${stage.color} px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white`}
                  >
                    {stage.phase}
                  </span>
                  <h3
                    className="mt-3 text-2xl font-semibold text-solid-heading"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-muted">{stage.desc}</p>
                </div>

                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
