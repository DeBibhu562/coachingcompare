import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  CITIES_DATA,
  EXAM_CATEGORIES,
  getListingsForCategoryAndCity,
  getFAQsForPage,
  CityData,
  ExamCategory,
  getStateBySlug,
  getAllStateSlugs,
  StateData,
  InstituteListing,
} from '@/data/coachingData';
import {
  buildListingsForPage,
  getAllIpmatDelhiRankingSlugs,
  getIpmatDelhiRankingPage,
  type IpmatDelhiRankingPage,
} from '@/data/ipmatDelhiRankings';
import {
  buildGurgaonListingsForPage,
  getAllIpmatGurgaonRankingSlugs,
  getIpmatGurgaonRankingPage,
  type IpmatGurgaonRankingPage,
} from '@/data/ipmatGurgaonRankings';
import {
  buildClatGurgaonListingsForPage,
  getAllClatGurgaonRankingSlugs,
  getClatGurgaonRankingPage,
  type ClatGurgaonRankingPage,
} from '@/data/clatGurgaonRankings';
import {
  buildClatDelhiListingsForPage,
  getAllClatDelhiRankingSlugs,
  getClatDelhiRankingPage,
  type ClatDelhiRankingPage,
} from '@/data/clatDelhiRankings';
import {
  buildShareMarketDelhiListingsForPage,
  getAllShareMarketDelhiRankingSlugs,
  getShareMarketDelhiRankingPage,
  type ShareMarketDelhiRankingPage,
} from '@/data/shareMarketDelhiRankings';
import {
  buildShareMarketGurgaonListingsForPage,
  getAllShareMarketGurgaonRankingSlugs,
  getShareMarketGurgaonRankingPage,
  type ShareMarketGurgaonRankingPage,
} from '@/data/shareMarketGurgaonRankings';
import {
  buildShareMarketIndiaListingsForPage,
  getAllShareMarketIndiaRankingSlugs,
  getShareMarketIndiaRankingPage,
  type ShareMarketIndiaRankingPage,
} from '@/data/shareMarketIndiaRankings';
import {
  buildClatPgIndiaListingsForPage,
  getAllClatPgIndiaRankingSlugs,
  getClatPgIndiaRankingPage,
  type ClatPgIndiaRankingPage,
} from '@/data/clatPgIndiaRankings';
import {
  buildLlmIndiaListingsForPage,
  getAllLlmIndiaRankingSlugs,
  getLlmIndiaRankingPage,
  type LlmIndiaRankingPage,
} from '@/data/llmIndiaRankings';
import {
  buildIpmatIndiaListingsForPage,
  getAllIpmatIndiaRankingSlugs,
  getIpmatIndiaRankingPage,
  type IpmatIndiaRankingPage,
} from '@/data/ipmatIndiaRankings';
import {
  buildCityListingsForPage,
  getAllIpmatCityRankingSlugs,
  getIpmatCityRankingPage,
  type IpmatCityRankingPage,
} from '@/data/ipmatCityRankings';
import {
  getAllLiveRankingSlugs,
  getLiveRankingPage,
  type LiveRankingPage,
} from '@/data/liveRankings';
import {
  getAllStaticArchiveSlugs,
  getStaticArchivePage,
  type StaticArchivePage,
} from '@/data/staticArchive';
import CoachingCard from '@/components/CoachingCard';
import LiveRankingView from '@/components/LiveRankingView';
import StaticArchiveView from '@/components/StaticArchiveView';
import { Icons } from '@/components/Icons';

