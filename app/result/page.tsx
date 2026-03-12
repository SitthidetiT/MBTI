'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ShareCard from '@/components/ShareCard';
import { useLang } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { personalities, GROUP_COLORS, getTypeKey, getIdentity } from '@/data/personalities';
import { compatibility } from '@/data/compatibility';
import { saveResult } from '@/data/resultHistory';
import type { DimScores, Dimension, Lang, TypeCode } from '@/types';

const dimLabels: Record<Dimension, Record<'name' | 'left' | 'right', Record<Lang, string>>> = {
  EI: {
    name: { th: 'พลังงาน (Mind)', en: 'Mind' },
    left: { th: 'การมีปฏิสัมพันธ์ (E)', en: 'Extraverted (E)' },
    right: { th: 'การเก็บตัว (I)', en: 'Introverted (I)' },
  },
  NS: {
    name: { th: 'การรับรู้ (Energy)', en: 'Energy' },
    left: { th: 'สัญชาตญาณ (N)', en: 'Intuitive (N)' },
    right: { th: 'การสังเกต (S)', en: 'Observant (S)' },
  },
  TF: {
    name: { th: 'การตัดสินใจ (Nature)', en: 'Nature' },
    left: { th: 'ความคิด (T)', en: 'Thinking (T)' },
    right: { th: 'ความรู้สึก (F)', en: 'Feeling (F)' },
  },
  JP: {
    name: { th: 'วิถีชีวิต (Tactics)', en: 'Tactics' },
    left: { th: 'การวางแผน (J)', en: 'Judging (J)' },
    right: { th: 'ความยืดหยุ่น (P)', en: 'Prospecting (P)' },
  },
  AT: {
    name: { th: 'ความมั่นใจ (Identity)', en: 'Identity' },
    left: { th: 'มั่นใจ (A)', en: 'Assertive (A)' },
    right: { th: 'ตื่นตัว (T)', en: 'Turbulent (T)' },
  },
};

const groupNames: Record<string, Record<Lang, string>> = {
  analysts: { th: 'นักวิเคราะห์ (Analysts)', en: 'Analysts' },
  diplomats: { th: 'นักการทูต (Diplomats)', en: 'Diplomats' },
  sentinels: { th: 'ผู้พิทักษ์ (Sentinels)', en: 'Sentinels' },
  explorers: { th: 'นักสำรวจ (Explorers)', en: 'Explorers' },
};

