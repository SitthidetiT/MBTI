import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MBTI Articles | บทความเกี่ยวกับบุคลิกภาพ',
  description:
    'อ่านบทความน่ารู้ จิตวิทยา และการพัฒนาตนเองตามหลัก MBTI ทั้ง 16 แบบ | Read interesting psychology and career growth articles based on MBTI.',
  openGraph: {
    title: 'MBTI Articles | บทความเกี่ยวกับบุคลิกภาพ',
    description: 'อ่านบทความน่ารู้ จิตวิทยา และการพัฒนาตนเองตามหลัก MBTI ทั้ง 16 แบบ',
  },
};

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
