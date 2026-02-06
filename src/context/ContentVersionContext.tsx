'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type ContentVersion = 'v1' | 'v2';

export type SectionName =
  | 'hero'
  | 'problem'
  | 'services'
  | 'socialProof'
  | 'caseStudy'
  | 'cta'
  | 'navigation'
  | 'footer';

type SectionVersions = Record<SectionName, ContentVersion>;

interface ContentVersionContextType {
  sectionVersions: SectionVersions;
  setSectionVersion: (section: SectionName, version: ContentVersion) => void;
  setAllVersions: (version: ContentVersion) => void;
}

const defaultVersions: SectionVersions = {
  hero: 'v1',
  problem: 'v1',
  services: 'v1',
  socialProof: 'v1',
  caseStudy: 'v1',
  cta: 'v1',
  navigation: 'v1',
  footer: 'v1',
};

const ContentVersionContext = createContext<ContentVersionContextType | undefined>(undefined);

export function ContentVersionProvider({ children }: { children: ReactNode }) {
  const [sectionVersions, setSectionVersions] = useState<SectionVersions>(defaultVersions);

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

  return (
    <ContentVersionContext.Provider value={{ sectionVersions, setSectionVersion, setAllVersions }}>
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
