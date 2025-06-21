"use client";

import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "light" | "dark";

export default function ModeButton() {
  const [theme, setTheme] = useState<Theme>("dark");

  // Init from localStorage or system
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const defaultTheme = stored || (prefersDark ? "dark" : "light");

    setTheme(defaultTheme);
    applyTheme(defaultTheme);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem("theme", next);
  };

  const applyTheme = (mode: Theme) => {
    const root = document.documentElement;

    const themes = {
      dark: {
        "--background": "#333446",
        "--foreground": "#eaefef",
        "--muted-blue": "#7f8caa",
        "--muted-cyan": "#b8cfce",
      },
      light: {
        "--background": "#ffffff",
        "--foreground": "#1a1a1a",
        "--muted-blue": "#a0aec0",
        "--muted-cyan": "#c6f6d5",
      },
    };

    Object.entries(themes[mode]).forEach(([key, val]) => {
      root.style.setProperty(key, val);
    });
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--foreground)] flex items-center justify-center transition-colors hover:bg-[var(--muted-blue)]"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {theme === "dark" ? (
            <FiSun className="text-xl" />
          ) : (
            <FiMoon className="text-xl" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
