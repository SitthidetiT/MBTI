'use client';
import type { Question, Lang } from '@/types';
import { t } from '@/data/translations';

interface ScaleItem {
  value: number;
  labelKey: string;
}

const SCALE: ScaleItem[] = [
  { value: 3, labelKey: 'agree_strongly' },
  { value: 2, labelKey: 'agree' },
  { value: 1, labelKey: 'agree_slightly' },
  { value: 0, labelKey: 'neutral' },
  { value: -1, labelKey: 'disagree_slightly' },
  { value: -2, labelKey: 'disagree' },
  { value: -3, labelKey: 'disagree_strongly' },
];

interface QuestionCardProps {
  question: Question;
  lang: Lang;
  onAnswer: (id: number, dimension: string, rawValue: number, direction: 1 | -1) => void;
  selectedValue?: number;
}

export default function QuestionCard({
  question,
  lang,
  onAnswer,
  selectedValue,
}: QuestionCardProps) {
  const tx = t[lang];

  const handleSelect = (value: number) => {
    onAnswer(question.id, question.dimension, value, question.direction);
  };

  const sizes = [
    'w-14 h-14 sm:w-16 sm:h-16', // +3
    'w-11 h-11 sm:w-12 sm:h-12', // +2
    'w-8 h-8 sm:w-9 sm:h-9', // +1
    'w-7 h-7 sm:w-8 sm:h-8', //  0
    'w-8 h-8 sm:w-9 sm:h-9', // -1
    'w-11 h-11 sm:w-12 sm:h-12', // -2
    'w-14 h-14 sm:w-16 sm:h-16', // -3
  ];

  const getColorClasses = (value: number, isSelected: boolean) => {
    if (value > 0) {
      // Agree (Violet)
      if (isSelected)
        return 'bg-[var(--accent)] border-[var(--accent)] shadow-[0_0_15px_rgba(139,92,246,0.6)] scale-110 ring-4 ring-[var(--accent)]/20';
      return 'bg-transparent border-[var(--accent)] hover:bg-[var(--accent)]/10';
    }
    if (value < 0) {
      // Disagree (Rose)
      if (isSelected)
        return 'bg-rose-500 border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.6)] scale-110 ring-4 ring-rose-500/20';
      return 'bg-transparent border-rose-500 hover:bg-rose-500/10';
    }
    // Neutral (Gray)
    if (isSelected)
      return 'bg-slate-400 border-slate-400 shadow-[0_0_15px_rgba(148,163,184,0.6)] scale-110 ring-4 ring-slate-400/20';
    return 'bg-transparent border-slate-300 hover:bg-slate-100';
  };

  const getBorderWeight = (value: number) => {
    const abs = Math.abs(value);
    if (abs === 3) return 'border-[3px] sm:border-4';
    if (abs === 2) return 'border-[2px] sm:border-[3px]';
    return 'border-2';
  };

  const getCheckIcon = (value: number) => (
    <svg
      className={`${value === 0 ? 'w-4 h-4' : 'w-5 h-5 sm:w-6 sm:h-6'} text-white`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className="text-xl sm:text-2xl font-bold text-[var(--text)] leading-relaxed mb-10 text-center px-4 max-w-2xl min-h-[80px]">
        {question[lang]}
      </p>

      <div className="w-full max-w-xl relative">
        <div className="flex justify-between text-xs sm:text-sm font-bold mb-6 px-1 tracking-wide">
          <span className="text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full uppercase">
            {tx.agree_strongly as string}
          </span>
          <span className="text-rose-500 bg-rose-500/10 px-3 py-1 rounded-full uppercase">
            {tx.disagree_strongly as string}
          </span>
        </div>

        <div className="flex items-center justify-between w-full relative z-10 px-2 sm:px-6">
          {/* Connecting dashed line in the background */}
          <div className="absolute left-[10%] right-[10%] top-1/2 -translate-y-1/2 h-[2px] bg-slate-200 -z-10" />

          {SCALE.map(({ value, labelKey }, idx) => {
            const isSelected = selectedValue === value;
            const sz = sizes[idx];
            const weight = getBorderWeight(value);

            return (
              <button
                key={value}
                onClick={() => handleSelect(value)}
                title={tx[labelKey] as string}
                aria-label={tx[labelKey] as string}
                className={`
                  ${sz} ${weight} rounded-full flex items-center justify-center
                  transition-all duration-300 focus:outline-none cursor-pointer
                  ${getColorClasses(value, isSelected)}
                  ${!isSelected && 'hover:scale-110'}
                `}
              >
                {isSelected && getCheckIcon(value)}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
