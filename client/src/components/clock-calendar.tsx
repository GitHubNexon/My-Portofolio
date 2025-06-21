"use client";

import React, { useState, useEffect } from "react";
import moment from "moment";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaClock, FaCalendarAlt } from "react-icons/fa";

interface ClockCalendarProps {
  className?: string;
}

export default function ClockCalendar({ className = "" }: ClockCalendarProps) {
  const [currentTime, setCurrentTime] = useState(moment().format("HH:mm:ss"));
  const currentDate = moment().format("MMMM Do YYYY, dddd");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    const interval = setInterval(() => {
      setCurrentTime(moment().format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`bg-[var(--background)] border border-[var(--muted-blue)] rounded-lg p-6 max-sm:p-4 shadow-md flex flex-col max-sm:flex-col sm:flex-row gap-6 max-sm:gap-4 items-center justify-center text-[var(--foreground)] hover:scale-105 transition-transform duration-300 ${className}`}
      data-aos="fade-up"
    >
      <div className="flex items-center gap-3">
        <FaClock className="text-[var(--muted-cyan)] text-3xl max-sm:text-2xl" />
        <div>
          <h3 className="text-xl max-sm:text-lg md:text-2xl  font-[var(--font-caprasimo)]">
            Time
          </h3>
          <p className="text-lg max-sm:text-base md:text-xl font-[var(--font-geologica)]">
            {currentTime}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <FaCalendarAlt className="text-[var(--muted-cyan)] text-3xl max-sm:text-2xl" />
        <div>
          <h3 className="text-xl max-sm:text-lg md:text-2xl  font-[var(--font-caprasimo)]">
            Date
          </h3>
          <p className="text-lg max-sm:text-base md:text-xl font-[var(--font-geologica)]">
            {currentDate}
          </p>
        </div>
      </div>
    </div>
  );
}
