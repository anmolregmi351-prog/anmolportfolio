import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  glow?: "blue" | "purple" | "cyan" | "none";
}

export function GlassCard({ children, className, glow = "none", ...rest }: Props) {
  const glowClass =
    glow === "blue"
      ? "hover:shadow-[var(--shadow-glow-blue)]"
      : glow === "purple"
      ? "hover:shadow-[var(--shadow-glow-purple)]"
      : glow === "cyan"
      ? "hover:shadow-[var(--shadow-glow-cyan)]"
      : "";

  return (
    <div
      className={cn(
        "glass rounded-[var(--radius-md)] transition-all duration-300 ease-[var(--ease-standard)]",
        glowClass,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
