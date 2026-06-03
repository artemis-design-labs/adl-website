'use client';

import { useCallback, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Turnstile } from '@/components/atoms/Turnstile';
import { cn } from '@/lib/cn';

const TURNSTILE_REQUIRED = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);
const ADMIN_EMAIL = 'itadmin@artemisdesignlabs.com';

const SERVICES = [
  { value: 'creation',   label: 'Design System Creation — $15-25K' },
  { value: 'maintenance',label: 'Design System Maintenance — $4-6K / mo' },
  { value: 'handoff',    label: 'Design-to-Code Handoff — $8-15K' },
  { value: 'not-sure',   label: "Not sure yet — let's talk" },
];

const EXPECT_STEPS = [
  { num: '01', label: 'Within 24h', detail: 'We review your message and respond to schedule.' },
  { num: '02', label: '15-30 min call', detail: 'No pitch deck. We talk about what you\'re building and where it\'s stuck.' },
  { num: '03', label: 'Free audit, 48h', detail: 'You get an audit of your design-to-code workflow. Yours to keep either way.' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onTurnstileToken = useCallback((token: string) => setTurnstileToken(token), []);
  const onTurnstileExpire = useCallback(() => setTurnstileToken(null), []);

  const canSubmit = status !== 'loading' && (!TURNSTILE_REQUIRED || Boolean(turnstileToken));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ ...formData, turnstileToken }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
      setTurnstileToken(null);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg("Something went wrong. Try again or email us directly.");
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <Navigation />
      <main id="main-content">

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[50vh] pointer-events-none opacity-60"
          style={{ background: 'var(--gradient-subtle)' }}
        />
        <div className="relative max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-5">
              › get in touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] leading-[1.05]">
              Let&apos;s build the
              <br />
              <span className="text-[var(--color-accent)]">right infrastructure</span>
              <br />
              for what you&apos;re scaling.
            </h1>
            <p className="mt-7 text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              We&apos;ve been on your side of this call. We know what you&apos;re looking for. No pitch deck, no pressure — just a real conversation about your design infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="py-16 md:py-20">
        <div className="max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left — what to expect */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
              <div>
                <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-3">
                  › what to expect
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-tight">
                  Three steps. Zero surprises.
                </h2>
              </div>

              <ol className="space-y-5">
                {EXPECT_STEPS.map((step) => (
                  <li
                    key={step.num}
                    className={cn(
                      'flex items-start gap-4 p-5 rounded-xl',
                      'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]'
                    )}
                  >
                    <span className="font-[var(--font-mono)] text-[12px] uppercase tracking-[0.18em] text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      {step.num}
                    </span>
                    <div className="flex-1">
                      <div className="text-base font-medium text-[var(--color-text-primary)] mb-1">
                        {step.label}
                      </div>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="p-5 rounded-xl bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]">
                <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] mb-2">
                  › prefer email
                </p>
                <a
                  href={`mailto:${ADMIN_EMAIL}`}
                  className="inline-flex items-center gap-2 text-base text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors underline-offset-4 hover:underline break-all"
                  title="Opens your email client"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="flex-shrink-0 text-[var(--color-accent)]">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <polyline points="22 6 12 13 2 6" />
                  </svg>
                  <span>{ADMIN_EMAIL}</span>
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-7">
              {status === 'success' ? (
                <SuccessCard onReset={() => setStatus('idle')} />
              ) : (
                <form
                  onSubmit={onSubmit}
                  className={cn(
                    'p-7 md:p-10 rounded-2xl',
                    'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]',
                    'shadow-[var(--shadow-md)]',
                    'space-y-6'
                  )}
                  noValidate
                >
                  {status === 'error' && (
                    <div
                      role="alert"
                      className="p-4 rounded-md border border-[var(--color-error)]/60 bg-[var(--color-error-muted)] text-sm text-[var(--color-error)]"
                    >
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Name" name="name" required value={formData.name} onChange={onChange} placeholder="Your name" />
                    <Field label="Company" name="company" value={formData.company} onChange={onChange} placeholder="Your company" />
                  </div>

                  <Field label="Email" name="email" type="email" required value={formData.email} onChange={onChange} placeholder="you@company.com" />

                  <SelectField
                    label="What are you interested in?"
                    name="service"
                    value={formData.service}
                    onChange={onChange}
                    options={SERVICES}
                  />

                  <TextareaField
                    label="Tell us about your project"
                    name="message"
                    required
                    value={formData.message}
                    onChange={onChange}
                    placeholder="What's your current design system situation? What are you hoping to achieve?"
                  />

                  {TURNSTILE_REQUIRED && (
                    <Turnstile onToken={onTurnstileToken} onExpire={onTurnstileExpire} theme="auto" />
                  )}

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className={cn(
                      'inline-flex items-center justify-center gap-2 w-full h-12 rounded-md',
                      'bg-[var(--color-accent)] text-[var(--color-text-on-accent)]',
                      'font-medium text-base',
                      'hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)]',
                      'active:translate-y-px',
                      'transition-all duration-150',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-elevated)]',
                      'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:active:translate-y-0'
                    )}
                  >
                    {status === 'loading' ? (
                      'Sending…'
                    ) : (
                      <>
                        Send Message
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] text-center">
                    we respond within 24 hours · usually faster
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
function Field({ label, name, required, ...rest }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] mb-2"
      >
        {label} {required && <span className="text-[var(--color-accent)]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        required={required}
        className={cn(
          'w-full h-11 px-4 rounded-md',
          'bg-[var(--color-bg-inset)] border border-[var(--color-border)]',
          'text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)]',
          'focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30',
          'transition-colors'
        )}
        {...rest}
      />
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
}
function SelectField({ label, name, value, onChange, options }: SelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] mb-2"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={cn(
          'w-full h-11 px-4 rounded-md',
          'bg-[var(--color-bg-inset)] border border-[var(--color-border)]',
          'text-[var(--color-text-primary)]',
          'focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30',
          'transition-colors'
        )}
      >
        <option value="">Choose a service…</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}
function TextareaField({ label, name, required, ...rest }: TextareaFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] mb-2"
      >
        {label} {required && <span className="text-[var(--color-accent)]">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        rows={6}
        className={cn(
          'w-full px-4 py-3 rounded-md resize-y',
          'bg-[var(--color-bg-inset)] border border-[var(--color-border)]',
          'text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)]',
          'focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30',
          'transition-colors'
        )}
        {...rest}
      />
    </div>
  );
}

function SuccessCard({ onReset }: { onReset: () => void }) {
  return (
    <div
      className={cn(
        'p-10 md:p-12 rounded-2xl text-center',
        'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]',
        'shadow-[var(--shadow-md)]'
      )}
      role="status"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]/40 mb-6">
        <svg className="w-7 h-7 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[var(--color-text-primary)] mb-2">
        Message sent.
      </h2>
      <p className="text-base text-[var(--color-text-secondary)] mb-7">
        We&apos;ll get back to you within 24 hours — usually faster.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors underline-offset-4 hover:underline"
      >
        Send another →
      </button>
    </div>
  );
}
