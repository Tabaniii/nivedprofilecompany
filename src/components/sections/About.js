import { profile } from "@/lib/data/profile";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 md:py-28 border-t border-zinc-200/60 dark:border-zinc-850/60 bg-zinc-50/40 dark:bg-zinc-950/20"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <Badge variant="brand" size="md" className="mb-3">
            Background &amp; Philosophy
          </Badge>
          <h2
            id="about-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Engineering with focus on precision and performance
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {profile.bio}
          </p>
        </div>

        {/* Highlight pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profile.highlights.map((highlight, index) => (
            <Card key={highlight.title} className="flex flex-col h-full">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-sm">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold text-foreground tracking-tight mb-2">
                {highlight.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-auto">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
