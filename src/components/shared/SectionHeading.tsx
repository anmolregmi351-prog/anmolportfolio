import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "left", className }: Props) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-3xl",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-mono-label aurora-text mb-4 inline-block">{eyebrow}</p>
      )}
      <h2 className="text-display-l">{title}</h2>
      {description && (
        <p className="text-body-l text-[var(--text-secondary)] mt-4 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
