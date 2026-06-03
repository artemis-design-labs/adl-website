'use client';

import React, { useState } from 'react';

export default function DesignSystemLicensePage() {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess(true);
    };

    return (
        <div className="max-w-3xl mx-auto px-6 pt-32 pb-16">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.025em] mb-6 text-center text-[var(--color-text-primary)]">Purchase Design System License</h1>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8 text-center">
                Unlock our comprehensive Design System for your team. Get access to a robust set of components, documentation, and ongoing updates.
            </p>
            <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] shadow-[var(--shadow-md)] rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-3 text-[var(--color-text-primary)]">What&apos;s Included</h2>
                <ul className="list-disc pl-6 mb-5 text-[var(--color-text-secondary)] space-y-1">
                    <li>Full Figma file & codebase</li>
                    <li>Reusable React components</li>
                    <li>Extensive documentation</li>
                    <li>Lifetime updates</li>
                    <li>Commercial use license</li>
                </ul>
                <div className="text-3xl font-semibold tracking-[-0.025em] text-[var(--color-accent)] mb-1">$299</div>
                <div className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] mb-5">one-time payment per team</div>
                {success ? (
                    <div role="status" className="bg-[var(--color-success-muted)] text-[var(--color-success)] border border-[var(--color-success)]/40 p-4 rounded-md text-sm">Thank you! We&apos;ll contact you soon.</div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <label htmlFor="license-email" className="sr-only">Your email address</label>
                        <input
                            id="license-email"
                            type="email"
                            placeholder="Your email address"
                            className="border border-[var(--color-border)] bg-[var(--color-bg-inset)] text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] px-4 py-3 rounded-md focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="bg-[var(--color-accent)] text-[var(--color-text-on-accent)] font-medium px-4 py-3 rounded-md hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)] transition-all">
                            Purchase License
                        </button>
                    </form>
                )}
            </div>
            <div className="text-sm text-[var(--color-text-tertiary)] text-center">
                Need a custom license or have questions?{' '}
                <a href="/contact" className="text-[var(--color-accent-text)] hover:text-[var(--color-accent-hover)] underline-offset-4 hover:underline">Contact us</a>.
            </div>
        </div>
    );
} 