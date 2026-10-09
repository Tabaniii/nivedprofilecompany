"use client";

import { profile } from "@/lib/data/profile";
import { Container } from "@/components/ui/Container";
import Threads from "@/components/ui/Threads";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate h-screen h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#070709] text-white"
    >
      {/* Threads Canvas Background Effect */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <Threads
          color="#ffffff"
          lineCount={90}
          thickness={0.6}
          softness={1.3}
          amplitude={1.7}
          distance={0.4}
          waves={1.05}
          speed={0.6}
          split={0.04}
          fray={0.5}
          angle={25}
          taper={0.85}
          brightness={1.4}
          parting={0.25}
          enableMouseInteraction={true}
          fade={0}
          opacity={1}
        />
      </div>

      {/* Gentle bottom gradient fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-[1]" />

      {/* Main Centered Proportional Content */}
      <Container className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4 my-auto pt-12">
        {/* Badge: Digital Solutions & Innovation Studio */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 px-4 text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-zinc-200 backdrop-blur-md shadow-xs transition-transform duration-200 hover:scale-[1.02]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          <span>DIGITAL SOLUTIONS • TECH &amp; INNOVATION STUDIO</span>
        </div>

        {/* Main Headline (H1) */}
        <h1
          id="hero-heading"
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.14] drop-shadow-sm max-w-4xl"
        >
          Architecting Scalable Digital Solutions
          <br className="hidden sm:inline" />{" "}
          <span className="text-zinc-300 font-medium">
            for Modern Businesses
          </span>
        </h1>

        {/* Subheadline Paragraph */}
        <p className="mt-5 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          {profile.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-200 shadow-md shadow-white/5 active:scale-[0.98]"
          >
            Explore Solutions
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-zinc-200 backdrop-blur-md transition-all hover:bg-white/10 hover:text-white active:scale-[0.98]"
          >
            Book a Consultation
          </a>
        </div>
      </Container>

      {/* Subtle Bottom Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-300 transition-colors z-10 select-none group"
        aria-label="Scroll to overview section"
      >
        <span className="text-[10px] tracking-widest uppercase font-medium text-zinc-500 group-hover:text-zinc-400">
          Scroll to explore
        </span>
        <svg
          className="h-3.5 w-3.5 text-zinc-400 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