function TraitBar({ dim, score, lang }: { dim: Dimension; score: number; lang: Lang }) {
  const leftPct = score;
  const rightPct = 100 - score;
  const labels = dimLabels[dim];
  const isLeft = leftPct >= rightPct;
  return (
    <div className="mb-6">
      <div className="text-sm font-bold text-[var(--text)] mb-2">{labels.name[lang]}</div>
      <div className="flex items-center gap-2">
        <span
          className={`text-xs w-28 text-right ${isLeft ? 'font-bold text-violet-600' : 'text-[var(--text-muted)]'}`}
        >
          {labels.left[lang]}
        </span>
        <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden relative">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-[var(--accent)]"
            initial={{ width: 0 }}
            animate={{ width: `${leftPct}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
        <span
          className={`text-xs w-28 ${!isLeft ? 'font-bold text-rose-500' : 'text-[var(--text-muted)]'}`}
        >
          {labels.right[lang]}
        </span>
      </div>
      <div className="flex justify-between mt-1 px-[7.5rem]">
        <span
          className={`text-xs font-semibold ${isLeft ? 'text-violet-600' : 'text-[var(--text-muted)]'}`}
        >
          {leftPct}%
        </span>
        <span
          className={`text-xs font-semibold ${!isLeft ? 'text-rose-500' : 'text-[var(--text-muted)]'}`}
        >
          {rightPct}%
        </span>
      </div>
    </div>
  );
}

function CompatCard({
  typeCode,
  lang,
  tier,
}: {
  typeCode: TypeCode;
  lang: Lang;
  tier: 'natural' | 'good';
}) {
  const pData = personalities[typeCode];
  const pColors = GROUP_COLORS[pData.group];
  return (
    <Link href={`/types/${typeCode.toLowerCase()}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative flex flex-col items-center text-center rounded-xl border-2 overflow-hidden cursor-pointer w-24"
        style={{ borderColor: tier === 'natural' ? '#f472b6' : '#34d399' }}
      >
        <div
          className="w-full h-16 flex items-end justify-center overflow-hidden"
          style={{ backgroundColor: pColors.bg }}
        >
          <img
            src={`https://api.dicebear.com/9.x/open-peeps/svg?seed=${typeCode}&backgroundColor=${pColors.bg.replace('#', '')}`}
            alt={typeCode}
            className="w-12 h-12 object-contain object-bottom"
          />
        </div>
        <div className="bg-white/90 px-2 py-1.5 w-full">
          <p className="text-sm font-extrabold" style={{ color: pColors.accent }}>
            {typeCode}
          </p>
          <p className="text-xs text-[var(--text-muted)] leading-tight">{pData.nickname[lang]}</p>
        </div>
        <span className="absolute top-1 right-1 text-xs">{tier === 'natural' ? '❤️' : '💚'}</span>
      </motion.div>
    </Link>
  );
}

function SectionCard({
  title,
  icon,
  children,
  delay = 0,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[var(--border)] p-6 sm:p-8 shadow-sm"
    >
      <h3 className="text-lg font-bold text-[var(--text)] mb-4 flex items-center gap-2">
        <span className="text-xl">{icon}</span> {title}
      </h3>
      {children}
    </motion.div>
  );
}

export default function ResultPage() {
  const { lang } = useLang();
  const tx = t[lang];
  const searchParams = useSearchParams();

  const dims: Dimension[] = ['EI', 'NS', 'TF', 'JP', 'AT'];
  const clamp = (v: number) => Math.max(0, Math.min(100, isNaN(v) ? 50 : v));
  const scores: DimScores = {
    EI: clamp(Number(searchParams.get('EI'))),
    NS: clamp(Number(searchParams.get('NS'))),
    TF: clamp(Number(searchParams.get('TF'))),
    JP: clamp(Number(searchParams.get('JP'))),
    AT: clamp(Number(searchParams.get('AT'))),
  };

  const typeKey = getTypeKey(scores);
  const identity = getIdentity(scores);
  const data = personalities[typeKey];
  const colors = GROUP_COLORS[data.group];
  const fullType = `${typeKey}-${identity}`;
  const mode = searchParams.get('mode') === 'detailed' ? 'detailed' : 'standard';
  const isDetailed = mode === 'detailed';
  const displayType = isDetailed ? fullType : typeKey;

  useEffect(() => {
    saveResult({ typeKey, identity, scores, date: new Date().toISOString(), mode });
  }, [typeKey, identity, scores, mode]);

  if (!data) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <Navbar />
        <p className="text-xl font-semibold">{tx.no_result as string}</p>
        <Link href="/" className="text-[var(--accent)] mt-4 underline">
          {tx.retake_link as string}
        </Link>
      </main>
    );
  }

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title: `${fullType} - ${data.nickname[lang]}`, url });
    } else {
      await navigator.clipboard.writeText(url);
      alert(tx.copied as string);
    }
  };

  return (
    <main className="min-h-screen pb-20 relative z-10">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 pt-24">
        {/* 1. Personality Type Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm text-[var(--text-muted)] mb-2 font-medium">
            {tx.result_title as string}
          </p>
          {/* Character illustration */}
          <div
            className="w-56 h-56 mx-auto mb-4 rounded-3xl overflow-hidden flex items-end justify-center relative"
            style={{ backgroundColor: colors.bg }}
          >
            <img
              src={`https://api.dicebear.com/9.x/open-peeps/svg?seed=${typeKey}&backgroundColor=${colors.bg.replace('#', '')}`}
              alt={`${typeKey} character`}
              className="w-48 h-48 object-contain object-bottom"
              loading="eager"
            />
            <span className="absolute top-3 right-3 text-3xl">{data.emoji}</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-2" style={{ color: colors.accent }}>
            {displayType}
          </h1>
          <p className="text-xl font-semibold text-[var(--text)]">{data.nickname[lang]}</p>
          <div className="mt-3 flex justify-center">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={
                isDetailed
                  ? {
                      backgroundColor: colors.light,
                      color: colors.accent,
                      border: `1px solid ${colors.accent}40`,
                    }
                  : { backgroundColor: '#f3f4f6', color: '#6b7280', border: '1px solid #e5e7eb' }
              }
            >
              {isDetailed
                ? (tx.result_mode_detailed as string)
                : (tx.result_mode_standard as string)}
            </span>
          </div>
        </motion.div>

        {/* 2. Personality Group */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <span
            className="px-6 py-2.5 rounded-full text-sm font-bold shadow-sm border"
            style={{
              backgroundColor: colors.light,
              color: colors.accent,
              borderColor: colors.accent + '40',
            }}
          >
            {tx.section_group as string}: {groupNames[data.group][lang]}
          </span>
        </motion.div>

        {/* 3. Trait Percentages */}
        <SectionCard
          title={lang === 'th' ? 'สัดส่วนมิติบุคลิกภาพ' : 'Trait Dimensions'}
          icon="📊"
          delay={0.3}
        >
          {dims
            .filter((dim) => isDetailed || dim !== 'AT')
            .map((dim) => (
              <TraitBar key={dim} dim={dim} score={scores[dim]} lang={lang} />
            ))}
        </SectionCard>

        <div className="mt-6 space-y-6">
          {/* 4. Overview */}
          <SectionCard title={tx.section_overview as string} icon="📖" delay={0.4}>
            <p className="text-[var(--text-muted)] leading-relaxed">{data.overview[lang]}</p>
          </SectionCard>

          {/* 5. Strengths */}
          <SectionCard title={tx.section_strengths as string} icon="💪" delay={0.45}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {data.strengths[lang].slice(0, isDetailed ? undefined : 3).map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <span className="text-green-500 mt-0.5">✓</span> {s}
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* 6. Weaknesses */}
          <SectionCard title={tx.section_weaknesses as string} icon="⚠️" delay={0.5}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {data.weaknesses[lang].slice(0, isDetailed ? undefined : 3).map((w, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <span className="text-rose-400 mt-0.5">•</span> {w}
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* 7. Growth Areas */}
          {isDetailed && (
            <SectionCard title={tx.section_growthAreas as string} icon="🌱" delay={0.55}>
              <ul className="space-y-2">
                {data.growthAreas[lang].map((g, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                    <span className="text-amber-500 mt-0.5">→</span> {g}
                  </li>
                ))}
              </ul>
            </SectionCard>
          )}

          {/* 8. Work Style */}
          <SectionCard title={tx.section_workStyle as string} icon="💼" delay={0.6}>
            <ul className="space-y-2">
              {data.workStyle[lang].map((w, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <span className="text-blue-500 mt-0.5">▸</span> {w}
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* 9. Relationships */}
          {isDetailed && (
            <SectionCard title={tx.section_relationships as string} icon="❤️" delay={0.65}>
              <p className="text-[var(--text-muted)] leading-relaxed">{data.relationships[lang]}</p>
            </SectionCard>
          )}

          {/* 10. Love Compatibility */}
          <SectionCard
            title={lang === 'th' ? 'ความเข้ากันได้ในความรัก' : 'Love Compatibility'}
            icon="💕"
            delay={0.68}
          >
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">
              {compatibility[typeKey].loveStyle[lang]}
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-pink-500 uppercase tracking-wide mb-2">
                  {lang === 'th' ? '❤️ คู่ที่เหมาะสมที่สุด' : '❤️ Natural Partner'}
                </p>
                <div className="flex flex-wrap gap-3">
                  {compatibility[typeKey].natural.map((code) => (
                    <CompatCard key={code} typeCode={code} lang={lang} tier="natural" />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2">
                  {lang === 'th' ? '💚 เข้ากันได้ดี' : '💚 Great Matches'}
                </p>
                <div className="flex flex-wrap gap-3">
                  {(isDetailed
                    ? compatibility[typeKey].good
                    : compatibility[typeKey].good.slice(0, 2)
                  ).map((code) => (
                    <CompatCard key={code} typeCode={code} lang={lang} tier="good" />
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>

          {/* 12. Careers */}
          <SectionCard title={tx.section_careers as string} icon="🎯" delay={0.7}>
            <div className="flex flex-wrap gap-2">
              {data.careers[lang].slice(0, isDetailed ? undefined : 3).map((c, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full text-sm font-medium border"
                  style={{
                    backgroundColor: colors.light,
                    color: colors.accent,
                    borderColor: colors.accent + '30',
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </SectionCard>

          {/* 13. Famous People */}
          {isDetailed && (
            <SectionCard title={tx.section_famousPeople as string} icon="⭐" delay={0.75}>
              <div className="flex flex-wrap gap-2">
                {data.famousPeople.map((name, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-[var(--text)] border border-gray-200"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </SectionCard>
          )}

          {/* Upgrade CTA for standard mode */}
          {!isDetailed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="rounded-2xl border-2 border-dashed p-6 text-center"
              style={{ borderColor: colors.accent + '50', backgroundColor: colors.bg }}
            >
              <p className="text-base font-bold mb-1" style={{ color: colors.accent }}>
                {tx.result_try_detailed as string}
              </p>
              <p className="text-sm text-[var(--text-muted)] mb-4">
                {tx.result_try_detailed_sub as string}
              </p>
              <Link
                href="/test?mode=detailed"
                className="inline-block px-6 py-2.5 rounded-full font-semibold text-sm text-white hover:scale-105 transition-all shadow-md"
                style={{ backgroundColor: colors.accent }}
              >
                {tx.result_try_detailed_btn as string}
              </Link>
            </motion.div>
          )}

          {/* 14. Share Card */}
          <SectionCard title={tx.btn_share as string} icon="📤" delay={0.8}>
            <ShareCard
              typeKey={typeKey}
              identity={identity}
              nickname={data.nickname}
              group={data.group}
              lang={lang}
            />
            <div className="flex flex-wrap gap-3 mt-6 justify-center">
              <button
                onClick={handleShare}
                className="px-6 py-2.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-violet-500 to-[var(--accent)] hover:scale-105 transition-all shadow-lg cursor-pointer"
              >
                🔗 {tx.btn_share as string}
              </button>
              <Link
                href="/"
                className="px-6 py-2.5 rounded-full font-semibold text-sm border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
              >
                {tx.btn_retake as string}
              </Link>
            </div>
          </SectionCard>
        </div>
      </div>
    </main>
  );
}
