"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 30 }} // bigger offset for more pop feel
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }} // symmetric exit
        transition={{
          duration: 0.6, // slower duration for smoothness
          delay: 0.1, // slight delay before animating in
          ease: [0.22, 1, 0.36, 1], // custom easeOut cubic-bezier
        }}
        style={{ width: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
