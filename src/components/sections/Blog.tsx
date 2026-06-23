import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { blogPosts } from "@/content/blog";
import { GlassCard } from "@/components/shared/GlassCard";
import { Clock, ArrowUpRight } from "lucide-react";

export function Blog() {
  return (
    <section id="blog" className="relative py-24 md:py-32 px-6 bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="// writing"
            title="Notes from the build."
            description="Working notes from shipping products and choosing a path between founding and engineering."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <a
                href="#"
                data-cursor="hover"
                className="group block"
              >
                <GlassCard className="relative overflow-hidden h-full p-0">
                  <div className="absolute inset-x-0 top-0 h-[2px] aurora-bg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative aspect-video aurora-bg opacity-80">
                    <span className="absolute top-3 left-3 text-mono-label glass rounded-full px-2.5 py-1">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-lg leading-snug group-hover:aurora-text transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] mt-3">{p.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between text-mono-label text-[var(--text-secondary)]">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3 w-3" /> {p.readTime}
                      </span>
                      <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </GlassCard>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
