"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const QUOTES = [
  "Healing begins when you finally choose yourself.",
  "Your mindset creates your reality.",
  "You deserve peace, healing, and emotional freedom.",
];

type JourneyStage = {
  name: string;
  status: "complete" | "active" | "upcoming";
};

const CIRCLE_CENTER_Y = "1rem"; /* vertical center of h-8 indicators */

function HealingJourneyStages({ stages }: { stages: JourneyStage[] }) {
  return (
    <div className="mb-4 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.03] p-4">
      <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-purple-300/90">
        Healing Journey Stages
      </p>

      <div className="relative">
        {/* Inactive track — spans center of first node to center of last */}
        <div
          className="pointer-events-none absolute z-0 h-[2px] rounded-full bg-black/10 dark:bg-white/10"
          style={{
            top: CIRCLE_CENTER_Y,
            left: "calc(100% / 6)",
            width: "calc(100% * 2 / 3)",
            transform: "translateY(-50%)",
          }}
          aria-hidden
        />

        {/* Segment 1: Awareness → Healing (complete, glowing) */}
        <div
          className="pointer-events-none absolute z-0 h-[2px] overflow-hidden rounded-full"
          style={{
            top: CIRCLE_CENTER_Y,
            left: "calc(100% / 6)",
            width: "calc(100% / 3)",
            transform: "translateY(-50%)",
          }}
          aria-hidden
        >
          <div className="journey-line-active h-full w-full rounded-full" />
        </div>

        {/* Segment 2: Healing → Growth (active path, pulsing) */}
        <motion.div
          className="pointer-events-none absolute z-0 h-[2px] rounded-full"
          style={{
            top: CIRCLE_CENTER_Y,
            left: "calc(100% / 2)",
            width: "calc(100% / 3)",
            transform: "translateY(-50%)",
          }}
          animate={{
            opacity: [0.45, 1, 0.45],
            boxShadow: [
              "0 0 6px rgba(168, 85, 247, 0.4)",
              "0 0 16px rgba(168, 85, 247, 0.9), 0 0 24px rgba(244, 114, 182, 0.4)",
              "0 0 6px rgba(168, 85, 247, 0.4)",
            ],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        >
          <div className="h-full w-full rounded-full bg-gradient-to-r from-purple-400 via-pink-400/80 to-black/15 dark:to-white/15" />
        </motion.div>

        {/* Traveling light pulse along full connector */}
        <motion.div
          className="pointer-events-none absolute z-[1] h-1 w-8 rounded-full bg-cyan-300/90 blur-[2px]"
          style={{ top: CIRCLE_CENTER_Y, transform: "translateY(-50%)" }}
          animate={{ left: ["calc(100% / 6 - 1rem)", "calc(100% * 5 / 6 - 1rem)"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />

        {/* Indicators + labels — single grid column per stage */}
        <div className="relative z-10 grid grid-cols-3">
          {stages.map((s, i) => (
            <div key={s.name} className="flex flex-col items-center">
              <div
                className={`relative flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-shadow duration-300 ${
                  s.status === "complete"
                    ? "bg-cyan-500/35 text-cyan-200 shadow-[0_0_16px_rgba(34,211,238,0.45)] ring-1 ring-cyan-400/40"
                    : s.status === "active"
                      ? "bg-purple-500/45 text-purple-100 shadow-[0_0_20px_rgba(168,85,247,0.55)] ring-2 ring-purple-400/60"
                      : "bg-black/[0.05] dark:bg-white/[0.06] text-muted ring-1 ring-black/10 dark:ring-white/10"
                }`}
              >
                {s.status === "active" && (
                  <motion.span
                    className="absolute inset-0 rounded-full ring-2 ring-purple-400/30"
                    animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    aria-hidden
                  />
                )}
                {i + 1}
              </div>
              <span
                className={`mt-3 max-w-[5.5rem] text-center text-[10px] leading-tight tracking-wide ${
                  s.status === "complete"
                    ? "font-medium text-cyan-300/90"
                    : s.status === "active"
                      ? "font-semibold text-purple-200"
                      : "text-muted"
                }`}
              >
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WellnessDashboard() {
  const metrics = [
    { label: "Emotional Balance", value: 87, color: "from-cyan-400 to-blue-500" },
    { label: "Confidence Growth", value: 92, color: "from-purple-400 to-pink-500" },
    { label: "Mindset Clarity", value: 78, color: "from-blue-400 to-cyan-400" },
    { label: "Inner Peace Index", value: 85, color: "from-pink-400 to-purple-500" },
  ];

  const stages = [
    { name: "Awareness", status: "complete" as const },
    { name: "Healing", status: "active" as const },
    { name: "Growth", status: "upcoming" as const },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.5 }}
      className="glass-panel glow-border float-slow relative w-full max-w-md overflow-hidden rounded-3xl p-6 lg:max-w-lg"
    >
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400/80">
              Healing Intelligence
            </p>
            <h3 className="mt-1 text-lg font-semibold text-solid-heading">
              Transformation Dashboard
            </h3>
          </div>
          <span className="flex h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
        </div>

        <div className="mb-6 grid grid-cols-2 gap-3">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.03] dark:bg-white/[0.03] p-3"
            >
              <p className="text-[10px] uppercase tracking-wider text-muted">
                {m.label}
              </p>
              <p className="mt-1 text-2xl font-bold text-solid-heading">{m.value}%</p>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${m.value}%` }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  className={`h-full rounded-full bg-gradient-to-r ${m.color}`}
                />
              </div>
            </div>
          ))}
        </div>

        <HealingJourneyStages stages={stages} />

        <div className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/30 to-purple-500/30 text-lg">
            ✦
          </div>
          <div>
            <p className="text-xs text-muted">Today&apos;s Insight</p>
            <p className="text-sm font-medium text-foreground/90 dark:text-white/90">
              Self-love changes everything.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--hero-fade)] to-[var(--bg-deep)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="text-xs font-medium uppercase tracking-widest text-cyan-300/90">
              Mindset Mentor · Emotional Healing Guide
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            <span className="block text-solid-heading">Heal Your Mind.</span>
            <span className="shimmer-text mt-1 block">Transform Your Life.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
          >
            Help people heal emotionally, rebuild confidence, overcome overthinking,
            and transform their mindset through powerful emotional guidance and healing
            mentorship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {QUOTES.slice(0, 2).map((q) => (
              <span
                key={q}
                className="rounded-full border border-black/5 dark:border-white/5 bg-black/[0.03] dark:bg-white/[0.03] px-3 py-1 text-xs italic text-purple-800/80 dark:text-purple-200/70"
              >
                &ldquo;{q}&rdquo;
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="#community">Start Your Healing Journey</Button>
            <Button href="#pricing" variant="ghost">
              Book a Coaching Session
            </Button>
            <Button href="#pricing" variant="ghost">
              Transform Your Mindset
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-sm text-muted/80"
          >
            <LinkQuote />
          </motion.p>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-2xl" />
          <WellnessDashboard />
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-black/20 dark:border-white/20 p-2">
          <div className="h-2 w-0.5 rounded-full bg-cyan-400/80" />
        </div>
      </motion.div>
    </section>
  );
}

function LinkQuote() {
  return (
    <span className="text-cyan-400/60">
      Transform your inner world —{" "}
      <span className="text-foreground/90 dark:text-white/60">confidence is built from emotional healing.</span>
    </span>
  );
}
