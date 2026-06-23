import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { testimonials } from "@/content/testimonials";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  const t = testimonials[i];

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 px-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading
            eyebrow="// testimonials"
            title="What people say."
            align="center"
          />
        </Reveal>

        <div className="relative h-[280px] md:h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <div className="glass rounded-[var(--radius-lg)] p-10 h-full relative overflow-hidden">
                <Quote className="absolute top-4 right-6 h-24 w-24 text-[var(--accent-2)] opacity-10" />
                <p className="text-body-l italic text-[var(--text-primary)] relative">
                  "{t.quote}"
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full aurora-bg text-white font-display font-bold ring-2 ring-[var(--accent-2)]/40">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-display font-semibold">{t.name}</p>
                    <p className="text-mono-label text-[var(--text-secondary)]">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Show testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              data-cursor="hover"
              className={cn(
                "h-1.5 rounded-full transition-all",
                idx === i ? "w-8 aurora-bg" : "w-1.5 bg-[var(--text-secondary)]/40",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
