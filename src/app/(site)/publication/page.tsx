import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

// Work-in-progress page — kept in the codebase but hidden from search
// engines (noindex) until it ships with real content.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const articles = [
    { id: 1, title: 'Design Trends 2024', summary: 'Explore the latest in UI/UX design for web and mobile.', image: '/images/publication/design-trends.png', link: '#' },
    { id: 2, title: 'Building with React', summary: 'A guide to building scalable web apps with React.', image: '/images/publication/react-guide.png', link: '#' },
    { id: 3, title: 'Figma for Teams', summary: 'Collaborative workflows and best practices in Figma.', image: '/images/publication/figma-teams.png', link: '#' },
    { id: 4, title: 'Accessibility in Design', summary: 'How to make your products accessible to everyone.', image: '/images/publication/accessibility.png', link: '#' },
    { id: 5, title: 'Design Systems 101', summary: 'Why every product team needs a design system.', image: '/images/publication/design-systems.png', link: '#' },
    { id: 6, title: 'Prototyping Fast', summary: 'Tips for rapid prototyping and iteration.', image: '/images/publication/prototyping.png', link: '#' },
];

export default function PublicationPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.025em] mb-8 text-center text-[var(--color-text-primary)]">Online Publication</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {articles.map(article => (
                    <a key={article.id} href={article.link} className="block bg-[var(--color-bg-elevated)] shadow rounded-lg overflow-hidden hover:shadow-lg transition">
                        <Image
                            src={article.image}
                            alt={article.title}
                            width={400}
                            height={160}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2 text-[var(--color-text-primary)]">{article.title}</h2>
                            <p className="text-[var(--color-text-secondary)] mb-2">{article.summary}</p>
                            <span className="text-[var(--color-accent-text)] text-sm font-medium">Read More →</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
} 