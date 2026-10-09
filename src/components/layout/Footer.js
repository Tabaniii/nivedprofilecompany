import { profile } from "@/lib/data/profile";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-zinc-200/80 bg-zinc-50/50 py-12 dark:border-zinc-800/80 dark:bg-zinc-950/50">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <a
              href="#top"
              className="text-lg font-bold tracking-tight text-foreground transition-opacity hover:opacity-80 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={`${profile.name} - Back to top`}
            >
              {profile.name}
              <span className="text-blue-500">.</span>
            </a>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {profile.title} · {profile.location}
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {profile.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="min-h-[44px] inline-flex items-center text-sm font-medium text-zinc-600 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-100 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {profile.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:text-foreground dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label={social.name}
              >
                {social.name === "GitHub" && (
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                )}
                {social.name === "LinkedIn" && (
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                )}
                {social.name === "Twitter / X" && (
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                )}
                {social.name === "Email" && (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="mt-8 pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60 text-center">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            © {currentYear} {profile.name}. All rights reserved. Crafted with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </Container>
    </footer>
  );
}
