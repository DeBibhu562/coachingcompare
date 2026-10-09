import archiveJson from './staticArchive.generated.json';
import { getVsComparison, getAllVsComparisonSlugs } from './iasVsComparisons';

export type StaticArchivePage = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  faqs: { question: string; answer: string }[];
  kind: 'legal' | 'vs';
};

export const STATIC_ARCHIVE = archiveJson as StaticArchivePage[];

const bySlug = new Map(STATIC_ARCHIVE.map((p) => [p.slug, p]));

export function getStaticArchivePage(slug: string): StaticArchivePage | undefined {
  const direct = bySlug.get(slug);
  if (direct) return direct;

  const vs = getVsComparison(slug);
  if (vs) {
    return {
      slug: vs.slug,
      title: vs.title,
      h1: vs.title.split('|')[0].trim(),
      description: vs.metaDescription || vs.lede,
      faqs: (vs.faqs || []).map((f: any) => ({ question: f.question, answer: f.answer })),
      kind: 'vs',
    };
  }

  return undefined;
}

export function getAllStaticArchiveSlugs(): string[] {
  const slugs = new Set<string>(STATIC_ARCHIVE.map((p) => p.slug));
  getAllVsComparisonSlugs().forEach((s) => slugs.add(s));
  return Array.from(slugs);
}

