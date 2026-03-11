'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { useLang } from '@/context/LanguageContext';

const articles = [
  {
    icon: '🧠',
    thTitle: 'MBTI คืออะไร? ทำความเข้าใจบุคลิกภาพ 16 แบบ',
    enTitle: 'What is MBTI? Understanding the 16 Personality Types',
    thContent:
      'MBTI (Myers-Briggs Type Indicator) คือแบบประเมินบุคลิกภาพที่ได้รับความนิยมมากที่สุดในโลก พัฒนาโดย Isabel Briggs Myers และ Katharine Cook Briggs จากทฤษฎีของ Carl Jung แบ่งบุคลิกภาพออกเป็น 16 แบบ ตามมิติ 4 ด้าน: พลังงาน (E/I), การรับรู้ (N/S), การตัดสินใจ (T/F), และวิถีชีวิต (J/P) นอกจากนี้ในโมเดล NERIS ยังเพิ่มมิติที่ 5 คือ อัตลักษณ์ (A/T) ที่วัดความมั่นใจในตัวเอง',
    enContent:
      "MBTI (Myers-Briggs Type Indicator) is the world's most popular personality assessment. Developed by Isabel Briggs Myers and Katharine Cook Briggs based on Carl Jung's theory, it classifies personalities into 16 types across 4 dimensions: Energy (E/I), Information (N/S), Decision-making (T/F), and Lifestyle (J/P). The NERIS model adds a 5th dimension: Identity (A/T) measuring self-confidence.",
  },
  {
    icon: '⚖️',
    thTitle: '5 มิติของ MBTI อธิบายง่ายๆ',
    enTitle: 'The 5 MBTI Dimensions Explained Simply',
    thContent:
      '1. Mind (E/I): Extraverted ดึงพลังจากสังคม vs Introverted ดึงพลังจากการอยู่คนเดียว\n2. Energy (N/S): Intuitive มองภาพรวมและอนาคต vs Observant มุ่งเน้นข้อเท็จจริงและปัจจุบัน\n3. Nature (T/F): Thinking ตัดสินใจจากตรรกะ vs Feeling ตัดสินใจจากความรู้สึก\n4. Tactics (J/P): Judging ชอบวางแผนล่วงหน้า vs Prospecting ชอบความยืดหยุ่น\n5. Identity (A/T): Assertive มั่นใจในตัวเอง vs Turbulent มุ่งพัฒนาตัวเองเสมอ',
    enContent:
      '1. Mind (E/I): Extraverted draw energy from socializing vs Introverted recharge alone\n2. Energy (N/S): Intuitive sees big picture and future vs Observant focuses on facts and present\n3. Nature (T/F): Thinking decides by logic vs Feeling decides by values\n4. Tactics (J/P): Judging prefers planning vs Prospecting prefers flexibility\n5. Identity (A/T): Assertive is self-confident vs Turbulent is self-improving',
  },
  {
    icon: '💼',
    thTitle: 'เลือกอาชีพอย่างไรจาก MBTI?',
    enTitle: 'How to Choose a Career Based on MBTI?',
    thContent:
      'บุคลิกภาพแต่ละแบบมีจุดแข็งที่แตกต่างกันในการทำงาน กลุ่ม Analysts (NT) เก่งในงานกลยุทธ์และวิเคราะห์ กลุ่ม Diplomats (NF) เก่งในงานดูแลคนและสร้างแรงบันดาลใจ กลุ่ม Sentinels (SJ) เก่งในงานที่ต้องการความรับผิดชอบและระเบียบ กลุ่ม Explorers (SP) เก่งในงานที่ต้องลงมือทำจริงและสร้างสรรค์ การเลือกอาชีพตาม MBTI ช่วยให้คุณทำงานที่ตรงกับจุดแข็งตามธรรมชาติ',
    enContent:
      'Different personality types have unique work strengths. Analysts (NT) excel in strategic and analytical roles. Diplomats (NF) thrive in caring and inspiring positions. Sentinels (SJ) are ideal for responsibility-driven structured work. Explorers (SP) shine in hands-on creative environments. Choosing a career aligned with your MBTI helps you leverage your natural strengths.',
  },
  {
    icon: '❤️',
    thTitle: 'MBTI กับความสัมพันธ์: ใครเข้ากับใคร?',
    enTitle: 'MBTI and Relationships: Who Gets Along?',
    thContent:
      'MBTI ช่วยให้เข้าใจว่าทำไมบางคนเข้ากับเราได้ดี ในทฤษฎี ประเภทที่สมดุลกัน (เช่น INTJ กับ ENFP, ISTJ กับ ESFP) มักจะเข้ากันได้ดี เพราะเสริมจุดอ่อนซึ่งกันและกัน อย่างไรก็ตาม ทุกประเภทสามารถมีความสัมพันธ์ที่ดีได้ หากเข้าใจถึงความแตกต่าง สื่อสารอย่างเปิดเผย และเคารพพื้นที่ของกันและกัน',
    enContent:
      "MBTI helps understand why certain people click. In theory, complementary types (e.g., INTJ with ENFP, ISTJ with ESFP) often pair well as they balance each other's weaknesses. However, any type combination can thrive with good communication, understanding differences, and respecting each other's space.",
  },
  {
    icon: '🌱',
    thTitle: 'การพัฒนาตัวเองตาม MBTI',
    enTitle: 'Self-Improvement Based on MBTI',
    thContent:
      'MBTI ไม่ใช่แค่การจำแนกประเภท แต่เป็นเครื่องมือในการพัฒนาตัวเอง ทุกประเภทมีจุดที่ควรปรับปรุง เช่น INTJ อาจฝึกแสดงความเห็นอกเห็นใจมากขึ้น ENFP อาจฝึกวินัยและสมาธิ ISTJ อาจเปิดรับสิ่งใหม่ๆ มากขึ้น เป้าหมายคือการเข้าใจตัวเองเพื่อเติบโตอย่างสมดุล ไม่ใช่เปลี่ยนแปลงตัวเอง',
    enContent:
      "MBTI isn't just classification — it's a self-improvement tool. Every type has growth areas: INTJs can practice empathy, ENFPs can build discipline, ISTJs can embrace novelty. The goal is understanding yourself for balanced growth, not changing who you are.",
  },
  {
    icon: '🔬',
    thTitle: 'ความแตกต่างระหว่างแบบทดสอบ 60 ข้อ vs 120 ข้อ',
    enTitle: 'Standard (60 Questions) vs Detailed (120 Questions)',
    thContent:
      'แบบมาตรฐาน 60 ข้อ ใช้เวลาประมาณ 10-15 นาที ให้ผลลัพธ์ที่น่าเชื่อถือสำหรับการเริ่มต้น แบบละเอียด 120 ข้อ ใช้เวลา 20-30 นาที ให้ผลลัพธ์ที่แม่นยำยิ่งขึ้น คำถามเพิ่มเติมช่วยลดความคลาดเคลื่อนและครอบคลุมทุกแง่มุมของแต่ละมิติ ทั้งสองแบบใช้การประเมินแบบ Likert 7 ระดับเหมือนกัน',
    enContent:
      'The Standard 60-question test takes ~15 minutes and gives reliable starter results. The Detailed 120-question test takes ~30 minutes for higher accuracy. Additional questions reduce variance and cover more facets of each dimension. Both use the same 7-point Likert scale assessment.',
  },
];

