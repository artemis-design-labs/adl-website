'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Hero } from '@/components/organisms/Hero';
import { ProblemSection } from '@/components/organisms/ProblemSection';
import { ServicesSection } from '@/components/organisms/ServicesSection';
import { SocialProofSection } from '@/components/organisms/SocialProofSection';
import { CaseStudySection } from '@/components/organisms/CaseStudySection';
import { CTASection } from '@/components/organisms/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero - Emotional hook with founder-to-founder positioning */}
      <Hero />

      {/* Problem - The 5 emotional truths that resonate with startup founders */}
      <ProblemSection />

      {/* Services - Three pathways to eliminate design-dev friction */}
      <ServicesSection />

      {/* Social Proof - Metrics, testimonials, and trust signals */}
      <SocialProofSection />

      {/* Case Study - Featured before/after with real impact */}
      <CaseStudySection />

      {/* CTA - Final conversion point */}
      <CTASection />

      <Footer />
    </div>
  );
}
