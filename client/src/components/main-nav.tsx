"use client";

import NavItem from "./nav-item";
import { FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import profilePic from "@/assets/images/profile.png";
import ModeButton from "./mode-button";

export default function MainNav() {
  const navItems = [
    { path: "#about", icon: FaUser, label: "About" },
    { path: "#skills", icon: FaCode, label: "Skills" },
    { path: "#projects", icon: FaProjectDiagram, label: "Projects" },
    { path: "#contact", icon: FaEnvelope, label: "Contact" },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 mx-auto w-fit bg-[var(--background)] text-[var(--foreground)] p-3 rounded-full shadow-lg hidden md:flex items-center space-x-4 z-40">
      {/* Avatar */}

      {/* Navigation Items */}
      {navItems.map(({ path, icon, label }, index) => (
        <NavItem
          key={path}
          path={path}
          icon={icon}
          label={label}
          index={index}
        />
      ))}

      <a href="#home">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--foreground)]">
          <Image
            src={profilePic}
            alt="Profile"
            width={40}
            height={40}
            className="object-cover"
            priority
          />
        </div>
      </a>

      <ModeButton />
    </nav>
  );
}
