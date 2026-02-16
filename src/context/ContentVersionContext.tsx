'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ContentVersion = 'v1' | 'v2';
export type ColorPalette = 'default' | 'ocean' | 'terracotta';

// Page identifiers
export type PageName = 'home' | 'about' | 'services' | 'ourAi' | 'work' | 'pricing' | 'contact';

// Section names per page
export type HomeSectionName = 'home-hero' | 'home-problem' | 'home-howItWorks' | 'home-ourAiPreview' | 'home-socialProof' | 'home-cta';
export type AboutSectionName = 'about-hero' | 'about-originStory' | 'about-team' | 'about-values' | 'about-cta';
export type ServicesSectionName = 'services-hero' | 'services-creation' | 'services-maintenance' | 'services-handoff' | 'services-cta';
export type OurAiSectionName = 'ourAi-hero' | 'ourAi-humanVsAi' | 'ourAi-technology' | 'ourAi-comparison' | 'ourAi-cta';
export type WorkSectionName = 'work-hero' | 'work-metrics' | 'work-caseStudies' | 'work-cta';
export type PricingSectionName = 'pricing-hero' | 'pricing-tiers' | 'pricing-comparison' | 'pricing-faq' | 'pricing-cta';
export type ContactSectionName = 'contact-hero' | 'contact-booking' | 'contact-audit' | 'contact-waitlist';

export type SectionName =
  | HomeSectionName
  | AboutSectionName
  | ServicesSectionName
  | OurAiSectionName
  | WorkSectionName
  | PricingSectionName
  | ContactSectionName;

type SectionVersions = Record<SectionName, ContentVersion>;

interface ContentVersionContextType {
  sectionVersions: SectionVersions;
  setSectionVersion: (section: SectionName, version: ContentVersion) => void;
  setAllVersions: (version: ContentVersion) => void;
  setAllVersionsForPage: (page: PageName, version: ContentVersion) => void;
  colorPalette: ColorPalette;
  setColorPalette: (palette: ColorPalette) => void;
}

const defaultVersions: SectionVersions = {
  // Home
  'home-hero': 'v1',
  'home-problem': 'v1',
  'home-howItWorks': 'v1',
  'home-ourAiPreview': 'v1',
  'home-socialProof': 'v1',
  'home-cta': 'v1',
  // About
  'about-hero': 'v1',
  'about-originStory': 'v1',
  'about-team': 'v1',
  'about-values': 'v1',
  'about-cta': 'v1',
  // Services
  'services-hero': 'v1',
  'services-creation': 'v1',
  'services-maintenance': 'v1',
  'services-handoff': 'v1',
  'services-cta': 'v1',
  // Our AI
  'ourAi-hero': 'v1',
  'ourAi-humanVsAi': 'v1',
  'ourAi-technology': 'v1',
  'ourAi-comparison': 'v1',
  'ourAi-cta': 'v1',
  // Work
  'work-hero': 'v1',
  'work-metrics': 'v1',
  'work-caseStudies': 'v1',
  'work-cta': 'v1',
  // Pricing
  'pricing-hero': 'v1',
  'pricing-tiers': 'v1',
  'pricing-comparison': 'v1',
  'pricing-faq': 'v1',
  'pricing-cta': 'v1',
  // Contact
  'contact-hero': 'v1',
  'contact-booking': 'v1',
  'contact-audit': 'v1',
  'contact-waitlist': 'v1',
};

