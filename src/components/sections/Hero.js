import { KeyCharm } from "@/components/ui/KeyCharm";

const SERVICES = [
  "Branding",
  "Websites",
  "Systems",
  "Research",
  "Keyrings",
  "Make it known",
];

function Doodles({ className = "" }) {
  return (
    <svg
      viewBox="0 0 84 74"
      fill="none"
      stroke="#2A53E7"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="22" cy="9" r="4" />
      <path d="M18 10 3 14M8 13l1.5 4" />
      <path d="M66 3l3.5 9.5L79 16l-9.5 3.5L66 29l-3.5-9.5L53 16l9.5-3.5z" />
      <path d="M37 30h9v9M35 35v9h9" />
      <path d="M11 64C1 56 3 47 8 47c2 0 3 1.5 3 3 0-1.5 1-3 3-3 5 0 7 9-3 17z" />
      <path d="M60 51l12-3 2 13-6 8-6-7z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative w-full bg-[#0e0e12] pt-14 text-[#F2F1EE]"
    >
      <div className="border-b border-white/10">
        <div className="mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-6xl flex-col border-x border-white/10">
          <div className="grid flex-1 grid-cols-1 lg:grid-cols-2">
            <div className="relative flex flex-col justify-center px-6 py-16 sm:px-10 lg:py-24">
              <Doodles className="absolute right-6 top-6 w-20 sm:right-10 sm:w-24" />

              <h1
                id="hero-heading"
                className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl"
              >
                A small team that makes things people keep.
              </h1>

              <p className="mt-8 max-w-md font-mono text-sm leading-relaxed text-zinc-400">
                Branding, websites and the systems behind them. Three people,
                one keyring, and a habit of finishing what we clip on, Make It
                known, Everyone will know us.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#F2F1EE] px-6 py-2.5 font-mono text-sm font-medium text-zinc-950 transition hover:bg-white active:scale-[0.98]"
                >
                  Contact US
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border border-[#F2F1EE]/80 px-6 py-2.5 font-mono text-sm font-medium text-[#F2F1EE] transition hover:bg-white/10 active:scale-[0.98]"
                >
                  See what we make
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center border-t border-white/10 px-6 py-16 lg:border-l lg:border-t-0">
              <KeyCharm className="w-full max-w-[300px] lg:max-w-[400px]" />
            </div>
          </div>

          <div className="grid grid-cols-1 border-t border-white/10 font-mono text-xs lg:grid-cols-2">
            <div className="relative flex h-12 items-center overflow-hidden border-b border-white/10 lg:border-b-0">
              <div className="flex w-max animate-marquee motion-reduce:animate-none">
                {[0, 1].map((copy) => (
                  <ul
                    key={copy}
                    aria-hidden={copy === 1}
                    className="flex shrink-0 items-center gap-6 pr-6 uppercase tracking-widest text-zinc-500"
                  >
                    {SERVICES.map((service) => (
                      <li key={service} className="flex items-center gap-6">
                        <span>{service}</span>
                        <span className="text-[#2A53E7]" aria-hidden="true">
                          ✦
                        </span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#0e0e12] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#0e0e12] to-transparent" />
            </div>

            <div className="flex h-12 items-center justify-between gap-4 px-6 sm:px-10 lg:border-l lg:border-white/10">
              <p className="truncate text-zinc-400">
                Nived. We design, create, develop and research.
              </p>
              <p className="shrink-0 font-semibold tracking-wider text-[#F2F1EE]">
                © 2026 NIVED
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
