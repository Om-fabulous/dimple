"use client";

import { useCallback, useEffect, useRef } from "react";

export type HorizontalScrollBounds = {
  startX: number;
  endX: number;
  /** When true, all cards fit — no horizontal travel needed */
  isStatic: boolean;
};

const DEFAULT_BOUNDS: HorizontalScrollBounds = {
  startX: 0,
  endX: 0,
  isStatic: true,
};

/**
 * Computes translateX range so the first & last stage cards
 * align to the viewport center at progress 0 and 1.
 */
export function useHorizontalScrollBounds(
  viewportRef: React.RefObject<HTMLElement | null>,
  trackRef: React.RefObject<HTMLElement | null>,
  cardSelector = "[data-stage-card]"
) {
  const boundsRef = useRef<HorizontalScrollBounds>(DEFAULT_BOUNDS);

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const cards = track.querySelectorAll<HTMLElement>(cardSelector);
    if (cards.length === 0) return;

    const viewportWidth = viewport.clientWidth;
    const viewportCenter = viewportWidth / 2;

    const first = cards[0];
    const last = cards[cards.length - 1];

    const firstCenter = first.offsetLeft + first.offsetWidth / 2;
    const lastCenter = last.offsetLeft + last.offsetWidth / 2;
    const span = lastCenter - firstCenter;

    /* All cards visible — center the group, no horizontal drift */
    if (span <= viewportWidth * 0.92) {
      const groupCenter = (firstCenter + lastCenter) / 2;
      const offset = viewportCenter - groupCenter;
      boundsRef.current = { startX: offset, endX: offset, isStatic: true };
      return;
    }

    const startX = viewportCenter - firstCenter;
    const endX = viewportCenter - lastCenter;

    boundsRef.current = {
      startX,
      endX,
      isStatic: false,
    };
  }, [viewportRef, trackRef, cardSelector]);

  useEffect(() => {
    measure();
    const raf = requestAnimationFrame(measure);

    const ro = new ResizeObserver(() => {
      requestAnimationFrame(measure);
    });

    if (viewportRef.current) ro.observe(viewportRef.current);
    if (trackRef.current) ro.observe(trackRef.current);

    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, [measure, viewportRef, trackRef]);

  const getX = useCallback((progress: number) => {
    const { startX, endX } = boundsRef.current;
    const t = Math.min(1, Math.max(0, progress));
    return startX + t * (endX - startX);
  }, []);

  return { getX, measure, boundsRef };
}
