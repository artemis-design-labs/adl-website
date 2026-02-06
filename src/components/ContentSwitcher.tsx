'use client';

import { useState } from 'react';
import { useContentVersion, SectionName } from '@/context/ContentVersionContext';
import { cn } from '@/lib/cn';

const sections: { name: SectionName; label: string }[] = [
  { name: 'navigation', label: 'Navigation' },
  { name: 'hero', label: 'Hero' },
  { name: 'problem', label: 'Problem Section' },
  { name: 'services', label: 'Services / How It Works' },
  { name: 'socialProof', label: 'Social Proof' },
  { name: 'caseStudy', label: 'Case Study' },
  { name: 'cta', label: 'CTA Section' },
  { name: 'footer', label: 'Footer' },
];

export function ContentSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { sectionVersions, setSectionVersion, setAllVersions } = useContentVersion();

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[100]">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'absolute top-1/2 -translate-y-1/2 transition-all duration-300',
          'bg-[#1a1a1a] text-white px-2 py-4 rounded-r-lg shadow-lg',
          'hover:bg-[#2a2a2a] border border-l-0 border-[#333]',
          'flex items-center justify-center',
          isOpen ? 'left-[280px]' : 'left-0'
        )}
        title={isOpen ? 'Close panel' : 'Content Version Switcher'}
      >
        <span className="writing-mode-vertical text-xs tracking-wider uppercase font-medium">
          {isOpen ? '×' : 'A/B Test'}
        </span>
      </button>

      {/* Panel */}
      <div
        className={cn(
          'fixed left-0 top-0 h-full w-[280px] bg-[#1a1a1a] text-white',
          'shadow-2xl border-r border-[#333] transition-transform duration-300',
          'overflow-y-auto',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="p-4">
          {/* Header */}
          <div className="mb-6 pb-4 border-b border-[#333]">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Content Version Switcher
            </h2>
            <p className="text-xs text-white/50 mt-1">
              Toggle between V1 (main) and V2 (AI-first rebrand) for each section
            </p>
          </div>

          {/* Global Toggle */}
          <div className="mb-6 p-3 bg-[#252525] rounded-lg border border-[#333]">
            <p className="text-xs uppercase tracking-wider text-white/60 mb-3">Set All Sections</p>
            <div className="flex gap-2">
              <button
                onClick={() => setAllVersions('v1')}
                className={cn(
                  'flex-1 py-2 px-3 text-xs font-medium rounded transition-colors',
                  Object.values(sectionVersions).every(v => v === 'v1')
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#333] text-white/70 hover:bg-[#444]'
                )}
              >
                All V1
              </button>
              <button
                onClick={() => setAllVersions('v2')}
                className={cn(
                  'flex-1 py-2 px-3 text-xs font-medium rounded transition-colors',
                  Object.values(sectionVersions).every(v => v === 'v2')
                    ? 'bg-green-600 text-white'
                    : 'bg-[#333] text-white/70 hover:bg-[#444]'
                )}
              >
                All V2
              </button>
            </div>
          </div>

          {/* Section Toggles */}
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-wider text-white/60 mb-3">Per-Section Control</p>
            {sections.map(({ name, label }) => (
              <div
                key={name}
                className="flex items-center justify-between p-3 bg-[#252525] rounded-lg border border-[#333]"
              >
                <span className="text-sm text-white/80">{label}</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setSectionVersion(name, 'v1')}
                    className={cn(
                      'px-3 py-1 text-xs font-medium rounded-l transition-colors',
                      sectionVersions[name] === 'v1'
                        ? 'bg-blue-600 text-white'
                        : 'bg-[#333] text-white/50 hover:bg-[#444]'
                    )}
                  >
                    V1
                  </button>
                  <button
                    onClick={() => setSectionVersion(name, 'v2')}
                    className={cn(
                      'px-3 py-1 text-xs font-medium rounded-r transition-colors',
                      sectionVersions[name] === 'v2'
                        ? 'bg-green-600 text-white'
                        : 'bg-[#333] text-white/50 hover:bg-[#444]'
                    )}
                  >
                    V2
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-6 pt-4 border-t border-[#333]">
            <p className="text-xs uppercase tracking-wider text-white/60 mb-2">Legend</p>
            <div className="space-y-1 text-xs text-white/50">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-600 rounded"></span>
                <span>V1 - Main Branch (Current)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-600 rounded"></span>
                <span>V2 - AI-First Rebrand</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
}
