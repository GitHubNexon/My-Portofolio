"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import splashData from "../json/splash.json";

// Reusable Terminal Loader Component
const TerminalLoader = () => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    // Cycle through commands every 4s (matching animation duration)
    const interval = setInterval(() => {
      setCurrentCommandIndex((prev) => (prev + 1) % splashData.commands.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentCommand = splashData.commands[currentCommandIndex];

  const style: React.CSSProperties & { [key: string]: string | number } = {
    "--command-length": currentCommand.length,
  };

  return (
    <div
      className="w-full max-w-sm max-sm:max-w-xs bg-[var(--background)] border border-[var(--muted-blue)] rounded-lg overflow-hidden shadow-lg"
      data-aos="fade-up"
    >
      <div className="flex items-center justify-center bg-[#343434] py-2 px-4 relative">
        <div
          className="absolute left-4 flex gap-2"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <span className="w-3 h-3 rounded-full bg-[#e33]" />
          <span className="w-3 h-3 rounded-full bg-[#ee0]" />
          <span className="w-3 h-3 rounded-full bg-[#0b0]" />
        </div>
        <h3
          className="text-base max-sm:text-sm text-[var(--foreground)] opacity-80 font-[var(--font-caprasimo)]"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          Installing Dependencies
        </h3>
      </div>
      <div className="p-4 max-sm:p-3">
        <span
          className="inline-block text-base max-sm:text-sm font-[var(--font-geologica)] text-[var(--muted-cyan)] whitespace-nowrap overflow-hidden border-r-2 border-[var(--muted-cyan)] animate-typeAndDelete animate-blinkCursor"
          style={style}
        >
          {currentCommand}
        </span>
      </div>
    </div>
  );
};

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Extend duration to allow multiple command cycles (e.g., 12s for 3 commands)
    const timer = setTimeout(() => setVisible(false), 12000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        onFinish();
      }}
    >
      {visible && (
        <motion.div
          className="fixed inset-0 bg-[var(--background)] flex items-center justify-center z-[9999]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <TerminalLoader />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
