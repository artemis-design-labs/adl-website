'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/cn';

const PROJECTS = [
  {
    filter: 'Healthcare',
    eyebrow: 'PUBLIC HEALTHCARE · DESIGN SYSTEM BUILD',
    client: 'HANDS AI',
    title: 'Building a WIC case management platform that cut processing time by 40%.',
    description:
      'A custom AI-powered design system and production React frontend delivered in three weeks. The first PR passed senior-engineer review on submission — no revision cycles, no cleanup sprint.',
    image: '/images/hands-ai/cover.png',
    href: '/hands-ai',
    metrics: [
      { value: '40%',    label: 'Faster case processing' },
      { value: '3 wks',  label: 'Delivery time' },
      { value: '94%',    label: 'First-PR approval rate' },
    ],
  },
  {
    filter: 'Education',
    eyebrow: 'DEPARTMENT OF EDUCATION · DATA PLATFORM',
    client: 'Insight',
    title: 'A school data intelligence platform that reduced decision time by 60%.',
    description:
      'Predictive AI on top, comprehensive visualization underneath — a design system that scales from 3 dashboards to 30 without rebuilding. Built for DOE officials who needed answers fast.',
    image: '/images/insight/cover.png',
    href: '/insight',
    metrics: [
      { value: '60%',  label: 'Decision time reduction' },
      { value: '30+',  label: 'Dashboards supported' },
      { value: '3 wks', label: 'Delivery time' },
    ],
  },
  {
    filter: 'Enterprise',
    eyebrow: 'ENTERPRISE ENGINEERING · PROJECT MANAGEMENT',
    client: 'My Project Inbox',
    title: 'A unified engineering surface that increased team velocity by 25%.',
    description:
      'Cuts context-switching between Linear, GitHub, and Slack. Full state coverage with virtualized lists handling 10K+ items. Shipped in three weeks with zero scope creep.',
    image: '/images/my-project-inbox/cover.png',
    href: '/my-project-inbox',
    metrics: [
      { value: '25%',   label: 'Team velocity increase' },
      { value: '10K+',  label: 'Items virtualized' },
      { value: '3 wks', label: 'Delivery time' },
    ],
  },
];

export function FeaturedWorkSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const project = PROJECTS[activeIdx];

  return (
    <section className="py-16 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]">
      <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">

        <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-8">
          FEATURED WORK
        </p>

        {/* Filter pills — Blink UX: active pill is accent-filled, inactive is muted */}
        <div className="flex flex-wrap gap-2 mb-8">
          {PROJECTS.map((p, i) => (
            <button
              key={p.filter}
              type="button"
              onClick={() => setActiveIdx(i)}
              className={cn(
                'px-4 py-2 rounded-[var(--radius-full)] text-[12px] font-medium transition-colors duration-150',
                i === activeIdx
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-text)]'
              )}
            >
              {p.filter}
            </button>
          ))}
        </div>

        {/* Featured card — image left, content right */}
        <div className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-md)] overflow-hidden border border-[var(--color-border)]">
          <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] min-h-[380px]">

            {/* Cover image */}
            <div className="relative min-h-[240px] lg:min-h-0 bg-[var(--color-bg-inset)]">
              <Image
                key={project.image}
                src={project.image}
                alt={`${project.client} cover`}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Content panel */}
            <div className="px-8 py-10 lg:px-12 lg:py-12 flex flex-col justify-center">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-1">
                {project.eyebrow}
              </p>
              <p className="text-[13px] text-[var(--color-text-secondary)] mb-5">
                {project.client}
              </p>
              <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-[1.15] tracking-[-0.03em] text-[var(--color-text-primary)] mb-5">
                {project.title}
              </h2>
              <p className="text-[14px] text-[var(--color-text-secondary)] leading-[1.65] mb-8 max-w-[540px]">
                {project.description}
              </p>

              {/* Metrics row */}
              <div className="flex gap-8 mb-8">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-[1.5rem] font-bold text-[var(--color-accent)] leading-none tracking-[-0.03em] mb-1">
                      {m.value}
                    </div>
                    <div className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)]">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
