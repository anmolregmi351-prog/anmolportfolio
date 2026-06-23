import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset = 120): string | null {
  const [active, setActive] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY + offset;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= y) current = id;
      }
      setActive(current);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offset]);

  return active;
}
