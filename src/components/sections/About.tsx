import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import portrait from "@/assets/portrait.jpg";

const blocks = [
  {
    title: "Story",
    body: "I started building because I kept noticing the same gap — useful things that simply weren't being made for the people who needed them. Entrepreneurship gave me the why. Engineering is giving me the how.",
  },
  {
    title: "Goals",
    body: "Near-term: go deep on software engineering — systems, distributed architecture, real product craft. Long-term: keep founding companies that turn that depth into something people actually use.",
  },
  {
    title: "Startup journey",
    body: "Three projects in three different domains — civic tech, agritech, public safety. Each one taught me that the unsexy parts (trust, logistics, latency) are where products actually win or die.",
  },
  {
    title: "Education",
    body: "Currently in Grade 11 with a Science focus, heading toward a Software Engineering degree. Self-directed across web development, Python, and systems fundamentals.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading eyebrow="// about" title="Builder, founder, engineer in progress." />
        </Reveal>
        <div className="grid lg:grid-cols-[400px_1fr] gap-10 lg:gap-16">
          <div className="relative">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <GlassCard className="overflow-hidden p-0 rounded-[var(--radius-lg)]">
                  <img
                    src={portrait}
                    alt="Portrait of Anmol"
                    width={896}
                    height={1152}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </GlassCard>
              </Reveal>
            </div>
          </div>
          <div className="relative pl-6 lg:pl-8 border-l border-[var(--border-hairline)]">
            <div className="absolute left-0 top-0 bottom-0 w-px aurora-bg opacity-40" />
            {blocks.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <div className="relative mb-10">
                  <span className="absolute -left-[34px] top-2 grid h-3 w-3 place-items-center">
                    <span className="absolute inset-0 rounded-full aurora-bg" />
                  </span>
                  <p className="text-mono-label text-[var(--text-secondary)] mb-2">
                    /{(i + 1).toString().padStart(2, "0")} — {b.title}
                  </p>
                  <p className="text-body-l text-[var(--text-primary)]">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
