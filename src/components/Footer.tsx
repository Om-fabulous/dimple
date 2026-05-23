"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#journey", label: "Journey" },
  { href: "#pricing", label: "Programs" },
  { href: "#community", label: "Community" },
];

const SOCIAL = [
  { href: "https://www.instagram.com/mindsetmentordimple?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram", icon: "IG" },
  { href: "https://youtube.com", label: "YouTube", icon: "YT" },
  { href: "mailto:hello@dimpleagarwal.com", label: "Email", icon: "✉" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-black/5 dark:border-white/5 pb-12 pt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-purple-500/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="#" className="inline-flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 text-sm font-bold text-on-accent">
                DA
              </span>
              <span
                className="text-xl font-semibold"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Dimple Agarwal
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-muted leading-relaxed">
              Mindset mentor & emotional healing coach — guiding souls toward peace,
              confidence, and unstoppable growth.
            </p>
            <p className="mt-4 text-sm italic text-purple-300/60">
              &ldquo;You are not broken, you are rebuilding.&rdquo;
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 dark:text-white/80">
              Navigate
            </h4>
            <ul className="mt-4 space-y-3">
              {NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted transition-colors hover:text-cyan-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 dark:text-white/80">
              Connect
            </h4>
            <ul className="mt-4 space-y-3">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted transition-colors hover:text-cyan-300"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-xs">
                      {s.icon}
                    </span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-black/5 dark:border-white/5 pt-8 md:flex-row"
        >
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Dimple Agarwal. All rights reserved.
          </p>
          <p className="text-xs text-muted/60">
            Heal Your Mind · Transform Your Life · Protect Your Energy
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
