import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface Props extends Omit<HTMLMotionProps<"button">, "ref"> {
  children: ReactNode;
  strength?: number;
}

export function MagneticButton({ children, strength = 0.4, className, ...rest }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 14 });
  const sy = useSpring(y, { stiffness: 120, damping: 14 });

  function onMove(e: React.MouseEvent<HTMLButtonElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      data-cursor="hover"
      className={cn(
        "relative inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-shadow",
        className,
      )}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
