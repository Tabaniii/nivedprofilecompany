import Image from "next/image";
import { profile } from "@/lib/data/profile";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 md:py-28 border-t border-zinc-800/60 bg-zinc-950/40"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <Badge variant="brand" size="md" className="mb-3">
            Company Overview
          </Badge>
          <h2
            id="about-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Empowering Physical Retail with Intelligent Systems
          </h2>
        </div>

        {/* Startup Card & Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-6 md:p-8 backdrop-blur-sm">
          <div className="flex justify-center lg:col-span-4">
            <div className="relative group">
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 opacity-25 blur-lg transition duration-500 group-hover:opacity-45"
                aria-hidden="true"
              />
              <div className="relative h-44 w-44 sm:h-52 sm:w-52 rounded-2xl border-2 border-zinc-800 bg-zinc-900/90 p-4 shadow-xl flex flex-col items-center justify-center">
                <Image
                  src={profile.avatar}
                  alt={`${profile.name} Startup Logo`}
                  width={140}
                  height={140}
                  className="h-28 w-28 object-contain rounded-xl"
                />
                <span className="mt-3 text-xs font-semibold text-zinc-300">
                  {profile.fullName}
                </span>
              </div>
              <div className="absolute -bottom-2 right-2 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 shadow-md">
                <p className="text-[11px] font-medium text-zinc-300">
                  📍 {profile.location} · Retail Tech
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-foreground">
              {profile.fullName}
            </h3>
            <p className="text-sm font-medium text-blue-400 mb-3">
              {profile.title}
            </p>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6">
              {profile.bio}
            </p>

            {/* Performance Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-800/80">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-extrabold text-foreground tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-zinc-500 mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Core Pillars matching the brief */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profile.highlights.map((highlight, index) => (
            <Card key={highlight.title} className="flex flex-col h-full border-zinc-800/80 bg-zinc-900/50">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 font-bold text-sm">
                0{index + 1}
              </div>
              <h3 className="text-lg font-semibold text-foreground tracking-tight mb-2">
                {highlight.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mt-auto">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
