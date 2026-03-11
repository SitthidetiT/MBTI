import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center justify-center">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-6">
          <div className="absolute inset-0 border-4 border-[var(--border)] rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[var(--accent)] rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="text-[var(--text)] font-semibold text-lg tracking-wide animate-pulse">
          กำลังโหลดข้อมูล...
        </p>
      </div>
    </div>
  );
}
