'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Hero } from '@/components/organisms/Hero';
import { ProblemSection } from '@/components/organisms/ProblemSection';
import { HowItWorksSection } from '@/components/organisms/HowItWorksSection';
import { OurAIPreviewSection } from '@/components/organisms/OurAIPreviewSection';
import { SocialProofSection } from '@/components/organisms/SocialProofSection';
import { CTASection } from '@/components/organisms/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero - Emotional hook with founder-to-founder positioning */}
      <Hero />

      {/* Problem - The 5 emotional truths that resonate with startup founders */}
      <ProblemSection />

      {/* How It Works - Our three-step process */}
      <HowItWorksSection />

      {/* Our AI - Preview of our AI capabilities */}
      <OurAIPreviewSection />

      {/* Our Clients - Metrics, testimonials, and trust signals */}
      <SocialProofSection />

      {/* CTA - Final conversion point */}
      <CTASection />

      <Footer />
    </div>
  );
}
