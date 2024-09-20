import AboutMeSection from "@/components/sections/about-me-section";
import ContactSection from "@/components/sections/contact-section";
import HeroWrapper from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <HeroWrapper />
      <SkillsSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
