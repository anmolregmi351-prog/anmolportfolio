import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("anmol-loaded")) {
      setVisible(false);
      return;
    }
    const t = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("anmol-loaded", "1");
    }, 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[var(--bg-primary)]"
        >
          <div className="flex flex-col items-center gap-6">
            <svg viewBox="0 0 100 100" className="h-24 w-24">
              <defs>
                <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#007ACC" />
                  <stop offset="50%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
              <motion.path
                d="M20 85 L50 15 L80 85 M32 60 L68 60"
                fill="none"
                stroke="url(#lg)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>
            <div className="h-[2px] w-40 overflow-hidden rounded-full bg-[var(--bg-tertiary)]">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="h-full w-full aurora-bg"
              />
            </div>
            <p className="text-mono-label text-[var(--text-secondary)]">INITIALIZING…</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
