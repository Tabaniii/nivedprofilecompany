"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { profile } from "@/lib/data/profile";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <Container>
        <nav
          className="flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="#top"
            className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 py-1"
            aria-label={`${profile.name} - Home`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background font-bold text-sm tracking-tight transition-transform duration-200 group-hover:scale-105">
              {profile.name.charAt(0)}
            </span>
            <span className="text-base font-bold tracking-tight text-foreground transition-colors">
              {profile.name}
              <span className="text-blue-500">.</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {profile.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="min-h-[44px] inline-flex items-center px-4 text-sm font-medium text-zinc-600 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-100 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action / Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button href="#contact" variant="primary" size="sm">
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-zinc-200 p-2 text-zinc-700 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-5 w-5"
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
            className="md:hidden mt-3 rounded-2xl border border-zinc-200/80 bg-background/95 p-4 shadow-xl backdrop-blur-xl dark:border-zinc-800/80 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col gap-1">
              {profile.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex min-h-[44px] items-center rounded-xl px-4 text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 mt-1">
                <Button
                  href="#contact"
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={closeMenu}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
