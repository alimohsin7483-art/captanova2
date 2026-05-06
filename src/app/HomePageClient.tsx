'use client';

import { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import PainSection from '@/components/sections/PainSection';
import TransformSection from '@/components/sections/TransformSection';
import ProgramsOverview from '@/components/sections/ProgramsOverview';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import StatsSection from '@/components/sections/StatsSection';
import LeadCaptureSection from '@/components/sections/LeadCaptureSection';
import CtaSection from '@/components/sections/CtaSection';
import FaqSection from '@/components/sections/FaqSection';

export default function HomePageClient() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroSection />
      <StatsSection />
      <PainSection />
      <TransformSection />
      <ProgramsOverview />
      <TestimonialsSection />
      <FaqSection />
      <LeadCaptureSection />
      <CtaSection />
    </>
  );
}
