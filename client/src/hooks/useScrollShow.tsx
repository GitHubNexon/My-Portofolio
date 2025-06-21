"use client";
import { useEffect, useState } from "react";

export function useScrollShow(threshold = 50) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > threshold);
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    // Check on mount
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return show;
}
