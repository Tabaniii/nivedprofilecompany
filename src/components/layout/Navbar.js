"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { profile } from "@/lib/data/profile";

const cell =
  "flex h-full items-center justify-center border-l border-white/10 text-[#F2F1EE] transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2A53E7]";

const TAPE_CLIP =
  "polygon(0 10%, 4% 0, 50% 6%, 96% 0, 100% 10%, 97% 30%, 100% 50%, 97% 70%, 100% 90%, 96% 100%, 50% 94%, 4% 100%, 0 90%, 3% 70%, 0 50%, 3% 30%)";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.27 5.33A16.6 16.6 0 0 0 15.1 4l-.2.4a15.3 15.3 0 0 1 3.7 1.2 14.2 14.2 0 0 0-13.2 0A15.3 15.3 0 0 1 9.1 4.4L8.9 4a16.6 16.6 0 0 0-4.17 1.33C2.1 9.2 1.4 13 1.75 16.75A16.8 16.8 0 0 0 6.85 19.3l1.1-1.5a10.8 10.8 0 0 1-1.7-.82l.42-.32a11.9 11.9 0 0 0 10.66 0l.42.32c-.54.32-1.1.6-1.7.82l1.1 1.5a16.8 16.8 0 0 0 5.1-2.55c.42-4.35-.7-8.12-2.98-11.42ZM8.5 14.5c-1 0-1.8-.92-1.8-2.05S7.5 10.4 8.5 10.4s1.82.93 1.8 2.05c0 1.13-.8 2.05-1.8 2.05Zm7 0c-1 0-1.8-.92-1.8-2.05s.8-2.05 1.8-2.05 1.82.93 1.8 2.05c0 1.13-.8 2.05-1.8 2.05Z" />
    </svg>
  );
}

function ThemeIcon({ dark }) {
  return dark ? (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const closeMenu = () => setIsOpen(false);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0e0e12]/95 backdrop-blur-md">
      <nav
        className="relative flex h-14 items-stretch"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex w-[72px] shrink-0 items-center justify-center border-r border-white/10 transition-colors hover:bg-white/5"
          aria-label={`${profile.name} - Home`}
        >
          <Image
            src="/Flowing line.svg"
            alt=""
            width={42}
            height={29}
            priority
          />
        </Link>

        <div className="relative flex flex-1 items-center">
          <ul className="hidden items-center gap-4 px-5 xl:flex 2xl:gap-7">
            {profile.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="py-1.5 font-mono text-[11px] uppercase tracking-wide text-zinc-300 transition-colors hover:text-white 2xl:text-xs"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span
              style={{ clipPath: TAPE_CLIP }}
              className="block -rotate-2 bg-[#F2F1EE] px-8 py-1.5 font-mono text-xs font-bold tracking-widest text-zinc-950"
            >
              {profile.name.toUpperCase()}
            </span>
          </div>
        </div>

        <div className="flex items-stretch">
          <a
            href={profile.community.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`${cell} hidden w-14 sm:flex`}
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href={profile.community.discord}
            target="_blank"
            rel="noopener noreferrer"
            className={`${cell} hidden w-14 sm:flex`}
            aria-label="Discord"
          >
            <DiscordIcon />
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className={`${cell} w-14`}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <ThemeIcon dark={isDark} />
          </button>
          <a
            href="/#contact"
            className="hidden items-center bg-[#F2F1EE] px-10 font-mono text-xs font-bold uppercase tracking-wide text-zinc-950 transition-all duration-200 hover:bg-[#2A53E7] hover:text-white active:bg-[#1f42c2] active:text-white active:scale-[0.98] md:flex cursor-pointer"
          >
            Contact Us
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`${cell} w-14 xl:hidden`}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-[#0e0e12] xl:hidden"
        >
          <ul className="flex flex-col">
            {profile.navLinks.map((link) => (
              <li key={link.href} className="border-b border-white/10">
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="flex min-h-[48px] items-center px-6 font-mono text-xs uppercase tracking-wider text-zinc-300 transition-colors hover:bg-white/5 hover:text-[#F2F1EE]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="md:hidden">
              <a
                href="/#contact"
                onClick={closeMenu}
                className="flex min-h-[48px] items-center justify-center bg-[#F2F1EE] font-mono text-xs font-semibold uppercase tracking-wider text-zinc-950 transition-all duration-200 hover:bg-[#2A53E7] hover:text-white active:bg-[#1f42c2] active:text-white active:scale-[0.98] cursor-pointer"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