type ExamCityRankingPage =
  | IpmatDelhiRankingPage
  | IpmatGurgaonRankingPage
  | ClatDelhiRankingPage
  | ClatGurgaonRankingPage
  | ShareMarketDelhiRankingPage
  | ShareMarketGurgaonRankingPage
  | ShareMarketIndiaRankingPage
  | ClatPgIndiaRankingPage
  | LlmIndiaRankingPage
  | IpmatIndiaRankingPage
  | IpmatCityRankingPage;

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Helper to parse slug patterns
function parseSlug(slug: string) {
  // Exam city ranking suites (classroom, online, as-per facets) — check first to avoid duplicates
  const ipmatDelhiPage = getIpmatDelhiRankingPage(slug);
  if (ipmatDelhiPage) {
    return {
      type: 'exam-city-ranking' as const,
      page: ipmatDelhiPage,
      examLabel: 'IPMAT',
      citySlug: 'delhi',
      cityName: 'Delhi',
      regionName: 'Delhi',
      hubHref: '/coaching-centres-in-delhi',
      hubLabel: 'Delhi Coaching',
      fixedRank5: true,
      buildListings: buildListingsForPage,
    };
  }
  const ipmatGurgaonPage = getIpmatGurgaonRankingPage(slug);
  if (ipmatGurgaonPage) {
    return {
      type: 'exam-city-ranking' as const,
      page: ipmatGurgaonPage,
      examLabel: 'IPMAT',
      citySlug: 'gurgaon',
      cityName: 'Gurgaon',
      regionName: 'Haryana',
      hubHref: '/coaching-centres-in-gurgaon',
      hubLabel: 'Gurgaon Coaching',
      fixedRank5: true,
      buildListings: buildGurgaonListingsForPage,
    };
  }
  const clatDelhiPage = getClatDelhiRankingPage(slug);
  if (clatDelhiPage) {
    return {
      type: 'exam-city-ranking' as const,
      page: clatDelhiPage,
      examLabel: 'CLAT',
      citySlug: 'delhi',
      cityName: 'Delhi',
      regionName: 'Delhi',
      hubHref: '/coaching-centres-in-delhi',
      hubLabel: 'Delhi Coaching',
      fixedRank5: false,
      buildListings: buildClatDelhiListingsForPage,
    };
  }
  const clatGurgaonPage = getClatGurgaonRankingPage(slug);
  if (clatGurgaonPage) {
    return {
      type: 'exam-city-ranking' as const,
      page: clatGurgaonPage,
      examLabel: 'CLAT',
      citySlug: 'gurgaon',
      cityName: 'Gurgaon',
      regionName: 'Haryana',
      hubHref: '/coaching-centres-in-gurgaon',
      hubLabel: 'Gurgaon Coaching',
      fixedRank5: true,
      buildListings: buildClatGurgaonListingsForPage,
    };
  }
  const shareMarketDelhiPage = getShareMarketDelhiRankingPage(slug);
  if (shareMarketDelhiPage) {
    return {
      type: 'exam-city-ranking' as const,
      page: shareMarketDelhiPage,
      examLabel: 'Share Market',
      citySlug: 'delhi',
      cityName: 'Delhi',
      regionName: 'Delhi',
      hubHref: '/coaching-centres-in-delhi',
      hubLabel: 'Delhi Coaching',
      fixedRank5: false,
      buildListings: buildShareMarketDelhiListingsForPage,
    };
  }
  const shareMarketGurgaonPage = getShareMarketGurgaonRankingPage(slug);
  if (shareMarketGurgaonPage) {
    return {
      type: 'exam-city-ranking' as const,
      page: shareMarketGurgaonPage,
      examLabel: 'Share Market',
      citySlug: 'gurgaon',
      cityName: 'Gurgaon',
      regionName: 'Haryana',
      hubHref: '/coaching-centres-in-gurgaon',
      hubLabel: 'Gurgaon Coaching',
      fixedRank5: false,
      buildListings: buildShareMarketGurgaonListingsForPage,
    };
  }
  const shareMarketIndiaPage = getShareMarketIndiaRankingPage(slug);
  if (shareMarketIndiaPage) {
    return {
      type: 'exam-city-ranking' as const,
      page: shareMarketIndiaPage,
      examLabel: 'Share Market',
      citySlug: 'india',
      cityName: 'India',
      regionName: 'India',
      hubHref: '/best-share-market-coaching',
      hubLabel: 'Share Market Coaching',
      fixedRank5: false,
      buildListings: buildShareMarketIndiaListingsForPage,
    };
  }
  const clatPgIndiaPage = getClatPgIndiaRankingPage(slug);
  if (clatPgIndiaPage) {
    return {
      type: 'exam-city-ranking' as const,
      page: clatPgIndiaPage,
      examLabel: 'CLAT PG',
      citySlug: 'india',
      cityName: 'India',
      regionName: 'India',
      hubHref: '/best-clat-pg-coaching',
      hubLabel: 'CLAT PG Coaching',
      fixedRank5: false,
      buildListings: buildClatPgIndiaListingsForPage,
    };
  }
  const llmIndiaPage = getLlmIndiaRankingPage(slug);
  if (llmIndiaPage) {
    return {
      type: 'exam-city-ranking' as const,
      page: llmIndiaPage,
      examLabel: 'LLM',
      citySlug: 'india',
      cityName: 'India',
      regionName: 'India',
      hubHref: '/best-llm-coaching-in-india',
      hubLabel: 'LLM Coaching',
      fixedRank5: false,
      buildListings: buildLlmIndiaListingsForPage,
    };
  }
  // Must run before Pattern 3 (best-[exam]-coaching) so India / online hubs hit ExamCityRankingView
  const ipmatIndiaPage = getIpmatIndiaRankingPage(slug);
  if (ipmatIndiaPage) {
    return {
      type: 'exam-city-ranking' as const,
      page: ipmatIndiaPage,
      examLabel: 'IPMAT',
      citySlug: 'india',
      cityName: 'India',
      regionName: 'India',
      hubHref: '/best-ipmat-coaching',
      hubLabel: 'IPMAT Coaching',
      fixedRank5: false,
      buildListings: buildIpmatIndiaListingsForPage,
    };
  }

  // Dedicated IPMAT City ranking suites (Mumbai, Bangalore, Nagpur, Pune, Hyderabad, Indore, Jaipur, Lucknow, Kolkata, Chandigarh, Ahmedabad, etc.)
  const ipmatCityPage = getIpmatCityRankingPage(slug);
  if (ipmatCityPage) {
    return {
      type: 'exam-city-ranking' as const,
      page: ipmatCityPage,
      examLabel: 'IPMAT',
      citySlug: ipmatCityPage.citySlug,
      cityName: ipmatCityPage.cityName,
      regionName: ipmatCityPage.regionName,
      hubHref: ipmatCityPage.hubHref,
      hubLabel: ipmatCityPage.hubLabel,
      fixedRank5: false,
      buildListings: buildCityListingsForPage,
    };
  }

  // Production parity: full live ranking archive (ItemList + FAQ recovered from frozen build)
  const liveRanking = getLiveRankingPage(slug);
  if (liveRanking) {
    return { type: 'live-ranking' as const, page: liveRanking };
  }

  // Aliases for ranking slugs without leading 'best-' (e.g. online-upsc-coaching -> best-online-upsc-coaching)
  if (!slug.startsWith('best-')) {
    const withBest = `best-${slug}`;
    const ipmatIndiaWithBest = getIpmatIndiaRankingPage(withBest);
    if (ipmatIndiaWithBest) {
      return {
        type: 'exam-city-ranking' as const,
        page: ipmatIndiaWithBest,
        examLabel: 'IPMAT',
        citySlug: 'india',
        cityName: 'India',
        regionName: 'India',
        hubHref: '/best-ipmat-coaching',
        hubLabel: 'IPMAT Coaching',
        fixedRank5: false,
        buildListings: buildIpmatIndiaListingsForPage,
      };
    }
    const liveWithBest = getLiveRankingPage(withBest);
    if (liveWithBest) {
      return { type: 'live-ranking' as const, page: liveWithBest };
    }
  }

  // Legal / vs archive pages recovered from production HTML
  const staticArchive = getStaticArchivePage(slug);
  if (staticArchive) {
    return { type: 'static-archive' as const, page: staticArchive };
  }

  // Pattern 1: coaching-centres-in-[city]
  if (slug.startsWith('coaching-centres-in-')) {
    const citySlug = slug.replace('coaching-centres-in-', '');
    const city = CITIES_DATA.find((c) => c.slug === citySlug);
    if (city) {
      return { type: 'city-hub' as const, city };
    }
  }

  // Pattern 2: best-[exam]-coaching-in-[city]
  const matchCatCity = slug.match(/^best-([a-z0-9-]+)-coaching-in-([a-z0-9-]+)$/);
  if (matchCatCity) {
    const examSlug = matchCatCity[1];
    const citySlug = matchCatCity[2];
    const exam = EXAM_CATEGORIES.find((e) => e.slug === examSlug);
    const city = CITIES_DATA.find((c) => c.slug === citySlug);
    if (exam && city) {
      return { type: 'category-city' as const, exam, city };
    }
  }

  // Pattern 3: best-[exam]-coaching
  const matchExam = slug.match(/^best-([a-z0-9-]+)-coaching$/);
  if (matchExam) {
    const examSlug = matchExam[1];
    const exam = EXAM_CATEGORIES.find((e) => e.slug === examSlug);
    if (exam) {
      return { type: 'exam-hub' as const, exam };
    }
  }

  // Pattern 4: coaching-in-[state]
  if (slug.startsWith('coaching-in-')) {
    const stateSlug = slug.replace('coaching-in-', '');
    const state = getStateBySlug(stateSlug);
    if (state) {
      return { type: 'state-hub' as const, state };
    }
  }

  return null;
}

