import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { GradientText } from "@/components/shared/GradientText";
import { ArrowRight, Download } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const ConstellationOrb = lazy(() =>
  import("@/components/three/ConstellationOrb").then((m) => ({ default: m.ConstellationOrb })),
);

const fullHeadline = "Entrepreneur | Future Software Engineer | Startup Builder";

function useTyped(text: string, speed = 45, enabled = true) {
  const [out, setOut] = useState(enabled ? "" : text);
  useEffect(() => {
    if (!enabled) {
      setOut(text);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, enabled]);
  return out;
}

export function Hero() {
  const reduced = useReducedMotion();
  const typed = useTyped(fullHeadline, 38, !reduced);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [spot, setSpot] = useState({ x: 0.5, y: 0.5 });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  function onMove(e: React.MouseEvent) {
    const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    setMouse({ x: nx, y: ny });
    setSpot({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
  }

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      onMouseMove={onMove}
      className="relative min-h-screen w-full overflow-hidden pt-32 pb-16 px-6"
      style={{
        background: `radial-gradient(900px circle at ${spot.x * 100}% ${spot.y * 100}%, color-mix(in oklab, var(--accent-1) 10%, transparent), transparent 60%)`,
      }}
    >
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center min-h-[80vh]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
          }}
          className="relative z-10"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-mono-label inline-flex items-center gap-2 mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-success)] animate-pulse" />
            <span style={{ color: "var(--accent-success)" }}>// available for opportunities</span>
          </motion.p>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-xl"
          >
            <GradientText>Anmol</GradientText>
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-l mt-2 font-mono text-[var(--text-primary)] min-h-[3.2em] md:min-h-[1.6em]"
          >
            {typed}
            <span className="inline-block w-[2px] h-[0.9em] align-middle ml-1 bg-[var(--accent-2)] animate-pulse" />
          </motion.p>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-body-l text-[var(--text-secondary)] mt-6 max-w-xl"
          >
            Passionate about technology, entrepreneurship, and building impactful solutions.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              onClick={() => go("projects")}
              className="aurora-bg text-white hover:shadow-[var(--shadow-glow-purple)]"
            >
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="glass text-[var(--text-primary)] hover:shadow-[var(--shadow-glow-blue)]"
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </MagneticButton>
            <button
              onClick={() => go("contact")}
              data-cursor="hover"
              className="font-mono text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1"
            >
              Contact Me <ArrowRight className="h-3 w-3" />
            </button>
          </motion.div>
        </motion.div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] opacity-30 lg:opacity-100">
          {mounted && !reduced && (
            <Suspense fallback={<div className="h-full w-full rounded-full aurora-bg opacity-10 blur-3xl" />}>
              <ConstellationOrb mouse={mouse} />
            </Suspense>
          )}
          {(reduced || !mounted) && (
            <div className="absolute inset-0 grid place-items-center">
              <div className="h-80 w-80 rounded-full aurora-bg opacity-30 blur-2xl" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
