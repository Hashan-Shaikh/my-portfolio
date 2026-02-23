import { useEffect, useMemo, useState } from "react";

type UseActiveSectionOptions = {
  /**
   * Pixels from top to treat as "active line" (e.g. fixed header height).
   */
  offsetTop?: number;
  /**
   * Additional leeway so a section becomes active slightly before its top hits the active line.
   */
  activationSlack?: number;
  defaultSectionId?: string;
};

export function useActiveSection(sectionIds: string[], options: UseActiveSectionOptions = {}) {
  const { offsetTop = 96, activationSlack = 24, defaultSectionId } = options;
  const [activeId, setActiveId] = useState<string>(defaultSectionId ?? sectionIds[0] ?? "");

  const ids = useMemo(() => sectionIds.filter(Boolean), [sectionIds]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (ids.length === 0) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    let rafId = 0;

    const compute = () => {
      const line = offsetTop + activationSlack;

      // Prefer the last section whose top is above the active line.
      let lastAbove: HTMLElement | undefined;
      for (const el of elements) {
        const top = el.getBoundingClientRect().top;
        if (top <= line) lastAbove = el;
      }

      if (lastAbove?.id) {
        setActiveId(lastAbove.id);
        return;
      }

      // Otherwise pick the nearest upcoming section.
      let nearest: HTMLElement | undefined;
      let nearestTop = Number.POSITIVE_INFINITY;
      for (const el of elements) {
        const top = el.getBoundingClientRect().top;
        if (top > line && top < nearestTop) {
          nearestTop = top;
          nearest = el;
        }
      }
      if (nearest?.id) setActiveId(nearest.id);
    };

    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        compute();
      });
    };

    compute();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [ids, offsetTop, activationSlack]);

  return activeId;
}

