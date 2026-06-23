import { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { navSections } from "@/content/nav";
import { ThemeToggle } from "./ThemeToggle";
import { CommandPaletteTrigger } from "./CommandPalette";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(navSections.map((s) => s.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed left-1/2 top-4 z-50 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl"
      >
        <div
          className={cn(
            "glass rounded-full flex items-center justify-between gap-4 transition-all duration-300",
            scrolled ? "py-2 px-3" : "py-3 px-4",
          )}
        >
          <button
            onClick={() => go("home")}
            data-cursor="hover"
            className="flex items-center gap-2 font-display font-bold text-lg"
            aria-label="Home"
          >
            <span className="grid h-7 w-7 place-items-center rounded-md aurora-bg text-white text-sm">
              A
            </span>
            <span className="hidden sm:inline">Anmol</span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            <LayoutGroup>
              {navSections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => go(s.id)}
                  data-cursor="hover"
                  className={cn(
                    "relative font-mono text-xs uppercase tracking-wider px-3 py-2 rounded-full transition-colors",
                    active === s.id
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
                  )}
                >
                  {active === s.id && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 rounded-full bg-[var(--bg-tertiary)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{s.label}</span>
                </button>
              ))}
            </LayoutGroup>
          </nav>

          <div className="flex items-center gap-2">
            <CommandPaletteTrigger />
            <ThemeToggle />
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              data-cursor="hover"
              className="lg:hidden glass grid h-9 w-9 place-items-center rounded-full"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-[var(--bg-primary)]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-end p-6">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="glass grid h-10 w-10 place-items-center rounded-full"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col items-start gap-2 px-8 pt-8">
              {navSections.map((s, i) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => go(s.id)}
                  className="text-display-l text-left hover:aurora-text"
                >
                  {s.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
