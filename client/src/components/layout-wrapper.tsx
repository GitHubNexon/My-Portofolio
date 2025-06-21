"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SplashScreen from "./splash-screen";
import NavWrapper from "./nav-wrapper";
import PageTransition from "./page-transition";
import { ThemeWrapper } from "../contexts/theme-wrapper";

interface LayoutWrapperProps {
  children: React.ReactNode;
  fadeInDurationMs?: number; // optional duration in milliseconds
}

export default function LayoutWrapper({
  children,
  fadeInDurationMs = 1000, // default to 1000ms if not provided
}: LayoutWrapperProps) {
  const [showContent, setShowContent] = useState(false);

  return (
    <ThemeWrapper>
      {!showContent && <SplashScreen onFinish={() => setShowContent(true)} />}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: fadeInDurationMs / 1000 }} // convert ms to seconds
          // className="min-h-screen flex flex-col items-center justify-center"
        >
          <NavWrapper />
          <main className="flex-grow flex items-center justify-center w-full px-4">
            <PageTransition>{children}</PageTransition>
          </main>
        </motion.div>
      )}
    </ThemeWrapper>
  );
}
