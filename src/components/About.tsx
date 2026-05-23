"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";

const ROLES = [
  "Mindset Mentor",
  "Emotional Healing Guide",
  "Women Empowerment Coach",
  "Transformation Mentor",
];

const HIGHLIGHTS = [
  {
    quote: "You are not broken, you are rebuilding.",
    desc: "Guiding you through emotional pain toward wholeness.",
  },
  {
    quote: "Stop doubting your worth.",
    desc: "Helping you rediscover confidence and self-love.",
  },
  {
    quote: "Growth starts when self-awareness begins.",
    desc: "Transforming mindsets through deep emotional understanding.",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          label="Meet Your Guide"
          title="Dimple Agarwal"
          subtitle="A compassionate force for emotional transformation — helping souls heal, hearts rebuild, and minds awaken to their true power."
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-2xl" />
            <div className="glow-border glass-panel relative aspect-[4/5] max-w-md overflow-hidden rounded-3xl mx-auto lg:mx-0 lg:-translate-x-10">
              <Image
                src="/dimp.jpg"
                alt="Dimple Agarwal — mindset mentor and emotional healing coach"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 448px"
                priority
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 20%, rgba(34,211,238,0.12), transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(168,85,247,0.15), transparent 50%)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-deep)] via-[var(--hero-fade)] to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <p
                  className="text-2xl font-semibold text-solid-heading drop-shadow-lg"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Dimple Agarwal
                </p>
                <p className="mt-2 text-sm text-cyan-300/90">
                  Emotional Healing · Mindset · Empowerment
                </p>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10 dark:ring-white/10" />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="glass-panel absolute -right-4 top-8 max-w-[200px] rounded-2xl p-4 md:-right-8"
            >
              <p className="text-xs text-cyan-400/80">Healing Quote</p>
              <p className="mt-1 text-sm italic text-foreground/90 dark:text-white/90">
                &ldquo;The strongest people heal silently.&rdquo;
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg leading-relaxed text-body">
              Dimple Agarwal is a{" "}
              <span className="text-foreground font-semibold dark:text-white">mindset mentor and emotional healing coach</span>{" "}
              dedicated to helping people overcome emotional pain, rebuild confidence, and
              guide profound transformation. Her work centers on emotional recovery,
              self-worth, inner healing, and empowering women to become unstoppable.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              With a voice that is calm, healing, and deeply empowering, Dimple creates a
              safe space where your emotions deserve understanding — not suppression. She
              believes healing begins when you finally choose yourself, and that every soul
              deserves peace, healing, and emotional freedom.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {ROLES.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-200/90"
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="mt-10 space-y-4">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h.quote}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel rounded-2xl border-l-2 border-cyan-400/50 p-5"
                >
                  <p
                    className="text-lg font-medium italic text-foreground/95 dark:text-white/95"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    &ldquo;{h.quote}&rdquo;
                  </p>
                  <p className="mt-2 text-sm text-muted">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
