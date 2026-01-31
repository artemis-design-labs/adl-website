'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function WorkPage() {
  const projects = [
    {
      title: 'HANDS AI',
      client: 'Public Healthcare',
      description:
        'A WIC case management platform powered by a custom AI agent that helps caseworkers serve vulnerable populations faster and more effectively.',
      image: '/images/hands-ai/cover.png',
      link: '/hands-ai',
      tags: ['AI', 'Case Management', 'Healthcare'],
      metrics: {
        label: 'Faster case processing',
        value: '40%',
      },
    },
    {
      title: 'Insight',
      client: 'Department of Education',
      description:
        'A school data platform designed for DOE officials to make fast, informed decisions using predictive AI and comprehensive data visualization.',
      image: '/images/insight/cover.png',
      link: '/insight',
      tags: ['AI', 'Education', 'Data Visualization'],
      metrics: {
        label: 'Decision time reduction',
        value: '60%',
      },
    },
    {
      title: 'My Project Inbox',
      client: 'Enterprise Engineering',
      description:
        'A project management platform that streamlines workflows for internal engineering teams, reducing context switching and improving delivery velocity.',
      image: '/images/my-project-inbox/cover.png',
      link: '/my-project-inbox',
      tags: ['Project Management', 'Enterprise'],
      metrics: {
        label: 'Team velocity increase',
        value: '25%',
      },
    },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-4">
                Our Work
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                Transformations, not just deliverables
              </h1>
            </div>
            <div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every project starts with a problem and ends with measurable impact. Here are some
                of the teams we&apos;ve helped ship faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {projects.map((project, idx) => (
              <Link key={idx} href={project.link} className="block group">
                <article className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Image */}
                  <div
                    className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 ${
                      idx % 2 === 1 ? 'lg:order-2' : ''
                    }`}
                  >
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
                          className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title & Client */}
                    <p className="text-sm text-gray-500 mb-1">{project.client}</p>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

                    {/* Metric */}
                    <div className="inline-flex items-center gap-3 p-4 bg-teal-50 rounded-lg border border-teal-100">
                      <span className="text-2xl font-semibold text-teal-600">
                        {project.metrics.value}
                      </span>
                      <span className="text-sm text-gray-600">{project.metrics.label}</span>
                    </div>

                    {/* Link */}
                    <div className="mt-6">
                      <span className="inline-flex items-center text-teal-600 font-medium group-hover:text-teal-700">
                        View case study
                        <svg
                          className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
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
      <section className="py-20 md:py-28 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Want results like these?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Let&apos;s talk about how we can help your team ship faster and more consistently.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Start a conversation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
