"use client";

import Link from "next/link";

/**
 * Clean, modern, high-density footer for Nived Studio.
 * Features a minimalist, compact layout packed with well-organized navigation links,
 * live system status, trust indicators, and quick social links.
 */
export function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navGroups = [
    {
      title: "Solutions",
      links: [
        { label: "Bespoke Web Platforms", href: "#projects" },
        { label: "Offline-First POS", href: "#projects" },
        { label: "Smart NFC Ecosystems", href: "#skills" },
        { label: "Process Automation", href: "#skills" },
        { label: "Hardware Integration", href: "#about" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Studio", href: "#about" },
        { label: "Capabilities", href: "#skills" },
        { label: "Featured Work", href: "#projects" },
        { label: "Consultation", href: "#contact" },
        { label: "Careers", href: "mailto:nived.labs@gmail.com?subject=Career%20Inquiry", external: true },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#docs" },
        { label: "Case Studies", href: "#projects" },
        { label: "Engineering Blog", href: "#blog" },
        { label: "System Changelog", href: "#changelog" },
        { label: "Live Status", href: "#status" },
      ],
    },
    {
      title: "Legal & Trust",
      links: [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
        { label: "Security & SOC 2", href: "#security" },
        { label: "Cookie Preferences", href: "#cookies" },
      ],
    },
  ];

  return (
    <footer
      aria-label="Footer"
      className="w-full bg-[#09090b] text-white border-t border-zinc-800/80 pt-16 pb-10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Content Grid: Brand (Left) + 4 Link Columns (Right) */}
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-800/60">
          
          {/* Brand & Identity Column */}
          <div className="col-span-2 md:col-span-6 lg:col-span-4 flex flex-col gap-4 pr-0 lg:pr-8">
            <Link
              href="#main-content"
              className="group inline-flex items-center gap-3 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-0.5 -m-0.5"
              aria-label="nived home"
            >
              {/* Minimalist modern logo badge */}
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center transition-colors group-hover:border-blue-500/80">
                <div className="w-3.5 h-3.5 rounded-sm bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-xs bg-black" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                nived
              </span>
            </Link>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Next-generation digital studio powering intelligent web systems, smart connected hardware ecosystems, and autonomous retail workflows.
            </p>

            {/* Live Operational Status Pill */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300 font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>All Systems Operational</span>
              </div>
            </div>
          </div>

          {/* Directory Link Columns (4 columns on desktop) */}
          <div className="col-span-2 md:col-span-6 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {navGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-3.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-sm text-zinc-400 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          {/* Copyright & Security Compliance */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 order-2 sm:order-1 text-center sm:text-left">
            <span>© 2026 Nived Studio. All rights reserved.</span>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <div className="inline-flex items-center gap-1.5 text-zinc-400">
              <svg
                className="w-3.5 h-3.5 text-zinc-400"
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

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4 order-1 sm:order-2">
            <div className="flex items-center gap-3 text-zinc-400">
              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow nived on X"
                className="p-1 text-zinc-400 hover:text-white hover:scale-110 transition-all duration-150"
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
                className="p-1 text-zinc-400 hover:text-white hover:scale-110 transition-all duration-150"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit nived on GitHub"
                className="p-1 text-zinc-400 hover:text-white hover:scale-110 transition-all duration-150"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>

            <div className="h-3.5 w-px bg-zinc-800" />

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-150 group-hover:-translate-y-0.5"
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
      </div>
    </footer>
  );
}

export default Footer;
