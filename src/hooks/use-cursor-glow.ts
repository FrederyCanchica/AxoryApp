import { useEffect } from "react";

/**
 * Tracks the mouse and writes --cursor-x / --cursor-y on each element
 * with [data-cursor-glow], `.glow-section`, or `.glow-card`, using
 * coordinates RELATIVE to that element's bounding rect. This keeps the
 * radial gradient anchored to the real cursor regardless of scroll or
 * the element's position in the document.
 * Disabled on coarse-pointer / reduced-motion devices.
 */
export const useCursorGlow = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const selector = ".glow-section, .glow-card, [data-cursor-glow]";

    let cx = 0;
    let cy = 0;
    let pending = false;
    let raf = 0;

    const flush = () => {
      pending = false;
      const els = document.querySelectorAll<HTMLElement>(selector);
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        // Skip offscreen elements to save work
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        el.style.setProperty("--cursor-x", `${cx - r.left}px`);
        el.style.setProperty("--cursor-y", `${cy - r.top}px`);
      });
    };

    const onMove = (e: MouseEvent) => {
      cx = e.clientX;
      cy = e.clientY;
      if (!pending) {
        pending = true;
        raf = requestAnimationFrame(flush);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
};
