"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaJs,
  FaTools,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiMysql,
  SiApache,
  SiNginx,
  SiDotnet,
  SiTypescript,
  SiSocketdotio,
  SiTailwindcss,
  SiFastapi,
  SiExpress,
} from "react-icons/si";
import skillsData from "../json/skills.json";

// Map icon keys to React Icons components
const iconMap = {
  react: FaReact,
  nodejs: FaNodeJs,
  python: FaPython,
  mongodb: FaDatabase,
  mysql: SiMysql,
  apache: SiApache,
  nginx: SiNginx,
  dotnet: SiDotnet,
  javascript: FaJs,
  typescript: SiTypescript,
  socketio: SiSocketdotio,
  tailwindcss: SiTailwindcss,
  aws: FaAws,
  fastapi: SiFastapi,
  postman: FaTools,
  docker: FaDocker,
  express: SiExpress,
  expo: FaTools,
  androidstudio: FaTools,
};

// Reusable Skill Card Component
const SkillCard = ({ icon: Icon, title, description, link, index }) => (
  <div
    className="bg-[var(--background)] border border-[var(--muted-blue)] rounded-lg p-6 max-sm:p-4 text-[var(--foreground)] shadow-md hover:scale-105 transition-transform duration-300"
    data-aos="fade-up"
    data-aos-delay={index * 200}
  >
    <div className="flex items-center gap-3 mb-4 max-sm:mb-3">
      <Icon className="text-[var(--muted-cyan)] text-3xl max-sm:text-2xl" />
      <h3 className="text-xl max-sm:text-lg md:text-2xl  font-[var(--font-caprasimo)]">
        {title}
      </h3>
    </div>
    <p className="text-base max-sm:text-sm md:text-lg font-[var(--font-geologica)] leading-relaxed mb-4 max-sm:mb-3">
      {description}
    </p>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm max-sm:text-xs md:text-base font-[var(--font-geologica)] text-[var(--muted-cyan)] hover:text-[var(--foreground)] transition-colors duration-200 underline"
      >
        Learn More
      </a>
    )}
  </div>
);

export default function SkillsContainer() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="px-8 max-sm:px-4 py-8 max-sm:py-6  mx-auto">
      <h2 className="text-3xl max-sm:text-2xl md:text-4xl  font-[var(--font-caprasimo)] text-[var(--foreground)] mb-8 max-sm:mb-6 text-center">
        My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-sm:gap-4">
        {skillsData.map((skill, index) => {
          const Icon = iconMap[skill.iconKey] || FaTools; // Fallback to FaTools if iconKey is invalid
          return (
            <SkillCard
              key={skill.title}
              icon={Icon}
              title={skill.title}
              description={skill.description}
              link={skill.link}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
}
