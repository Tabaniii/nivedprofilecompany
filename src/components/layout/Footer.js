"use client";

import Link from "next/link";
import { NivedBrandBanner } from "./NivedBrandBanner";

/**
 * Modern dark-themed footer inspired by TRAE design aesthetic,
 * customized for startup brand "nived".
 */
export function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navColumns = [
    {
      title: "Terms",
      links: [
        { label: "Terms of Service", href: "#terms" },
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Cookie Policy", href: "#cookies" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Docs", href: "#docs" },
        { label: "Blog", href: "#blog" },
        { label: "Changelog", href: "#changelog" },
        { label: "Status", href: "#status" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Feedback", href: "#feedback" },
        { label: "Discord", href: "https://discord.com", external: true },
        { label: "Reddit", href: "https://reddit.com", external: true },
        { label: "X (Twitter)", href: "https://x.com", external: true },
        { label: "GitHub", href: "https://github.com", external: true },
      ],
    },
  ];

  return (
    <footer
      id="contact"
      aria-label="Footer"
      className="relative w-full bg-[#050505] text-white selection:bg-[#30E391]/20 selection:text-[#30E391] border-t border-white/[0.08] overflow-hidden"
    >
      {/* 1. Pre-Footer Call to Action (CTA) */}
      <section
        aria-label="Get Started Banner"
        className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 border-b border-white/[0.08]"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 lg:gap-12">
          {/* Left: Big bold headline + subheading */}
          <div className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Get Started with nived
            </h2>
            <p className="mt-2.5 sm:mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-zinc-400 tracking-tight">
              Try it for Free
            </p>
          </div>

          {/* Right: High-contrast neon green accent button */}
          <div className="flex items-center shrink-0">
            <a
              href="#download"
              id="cta-download-btn"
              className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#30E391] hover:bg-[#3bf59e] text-[#050505] font-bold text-sm sm:text-base tracking-tight transition-all duration-300 shadow-[0_0_24px_rgba(48,227,145,0.25)] hover:shadow-[0_0_35px_rgba(48,227,145,0.45)] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#30E391] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
            >
              {/* Apple / OS icon */}
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                viewBox="0 0 170 170"
                aria-hidden="true"
              >
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.08-7.6-7.8-11.71-14.15-5.91-9.15-10.42-19.67-13.53-31.57-3.11-11.9-4.67-23.17-4.67-33.8 0-14.54 3.65-26.79 10.96-36.75 7.31-9.96 16.59-15.02 27.84-15.18 4.91 0 10.58 1.41 17.02 4.23 6.43 2.82 10.44 4.3 12.02 4.43 1.34 0 5.46-1.57 12.35-4.71 6.89-3.14 12.59-4.52 17.1-4.14 12.54 1.07 22.42 5.92 29.64 14.55-10.96 6.64-16.33 15.82-16.1 27.53.22 9.25 3.82 17.06 10.79 23.44 6.97 6.38 15.22 10.15 24.76 11.31-2.23 6.97-5.04 13.6-8.42 19.88zM119.22 33.15c0-7.23 2.65-13.97 7.95-20.21 5.3-6.24 11.79-10.3 19.46-12.18.33 1.22.49 2.37.49 3.44 0 7.12-2.8 14.03-8.4 20.73-5.61 6.7-12.35 10.76-20.23 12.18-.33-1.34-.5-2.66-.5-3.96z" />
              </svg>
              <span>Download nived</span>
              {/* Right Arrow Icon */}
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Middle Navigation Directory Grid */}
      <section
        aria-label="Navigation Directory"
        className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo & Identity (Takes 2 cols on desktop) */}
          <div className="col-span-2 flex flex-col justify-between pr-0 md:pr-6">
            <div className="flex flex-col gap-4">
              {/* Minimalist nived Logo Badge matching TRAE aesthetic */}
              <Link
                href="#top"
                className="group inline-flex items-center gap-3 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#30E391] rounded-lg p-1 -m-1"
                aria-label="nived home"
              >
                {/* Sleek cyber pixel badge */}
                <div className="relative w-9 h-9 rounded-xl bg-zinc-900 border border-white/15 flex items-center justify-center transition-all duration-300 group-hover:border-[#30E391]/80 group-hover:shadow-[0_0_15px_rgba(48,227,145,0.3)]">
                  <div className="w-4 h-4 rounded-md bg-[#30E391] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-sm bg-black" />
                  </div>
                </div>
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                  nived
                </span>
              </Link>

              <p className="text-sm text-zinc-400 font-normal leading-relaxed max-w-sm">
                Next-generation digital studio powering intelligent web systems,
                smart connected hardware ecosystems, and autonomous business workflows.
              </p>
            </div>

            {/* System Status Pill */}
            <div className="mt-6 md:mt-8 flex items-center gap-2.5 text-xs text-zinc-400 font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#30E391] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#30E391]" />
              </span>
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Directory Columns: Terms, Resources, Connect */}
          {navColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3.5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-flex text-sm font-normal text-zinc-400 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:text-[#30E391]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Sub-footer Utility Bar */}
      <section
        aria-label="Footer Utilities"
        className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6 border-t border-white/[0.08]"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-normal">
          {/* Left: Copyright & Trust Badge */}
          <div className="flex items-center gap-2.5 order-2 sm:order-1">
            <span>© 2026 nived</span>
            <span className="text-zinc-600">•</span>
            <div className="inline-flex items-center gap-1.5 text-zinc-300">
              {/* Shield Icon */}
              <svg
                className="w-3.5 h-3.5 text-[#30E391]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>SOC 2 Certified</span>
            </div>
          </div>

          {/* Center: Social Media Icons */}
          <div className="flex items-center gap-4 order-1 sm:order-2">
            {/* X (Twitter) */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow nived on X"
              className="text-zinc-400 hover:text-white hover:scale-110 transition-all duration-200 p-1"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Discord */}
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join nived Discord"
              className="text-zinc-400 hover:text-white hover:scale-110 transition-all duration-200 p-1"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>

            {/* Reddit */}
            <a
              href="https://reddit.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit nived Reddit"
              className="text-zinc-400 hover:text-white hover:scale-110 transition-all duration-200 p-1"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.609a1.246 1.246 0 0 1 1.108-.695zM8.94 11.236a1.32 1.32 0 0 0-1.32 1.32 1.32 1.32 0 0 0 1.32 1.32 1.32 1.32 0 0 0 1.32-1.32 1.32 1.32 0 0 0-1.32-1.32zm6.12 0a1.32 1.32 0 0 0-1.32 1.32 1.32 1.32 0 0 0 1.32 1.32 1.32 1.32 0 0 0 1.32-1.32 1.32 1.32 0 0 0-1.32-1.32zm-6.074 4.195a.417.417 0 0 0-.294.712c1.033 1.033 2.54 1.096 3.308 1.096.768 0 2.275-.063 3.308-1.096a.417.417 0 0 0-.59-.59c-.777.777-1.93.856-2.718.856-.788 0-1.94-.079-2.718-.856a.412.412 0 0 0-.296-.122z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit nived on GitHub"
              className="text-zinc-400 hover:text-white hover:scale-110 transition-all duration-200 p-1"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>

          {/* Right: Back to top link */}
          <div className="order-3">
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:text-[#30E391]"
            >
              <span>Back to top</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* 4. Bottom Massive Brand Graphic (Signature TRAE Element) */}
      <section aria-label="Brand Banner" className="w-full">
        <NivedBrandBanner />
      </section>
    </footer>
  );
}

export default Footer;
