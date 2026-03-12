'use client';
import type { Lang } from '@/types';
import { t } from '@/data/translations';

interface ProgressBarProps {
  current: number;
  total: number;
  lang: Lang;
}

export default function ProgressBar({ current, total, lang }: ProgressBarProps) {
  const tx = t[lang];
  const pct = Math.round((current / total) * 100);

  const msgs = tx.progress_messages as string[];
  const msgIndex =
    pct === 0 ? 0 : pct <= 20 ? 1 : pct <= 50 ? 2 : pct <= 80 ? 3 : pct < 100 ? 4 : 5;
  const msg = msgs[msgIndex];

  return (
    <div
      className="w-full max-w-xl mx-auto px-4"
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${tx.question_of as string} ${current} ${tx.of as string} ${total}`}
    >
      <div className="flex items-center justify-between mb-3 text-sm font-medium">
        <span className="text-[var(--text-muted)] bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/40">
          {tx.question_of as string} {current} {tx.of as string} {total}
        </span>
        <span className="text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full">
          {pct}%
        </span>
      </div>

      <div className="h-2.5 bg-black/5 backdrop-blur-sm rounded-full overflow-hidden shadow-inner border border-white/20">
        <div
          className="h-full bg-gradient-to-r from-violet-500 to-[var(--accent)] rounded-full transition-all duration-700 ease-out relative"
          style={{ width: `${pct}%` }}
        >
          <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]"></div>
        </div>
      </div>

      {msg && (
        <p className="text-center text-xs text-[var(--text-muted)] mt-2 transition-all duration-300">
          {msg}
        </p>
      )}
    </div>
  );
}
