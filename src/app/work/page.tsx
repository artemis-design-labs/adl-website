'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { cn } from '@/lib/cn';

export default function WorkPage() {
  const metrics = [
    { value: '40%', label: 'Faster case processing', project: 'HANDS AI' },
    { value: '60%', label: 'Decision time reduction', project: 'Insight' },
    { value: '94%', label: 'First-PR approval rate', project: 'Average' },
    { value: '3-4', label: 'Weeks to delivery', project: 'Average' },
  ];

  const projects = [
    {
      title: 'HANDS AI',
      client: 'Public Healthcare',
      description: 'A WIC case management platform powered by a custom AI agent that helps caseworkers serve vulnerable populations faster and more effectively.',
      image: '/images/hands-ai/cover.png',
      link: '/hands-ai',
      tags: ['AI', 'Case Management', 'Healthcare'],
      metric: { value: '40%', label: 'Faster case processing' },
    },
    {
      title: 'Insight',
      client: 'Department of Education',
      description: 'A school data platform designed for DOE officials to make fast, informed decisions using predictive AI and comprehensive data visualization.',
      image: '/images/insight/cover.png',
      link: '/insight',
      tags: ['AI', 'Education', 'Data Visualization'],
      metric: { value: '60%', label: 'Decision time reduction' },
    },
    {
      title: 'My Project Inbox',
      client: 'Enterprise Engineering',
      description: 'A project management platform that streamlines workflows for internal engineering teams, reducing context switching and improving delivery velocity.',
      image: '/images/my-project-inbox/cover.png',
      link: '/my-project-inbox',
      tags: ['Project Management', 'Enterprise'],
      metric: { value: '25%', label: 'Team velocity increase' },
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
              Our Work
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] mb-6 leading-tight">
              Transformations,<br />Not Just Deliverables
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Every project starts with a problem and ends with measurable impact. Here are some of the teams we've helped ship faster.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics / Results */}
      <section className="py-16 bg-[var(--color-bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <header className="text-center mb-12">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              Results
            </span>
            <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)]">
              Measurable Impact
            </h2>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)]" style={{ border: '1px solid var(--color-border)' }}>
            {metrics.map((metric, index) => (
              <div key={index} className="bg-[var(--color-bg-elevated)] p-6 text-center">
                <span className="text-3xl lg:text-4xl font-medium text-[var(--color-text-primary)] block mb-2">
                  {metric.value}
                </span>
                <span className="text-sm text-[var(--color-text-secondary)] block mb-1">
                  {metric.label}
                </span>
                <span className="text-xs text-[var(--color-text-muted)]">
                  {metric.project}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <header className="text-center mb-16">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              Case Studies
            </span>
            <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)]">
              Featured Projects
            </h2>
          </header>

          <div className="space-y-16">
            {projects.map((project, idx) => (
              <Link key={idx} href={project.link} className="block group">
                <article className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Image */}
                  <div className={cn(
                    'relative aspect-[4/3] overflow-hidden bg-[var(--color-bg-secondary)]',
                    idx % 2 === 1 ? 'lg:order-2' : ''
                  )}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] tracking-[0.1em] uppercase text-[var(--color-text-muted)] px-2 py-1 border border-[var(--color-border)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title & Client */}
                    <span className="text-xs text-[var(--color-text-muted)] block mb-1">{project.client}</span>
                    <h3 className="text-2xl md:text-3xl font-medium text-[var(--color-text-primary)] mb-4 group-hover:text-[var(--color-accent)] transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Metric */}
                    <div className="inline-flex items-center gap-3 p-4 bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                      <span className="text-2xl font-medium text-[var(--color-text-primary)]">
                        {project.metric.value}
                      </span>
                      <span className="text-sm text-[var(--color-text-secondary)]">
                        {project.metric.label}
                      </span>
                    </div>

                    {/* Link */}
                    <div className="mt-6">
                      <span className="inline-flex items-center text-xs tracking-[0.08em] uppercase text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors">
                        View case study
                        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[var(--color-text-primary)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <header className="mb-10">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              Get Started
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-bg-primary)] mb-6">
              Want Results Like These?
            </h2>
            <p className="text-lg text-[var(--color-text-muted)]">
              Let's talk about how we can help your team ship faster and more consistently.
            </p>
          </header>
          <Link
            href="/contact"
            className={cn(
              'inline-block text-xs tracking-[0.08em] uppercase px-8 py-4',
              'bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]',
              'hover:bg-[var(--color-bg-secondary)]',
              'transition-colors duration-150'
            )}
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
