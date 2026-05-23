"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useHorizontalScrollBounds } from "@/lib/useHorizontalScrollBounds";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const STAGES = [
  {
    phase: "Pain",
    title: "Honor the Wound",
    desc: "Your pain is valid. Every transformation begins with gentle acknowledgment.",
    icon: "🌑",
    gradient: "from-rose-600/40 via-rose-900/20 to-[var(--bg-deep)]",
    border: ["#fb7185", "#f43f5e", "#fda4af"],
    glow: "rgba(251, 113, 133, 0.35)",
    quote: "You are not broken, you are rebuilding.",
  },
  {
    phase: "Awareness",
    title: "Awaken Within",
    desc: "Growth starts when self-awareness begins. See yourself with compassion.",
    icon: "🔮",
    gradient: "from-purple-600/35 via-violet-900/20 to-[var(--bg-deep)]",
    border: ["#a855f7", "#8b5cf6", "#c084fc"],
    glow: "rgba(168, 85, 247, 0.4)",
    quote: "Growth starts when self-awareness begins.",
  },
  {
    phase: "Healing",
    title: "Choose Yourself",
    desc: "Healing begins when you finally choose yourself. Release what weighs you down.",
    icon: "💧",
    gradient: "from-cyan-600/30 via-blue-900/20 to-[var(--bg-deep)]",
    border: ["#22d3ee", "#3b82f6", "#67e8f9"],
    glow: "rgba(34, 211, 238, 0.4)",
    quote: "Healing begins when you finally choose yourself.",
  },
  {
    phase: "Growth",
    title: "Rise & Expand",
    desc: "Transform your inner world. Confidence blooms from emotional healing.",
    icon: "🌱",
    gradient: "from-emerald-600/25 via-teal-900/15 to-[var(--bg-deep)]",
    border: ["#34d399", "#2dd4bf", "#6ee7b7"],
    glow: "rgba(52, 211, 153, 0.35)",
    quote: "Let go of emotional pain and become unstoppable.",
  },
  {
    phase: "Inner Peace",
    title: "Reclaim Your Calm",
    desc: "You deserve peace, healing, and emotional freedom. Protect your energy.",
    icon: "🕊️",
    gradient: "from-pink-500/30 via-fuchsia-900/15 to-[var(--bg-deep)]",
    border: ["#f472b6", "#ec4899", "#fda4af"],
    glow: "rgba(244, 114, 182, 0.4)",
    quote: "You deserve peace, healing, and emotional freedom.",
  },
] as const;

const CARD_PARTICLES = [
  { top: "12%", left: "18%", delay: 0 },
  { top: "70%", left: "82%", delay: 0.6 },
  { top: "40%", left: "88%", delay: 1.2 },
  { top: "85%", left: "25%", delay: 0.9 },
];

const SCROLL_HEIGHT_PER_STAGE = 70;
const NAV_EASE = [0.22, 1, 0.36, 1] as const;
const CARD_WIDTH_CLASS =
  "w-[min(72vw,260px)] sm:w-[280px] md:w-[300px]";

