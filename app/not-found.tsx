'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { useLang } from '@/context/LanguageContext';

export default function NotFound() {
  const { lang } = useLang();

  return (
    <main className="min-h-screen relative z-10 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 overflow-hidden flex flex-col">
      <Navbar />

      {/* Decorative Blur Orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-violet-400/20 rounded-full blur-[100px] -z-10 animate-pulse"
        style={{ animationDuration: '4s' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-fuchsia-400/20 rounded-full blur-[120px] -z-10 animate-pulse"
        style={{ animationDuration: '6s', animationDelay: '1s' }}
      />

      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white/60 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl p-10 sm:p-16 max-w-xl w-full text-center relative overflow-hidden"
        >
          {/* Inner highlight for glass effect */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', damping: 12 }}
            className="text-8xl sm:text-9xl mb-6 relative"
          >
            🔍
          </motion.div>

          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600">
            {lang === 'th' ? '404 - ไม่พบหน้านี้' : '404 - Page Not Found'}
          </h1>

          <p className="text-lg text-[var(--text-muted)] mb-8 leading-relaxed">
            {lang === 'th'
              ? 'ดูเหมือนคุณจะหลงทางในโลกของบุคลิกภาพ เนื้อหาที่คุณตามหาอาจถูกย้าย หรือไม่มีอยู่จริง'
              : "It seems you're lost in the world of personalities. The page you are looking for might have been moved or doesn't exist."}
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-bold bg-gradient-to-r from-[var(--text)] to-gray-700 hover:scale-105 transition-all shadow-xl shadow-gray-200"
          >
            {lang === 'th' ? '🏠 กลับสู่หน้าหลัก' : '🏠 Back to Home'}
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
