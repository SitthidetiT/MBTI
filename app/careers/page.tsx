'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { useLang } from '@/context/LanguageContext';
import { personalities, GROUP_COLORS } from '@/data/personalities';
import type { TypeCode, Group, Lang } from '@/types';

const careerGroups: {
  key: Group;
  th: string;
  en: string;
  icon: string;
  descTh: string;
  descEn: string;
  types: TypeCode[];
}[] = [
  {
    key: 'analysts',
    icon: '🔬',
    th: 'นักวิเคราะห์',
    en: 'Analysts',
    descTh: 'เหมาะกับงานที่ต้องใช้ความคิดเชิงกลยุทธ์ การวิเคราะห์ข้อมูล และการแก้ปัญหาที่ซับซ้อน',
    descEn: 'Best suited for strategic thinking, data analysis, and complex problem-solving roles.',
    types: ['INTJ', 'INTP', 'ENTJ', 'ENTP'],
  },
  {
    key: 'diplomats',
    icon: '🌿',
    th: 'นักการทูต',
    en: 'Diplomats',
    descTh: 'เหมาะกับงานที่ต้องช่วยเหลือ สร้างแรงบันดาลใจ และดูแลผู้คน',
    descEn: 'Ideal for helping, inspiring, and caring for people.',
    types: ['INFJ', 'INFP', 'ENFJ', 'ENFP'],
  },
  {
    key: 'sentinels',
    icon: '🛡️',
    th: 'ผู้พิทักษ์',
    en: 'Sentinels',
    descTh: 'เหมาะกับงานที่ต้องการความรับผิดชอบ ระเบียบวินัย และการจัดการ',
    descEn: 'Perfect for roles requiring responsibility, discipline, and management.',
    types: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'],
  },
  {
    key: 'explorers',
    icon: '🎨',
    th: 'นักสำรวจ',
    en: 'Explorers',
    descTh: 'เหมาะกับงานที่ต้องลงมือทำจริง สร้างสรรค์ และมีความยืดหยุ่น',
    descEn: 'Great for hands-on, creative, and flexible work.',
    types: ['ISTP', 'ISFP', 'ESTP', 'ESFP'],
  },
];

export default function CareersPage() {
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
            {lang === 'th' ? 'เส้นทางอาชีพตามบุคลิกภาพ' : 'Career Paths by Personality'}
          </h1>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            {lang === 'th'
              ? 'ค้นพบอาชีพที่เหมาะกับบุคลิกภาพของคุณ ตามทฤษฎี MBTI และคำแนะนำจากผู้เชี่ยวชาญ'
              : 'Discover careers that match your personality based on MBTI theory and expert recommendations.'}
          </p>
        </motion.div>

        {careerGroups.map((g, gi) => {
          const colors = GROUP_COLORS[g.key];
          return (
            <motion.section
              key={g.key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: gi * 0.12 }}
              className="mb-12"
            >
              <div
                className="rounded-2xl border p-6 sm:p-8"
                style={{ backgroundColor: colors.light, borderColor: colors.accent + '30' }}
              >
                <h2
                  className="text-2xl font-bold mb-2 flex items-center gap-2"
                  style={{ color: colors.accent }}
                >
                  {g.icon} {lang === 'th' ? g.th : g.en}
                </h2>
                <p className="text-sm text-[var(--text-muted)] mb-6">
                  {lang === 'th' ? g.descTh : g.descEn}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {g.types.map((code) => {
                    const p = personalities[code];
                    return (
                      <div
                        key={code}
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/60"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">{p.emoji}</span>
                          <span className="font-bold text-sm" style={{ color: colors.accent }}>
                            {code}
                          </span>
                          <span className="text-sm text-[var(--text)]">{p.nickname[lang]}</span>
                        </div>
                        <div className="mb-3">
                          <p className="text-xs font-semibold text-[var(--text)] mb-1">
                            {lang === 'th' ? 'รูปแบบการทำงาน:' : 'Work Style:'}
                          </p>
                          <ul className="space-y-0.5">
                            {p.workStyle[lang].slice(0, 3).map((w, i) => (
                              <li key={i} className="text-xs text-[var(--text-muted)] flex gap-1">
                                <span className="text-blue-400">▸</span> {w}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {p.careers[lang].map((c, i) => (
                            <span
                              key={i}
                              className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                              style={{
                                backgroundColor: colors.accent + '15',
                                color: colors.accent,
                              }}
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.section>
          );
        })}

        <div className="text-center mt-10">
          <Link
            href="/test?mode=detailed"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:scale-105 transition-all shadow-lg"
          >
            {lang === 'th'
              ? '🔬 ทดสอบแบบละเอียดเพื่อค้นหาอาชีพของคุณ'
              : '🔬 Take the detailed test to find your career'}
          </Link>
        </div>
      </div>
    </main>
  );
}
