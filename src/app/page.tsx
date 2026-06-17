import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactFooter } from "@/components/ContactFooter";
import { appliedAiNote } from "@/data/portfolio";
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
        <section
          id="community"
          className="scroll-mt-24 px-4 py-10 sm:px-5 sm:py-12 md:scroll-mt-28"
          aria-labelledby="community-heading"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="community-heading"
              className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Community &amp; Content
            </h2>
            <div className="mt-6 rounded-2xl border border-white/10 bg-[var(--surface)] px-5 py-4 sm:px-6 sm:py-5">
              <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                {appliedAiNote}
              </p>
            </div>
          </div>
        </section>
        <ContactFooter />
      </main>
    </>
  );
}
