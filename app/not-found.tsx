import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function NotFound() {
  return (
    <main className="min-h-screen pb-20 flex flex-col items-center justify-center p-4 relative z-10">
      <Navbar />
      <div className="mt-16 bg-white/60 backdrop-blur-md rounded-[2rem] p-8 sm:p-12 max-w-lg w-full text-center border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent)]"></div>
        <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
          🧭
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] mb-2">404</h2>
        <h3 className="text-xl font-semibold text-[var(--text)] mb-4">ไม่พบหน้านี้</h3>
        <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
          หน้าที่คุณกำลังค้นหาอาจถูกลบไปแล้ว หรือไม่มีอยู่จริงในระบบของเรา
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[var(--accent)] text-white font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-violet-200"
        >
          🏠 กลับหน้าหลัก
        </Link>
      </div>
    </main>
  );
}
