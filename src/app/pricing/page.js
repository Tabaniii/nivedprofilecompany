import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";

export const metadata = {
  title: "Nived Pricing",
  description:
    "Choose your plan. Start from $5, or find your custom fit with Nived.",
};

const STARTER_FEATURES = [
  "A space for your next idea",
  "The essentials to get you started",
  "Room to explore at your own pace",
  "A simple, independent setup",
];

const CUSTOM_FEATURES = [
  "A plan that fits your project",
  "A conversation about your needs",
  "Space for your team's ambitions",
  "A scope we shape together",
];

function CheckIcon() {
  return (
    <span
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/25 text-zinc-300"
      aria-hidden="true"
    >
      <svg
        className="h-2.5 w-2.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <div
      id="top"
      className="flex min-h-screen flex-col bg-[#0e0e12] text-[#F2F1EE] selection:bg-blue-500/20 selection:text-blue-500"
    >
      <Navbar />

      <main id="main-content" className="flex-1 pt-14">
        {/* ─── Hero Callout Section ─── */}
        <section
          aria-labelledby="pricing-hero-heading"
          className="border-b border-white/10 px-6 py-24 sm:px-10 sm:py-32 lg:py-36 text-center"
        >
          <div className="mx-auto max-w-4xl">
            <h1
              id="pricing-hero-heading"
              className="font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-[#F2F1EE]"
            >
              Have something people{" "}
              <span className="block sm:inline text-[#4d78ff]">
                know about?
              </span>
            </h1>

            <div className="mt-10 flex justify-center">
              <a
                href="#plans"
                className="group inline-flex items-center gap-3.5 rounded-full bg-[#F2F1EE] pl-7 pr-3 py-3 font-mono text-xs font-semibold text-zinc-950 transition-all duration-200 hover:bg-white hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start here</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-white transition-transform duration-200 group-hover:translate-y-0.5 group-hover:translate-x-0.5">
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 7l10 10M17 7v10H7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ─── Plans Grid Section ─── */}
        <section
          id="plans"
          aria-labelledby="plans-heading"
          className="border-b border-white/10 px-6 py-20 sm:px-10 lg:py-28"
        >
          <div className="mx-auto max-w-6xl">
            {/* Header row: Choose your plan */}
            <div className="flex flex-col justify-between gap-3 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
              <h2
                id="plans-heading"
                className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F1EE]"
              >
                Choose your plan.
              </h2>
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                Start from $5, or find your custom fit.
              </p>
            </div>

            {/* Two Cards Grid */}
            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* ─── Card 1: Starter ─── */}
              <div className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0e0e12] transition-colors duration-200 hover:border-white/20">
                {/* Card Header Block (Dark Olive/Green Tint) */}
                <div className="border-b border-white/10 bg-gradient-to-b from-[#182119] via-[#121713] to-[#0e0e12]/95 p-8 sm:p-10">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xl text-[#8bb68b]" aria-hidden="true">
                        ✳
                      </span>
                      <h3 className="font-display text-2xl font-bold tracking-tight text-[#F2F1EE]">
                        Starter
                      </h3>
                    </div>
                    <span className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-zinc-300">
                      A good place to start
                    </span>
                  </div>

                  <p className="mt-4 font-mono text-xs leading-relaxed text-zinc-400">
                    For independent minds ready to make a start.
                  </p>

                  <div className="mt-10">
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                      From
                    </span>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-display text-5xl sm:text-6xl font-extrabold tracking-tight text-[#F2F1EE]">
                        $5
                      </span>
                      <span className="font-mono text-xs text-zinc-400">
                        / month
                      </span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/#contact"
                      className="group flex w-full items-center justify-between bg-[#F2F1EE] px-6 py-4 font-mono text-xs font-bold uppercase tracking-wider text-zinc-950 transition-all duration-200 hover:bg-[#2A53E7] hover:text-white active:scale-[0.99] cursor-pointer"
                    >
                      <span>Start creating</span>
                      <ArrowUpRightIcon />
                    </Link>
                    <span className="mt-3 block text-center font-mono text-[11px] tracking-wide text-zinc-500">
                      USD • Monthly billing
                    </span>
                  </div>
                </div>

                {/* Card Features Block */}
                <div className="flex flex-1 flex-col justify-between p-8 sm:p-10">
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                      A little of what&apos;s possible
                    </h4>
                    <ul className="mt-6 space-y-4">
                      {STARTER_FEATURES.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 font-mono text-xs text-zinc-300"
                        >
                          <CheckIcon />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10 border-t border-white/10 pt-4">
                    <p className="font-mono text-xs text-zinc-500">
                      Your first step towards something bigger.
                    </p>
                  </div>
                </div>
              </div>

              {/* ─── Card 2: Custom ─── */}
              <div className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0e0e12] transition-colors duration-200 hover:border-white/20">
                {/* Card Header Block (Dark Mauve/Rose Tint) */}
                <div className="border-b border-white/10 bg-gradient-to-b from-[#2a1a23] via-[#1c141a] to-[#0e0e12]/95 p-8 sm:p-10">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xl text-[#d49aa5]" aria-hidden="true">
                        ✦
                      </span>
                      <h3 className="font-display text-2xl font-bold tracking-tight text-[#F2F1EE]">
                        Custom
                      </h3>
                    </div>
                    <span className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-zinc-300">
                      Built around you
                    </span>
                  </div>

                  <p className="mt-4 font-mono text-xs leading-relaxed text-zinc-400">
                    For bigger ambitions and a different kind of brief.
                  </p>

                  <div className="mt-10">
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                      Your vision. Your way.
                    </span>
                    <div className="mt-1 font-display text-5xl sm:text-6xl font-extrabold tracking-tight text-[#F2F1EE]">
                      Let&apos;s talk.
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/#contact"
                      className="group flex w-full items-center justify-between bg-[#eed3c4] px-6 py-4 font-mono text-xs font-bold uppercase tracking-wider text-zinc-950 transition-all duration-200 hover:bg-[#2A53E7] hover:text-white active:scale-[0.99] cursor-pointer"
                    >
                      <span>Contact us</span>
                      <ArrowUpRightIcon />
                    </Link>
                    <span className="mt-3 block text-center font-mono text-[11px] tracking-wide text-zinc-500">
                      A plan and price shaped around your needs
                    </span>
                  </div>
                </div>

                {/* Card Features Block */}
                <div className="flex flex-1 flex-col justify-between p-8 sm:p-10">
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                      Let&apos;s figure it out together
                    </h4>
                    <ul className="mt-6 space-y-4">
                      {CUSTOM_FEATURES.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 font-mono text-xs text-zinc-300"
                        >
                          <CheckIcon />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10 border-t border-white/10 pt-4">
                    <p className="font-mono text-xs text-zinc-500">
                      Some ideas don&apos;t fit inside a box. We get it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Bottom Sub-bar from mockup ─── */}
        <section className="border-t border-white/10 px-6 py-8 sm:px-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="font-newsreader text-base italic text-zinc-400">
              One small team.
            </p>
            <p className="font-mono text-xs tracking-wider text-zinc-500">
              Something you can keep
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
