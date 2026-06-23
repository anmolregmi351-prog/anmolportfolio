import { cn } from "@/lib/utils";
import { useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius-md)] glass",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), color-mix(in oklab, var(--accent-2) 30%, transparent), transparent 60%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
