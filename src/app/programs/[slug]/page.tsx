import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { programs, getProgramBySlug } from '@/lib/programs';
import ProgramPageClient from './ProgramPageClient';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};
  return {
    title: program.name,
    description: program.description.slice(0, 160),
  };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();
  return <ProgramPageClient program={program} />;
}
