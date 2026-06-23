import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from "@/components/icons/Socials";
import { socials } from "@/content/nav";
import { Mail, MapPin, Send, Check } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message should be a bit longer"),
});
type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
    } catch {}
    setDone(true);
    toast.success("Message sent — I'll get back to you soon.");
    reset();
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="// contact"
            title="Let's build something."
            description="Recruiters, collaborators, anyone with a hard problem worth solving — say hello."
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <GlassCard className="p-8 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!done ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-5"
                  >
                    <Field label="Name" error={errors.name?.message}>
                      <input
                        {...register("name")}
                        type="text"
                        autoComplete="name"
                        className="input"
                        placeholder="Your name"
                      />
                    </Field>
                    <Field label="Email" error={errors.email?.message}>
                      <input
                        {...register("email")}
                        type="email"
                        autoComplete="email"
                        className="input"
                        placeholder="you@example.com"
                      />
                    </Field>
                    <Field label="Message" error={errors.message?.message}>
                      <textarea
                        {...register("message")}
                        rows={5}
                        className="input resize-none"
                        placeholder="Tell me what you're working on."
                      />
                    </Field>
                    <MagneticButton
                      type="submit"
                      disabled={isSubmitting}
                      className="aurora-bg text-white self-start hover:shadow-[var(--shadow-glow-purple)]"
                    >
                      {isSubmitting ? "Sending…" : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </MagneticButton>
                  </motion.form>
                ) : (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 180, damping: 16 }}
                    className="grid place-items-center text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
                      className="grid h-16 w-16 place-items-center rounded-full aurora-bg text-white mb-4"
                    >
                      <Check className="h-8 w-8" strokeWidth={3} />
                    </motion.div>
                    <h3 className="font-display font-semibold text-xl">Message sent.</h3>
                    <p className="text-[var(--text-secondary)] mt-2">I'll get back to you soon.</p>
                    <button
                      onClick={() => setDone(false)}
                      data-cursor="hover"
                      className="mt-6 font-mono text-xs uppercase tracking-wider text-[var(--accent-2)]"
                    >
                      Send another →
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </Reveal>

          <Reveal>
            <GlassCard className="p-8 h-full flex flex-col gap-6">
              <div>
                <p className="text-mono-label text-[var(--text-secondary)]">DIRECT</p>
                <div className="mt-3 space-y-2">
                  <a
                    href={`mailto:${socials.email}`}
                    data-cursor="hover"
                    className="flex items-center gap-3 hover:aurora-text transition-colors"
                  >
                    <Mail className="h-4 w-4" /> {socials.email}
                  </a>
                  <p className="flex items-center gap-3 text-[var(--text-secondary)]">
                    <MapPin className="h-4 w-4" /> Nepal · Open to remote
                  </p>
                </div>
              </div>
              <div>
                <p className="text-mono-label text-[var(--text-secondary)]">ELSEWHERE</p>
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {[
                    { Icon: GithubIcon, href: socials.github, label: "GitHub" },
                    { Icon: LinkedinIcon, href: socials.linkedin, label: "LinkedIn" },
                    { Icon: InstagramIcon, href: socials.instagram, label: "Instagram" },
                    { Icon: WhatsappIcon, href: socials.whatsapp, label: "WhatsApp" },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      data-cursor="hover"
                      className="glass grid place-items-center h-12 rounded-[var(--radius-md)] hover:shadow-[var(--shadow-glow-blue)] transition-shadow"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-[var(--border-hairline)]">
                <p className="text-mono-label aurora-text">CURRENT STATUS</p>
                <p className="mt-2 text-[var(--text-primary)]">
                  Available for engineering internships, collaborations, and founder conversations.
                </p>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: var(--glass-fill);
          border: 1px solid var(--border-hairline);
          border-radius: 12px;
          padding: 12px 14px;
          color: var(--text-primary);
          font-family: var(--font-body);
          transition: border-color 200ms;
        }
        .input::placeholder { color: var(--text-secondary); opacity: 0.6; }
        .input:focus {
          outline: none;
          border-color: var(--accent-2);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--accent-2) 20%, transparent);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-mono-label text-[var(--text-secondary)]">{label}</span>
      {children}
      {error && <span className="text-xs text-[var(--destructive)] font-mono">{error}</span>}
    </label>
  );
}
