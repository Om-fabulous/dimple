"use client";

import { About } from "@/components/About";
import { BentoGrid } from "@/components/BentoGrid";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Pricing } from "@/components/Pricing";
import { Reels } from "@/components/Reels";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { HorizontalTransformationTimeline } from "@/components/HorizontalTransformationTimeline";
import { Timeline } from "@/components/Timeline";
import { AmbientParticles } from "@/components/effects/AmbientParticles";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { CursorGlow } from "@/components/effects/CursorGlow";

export function HomePage() {
  return (
    <>
      <AuroraBackground />
      <AmbientParticles />
      <CursorGlow />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Timeline />
        <HorizontalTransformationTimeline />
        <Reels />
        <Testimonials />
        <Stats />
        <BentoGrid />
        <Pricing />
        <Community />
      </main>
      <Footer />
    </>
  );
}
