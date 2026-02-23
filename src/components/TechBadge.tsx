import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { getTechLogo } from "@/lib/techLogos";

function initialsFromLabel(label: string) {
  const parts = label
    .replace(/\d+\+?/g, "")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  const letters = parts.slice(0, 2).map((p) => p[0]?.toUpperCase()).join("");
  return letters || "?";
}

type TechBadgeProps = {
  label: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
};

const TechBadge = ({ label, className, iconClassName, textClassName }: TechBadgeProps) => {
  const { src, alt } = useMemo(() => getTechLogo(label), [label]);
  const [imgOk, setImgOk] = useState(true);

  const showImg = Boolean(src) && imgOk;

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {showImg ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn("h-4 w-4 shrink-0", iconClassName)}
          onError={() => setImgOk(false)}
        />
      ) : (
        <span
          aria-hidden
          className={cn(
            "h-4 w-4 shrink-0 rounded-sm border border-border bg-background/40 flex items-center justify-center text-[9px] leading-none text-muted-foreground",
            iconClassName
          )}
        >
          {initialsFromLabel(label)}
        </span>
      )}
      <span className={cn("min-w-0", textClassName)}>{label}</span>
    </span>
  );
};

export default TechBadge;

