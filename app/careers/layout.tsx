import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career Paths | เส้นทางอาชีพตามบุคลิกภาพ MBTI',
  description:
    'ค้นพบอาชีพที่เหมาะสม ยกระดับการทำงานผ่านความเข้าใจในบุคลิกภาพทั้ง 16 แบบ | Discover the best career paths for your MBTI personality type.',
  openGraph: {
    title: 'Career Paths | เส้นทางอาชีพตามบุคลิกภาพ MBTI',
    description: 'ค้นพบอาชีพที่เหมาะสม ยกระดับการทำงานผ่านความเข้าใจในบุคลิกภาพทั้ง 16 แบบ',
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
