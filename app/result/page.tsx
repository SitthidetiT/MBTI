'use client';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ShareCard from '@/components/ShareCard';
import { useLang } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { personalities, GROUP_COLORS, getTypeKey, getIdentity } from '@/data/personalities';
import type { DimScores, Dimension, Lang } from '@/types';

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
  const scores: DimScores = {
    EI: Number(searchParams.get('EI')) || 50,
    NS: Number(searchParams.get('NS')) || 50,
    TF: Number(searchParams.get('TF')) || 50,
    JP: Number(searchParams.get('JP')) || 50,
    AT: Number(searchParams.get('AT')) || 50,
  };

  const typeKey = getTypeKey(scores);
  const identity = getIdentity(scores);
  const data = personalities[typeKey];
  const colors = GROUP_COLORS[data.group];
  const fullType = `${typeKey}-${identity}`;

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
          <div className="text-8xl mb-4">{data.emoji}</div>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-2" style={{ color: colors.accent }}>
            {fullType}
          </h1>
          <p className="text-xl font-semibold text-[var(--text)]">{data.nickname[lang]}</p>
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
          {dims.map((dim) => (
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
              {data.strengths[lang].map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <span className="text-green-500 mt-0.5">✓</span> {s}
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* 6. Weaknesses */}
          <SectionCard title={tx.section_weaknesses as string} icon="⚠️" delay={0.5}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {data.weaknesses[lang].map((w, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <span className="text-rose-400 mt-0.5">•</span> {w}
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* 7. Growth Areas */}
          <SectionCard title={tx.section_growthAreas as string} icon="🌱" delay={0.55}>
            <ul className="space-y-2">
              {data.growthAreas[lang].map((g, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <span className="text-amber-500 mt-0.5">→</span> {g}
                </li>
              ))}
            </ul>
          </SectionCard>

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
          <SectionCard title={tx.section_relationships as string} icon="❤️" delay={0.65}>
            <p className="text-[var(--text-muted)] leading-relaxed">{data.relationships[lang]}</p>
          </SectionCard>

          {/* 10. Careers */}
          <SectionCard title={tx.section_careers as string} icon="🎯" delay={0.7}>
            <div className="flex flex-wrap gap-2">
              {data.careers[lang].map((c, i) => (
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

          {/* 11. Famous People */}
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

          {/* 12. Share Card */}
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
