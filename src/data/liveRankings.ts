import liveRankingsJson from './liveRankings.generated.json';

export type LiveRankedInstitute = {
  rank: number;
  name: string;
  blurb: string;
};

export type LiveRankingPage = {
  slug: string;
  title: string;
  institutes: LiveRankedInstitute[];
  faqs: { question: string; answer: string }[];
};

export const LIVE_RANKINGS = liveRankingsJson as LiveRankingPage[];

const bySlug = new Map(LIVE_RANKINGS.map((p) => [p.slug, p]));

export function getLiveRankingPage(slug: string): LiveRankingPage | undefined {
  return bySlug.get(slug);
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
