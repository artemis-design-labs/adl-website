'use client'

import { useState, useEffect, useRef } from 'react'
import Divider from '../Atoms/Divider'

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const tabsRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      category: 'Sprint-Based MVP Design',
      description: 'Accelerate your product launch with focused sprint cycles that deliver production-ready AI interfaces. We transform complex concepts into market-ready products through rapid iteration and high-fidelity design execution.',
      cards: [
        {
          name: '8-12 Week Production Launch',
          description:
            'Transform your concept into a production-ready AI product through weekly sprint cycles. Focused on high-fidelity UI design, interactive prototypes, and core features that win enterprise deals fast.',
        },
        {
          name: 'Design-to-Production Package',
          description:
            'Full UI execution from wireframes to pixel-perfect screens with built-in design QA. Includes interactive prototypes, asset handoff, and specifications developers actually use.',
        },
      ],
    },
    {
      category: 'Enterprise Design Systems',
      description: 'Build scalable, future-proof design foundations that grow with your product. From initial creation to ongoing evolution, we deliver comprehensive design systems that ensure consistency and accelerate development across your entire organization.',
      cards: [
        {
          name: 'Custom Design System Build',
          description:
            'Scalable, enterprise-grade design systems built from the ground up for your product. Includes complete UI kit, component library, style guides, documentation, and brand-specific patterns that scale from MVP to Series C.',
        },
        {
          name: 'Design System Extension & Evolution',
          description:
            'Expand existing design systems with new components, patterns, and modules as your product grows. Maintain consistency while adding features, verticals, or platform variations (web, mobile, desktop).',
        },
      ],
    },
    {
      category: 'UI Development & Frontend',
      description: 'Bridge the gap between design and development with production-ready code and streamlined workflows. We eliminate handoff friction by delivering coded components and establishing efficient design-to-code pipelines that reduce rework and accelerate shipping.',
      cards: [
        {
          name: 'Coded Component Library',
          description:
            'Convert designs into production-ready frontend code (React, Vue, Angular). Fully documented, accessible components that eliminate design-dev handoff friction and reduce sprint rework by 35%.',
        },
        {
          name: 'Design-to-Code Pipeline Setup',
          description:
            'Implement Figma-to-code workflows with your dev team. Includes component tokenization, design system integration, and developer training for seamless collaboration.',
        },
      ],
    },
    {
      category: 'AI-Specific Interface Design',
      description: 'Design interfaces that make complex AI systems understandable and trustworthy. We specialize in creating transparent, intuitive experiences that help users grasp AI functionality quickly while reducing onboarding time from hours to minutes.',
      cards: [
        {
          name: 'Explainable AI & Dashboard UI',
          description:
            'Specialized UI patterns for model transparency, data visualization, and real-time AI outputs. Focused on trust-building interfaces that help non-technical users understand complex AI functionality.',
        },
        {
          name: 'Enterprise AI Onboarding Flows',
          description:
            'Design intuitive first-time experiences that reduce onboarding friction from hours to minutes. Includes progressive disclosure patterns, contextual guidance, and feature adoption UI strategies.',
        },
      ],
    },
    {
      category: 'Embedded Design Capacity',
      description: 'Extend your team with dedicated design resources that integrate seamlessly into your workflow. We provide ongoing support and establish sustainable design operations that maintain quality and consistency as your product scales.',
      cards: [
        {
          name: 'Ongoing UI Sprint Support',
          description:
            'Dedicated design resources integrated into your product team\'s workflow. Weekly deliverables including new screens, component extensions, and design system maintenance as you scale.',
        },
        {
          name: 'Design Operations & Workflow Setup',
          description:
            'Establish internal design processes, Figma workspace organization, and handoff protocols. Includes team training on design system usage and quality standards for long-term consistency.',
        },
      ],
    },
  ]

  const activeService = services[activeCategory]

  // Handle tab change with animation
  const handleTabChange = (index: number) => {
    if (index === activeCategory) return

    setIsAnimating(true)
    setActiveCategory(index)

    // Reset animation state after transition
    setTimeout(() => setIsAnimating(false), 300)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && activeCategory > 0) {
        handleTabChange(activeCategory - 1)
      } else if (e.key === 'ArrowRight' && activeCategory < services.length - 1) {
        handleTabChange(activeCategory + 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeCategory])

  // Scroll active tab into view on mobile
  useEffect(() => {
    if (tabsRef.current) {
      const activeButton = tabsRef.current.querySelector(`[data-tab-index="${activeCategory}"]`)
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
      }
    }
  }, [activeCategory])

  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center px-6 sm:px-12 md:px-24 py-20"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-8" style={{ fontFamily: 'var(--font-sarala)', color: 'var(--color-accent-cyan)' }}>
            Our Services
          </h2>
          <Divider className="mb-16" />
        </div>

        {/* Tabbed Interface */}
        <div className="space-y-12">
          {/* Tabs - Horizontal on desktop, Stacked on mobile */}
          <div
            ref={tabsRef}
            role="tablist"
            aria-label="Service categories"
            className="flex flex-col lg:flex-row lg:flex-wrap gap-3 lg:gap-4 lg:justify-center"
          >
            {services.map((service, index) => (
              <button
                key={index}
                data-tab-index={index}
                role="tab"
                aria-selected={activeCategory === index}
                aria-controls={`tabpanel-${index}`}
                id={`tab-${index}`}
                onClick={() => handleTabChange(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleTabChange(index)
                  }
                }}
                className={`
                  relative px-6 py-3 lg:px-8 lg:py-3 rounded-full text-base lg:text-lg font-medium
                  transition-all duration-300 ease-in-out
                  focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900
                  min-h-[56px] lg:min-h-[44px]
                  ${
                    activeCategory === index
                      ? 'bg-cyan-400 text-gray-900 shadow-lg shadow-cyan-400/50'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200 border border-gray-700'
                  }
                `}
                style={{
                  touchAction: 'manipulation',
                }}
              >
                {service.category}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div
            role="tabpanel"
            id={`tabpanel-${activeCategory}`}
            aria-labelledby={`tab-${activeCategory}`}
            className={`
              transition-opacity duration-300 ease-in-out
              ${isAnimating ? 'opacity-0' : 'opacity-100'}
            `}
          >
            {/* Category Description */}
            <div className="mb-10 text-center max-w-4xl mx-auto">
              <p
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: 'var(--color-text-primary)', opacity: 0.9 }}
              >
                {activeService.description}
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {activeService.cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <h4 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                    {card.name}
                  </h4>
                  <p className="leading-relaxed text-base" style={{ color: 'var(--color-text-primary)', opacity: 0.7 }}>
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skip to content link for screen readers */}
        <a
          href="#services-end"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-400 focus:text-gray-900 focus:rounded"
        >
          Skip services section
        </a>
        <div id="services-end" />
      </div>
    </section>
  )
}

