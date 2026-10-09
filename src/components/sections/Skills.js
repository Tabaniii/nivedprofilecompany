import { skillCategories } from "@/lib/data/skills";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-20 md:py-28 border-t border-zinc-800/60"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <Badge variant="brand" size="md" className="mb-3">
            Our Capabilities
          </Badge>
          <h2
            id="skills-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Smart Hardware &amp; POS Technology Stack
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            An integrated ecosystem combining industrial IoT peripherals, sub-second offline POS software, and continuous data optimization for offline SMBs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.name} className="flex flex-col h-full border-zinc-800/80 bg-zinc-900/50">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground tracking-tight">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-400">
                  {category.description}
                </p>
              </div>

              {/* Skills Pill List */}
              <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-800/60 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-700"
                  >
                    <span>{skill.name}</span>
                    <span className="text-[10px] text-blue-400 font-semibold">
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
