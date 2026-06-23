import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { stats, badges } from "@/content/achievements";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { GlassCard } from "@/components/shared/GlassCard";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32 px-6 bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading eyebrow="// achievements" title="Numbers and named recognition." />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <GlassCard className="p-8 text-center" glow="cyan">
                <p className="text-display-l aurora-text font-bold">
                  <AnimatedCounter to={s.value} suffix={s.suffix} />
                </p>
                <p className="text-mono-label text-[var(--text-secondary)] mt-2">{s.label}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: [0.85, 1.05, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <GlassCard className="p-5 flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-md aurora-bg text-white shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm">{b.title}</p>
                  <p className="text-mono-label text-[var(--text-secondary)] mt-1">
                    {b.org} · {b.year}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
