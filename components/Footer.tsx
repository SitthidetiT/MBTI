'use client';
import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';

export default function Footer() {
  const { lang } = useLang();

  const links = [
    { href: '/test?mode=standard', th: 'แบบทดสอบ', en: 'Test' },
    { href: '/types', th: 'ประเภทบุคลิกภาพ', en: 'Types' },
    { href: '/careers', th: 'เส้นทางอาชีพ', en: 'Careers' },
    { href: '/services', th: 'บริการ', en: 'Services' },
    { href: '/articles', th: 'บทความ', en: 'Articles' },
  ];

  return (
    <footer
      className="relative z-10 border-t border-[var(--border)] bg-white/40 backdrop-blur-md mt-20"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-lg text-[var(--text)] mb-3"
            >
              <span className="text-2xl">🧠</span>
              {lang === 'th' ? 'MBTI ประเมินบุคลิกภาพ' : 'MBTI Personality Test'}
            </Link>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              {lang === 'th'
                ? 'แบบทดสอบบุคลิกภาพ MBTI มาตรฐานสากล ช่วยให้คุณเข้าใจตัวเอง ค้นพบจุดแข็ง และเส้นทางอาชีพที่เหมาะสม'
                : 'An internationally recognized MBTI personality test to help you understand yourself, discover strengths, and find suitable career paths.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[var(--text)] mb-3">
              {lang === 'th' ? 'ลิงก์ด่วน' : 'Quick Links'}
            </h4>
            <ul className="space-y-2" aria-label={lang === 'th' ? 'ลิงก์ด่วน' : 'Quick Links'}>
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {lang === 'th' ? l.th : l.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Creator */}
          <div>
            <h4 className="font-semibold text-[var(--text)] mb-3">
              {lang === 'th' ? 'ผู้สร้าง' : 'Creator'}
            </h4>
            <p className="text-sm text-[var(--text-muted)] mb-2">
              {lang === 'th' ? 'สร้างโดย' : 'Built by'}{' '}
              <a
                href="https://github.com/SitthidetiT"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--accent)] hover:underline"
              >
                SitthidetSR
              </a>
            </p>
            <p className="text-sm text-[var(--text-muted)]">📧 673245004@mcru.ac.th</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} MBTI Personality Test.{' '}
            {lang === 'th' ? 'สงวนลิขสิทธิ์ทุกประการ' : 'All rights reserved.'}
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            {lang === 'th' ? 'สร้างด้วย ❤️ โดย SitthidetSR' : 'Made with ❤️ by SitthidetSR'}
          </p>
        </div>
      </div>
    </footer>
  );
}
