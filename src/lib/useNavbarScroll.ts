"use client";

import { useEffect, useRef, useState } from "react";

const SCROLL_DELTA = 14;
const TOP_THRESHOLD = 24;

export function useNavbarScroll(forceVisible = false) {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const visibleRef = useRef(true);

  useEffect(() => {
    lastY.current = window.scrollY;
  }, []);

  useEffect(() => {
    if (forceVisible) {
      setVisible(true);
      visibleRef.current = true;
      return;
    }

    let rafId = 0;

    const update = () => {
      const y = window.scrollY;
      const prev = lastY.current;
      const delta = y - prev;

      if (y <= TOP_THRESHOLD) {
        if (!visibleRef.current) {
          visibleRef.current = true;
          setVisible(true);
        }
      } else if (delta > SCROLL_DELTA) {
        if (visibleRef.current) {
          visibleRef.current = false;
          setVisible(false);
        }
      } else if (delta < -SCROLL_DELTA) {
        if (!visibleRef.current) {
          visibleRef.current = true;
          setVisible(true);
        }
      }

      lastY.current = y;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [forceVisible]);

  return visible;
}
