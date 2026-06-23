import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { experience } from "@/content/experience";
import { GlassCard } from "@/components/shared/GlassCard";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-6 bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading eyebrow="// experience" title="Where I've been building." />
        </Reveal>

        <div className="relative">
          {/* Center spine */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[var(--border-hairline)]">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ originY: 0 }}
              className="absolute inset-0 aurora-bg opacity-60"
            />
          </div>

          <div className="flex flex-col gap-12">
            {experience.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={e.org}>
                  <div
                    className={cn(
                      "relative grid md:grid-cols-2 gap-6",
                      "md:items-start",
                    )}
                  >
                    {/* Dot */}
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: [0, 1.3, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 h-3 w-3 rounded-full aurora-bg ring-4 ring-[var(--bg-secondary)] z-10"
                    />
                    <div className={cn(left ? "md:pr-12" : "md:col-start-2 md:pl-12")}>
                      <GlassCard className="p-6 md:p-8" glow={left ? "blue" : "purple"}>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h3 className="font-display font-semibold text-xl">{e.position}</h3>
                            <p className="font-mono text-sm text-[var(--text-secondary)]">{e.org}</p>
                          </div>
                          <span className="text-mono-label glass rounded-full px-2.5 py-1 whitespace-nowrap">
                            {e.duration}
                          </span>
                        </div>
                        <ul className="mt-4 space-y-2 text-[var(--text-secondary)] text-sm">
                          {e.responsibilities.map((r) => (
                            <li key={r} className="flex gap-2">
                              <span className="text-[var(--accent-2)] mt-1">›</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                        {e.achievements && (
                          <div className="mt-4 border-l-2 pl-3 py-1 border-[var(--accent-success)] bg-[var(--accent-success)]/5 rounded-r-md">
                            {e.achievements.map((a) => (
                              <p key={a} className="text-xs font-mono text-[var(--text-primary)]">
                                ★ {a}
                              </p>
                            ))}
                          </div>
                        )}
                      </GlassCard>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
