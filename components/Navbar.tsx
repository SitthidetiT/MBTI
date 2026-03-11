'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';
import { t } from '@/data/translations';

const navLinks = [
  { href: '/test?mode=standard', labelTh: 'แบบทดสอบ', labelEn: 'Test' },
  { href: '/types', labelTh: 'ประเภทบุคลิกภาพ', labelEn: 'Types' },
  { href: '/careers', labelTh: 'เส้นทางอาชีพ', labelEn: 'Careers' },
  { href: '/services', labelTh: 'บริการ', labelEn: 'Services' },
  { href: '/articles', labelTh: 'บทความ', labelEn: 'Articles' },
];

export default function Navbar() {
  const { lang, toggleLang } = useLang();
  const tx = t[lang];
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl border-b border-white/50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-[var(--text)] text-lg tracking-wide hover:opacity-80 transition-opacity"
        >
          <span className="text-2xl">🧠</span>
          <span className="hidden sm:inline">{tx.nav_logo as string}</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 rounded-full text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-light)] transition-all"
            >
              {lang === 'th' ? l.labelTh : l.labelEn}
            </Link>
          ))}
          <button
            onClick={toggleLang}
            className="ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border)] text-sm font-medium hover:bg-[var(--accent-light)] hover:border-[var(--accent)] text-[var(--text-muted)] hover:text-[var(--accent)] cursor-pointer"
            aria-label="Toggle language"
          >
            {lang === 'th' ? '🇬🇧 EN' : '🇹🇭 TH'}
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLang}
            className="px-2.5 py-1.5 rounded-full border border-[var(--border)] text-xs font-medium text-[var(--text-muted)] cursor-pointer"
          >
            {lang === 'th' ? '🇬🇧' : '🇹🇭'}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
            aria-label="Menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-white/50 px-4 pb-4 space-y-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-light)] transition-all"
            >
              {lang === 'th' ? l.labelTh : l.labelEn}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
