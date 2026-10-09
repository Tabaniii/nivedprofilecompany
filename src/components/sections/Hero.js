import Image from "next/image";
import { profile } from "@/lib/data/profile";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 -z-10 h-[360px] w-[600px] max-w-full rounded-full bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-teal-400/15 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Main Info Column */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-7">
            {/* Availability status badge */}
            <div className="mb-6 flex items-center gap-2">
              <Badge variant="success" size="md" className="gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {profile.availability.status}
              </Badge>
            </div>

            {/* Single <h1> for the entire page */}
            <h1
              id="hero-heading"
              className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                {profile.name}
              </span>
              <br />
              {profile.title}
            </h1>

            {/* Subtitle / Tagline */}
            <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
              {profile.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Button href="#projects" variant="primary" size="lg">
                View Featured Work
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Get in Touch
              </Button>
            </div>

            {/* Quick stats row */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center lg:items-start">
                  <span className="text-2xl font-bold tracking-tight text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Visual Column */}
          <div className="flex justify-center lg:justify-end lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative gradient frame */}
              <div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-teal-400 opacity-30 blur-lg transition duration-500 group-hover:opacity-60"
                aria-hidden="true"
              />
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full border-4 border-background bg-zinc-100 p-2 shadow-2xl dark:bg-zinc-900">
                <Image
                  src={profile.avatar}
                  alt={`${profile.name} profile portrait`}
                  width={320}
                  height={320}
                  priority
                  className="h-full w-full rounded-full object-cover"
                />
              </div>

              {/* Floating tech badge */}
              <div className="absolute -bottom-2 right-4 rounded-xl border border-zinc-200 bg-background/90 px-4 py-2 shadow-lg backdrop-blur-md dark:border-zinc-800">
                <p className="text-xs font-semibold text-foreground">
                  📍 {profile.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
