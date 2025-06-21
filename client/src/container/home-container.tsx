"use client";

import Image from "next/image";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import profilePic from "@/assets/images/profile.png";
import AOS from "aos";

const socialLinks = [
  {
    href: "https://github.com/GitHubNexon",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/_jay.yem/",
    icon: <FaInstagram />,
    label: "Instagram",
  },
];

const infoItems = [
  {
    icon: <IoLocation className="text-xl text-[var(--muted-blue)]" />,
    text: "Quezon City, Metro Manila, Philippines",
  },
  {
    icon: <FaRegCalendarAlt className="text-xl text-[var(--muted-blue)]" />,
    text: "4 years of experience in Programming",
  },
  {
    icon: <FaCode className="text-xl text-[var(--muted-blue)]" />,
    text: "Full Stack Developer",
  },
];

export default function HomeContainer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section
      data-aos="zoom-in"
      className="w-full max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12 
      "
    >
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center gap-6 p-6">
        {/* Avatar */}
        <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-[var(--foreground)] shadow-lg">
          <Image
            src={profilePic}
            alt="John Mark Pulmano"
            width={200}
            height={200}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Type Animation */}
        <TypeAnimation
          sequence={[
            "Hi, I'm John Mark Pulmano",
            2000,
            "Web Developer",
            2000,
            "App Developer",
            2000,
          ]}
          wrapper="h1"
          speed={50}
          className="text-3xl font-bold text-[var(--foreground)] text-center min-w-[20ch] md:whitespace-break-spaces"
          repeat={Infinity}
        />

        {/* Social Icons */}
        <div className="flex gap-6 text-[var(--foreground)] text-2xl">
          {/* Social Links (open in new tab) */}
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-[var(--muted-cyan)] transition-colors"
            >
              {icon}
            </a>
          ))}

          {/* Email Link (open in email client) */}
          <div
            className="hover:text-[var(--muted-cyan)] transition-colors cursor-pointer"
            title="johnmarkpulmano.dev@gmail.com"
          >
            <FaEnvelope />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left p-6">
        {infoItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start justify-center lg:justify-start gap-3 max-sm:justify-start"
          >
            {item.icon}
            <p className="text-[var(--foreground)] text-start">{item.text}</p>
          </div>
        ))}

        <p className="text-[var(--foreground)] max-w-lg mx-auto lg:mx-0 mt-6">
          As a passionate developer based in the Philippines, I use cutting-edge
          tools and stacks to craft scalable, modern applications. I aim to
          bridge design and functionality through intuitive digital experiences.
        </p>
      </div>
    </section>
  );
}
