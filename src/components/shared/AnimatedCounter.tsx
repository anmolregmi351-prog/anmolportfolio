import { useEffect, useRef, useState } from "react";

interface Props {
  to: number;
  duration?: number;
  suffix?: string;
}

export function AnimatedCounter({ to, duration = 1.4, suffix = "" }: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const step = (now: number) => {
              const t = Math.min((now - start) / (duration * 1000), 1);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(Math.round(eased * to));
              if (t < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
