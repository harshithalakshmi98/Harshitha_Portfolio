import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactFooter } from "@/components/ContactFooter";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HeroSection } from "@/components/HeroSection";
import { PortfolioHeader } from "@/components/PortfolioHeader";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { SummarySection } from "@/components/SummarySection";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-[var(--accent)] focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[var(--accent-foreground)] focus:shadow-lg"
      >
        Skip to content
      </a>
      <PortfolioHeader />
      <main id="main-content">
        <HeroSection />
        <SummarySection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactFooter />
      </main>
    </>
  );
}
