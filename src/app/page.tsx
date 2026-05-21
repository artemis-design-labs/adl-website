'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Hero } from '@/components/organisms/Hero';
import { ProblemSection } from '@/components/organisms/ProblemSection';
import { AboutUsSection } from '@/components/organisms/AboutUsSection';
import { MetricsTestimonialsSection } from '@/components/organisms/MetricsTestimonialsSection';
import { ClientsSection } from '@/components/organisms/ClientsSection';
import { CTASection } from '@/components/organisms/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* 1. Hero - Emotional hook with founder-to-founder positioning */}
      <Hero />

      {/* 2. Why Teams Come to Us - The emotional truths that resonate */}
      <ProblemSection />

      {/* 3. About Us - Company intro with how it works carousel */}
      <AboutUsSection />

      {/* 4. Metrics & Testimonials - Two column grid */}
      <MetricsTestimonialsSection />

      {/* 5. Who We Worked With - Client logos */}
      <ClientsSection />

      {/* 6. Contact - Final conversion point */}
      <CTASection />

      <Footer />
    </div>
  );
}
