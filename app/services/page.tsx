'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { useLang } from '@/context/LanguageContext';

const services = [
  {
    icon: '📝',
    thTitle: 'แบบทดสอบบุคลิกภาพ MBTI',
    enTitle: 'MBTI Personality Test',
    thDesc:
      'แบบทดสอบออนไลน์ฟรี 2 โหมด (มาตรฐาน 60 ข้อ และละเอียด 120 ข้อ) พร้อมผลวิเคราะห์ครบทุกด้าน ใช้โมเดล NERIS 5 มิติ',
    enDesc:
      'Free online test in 2 modes (Standard 60Q & Detailed 120Q) with comprehensive analysis using the NERIS 5-dimension model.',
    href: '/test?mode=standard',
  },
  {
    icon: '🧬',
    thTitle: 'วิเคราะห์บุคลิกภาพเชิงลึก',
    enTitle: 'Deep Personality Analysis',
    thDesc:
      'ผลลัพธ์ 11+ ด้าน ครอบคลุม จุดแข็ง จุดอ่อน สิ่งที่ควรปรับปรุง รูปแบบการทำงาน ความสัมพันธ์ อาชีพ และบุคคลที่มีชื่อเสียง',
    enDesc:
      '11+ section results covering strengths, weaknesses, growth areas, work style, relationships, careers, and famous people.',
    href: '/test?mode=detailed',
  },
  {
    icon: '🎯',
    thTitle: 'แนะนำเส้นทางอาชีพ',
    enTitle: 'Career Path Guidance',
    thDesc:
      'ค้นพบอาชีพที่เหมาะสมกับบุคลิกภาพของคุณ จัดตามกลุ่ม 4 กลุ่ม พร้อมรูปแบบการทำงานและจุดแข็งในอาชีพ',
    enDesc:
      'Discover suitable careers based on your personality. Organized by 4 groups with work styles and career strengths.',
    href: '/careers',
  },
  {
    icon: '📊',
    thTitle: 'แผนภูมิมิติบุคลิกภาพ',
    enTitle: 'Trait Dimension Charts',
    thDesc:
      'แสดงเปอร์เซ็นต์ของแต่ละมิติ (E/I, N/S, T/F, J/P, A/T) ด้วย animated progress bar ที่สวยงาม',
    enDesc:
      'Display percentage of each dimension (E/I, N/S, T/F, J/P, A/T) with beautiful animated progress bars.',
    href: '/test?mode=standard',
  },
  {
    icon: '📤',
    thTitle: 'แชร์ผลลัพธ์',
    enTitle: 'Share Results',
    thDesc:
      'สร้างการ์ดผลลัพธ์สวยงามพร้อมดาวน์โหลดหรือแชร์ผ่าน Social Media ด้วยสีประจำกลุ่มบุคลิกภาพ',
    enDesc:
      'Generate beautiful result cards for download or share via social media with your personality group colors.',
    href: '/test?mode=standard',
  },
  {
    icon: '🌐',
    thTitle: 'รองรับ 2 ภาษา',
    enTitle: 'Bilingual Support',
    thDesc: 'รองรับทั้งภาษาไทยและภาษาอังกฤษ สลับได้ทันทีระหว่างทำแบบทดสอบหรือดูผลลัพธ์',
    enDesc: 'Supports Thai and English. Switch instantly while taking the test or viewing results.',
    href: '/',
  },
];

export default function ServicesPage() {
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
            {lang === 'th' ? 'บริการของเรา' : 'Our Services'}
          </h1>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            {lang === 'th'
              ? 'เครื่องมือและบริการที่ช่วยให้คุณเข้าใจตัวเองและค้นพบศักยภาพที่ซ่อนอยู่'
              : 'Tools and services to help you understand yourself and discover your hidden potential.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={s.href} className="block h-full">
                <div className="h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-[var(--border)] p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-lg font-bold text-[var(--text)] mb-2">
                    {lang === 'th' ? s.thTitle : s.enTitle}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {lang === 'th' ? s.thDesc : s.enDesc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center bg-gradient-to-r from-violet-50 to-indigo-50 rounded-2xl border border-violet-200 p-8"
        >
          <h2 className="text-2xl font-bold text-[var(--text)] mb-3">
            {lang === 'th' ? '🚀 พร้อมค้นพบตัวเองแล้วหรือยัง?' : '🚀 Ready to discover yourself?'}
          </h2>
          <p className="text-[var(--text-muted)] mb-6">
            {lang === 'th'
              ? 'เริ่มทำแบบทดสอบฟรี ไม่ต้องสมัครสมาชิก'
              : 'Start the free test — no sign-up required.'}
          </p>
          <Link
            href="/test?mode=standard"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-[var(--accent)] text-white font-semibold hover:scale-105 transition-all shadow-lg"
          >
            {lang === 'th' ? '✨ เริ่มทดสอบเลย' : '✨ Start Now'}
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
