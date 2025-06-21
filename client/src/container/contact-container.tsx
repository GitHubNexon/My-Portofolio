"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

// Reusable Contact Link Component
const ContactLink = ({ icon: Icon, text, href, index }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-base max-sm:text-sm md:text-lg font-[var(--font-geologica)] text-[var(--muted-cyan)] hover:text-[var(--foreground)] transition-colors duration-200"
    data-aos="fade-up"
    data-aos-delay={index * 200}
  >
    <Icon className="text-[var(--muted-cyan)]" />
    <span>{text}</span>
  </a>
);

export default function ContactContainer({
  email = "johnmarkpulmano.dev@gmail.com",
  github = "https://github.com/GitHubNexon",
  instagram = "https://www.instagram.com/_jay.yem/",
  linkedin = "https://www.linkedin.com/in/john-mark-pulmano-3547a2360/",
  signature = "_jay.yem",
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const contacts = [
    { icon: FaEnvelope, text: email, href: `mailto:${email}` },
    { icon: FaGithub, text: "GitHub", href: github },
    { icon: FaInstagram, text: "Instagram", href: instagram },
    { icon: FaLinkedin, text: "LinkedIn", href: linkedin },
  ];

  return (
    <footer className="bg-[var(--background)] border-t border-[var(--muted-blue)] px-8 max-sm:px-4 py-8 max-sm:py-6 text-[var(--foreground)]">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row justify-center gap-6 max-sm:gap-4 mb-6 max-sm:mb-4">
          {contacts.map((contact, index) => (
            <ContactLink
              key={contact.text}
              icon={contact.icon}
              text={contact.text}
              href={contact.href}
              index={index}
            />
          ))}
        </div>
        <p
          className="text-base max-sm:text-sm md:text-lg font-[var(--font-geologica)] flex items-center justify-center gap-2"
          data-aos="fade-up"
          data-aos-delay={contacts.length * 200}
        >
          Made with <FaHeart className="text-[var(--muted-cyan)]" /> by{" "}
          {signature}
        </p>
      </div>
    </footer>
  );
}
