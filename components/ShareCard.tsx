'use client';
import { useRef } from 'react';
import type { Group, Lang } from '@/types';
import { GROUP_COLORS } from '@/data/personalities';
import { t } from '@/data/translations';

interface ShareCardProps {
  typeKey: string;
  identity: string;
  nickname: Record<Lang, string>;
  group: Group;
  lang: Lang;
}

export default function ShareCard({ typeKey, identity, nickname, group, lang }: ShareCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const tx = t[lang];
  const colors = GROUP_COLORS[group] ?? GROUP_COLORS.analysts;

  const handleDownload = async () => {
    if (!cardRef.current) return;
    const html2canvas = (await import('html2canvas')).default;
    const canvas = await html2canvas(cardRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: colors.bg,
    });
    const a = document.createElement('a');
    a.download = `MBTI-${typeKey}-${identity}.png`;
    a.href = canvas.toDataURL('image/png');
    a.click();
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({
        title: `My MBTI: ${typeKey}-${identity}`,
        text: `${tx.share_card_title as string} ${typeKey}-${identity} — ${nickname[lang]}. ${tx.share_card_sub as string} ${url}`,
        url,
      });
    } else {
      await navigator.clipboard.writeText(url);
      alert(tx.copied as string);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        ref={cardRef}
        style={{ backgroundColor: colors.bg, aspectRatio: '9/16', maxHeight: 480, maxWidth: 270 }}
        className="w-full rounded-3xl p-8 flex flex-col items-center justify-center gap-4 shadow-xl"
      >
        <div className="text-5xl">🧠</div>
        <div
          style={{ color: colors.accent, borderColor: colors.accent }}
          className="border-2 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest"
        >
          {lang === 'th' ? 'บุคลิกภาพของคุณ' : 'Your Personality'}
        </div>
        <div style={{ color: colors.accent }} className="text-7xl font-bold font-['Kanit']">
          {typeKey}
        </div>
        <div className="text-2xl font-semibold font-['Kanit'] text-[var(--text)]">-{identity}</div>
        <div className="text-lg text-[var(--text-muted)] font-medium">{nickname[lang]}</div>
        <div className="w-12 h-0.5 mt-2" style={{ backgroundColor: colors.accent }} />
        <p className="text-xs text-[var(--text-muted)] text-center">
          {tx.share_card_sub as string}
        </p>
      </div>

      <div className="flex gap-3 flex-wrap justify-center">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[var(--accent)] text-[var(--accent)] font-semibold text-sm hover:bg-[var(--accent-light)] cursor-pointer"
        >
          ⬇️ {tx.btn_download as string}
        </button>
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent)] text-white font-semibold text-sm hover:opacity-90 cursor-pointer"
        >
          📤 {tx.btn_share as string}
        </button>
      </div>
    </div>
  );
}
