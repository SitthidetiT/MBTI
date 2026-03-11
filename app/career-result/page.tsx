'use client';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useLang } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { personalities, GROUP_COLORS, getTypeKey } from '@/data/personalities';
import type { DimScores } from '@/types';

// Extract SectionCard into a smaller component for reuse.
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

export default function CareerResultPage() {
  const { lang } = useLang();
  const tx = t[lang];
  const searchParams = useSearchParams();

  const scores: DimScores = {
    EI: Number(searchParams.get('EI')) || 50,
    NS: Number(searchParams.get('NS')) || 50,
    TF: Number(searchParams.get('TF')) || 50,
    JP: Number(searchParams.get('JP')) || 50,
    AT: Number(searchParams.get('AT')) || 50,
  };

  const typeKey = getTypeKey(scores);
  const data = personalities[typeKey];

  if (!data) {
    return (
      <main className="min-h-screen relative z-10">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
          <p className="text-xl font-semibold mb-4">{tx.no_result as string}</p>
          <Link href="/career-test" className="text-[var(--accent)] underline">
            {tx.retake_link as string}
          </Link>
        </div>
      </main>
    );
  }

  const colors = GROUP_COLORS[data.group];

  return (
    <main className="min-h-screen relative z-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-bold mb-4 tracking-wide border border-violet-200 shadow-sm">
            {tx.career_result_title as string}
          </div>

          <div className="flex justify-center items-end gap-3 mb-6">
            <div className="text-7xl">{data.emoji}</div>
            <div>
              <h1
                className="text-6xl sm:text-7xl font-extrabold tracking-tight"
                style={{ color: colors.accent }}
              >
                {typeKey}
              </h1>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-[var(--text)] mb-2">{data.nickname[lang]}</h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg leading-relaxed">
            {tx.career_result_subtitle as string}
          </p>
        </motion.div>

        {/* Career Core Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-8">
          <Section
            title={lang === 'th' ? 'จุดแข็งในการทำงาน' : 'Work Strengths'}
            icon="🌟"
            delay={0.1}
          >
            <ul className="space-y-3">
              {data.strengths[lang].slice(0, 4).map((s, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-[var(--text-muted)] leading-relaxed"
                >
                  <span className="text-green-500 font-bold mt-0.5">✓</span> {s}
                </li>
              ))}
            </ul>
          </Section>

          <Section
            title={lang === 'th' ? 'ความท้าทายในที่ทำงาน' : 'Workplace Challenges'}
            icon="⚠️"
            delay={0.2}
          >
            <ul className="space-y-3">
              {data.weaknesses[lang].slice(0, 4).map((w, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-[var(--text-muted)] leading-relaxed"
                >
                  <span className="text-rose-400 font-bold mt-0.5">•</span> {w}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <Section
          title={lang === 'th' ? 'สไตล์การทำงานของคุณ' : 'Your Work Style'}
          icon="💼"
          delay={0.3}
        >
          <div className="p-6 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/50 border border-gray-100 mb-6">
            <ul className="space-y-4">
              {data.workStyle[lang].map((w, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-[var(--text-muted)]">
                  <span className="text-blue-500 mt-0.5 text-lg">💡</span>
                  <span className="leading-relaxed">{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <div className="mt-6">
          <Section
            title={lang === 'th' ? 'อาชีพที่เหมาะสมที่สุด' : 'Most Suitable Careers'}
            icon="🎯"
            delay={0.4}
          >
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {data.careers[lang].map((c, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-sm font-bold border transition-all hover:scale-105"
                  style={{
                    backgroundColor: colors.light,
                    color: colors.accent,
                    border: `1px solid ${colors.accent}40`,
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-5 flex items-center gap-1.5">
              <span>📌</span>
              {lang === 'th'
                ? 'หมายเหตุ: การแนะนำอาชีพนี้อิงจากจุดแข็งตามธรรมชาติของบุคลิกภาพ คุณสามารถประสบความสำเร็จในอาชีพใดก็ได้หากมีความตั้งใจ'
                : 'Note: These suggestions are based on natural personality strengths. You can succeed in any career with dedication.'}
            </p>
          </Section>
        </div>

        {/* Footer Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center flex flex-col items-center gap-6"
        >
          <div className="p-8 rounded-3xl border border-[var(--border)] bg-white/50 backdrop-blur-sm max-w-2xl w-full">
            <h3 className="text-xl font-bold text-[var(--text)] mb-3">
              {lang === 'th'
                ? `อยากรู้จัก ${typeKey} ให้ลึกซึ้งกว่านี้ไหม?`
                : `Want to know ${typeKey} deeper?`}
            </h3>
            <p className="text-sm text-[var(--text-muted)] mb-6">
              {lang === 'th'
                ? 'อ่านรายละเอียดบุคลิกภาพของคุณแบบจัดเต็ม ทั้งเรื่องความสัมพันธ์ การเติบโต และบุคคลที่มีชื่อเสียง'
                : 'Read your full personality profile including relationships, personal growth, and famous people.'}
            </p>
            <Link
              href={`/types/${typeKey.toLowerCase()}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--text)] text-white font-bold hover:scale-105 transition-all shadow-xl"
            >
              {lang === 'th' ? '📖 อ่านโปรไฟล์ฉบับเต็ม' : '📖 Read Full Profile'}
            </Link>
          </div>

          <div className="flex gap-4">
            <Link
              href="/careers"
              className="text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--accent)] underline underline-offset-4"
            >
              {lang === 'th' ? 'ดูอาชีพของกลุ่มอื่นๆ' : 'View other career groups'}
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
