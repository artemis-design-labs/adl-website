'use client';

import { Hero } from '@/components/organisms/Hero';
import { ClientsSection } from '@/components/organisms/ClientsSection';
import { ServicesSection } from '@/components/organisms/ServicesSection';
import { OperationalMoatSection } from '@/components/organisms/OperationalMoatSection';
import { TestimonialsSection } from '@/components/organisms/TestimonialsSection';
import { CTASection } from '@/components/organisms/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsSection />
      <ServicesSection />
      <OperationalMoatSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
