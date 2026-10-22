import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Nived Exploration",
  description:
    "Where we are looking next. Explore Nived Development, Studio, and Research — turning ideas into structure and curiosity into new directions.",
};

export default function ExplorationPage() {
  return (
    <div
      id="top"
      className="flex min-h-screen flex-col bg-[#0e0e12] text-[#F2F1EE] selection:bg-blue-500/20 selection:text-blue-500"
    >
      <Navbar />

      <main id="main-content" className="flex-1 pt-14">
        {/* ─── Hero Section (Group.png design) ─── */}
        <section
          aria-labelledby="exploration-hero-heading"
          className="border-b border-white/10 px-6 pt-16 pb-12 sm:px-10 sm:pt-20 sm:pb-16 lg:px-14 lg:pt-24"
        >
          <div className="mx-auto max-w-7xl">
            {/* Pill Tag & Top Bar */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-zinc-300">
                <span className="h-1.5 w-1.5 bg-white" aria-hidden="true" />
                <span>A glimpse ahead</span>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                NIVED / EXPLORATIONS
              </span>
            </div>

            {/* Title & Description Row */}
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <h1
                  id="exploration-hero-heading"
                  className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#F2F1EE] leading-[1.05]"
                >
                  Where we are{" "}
                  <span className="block font-newsreader italic font-normal text-[#c7d5fa]">
                    looking next.
                  </span>
                </h1>
              </div>

              <div className="flex flex-col items-start gap-6 lg:col-span-4 lg:items-end lg:text-right">
                <p className="font-mono text-xs sm:text-sm leading-relaxed text-zinc-400">
                  New ideas. Unexpected connections.
                  <br />
                  A first look at what&apos;s taking shape.
                </p>

                <a
                  href="#the-explorations"
                  className="group inline-flex items-center gap-3 bg-[#F2F1EE] px-6 py-3.5 font-mono text-xs font-semibold text-zinc-950 transition-all duration-200 hover:bg-[#2A53E7] hover:text-white active:scale-[0.98]"
                >
                  <span>Explore what&apos;s next</span>
                  <span
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Full-width Hero Banner Artwork */}
            <div className="mt-12 overflow-hidden border border-white/10 bg-[#0e0e12] shadow-2xl transition-all duration-500 hover:border-white/20">
              <div className="relative aspect-[1312/500] w-full">
                <Image
                  src="/images/exploration/hero-banner.webp"
                  alt="Where we are looking next illustration banner with intricate mosaic pathways and planetary orbits"
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3 Navigation Tabs / Direction Cards (download 1.png design) ─── */}
        <section
          aria-label="Exploration categories"
          className="border-b border-white/10 bg-[#0a0a0d]"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
              {/* Tab 01 */}
              <a
                href="#development"
                className="group flex items-center justify-between px-6 py-6 transition-colors duration-200 hover:bg-white/[0.04] sm:px-8 sm:py-7"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-zinc-500">
                      01
                    </span>
                    <span className="font-display text-base font-bold text-[#F2F1EE] transition-colors group-hover:text-white">
                      Development
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-xs text-zinc-400">
                    From idea to structure
                  </p>
                </div>
                <span
                  className="font-mono text-sm text-zinc-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-white"
                  aria-hidden="true"
                >
                  ↘
                </span>
              </a>

              {/* Tab 02 */}
              <a
                href="#studio"
                className="group flex items-center justify-between px-6 py-6 transition-colors duration-200 hover:bg-white/[0.04] sm:px-8 sm:py-7"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-zinc-500">
                      02
                    </span>
                    <span className="font-display text-base font-bold text-[#F2F1EE] transition-colors group-hover:text-white">
                      Studio
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-xs text-zinc-400">
                    Room for the unexpected
                  </p>
                </div>
                <span
                  className="font-mono text-sm text-zinc-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-white"
                  aria-hidden="true"
                >
                  ↘
                </span>
              </a>

              {/* Tab 03 */}
              <a
                href="#research"
                className="group flex items-center justify-between px-6 py-6 transition-colors duration-200 hover:bg-white/[0.04] sm:px-8 sm:py-7"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-zinc-500">
                      03
                    </span>
                    <span className="font-display text-base font-bold text-[#F2F1EE] transition-colors group-hover:text-white">
                      Research
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-xs text-zinc-400">
                    Follow a good question
                  </p>
                </div>
                <span
                  className="font-mono text-sm text-zinc-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-white"
                  aria-hidden="true"
                >
                  ↘
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ─── The Explorations Section Intro (download 1.png design) ─── */}
        <section
          id="the-explorations"
          aria-labelledby="the-explorations-heading"
          className="px-6 pt-20 pb-12 sm:px-10 sm:pt-28 sm:pb-16 lg:px-14"
        >
          <div className="mx-auto max-w-7xl">
            {/* Header row */}
            <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-12 lg:flex-row lg:items-end">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                  The Explorations
                </span>
                <h2
                  id="the-explorations-heading"
                  className="mt-3 font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#F2F1EE]"
                >
                  Different paths.{" "}
                  <span className="block sm:inline font-newsreader italic font-normal text-[#c7d5fa]">
                    Shared curiosity.
                  </span>
                </h2>
              </div>

              <div className="max-w-md">
                <p className="font-mono text-xs sm:text-sm leading-relaxed text-zinc-400">
                  A place for ideas to find their form.
                  <br />
                  Step into a direction and see where it leads.
                </p>
              </div>
            </div>

            {/* ─── Card 01: DEVELOPMENT (Full-width Featured Card) ─── */}
            <div
              id="development"
              className="mt-12 scroll-mt-24 border border-white/10 bg-[#121417] p-8 transition-colors duration-300 hover:border-white/20 sm:p-12 lg:p-14"
            >
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
                {/* Left Text Block */}
                <div className="flex flex-col justify-between lg:col-span-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#8ec89a]" aria-hidden="true">
                        ■
                      </span>
                      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-300">
                        01 / Development
                      </span>
                    </div>

                    <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                      Think · Connect · Build
                    </div>

                    <h3 className="mt-6 font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F2F1EE] leading-[1.1]">
                      Ideas into{" "}
                      <span className="block font-newsreader italic font-normal text-[#8ec89a]">
                        motion.
                      </span>
                    </h3>

                    <p className="mt-6 font-mono text-xs sm:text-sm leading-relaxed text-zinc-300">
                      Development, with direction.
                      <br />
                      Turning ideas into structure, and connections into a way
                      forward.
                    </p>

                    <div className="mt-8">
                      <Link
                        href="/#contact"
                        className="group inline-flex items-center gap-3 bg-[#e2ede4] px-6 py-3.5 font-mono text-xs font-semibold text-zinc-950 transition-all duration-200 hover:bg-[#2A53E7] hover:text-white active:scale-[0.98]"
                      >
                        <span>Explore our work</span>
                        <span
                          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="mt-10 border-t border-white/10 pt-4">
                    <p className="font-mono text-[11px] text-zinc-500">
                      + Curiosity. Clarity. A shared direction.
                    </p>
                  </div>
                </div>

                {/* Right Framed Graphic Card */}
                <div className="lg:col-span-7">
                  <div className="overflow-hidden border border-[#233128] bg-[#141b16] p-5 sm:p-6">
                    {/* Header bar */}
                    <div className="flex items-center justify-between pb-3 text-[#7fa38a] font-mono text-[10px] tracking-widest">
                      <span>IDEAS IN MOTION</span>
                      <span aria-hidden="true">↗</span>
                    </div>

                    {/* Artwork Container */}
                    <div className="relative aspect-[852/360] w-full overflow-hidden border border-[#2a382e] bg-[#0c120e]">
                      <Image
                        src="/images/exploration/dev-artwork-clean.webp"
                        alt="Development ideas in motion mosaic layout"
                        fill
                        sizes="(max-width: 1024px) 100vw, 700px"
                        className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                      />
                      <span className="pointer-events-none absolute bottom-3 right-3 font-mono text-[9px] uppercase tracking-wider text-zinc-400/80 bg-black/40 px-2 py-0.5 backdrop-blur-xs">
                        Charting the route ↗
                      </span>
                    </div>

                    {/* Footer bar */}
                    <div className="flex items-center justify-between pt-4 text-[#5e7e68] font-mono text-[10px] tracking-widest">
                      <span>CONNECTING THE PIECES.</span>
                      <span>FIG. 02 / NIVED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── Cards 02 & 03: STUDIO and RESEARCH (Two-Column Grid) ─── */}
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* ─── Card 02: STUDIO ─── */}
              <div
                id="studio"
                className="scroll-mt-24 flex flex-col justify-between overflow-hidden border border-white/10 bg-[#121417] p-8 sm:p-10 transition-colors duration-300 hover:border-white/20"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-2">
                    <span className="text-[#e89b70]" aria-hidden="true">
                      ■
                    </span>
                    <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-300">
                      02 / Studio
                    </span>
                  </div>

                  {/* Framed Artwork Box */}
                  <div className="mt-6 overflow-hidden border border-white/10 bg-[#f7f5ed] shadow-inner">
                    <div className="relative aspect-[551/237] w-full">
                      <Image
                        src="/images/exploration/studio-artwork-exact.webp"
                        alt="Studio sketches in progress mosaic artwork"
                        fill
                        sizes="(max-width: 1024px) 100vw, 550px"
                        className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="mt-8">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                      A little space to experiment
                    </span>
                    <h3 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F1EE]">
                      Curiosity,{" "}
                      <span className="block font-newsreader italic font-normal text-[#e8b595]">
                        taking shape.
                      </span>
                    </h3>

                    <p className="mt-4 font-mono text-xs sm:text-sm leading-relaxed text-zinc-400">
                      Rough cuts. Fresh perspectives. Unexpected connections. A
                      space to see what happens next.
                    </p>
                  </div>
                </div>

                {/* Card CTA & Meta Footer */}
                <div className="mt-10">
                  <Link
                    href="/#contact"
                    className="group flex w-full items-center justify-between border-t border-white/10 pt-5 font-mono text-xs text-zinc-300 transition-colors hover:text-white"
                  >
                    <span>See what we&apos;re making</span>
                    <span
                      className="text-zinc-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </Link>

                  <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                    <span>Design · Creation · Experience</span>
                    <span>02</span>
                  </div>
                </div>
              </div>

              {/* ─── Card 03: RESEARCH ─── */}
              <div
                id="research"
                className="scroll-mt-24 flex flex-col justify-between overflow-hidden border border-white/10 bg-[#121417] p-8 sm:p-10 transition-colors duration-300 hover:border-white/20"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-2">
                    <span className="text-[#72a3ed]" aria-hidden="true">
                      ■
                    </span>
                    <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-300">
                      03 / Research
                    </span>
                  </div>

                  {/* Framed Artwork Box */}
                  <div className="mt-6 overflow-hidden border border-white/10 bg-[#f2f6fb] shadow-inner">
                    <div className="relative aspect-[551/237] w-full">
                      <Image
                        src="/images/exploration/research-artwork-exact.webp"
                        alt="Research ideas in connection mosaic artwork"
                        fill
                        sizes="(max-width: 1024px) 100vw, 550px"
                        className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="mt-8">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                      Look closer. Think further.
                    </span>
                    <h3 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F1EE]">
                      Questions,{" "}
                      <span className="block font-newsreader italic font-normal text-[#95b5e8]">
                        opening doors.
                      </span>
                    </h3>

                    <p className="mt-4 font-mono text-xs sm:text-sm leading-relaxed text-zinc-400">
                      Good questions make room for new possibilities. Follow the
                      threads between science, technology, and people.
                    </p>
                  </div>
                </div>

                {/* Card CTA & Meta Footer */}
                <div className="mt-10">
                  <Link
                    href="/#contact"
                    className="group flex w-full items-center justify-between border-t border-white/10 pt-5 font-mono text-xs text-zinc-300 transition-colors hover:text-white"
                  >
                    <span>Explore our research</span>
                    <span
                      className="text-zinc-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </Link>

                  <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                    <span>Science · Technology · People</span>
                    <span>03</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Bottom Orbit Callout Section (download 1.png design) ─── */}
        <section
          aria-labelledby="orbit-callout-heading"
          className="relative overflow-hidden border-t border-white/10 px-6 py-28 sm:px-10 sm:py-36 lg:py-44 text-center"
        >
          {/* Subtle Celestial Elliptical Orbit Lines (SVG) */}
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-30"
            aria-hidden="true"
          >
            <svg
              className="h-[600px] w-[1200px] max-w-none -rotate-6"
              viewBox="0 0 1200 600"
              fill="none"
            >
              {/* Outer orbit */}
              <ellipse
                cx="600"
                cy="300"
                rx="520"
                ry="220"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="4 6"
                opacity="0.35"
              />
              {/* Middle orbit */}
              <ellipse
                cx="600"
                cy="300"
                rx="420"
                ry="170"
                stroke="white"
                strokeWidth="1"
                opacity="0.25"
              />
              {/* Inner orbit */}
              <ellipse
                cx="600"
                cy="300"
                rx="300"
                ry="120"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="3 5"
                opacity="0.2"
              />
              {/* Orbiting star dots */}
              <circle cx="280" cy="220" r="2.5" fill="#fcd34d" />
              <circle cx="890" cy="380" r="2" fill="white" />
              <circle cx="600" cy="80" r="1.5" fill="white" opacity="0.6" />
            </svg>
          </div>

          <div className="relative mx-auto max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
              There&apos;s always another connection
            </span>

            <h2
              id="orbit-callout-heading"
              className="mt-6 font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F2F1EE] leading-[1.05]"
            >
              One curious mind.{" "}
              <span className="block font-newsreader italic font-normal text-[#c7d5fa]">
                Many possible directions.
              </span>
            </h2>

            <div className="mt-10 flex justify-center">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 bg-[#f4ebe1] px-8 py-4 font-mono text-xs font-semibold text-zinc-950 shadow-xl transition-all duration-200 hover:bg-white hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Follow your curiosity</span>
                <span
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Bottom Sub-bar ─── */}
        <section className="border-t border-white/10 px-6 py-8 sm:px-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="font-newsreader text-base italic text-zinc-400">
              A glimpse into what lies ahead.
            </p>
            <p className="font-mono text-xs tracking-wider text-zinc-500">
              Nived Exploration
            </p>
            <a
              href="#top"
              className="font-mono text-xs uppercase tracking-widest text-zinc-400 transition-colors hover:text-white cursor-pointer"
            >
              Back to top ↑
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
