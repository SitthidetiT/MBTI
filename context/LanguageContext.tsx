'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Lang } from '@/types';

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'th',
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('th');

  useEffect(() => {
    const saved = localStorage.getItem('mbti_lang') as Lang | null;
    if (saved === 'th' || saved === 'en') {
      // eslint-disable-next-line
      setLang(saved);
    } else {
      const browserLang = navigator.language ?? 'en';

      setLang(browserLang.startsWith('th') ? 'th' : 'en');
    }
  }, []);

  const toggleLang = () => {
    const next: Lang = lang === 'th' ? 'en' : 'th';
    setLang(next);
    localStorage.setItem('mbti_lang', next);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>{children}</LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  return useContext(LanguageContext);
}