// Generate static params for major routes
export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  const seen = new Set<string>();
  const add = (slug: string) => {
    if (!slug || seen.has(slug)) return;
    seen.add(slug);
    params.push({ slug });
  };

  // All city hubs present in data
  CITIES_DATA.forEach((city) => {
    add(`coaching-centres-in-${city.slug}`);
  });

  // Exam × city combinations from full catalogs
  EXAM_CATEGORIES.forEach((exam) => {
    add(`best-${exam.slug}-coaching`);
    CITIES_DATA.forEach((city) => {
      add(`best-${exam.slug}-coaching-in-${city.slug}`);
    });
  });

  // Dedicated ranking suites (richer hand-authored modules win at parse time)
  getAllIpmatDelhiRankingSlugs().forEach(add);
  getAllIpmatGurgaonRankingSlugs().forEach(add);
  getAllClatDelhiRankingSlugs().forEach(add);
  getAllClatGurgaonRankingSlugs().forEach(add);
  getAllShareMarketDelhiRankingSlugs().forEach(add);
  getAllShareMarketGurgaonRankingSlugs().forEach(add);
  getAllShareMarketIndiaRankingSlugs().forEach(add);
  getAllClatPgIndiaRankingSlugs().forEach(add);
  getAllLlmIndiaRankingSlugs().forEach(add);
  getAllIpmatIndiaRankingSlugs().forEach(add);
  getAllIpmatCityRankingSlugs().forEach(add);

  // Full production ranking archive (737 best-* URLs)
  getAllLiveRankingSlugs().forEach(add);

  // Online slug aliases without leading 'best-' (e.g. online-upsc-coaching)
  getAllLiveRankingSlugs()
    .filter((s) => s.startsWith('best-online-'))
    .forEach((s) => {
      add(s.replace(/^best-/, ''));
    });

  // Legal + institute-vs pages from production archive
  getAllStaticArchiveSlugs().forEach(add);

  // Extra city hubs present on live but not in CITIES_DATA shortlist
  [
    'india',
    'jalandhar',
    'mohali',
    'online',
    'south-delhi',
  ].forEach((city) => add(`coaching-centres-in-${city}`));

  // State hubs
  getAllStateSlugs().forEach((s) => {
    add(`coaching-in-${s.slug}`);
  });

  return params;
}

// Dynamic SEO & AEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseSlug(slug);

  if (!parsed) {
    return { title: 'Page Not Found | CoachingCompare.in' };
  }

  if (parsed.type === 'live-ranking') {
    const { page } = parsed;
    const description = page.institutes[0]
      ? `${page.title}: #1 ${page.institutes[0].name}${
          page.institutes[1] ? `, #2 ${page.institutes[1].name}` : ''
        }. Independent CoachingCompare shortlist.`
      : page.title;
    return {
      title: page.title.includes('CoachingCompare') ? page.title : `${page.title} | CoachingCompare.in`,
      description,
      alternates: { canonical: `/${page.slug}` },
      openGraph: {
        title: page.title,
        description,
        url: `https://coachingcompare.in/${page.slug}`,
        type: 'article',
      },
    };
  }

  if (parsed.type === 'static-archive') {
    const { page } = parsed;
    return {
      title: page.title,
      description: page.description || page.title,
      alternates: { canonical: `/${page.slug}` },
    };
  }

  if (parsed.type === 'exam-city-ranking') {
    const { page } = parsed;
    return {
      title: page.title,
      description: page.metaDescription,
      alternates: { canonical: `/${page.slug}` },
      openGraph: {
        title: page.title,
        description: page.metaDescription,
        url: `https://coachingcompare.in/${page.slug}`,
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: page.title,
        description: page.metaDescription,
      },
    };
  }

  if (parsed.type === 'category-city') {
    const { exam, city } = parsed;
    const title = `Top 5 Best ${exam.shortName} Coaching in ${city.name} 2026 | CoachingCompare.in`;
    const description = `Find the top 5 ${exam.fullName} coaching centres in ${city.name}. Expert-reviewed with 100-Point Inspection scores, batch sizes, faculty credentials, fees, and verified student results.`;

    return {
      title,
      description,
      alternates: {
        canonical: `/${slug}`,
      },
      openGraph: {
        title,
        description,
        url: `https://coachingcompare.in/${slug}`,
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
      },
    };
  }

  if (parsed.type === 'city-hub') {
    const { city } = parsed;
    const title = `Best Coaching Centres in ${city.name} 2026 | CoachingCompare.in`;
    const description = `Explore expert-evaluated coaching centres in ${city.name} for JEE, NEET, UPSC, CLAT, CAT, SSC, and Banking. Compare 100-point inspected rankings, fees, and locations.`;

    return {
      title,
      description,
      alternates: {
        canonical: `/${slug}`,
      },
    };
  }

  if (parsed.type === 'exam-hub') {
    const { exam } = parsed;
    const title = `Best ${exam.name} in India 2026 | CoachingCompare.in`;
    const description = `Explore top-rated ${exam.fullName} coaching institutes across major Indian cities with independent inspection scores.`;

    return {
      title,
      description,
      alternates: {
        canonical: `/${slug}`,
      },
    };
  }

  if (parsed.type === 'state-hub') {
    const { state } = parsed;
    const title = `Best Coaching Centres in ${state.name} 2026 | Top Cities & Exam Rankings`;
    const description = `Explore top-rated coaching institutes across ${state.name} covering all major cities and competitive exams. Independent 100-Point Inspection scores, fees, and centers.`;

    return {
      title,
      description,
      alternates: {
        canonical: `/${slug}`,
      },
      openGraph: {
        title,
        description,
        url: `https://coachingcompare.in/${slug}`,
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
      },
    };
  }

  return { title: 'CoachingCompare.in' };
}

export default async function DynamicSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const parsed = parseSlug(slug);

  if (!parsed) {
    notFound();
  }

  if (parsed.type === 'live-ranking') {
    return <LiveRankingView page={parsed.page as LiveRankingPage} currentSlug={slug} />;
  }

  if (parsed.type === 'static-archive') {
    return <StaticArchiveView page={parsed.page as StaticArchivePage} />;
  }

  if (parsed.type === 'exam-city-ranking') {
    return (
      <ExamCityRankingView
        page={parsed.page}
        currentSlug={slug}
        examLabel={parsed.examLabel}
        citySlug={parsed.citySlug}
        cityName={parsed.cityName}
        regionName={parsed.regionName}
        hubHref={parsed.hubHref}
        hubLabel={parsed.hubLabel}
        fixedRank5={parsed.fixedRank5}
        buildListings={parsed.buildListings as (page: ExamCityRankingPage) => InstituteListing[]}
      />
    );
  }

  // Render Category in City Page (Matches Screenshots 3 & 4)
  if (parsed.type === 'category-city') {
    return <CategoryCityView exam={parsed.exam} city={parsed.city} currentSlug={slug} />;
  }

  // Render City Hub Page (Matches Screenshot 1 & 2 link target)
  if (parsed.type === 'city-hub') {
    return <CityHubView city={parsed.city} currentSlug={slug} />;
  }

  // Render State Hub Page
  if (parsed.type === 'state-hub') {
    return <StateHubView state={parsed.state} currentSlug={slug} />;
  }

  // Render Exam Hub Page
  return <ExamHubView exam={parsed.exam} currentSlug={slug} />;
}

