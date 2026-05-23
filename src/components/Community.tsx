"use client";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { useState } from "react";

export function Community() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="community" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 md:px-6">
        <SectionHeading
          label="Join the Movement"
          title="Healing Community"
          subtitle="Receive healing resources, motivational updates, and transformation wisdom — straight to your inbox."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel glow-border overflow-hidden rounded-3xl p-8 md:p-12"
        >
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-solid-heading">What You&apos;ll Receive</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Weekly healing affirmations & wisdom",
                  "Exclusive mindset transformation tips",
                  "Early access to coaching programs",
                  "Emotional wellness resources & guides",
                  "Community of empowered women",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-body">
                    <span className="text-cyan-400">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm italic text-purple-300/70">
                &ldquo;Transform your inner world — one email at a time.&rdquo;
              </p>
            </div>

            <div>
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex h-full flex-col items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 text-center"
                >
                  <span className="text-4xl">✨</span>
                  <p className="mt-4 text-lg font-semibold text-solid-heading">Welcome to the journey</p>
                  <p className="mt-2 text-sm text-muted">
                    Your healing begins now. Check your inbox soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-muted">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      className="w-full rounded-xl border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3.5 text-heading outline-none transition-all placeholder:text-muted focus:border-cyan-400/50 focus:shadow-[0_0_24px_rgba(34,211,238,0.15)]"
                    />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3.5 text-heading outline-none transition-all placeholder:text-muted focus:border-purple-400/50"
                  />
                  <button
                    type="submit"
                    className="btn-primary w-full rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide text-on-accent transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
                  >
                    Join the Healing Community
                  </button>
                  <p className="text-center text-xs text-muted/60">
                    No spam. Only healing, growth, and empowerment.
                  </p>
                </form>
              )}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4 border-t border-white/5 pt-10">
            <Button href="#pricing" variant="ghost">
              Transform Your Mindset
            </Button>
            <Button href="https://www.instagram.com/mindsetmentordimple?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" variant="primary">
              Follow on Instagram
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
