'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { useLang } from '@/context/LanguageContext';
import { lovePersonalities } from '@/data/love_personalities';
import type { LoveTypeCode, Lang } from '@/types';

const dimLabels: Record<
  'LF' | 'AC' | 'PR' | 'EO',
  Record<'name' | 'left' | 'right', Record<Lang, string>>
> = {
  LF: {
    name: { th: 'รูปแบบในความสัมพันธ์', en: 'Relationship Role' },
    left: { th: 'ผู้นำ (L)', en: 'Leader (L)' },
    right: { th: 'ผู้ตาม (F)', en: 'Follower (F)' },
  },
  AC: {
    name: { th: 'การเข้าหาความรัก', en: 'Approach to Love' },
    left: { th: 'เปิดใจง่าย (A)', en: 'Amorous (A)' },
    right: { th: 'ระวังตัว (C)', en: 'Cautious (C)' },
  },
  PR: {
    name: { th: 'การตัดสินใจในความรัก', en: 'Love Decision Style' },
    left: { th: 'หัวใจนำ (P)', en: 'Passionate (P)' },
    right: { th: 'เหตุผลนำ (R)', en: 'Rational (R)' },
  },
  EO: {
    name: { th: 'การแสดงออก', en: 'Expression Style' },
    left: { th: 'เปิดเผย (E)', en: 'Expressive (E)' },
    right: { th: 'สังเกต (O)', en: 'Observant (O)' },
  },
};

