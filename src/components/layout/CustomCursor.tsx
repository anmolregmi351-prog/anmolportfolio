import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const supportsHover = window.matchMedia("(hover: hover)").matches;
    if (!supportsHover) return;
    document.body.classList.add("custom-cursor-active");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const hover = !!t.closest('[data-cursor="hover"], a, button, input, textarea, [role="button"]');
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${hover ? 1.6 : 1})`;
        ring.current.style.borderColor = hover ? "var(--accent-2)" : "var(--text-primary)";
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring.current) {
        const t = ring.current.style.transform;
        // preserve scale transform from onOver-set value but always update position
        const scale = t.match(/scale\(([^)]+)\)/)?.[1] ?? "1";
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${scale})`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[90] h-2 w-2 rounded-full bg-[var(--accent-2)] mix-blend-difference hidden md:block"
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[90] h-8 w-8 rounded-full border transition-[border-color] hidden md:block"
        style={{ borderColor: "var(--text-primary)" }}
      />
    </>
  );
}
