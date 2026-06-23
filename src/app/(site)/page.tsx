'use client';

import { Hero } from '@/components/organisms/Hero';
import { StatBarSection } from '@/components/organisms/StatBarSection';
import { ClientsSection } from '@/components/organisms/ClientsSection';
import { ProblemSection } from '@/components/organisms/ProblemSection';
import { CaseStudySection } from '@/components/organisms/CaseStudySection';
import { OperationalMoatSection } from '@/components/organisms/OperationalMoatSection';
import { TestimonialsSection } from '@/components/organisms/TestimonialsSection';
import { CTASection } from '@/components/organisms/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatBarSection />
      <ClientsSection />
      <ProblemSection />
      <CaseStudySection />
      <OperationalMoatSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
