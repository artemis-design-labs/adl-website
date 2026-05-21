'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { cn } from '@/lib/cn';

export default function AboutPage() {
  const team = [
    {
      name: 'Founder',
      role: 'Design Systems Lead',
      description: 'Former startup founder who lived the design-dev friction problem. Built ADL to solve it.',
    },
    {
      name: 'AI Lead',
      role: 'Machine Learning Engineer',
      description: 'Architect of our proprietary design-to-code AI. 190,000+ training examples and counting.',
    },
    {
      name: 'Engineering',
      role: 'Full-Stack Development',
      description: 'Production-ready code across React, Vue, Angular, and more. Enterprise-grade quality.',
    },
  ];

  const values = [
    {
      title: 'Ship Code, Not Just Designs',
      description: 'Every Figma file has a corresponding production component. Designs that don\'t ship aren\'t designs—they\'re wishes.',
    },
    {
      title: 'Engineering Empathy',
      description: 'Design systems exist to make developers faster, not just designers happier. Every decision optimizes for engineering velocity.',
    },
    {
      title: 'Transparency Builds Trust',
      description: 'Fixed pricing. Clear timelines. No surprises. We tell you exactly what you\'re getting and when.',
    },
    {
      title: 'The Best Partnership Ends',
      description: 'Our goal is to build systems your team can maintain. We create capability, not dependency.',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              About Us
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] mb-6 leading-tight">
              Design Systems That Ship.<br />
              Built by Founders Who Lived It.
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              We started ADL because we kept watching design agencies deliver beautiful Figma files that gathered dust. We asked: what if we delivered both design and code?
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
            Origin Story
          </span>
          <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] mb-8">
            Why We Exist
          </h2>

          <div className="space-y-6 text-[var(--color-text-secondary)] leading-relaxed">
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

            <p className="text-[var(--color-text-primary)] font-medium text-lg">
              We asked: what if we delivered both?
            </p>

            <p>
              What if every Figma component came with a production-ready React component—TypeScript,
              Tailwind, 5 states, accessibility baked in? What if the handoff wasn't a handoff
              at all, but a delivery of working code that passes code review on the first submission?
            </p>

            <p>
              That's Artemis Design Labs. Design systems that actually ship.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-primary)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <header className="text-center mb-16">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              The Team
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] leading-tight">
              Experts Who've Been There
            </h2>
            <p className="mt-6 text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Our team combines startup experience, design systems expertise, and AI engineering.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border)]" style={{ border: '1px solid var(--color-border)' }}>
            {team.map((member, index) => (
              <article key={index} className="bg-[var(--color-bg-elevated)] p-6 lg:p-8">
                <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-1">
                  {member.name}
                </h3>
                <span className="text-xs tracking-[0.1em] uppercase text-[var(--color-accent)] block mb-4">
                  {member.role}
                </span>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {member.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <header className="text-center mb-16">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              Our Values
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] leading-tight">
              What We Stand For
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border)]" style={{ border: '1px solid var(--color-border)' }}>
            {values.map((value, index) => (
              <article key={index} className="bg-[var(--color-bg-elevated)] p-6 lg:p-8">
                <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] mb-10">
            Let's talk about how we can help your team ship faster.
          </p>
          <Link
            href="/contact"
            className={cn(
              'inline-block text-xs tracking-[0.08em] uppercase px-8 py-4',
              'bg-[var(--color-text-primary)] text-[var(--color-bg-primary)]',
              'hover:bg-[var(--color-text-secondary)]',
              'transition-colors duration-150'
            )}
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
