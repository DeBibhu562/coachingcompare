import liveRankingsJson from './liveRankings.generated.json';

export type LiveRankedInstitute = {
  rank: number;
  name: string;
  blurb: string;
  website?: string;
  mapUrl?: string;
  phone?: string;
  email?: string;
  address?: string;
};

export type LiveRankingPage = {
  slug: string;
  title: string;
  institutes: LiveRankedInstitute[];
  faqs: { question: string; answer: string }[];
};

export const LIVE_RANKINGS = liveRankingsJson as LiveRankingPage[];

const bySlug = new Map(LIVE_RANKINGS.map((p) => [p.slug, p]));

export const CRITERION_LABELS: Record<string, string> = {
  results: 'Results',
  'faculty-experience': 'Faculty Experience',
  'study-material': 'Study Material',
  'mock-test-series': 'Mock Test Series',
  'batch-size': 'Batch Size',
  alumni: 'Alumni',
  'clat-toppers': 'Toppers Mentorship',
  'ipm-toppers': 'IPM Toppers',
  'cse-toppers': 'Toppers Mentorship',
  toppers: 'Toppers',
  'selection-rate': 'Selection Rate',
  'selection-ratio': 'Selection Ratio',
  teachers: 'Teacher Quality',
  faculty: 'Faculty',
  'google-reviews': 'Google Reviews',
  'google-ratings': 'Google Ratings',
};

export function getLiveRankingPage(slug: string): LiveRankingPage | undefined {
  const direct = bySlug.get(slug);
  if (direct) return direct;

  // Handle dynamic -as-per- facets (e.g. best-du-llb-coaching-in-mumbai-as-per-results)
  const matchFacet = slug.match(/^(.+?)-as-per-([a-z0-9-]+)$/);
  if (matchFacet) {
    const baseSlug = matchFacet[1];
    const facetKey = matchFacet[2];
    const basePage = bySlug.get(baseSlug);
    if (basePage) {
      const facetLabel = CRITERION_LABELS[facetKey] || facetKey.replace(/-/g, ' ');
      const cleanTitle = basePage.title.replace(/\s*\|\s*CoachingCompare\.in$/, '');
      const newTitle = cleanTitle.includes(' 2026')
        ? cleanTitle.replace(/ 2026/, ` As per ${facetLabel} 2026 | CoachingCompare.in`)
        : `${cleanTitle} As per ${facetLabel} 2026 | CoachingCompare.in`;

      return {
        slug,
        title: newTitle,
        institutes: basePage.institutes,
        faqs: basePage.faqs,
      };
    }
  }

  return undefined;
}

export function getAllLiveRankingSlugs(): string[] {
  return LIVE_RANKINGS.map((p) => p.slug);
}

export function liveRankingDirectAnswer(page: LiveRankingPage): string {
  const top = page.institutes.slice(0, 3).map((i) => i.name);
  if (!top.length) {
    return `${page.title} — independent coaching shortlist on CoachingCompare.in.`;
  }
  return `This ranking places ${top[0]} at #1${top[1] ? `, followed by ${top[1]}` : ''}${
    top[2] ? ` and ${top[2]}` : ''
  }.`;
}
