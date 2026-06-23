import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
  amount?: number;
}

export function Reveal({ children, className, delay = 0, stagger = false, amount = 0.2 }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={stagger ? staggerContainer : fadeUp}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
