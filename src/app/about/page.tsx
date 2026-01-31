'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const principles = [
    {
      title: 'Ship Code, Not Just Designs',
      description: 'Every Figma file has a corresponding React component. Designs that don\'t ship aren\'t designs—they\'re wishes.',
    },
    {
      title: 'B2B-Native',
      description: 'We specialize in enterprise complexity: data tables with 50+ columns, multi-role permissions, compliance patterns, power-user features.',
    },
    {
      title: 'Engineering Empathy',
      description: 'Design systems exist to make developers faster, not just designers happier. Every decision optimizes for engineering velocity.',
    },
    {
      title: 'Eat Our Own Cooking',
      description: 'Our internal tools power our service delivery. Every project we ship trains and improves our processes.',
    },
    {
      title: 'Productize Everything',
      description: 'Document processes, templatize deliverables, build once and reuse. Systematization is how we deliver quality at speed.',
    },
  ];

  const b2bChallenges = [
    'Complex data interfaces (tables with 50+ columns)',
    'Multi-role UIs (admin vs. user vs. viewer)',
    'Compliance requirements (WCAG, SOC2, HIPAA)',
    'Power-user features (bulk actions, keyboard shortcuts)',
    'Permission-based UI states',
    'Enterprise-grade performance (10K+ rows)',
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Design systems exist to make developers faster.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Not just designers happier. That&apos;s the philosophy behind everything we build.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-4">
              The Origin Story
            </p>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Why we exist
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Artemis Design Labs started because we kept seeing the same problem: design agencies
                delivering beautiful Figma files that gathered dust because no one could translate
                them to code.
              </p>
              
              <p>
                The design would be perfect. The style guide comprehensive. The handoff immaculate.
                And then... nothing. Engineers would look at the Figma file, scratch their heads,
                and rebuild everything from scratch anyway. The colors would be slightly off. The
                spacing inconsistent. The states incomplete.
              </p>
              
              <p className="text-gray-900 font-medium">
                We asked: what if we delivered both?
              </p>
              
              <p>
                What if every Figma component came with a production-ready React component—TypeScript,
                Tailwind, 5 states, accessibility baked in? What if the handoff wasn&apos;t a handoff
                at all, but a delivery of working code that passes code review on the first submission?
              </p>
              
              <p>
                That&apos;s Artemis Design Labs. Design systems that actually ship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-4">
              How We Work
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Operating principles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{principle.title}</h3>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why B2B */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-4">
                Our Focus
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Why we specialize in B2B
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                B2B products have unique design challenges that generic design agencies don&apos;t
                understand. Consumer apps are about delight. Enterprise apps are about efficiency,
                power, and trust.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We&apos;ve spent years in the trenches of enterprise software—dashboards, admin
                panels, data-heavy interfaces. We know what it takes to build UI that serves power
                users 8 hours a day, passes compliance audits, and scales to millions of data
                points.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                B2B Design Challenges We Solve
              </p>
              <div className="space-y-3">
                {b2bChallenges.map((challenge, i) => (
                  <div
                    key={i}
                    className="flex gap-3 items-start p-4 bg-white rounded-lg border border-gray-200"
                  >
                    <span className="text-teal-600 mt-0.5">✓</span>
                    <span className="text-gray-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-4">
              Our Beliefs
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              What we stand for
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                belief: 'Design without code is just a picture.',
                explanation:
                  'The value of design is in what ships to users, not what sits in Figma. We measure success by what makes it to production.',
              },
              {
                belief: 'Speed and quality aren\'t trade-offs.',
                explanation:
                  'With the right systems, you can have both. That\'s the point of design systems—to make quality the default, not the exception.',
              },
              {
                belief: 'Transparency builds trust.',
                explanation:
                  'Fixed pricing. Clear timelines. No surprises. We tell you exactly what you\'re getting and when you\'re getting it.',
              },
              {
                belief: 'The best partnership is one where you don\'t need us.',
                explanation:
                  'Our goal is to build systems your team can maintain and extend. We\'re not here to create dependency—we\'re here to create capability.',
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-gray-200 pb-8 last:border-0">
                <p className="text-xl font-semibold text-gray-900 mb-2">{item.belief}</p>
                <p className="text-gray-600">{item.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Ready to work with us?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Let&apos;s talk about how we can help your team ship faster.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
