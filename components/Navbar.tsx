'use client';
import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';
import { t } from '@/data/translations';

export default function Navbar() {
  const { lang, toggleLang } = useLang();
  const tx = t[lang];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl border-b border-white/50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-[var(--text)] text-lg tracking-wide hover:opacity-80 transition-opacity"
        >
          <span className="text-2xl">🧠</span>
          <span>{tx.nav_logo as string}</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/test"
            className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90"
          >
            {tx.nav_start as string}
          </Link>
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border)] text-sm font-medium hover:bg-[var(--accent-light)] hover:border-[var(--accent)] text-[var(--text-muted)] hover:text-[var(--accent)] cursor-pointer"
            aria-label="Toggle language"
          >
            {lang === 'th' ? '🇬🇧 EN' : '🇹🇭 TH'}
          </button>
        </div>
      </div>
    </nav>
  );
}
