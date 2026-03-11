'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { useLang } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { personalities, GROUP_COLORS } from '@/data/personalities';
import type { Group } from '@/types';

const GROUPS: { key: Group; types: string[] }[] = [
  { key: 'analysts', types: ['INTJ', 'INTP', 'ENTJ', 'ENTP'] },
  { key: 'diplomats', types: ['INFJ', 'INFP', 'ENFJ', 'ENFP'] },
  { key: 'sentinels', types: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'] },
  { key: 'explorers', types: ['ISTP', 'ISFP', 'ESTP', 'ESFP'] },
];

const GROUP_NAMES: Record<Group, { th: string; en: string }> = {
  analysts: { th: 'นักวิเคราะห์', en: 'Analysts' },
  diplomats: { th: 'นักการทูต', en: 'Diplomats' },
  sentinels: { th: 'ผู้พิทักษ์', en: 'Sentinels' },
  explorers: { th: 'นักสำรวจ', en: 'Explorers' },
};

export default function HomePage() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 text-center max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-block px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/60 backdrop-blur-md border border-[var(--border)] text-[var(--accent)] mb-8 shadow-sm">
            ✨ {tx.hero_badge as string}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--text)] to-[var(--text-muted)]">
              {tx.hero_title as string}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            {tx.hero_subtitle as string}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <Link
                href="/test?mode=standard"
                className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-[var(--accent)] text-white font-semibold text-base hover:scale-[1.02] transition-all shadow-xl"
              >
                📝 {tx.hero_cta_standard as string}
              </Link>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <Link
                href="/test?mode=detailed"
                className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-base hover:scale-[1.02] transition-all shadow-xl"
              >
                🔬 {tx.hero_cta_detailed as string}
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
            <p className="text-xs font-medium text-[var(--text-muted)] bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/40 shadow-sm">
              ⏱ {tx.hero_time_standard as string}
            </p>
            <p className="text-xs font-medium text-[var(--text-muted)] bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/40 shadow-sm">
              ⏱ {tx.hero_time_detailed as string}
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {(
            [
              { num: '60', label: lang === 'th' ? 'คำถาม' : 'Questions' },
              { num: '5', label: lang === 'th' ? 'มิติตัดสิน' : 'Dimensions' },
              { num: '16', label: lang === 'th' ? 'บุคลิกภาพ' : 'Types' },
            ] as const
          ).map(({ num, label }) => (
            <div
              key={num}
              className="group relative bg-white/60 backdrop-blur-md rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:shadow-[0_8px_30px_rgb(139,92,246,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-violet-600 to-indigo-500 mb-2 group-hover:scale-105 transition-transform">
                {num}
              </div>
              <div className="text-sm font-medium text-[var(--text-muted)]">{label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      <div className="max-w-3xl mx-auto px-4">
        <div className="border-t border-[var(--border)]" />
      </div>

      {/* 16 Types grid */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-center text-[var(--text)] mb-12"
        >
          {tx.groups_title as string}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {GROUPS.map(({ key, types }, gi) => {
            const colors = GROUP_COLORS[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1 }}
                style={{ backgroundColor: colors.bg, borderColor: colors.light }}
                className="rounded-[2rem] p-6 lg:p-8 border backdrop-blur-sm shadow-[0_4px_20px_rgb(0,0,0,0.02)] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    style={{
                      backgroundColor: colors.accent,
                      boxShadow: `0 0 10px ${colors.accent}40`,
                    }}
                    className="w-3 h-3 rounded-full"
                  />
                  <h3
                    className="font-semibold text-base tracking-wide"
                    style={{ color: colors.accent }}
                  >
                    {GROUP_NAMES[key][lang]}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {types.map((code) => {
                    const p = personalities[code as keyof typeof personalities];
                    return (
                      <div
                        key={code}
                        className="group bg-white/70 backdrop-blur-md hover:bg-white rounded-2xl px-4 py-3 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default border border-white/50"
                      >
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300 origin-bottom">
                          {p.emoji}
                        </span>
                        <div>
                          <div
                            className="font-bold text-sm tracking-wide"
                            style={{ color: colors.accent }}
                          >
                            {code}
                          </div>
                          <div className="text-[11px] sm:text-xs font-medium text-[var(--text-muted)] mt-0.5">
                            {p.nickname[lang]}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/test"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--accent)] text-white font-semibold text-lg hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-violet-200"
          >
            {tx.hero_cta as string} →
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
