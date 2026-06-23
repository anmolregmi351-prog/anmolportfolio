import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useTheme } from "@/components/theme-provider";
import {
  Home,
  User,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Download,
  Copy,
  Moon,
  Sun,
  FileText,
  Star,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from "@/components/icons/Socials";
import { navSections, socials } from "@/content/nav";

export function CommandPaletteTrigger() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        data-cursor="hover"
        className="hidden md:inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-[var(--text-secondary)] hover:shadow-[var(--shadow-glow-blue)] transition-shadow"
      >
        <span className="font-mono">⌘K</span>
      </button>
      <CommandPalette open={open} setOpen={setOpen} />
    </>
  );
}

function CommandPalette({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const { setTheme } = useTheme();

  const navigate = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const navIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    home: Home,
    about: User,
    skills: Star,
    projects: Code,
    experience: Briefcase,
    education: GraduationCap,
    achievements: Award,
    blog: FileText,
    contact: Mail,
  };

  return (
    <AnimatePresence>
      {open && (
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search…" />
          <CommandList>
            <CommandEmpty>No results.</CommandEmpty>
            <CommandGroup heading="Navigate">
              {navSections.map((s) => {
                const Icon = navIcons[s.id] ?? Home;
                return (
                  <CommandItem key={s.id} onSelect={() => navigate(s.id)}>
                    <Icon className="mr-2 h-4 w-4" />
                    {s.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Theme">
              <CommandItem onSelect={() => { setTheme("dark"); setOpen(false); }}>
                <Moon className="mr-2 h-4 w-4" /> Dark mode
              </CommandItem>
              <CommandItem onSelect={() => { setTheme("light"); setOpen(false); }}>
                <Sun className="mr-2 h-4 w-4" /> Light mode
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Social">
              <CommandItem onSelect={() => window.open(socials.github, "_blank")}>
                <GithubIcon className="mr-2 h-4 w-4" /> GitHub
              </CommandItem>
              <CommandItem onSelect={() => window.open(socials.linkedin, "_blank")}>
                <LinkedinIcon className="mr-2 h-4 w-4" /> LinkedIn
              </CommandItem>
              <CommandItem onSelect={() => window.open(socials.instagram, "_blank")}>
                <InstagramIcon className="mr-2 h-4 w-4" /> Instagram
              </CommandItem>
              <CommandItem onSelect={() => window.open(socials.whatsapp, "_blank")}>
                <WhatsappIcon className="mr-2 h-4 w-4" /> WhatsApp
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Actions">
              <CommandItem onSelect={() => { window.open("/resume.pdf", "_blank"); setOpen(false); }}>
                <Download className="mr-2 h-4 w-4" /> Download résumé
              </CommandItem>
              <CommandItem onSelect={() => { navigator.clipboard.writeText(socials.email); setOpen(false); }}>
                <Copy className="mr-2 h-4 w-4" /> Copy email
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      )}
    </AnimatePresence>
  );
}
