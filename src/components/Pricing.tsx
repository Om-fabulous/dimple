"use client";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSpotlight } from "@/lib/hooks";
import { motion } from "framer-motion";

const PLAN = {
  name: "1-to-1 Coaching Program",
  price: "Custom Investment",
  desc: "An exclusive, ultra-premium coaching experience tailored specifically to your emotional healing and mindset transformation.",
  features: [
    "Private 60-min deeply transformative sessions",
    "Custom emotional healing & mindset roadmap",
    "Priority WhatsApp support with Dimple",
    "Exclusive inner-circle community access",
    "Lifetime access to premium resources",
  ],
  cta: "Book Now",
};

export function Pricing() {
  const onSpotlight = useSpotlight();

  return (
    <section id="pricing" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-cyan-950/10" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          label="Investment in You"
          title="Premium Coaching"
          subtitle="Because your healing journey is the most important investment you'll ever make."
        />

        <div className="mt-12 flex justify-center">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseMove={onSpotlight}
            className="spotlight-card glow-border glass-panel relative flex flex-col overflow-hidden rounded-3xl p-10 md:p-14 max-w-2xl w-full text-center shadow-[0_0_50px_rgba(168,85,247,0.15)] ring-1 ring-cyan-400/30"
          >
            <div className="absolute top-0 left-1/2 h-[2px] w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 shadow-[0_0_20px_rgba(34,211,238,0.5)]" />
            
            <h3 className="text-3xl font-display font-semibold text-solid-heading tracking-tight">{PLAN.name}</h3>
            <p className="mt-4 text-4xl font-bold gradient-text">{PLAN.price}</p>
            <p className="mt-4 text-body text-lg leading-relaxed">{PLAN.desc}</p>
            
            <ul className="mt-10 space-y-4 text-left mx-auto max-w-md">
              {PLAN.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-body">
                  <span className="mt-1 text-cyan-500 dark:text-cyan-400">✦</span>
                  <span className="text-[1.05rem] font-medium">{f}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-12 relative flex justify-center group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-70 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:duration-200 animate-pulse" />
              <Button
                href="#community"
                variant="primary"
                className="relative px-12 py-4 text-lg font-bold rounded-full w-full sm:w-auto overflow-hidden bg-foreground text-page transition-all hover:scale-105 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
              >
                {PLAN.cta}
              </Button>
            </div>
          </motion.article>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-sm italic text-muted"
        >
          &ldquo;Your healing journey matters.&rdquo; — Limited spots available to ensure quality attention.
        </motion.p>
      </div>
    </section>
  );
}
