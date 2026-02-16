'use client';

import { useState } from 'react';
import { useContentVersion, SectionName, ColorPalette } from '@/context/ContentVersionContext';

// Only Homepage sections that have V1/V2 content variants
const sections: { name: SectionName; label: string }[] = [
  { name: 'hero', label: 'Hero' },
  { name: 'problem', label: 'Problem Section' },
  { name: 'socialProof', label: 'Social Proof' },
  { name: 'cta', label: 'CTA Section' },
];

const palettes: { id: ColorPalette; label: string; color: string }[] = [
  { id: 'default', label: 'Sage Green', color: '#7D8471' },
  { id: 'ocean', label: 'Ocean Blue', color: '#4A90A4' },
  { id: 'terracotta', label: 'Terracotta', color: '#B87A5A' },
];

export function ContentSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { sectionVersions, setSectionVersion, setAllVersions, colorPalette, setColorPalette } = useContentVersion();

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          left: isOpen ? '280px' : '0',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 9999,
          backgroundColor: '#1a1a1a',
          color: '#ffffff',
          padding: '16px 8px',
          borderRadius: '0 8px 8px 0',
          border: '1px solid #333',
          borderLeft: 'none',
          cursor: 'pointer',
          transition: 'left 0.3s ease',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}
        title={isOpen ? 'Close panel' : 'Content Version Switcher'}
      >
        {isOpen ? '×' : 'A/B Test'}
      </button>

      {/* Panel */}
      <div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          height: '100vh',
          width: '280px',
          backgroundColor: '#1a1a1a',
          color: '#ffffff',
          zIndex: 9998,
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease',
          overflowY: 'auto',
          borderRight: '1px solid #333',
          boxShadow: isOpen ? '4px 0 20px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        <div style={{ padding: '16px' }}>
          {/* Header */}
          <div style={{ marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #333' }}>
            <h2 style={{
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'rgba(255,255,255,0.9)',
              margin: 0,
            }}>
              Content Version Switcher
            </h2>
            <p style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.5)',
              marginTop: '4px',
              margin: '4px 0 0 0',
            }}>
              Toggle between V1 and V2 content variants
            </p>
            <p style={{
              fontSize: '10px',
              color: '#f59e0b',
              marginTop: '8px',
              margin: '8px 0 0 0',
              padding: '6px 8px',
              backgroundColor: 'rgba(245, 158, 11, 0.1)',
              borderRadius: '4px',
            }}>
              Note: Only affects Homepage sections
            </p>
          </div>

          {/* Color Palette Section */}
          <div style={{
            marginBottom: '24px',
            padding: '12px',
            backgroundColor: '#252525',
            borderRadius: '8px',
            border: '1px solid #333',
          }}>
            <p style={{
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '12px',
              margin: '0 0 12px 0',
            }}>
              Color Palette
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {palettes.map((palette) => (
                <button
                  key={palette.id}
                  onClick={() => setColorPalette(palette.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 12px',
                    fontSize: '12px',
                    fontWeight: 500,
                    borderRadius: '6px',
                    border: colorPalette === palette.id ? `2px solid ${palette.color}` : '2px solid transparent',
                    cursor: 'pointer',
                    backgroundColor: colorPalette === palette.id ? 'rgba(255,255,255,0.1)' : '#333',
                    color: colorPalette === palette.id ? '#fff' : 'rgba(255,255,255,0.7)',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: palette.color,
                    borderRadius: '4px',
                    flexShrink: 0,
                  }}></span>
                  <span>{palette.label}</span>
                  {colorPalette === palette.id && (
                    <span style={{ marginLeft: 'auto', fontSize: '10px', color: palette.color }}>✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Global Toggle */}
          <div style={{
            marginBottom: '24px',
            padding: '12px',
            backgroundColor: '#252525',
            borderRadius: '8px',
            border: '1px solid #333',
          }}>
            <p style={{
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '12px',
              margin: '0 0 12px 0',
            }}>
              Set All Sections
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setAllVersions('v1')}
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  fontSize: '11px',
                  fontWeight: 500,
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: Object.values(sectionVersions).every(v => v === 'v1') ? '#2563eb' : '#333',
                  color: Object.values(sectionVersions).every(v => v === 'v1') ? '#fff' : 'rgba(255,255,255,0.7)',
                }}
              >
                All V1
              </button>
              <button
                onClick={() => setAllVersions('v2')}
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  fontSize: '11px',
                  fontWeight: 500,
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: Object.values(sectionVersions).every(v => v === 'v2') ? '#16a34a' : '#333',
                  color: Object.values(sectionVersions).every(v => v === 'v2') ? '#fff' : 'rgba(255,255,255,0.7)',
                }}
              >
                All V2
              </button>
            </div>
          </div>

          {/* Section Toggles */}
          <div>
            <p style={{
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '12px',
              margin: '0 0 12px 0',
            }}>
              Per-Section Control
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {sections.map(({ name, label }) => (
                <div
                  key={name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px',
                    backgroundColor: '#252525',
                    borderRadius: '8px',
                    border: '1px solid #333',
                  }}
                >
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>{label}</span>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    <button
                      onClick={() => setSectionVersion(name, 'v1')}
                      style={{
                        padding: '4px 12px',
                        fontSize: '11px',
                        fontWeight: 500,
                        borderRadius: '4px 0 0 4px',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: sectionVersions[name] === 'v1' ? '#2563eb' : '#333',
                        color: sectionVersions[name] === 'v1' ? '#fff' : 'rgba(255,255,255,0.5)',
                      }}
                    >
                      V1
                    </button>
                    <button
                      onClick={() => setSectionVersion(name, 'v2')}
                      style={{
                        padding: '4px 12px',
                        fontSize: '11px',
                        fontWeight: 500,
                        borderRadius: '0 4px 4px 0',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: sectionVersions[name] === 'v2' ? '#16a34a' : '#333',
                        color: sectionVersions[name] === 'v2' ? '#fff' : 'rgba(255,255,255,0.5)',
                      }}
                    >
                      V2
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #333' }}>
            <p style={{
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '8px',
              margin: '0 0 8px 0',
            }}>
              Legend
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '12px', height: '12px', backgroundColor: '#2563eb', borderRadius: '2px' }}></span>
                <span>V1 - Main Branch (Current)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '12px', height: '12px', backgroundColor: '#16a34a', borderRadius: '2px' }}></span>
                <span>V2 - AI-First Rebrand</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