function DimBar({
  dim,
  pct,
  lang,
  accent,
}: {
  dim: 'LF' | 'AC' | 'PR' | 'EO';
  pct: number;
  lang: Lang;
  accent: string;
}) {
  const labels = dimLabels[dim];
  const isLeft = pct >= 50;
  const leftPct = pct;
  const rightPct = 100 - pct;
  return (
    <div className="mb-5">
      <div className="text-xs font-bold text-gray-600 mb-2">{labels.name[lang]}</div>
      <div className="flex items-center gap-2">
        <span
          className={`text-xs w-28 text-right ${isLeft ? 'font-bold' : 'text-gray-400'}`}
          style={isLeft ? { color: accent } : {}}
        >
          {labels.left[lang]}
        </span>
        <div className="flex-1 h-3 bg-pink-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${accent}, #c026d3)` }}
            initial={{ width: 0 }}
            animate={{ width: `${leftPct}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
        <span className={`text-xs w-28 ${!isLeft ? 'font-bold text-blue-500' : 'text-gray-400'}`}>
          {labels.right[lang]}
        </span>
      </div>
      <div className="flex justify-between mt-1 px-30">
        <span
          className={`text-xs font-semibold ${isLeft ? '' : 'text-gray-400'}`}
          style={isLeft ? { color: accent } : {}}
        >
          {leftPct}%
        </span>
        <span className={`text-xs font-semibold ${!isLeft ? 'text-blue-500' : 'text-gray-400'}`}>
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
      className="bg-white/80 backdrop-blur-sm rounded-2xl border border-pink-100 p-6 sm:p-8 shadow-sm"
    >
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className="text-xl">{icon}</span> {title}
      </h3>
      {children}
    </motion.div>
  );
}

export default function LoveResultPage() {
  const { lang } = useLang();
  const searchParams = useSearchParams();

  const rawType = searchParams.get('type') ?? 'LAPE';
  const typeCode = (
    Object.keys(lovePersonalities).includes(rawType) ? rawType : 'LAPE'
  ) as LoveTypeCode;

  const clamp = (v: number) => Math.max(0, Math.min(100, isNaN(v) ? 50 : v));
  const pcts = {
    LF: clamp(Number(searchParams.get('LF'))),
    AC: clamp(Number(searchParams.get('AC'))),
    PR: clamp(Number(searchParams.get('PR'))),
    EO: clamp(Number(searchParams.get('EO'))),
  };

  const data = lovePersonalities[typeCode];
  const { accent, bg, light } = data.color;

  // Decode the 4 letters
  const [L, A, P, E] = typeCode.split('') as [string, string, string, string];
  const dimTags = [
    L === 'L' ? (lang === 'th' ? 'ผู้นำ' : 'Leader') : lang === 'th' ? 'ผู้ตาม' : 'Follower',
    A === 'A'
      ? lang === 'th'
        ? 'เปิดใจง่าย'
        : 'Amorous'
      : lang === 'th'
        ? 'ระวังตัว'
        : 'Cautious',
    P === 'P'
      ? lang === 'th'
        ? 'หัวใจนำ'
        : 'Passionate'
      : lang === 'th'
        ? 'เหตุผลนำ'
        : 'Rational',
    E === 'E' ? (lang === 'th' ? 'เปิดเผย' : 'Expressive') : lang === 'th' ? 'สังเกต' : 'Observant',
  ];

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title: `${typeCode} ${data.nickname[lang]}`, url });
    } else {
      await navigator.clipboard.writeText(url);
      alert(lang === 'th' ? '📋 คัดลอก URL แล้ว!' : '📋 URL copied!');
    }
  };

  return (
    <main
      className="min-h-screen pb-20"
      style={{ background: `linear-gradient(160deg, ${bg} 0%, #fff 40%)` }}
    >
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 pt-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>
            Love Type
          </p>

          {/* Avatar */}
          <div
            className="w-44 h-44 mx-auto mb-5 rounded-3xl overflow-hidden flex items-end justify-center relative shadow-lg"
            style={{ backgroundColor: bg, border: `3px solid ${accent}30` }}
          >
            <img
              src={`https://api.dicebear.com/9.x/open-peeps/svg?seed=${typeCode}&backgroundColor=${bg.replace('#', '')}`}
              alt={typeCode}
              className="w-36 h-36 object-contain object-bottom"
              loading="eager"
            />
            <span className="absolute top-2 right-2 text-2xl">{data.emoji}</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold mb-2" style={{ color: accent }}>
            {typeCode}
          </h1>
          <p className="text-xl font-semibold text-gray-700">{data.nickname[lang]}</p>

          {/* Dimension tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {dimTags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-bold border"
                style={{ backgroundColor: light, color: accent, borderColor: accent + '40' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="space-y-6">
          {/* Dimension bars */}
          <SectionCard
            title={lang === 'th' ? 'มิติบุคลิกภาพความรัก' : 'Love Personality Dimensions'}
            icon="💗"
            delay={0.2}
          >
            {(['LF', 'AC', 'PR', 'EO'] as const).map((dim) => (
              <DimBar key={dim} dim={dim} pct={pcts[dim]} lang={lang} accent={accent} />
            ))}
          </SectionCard>

          {/* Overview */}
          <SectionCard title={lang === 'th' ? 'ภาพรวม' : 'Overview'} icon="💌" delay={0.3}>
            <p className="text-gray-500 leading-relaxed">{data.overview[lang]}</p>
          </SectionCard>

          {/* Love Strengths */}
          <SectionCard
            title={lang === 'th' ? 'จุดแข็งในความรัก' : 'Love Strengths'}
            icon="💪"
            delay={0.35}
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {data.loveStrengths[lang].map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                  <span className="mt-0.5" style={{ color: accent }}>
                    ✓
                  </span>{' '}
                  {s}
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* Love Challenges */}
          <SectionCard
            title={lang === 'th' ? 'ความท้าทายในความรัก' : 'Love Challenges'}
            icon="⚡"
            delay={0.4}
          >
            <ul className="space-y-2">
              {data.loveChallenges[lang].map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                  <span className="text-rose-400 mt-0.5">•</span> {c}
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* Style pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SectionCard
              title={lang === 'th' ? 'เดทในอุดมคติ' : 'Ideal Date'}
              icon="🌹"
              delay={0.45}
            >
              <p className="text-sm text-gray-500 leading-relaxed">{data.idealDate[lang]}</p>
            </SectionCard>
            <SectionCard
              title={lang === 'th' ? 'สไตล์การสื่อสาร' : 'Communication Style'}
              icon="💬"
              delay={0.5}
            >
              <p className="text-sm text-gray-500 leading-relaxed">
                {data.communicationStyle[lang]}
              </p>
            </SectionCard>
          </div>

          {/* Cross-link to MBTI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="rounded-2xl border-2 border-dashed p-6 text-center"
            style={{ borderColor: accent + '40', backgroundColor: bg }}
          >
            <p className="text-sm font-bold mb-1" style={{ color: accent }}>
              {lang === 'th' ? '🧠 รู้จักบุคลิกภาพด้านอื่นด้วย' : '🧠 Discover more about yourself'}
            </p>
            <p className="text-xs text-gray-500 mb-4">
              {lang === 'th'
                ? 'ทดสอบ MBTI เพื่อค้นพบบุคลิกภาพในด้านการทำงาน การเรียนรู้ และการดำเนินชีวิต'
                : 'Take the MBTI test to discover your personality for work, learning, and daily life.'}
            </p>
            <Link
              href="/test?mode=standard"
              className="inline-block px-6 py-2.5 rounded-full font-bold text-sm text-white hover:scale-105 transition-all shadow-md"
              style={{ backgroundColor: accent }}
            >
              {lang === 'th' ? '✨ ทดสอบ MBTI (ฟรี) →' : '✨ Take MBTI Test (Free) →'}
            </Link>
          </motion.div>

          {/* Action buttons */}
          <SectionCard title={lang === 'th' ? 'แชร์ผลลัพธ์' : 'Share Result'} icon="📤" delay={0.6}>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={handleShare}
                className="px-6 py-2.5 rounded-full font-semibold text-sm text-white hover:scale-105 transition-all shadow-lg cursor-pointer"
                style={{ background: `linear-gradient(135deg, ${accent}, #c026d3)` }}
              >
                🔗 {lang === 'th' ? 'แชร์' : 'Share'}
              </button>
              <Link
                href="/love-test"
                className="px-6 py-2.5 rounded-full font-semibold text-sm border text-gray-500 hover:text-pink-600 hover:border-pink-300 transition-all"
              >
                {lang === 'th' ? '💕 ทำใหม่' : '💕 Retake'}
              </Link>
              <Link
                href="/"
                className="px-6 py-2.5 rounded-full font-semibold text-sm border border-gray-200 text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-all"
              >
                {lang === 'th' ? '← หน้าแรก' : '← Home'}
              </Link>
            </div>
          </SectionCard>
        </div>
      </div>
    </main>
  );
}
