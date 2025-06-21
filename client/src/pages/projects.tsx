"use client";

import MovableArea from "@/components/movable/movable-area";
import PageWrapper from "@/components/page-wrapper";
import ProjectCard from "@/components/project-card";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiVite } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { AiOutlineApi } from "react-icons/ai";

import Image1 from "@/assets/images/luntian-1.png";
import Image2 from "@/assets/images/qiit.png";
import Image3 from "@/assets/images/hypervault.png";
import Image4 from "@/assets/images/hyperscope.png";

const tabs = ["Featured", "Web Apps", "Mobile Apps"];

const cardsData = [
  [
    {
      id: "1a",
      content: (
        <ProjectCard
          title="Luntian"
          description="Luntian is an intelligent plant disease detection system designed to help farmers and plant enthusiasts accurately identify plant diseases using AI.
          Note: Message me to request an access to this website
          "
          techStack={
            <>
              <FaReact title="React" />
              <SiVite title="Vite" />
              <FaNodeJs title="Node.js" />
              <SiTailwindcss title="Tailwind CSS" />
              <SiMongodb title="Mongod DB" />
              <SiExpress title="Express Js" />
              <FaPython title="Python" />
            </>
          }
          imageUrl={Image1}
          githubUrl="https://github.com/GitHubNexon/Luntian---An-AI-powered-Plant-disease-Detection-By-YOLO"
          liveUrl="https://hypercoresolution.com/Luntian/"
        />
      ),
    },

    {
      id: "2a",
      content: (
        <ProjectCard
          title="QIIT.edu"
          description="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium facilis dignissimos earum hic fugit aperiam laboriosam voluptates velit nemo perspiciatis. "
          imageUrl={Image2}
          techStack={
            <>
              <FaReact title="React" />
              <SiVite title="Vite" />
              <FaNodeJs title="Node.js" />
              <SiTailwindcss title="Tailwind CSS" />
            </>
          }
          githubUrl="https://github.com/GitHubNexon/QIIT.edu"
          liveUrl="https://githubnexon.github.io/QIIT.edu/"
        />
      ),
    },
    {
      id: "3a",
      content: (
        <ProjectCard
          title="HyperVault"
          description="Vault Website"
          techStack={
            <>
              <FaReact title="React" />
              <SiVite title="Vite" />
              <FaNodeJs title="Node.js" />
              <SiTailwindcss title="Tailwind CSS" />
              <SiMongodb title="Mongod DB" />
              <SiExpress title="Express Js" />
              <FaPython title="Python" />
            </>
          }
          imageUrl={Image3}
          githubUrl="https://github.com/GitHubNexon/HyperVault"
          liveUrl="https://githubnexon.github.io/HyperVault/"
        />
      ),
    },
  ],
  [
    {
      id: "1b",
      content: (
        <ProjectCard
          title="Luntian"
          description="Luntian is an intelligent plant disease detection system designed to help farmers and plant enthusiasts accurately identify plant diseases using AI.
          Note: Message me to request an access to this website
          "
          techStack={
            <>
              <FaReact title="React" />
              <SiVite title="Vite" />
              <FaNodeJs title="Node.js" />
              <SiTailwindcss title="Tailwind CSS" />
              <SiMongodb title="Mongod DB" />
              <SiExpress title="Express Js" />
              <FaPython title="Python" />
            </>
          }
          imageUrl={Image1}
          githubUrl="https://github.com/GitHubNexon/Luntian---An-AI-powered-Plant-disease-Detection-By-YOLO"
          liveUrl="https://hypercoresolution.com/Luntian/"
        />
      ),
    },

    {
      id: "2b",
      content: (
        <ProjectCard
          title="QIIT.edu"
          description="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium facilis dignissimos earum hic fugit aperiam laboriosam voluptates velit nemo perspiciatis. "
          imageUrl={Image2}
          techStack={
            <>
              <FaReact title="React" />
              <SiVite title="Vite" />
              <FaNodeJs title="Node.js" />
              <SiTailwindcss title="Tailwind CSS" />
            </>
          }
          githubUrl="https://github.com/GitHubNexon/QIIT.edu"
          liveUrl="https://githubnexon.github.io/QIIT.edu/"
        />
      ),
    },
    {
      id: "3c",
      content: (
        <ProjectCard
          title="HyperVault"
          description="Vault Website"
          techStack={
            <>
              <FaReact title="React" />
              <SiVite title="Vite" />
              <FaNodeJs title="Node.js" />
              <SiTailwindcss title="Tailwind CSS" />
              <SiMongodb title="Mongod DB" />
              <SiExpress title="Express Js" />
              <FaPython title="Python" />
            </>
          }
          imageUrl={Image3}
          githubUrl="https://github.com/GitHubNexon/HyperVault"
          liveUrl="https://githubnexon.github.io/HyperVault/"
        />
      ),
    },
  ],
  [
    {
      id: "1c",
      content: (
        <ProjectCard
          title="Hyper Scope"
          description="A React Native mobile app that fetches real-time news using News API and handles HTTP requests with Axios. Users can browse top headlines by category or country. The app features reusable components, theming support, and a responsive UI optimized for Android and iOS.
          "
          techStack={
            <>
              <TbBrandReactNative title="React Native" />
              <FaNodeJs title="Node.js" />
              <FaAndroid title="Android" />
              <FaApple title="Apple IOS" />
              <AiOutlineApi title="API" />
            </>
          }
          imageUrl={Image4}
          githubUrl="https://github.com/GitHubNexon/HyperScope"
          appUrl={{
            // ios: "https://apps.apple.com/app/id1234567890",
            android:
              "https://drive.google.com/file/d/1dpgw7ZvesOC_4f5MLOKS4z9cSR29f8iH/view",
          }}
        />
      ),
    },
  ],
];

export default function ProjectsSection() {
  return (
    <PageWrapper id="projects">
      <div className="flex flex-col items-center justify-center min-h-screen w-full px-4">
        <h2 className="text-[var(--foreground)] text-3xl font-bold mb-6">
          Projects
        </h2>
        <MovableArea
          tabs={tabs}
          cardsData={cardsData}
          onRender={false}
          onEmpty="No cards available"
        />
      </div>
    </PageWrapper>
  );
}
