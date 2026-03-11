'use client';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/60 backdrop-blur-md">
      <div className="relative flex items-center justify-center">
        {/* Outer glowing ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          className="absolute w-20 h-20 rounded-full border-[3px] border-t-violet-500 border-r-fuchsia-500 border-b-transparent border-l-transparent shadow-[0_0_15px_rgba(139,92,246,0.5)]"
        />

        {/* Inner pulsing circle */}
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500"
        />

        {/* Subtle text */}
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="absolute -bottom-10 whitespace-nowrap text-sm font-semibold tracking-widest text-[var(--accent)]"
        >
          LOADING...
        </motion.div>
      </div>
    </div>
  );
}
