import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TiltCard } from "@/components/shared/TiltCard";
import { projects } from "@/content/projects";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/Socials";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="// projects"
            title="What I've built so far."
            description="Three projects in three different domains — all of them about connecting two sides that weren't talking to each other."
          />
        </Reveal>

        <div className="flex flex-col gap-10 md:gap-16">
          {projects.map((p, i) => (
            <Reveal key={p.title}>
              <TiltCard maxTilt={4}>
                <div
                  className={cn(
                    "glass rounded-[var(--radius-lg)] overflow-hidden grid md:grid-cols-2 gap-0 group",
                    i % 2 === 1 && "md:[&>*:first-child]:order-2",
                  )}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.title} cover`}
                      width={1280}
                      height={720}
                      loading="lazy"
                      className="h-full w-full object-cover aspect-video group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 aurora-bg mix-blend-overlay" />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <p className="text-mono-label aurora-text mb-3">{p.category}</p>
                    <h3 className="font-display font-semibold text-2xl md:text-3xl mb-4">{p.title}</h3>
                    <p className="text-[var(--text-secondary)] text-body-l mb-6">{p.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-mono-label px-2.5 py-1 rounded-[var(--radius-sm)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="hover"
                        className="inline-flex items-center gap-2 text-sm font-medium hover:aurora-text transition-colors"
                      >
                        <GithubIcon className="h-4 w-4" /> GitHub
                      </a>
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="hover"
                        className="inline-flex items-center gap-2 text-sm font-medium hover:aurora-text transition-colors"
                      >
                        Live Demo <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