// -------------------------------------------------------------
// IPMAT Delhi ranking suite (classroom / online / as-per facets)
// -------------------------------------------------------------
function ExamCityRankingView({
  page,
  currentSlug,
  examLabel,
  citySlug,
  cityName,
  regionName,
  hubHref,
  hubLabel,
  fixedRank5,
  buildListings,
}: {
  page: ExamCityRankingPage;
  currentSlug: string;
  examLabel: string;
  citySlug: string;
  cityName: string;
  regionName: string;
  hubHref: string;
  hubLabel: string;
  fixedRank5: boolean;
  buildListings: (page: ExamCityRankingPage) => InstituteListing[];
}) {
  const listings = buildListings(page) as unknown as InstituteListing[];
  const faqs = page.faqs;
  const leader = listings[0]?.name || 'Rank 1';
  const last = listings[listings.length - 1]?.name || 'Rank 5';
  const localityName = page.mode === 'online' ? `Online (${cityName})` : cityName;

  // Split sidebar links into logical widgets
  const criteriaLinks = page.sidebarLinks.filter((l) =>
    l.label.toLowerCase().startsWith('as per')
  );
  const otherCityLinks = page.sidebarLinks.filter(
    (l) =>
      !l.label.toLowerCase().startsWith('as per') &&
      (l.label.toLowerCase().includes('in ') || l.label.toLowerCase().includes('coaching in')) &&
      !l.label.toLowerCase().includes(cityName.toLowerCase())
  );
  const hubLinks = page.sidebarLinks.filter(
    (l) => !criteriaLinks.includes(l) && !otherCityLinks.includes(l)
  );

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://coachingcompare.in/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: hubLabel,
        item: `https://coachingcompare.in${hubHref}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: page.h1,
        item: `https://coachingcompare.in/${currentSlug}`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: page.h1,
    itemListElement: listings.map((item) => ({
      '@type': 'ListItem',
      position: item.rank,
      item: {
        '@type': 'EducationalOrganization',
        name: item.name,
        description: item.description,
        address: {
          '@type': 'PostalAddress',
          streetAddress: item.contact.address,
          addressLocality: cityName,
          addressRegion: regionName,
          addressCountry: 'IN',
        },
        ...(item.contact.phone ? { telephone: item.contact.phone } : {}),
        ...(item.contact.email ? { email: item.contact.email } : {}),
        url: item.contact.website,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: item.rating,
          reviewCount: item.reviewCount,
          bestRating: '5',
          worstRating: '1',
        },
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="container" style={{ padding: '36px 20px 64px' }}>
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="breadcrumb-item">
            <Link href="/">Home</Link>
            <Icons.ChevronRight size={13} />
          </div>
          <div className="breadcrumb-item">
            <Link href={hubHref}>{hubLabel}</Link>
            <Icons.ChevronRight size={13} />
          </div>
          <div className="breadcrumb-item">
            <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>{page.h1}</span>
          </div>
        </nav>

        <div className="layout-with-sidebar">
          <div className="layout-main-content">
            <header style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                <span className="badge badge-gold">{page.badge}</span>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Updated 2026-09</span>
              </div>

              <h1
                className="ranking-h1"
                style={{
                  fontSize: 'clamp(26px, 4vw, 36px)',
                  fontWeight: 800,
                  color: 'var(--text-dark)',
                  marginBottom: '14px',
                  lineHeight: '1.25',
                }}
              >
                {page.h1}
              </h1>

              <div
                className="ranking-lede-box"
                style={{
                  background: '#f8fafc',
                  borderLeft: '4px solid var(--brand-blue)',
                  padding: '16px 20px',
                  borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                  fontSize: '15px',
                  lineHeight: '1.65',
                  color: 'var(--text-body)',
                }}
              >
                {page.lede} <strong>{leader}</strong> is ranked #1
                {page.criterionLabel ? ` as per ${page.criterionLabel}` : ''} on this shortlist.
              </div>
            </header>

            <div className="quick-nav-box">
              <div className="quick-nav-title">Quick Navigation & Inspection Scores</div>
              <ol className="quick-nav-list">
                {listings.map((item) => (
                  <li key={item.id}>
                    <a href={`#listing-${item.rank}`} className="quick-nav-link">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontWeight: 800, width: '24px' }}>#{item.rank}</span>
                        <span>{item.name}</span>
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--brand-blue)' }}>
                        {item.inspectionScore}/100
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              {listings.map((item) => (
                <CoachingCard key={item.id} listing={item} />
              ))}
            </div>

            <div style={{ marginTop: '48px', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                {page.comparisonTitle}
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                Compare key parameters side-by-side for this {localityName} {examLabel} shortlist
                {page.criterionLabel ? ` (${page.criterionLabel})` : ''}.
              </p>

              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Rank & Institute</th>
                      <th>Score</th>
                      <th>Batch Size</th>
                      <th>Fee Range</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listings.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <strong>#{item.rank}</strong> {item.name}
                        </td>
                        <td>{item.inspectionScore}/100</td>
                        <td>{item.batchSize}</td>
                        <td>{item.feesEstimate}</td>
                        <td>
                          {item.rating} ({item.reviewCount})
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Guide Advisory Box */}
            <div
              className="card"
              style={{
                padding: '24px',
                background: 'linear-gradient(180deg, #f0f7ff 0%, #f8fafc 100%)',
                border: '1px solid #bfdbfe',
                borderRadius: 'var(--radius-lg)',
                marginBottom: '40px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span className="badge badge-blue">Advisory Guide</span>
              </div>
              <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#1e3a8a', marginBottom: '10px' }}>
                {page.guideTitle}
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-body)', margin: 0 }}>
                {page.guideBody}
              </p>
            </div>

            {/* FAQ Accordion Section */}
            <section style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span className="badge badge-emerald">Audited Q&A</span>
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '18px' }}>
                {page.faqHeading}
              </h2>
              <div className="faq-list">
                {faqs.map((f, i) => (
                  <details key={f.question} className="faq-item" open={i === 0}>
                    <summary className="faq-trigger">
                      <span className="faq-question-text">{f.question}</span>
                      <span className="faq-chevron">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </summary>
                    <div className="faq-answer">{f.answer}</div>
                  </details>
                ))}
              </div>
            </section>
          </div>

          {/* Sticky Right Sidebar */}
          <aside className="sticky-sidebar">
            {/* Widget 1: Criteria / Evaluation shortlists */}
            {criteriaLinks.length > 0 && (
              <div className="sidebar-widget">
                <h3 className="sidebar-widget-title">Evaluation Benchmarks</h3>
                <ul className="sidebar-list">
                  {criteriaLinks.map((link) => {
                    const isActive = currentSlug === link.href.replace(/^\//, '');
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`sidebar-link ${isActive ? 'active' : ''}`}
                          style={
                            isActive
                              ? {
                                  background: 'var(--brand-blue-light)',
                                  color: 'var(--brand-blue)',
                                  fontWeight: 700,
                                }
                              : undefined
                          }
                        >
                          <span style={{ color: isActive ? 'var(--brand-blue)' : '#94a3b8' }}>›</span>
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Widget 2: Other Major Coaching Cities */}
            {otherCityLinks.length > 0 && (
              <div className="sidebar-widget">
                <h3 className="sidebar-widget-title">{examLabel} in Other Cities</h3>
                <ul className="sidebar-list">
                  {otherCityLinks.map((link) => {
                    const isActive = currentSlug === link.href.replace(/^\//, '');
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`sidebar-link ${isActive ? 'active' : ''}`}
                        >
                          <span style={{ color: '#94a3b8' }}>›</span>
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Widget 3: National & Hub Links */}
            {hubLinks.length > 0 && (
              <div className="sidebar-widget">
                <h3 className="sidebar-widget-title">National & Hub Links</h3>
                <ul className="sidebar-list">
                  {hubLinks.map((link) => {
                    const isActive = currentSlug === link.href.replace(/^\//, '');
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`sidebar-link ${isActive ? 'active' : ''}`}
                          style={
                            isActive
                              ? {
                                  background: 'var(--brand-blue-light)',
                                  color: 'var(--brand-blue)',
                                  fontWeight: 700,
                                }
                              : undefined
                          }
                        >
                          <span style={{ color: isActive ? 'var(--brand-blue)' : '#94a3b8' }}>›</span>
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Widget 4: Editorial Assurance Card */}
            <div
              className="card"
              style={{
                padding: '20px',
                background: '#ffffff',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '17px' }}>🛡️</span>
                <h4
                  style={{
                    fontSize: '13px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: 'var(--text-dark)',
                    margin: 0,
                  }}
                >
                  Editorial Assurance
                </h4>
              </div>
              <p style={{ fontSize: '12.5px', lineHeight: 1.6, color: '#64748b', marginBottom: '14px' }}>
                {fixedRank5
                  ? `Rank 1 (${leader}) and Rank 5 (${last}) are fixed on this suite. Mid-ranks shuffle strictly by audited criteria. Zero sponsored or paid positions.`
                  : `Rank 1 (${leader}) is independently audited against verified student selections, faculty credentials, and mock test rigor. Zero sponsored positions.`}
              </p>
              <Link
                href="/methodology"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--brand-blue)',
                  textDecoration: 'none',
                }}
              >
                <span>Read Audit Methodology</span>
                <span>→</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

// -------------------------------------------------------------
// Component 1: Category in City View (e.g. Best CLAT in Delhi)
// -------------------------------------------------------------
function CategoryCityView({
  exam,
  city,
  currentSlug,
}: {
  exam: ExamCategory;
  city: CityData;
  currentSlug: string;
}) {
  const listings = getListingsForCategoryAndCity(exam.slug, city.slug);
  const faqs = getFAQsForPage(exam.name, city.name);

  // Other categories in this city
  const otherCategoriesInCity = EXAM_CATEGORIES.filter((e) => e.slug !== exam.slug);

  // Same category in other cities
  const sameCategoryOtherCities = CITIES_DATA.filter((c) => c.slug !== city.slug);

  // Structured Data (JSON-LD) for SEO & AEO
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://coachingcompare.in/' },
      { '@type': 'ListItem', position: 2, name: `${city.name} Coaching Centres`, item: `https://coachingcompare.in/coaching-centres-in-${city.slug}` },
      { '@type': 'ListItem', position: 3, name: `Best ${exam.shortName} Coaching in ${city.name}`, item: `https://coachingcompare.in/${currentSlug}` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Top 5 ${exam.name} Centres in ${city.name}`,
    itemListElement: listings.map((item) => ({
      '@type': 'ListItem',
      position: item.rank,
      item: {
        '@type': 'EducationalOrganization',
        name: item.name,
        description: item.description,
        address: {
          '@type': 'PostalAddress',
          streetAddress: item.contact.address,
          addressLocality: city.name,
          addressRegion: city.state,
          addressCountry: 'IN',
        },
        telephone: item.contact.phone,
        email: item.contact.email,
        url: item.contact.website,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: item.rating,
          reviewCount: item.reviewCount,
          bestRating: '5',
          worstRating: '1',
        },
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="container" style={{ padding: '36px 20px 64px' }}>
        {/* Breadcrumbs Navigation */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="breadcrumb-item">
            <Link href="/">Home</Link>
            <Icons.ChevronRight size={13} />
          </div>
          <div className="breadcrumb-item">
            <Link href={`/coaching-centres-in-${city.slug}`}>{city.name} Coaching</Link>
            <Icons.ChevronRight size={13} />
          </div>
          <div className="breadcrumb-item">
            <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>
              Best {exam.shortName} Coaching in {city.name}
            </span>
          </div>
        </nav>

        <div className="layout-with-sidebar">
          {/* Main Left Content Area */}
          <div className="layout-main-content">
            {/* Page Header */}
            <header style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                <span className="badge badge-gold">Top 5 · {city.name} Classroom</span>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Updated 2026-09</span>
              </div>

              <h1 className="ranking-h1" style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '14px', lineHeight: '1.25' }}>
                Top 5 Best {exam.name} in {city.name} 2026
              </h1>

              {/* AEO Definitive Summary Answer */}
              <div
                className="ranking-lede-box"
                style={{
                  background: '#f8fafc',
                  borderLeft: '4px solid var(--brand-blue)',
                  padding: '16px 20px',
                  borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                  fontSize: '15px',
                  lineHeight: '1.65',
                  color: 'var(--text-body)',
                }}
              >
                Looking for the best {exam.fullName} coaching in {city.name}? Our independent academic panel has evaluated dozens of coaching centres in the area using our rigorous <strong>100-point inspection system</strong> to bring you the top 5 picks. <strong>{listings[0]?.name || 'Top Rank'}</strong> is ranked #1 on this shortlist. Each centre was physically verified on faculty pedigree, roll-number past results, test series difficulty, and student doubt resolution mechanisms.
              </div>
            </header>

            {/* Quick Navigation Box */}
            <div className="quick-nav-box">
              <div className="quick-nav-title">⚡ Quick Navigation & Inspection Scores</div>
              <ol className="quick-nav-list">
                {listings.map((item) => (
                  <li key={item.id}>
                    <a href={`#listing-${item.rank}`} className="quick-nav-link">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontWeight: 800, width: '24px' }}>#{item.rank}</span>
                        <span>{item.name}</span>
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--brand-blue)' }}>
                        {item.inspectionScore}/100
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Coaching Listing Cards */}
            <div>
              {listings.map((item) => (
                <CoachingCard key={item.id} listing={item} />
              ))}
            </div>

            {/* Side-by-Side Comparison Matrix Table */}
            <div style={{ marginTop: '48px', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                Comparison Matrix: Top {exam.shortName} Institutes in {city.name}
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                Compare key parameters side-by-side to make the most informed decision for your preparation.
              </p>

              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Rank & Institute</th>
                      <th>Score</th>
                      <th>Batch Size</th>
                      <th>Fee Range</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listings.map((item) => (
                      <tr key={item.id}>
                        <td style={{ fontWeight: 700 }}>
                          <span style={{ color: 'var(--brand-blue)', marginRight: '6px' }}>#{item.rank}</span>
                          {item.name}
                        </td>
                        <td>
                          <span className="badge badge-blue">{item.inspectionScore}/100</span>
                        </td>
                        <td>{item.batchSize}</td>
                        <td style={{ fontWeight: 600 }}>{item.feesEstimate}</td>
                        <td>
                          <span style={{ color: '#d97706', fontWeight: 700 }}>★ {item.rating}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 100-Point Inspection Explainer Box */}
            <div className="card" style={{ padding: '24px', background: '#f8fafc', marginBottom: '40px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '6px' }}>
                About Our 100-Point Inspection System
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '18px' }}>
                Every coaching centre listed above has been assessed on 7 core criteria before being awarded its verified ranking:
              </p>

              <div className="responsive-form-grid-2" style={{ gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '13.5px' }}>
                  <span>Faculty credentials & experience</span>
                  <strong style={{ color: 'var(--brand-blue)' }}>20 pts</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '13.5px' }}>
                  <span>Selection track record (results)</span>
                  <strong style={{ color: 'var(--brand-blue)' }}>20 pts</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '13.5px' }}>
                  <span>Study material quality</span>
                  <strong style={{ color: 'var(--brand-blue)' }}>15 pts</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '13.5px' }}>
                  <span>Test series & mock test quality</span>
                  <strong style={{ color: 'var(--brand-blue)' }}>15 pts</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '13.5px' }}>
                  <span>Infrastructure & facilities</span>
                  <strong style={{ color: 'var(--brand-blue)' }}>10 pts</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '13.5px' }}>
                  <span>Batch size & personal attention</span>
                  <strong style={{ color: 'var(--brand-blue)' }}>10 pts</strong>
                </div>
              </div>
            </div>

            {/* Preparation & Mock Test Guide */}
            <div
              className="card"
              style={{
                padding: '24px',
                borderLeft: '4px solid var(--brand-blue)',
                background: 'var(--brand-blue-light)',
                marginBottom: '48px',
              }}
            >
              <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#1e3a8a', marginBottom: '10px' }}>
                How to Prepare for {exam.name} in {city.name}
              </h2>
              <p style={{ fontSize: '14.5px', lineHeight: '1.6', color: '#1e40af', marginBottom: '14px' }}>
                Cracking {exam.fullName} requires consistent preparation, rigorous passage drills, and authentic mentorship. Top centres in {city.name} offer structured curricula, previous year question analysis, and extensive doubt-clearing sessions to build exam-day confidence.
              </p>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1e3a8a', marginBottom: '6px' }}>
                Maximize Your Score with Full-Length Mock Tests
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#1e40af' }}>
                Practicing full-length mock tests under real timed conditions is essential for time management and error reduction. Always choose an institute with an active All India Mock test series that gives detailed section-wise percentile rankings.
              </p>
            </div>

            {/* FAQ Accordion */}
            <section>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '18px' }}>
                Frequently Asked Questions ({city.name})
              </h2>

              <div className="faq-list">
                {faqs.map((f, i) => (
                  <details key={i} className="faq-item" open={i === 0}>
                    <summary className="faq-trigger">
                      <span className="faq-question-text">{f.question}</span>
                      <span className="faq-chevron">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </summary>
                    <div className="faq-answer">{f.answer}</div>
                  </details>
                ))}
              </div>
            </section>
          </div>

          {/* Sticky Right Sidebar (Dual Tree Links as in Screenshots) */}
          <aside className="sticky-sidebar">
            {/* Widget 1: More Coaching in same city */}
            <div className="sidebar-widget">
              <h3 className="sidebar-widget-title">More Coaching in {city.name}</h3>
              <ul className="sidebar-list">
                {otherCategoriesInCity.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/best-${cat.slug}-coaching-in-${city.slug}`}
                      className="sidebar-link"
                    >
                      <span style={{ color: '#94a3b8' }}>›</span>
                      <span>{cat.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 2: Same category in other cities */}
            <div className="sidebar-widget">
              <h3 className="sidebar-widget-title">Same Category, Other Cities</h3>
              <ul className="sidebar-list">
                {sameCategoryOtherCities.map((otherCity) => (
                  <li key={otherCity.slug}>
                    <Link
                      href={`/best-${exam.slug}-coaching-in-${otherCity.slug}`}
                      className="sidebar-link"
                    >
                      <span style={{ color: '#94a3b8' }}>›</span>
                      <span>{exam.shortName} in {otherCity.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 3: 100-Point Inspection Info Callout */}
            <div className="sidebar-widget" style={{ background: '#f8fafc' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span style={{ fontSize: '18px' }}>🛡️</span>
                <h3 className="sidebar-widget-title" style={{ margin: 0, padding: 0, border: 'none' }}>
                  100-Point Inspection
                </h3>
              </div>
              <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: '1.55', marginBottom: '12px' }}>
                Every institute on CoachingCompare is verified on faculty qualifications, selection audits, and student support.
              </p>
              <ul style={{ listStyle: 'none', fontSize: '12px', color: 'var(--text-body)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Faculty Credentials</span><strong style={{ color: 'var(--brand-blue)' }}>20 pts</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Selection Records</span><strong style={{ color: 'var(--brand-blue)' }}>20 pts</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Study Material</span><strong style={{ color: 'var(--brand-blue)' }}>15 pts</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Mock Test Series</span><strong style={{ color: 'var(--brand-blue)' }}>15 pts</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Infrastructure</span><strong style={{ color: 'var(--brand-blue)' }}>10 pts</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Student Attention</span><strong style={{ color: 'var(--brand-blue)' }}>10 pts</strong></li>
              </ul>
              <Link
                href="/methodology"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  marginTop: '14px',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--brand-blue)',
                  textDecoration: 'none',
                }}
              >
                <span>Read Full Audit Guide</span>
                <span>→</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

// -------------------------------------------------------------
// Component 2: City Hub View (e.g. /coaching-centres-in-delhi)
// -------------------------------------------------------------
function CityHubView({ city, currentSlug }: { city: CityData; currentSlug: string }) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://coachingcompare.in/' },
      { '@type': 'ListItem', position: 2, name: `${city.name} Coaching Centres`, item: `https://coachingcompare.in/${currentSlug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container" style={{ padding: '36px 20px 64px' }}>
        {/* Breadcrumbs */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="breadcrumb-item">
            <Link href="/">Home</Link>
            <Icons.ChevronRight size={13} />
          </div>
          <div className="breadcrumb-item">
            <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>
              {city.name} Coaching Centres
            </span>
          </div>
        </nav>

        {/* Header Hero for City */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ fontSize: '36px' }}>{city.symbol}</span>
            <span className="badge badge-blue">{city.totalExams} Exam Categories Evaluated</span>
          </div>

          <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '14px' }}>
            Top Coaching Centres in {city.name} 2026
          </h1>

          <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--text-body)', maxWidth: '800px', marginBottom: '20px' }}>
            {city.overview} Explore verified rankings for all major entrance and competitive exams across {city.name}, audited with our independent 100-Point Inspection System.
          </p>

          {/* Key Coaching Hub Localities */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              Top Hubs in {city.name}:
            </span>
            {city.majorHubs.map((hub, i) => (
              <span key={i} className="badge" style={{ background: '#ffffff', border: '1px solid var(--border-subtle)', color: 'var(--text-dark)' }}>
                📍 {hub}
              </span>
            ))}
          </div>
        </div>

        {/* Grid of All Exam Categories in this City */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '20px' }}>
            Select Exam Category in {city.name}
          </h2>

          <div className="grid-3">
            {EXAM_CATEGORIES.map((exam) => (
              <Link
                key={exam.id}
                href={`/best-${exam.slug}-coaching-in-${city.slug}`}
                className="card"
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span className="badge badge-blue">{exam.badge}</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Top 5 Picks</span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                    Best {exam.shortName} Coaching
                  </h3>

                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '16px' }}>
                    {exam.description}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '12px', fontSize: '13px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Avg. Fees: {exam.avgFees.split('-')[0]}</span>
                  <span style={{ color: 'var(--brand-blue)', fontWeight: 700 }}>
                    Explore Rankings →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Major Indian Cities */}
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '16px' }}>
            Explore Coaching Centres in Other Cities
          </h2>
          <div className="grid-4">
            {CITIES_DATA.filter((c) => c.slug !== city.slug).slice(0, 12).map((otherCity) => (
              <Link
                key={otherCity.slug}
                href={`/coaching-centres-in-${otherCity.slug}`}
                className="city-card"
              >
                <span className="city-symbol">{otherCity.symbol}</span>
                <div>
                  <h4 className="city-name">{otherCity.name}</h4>
                  <p className="city-state">{otherCity.state}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// -------------------------------------------------------------
// Component 3: Exam Hub View (e.g. /best-clat-coaching)
// -------------------------------------------------------------
function ExamHubView({ exam, currentSlug }: { exam: ExamCategory; currentSlug: string }) {
  const listings = getListingsForCategoryAndCity(exam.slug, 'delhi');
  const faqs = getFAQsForPage(exam.name, 'India');
  const otherCategories = EXAM_CATEGORIES.filter((e) => e.slug !== exam.slug);
  const leader = listings[0]?.name || 'National Rank 1';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://coachingcompare.in/' },
      { '@type': 'ListItem', position: 2, name: 'Exams Directory', item: 'https://coachingcompare.in/exams' },
      { '@type': 'ListItem', position: 3, name: `Best ${exam.name} in India`, item: `https://coachingcompare.in/${currentSlug}` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Top 5 Best ${exam.name} in India 2026`,
    itemListElement: listings.map((item) => ({
      '@type': 'ListItem',
      position: item.rank,
      item: {
        '@type': 'EducationalOrganization',
        name: item.name,
        description: item.description,
        address: {
          '@type': 'PostalAddress',
          streetAddress: item.contact.address,
          addressLocality: item.cityName || 'India',
          addressRegion: item.state || 'India',
          addressCountry: 'IN',
        },
        telephone: item.contact.phone,
        email: item.contact.email,
        url: item.contact.website,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: item.rating,
          reviewCount: item.reviewCount,
          bestRating: '5',
          worstRating: '1',
        },
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="container" style={{ padding: '36px 20px 64px' }}>
        {/* Breadcrumbs Navigation */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="breadcrumb-item">
            <Link href="/">Home</Link>
            <Icons.ChevronRight size={13} />
          </div>
          <div className="breadcrumb-item">
            <Link href="/exams">Exams</Link>
            <Icons.ChevronRight size={13} />
          </div>
          <div className="breadcrumb-item">
            <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>
              {exam.name}
            </span>
          </div>
        </nav>

        <div className="layout-with-sidebar">
          {/* Main Left Column */}
          <div className="layout-main-content">
            <header style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                <span className="badge badge-gold">{exam.badge}</span>
                <span className="badge badge-blue">National Benchmark</span>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Updated 2026-09</span>
              </div>

              <h1 className="ranking-h1" style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '14px', lineHeight: '1.25' }}>
                Top 5 Best {exam.name} in India 2026
              </h1>

              <div
                className="ranking-lede-box"
                style={{
                  background: '#f8fafc',
                  borderLeft: '4px solid var(--brand-blue)',
                  padding: '16px 20px',
                  borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                  fontSize: '15px',
                  lineHeight: '1.65',
                  color: 'var(--text-body)',
                }}
              >
                {exam.description} Our independent academic panel has audited premier test-prep academies across India on our <strong>100-point inspection system</strong>. <strong>{leader}</strong> is ranked #1 on this national benchmark shortlist.
              </div>
            </header>

            {/* Quick Navigation Box */}
            <div className="quick-nav-box">
              <div className="quick-nav-title">⚡ Quick Navigation & Inspection Scores</div>
              <ol className="quick-nav-list">
                {listings.map((item) => (
                  <li key={item.id}>
                    <a href={`#listing-${item.rank}`} className="quick-nav-link">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontWeight: 800, width: '24px' }}>#{item.rank}</span>
                        <span>{item.name}</span>
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--brand-blue)' }}>
                        {item.inspectionScore}/100
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Coaching Listing Cards */}
            <div>
              {listings.map((item) => (
                <CoachingCard key={item.id} listing={item} />
              ))}
            </div>

            {/* Comparison Matrix Table */}
            <div style={{ marginTop: '48px', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                Comparison Matrix: Top {exam.shortName} Institutes in India
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                Compare key parameters side-by-side to make the most informed decision for your preparation.
              </p>

              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Rank & Institute</th>
                      <th>Score</th>
                      <th>Batch Size</th>
                      <th>Fee Range</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listings.map((item) => (
                      <tr key={item.id}>
                        <td style={{ fontWeight: 700 }}>
                          <span style={{ color: 'var(--brand-blue)', marginRight: '6px' }}>#{item.rank}</span>
                          {item.name}
                        </td>
                        <td>
                          <span className="badge badge-blue">{item.inspectionScore}/100</span>
                        </td>
                        <td>{item.batchSize}</td>
                        <td style={{ fontWeight: 600 }}>{item.feesEstimate}</td>
                        <td>
                          <span style={{ color: '#d97706', fontWeight: 700 }}>★ {item.rating}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Major City Hubs Grid for this Exam */}
            <div style={{ marginTop: '40px', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '10px' }}>
                Explore {exam.shortName} Coaching Across Major Cities
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '18px' }}>
                Select your preferred city to view classroom locations, verified faculty, and center-specific fee structures.
              </p>
              <div className="grid-3">
                {CITIES_DATA.slice(0, 15).map((city) => (
                  <Link
                    key={city.slug}
                    href={`/best-${exam.slug}-coaching-in-${city.slug}`}
                    className="card"
                    style={{ padding: '16px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '22px' }}>{city.symbol}</span>
                      <div>
                        <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-dark)', margin: 0 }}>
                          {city.name}
                        </h3>
                        <span style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>{city.state}</span>
                      </div>
                    </div>
                    <span style={{ fontSize: '12px', color: 'var(--brand-blue)', fontWeight: 700 }}>
                      Top 5 →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* 100-Point Inspection Explainer Box */}
            <div className="card" style={{ padding: '24px', background: '#f8fafc', marginBottom: '40px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '6px' }}>
                About Our 100-Point Inspection System
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '18px' }}>
                Every coaching centre listed above has been assessed on 7 core criteria before being awarded its verified ranking:
              </p>
              <div className="responsive-form-grid-2" style={{ gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '13.5px' }}>
                  <span>Faculty credentials & experience</span>
                  <strong style={{ color: 'var(--brand-blue)' }}>20 pts</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '13.5px' }}>
                  <span>Selection track record (results)</span>
                  <strong style={{ color: 'var(--brand-blue)' }}>20 pts</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '13.5px' }}>
                  <span>Study material quality</span>
                  <strong style={{ color: 'var(--brand-blue)' }}>15 pts</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '13.5px' }}>
                  <span>Test series & mock test quality</span>
                  <strong style={{ color: 'var(--brand-blue)' }}>15 pts</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '13.5px' }}>
                  <span>Classroom infrastructure & tech</span>
                  <strong style={{ color: 'var(--brand-blue)' }}>10 pts</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '13.5px' }}>
                  <span>Batch size & individual attention</span>
                  <strong style={{ color: 'var(--brand-blue)' }}>10 pts</strong>
                </div>
              </div>
            </div>

            {/* Preparation FAQs Accordion */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '16px' }}>
                Frequently Asked Questions about {exam.shortName} Coaching in India
              </h2>
              <div className="faq-list">
                {faqs.map((f, i) => (
                  <details key={i} className="faq-item" open={i === 0}>
                    <summary className="faq-trigger">
                      <span className="faq-question-text">{f.question}</span>
                      <span className="faq-chevron">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </summary>
                    <div className="faq-answer">
                      {f.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Right Sidebar */}
          <aside className="sticky-sidebar">
            {/* Widget 1: Other Exam Rankings */}
            <div className="sidebar-widget">
              <h3 className="sidebar-widget-title">Other Popular Exam Hubs</h3>
              <ul className="sidebar-list">
                {otherCategories.slice(0, 10).map((cat) => (
                  <li key={cat.slug}>
                    <Link href={`/best-${cat.slug}-coaching`} className="sidebar-link">
                      <span style={{ color: '#94a3b8' }}>›</span>
                      <span>{cat.shortName} Coaching</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 2: 100-Point Inspection Info Callout */}
            <div className="sidebar-widget" style={{ background: '#f8fafc' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span style={{ fontSize: '18px' }}>🛡️</span>
                <h3 className="sidebar-widget-title" style={{ margin: 0, padding: 0, border: 'none' }}>
                  100-Point Inspection
                </h3>
              </div>
              <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: '1.55', marginBottom: '12px' }}>
                Every institute on CoachingCompare is verified on faculty qualifications, selection audits, and student support.
              </p>
              <ul style={{ listStyle: 'none', fontSize: '12px', color: 'var(--text-body)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Faculty Credentials</span><strong style={{ color: 'var(--brand-blue)' }}>20 pts</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Selection Records</span><strong style={{ color: 'var(--brand-blue)' }}>20 pts</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Study Material</span><strong style={{ color: 'var(--brand-blue)' }}>15 pts</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Mock Test Series</span><strong style={{ color: 'var(--brand-blue)' }}>15 pts</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Infrastructure</span><strong style={{ color: 'var(--brand-blue)' }}>10 pts</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Student Attention</span><strong style={{ color: 'var(--brand-blue)' }}>10 pts</strong></li>
              </ul>
              <Link
                href="/methodology"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  marginTop: '14px',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--brand-blue)',
                  textDecoration: 'none',
                }}
              >
                <span>Read Full Audit Guide</span>
                <span>→</span>
              </Link>
            </div>

            {/* Widget 3: Editorial Assurance */}
            <div className="sidebar-widget">
              <h3 className="sidebar-widget-title">Editorial Assurance</h3>
              <p style={{ fontSize: '12.5px', lineHeight: '1.6', color: 'var(--text-muted)', margin: 0 }}>
                Rank 1 ({leader}) is independently audited against verified student selections, faculty credentials, and mock test rigor. Zero sponsored positions.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

// -------------------------------------------------------------
// Component 4: State Hub View (e.g. /coaching-in-maharashtra)
// -------------------------------------------------------------
function StateHubView({ state, currentSlug }: { state: StateData; currentSlug: string }) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://coachingcompare.in/' },
      { '@type': 'ListItem', position: 2, name: `Coaching in ${state.name}`, item: `https://coachingcompare.in/${currentSlug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container" style={{ padding: '36px 20px 64px' }}>
        {/* Breadcrumbs */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="breadcrumb-item">
            <Link href="/">Home</Link>
            <Icons.ChevronRight size={13} />
          </div>
          <div className="breadcrumb-item">
            <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>
              Coaching in {state.name}
            </span>
          </div>
        </nav>

        {/* State Hero */}
        <header style={{ marginBottom: '40px' }}>
          <span className="badge badge-emerald" style={{ marginBottom: '10px' }}>
            🏛️ Statewide Educational Directory
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '14px' }}>
            Top Coaching Centres in {state.name} 2026
          </h1>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--text-body)', maxWidth: '820px' }}>
            Explore independent 100-Point Inspected rankings across all major education clusters in {state.name}. From premier metropolitan academies to specialized regional hubs, find verified faculty ratings, audited results, and fee schedules.
          </p>
        </header>

        {/* Cities in State */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '20px' }}>
            Major Coaching Cities in {state.name} ({state.cities.length})
          </h2>

          <div className="grid-3">
            {state.cities.map((city) => (
              <div
                key={city.slug}
                className="surface-card"
                style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '28px' }}>{city.symbol}</span>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                        {city.name}
                      </h3>
                      <span style={{ fontSize: '12px', color: '#64748b' }}>{state.name}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: '1.5', marginBottom: '16px' }}>
                    {city.overview?.slice(0, 110) || ''}...
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid #f1f5f9', paddingTop: '14px' }}>
                  <Link
                    href={`/coaching-centres-in-${city.slug}`}
                    className="btn btn-primary btn-sm"
                    style={{ justifyContent: 'center' }}
                  >
                    View All {city.name} Centres →
                  </Link>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '6px' }}>
                    {['jee', 'neet', 'upsc', 'clat'].map((examSlug) => (
                      <Link
                        key={examSlug}
                        href={`/best-${examSlug}-coaching-in-${city.slug}`}
                        className="badge"
                        style={{ fontSize: '11px', background: '#f1f5f9', color: '#475569', textDecoration: 'none' }}
                      >
                        {examSlug.toUpperCase()}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Exam Streams Across State */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '18px' }}>
            Popular Exam Categories in {state.name}
          </h2>
          <div className="grid-4">
            {EXAM_CATEGORIES.slice(0, 8).map((exam) => (
              <div key={exam.slug} className="surface-card" style={{ padding: '18px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--brand-blue)', marginBottom: '4px' }}>
                  {exam.badge}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '6px' }}>
                  {exam.name}
                </h3>
                <p style={{ fontSize: '12.5px', color: '#64748b', lineHeight: '1.4', marginBottom: '12px' }}>
                  {exam.fullName}
                </p>
                {state.cities[0] && (
                  <Link
                    href={`/best-${exam.slug}-coaching-in-${state.cities[0].slug}`}
                    style={{ fontSize: '12.5px', color: 'var(--brand-blue)', fontWeight: 700, textDecoration: 'none' }}
                  >
                    Compare in {state.cities[0].name} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Statewide Inspection Standards Notice */}
        <section style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '24px 28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <Icons.ShieldCheck size={22} color="var(--brand-blue)" />
            <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#1e3a8a', margin: 0 }}>
              100-Point Inspection Integrity in {state.name}
            </h3>
          </div>
          <p style={{ fontSize: '14px', color: '#1e40af', lineHeight: '1.6', margin: 0 }}>
            Every coaching institute listed across {state.name} is independently verified on student selection claims, faculty stability, batch ratios, and physical infrastructure. Zero sponsored ranking positions are accepted.
          </p>
        </section>
      </div>
    </>
  );
}

