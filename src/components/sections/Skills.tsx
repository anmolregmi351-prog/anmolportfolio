import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TiltCard } from "@/components/shared/TiltCard";
import { skillCategories, skills, type SkillCategory } from "@/content/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  const [tab, setTab] = useState<SkillCategory>("Programming");
  const visible = skills.filter((s) => s.category === tab);

  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading eyebrow="// stack" title="Tools I actually use." />
        </Reveal>

        <div className="mb-10 flex flex-wrap gap-2">
          {skillCategories.map((c) => (
            <button
              key={c}
              data-cursor="hover"
              onClick={() => setTab(c)}
              className={cn(
                "relative font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-[var(--border-hairline)] transition-colors",
                tab === c
                  ? "text-[var(--text-primary)] bg-[var(--bg-tertiary)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
              )}
            >
              {tab === c && (
                <motion.span
                  layoutId="skillUnderline"
                  className="absolute -bottom-px left-3 right-3 h-[2px] aurora-bg rounded-full"
                />
              )}
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {visible.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.04}>
                <TiltCard maxTilt={6}>
                  <div className="glass rounded-[var(--radius-md)] p-6 hover:shadow-[var(--shadow-glow-purple)] transition-shadow group hover:-translate-y-1 duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display font-semibold text-lg">{s.name}</h3>
                      <span className="text-mono-label text-[var(--text-secondary)]">{s.level}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-[var(--bg-tertiary)] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="h-full aurora-bg"
                      />
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