export default function ArticlesPage() {
  const { lang } = useLang();

  return (
    <main className="min-h-screen relative z-10">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--text)] to-[var(--text-muted)]">
            {lang === 'th' ? 'บทความเกี่ยวกับ MBTI' : 'Articles About MBTI'}
          </h1>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            {lang === 'th'
              ? 'อ่านบทความให้ความรู้เกี่ยวกับบุคลิกภาพ MBTI อาชีพ ความสัมพันธ์ และการพัฒนาตัวเอง'
              : 'Read informative articles about MBTI personalities, careers, relationships, and self-improvement.'}
          </p>
        </motion.div>

        <div className="space-y-6">
          {articles.map((a, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[var(--border)] p-6 sm:p-8 hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-bold text-[var(--text)] mb-3 flex items-center gap-2">
                <span className="text-2xl">{a.icon}</span>
                {lang === 'th' ? a.thTitle : a.enTitle}
              </h2>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed whitespace-pre-line">
                {lang === 'th' ? a.thContent : a.enContent}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/test?mode=standard"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-[var(--accent)] text-white font-semibold hover:scale-105 transition-all shadow-lg"
          >
            {lang === 'th' ? '✨ ทดสอบบุคลิกภาพของคุณ' : '✨ Test Your Personality'}
          </Link>
        </div>
      </div>
    </main>
  );
}
