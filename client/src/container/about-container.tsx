"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../json/about.json";
import { FaCalendarAlt } from "react-icons/fa";

// Reusable List Item Component
const ListItem = ({ children, className }) => (
  <motion.li
    className={`text-start mb-2 max-sm:mb-1 text-base max-sm:text-sm ${className}`}
  >
    {children}
  </motion.li>
);

// Reusable Section Header
const SectionHeader = ({ title }) => (
  <motion.h3
    className="mb-4 text-2xl max-sm:text-xl md:text-3xl font-semibold"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    {title}
  </motion.h3>
);

// Reusable Timeline Card
const TimelineCard = ({ year, events, index }) => (
  <motion.article
    className="bg-[var(--background)] rounded-lg p-6 max-sm:p-4 shadow-md border border-[var(--muted-blue)] text-[var(--foreground)]"
    data-aos="fade-right"
    data-aos-delay={index * 200}
  >
    <header className="flex items-center gap-2 mb-3 max-sm:mb-2">
      <motion.div
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <FaCalendarAlt className="text-[var(--muted-blue)] text-lg max-sm:text-base" />
      </motion.div>
      <h4 className="m-0 font-bold text-xl max-sm:text-lg md:text-2xl">
        {year}
      </h4>
    </header>
    <ul className="list-disc pl-4 max-sm:pl-3 m-0">
      {events.map((event, idx) => (
        <ListItem
          key={idx}
          className="hover:text-[var(--muted-blue)] transition-colors duration-200"
        >
          {event}
        </ListItem>
      ))}
    </ul>
  </motion.article>
);

export default function AboutContainer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const { timeline, hobbies } = data;

  return (
    <motion.section className="px-8 max-sm:px-4 py-8 max-sm:py-6 max-w-6xl mx-auto">
      <motion.p
        className="leading-relaxed mb-6 max-sm:mb-4 text-lg max-sm:text-base md:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Hi there! I'm John Mark Pulmano, a passionate Full Stack Developer and
        tech enthusiast. I specialize in crafting high-performance AI
        applications, mobile apps, and responsive web solutions. I love tackling
        complex challenges and creating digital experiences that make a
        difference.
      </motion.p>

      <SectionHeader title="Timeline" />

      <div className="flex flex-col gap-4 max-sm:gap-3">
        {timeline.map(({ year, events }, index) => (
          <TimelineCard key={year} year={year} events={events} index={index} />
        ))}
      </div>
    </motion.section>
  );
}
