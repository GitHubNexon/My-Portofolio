import PageWrapper from "@/components/page-wrapper";
import AboutContainer from "@/container/about-container";
import InteractiveBackground from "@/components/interactive-background";
import { HiChevronDown } from "react-icons/hi";

export default function AboutSection() {
  return (
    <PageWrapper id="about">
      <div className="relative min-h-screen">
        {/* Foreground Content */}
        <h2 className="text-[var(--foreground)] text-3xl font-bold mb-6 text-center">
          About Me
        </h2>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <AboutContainer />
        </div>
      </div>
    </PageWrapper>
  );
}
