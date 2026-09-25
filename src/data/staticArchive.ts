import archiveJson from './staticArchive.generated.json';

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
  return bySlug.get(slug);
}

export function getAllStaticArchiveSlugs(): string[] {
  return STATIC_ARCHIVE.map((p) => p.slug);
}
