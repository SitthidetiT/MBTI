import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '16 Personality Types | 16 ประเภทบุคลิกภาพ MBTI',
  description:
    'เรียนรู้รายละเอียดของบุคลิกภาพทั้ง 16 แบบครบทุกมิติ พร้อมจุดแข็ง จุดอ่อน และอาชีพที่เหมาะสม | Learn about all 16 MBTI personality types, their strengths, and careers.',
  openGraph: {
    title: '16 Personality Types | 16 ประเภทบุคลิกภาพ MBTI',
    description:
      'เรียนรู้รายละเอียดของบุคลิกภาพทั้ง 16 แบบครบทุกมิติ พร้อมจุดแข็ง จุดอ่อน และอาชีพที่เหมาะสม',
  },
};

export default function TypesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
