"use client";

import Image from "next/image";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  appUrl?: {
    ios?: string;
    android?: string;
  };
  techStack?: React.ReactNode; // Accept icons or any JSX here
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  githubUrl,
  liveUrl,
  appUrl,
  techStack,
}: ProjectCardProps) {
  return (
    <div>
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={200}
        className="w-full h-full object-cover rounded"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold ">{title}</h3>
        <p className="text-sm ">{description}</p>

        {/* Tech Stack Icons */}
        {techStack && (
          <div className="flex flex-wrap gap-3 pt-2  ">{techStack}</div>
        )}

        <div className="flex flex-wrap gap-3 pt-4 text-sm ">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-black transition"
            >
              <FaGithub /> GitHub
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-black transition"
            >
              <FaExternalLinkAlt /> Live Site
            </a>
          )}
          {appUrl?.ios && (
            <a
              href={appUrl.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-black transition"
            >
              <FaApple /> iOS App
            </a>
          )}
          {appUrl?.android && (
            <a
              href={appUrl.android}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-black transition"
            >
              <FaGooglePlay /> Android App
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
