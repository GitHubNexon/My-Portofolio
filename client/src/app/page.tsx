// src/app/page.tsx
import AboutSection from "@/pages/about";
import SkillsSection from "@/pages/skills";
import ProjectsSection from "@/pages/projects";
import ContactSection from "@/pages/contact";
import HomeSection from "@/pages/home";

export default function HomePage() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
