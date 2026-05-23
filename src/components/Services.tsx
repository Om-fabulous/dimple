"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSpotlight } from "@/lib/hooks";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: "💫",
    title: "Emotional Healing Coaching",
    desc: "Release suppressed pain and rebuild emotional freedom with guided healing.",
    quote: "Your emotions deserve understanding, not suppression.",
  },
  {
    icon: "🧠",
    title: "Mindset Transformation",
    desc: "Shift limiting beliefs and create a reality aligned with your highest self.",
    quote: "Your mindset creates your reality.",
  },
  {
    icon: "👑",
    title: "Self-Worth Coaching",
    desc: "Stop doubting your worth and embrace the confidence you were born with.",
    quote: "Stop doubting your worth.",
  },
  {
    icon: "✨",
    title: "Confidence Building",
    desc: "Build unshakeable confidence rooted in emotional healing and self-awareness.",
    quote: "Confidence is built from emotional healing.",
  },
  {
    icon: "🌊",
    title: "Overthinking Recovery",
    desc: "Break free from mental loops and reclaim your happiness and peace.",
    quote: "Overthinking steals your happiness.",
  },
  {
    icon: "🕊️",
    title: "Grief Healing Sessions",
    desc: "Transform grief into growth with compassionate, soul-centered guidance.",
    quote: "Let go of emotional pain and become unstoppable.",
  },
  {
    icon: "👩",
    title: "Women Empowerment Mentorship",
    desc: "Empower your inner goddess and step into your most powerful self.",
    quote: "Protect your energy.",
  },
  {
    icon: "🛡️",
    title: "Emotional Resilience Coaching",
    desc: "Develop strength that heals silently and grows through every challenge.",
    quote: "The strongest people heal silently.",
  },
];

export function Services() {
  const onSpotlight = useSpotlight();

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          label="Coaching Services"
          title="Transform Every Layer of You"
          subtitle="Premium coaching experiences designed for emotional healing, mindset mastery, and unstoppable personal growth."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onMouseMove={onSpotlight}
              className="spotlight-card glow-border glass-panel group relative overflow-hidden rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl transition-all group-hover:bg-cyan-500/20" />
              <span className="float-medium inline-block text-3xl">{service.icon}</span>
              <h3 className="mt-4 text-lg font-semibold text-solid-heading">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.desc}</p>
              <p className="mt-4 border-t border-white/5 pt-4 text-xs italic text-purple-300/70">
                &ldquo;{service.quote}&rdquo;
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
