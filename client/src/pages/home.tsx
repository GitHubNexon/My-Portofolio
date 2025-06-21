import { HiChevronDown } from "react-icons/hi";
import PageWrapper from "@/components/page-wrapper";
import HomeContainer from "@/container/home-container";
import InteractiveBackground from "@/components/interactive-background";

export default function HomeSection() {
  return (
    <PageWrapper id="home">
      <div className="relative min-h-screen">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
          <InteractiveBackground />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <HomeContainer />
          {/* Scroll Down Section */}
          <a
            href="#about"
            className="mt-10 flex flex-col items-center space-y-2 animate-bounce cursor-pointer select-none"
            aria-label="Scroll down to About section"
          >
            <span className="text-lg font-medium">Scroll down</span>
            <HiChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </PageWrapper>
  );
}
