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
      <main id="main-content">
        <Hero />
        <ProblemSection />
        <AboutUsSection />
        <MetricsTestimonialsSection />
        <ClientsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
