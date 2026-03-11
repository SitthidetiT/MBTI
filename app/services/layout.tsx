import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | บริการแบบทดสอบองค์กรและให้คำปรึกษา',
  description:
    'บริการแบบทดสอบบุคลิกภาพที่ออกแบบมาสำหรับองค์กรและการพัฒนาตนเอง | Check out our professional services for team building and MBTI consultations.',
  openGraph: {
    title: 'Our Services | บริการแบบทดสอบองค์กรและให้คำปรึกษา',
    description: 'บริการแบบทดสอบบุคลิกภาพที่ออกแบบมาสำหรับองค์กรและการพัฒนาตนเอง',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
