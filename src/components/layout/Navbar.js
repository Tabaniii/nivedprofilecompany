"use client";

import { useState } from "react";
import Link from "next/link";
import { profile } from "@/lib/data/profile";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="w-full max-w-4xl pointer-events-auto">
        <nav
          className="flex items-center justify-between rounded-full border border-white/10 bg-zinc-950/70 px-5 py-2.5 shadow-xl shadow-black/40 backdrop-blur-xl transition-all duration-300"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="#top"
            className="group flex items-center gap-2.5 rounded-full py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label={`${profile.name} - Home`}
          >
            <div className="relative flex h-8 w-8 items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/logofix.svg"
                alt={`${profile.name} Logo`}
                width={32}
                height={32}
                className="h-full w-full object-contain drop-shadow-sm"
                priority
              />
            </div>
            <span className="text-sm font-semibold tracking-tight text-white transition-colors">
              {profile.name}
              <span className="text-blue-400">.</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {profile.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center px-3.5 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:text-white rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action / Contact Button */}
          <div className="hidden md:flex items-center">
            <Button
              href="#contact"
              size="sm"
              className="rounded-full bg-white text-zinc-950 hover:bg-zinc-200 font-semibold text-xs px-4 py-1.5 shadow-xs"
            >
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 p-1.5 text-zinc-300 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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
        </nav>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-2 rounded-2xl border border-white/10 bg-zinc-950/95 p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col gap-1">
              {profile.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex min-h-[40px] items-center rounded-xl px-4 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10 mt-1">
                <Button
                  href="#contact"
                  size="md"
                  className="w-full rounded-xl bg-white text-black hover:bg-zinc-200 font-semibold text-xs"
                  onClick={closeMenu}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
