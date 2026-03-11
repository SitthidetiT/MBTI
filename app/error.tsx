'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen pb-20 flex flex-col items-center justify-center p-4 relative z-10">
      <Navbar />
      <div className="mt-16 bg-white/60 backdrop-blur-md rounded-[2rem] p-8 sm:p-12 max-w-lg w-full text-center border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-rose-500"></div>
        <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
          ⚠️
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-4">
          เกิดข้อผิดพลาดบางอย่าง!
        </h2>
        <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
          ระบบไม่สามารถทำงานได้อย่างถูกต้องในขณะนี้ โปรดลองใหม่อีกครั้ง หรือกลับไปยังหน้าหลัก
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-rose-500 text-white font-semibold hover:bg-rose-600 hover:scale-105 transition-all shadow-lg shadow-rose-500/30"
        >
          🔄 ลองใหม่อีกครั้ง
        </button>
      </div>
    </main>
  );
}
