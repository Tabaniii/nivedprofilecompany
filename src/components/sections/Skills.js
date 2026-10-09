import { skillCategories } from "@/lib/data/skills";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-20 md:py-28 border-t border-zinc-200/60 dark:border-zinc-850/60"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <Badge variant="brand" size="md" className="mb-3">
            Capabilities &amp; Tech Stack
          </Badge>
          <h2
            id="skills-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Technical Expertise
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            A comprehensive overview of languages, frameworks, databases, and DevOps tools I work with daily.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.name} className="flex flex-col h-full">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground tracking-tight">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {category.description}
                </p>
              </div>

              {/* Skills Pill List */}
              <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-zinc-50/80 px-3 py-1.5 text-xs font-medium text-zinc-800 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-200 dark:hover:border-zinc-700"
                  >
                    <span>{skill.name}</span>
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-500">
                      • {skill.level}
                    </span>
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
