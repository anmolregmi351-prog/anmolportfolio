import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { education } from "@/content/education";
import { TiltCard } from "@/components/shared/TiltCard";
import { cn } from "@/lib/utils";

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading eyebrow="// education" title="The path so far — and ahead." />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.05}>
              <TiltCard maxTilt={6}>
                <div
                  className={cn(
                    "glass rounded-[var(--radius-md)] p-6 h-full flex flex-col gap-3 transition-all hover:-translate-y-1",
                    e.status === "upcoming" && "border-dashed",
                  )}
                  style={
                    e.status === "upcoming"
                      ? { borderStyle: "dashed", borderColor: "var(--accent-2)" }
                      : undefined
                  }
                >
                  <div className="flex items-center justify-between">
                    <span className="text-mono-label aurora-text">{e.duration}</span>
                    <span
                      className={cn(
                        "text-mono-label px-2 py-0.5 rounded-full",
                        e.status === "current" && "bg-[var(--accent-success)]/15 text-[var(--accent-success)]",
                        e.status === "completed" && "bg-[var(--bg-tertiary)] text-[var(--text-secondary)]",
                        e.status === "upcoming" && "bg-[var(--accent-2)]/15 text-[var(--accent-2)]",
                      )}
                    >
                      {e.status}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg leading-tight">{e.title}</h3>
                  <p className="text-mono-label text-[var(--text-secondary)]">{e.org}</p>
                  <p className="text-sm text-[var(--text-secondary)] mt-auto">{e.description}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
