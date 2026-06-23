import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from "@/components/icons/Socials";
import { socials } from "@/content/nav";

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const h = () => setShow(window.scrollY > window.innerHeight);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <footer className="relative z-10 border-t border-[var(--border-hairline)] py-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs font-mono text-[var(--text-secondary)]">
          © {new Date().getFullYear()} ANMOL — BUILT WITH PRECISION.
        </p>
        <div className="flex items-center gap-2">
          {[
            { href: socials.github, Icon: GithubIcon, label: "GitHub" },
            { href: socials.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
            { href: socials.instagram, Icon: InstagramIcon, label: "Instagram" },
            { href: socials.whatsapp, Icon: WhatsappIcon, label: "WhatsApp" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              data-cursor="hover"
              className="glass grid h-9 w-9 place-items-center rounded-full hover:shadow-[var(--shadow-glow-blue)] transition-shadow"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ rotate: 360 }}
            transition={{ rotate: { duration: 0.6 } }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 glass grid h-12 w-12 place-items-center rounded-full hover:shadow-[var(--shadow-glow-purple)] transition-shadow"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