function EnergyConnector({
  active,
  index,
}: {
  active: boolean;
  index: number;
}) {
  return (
    <div
      className="relative z-0 flex w-6 shrink-0 items-center sm:w-8 md:w-10"
      aria-hidden
    >
      <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/[0.06]">
        <motion.div
          className="htl-energy-segment absolute inset-0 rounded-full"
          animate={{
            scaleX: active ? 1 : 0.12,
            opacity: active ? 1 : 0.3,
          }}
          style={{ transformOrigin: "left center" }}
          transition={{ duration: 0.65, delay: index * 0.06, ease: NAV_EASE }}
        />
        {active && (
          <motion.span
            className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee] sm:h-2 sm:w-2"
            animate={{ left: ["0%", "100%"] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
          />
        )}
      </div>
    </div>
  );
}

function StageCard({
  stage,
  index,
  active,
  isCurrent,
  parallaxY,
}: {
  stage: (typeof STAGES)[number];
  index: number;
  active: boolean;
  isCurrent: boolean;
  parallaxY: number;
}) {
  return (
    <motion.article
      data-stage-card
      animate={{
        y: parallaxY + (isCurrent ? -4 : active ? 0 : 3),
        scale: isCurrent ? 1.02 : active ? 1 : 0.98,
        opacity: active ? 1 : 0.62,
      }}
      transition={{ duration: 0.55, ease: NAV_EASE }}
      className={`htl-card-wrap group relative ${CARD_WIDTH_CLASS} shrink-0 py-2 sm:py-3`}
    >
      <div
        className="htl-card-border pointer-events-none absolute inset-0 rounded-[1.35rem] opacity-60 transition-opacity duration-500 group-hover:opacity-100"
        style={
          {
            "--htl-c1": stage.border[0],
            "--htl-c2": stage.border[1],
            "--htl-c3": stage.border[2],
          } as CSSProperties
        }
      />

      <div
        className={`relative overflow-hidden rounded-[1.25rem] bg-gradient-to-b ${stage.gradient} p-[1px]`}
      >
        <div className="htl-card-body relative rounded-[1.2rem] bg-card p-5 backdrop-blur-xl sm:p-6">
          <motion.div
            className="pointer-events-none absolute -inset-3 rounded-full blur-2xl sm:-inset-4"
            style={{ background: stage.glow }}
            animate={{
              opacity: isCurrent ? [0.35, 0.65, 0.35] : active ? 0.22 : 0.06,
              scale: isCurrent ? [1, 1.12, 1] : 1,
            }}
            transition={{ duration: 3, repeat: isCurrent ? Infinity : 0 }}
          />

          {CARD_PARTICLES.map((p, i) => (
            <motion.span
              key={i}
              className="htl-particle pointer-events-none absolute h-1 w-1 rounded-full bg-black/30 dark:bg-white/50"
              style={{ top: p.top, left: p.left }}
              animate={{
                y: [0, -8, 0],
                opacity: active ? [0.2, 0.7, 0.2] : 0.1,
              }}
              transition={{
                duration: 3.5 + i * 0.4,
                repeat: Infinity,
                delay: p.delay,
              }}
            />
          ))}

          <div className="relative z-10">
            <div className="flex items-start justify-between gap-2">
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg backdrop-blur-md sm:h-11 sm:w-11 sm:text-xl ${
                  isCurrent ? "bg-black/5 dark:bg-white/10 shadow-[0_0_24px_var(--card-glow)]" : "bg-black/5 dark:bg-white/5"
                }`}
                style={{ "--card-glow": stage.glow } as CSSProperties}
              >
                {stage.icon}
              </span>
              <span className="font-mono text-[10px] text-foreground/40 dark:text-white/25">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <motion.span
              className="mt-4 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] sm:mt-5"
              style={{
                background: `linear-gradient(135deg, ${stage.border[0]}33, ${stage.border[2]}22)`,
                color: stage.border[1],
                boxShadow: isCurrent ? `0 0 20px ${stage.glow}` : "none",
              }}
              animate={isCurrent ? { scale: [1, 1.04, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {stage.phase}
            </motion.span>

            <h3
              className="mt-2 text-lg font-semibold text-solid-heading sm:mt-3 sm:text-xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {stage.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{stage.desc}</p>
            <p className="mt-3 border-t border-black/10 dark:border-white/5 pt-3 text-xs italic leading-relaxed text-foreground/60 dark:text-white/50 sm:mt-4 sm:pt-4">
              &ldquo;{stage.quote}&rdquo;
            </p>
          </div>

          <motion.div
            className="absolute bottom-0 left-0 h-[2px] rounded-full"
            style={{
              background: `linear-gradient(90deg, ${stage.border[0]}, ${stage.border[2]})`,
              boxShadow: `0 0 12px ${stage.glow}`,
            }}
            animate={{ width: active ? "100%" : "0%" }}
            transition={{ duration: 0.55, ease: NAV_EASE }}
          />
        </div>
      </div>
    </motion.article>
  );
}

function StaticTimelineGrid() {
  return (
    <section
      id="transformation-journey"
      className="section-padding relative w-full overflow-hidden"
      aria-label="Emotional Transformation Timeline"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          label="Emotional Transformation"
          title="Your Journey, Stage by Stage"
          subtitle="From pain to inner peace — each stage of your healing journey."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STAGES.map((stage, i) => (
            <StageCard
              key={stage.phase}
              stage={stage}
              index={i}
              active
              isCurrent={false}
              parallaxY={0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HorizontalTransformationTimeline() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const { getX, measure } = useHorizontalScrollBounds(viewportRef, trackRef);

  useEffect(() => {
    const t = setTimeout(measure, 100);
    return () => clearTimeout(t);
  }, [measure]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 58,
    damping: 24,
    mass: 0.4,
    restDelta: 0.0008,
  });

  const x = useTransform(smoothProgress, (v) => getX(v));

  const energyWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(smoothProgress, "change", (v) => {
    setProgress(v);
    const idx = Math.min(
      STAGES.length - 1,
      Math.round(v * (STAGES.length - 1))
    );
    setActiveIndex(idx);
  });

  const scrollToStage = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const ratio = index / Math.max(1, STAGES.length - 1);
    const top =
      container.getBoundingClientRect().top +
      window.scrollY +
      ratio * (container.offsetHeight - window.innerHeight);
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  if (prefersReducedMotion) {
    return <StaticTimelineGrid />;
  }

  const scrollSectionHeight = `${STAGES.length * SCROLL_HEIGHT_PER_STAGE}vh`;

  return (
    <section
      id="transformation-journey"
      className="relative w-full"
      aria-label="Emotional Transformation Timeline"
    >
      <div
        ref={containerRef}
        className="htl-scroll-runway relative"
        style={{ height: scrollSectionHeight }}
      >
        <div className="sticky top-0 z-10 grid h-[100dvh] min-h-[720px] max-h-[100dvh] grid-rows-[auto_auto_minmax(400px,1fr)_auto_auto] overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="aurora-blob absolute -left-[10%] top-[15%] h-[40vh] w-[40vw] rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="aurora-blob-delay absolute -right-[10%] bottom-[15%] h-[38vh] w-[38vw] rounded-full bg-purple-500/12 blur-3xl" />
            <div className="absolute inset-0 bg-overlay" />
          </div>

          <div className="relative z-10 shrink-0 px-4 pt-[4.5rem] md:px-6 md:pt-24">
            <SectionHeading
              compact
              label="Emotional Transformation"
              title="Your Journey, Stage by Stage"
              subtitle="Scroll down — your path unfolds from the center of the screen."
            />
            <motion.p
              className="mx-auto mt-2 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-cyan-600/70 dark:text-cyan-400/50"
              animate={{ opacity: progress > 0.04 && progress < 0.96 ? 1 : 0.4 }}
            >
              <span>↓ scroll</span>
              <span className="text-foreground/30 dark:text-white/20">·</span>
              <span>→ journey</span>
            </motion.p>
          </div>

          <div className="relative z-10 mx-auto hidden h-[3px] w-full max-w-3xl shrink-0 overflow-hidden rounded-full bg-black/5 dark:bg-white/[0.05] px-4 sm:block md:max-w-4xl">
            <motion.div
              style={{ width: energyWidth }}
              className="htl-energy-segment h-full rounded-full"
            />
          </div>

          {/* Centered card viewport with edge fade */}
          <div className="relative z-10 flex min-h-0 w-full flex-1 items-center justify-center">
            <div
              ref={viewportRef}
              className="htl-cards-viewport htl-viewport-mask relative h-full w-full max-w-[100vw]"
            >
              <motion.div
                ref={trackRef}
                style={{ x }}
                className="flex w-max items-center gap-2 px-4 will-change-transform sm:gap-3 sm:px-6 md:gap-4 md:px-8"
              >
                {STAGES.map((stage, i) => {
                  const stageProgress = i / Math.max(1, STAGES.length - 1);
                  const distance = Math.abs(progress - stageProgress);
                  const parallaxY = (progress - stageProgress) * -10;

                  return (
                    <div
                      key={stage.phase}
                      className="flex shrink-0 items-center"
                    >
                      {i > 0 && (
                        <EnergyConnector active={activeIndex >= i} index={i} />
                      )}
                      <StageCard
                        stage={stage}
                        index={i}
                        active={activeIndex >= i}
                        isCurrent={activeIndex === i}
                        parallaxY={
                          parallaxY * (1 - Math.min(distance * 2.2, 1))
                        }
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          <div className="relative z-10 mx-auto flex max-w-lg shrink-0 flex-wrap items-center justify-center gap-x-1 gap-y-2 px-4 py-2 sm:gap-x-2">
            {STAGES.map((s, i) => (
              <button
                key={s.phase}
                type="button"
                aria-label={`View ${s.phase} stage`}
                aria-current={i === activeIndex ? "step" : undefined}
                onClick={() => scrollToStage(i)}
                className="flex min-w-[3.5rem] flex-col items-center gap-1.5 px-1"
              >
                <motion.span
                  className="block h-1 rounded-full"
                  animate={{
                    width: i === activeIndex ? 28 : 8,
                    backgroundColor:
                      i <= activeIndex
                        ? "rgba(34, 211, 238, 0.95)"
                        : "var(--glass-border)",
                    boxShadow:
                      i === activeIndex
                        ? "0 0 12px rgba(34, 211, 238, 0.55)"
                        : "none",
                  }}
                  transition={{ duration: 0.45, ease: NAV_EASE }}
                />
                <span
                  className={`text-[8px] uppercase tracking-wider sm:text-[9px] ${
                    i === activeIndex ? "text-cyan-300" : "text-muted/55"
                  }`}
                >
                  {s.phase}
                </span>
              </button>
            ))}
          </div>

          <p className="relative z-10 shrink-0 pb-5 text-center text-[10px] italic text-purple-300/40 sm:pb-6 sm:text-xs">
            Pain → Awareness → Healing → Growth → Inner Peace
          </p>
        </div>
      </div>
    </section>
  );
}
