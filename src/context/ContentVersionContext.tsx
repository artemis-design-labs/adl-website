'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ContentVersion = 'v1' | 'v2';
export type ColorPalette = 'default' | 'ocean' | 'terracotta';

// All sections with V1/V2 content support
// Note: Only hero, problem, socialProof, cta are shown in ContentSwitcher (Homepage sections)
export type SectionName =
  | 'hero'
  | 'problem'
  | 'services'
  | 'socialProof'
  | 'caseStudy'
  | 'cta';

type SectionVersions = Record<SectionName, ContentVersion>;

interface ContentVersionContextType {
  sectionVersions: SectionVersions;
  setSectionVersion: (section: SectionName, version: ContentVersion) => void;
  setAllVersions: (version: ContentVersion) => void;
  colorPalette: ColorPalette;
  setColorPalette: (palette: ColorPalette) => void;
}

const defaultVersions: SectionVersions = {
  hero: 'v1',
  problem: 'v1',
  services: 'v1',
  socialProof: 'v1',
  caseStudy: 'v1',
  cta: 'v1',
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

  const setColorPalette = (palette: ColorPalette) => {
    setColorPaletteState(palette);
  };

  return (
    <ContentVersionContext.Provider value={{
      sectionVersions,
      setSectionVersion,
      setAllVersions,
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
