"use client";

import { ReactNode } from "react";

interface PageWrapperProps {
  id: string;
  children: ReactNode;
}

export default function PageWrapper({ id, children }: PageWrapperProps) {
  return <section id={id}>{children}</section>;
}