// Map pages to their sections
export const pageSections: Record<PageName, { name: SectionName; label: string }[]> = {
  home: [
    { name: 'home-hero', label: 'Hero' },
    { name: 'home-problem', label: 'Problem Section' },
    { name: 'home-howItWorks', label: 'How It Works' },
    { name: 'home-ourAiPreview', label: 'Our AI Preview' },
    { name: 'home-socialProof', label: 'Social Proof' },
    { name: 'home-cta', label: 'CTA' },
  ],
  about: [
    { name: 'about-hero', label: 'Hero' },
    { name: 'about-originStory', label: 'Origin Story' },
    { name: 'about-team', label: 'Team' },
    { name: 'about-values', label: 'Values' },
    { name: 'about-cta', label: 'CTA' },
  ],
  services: [
    { name: 'services-hero', label: 'Hero' },
    { name: 'services-creation', label: 'Design System Creation' },
    { name: 'services-maintenance', label: 'Design System Maintenance' },
    { name: 'services-handoff', label: 'Design-to-Code' },
    { name: 'services-cta', label: 'CTA' },
  ],
  ourAi: [
    { name: 'ourAi-hero', label: 'Hero' },
    { name: 'ourAi-humanVsAi', label: 'Human vs AI' },
    { name: 'ourAi-technology', label: 'Technology' },
    { name: 'ourAi-comparison', label: 'Comparison Table' },
    { name: 'ourAi-cta', label: 'CTA' },
  ],
  work: [
    { name: 'work-hero', label: 'Hero' },
    { name: 'work-metrics', label: 'Metrics' },
    { name: 'work-caseStudies', label: 'Case Studies' },
    { name: 'work-cta', label: 'CTA' },
  ],
  pricing: [
    { name: 'pricing-hero', label: 'Hero' },
    { name: 'pricing-tiers', label: 'Service Tiers' },
    { name: 'pricing-comparison', label: 'Comparison' },
    { name: 'pricing-faq', label: 'FAQ' },
    { name: 'pricing-cta', label: 'CTA' },
  ],
  contact: [
    { name: 'contact-hero', label: 'Hero' },
    { name: 'contact-booking', label: 'Booking Calendar' },
    { name: 'contact-audit', label: 'Free Audit Form' },
    { name: 'contact-waitlist', label: 'UI Forge Waitlist' },
  ],
};

const ContentVersionContext = createContext<ContentVersionContextType | undefined>(undefined);

export function ContentVersionProvider({ children }: { children: ReactNode }) {
  const [sectionVersions, setSectionVersions] = useState<SectionVersions>(defaultVersions);
  const [colorPalette, setColorPaletteState] = useState<ColorPalette>('default');

  // Apply palette to document
  useEffect(() => {
    if (colorPalette === 'default') {
      document.documentElement.removeAttribute('data-palette');
    } else {
      document.documentElement.setAttribute('data-palette', colorPalette);
    }
  }, [colorPalette]);

  const setSectionVersion = (section: SectionName, version: ContentVersion) => {
    setSectionVersions(prev => ({ ...prev, [section]: version }));
  };

  const setAllVersions = (version: ContentVersion) => {
    const allSame = Object.keys(defaultVersions).reduce((acc, key) => {
      acc[key as SectionName] = version;
      return acc;
    }, {} as SectionVersions);
    setSectionVersions(allSame);
  };

  const setAllVersionsForPage = (page: PageName, version: ContentVersion) => {
    const sections = pageSections[page];
    setSectionVersions(prev => {
      const updated = { ...prev };
      sections.forEach(section => {
        updated[section.name] = version;
      });
      return updated;
    });
  };

  const setColorPalette = (palette: ColorPalette) => {
    setColorPaletteState(palette);
  };

  return (
    <ContentVersionContext.Provider value={{
      sectionVersions,
      setSectionVersion,
      setAllVersions,
      setAllVersionsForPage,
      colorPalette,
      setColorPalette
    }}>
      {children}
    </ContentVersionContext.Provider>
  );
}

export function useContentVersion() {
  const context = useContext(ContentVersionContext);
  if (!context) {
    throw new Error('useContentVersion must be used within ContentVersionProvider');
  }
  return context;
}

export function useSectionVersion(section: SectionName): ContentVersion {
  const { sectionVersions } = useContentVersion();
  return sectionVersions[section];
}
