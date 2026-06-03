'use client';

import { Hero } from '@/components/organisms/Hero';
import { ProblemSection } from '@/components/organisms/ProblemSection';
import { AboutUsSection } from '@/components/organisms/AboutUsSection';
import { MetricsTestimonialsSection } from '@/components/organisms/MetricsTestimonialsSection';
import { ClientsSection } from '@/components/organisms/ClientsSection';
import { CTASection } from '@/components/organisms/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <AboutUsSection />
      <MetricsTestimonialsSection />
      <ClientsSection />
      <CTASection />
    </>
  );
}
