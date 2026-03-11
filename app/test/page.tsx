'use client';
import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import QuestionCard from '@/components/QuestionCard';
import ProgressBar from '@/components/ProgressBar';
import { useLang } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { getQuestionsByMode, shuffleQuestions } from '@/data/questions';
import type { Answers, Dimension, TestMode } from '@/types';

export default function TestPage() {
  const { lang } = useLang();
  const tx = t[lang];
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = (searchParams.get('mode') as TestMode) || 'standard';

  const [orderedQuestions] = useState(() => shuffleQuestions(getQuestionsByMode(mode)));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [direction, setDirection] = useState(1);

  const total = orderedQuestions.length;
  const currentQ = orderedQuestions[currentIndex];

  const goNext = useCallback(() => {
    if (currentIndex < total - 1) {
      setDirection(1);
      setCurrentIndex((i) => i + 1);
    }
  }, [currentIndex, total]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((i) => i - 1);
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (
        e.key === 'ArrowRight' &&
        currentIndex < total - 1 &&
        answers[currentQ?.id] !== undefined
      ) {
        goNext();
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        goPrev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex, answers, currentQ, goNext, goPrev, total]);

  const calculateResult = useCallback(
    (finalAnswers: Answers) => {
      const dims: Record<Dimension, number> = { EI: 0, NS: 0, TF: 0, JP: 0, AT: 0 };
      const counts: Record<Dimension, number> = { EI: 0, NS: 0, TF: 0, JP: 0, AT: 0 };

      Object.values(finalAnswers).forEach(({ dimension, scaledValue }) => {
        dims[dimension] += scaledValue;
        counts[dimension]++;
      });

      const scores: Record<string, number> = {};
      (Object.keys(dims) as Dimension[]).forEach((dim) => {
        const maxScore = counts[dim] * 3;
        const pct =
          maxScore === 0 ? 50 : Math.round(((dims[dim] + maxScore) / (2 * maxScore)) * 100);
        scores[dim] = Math.max(0, Math.min(100, pct));
      });

      const params = new URLSearchParams(
        Object.fromEntries(Object.entries(scores).map(([k, v]) => [k, String(v)]))
      );
      router.push(`/result?${params.toString()}`);
    },
    [router]
  );

  const handleAnswer = useCallback(
    (id: number, dimension: string, rawValue: number, qDir: 1 | -1) => {
      const scaledValue = rawValue * qDir;
      const newAnswers: Answers = {
        ...answers,
        [id]: { dimension: dimension as Dimension, scaledValue, rawValue },
      };
      setAnswers(newAnswers);

      setTimeout(() => {
        if (currentIndex < total - 1) {
          goNext();
        } else {
          calculateResult(newAnswers);
        }
      }, 400);
    },
    [currentIndex, total, answers, goNext, calculateResult]
  );

  const handleFinish = () => {
    if (Object.keys(answers).length < total) {
      alert(tx.answer_all as string);
      return;
    }
    calculateResult(answers);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  if (!currentQ) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-[var(--accent)] border-t-transparent rounded-full" />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col pt-20 pb-10">
        <div className="pt-8 pb-6">
          <ProgressBar current={currentIndex + 1} total={total} lang={lang} />
        </div>

        <div className="flex-1 flex items-center justify-center px-4">
          <div className="w-full max-w-xl">
            <div className="bg-white rounded-3xl shadow-lg border border-[var(--border)] p-8 sm:p-10 min-h-[320px] flex flex-col justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentQ?.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <QuestionCard
                    question={currentQ}
                    lang={lang}
                    onAnswer={handleAnswer}
                    selectedValue={answers[currentQ?.id]?.rawValue}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between max-w-xl mx-auto w-full px-4 pt-6">
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-1 px-4 py-2 rounded-full text-sm text-[var(--text-muted)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            ← {tx.back as string}
          </button>

          {currentIndex === total - 1 ? (
            <button
              onClick={handleFinish}
              className="px-6 py-2.5 rounded-full bg-[var(--accent)] text-white font-semibold text-sm hover:opacity-90 cursor-pointer"
            >
              {tx.finish as string}
            </button>
          ) : (
            <button
              onClick={goNext}
              disabled={answers[currentQ?.id] === undefined}
              className="px-6 py-2.5 rounded-full bg-[var(--accent)] text-white font-semibold text-sm hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              {tx.next as string}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
