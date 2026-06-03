'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { cn } from '@/lib/cn';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) throw new Error('Failed to submit form');

      setSuccess(true);
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setWaitlistSuccess(true);
    setWaitlistEmail('');
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              Contact
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] mb-6 leading-tight">
              Let's Talk About<br />Your Design System
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Whether you need a design system from scratch, help maintaining an existing one, or want to convert Figma to code - we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Calendar Section */}
      <section className="py-16 bg-[var(--color-bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
                Booking Calendar
              </span>
              <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] mb-4">
                Schedule a Discovery Call
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Book a 15-30 minute call to discuss your design system needs. No pitch deck, no pressure - just a conversation about your product.
              </p>
              <div className="space-y-3">
                {[
                  'We review your current setup',
                  'Identify gaps and opportunities',
                  'Recommend the right approach',
                  'Provide a custom proposal within 48 hours',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-text-muted)]">-</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] p-8 text-center">
              <p className="text-sm text-[var(--color-text-muted)] mb-4">Calendar integration coming soon</p>
              <a
                href="mailto:itadmin@artemisdesignlabs.com?subject=Discovery Call Request"
                className={cn(
                  'inline-block text-xs tracking-[0.08em] uppercase px-6 py-3',
                  'bg-[var(--color-text-primary)] text-[var(--color-bg-primary)]',
                  'hover:bg-[var(--color-text-secondary)]',
                  'transition-colors duration-150'
                )}
              >
                Request a Call via Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Free Audit Form Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Info */}
            <div>
              <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
                Free Audit
              </span>
              <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] mb-4">
                Get a Free Design System Audit
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                Tell us about your current situation and we'll provide actionable feedback on your design-to-code workflow.
              </p>

              <div className="space-y-4 mb-8">
                <div className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider">What happens next</div>
                {[
                  { step: '1', text: 'We review your request within 24 hours' },
                  { step: '2', text: 'Schedule a 15-30 minute discovery call' },
                  { step: '3', text: 'Receive a custom proposal within 48 hours' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <span className="w-6 h-6 bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] text-xs font-medium flex items-center justify-center flex-shrink-0">
                      {item.step}
                    </span>
                    <p className="text-sm text-[var(--color-text-secondary)]">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                <p className="text-xs text-[var(--color-text-muted)] mb-1">Prefer email?</p>
                <a
                  href="mailto:itadmin@artemisdesignlabs.com"
                  className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  itadmin@artemisdesignlabs.com
                </a>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              {success ? (
                <div className="p-8 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-center">
                  <p className="text-lg font-medium text-[var(--color-text-primary)] mb-2">Message sent!</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-text-primary)] focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-text-primary)] focus:outline-none transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-text-primary)] focus:outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-2">
                      What are you interested in?
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-text-primary)] focus:outline-none transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="creation">Design System Creation ($15-25K)</option>
                      <option value="maintenance">Design System Maintenance ($4-6K/mo)</option>
                      <option value="handoff">Design-to-Code Handoff ($8-15K)</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-text-primary)] focus:outline-none transition-colors resize-none"
                      placeholder="What's your current design system situation? What are you hoping to achieve?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={cn(
                      'w-full text-xs tracking-[0.08em] uppercase px-6 py-4',
                      'bg-[var(--color-text-primary)] text-[var(--color-bg-primary)]',
                      'hover:bg-[var(--color-text-secondary)]',
                      'transition-colors duration-150',
                      'disabled:opacity-50 disabled:cursor-not-allowed'
                    )}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* UI Forge Waitlist Section */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
            Coming Soon
          </span>
          <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] mb-4">
            UI Forge Waitlist
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-xl mx-auto">
            Get early access to UI Forge - our AI-powered design-to-code platform. Join the waitlist to be the first to know when we launch.
          </p>

          {waitlistSuccess ? (
            <div className="p-6 bg-[var(--color-bg-elevated)] border border-[var(--color-border)]">
              <p className="text-[var(--color-text-primary)]">You're on the list! We'll notify you when UI Forge launches.</p>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-text-primary)] focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className={cn(
                  'text-xs tracking-[0.08em] uppercase px-6 py-3',
                  'bg-[var(--color-text-primary)] text-[var(--color-bg-primary)]',
                  'hover:bg-[var(--color-text-secondary)]',
                  'transition-colors duration-150'
                )}
              >
                Join Waitlist
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
