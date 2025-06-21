"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextProps {
  bg: string;
  text: string;
  setTheme: (bg: string, text: string) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeWrapper");
  return context;
}

interface ThemeWrapperProps {
  children: ReactNode;
  initialBg?: string;
  initialText?: string;
}

export function ThemeWrapper({
  children,
  initialBg = "var(--background)",
  initialText = "var(--foreground)",
}: ThemeWrapperProps) {
  const [bg, setBg] = useState(initialBg);
  const [text, setText] = useState(initialText);

  const setTheme = (newBg: string, newText: string) => {
    setBg(newBg);
    setText(newText);
  };

  return (
    <ThemeContext.Provider value={{ bg, text, setTheme }}>
      <div style={{ backgroundColor: bg, color: text, minHeight: "100vh" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
