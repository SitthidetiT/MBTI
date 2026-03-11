'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ShareCard from '@/components/ShareCard';
import { useLang } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { personalities, GROUP_COLORS, getTypeKey, getIdentity } from '@/data/personalities';
import type { DimScores, Lang } from '@/types';

interface TraitBarProps {
  labelA: string;
  labelB: string;
  pct: number;
  accentColor: string;
}

function TraitBar({ labelA, labelB, pct, accentColor }: TraitBarProps) {
  const dominantA = pct >= 50;
  const dominantPct = dominantA ? pct : 100 - pct;
  const dominantLabel = dominantA ? labelA : labelB;

  return (
    <div className="mb-5">
      <div className="flex justify-between text-sm mb-1.5">
        <span className={`font-semibold ${dominantA ? '' : 'text-[var(--text-muted)]'}`}>
          {labelA}
        </span>
        <span className={`font-semibold ${!dominantA ? '' : 'text-[var(--text-muted)]'}`}>
          {labelB}
        </span>
      </div>
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden relative">
        {dominantA ? (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ backgroundColor: accentColor }}
            className="h-full rounded-full"
          />
        ) : (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${100 - pct}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ backgroundColor: accentColor }}
            className="h-full rounded-full absolute right-0"
          />
        )}
      </div>
      <p className="text-xs text-right mt-1" style={{ color: accentColor }}>
        {dominantPct}% {dominantLabel}
      </p>
    </div>
  );
}

function ResultContent() {
  const { lang } = useLang();
  const tx = t[lang];
  const searchParams = useSearchParams();

  const scores: DimScores = {
    EI: parseInt(searchParams.get('EI') ?? '50'),
    NS: parseInt(searchParams.get('NS') ?? '50'),
    TF: parseInt(searchParams.get('TF') ?? '50'),
    JP: parseInt(searchParams.get('JP') ?? '50'),
    AT: parseInt(searchParams.get('AT') ?? '50'),
  };

  const typeKey = getTypeKey(scores);
  const identity = getIdentity(scores);
  const person = personalities[typeKey];

  if (!person) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[var(--text-muted)] mb-4">{tx.no_result as string}</p>
          <Link href="/test" className="text-[var(--accent)] underline">
            {tx.retake_link as string}
          </Link>
        </div>
      </div>
    );
  }

  const colors = GROUP_COLORS[person.group];

  return (
    <main className="min-h-screen pb-20">
      <Navbar />
      <div className="pt-24 px-4 max-w-2xl mx-auto">
        {/* Type reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ backgroundColor: colors.bg }}
          className="rounded-3xl p-8 sm:p-12 text-center mb-8 border border-[var(--border)]"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: colors.accent }}
          >
            {tx.result_title as string}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="text-7xl sm:text-8xl font-bold mb-2" style={{ color: colors.accent }}>
              {typeKey}
            </div>
            <div className="text-3xl font-semibold text-[var(--text-muted)] mb-4">-{identity}</div>
          </motion.div>
          <div className="text-3xl mb-2">{person.emoji}</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)]">
            {person.nickname[lang]}
          </h2>
        </motion.div>

        {/* 5 Trait Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[var(--border)] mb-6"
        >
          <h3 className="text-xl font-bold mb-6 text-[var(--text)]">
            📊 {tx.result_subtitle as string}
          </h3>
          <TraitBar
            labelA={tx.trait_E as string}
            labelB={tx.trait_I as string}
            pct={scores.EI}
            accentColor={colors.accent}
          />
          <TraitBar
            labelA={tx.trait_N as string}
            labelB={tx.trait_S as string}
            pct={scores.NS}
            accentColor={colors.accent}
          />
          <TraitBar
            labelA={tx.trait_T as string}
            labelB={tx.trait_F as string}
            pct={scores.TF}
            accentColor={colors.accent}
          />
          <TraitBar
            labelA={tx.trait_J as string}
            labelB={tx.trait_P as string}
            pct={scores.JP}
            accentColor={colors.accent}
          />
          <TraitBar
            labelA={tx.trait_A as string}
            labelB={tx.trait_Turbulent as string}
            pct={scores.AT}
            accentColor={colors.accent}
          />
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[var(--border)] mb-6"
        >
          <h3 className="text-xl font-bold mb-4 text-[var(--text)]">
            📝 {tx.section_overview as string}
          </h3>
          <p className="text-[var(--text-muted)] leading-relaxed">{person.overview[lang]}</p>
        </motion.div>

        {/* Strengths & Weaknesses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
        >
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-[var(--border)]">
            <h3 className="text-lg font-bold mb-4 text-[var(--text)]">
              ✅ {tx.section_strengths as string}
            </h3>
            <ul className="space-y-2">
              {person.strengths[lang].map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <span style={{ color: colors.accent }} className="mt-0.5">
                    •
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-[var(--border)]">
            <h3 className="text-lg font-bold mb-4 text-[var(--text)]">
              ⚠️ {tx.section_weaknesses as string}
            </h3>
            <ul className="space-y-2">
              {person.weaknesses[lang].map((w, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <span className="text-rose-400 mt-0.5">•</span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Careers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[var(--border)] mb-6"
        >
          <h3 className="text-xl font-bold mb-4 text-[var(--text)]">
            💼 {tx.section_careers as string}
          </h3>
          <div className="flex flex-wrap gap-2">
            {person.careers[lang].map((c, i) => (
              <span
                key={i}
                style={{
                  backgroundColor: colors.bg,
                  color: colors.accent,
                  borderColor: colors.light,
                }}
                className="px-3 py-1.5 rounded-full text-sm font-medium border"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Relationships */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[var(--border)] mb-8"
        >
          <h3 className="text-xl font-bold mb-4 text-[var(--text)]">
            💑 {tx.section_relationships as string}
          </h3>
          <p className="text-[var(--text-muted)] leading-relaxed">{person.relationships[lang]}</p>
        </motion.div>

        {/* Share Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <ShareCard
            typeKey={typeKey}
            identity={identity}
            nickname={person.nickname}
            group={person.group}
            lang={lang}
          />
        </motion.div>

        <div className="text-center">
          <Link
            href="/test"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[var(--border)] text-[var(--text-muted)] font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            🔄 {tx.btn_retake as string}
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-2 border-[var(--accent)] border-t-transparent rounded-full" />
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  );
}
