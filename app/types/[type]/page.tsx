'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { useLang } from '@/context/LanguageContext';
import { personalities, GROUP_COLORS } from '@/data/personalities';
import { compatibility } from '@/data/compatibility';
import type { TypeCode, Lang, Group } from '@/types';

const groupNames: Record<string, Record<Lang, string>> = {
  analysts: { th: 'นักวิเคราะห์ (Analysts)', en: 'Analysts' },
  diplomats: { th: 'นักการทูต (Diplomats)', en: 'Diplomats' },
  sentinels: { th: 'ผู้พิทักษ์ (Sentinels)', en: 'Sentinels' },
  explorers: { th: 'นักสำรวจ (Explorers)', en: 'Explorers' },
};

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

function Section({
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

export default function TypeDetailPage() {
  const { lang } = useLang();
  const params = useParams();
  const typeCode = (params.type as string)?.toUpperCase() as TypeCode;
  const data = personalities[typeCode];

  if (!data) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <Navbar />
        <p className="text-xl font-semibold mt-20">
          {lang === 'th' ? 'ไม่พบข้อมูลประเภทนี้' : 'Type not found'}
        </p>
        <Link href="/types" className="text-[var(--accent)] mt-4 underline">
          {lang === 'th' ? 'กลับหน้าประเภทบุคลิกภาพ' : 'Back to Types'}
        </Link>
      </main>
    );
  }

  const colors = GROUP_COLORS[data.group];

  return (
    <main className="min-h-screen relative z-10">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-6"
        >
          {/* Character illustration */}
          <div
            className="w-56 h-56 mx-auto mb-4 rounded-3xl overflow-hidden flex items-end justify-center"
            style={{ backgroundColor: colors.bg }}
          >
            <img
              src={`https://api.dicebear.com/9.x/open-peeps/svg?seed=${typeCode}&backgroundColor=${colors.bg.replace('#', '')}`}
              alt={`${typeCode} character`}
              className="w-48 h-48 object-contain object-bottom"
              loading="eager"
            />
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-2" style={{ color: colors.accent }}>
            {typeCode}
          </h1>
          <p className="text-xl font-semibold text-[var(--text)]">{data.nickname[lang]}</p>
          <span
            className="inline-block mt-3 px-5 py-1.5 rounded-full text-sm font-bold border"
            style={{
              backgroundColor: colors.light,
              color: colors.accent,
              borderColor: colors.accent + '40',
            }}
          >
            {lang === 'th' ? 'กลุ่ม' : 'Group'}: {groupNames[data.group][lang]}
          </span>
        </motion.div>

        <div className="space-y-6 mt-8">
          <Section title={lang === 'th' ? 'ภาพรวม' : 'Overview'} icon="📖" delay={0.1}>
            <p className="text-[var(--text-muted)] leading-relaxed">{data.overview[lang]}</p>
          </Section>

          <Section title={lang === 'th' ? 'จุดแข็ง' : 'Strengths'} icon="💪" delay={0.15}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {data.strengths[lang].map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <span className="text-green-500 mt-0.5">✓</span> {s}
                </li>
              ))}
            </ul>
          </Section>

          <Section title={lang === 'th' ? 'จุดที่ควรพัฒนา' : 'Weaknesses'} icon="⚠️" delay={0.2}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {data.weaknesses[lang].map((w, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <span className="text-rose-400 mt-0.5">•</span> {w}
                </li>
              ))}
            </ul>
          </Section>

          <Section
            title={lang === 'th' ? 'สิ่งที่ควรปรับปรุง' : 'Growth Areas'}
            icon="🌱"
            delay={0.25}
          >
            <ul className="space-y-2">
              {data.growthAreas[lang].map((g, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <span className="text-amber-500 mt-0.5">→</span> {g}
                </li>
              ))}
            </ul>
          </Section>

          <Section title={lang === 'th' ? 'รูปแบบการทำงาน' : 'Work Style'} icon="💼" delay={0.3}>
            <ul className="space-y-2">
              {data.workStyle[lang].map((w, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <span className="text-blue-500 mt-0.5">▸</span> {w}
                </li>
              ))}
            </ul>
          </Section>

          <Section title={lang === 'th' ? 'ความสัมพันธ์' : 'Relationships'} icon="❤️" delay={0.35}>
            <p className="text-[var(--text-muted)] leading-relaxed">{data.relationships[lang]}</p>
          </Section>

          <Section
            title={lang === 'th' ? 'ความเข้ากันได้ในความรัก' : 'Love Compatibility'}
            icon="💕"
            delay={0.38}
          >
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">
              {compatibility[typeCode].loveStyle[lang]}
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-pink-500 uppercase tracking-wide mb-2">
                  {lang === 'th' ? '❤️ คู่ที่เหมาะสมที่สุด' : '❤️ Natural Partner'}
                </p>
                <div className="flex flex-wrap gap-3">
                  {compatibility[typeCode].natural.map((code) => (
                    <CompatCard key={code} typeCode={code} lang={lang} tier="natural" />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2">
                  {lang === 'th' ? '💚 เข้ากันได้ดี' : '💚 Great Matches'}
                </p>
                <div className="flex flex-wrap gap-3">
                  {compatibility[typeCode].good.map((code) => (
                    <CompatCard key={code} typeCode={code} lang={lang} tier="good" />
                  ))}
                </div>
              </div>
            </div>
          </Section>

          <Section
            title={lang === 'th' ? 'อาชีพที่เหมาะสม' : 'Suitable Careers'}
            icon="🎯"
            delay={0.4}
          >
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
          </Section>

          <Section
            title={lang === 'th' ? 'บุคคลที่มีชื่อเสียง' : 'Famous People'}
            icon="⭐"
            delay={0.45}
          >
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
          </Section>
        </div>

        <div className="flex flex-wrap gap-3 mt-10 justify-center">
          <Link
            href="/types"
            className="px-6 py-2.5 rounded-full font-semibold text-sm border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            ← {lang === 'th' ? 'ดูทุกประเภท' : 'All Types'}
          </Link>
          <Link
            href="/test?mode=standard"
            className="px-6 py-2.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-violet-500 to-[var(--accent)] hover:scale-105 transition-all shadow-lg"
          >
            {lang === 'th' ? '✨ ทดสอบว่าคุณเป็นประเภทนี้หรือไม่' : '✨ Test if this is your type'}
          </Link>
        </div>
      </div>
    </main>
  );
}
