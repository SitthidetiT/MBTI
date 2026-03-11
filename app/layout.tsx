import type { Metadata, Viewport } from 'next';
import { Kanit, Noto_Sans_Thai } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const kanit = Kanit({
  subsets: ['latin', 'thai'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-kanit',
  display: 'swap',
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-sans-thai',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MBTI Personality Test | แบบทดสอบบุคลิกภาพ MBTI',
  description:
    'Take the standard internationally recognized MBTI personality assessment. Discover your 16-type personality with detailed result analysis. | แบบทดสอบบุคลิกภาพ MBTI มาตรฐานสากล 60 ข้อ พร้อมผลลัพธ์แบบละเอียด',
  openGraph: {
    title: 'MBTI Personality Test | ค้นหาบุคลิกภาพ 16 แบบของคุณ',
    description:
      'แบบทดสอบบุคลิกภาพ MBTI ที่แม่นยำที่สุด คำนวณผลลัพธ์อย่างละเอียดผ่านระบบ 5 มิติ (รวมถึง A/T). เริ่มทดสอบฟรีทันที!',
    url: 'https://your-mbti-domain.com', // To be updated when deployed
    siteName: '16PersonalityTH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MBTI Personality Test | ค้นหาบุคลิกภาพ 16 แบบของคุณ',
    description:
      'ทดสอบบุคลิกภาพ 16 แบบ เพื่อค้นหาตัวแทนและเส้นทางอาชีพที่เหมาะสมของคุณ เริ่มทำฟรี!',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className={`${kanit.variable} ${notoSansThai.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
