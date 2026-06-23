import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className }: Props) {
  return <span className={cn("aurora-text", className)}>{children}</span>;
}
