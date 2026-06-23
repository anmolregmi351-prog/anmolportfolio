import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="aurora-bg fixed left-0 top-0 z-[60] h-[2px] origin-left"
      style={{ width: "100%", scaleX: progress }}
    />
  );
}
