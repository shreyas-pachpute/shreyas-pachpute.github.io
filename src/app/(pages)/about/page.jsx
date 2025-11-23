// src/app/about/page.jsx

import AboutHeroSection from "@/components/4_sections/about/AboutHeroSection";
import JourneyTimelineSection from "@/components/4_sections/about/JourneyTimelineSection";
import SkillsBreakdownSection from "@/components/4_sections/about/SkillsBreakdownSection";
import WorkPhilosophySection from "@/components/4_sections/about/WorkPhilosophySection";
import BeyondCodeSection from "@/components/4_sections/about/BeyondCodeSection";

// SEO Metadata for the About page
export const metadata = {
  title: 'About Me',
  description: 'Learn about Shreyas Pachpute, an AI Architect with a journey from .NET development to leading GenAI system implementations. Discover his skills, work philosophy, and passion for solving complex problems.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <JourneyTimelineSection />
      <SkillsBreakdownSection />
      <WorkPhilosophySection />
      <BeyondCodeSection />
    </>
  );
}