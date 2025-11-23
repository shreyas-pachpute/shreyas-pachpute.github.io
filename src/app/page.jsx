// src/app/page.jsx

import HeroSection from '@/components/4_sections/home/HeroSection';
import ValueProposition from '@/components/4_sections/home/ValueProposition';
import ImpactMetrics from '@/components/4_sections/home/ImpactMetrics';
import TechShowcase from '@/components/4_sections/home/TechShowcase';
import SocialProof from '@/components/4_sections/home/SocialProof';
import WorkPreview from '@/components/4_sections/home/WorkPreview';
import CallToAction from '@/components/4_sections/home/CallToAction';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <ImpactMetrics />
      <TechShowcase />
      <SocialProof />
      <WorkPreview />
      <CallToAction />
    </>
  );
}