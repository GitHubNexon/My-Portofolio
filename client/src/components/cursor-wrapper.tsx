"use client";

import React from "react";
import Cursor from "./cursor"; // your cursor component

interface CursorWrapperProps {
  children: React.ReactNode;
}

export default function CursorWrapper({ children }: CursorWrapperProps) {
  return (
    <>
      <Cursor />
      {children}
    </>
  );
}
