import type { Metadata } from 'next';
import { personalities } from '@/data/personalities';
import type { TypeCode } from '@/types';

type Props = {
  params: Promise<{ type: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params;
  const typeCode = type.toUpperCase() as TypeCode;
  const data = personalities[typeCode];

  // Fallback
  if (!data) {
    return {
      title: 'Type Not Found',
    };
  }

  const title = `${typeCode} (${data.nickname.th} / ${data.nickname.en}) | MBTI Type Profile`;
  const description = data.overview.th.substring(0, 150) + '...';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function TypeDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
