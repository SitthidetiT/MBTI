'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { useLang } from '@/context/LanguageContext';
import { personalities, GROUP_COLORS } from '@/data/personalities';
import type { TypeCode, Group } from '@/types';

const groups: { key: Group; types: TypeCode[]; th: string; en: string }[] = [
  {
    key: 'analysts',
    types: ['INTJ', 'INTP', 'ENTJ', 'ENTP'],
    th: 'นักวิเคราะห์ (Analysts)',
    en: 'Analysts',
  },
  {
    key: 'diplomats',
    types: ['INFJ', 'INFP', 'ENFJ', 'ENFP'],
    th: 'นักการทูต (Diplomats)',
    en: 'Diplomats',
  },
  {
    key: 'sentinels',
    types: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'],
    th: 'ผู้พิทักษ์ (Sentinels)',
    en: 'Sentinels',
  },
  {
    key: 'explorers',
    types: ['ISTP', 'ISFP', 'ESTP', 'ESFP'],
    th: 'นักสำรวจ (Explorers)',
    en: 'Explorers',
  },
];

export default function TypesPage() {
  const { lang } = useLang();

  return (
    <main className="min-h-screen relative z-10">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--text)] to-[var(--text-muted)]">
            {lang === 'th' ? '16 ประเภทบุคลิกภาพ' : '16 Personality Types'}
          </h1>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            {lang === 'th'
              ? 'คลิกที่แต่ละประเภทเพื่อดูรายละเอียดทั้งหมด — จุดแข็ง จุดอ่อน อาชีพ และอื่นๆ อีกมากมาย'
              : 'Click each type to view full details — strengths, weaknesses, careers, and much more.'}
          </p>
        </motion.div>

        {groups.map((g, gi) => {
          const colors = GROUP_COLORS[g.key];
          return (
            <motion.section
              key={g.key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: gi * 0.1 }}
              className="mb-14"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-4 h-4 rounded-full" style={{ backgroundColor: colors.accent }} />
                {lang === 'th' ? g.th : g.en}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {g.types.map((code, ci) => {
                  const p = personalities[code];
                  return (
                    <Link href={`/types/${code.toLowerCase()}`} key={code}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: gi * 0.1 + ci * 0.05 }}
                        className="rounded-2xl border hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer h-full overflow-hidden"
                        style={{ backgroundColor: colors.light, borderColor: colors.accent + '30' }}
                      >
                        {/* Character illustration */}
                        <div
                          className="w-full h-44 flex items-end justify-center overflow-hidden"
                          style={{ backgroundColor: colors.bg }}
                        >
                          <img
                            src={`https://api.dicebear.com/9.x/open-peeps/svg?seed=${code}&backgroundColor=${colors.bg.replace('#', '')}`}
                            alt={`${code} character`}
                            className="w-36 h-36 object-contain object-bottom"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg font-bold" style={{ color: colors.accent }}>
                            {code}
                          </h3>
                          <p className="text-sm font-medium text-[var(--text)] mb-2">
                            {p.nickname[lang]}
                          </p>
                          <p className="text-xs text-[var(--text-muted)] line-clamp-3 mb-3">
                            {p.overview[lang]}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {p.careers[lang].slice(0, 3).map((c, i) => (
                              <span
                                key={i}
                                className="text-[10px] px-2 py-0.5 rounded-full border"
                                style={{ borderColor: colors.accent + '40', color: colors.accent }}
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                          <p
                            className="text-[10px] mt-3 font-semibold"
                            style={{ color: colors.accent }}
                          >
                            {lang === 'th' ? 'คลิกดูรายละเอียด →' : 'View details →'}
                          </p>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </motion.section>
          );
        })}
      </div>
    </main>
  );
}
