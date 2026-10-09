import Image from "next/image";
import { projects } from "@/lib/data/projects";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 md:py-28 border-t border-zinc-200/60 dark:border-zinc-850/60 bg-zinc-50/40 dark:bg-zinc-950/20"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <Badge variant="brand" size="md" className="mb-3">
            Selected Portfolio
          </Badge>
          <h2
            id="projects-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Featured Projects
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            A curation of real-world applications engineered with modern technologies, scalable architecture, and thoughtful UX.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col overflow-hidden p-0 border border-zinc-200/90 dark:border-zinc-800"
            >
              {/* Project Visual / Image Preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200/80 dark:border-zinc-800">
                <Image
                  src={project.image}
                  alt={`${project.title} interface preview`}
                  width={800}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-md shadow-xs border border-zinc-200/60 dark:border-zinc-700/60">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Project Body */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="mb-2">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics Highlight */}
                {project.metrics && project.metrics.length > 0 && (
                  <ul className="mt-4 space-y-1.5 border-t border-zinc-100 pt-3 dark:border-zinc-800/80">
                    {project.metrics.map((metric) => (
                      <li
                        key={metric}
                        className="flex items-center gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="neutral" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Links / Action Bar */}
                <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-3">
                  <Button
                    href={project.liveUrl}
                    variant="primary"
                    size="sm"
                    className="flex-1"
                  >
                    Live Demo
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </Button>
                  <Button
                    href={project.githubUrl}
                    variant="outline"
                    size="sm"
                    aria-label={`Source code for ${project.title}`}
                  >
                    GitHub
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
