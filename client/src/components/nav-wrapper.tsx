"use client";

import { useState, useEffect } from "react";
import { useScrollShow } from "../hooks/useScrollShow";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import { AnimatePresence, motion } from "framer-motion";

export default function NavWrapper() {
  const showNavOnScroll = useScrollShow(50);

  return (
    <AnimatePresence>
      <>
        <motion.div
          key="main-nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MainNav />
        </motion.div>

        <motion.div
          key="mobile-nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MobileNav />
        </motion.div>
      </>
    </AnimatePresence>
  );
}
