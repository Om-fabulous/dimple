"use client";

import { useNavbarScroll } from "@/lib/useNavbarScroll";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#journey", label: "Journey" },
  { href: "#reels", label: "Wisdom" },
  { href: "#pricing", label: "Programs" },
  { href: "#community", label: "Community" },
];

const NAV_EASE = [0.22, 1, 0.36, 1] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const visible = useNavbarScroll(open);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!visible) setOpen(false);
  }, [visible]);

  return (
    <motion.header
      role="banner"
      initial={false}
      animate={{
        y: visible ? 0 : "-110%",
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.5,
        ease: NAV_EASE,
        opacity: { duration: 0.38, ease: NAV_EASE },
      }}
      className={`navbar-shell fixed inset-x-0 top-0 z-[200] ${
        visible ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      {/* Opaque isolation layer — blocks all content bleed-through */}
      <div className="navbar-isolation relative overflow-hidden">
        <div className="navbar-glow" aria-hidden />

        <div className="relative z-10 px-4 pt-3 pb-3 md:px-6 md:pt-4 md:pb-4">
          <motion.nav
            layout
            className="navbar-inner glow-border mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3.5 md:px-8"
            initial={mounted ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: NAV_EASE }}
          >
            <Link href="#" className="group relative z-10 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 text-sm font-bold text-on-accent shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                DA
              </span>
              <span
                className="hidden text-lg font-semibold tracking-tight sm:block"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Dimple <span className="text-cyan-400/90">Agarwal</span>
              </span>
            </Link>

            <ul className="hidden items-center gap-8 md:flex">
              {LINKS.filter(link => link.label !== "Community").map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-body transition-colors duration-300 hover:text-cyan-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-4 md:flex relative z-10">
              <Link
                href="#pricing"
                className="btn-primary rounded-full px-5 py-2 text-sm font-semibold text-on-accent"
              >
                Book Session
              </Link>
              <ThemeToggle />
              <Link
                href="#community"
                className="text-sm font-semibold text-body hover:text-cyan-300 transition-colors duration-300"
              >
                Community
              </Link>
            </div>

            <button
              type="button"
              className="relative z-10 flex flex-col gap-1.5 md:hidden"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              <span
                className={`h-0.5 w-6 bg-white transition-transform duration-300 ease-out ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-6 bg-white transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-6 bg-white transition-transform duration-300 ease-out ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </motion.nav>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -8 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -8 }}
                transition={{ duration: 0.4, ease: NAV_EASE }}
                className="mx-auto mt-2 max-w-6xl overflow-hidden md:hidden"
              >
                <div className="navbar-inner rounded-2xl p-6">
                  <ul className="flex flex-col gap-4">
                    {LINKS.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="text-lg text-body transition-colors hover:text-cyan-300"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                      <div className="pt-2 flex items-center gap-4">
                        <Link
                          href="#pricing"
                          onClick={() => setOpen(false)}
                          className="btn-primary inline-flex rounded-full px-5 py-2.5 text-sm font-semibold text-on-accent"
                        >
                          Book Session
                        </Link>
                        <ThemeToggle />
                      </div>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
