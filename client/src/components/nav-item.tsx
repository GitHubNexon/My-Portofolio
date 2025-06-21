"use client";

import React, { useState, useEffect } from "react";
import { IconType } from "react-icons";
import AOS from "aos";
import "aos/dist/aos.css";

interface NavItemProps {
  path: string;
  icon: IconType;
  label?: string;
  isMobile?: boolean;
  index?: number; // 🔥 add this
}

export default function NavItem({
  path,
  icon: Icon,
  label,
  isMobile,
  index = 0, // default to 0 if undefined
}: NavItemProps) {
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const sectionId = path.startsWith("#") ? path : `#${path}`;
    const el = document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex items-center">
      <a
        href={path}
        onClick={handleClick}
        data-aos="fade-down"
        data-aos-delay={index * 100} // 🔥 stagger delay
        data-aos-once="true"
        className={`
          flex items-center p-2 rounded-full transition
          ${isMobile ? "justify-center w-12 h-12" : "space-x-2 px-4"}
          hover:bg-[var(--muted-blue)]
          text-[var(--foreground)]
        `}
        onMouseEnter={() => isMobile && setTooltip(true)}
        onMouseLeave={() => isMobile && setTooltip(false)}
        onTouchStart={() => isMobile && setTooltip(true)}
        onTouchEnd={() => isMobile && setTooltip(false)}
      >
        <Icon className="text-xl" />
        {!isMobile && <span className="text-sm">{label}</span>}
      </a>

      {isMobile && tooltip && label && (
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-[var(--muted-blue)] text-[var(--foreground)] text-xs rounded py-1 px-2 whitespace-nowrap z-50 pointer-events-none">
          {label}
        </div>
      )}
    </div>
  );
}
