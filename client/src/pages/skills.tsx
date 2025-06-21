import PageWrapper from "@/components/page-wrapper";
import InteractiveBackground from "@/components/interactive-background";
import { HiChevronDown } from "react-icons/hi";
import SkillsContainer from "@/container/skills-container";

export default function SkillsSection() {
  return (
    <PageWrapper id="skills">
      <div className="relative min-h-screen">
        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <SkillsContainer />
        </div>
      </div>
    </PageWrapper>
  );
}
