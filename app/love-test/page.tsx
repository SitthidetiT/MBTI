'use client';
import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { useLang } from '@/context/LanguageContext';
import { loveQuestions, calculateLoveType, getLoveDimPercents } from '@/data/love_questions';
import type { LoveQuestion } from '@/types';

const TOTAL = loveQuestions.length;

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export default function LoveTestPage() {
  const { lang } = useLang();
  const router = useRouter();

  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [direction, setDirection] = useState(1);

  const currentQ: LoveQuestion = loveQuestions[currentIndex];

  const goNext = useCallback(() => {
    if (currentIndex < TOTAL - 1) {
      setDirection(1);
      setCurrentIndex((i) => i + 1);
    }
  }, [currentIndex]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((i) => i - 1);
    }
  }, [currentIndex]);

  // Keyboard: ← → for nav, Y/N for yes/no
  useEffect(() => {
    if (!started) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && answers[currentQ?.id] !== undefined && currentIndex < TOTAL - 1)
        goNext();
      if (e.key === 'ArrowLeft' && currentIndex > 0) goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [started, currentIndex, answers, currentQ, goNext, goPrev]);

  const handleAnswer = useCallback(
    (value: boolean) => {
      const newAnswers = { ...answers, [currentQ.id]: value };
      setAnswers(newAnswers);

      setTimeout(() => {
        if (currentIndex < TOTAL - 1) {
          setDirection(1);
          setCurrentIndex((i) => i + 1);
        } else {
          // All answered — calculate result
          const type = calculateLoveType(newAnswers);
          const pcts = getLoveDimPercents(newAnswers);
          const params = new URLSearchParams({
            type,
            LF: String(pcts.LF),
            AC: String(pcts.AC),
            PR: String(pcts.PR),
            EO: String(pcts.EO),
          });
          router.push(`/love-result?${params.toString()}`);
        }
      }, 300);
    },
    [currentIndex, answers, currentQ, router]
  );

  // ─── Intro screen ────────────────────────────────────────────────────────
  if (!started) {
    return (
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg w-full text-center"
          >
            {/* Pink gradient card */}
            <div
              className="relative rounded-[2.5rem] overflow-hidden p-10 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #fdf2f8 0%, #fff1f2 50%, #f0f9ff 100%)',
              }}
            >
              {/* decorative hearts */}
              <div className="absolute top-4 left-6 text-pink-200 text-4xl select-none">💗</div>
              <div className="absolute top-8 right-8 text-rose-200 text-3xl select-none">💕</div>
              <div className="absolute bottom-6 left-10 text-fuchsia-200 text-2xl select-none">
                💖
              </div>
              <div className="absolute bottom-4 right-6 text-pink-300 text-3xl select-none">💝</div>

              <p className="text-xs font-bold uppercase tracking-widest text-pink-400 mb-3">
                Love Type Test
              </p>
              <h1
                className="text-3xl sm:text-4xl font-extrabold mb-4"
                style={{
                  background: 'linear-gradient(135deg, #e11d48, #c026d3)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {lang === 'th' ? 'คุณเป็นคนรักแบบไหน?' : "What's Your Love Type?"}
              </h1>
              <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-xs mx-auto">
                {lang === 'th'
                  ? '20 คำถาม ตอบ ใช่ / ไม่ใช่ ค้นพบบุคลิกภาพความรักใน 4 มิติ เพื่อเข้าใจตัวเองในความสัมพันธ์ได้ดีขึ้น'
                  : '20 yes/no questions to discover your romantic personality across 4 dimensions and understand yourself in love.'}
              </p>

              {/* 4 dimension chips */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {[
                  {
                    label: lang === 'th' ? 'ผู้นำ vs ผู้ตาม' : 'Leader vs Follower',
                    color: '#e11d48',
                  },
                  {
                    label: lang === 'th' ? 'เปิดใจ vs ระวังตัว' : 'Amorous vs Cautious',
                    color: '#c026d3',
                  },
                  {
                    label: lang === 'th' ? 'หัวใจ vs เหตุผล' : 'Passionate vs Rational',
                    color: '#7c3aed',
                  },
                  {
                    label: lang === 'th' ? 'แสดงออก vs สังเกต' : 'Expressive vs Observant',
                    color: '#2563eb',
                  },
                ].map((d) => (
                  <span
                    key={d.label}
                    className="px-3 py-1 rounded-full text-xs font-semibold border"
                    style={{
                      color: d.color,
                      borderColor: d.color + '40',
                      backgroundColor: d.color + '10',
                    }}
                  >
                    {d.label}
                  </span>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setStarted(true)}
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-bold text-base shadow-xl cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #e11d48, #c026d3)' }}
              >
                💕 {lang === 'th' ? 'เริ่มทดสอบเลย' : 'Start the Test'}
              </motion.button>

              <p className="text-xs text-gray-400 mt-4">
                {lang === 'th' ? '⏱ ใช้เวลาประมาณ 3–5 นาที' : '⏱ Takes about 3–5 minutes'}
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  // ─── Test screen ─────────────────────────────────────────────────────────
  const progress = (currentIndex / TOTAL) * 100;
  const answered = answers[currentQ.id];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col pt-20 pb-10">
        {/* Progress bar */}
        <div className="px-4 pt-8 pb-6 max-w-xl mx-auto w-full">
          <div className="flex items-center justify-between text-xs text-gray-400 mb-2 font-medium">
            <span>{lang === 'th' ? 'แบบทดสอบความรัก' : 'Love Type Test'}</span>
            <span className="font-bold" style={{ color: '#e11d48' }}>
              {currentIndex + 1} / {TOTAL}
            </span>
          </div>
          <div className="h-2 bg-pink-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #e11d48, #c026d3)' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="w-full max-w-xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div
                  className="rounded-3xl border-2 p-8 sm:p-10 shadow-lg bg-white min-h-[280px] flex flex-col justify-between"
                  style={{ borderColor: '#fce7f3' }}
                >
                  {/* Dimension badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ background: '#fff1f2', color: '#e11d48' }}
                    >
                      💕 {lang === 'th' ? 'ความรัก' : 'Love'}
                    </span>
                    <span className="text-xs text-gray-400">Q{currentIndex + 1}</span>
                  </div>

                  {/* Question text */}
                  <p className="text-base sm:text-lg font-semibold text-gray-800 leading-relaxed text-center flex-1 flex items-center justify-center py-4">
                    {currentQ[lang]}
                  </p>

                  {/* Yes / No buttons */}
                  <div className="flex gap-4 mt-6">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleAnswer(true)}
                      className="flex-1 py-3.5 rounded-2xl font-bold text-sm transition-all cursor-pointer shadow-sm"
                      style={
                        answered === true
                          ? {
                              background: 'linear-gradient(135deg, #e11d48, #c026d3)',
                              color: 'white',
                              boxShadow: '0 4px 20px #e11d4840',
                            }
                          : { background: '#fff1f2', color: '#e11d48', border: '2px solid #fce7f3' }
                      }
                    >
                      {lang === 'th' ? '✓ ใช่' : '✓ Yes'}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleAnswer(false)}
                      className="flex-1 py-3.5 rounded-2xl font-bold text-sm transition-all cursor-pointer shadow-sm"
                      style={
                        answered === false
                          ? {
                              background: '#374151',
                              color: 'white',
                              boxShadow: '0 4px 20px #37415140',
                            }
                          : { background: '#f9fafb', color: '#6b7280', border: '2px solid #e5e7eb' }
                      }
                    >
                      {lang === 'th' ? '✕ ไม่ใช่' : '✕ No'}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between max-w-xl mx-auto w-full px-4 pt-6">
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-1 px-4 py-2 rounded-full text-sm text-gray-400 border border-gray-200 hover:border-pink-300 hover:text-pink-500 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all"
          >
            ← {lang === 'th' ? 'ย้อนกลับ' : 'Back'}
          </button>
          {currentIndex < TOTAL - 1 ? (
            <button
              onClick={goNext}
              disabled={answered === undefined}
              className="px-6 py-2.5 rounded-full font-semibold text-sm text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all"
              style={{ background: 'linear-gradient(135deg, #e11d48, #c026d3)' }}
            >
              {lang === 'th' ? 'ถัดไป →' : 'Next →'}
            </button>
          ) : (
            <button
              onClick={() => {
                const type = calculateLoveType(answers);
                const pcts = getLoveDimPercents(answers);
                const params = new URLSearchParams({
                  type,
                  LF: String(pcts.LF),
                  AC: String(pcts.AC),
                  PR: String(pcts.PR),
                  EO: String(pcts.EO),
                });
                router.push(`/love-result?${params.toString()}`);
              }}
              disabled={Object.keys(answers).length < TOTAL}
              className="px-6 py-2.5 rounded-full font-bold text-sm text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all shadow-lg"
              style={{ background: 'linear-gradient(135deg, #e11d48, #c026d3)' }}
            >
              {lang === 'th' ? '💕 ดูผลลัพธ์' : '💕 See Results'}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
