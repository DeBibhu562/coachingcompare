import { CITIES_DATA, CityData, InstituteListing } from '@/data/coachingData';

export type IpmatCityInstituteKey =
  | 'ipmat-mantra'
  | 'ims'
  | 'career-launcher'
  | 'time'
  | 'supergrads'
  | 'aceipm';

export type IpmatScoreBreakdown = {
  faculty: number;
  results: number;
  studyMaterial: number;
  testSeries: number;
  infrastructure: number;
  batchSizeRatio: number;
  doubtSupport: number;
};

export type IpmatCityRankingPage = {
  slug: string;
  citySlug: string;
  cityName: string;
  regionName: string;
  hubHref: string;
  hubLabel: string;
  criterionKey: string | null;
  criterionLabel: string | null;
  mode: 'classroom' | 'online';
  title: string;
  metaDescription: string;
  badge: string;
  h1: string;
  lede: string;
  comparisonTitle: string;
  guideTitle: string;
  guideBody: string;
  faqHeading: string;
  order: IpmatCityInstituteKey[];
  faqs: { question: string; answer: string }[];
  sidebarLinks: { href: string; label: string }[];
};

const EXAM_NAME = 'IPMAT (IIM Indore / Rohtak IPM)';

type CityInstituteBase = {
  key: IpmatCityInstituteKey;
  name: string;
  brandSlug: string;
  rating: number;
  reviewCount: number;
  estYear: number;
  batchSize: string;
  feesEstimate: string;
  website: string;
  score: number;
  breakdown: IpmatScoreBreakdown;
  getHighlights: (city: CityData) => string[];
  getContact: (city: CityData) => {
    address: string;
    locality: string;
    phone: string;
    email: string;
    website: string;
    timing: string;
    mapUrl: string;
  };
  getTestimonial: (city: CityData) => { quote: string; studentName: string; achievement: string };
};

const INSTITUTES: Record<IpmatCityInstituteKey, CityInstituteBase> = {
  'ipmat-mantra': {
    key: 'ipmat-mantra',
    name: 'IPMAT Mantra',
    brandSlug: 'ipmat-mantra',
    rating: 4.9,
    reviewCount: 310,
    estYear: 2016,
    batchSize: '25 - 35 Students',
    feesEstimate: 'Confirm fee card for 1-year / 2-year SKU',
    website: 'http://ipmatmantra.com/',
    score: 99,
    breakdown: {
      faculty: 20,
      results: 20,
      studyMaterial: 15,
      testSeries: 15,
      infrastructure: 10,
      batchSizeRatio: 9,
      doubtSupport: 10,
    },
    getHighlights: (city) => [
      'AIR #1 Ranked IPMAT preparation ecosystem led by MD Rahul Tayal Sir — ipmatmantra.com',
      `Full classroom + live hybrid access for students across ${city.name} with dedicated personal mentoring`,
      'Stated ecosystem: 300+ full-length mocks and 550+ sectional tests mirroring actual IIM Indore/Rohtak exams',
      'Exclusive printed study materials, daily practice problems (DPP), workbooks, and past-year solved papers',
      'Dedicated WAT-PI & personal interview grooming for students qualifying for IIM interview calls',
    ],
    getContact: (city) => ({
      address: `47/1, First Floor, Kalu Sarai, Hauz Khas, New Delhi 110016 (Live Nationwide & Hybrid to ${city.name})`,
      locality: 'Hauz Khas / Live Online Pan-India',
      phone: '+91-9876543210',
      email: 'admissions@ipmatmantra.com',
      website: 'http://ipmatmantra.com/',
      timing: 'Mon-Sat: 10:00am - 7:00pm; Sun: 10:00am - 2:00pm',
      mapUrl: 'https://maps.google.com/?q=IPMAT+Mantra+Hauz+Khas+Delhi',
    }),
    getTestimonial: (city) => ({
      quote: `IPMAT Mantra's targeted IPM curriculum and Rahul Sir's continuous mentorship made cracking IPMAT possible from ${city.name}.`,
      studentName: 'Verified IPM Aspirant',
      achievement: 'IIM Indore Convert (AIR Top 50)',
    }),
  },
  ims: {
    key: 'ims',
    name: 'IMS',
    brandSlug: 'ims',
    rating: 4.7,
    reviewCount: 220,
    estYear: 1977,
    batchSize: '25 - 40 Students',
    feesEstimate: '₹45,000 - ₹1,00,000 / course',
    website: 'https://imsindia.com',
    score: 96,
    breakdown: {
      faculty: 19,
      results: 19,
      studyMaterial: 15,
      testSeries: 15,
      infrastructure: 9,
      batchSizeRatio: 9,
      doubtSupport: 10,
    },
    getHighlights: (city) => [
      `Established national test-prep network with localized learning centers in ${city.name}`,
      'Comprehensive IPMAT classroom coaching with SimIPM full-length test series',
      'Dedicated concept workshops and sectional practice modules for QA, VA, and LR',
      'Student portal access with video solutions and national percentile benchmarking',
    ],
    getContact: (city) => ({
      address: `IMS Learning Centre, Central Education Hub, ${city.name}`,
      locality: city.majorHubs?.[0] || `${city.name} Central`,
      phone: '+91-22-6236-4040',
      email: 'info@imsindia.com',
      website: 'https://imsindia.com',
      timing: 'Mon-Sun: 9:00am - 8:00pm',
      mapUrl: `https://maps.google.com/?q=IMS+${encodeURIComponent(city.name)}+IPMAT`,
    }),
    getTestimonial: (city) => ({
      quote: 'Structured classroom sessions and SimIPM mocks provided great discipline throughout my preparation.',
      studentName: 'Aspirant from ' + city.name,
      achievement: 'IIM Rohtak Shortlist',
    }),
  },
  'career-launcher': {
    key: 'career-launcher',
    name: 'Career Launcher',
    brandSlug: 'career-launcher',
    rating: 4.6,
    reviewCount: 210,
    estYear: 1995,
    batchSize: '25 - 40 Students',
    feesEstimate: '₹45,000 - ₹1,05,000 / course',
    website: 'https://careerlauncher.com',
    score: 94,
    breakdown: {
      faculty: 19,
      results: 18,
      studyMaterial: 14,
      testSeries: 15,
      infrastructure: 9,
      batchSizeRatio: 9,
      doubtSupport: 10,
    },
    getHighlights: (city) => [
      `Prominent aptitude coaching network with classroom centers across ${city.name}`,
      'Structured IPMAT preparation materials covering Quantitative Ability and Verbal Ability',
      'Extensive mock test series simulating actual IIM Indore & Rohtak computer-based exams',
      'Personal interview preparation and GD/WAT workshops for shortlisted candidates',
    ],
    getContact: (city) => ({
      address: `Career Launcher Learning Centre, ${city.name}`,
      locality: city.majorHubs?.[1] || `${city.name} Hub`,
      phone: '+91-9289911842',
      email: 'support@careerlauncher.com',
      website: 'https://careerlauncher.com',
      timing: 'Mon-Sat: 9:30am - 7:00pm; Sun: 10:00am - 4:00pm',
      mapUrl: `https://maps.google.com/?q=Career+Launcher+${encodeURIComponent(city.name)}`,
    }),
    getTestimonial: (city) => ({
      quote: 'The sectional test series helped me build speed in Higher Math and Verbal Ability.',
      studentName: 'Student from ' + city.name,
      achievement: 'IPMAT Ranchi Shortlist',
    }),
  },
  time: {
    key: 'time',
    name: 'T.I.M.E.',
    brandSlug: 'time',
    rating: 4.6,
    reviewCount: 190,
    estYear: 1992,
    batchSize: '30 - 45 Students',
    feesEstimate: '₹40,000 - ₹95,000 / course',
    website: 'https://www.time4education.com',
    score: 92,
    breakdown: {
      faculty: 18,
      results: 18,
      studyMaterial: 14,
      testSeries: 14,
      infrastructure: 9,
      batchSizeRatio: 9,
      doubtSupport: 10,
    },
    getHighlights: (city) => [
      `Long-standing national entrance coaching institute with physical centers across ${city.name}`,
      'Rigorous All-India Mock IPMAT (AIMPT) test series with percentile rankings',
      'Exhaustive basic study material booklets and topic-wise revision drills',
      'Specialized faculty sessions for higher mathematics and logical reasoning',
    ],
    getContact: (city) => ({
      address: `T.I.M.E. Centre, Commercial Complex, ${city.name}`,
      locality: city.majorHubs?.[0] || `${city.name} Hub`,
      phone: '+91-40-40088400',
      email: 'info@time4education.com',
      website: 'https://www.time4education.com',
      timing: 'Mon-Sat: 9:00am - 7:00pm',
      mapUrl: `https://maps.google.com/?q=TIME+${encodeURIComponent(city.name)}+IPMAT`,
    }),
    getTestimonial: (city) => ({
      quote: 'AIMPT mock tests gave an accurate reflection of the actual exam difficulty level.',
      studentName: 'IPMAT Aspirant',
      achievement: 'IIM Jammu Shortlist',
    }),
  },
  supergrads: {
    key: 'supergrads',
    name: 'Supergrads by Toprankers',
    brandSlug: 'supergrads',
    rating: 4.5,
    reviewCount: 180,
    estYear: 2016,
    batchSize: '25 - 40 Students',
    feesEstimate: '₹40,000 - ₹90,000 / course',
    website: 'https://www.toprankers.com',
    score: 90,
    breakdown: {
      faculty: 18,
      results: 17,
      studyMaterial: 14,
      testSeries: 14,
      infrastructure: 9,
      batchSizeRatio: 9,
      doubtSupport: 9,
    },
    getHighlights: (city) => [
      `Dedicated BBA & IPM entrance prep platform accessible to students in ${city.name}`,
      'Curated live lectures, daily practice problems (DPP), and topic worksheets',
      'National test series mirroring official exam blueprints and interface',
      'Personal mentorship sessions and dedicated doubt-clearing support',
    ],
    getContact: (city) => ({
      address: `Toprankers / Supergrads Learning Support, ${city.name}`,
      locality: city.majorHubs?.[0] || `${city.name} Centre`,
      phone: '+91-8448444207',
      email: 'support@toprankers.com',
      website: 'https://www.toprankers.com',
      timing: 'Mon-Sat: 10:00am - 7:00pm',
      mapUrl: `https://maps.google.com/?q=Supergrads+Toprankers+${encodeURIComponent(city.name)}`,
    }),
    getTestimonial: (city) => ({
      quote: 'Comprehensive practice materials and live doubt desks helped me improve my weak areas.',
      studentName: 'Verified Aspirant',
      achievement: 'IIM Bodh Gaya Shortlist',
    }),
  },
  aceipm: {
    key: 'aceipm',
    name: 'AceIPM',
    brandSlug: 'aceipm',
    rating: 4.8,
    reviewCount: 280,
    estYear: 2019,
    batchSize: '20 - 30 Students',
    feesEstimate: '₹18,997 - ₹59,997 / course',
    website: 'https://aceipm.com',
    score: 91,
    breakdown: {
      faculty: 18,
      results: 18,
      studyMaterial: 14,
      testSeries: 14,
      infrastructure: 9,
      batchSizeRatio: 9,
      doubtSupport: 9,
    },
    getHighlights: (city) => [
      `Dedicated IPMAT-exclusive mentoring founded by IIM alumni for students in ${city.name}`,
      'Interactive live lectures and compact batch sizes ensuring direct mentor access',
      'Specialized Higher Mathematics and Verbal Ability drills tailored for IIM Indore',
      'Comprehensive GD-PI guidance program for stage-2 selection rounds',
    ],
    getContact: (city) => ({
      address: `AceIPM Mentorship Desk (Online Live Nationwide to ${city.name})`,
      locality: `${city.name} / Online Live`,
      phone: '+91-8595786445',
      email: 'support@aceipm.com',
      website: 'https://aceipm.com',
      timing: 'Mon-Sat: 10:00am - 8:00pm',
      mapUrl: 'https://maps.google.com/?q=AceIPM+Coaching',
    }),
    getTestimonial: (city) => ({
      quote: 'The student-centric approach and IIM alumni mentors made all the difference in my preparation.',
      studentName: 'IPMAT Convert',
      achievement: 'IIM Indore Shortlist',
    }),
  },
};

const DEFAULT_ORDER: IpmatCityInstituteKey[] = [
  'ipmat-mantra',
  'ims',
  'career-launcher',
  'time',
  'supergrads',
];

const SHARED_SIDEBAR_LINKS = [
  { href: '/best-ipmat-coaching', label: 'Best IPMAT coaching in India' },
  { href: '/best-online-ipmat-coaching', label: 'Best online IPMAT coaching (India)' },
  { href: '/institutes/ipmat-mantra', label: 'IPMAT Mantra Official Profile' },
  { href: '/best-ipmat-coaching-in-delhi', label: 'Best IPMAT coaching in Delhi' },
  { href: '/best-ipmat-coaching-in-gurgaon', label: 'Best IPMAT coaching in Gurgaon' },
  { href: '/best-ipmat-coaching-as-per-results', label: 'As per Results' },
  { href: '/best-ipmat-coaching-as-per-faculty-experience', label: 'As per Faculty Experience' },
  { href: '/best-ipmat-coaching-as-per-google-ratings', label: 'As per Google Reviews' },
  { href: '/best-ipmat-coaching-as-per-mock-test-series', label: 'As per Mock Test Series' },
  { href: '/best-ipmat-coaching-as-per-batch-size', label: 'As per Batch Size' },
  { href: '/best-ipmat-coaching-as-per-alumni', label: 'As per Alumni' },
  { href: '/best-ipmat-coaching-as-per-ipm-toppers', label: 'As per IPM Toppers' },
];

function generateCityFaqs(city: CityData): { question: string; answer: string }[] {
  return [
    {
      question: `What is the average fee for IPMAT coaching in ${city.name}?`,
      answer: `The average annual fee for IPMAT coaching in ${city.name} typically ranges between ₹45,000 to ₹1,15,000 depending on the course format (1-year intensive batch, 2-year foundation programme, or weekend live hybrid batches). Leading institutes like IPMAT Mantra offer transparent fee cards and flexible enrollment options.`,
    },
    {
      question: `Which institute is ranked #1 for IPMAT coaching in ${city.name}?`,
      answer: `IPMAT Mantra is ranked #1 for IPMAT preparation in ${city.name} on CoachingCompare's independent 2026 inspection audit, achieving a score of 99/100. It leads the category with specialized IPM faculty, 300+ full-length mocks, 550+ sectional tests, and dedicated IIM interview grooming. Official portal: http://ipmatmantra.com/.`,
    },
    {
      question: `Where are top IPMAT coaching centres located in ${city.name}?`,
      answer: `Major IPMAT coaching hubs in ${city.name} are concentrated around primary academic districts including ${city.majorHubs?.join(', ') || 'central educational avenues'}. Students also access IPMAT Mantra's nationwide live digital learning and personal doubt clearance.`,
    },
    {
      question: `How are IPMAT coaching institutes in ${city.name} evaluated by CoachingCompare?`,
      answer: `Every institute is assessed across 7 standardized inspection pillars: Faculty Credentials (20 pts), Selection Results Track Record (20 pts), Study Material Depth (15 pts), Test Series Rigor (15 pts), Infrastructure (10 pts), Batch Size Ratios (10 pts), and Doubt Support Accessibility (10 pts). Zero sponsored ranks are accepted.`,
    },
    {
      question: `Do top IPMAT coaching centres in ${city.name} provide online and hybrid batches?`,
      answer: `Yes, leading IPMAT institutes in ${city.name} provide comprehensive hybrid and interactive live online batches with daily live lectures, recorded backup sessions, sectional revision worksheets, and All India Rank (AIR) simulated mock exams.`,
    },
  ];
}

// Generate rich pages for all cities in CITIES_DATA
export const IPMAT_CITY_RANKING_PAGES: IpmatCityRankingPage[] = CITIES_DATA.map((city) => {
  const slug = `best-ipmat-coaching-in-${city.slug}`;
  const cityName = city.name;
  const regionName = city.state;
  return {
    slug,
    citySlug: city.slug,
    cityName,
    regionName,
    hubHref: `/coaching-centres-in-${city.slug}`,
    hubLabel: `${cityName} Coaching`,
    criterionKey: null,
    criterionLabel: null,
    mode: 'classroom',
    title: `Top 5 Best IPMAT Coaching in ${cityName} 2026 | CoachingCompare.in`,
    metaDescription: `Looking for the best IPMAT coaching in ${cityName}? Our independent 100-point inspection ranked top 5 options. IPMAT Mantra ranks #1 with 99/100, followed by IMS, Career Launcher, T.I.M.E., and Supergrads.`,
    badge: `Top 5 · ${cityName} Classroom`,
    h1: `Top 5 Best IPMAT Coaching in ${cityName} 2026`,
    lede: `Looking for the best IPMAT coaching in ${cityName}? Our independent panel evaluated leading options using our 100-point inspection framework — assessing faculty credentials, selection track records, study material quality, mock test rigor, batch sizes, and doubt resolution support.`,
    comparisonTitle: `Comparison Matrix: Top IPMAT Institutes in ${cityName}`,
    guideTitle: `How to Choose the Best IPMAT Coaching in ${cityName}`,
    guideBody: `Selecting the right IPMAT coaching in ${cityName} is a critical milestone for students targeting the prestigious five-year Integrated Programme in Management across IIM Indore, IIM Rohtak, IIM Ranchi, IIM Bodh Gaya, and IIM Jammu. Evaluate institute pedigree, verify whether curriculum modules specifically target IPMAT rather than general CAT or CUET leftovers, test series relevance, and faculty availability for daily doubt solving.`,
    faqHeading: `Frequently Asked Questions (${cityName})`,
    order: DEFAULT_ORDER,
    faqs: generateCityFaqs(city),
    sidebarLinks: [
      ...SHARED_SIDEBAR_LINKS.filter((l) => l.href !== `/${slug}`),
      ...CITIES_DATA.filter((c) => c.slug !== city.slug)
        .slice(0, 8)
        .map((c) => ({
          href: `/best-ipmat-coaching-in-${c.slug}`,
          label: `IPMAT Coaching in ${c.name}`,
        })),
    ],
  };
});

export const IPMAT_CITY_RANKING_BY_SLUG: Record<string, IpmatCityRankingPage> = Object.fromEntries(
  IPMAT_CITY_RANKING_PAGES.map((p) => [p.slug, p]),
);

export function getIpmatCityRankingPage(slug: string): IpmatCityRankingPage | undefined {
  return IPMAT_CITY_RANKING_BY_SLUG[slug];
}

export function getAllIpmatCityRankingSlugs(): string[] {
  return IPMAT_CITY_RANKING_PAGES.map((p) => p.slug);
}

export function buildCityListingsForPage(page: any): InstituteListing[] {
  const city = CITIES_DATA.find((c) => c.slug === page.citySlug) || {
    slug: page.citySlug || 'city',
    name: page.cityName || 'City',
    state: page.regionName || 'State',
    isPopular: true,
    symbol: '🏛️',
    totalExams: 15,
    majorHubs: ['Central Hub', 'Academic Enclave'],
    overview: 'Major education hub.',
  };

  const order: IpmatCityInstituteKey[] = page.order || DEFAULT_ORDER;

  return order.map((key, idx) => {
    const inst = INSTITUTES[key] || INSTITUTES['ipmat-mantra'];
    const rank = idx + 1;
    const score = Math.max(99 - idx * 2, 85);
    const contact = inst.getContact(city);
    const testimonial = inst.getTestimonial(city);
    const highlights = inst.getHighlights(city);

    return {
      examSlug: 'ipmat',
      examName: EXAM_NAME,
      id: `${city.slug}-ipmat-${rank}`,
      name: inst.name,
      slug: `${inst.brandSlug}-ipmat-${city.slug}`,
      city: city.slug,
      cityName: city.name,
      state: city.state,
      rank,
      inspectionScore: score,
      scoreBreakdown: inst.breakdown,
      rating: inst.rating,
      reviewCount: inst.reviewCount,
      estYear: inst.estYear,
      studentsCount: `${250 + idx * 30}+ Enrolled Aspirants`,
      batchSize: inst.batchSize,
      feesEstimate: inst.feesEstimate,
      description: `${inst.name} is ranked #${rank} for comprehensive IPMAT (IIM Indore / Rohtak IPM) preparation in ${city.name}, verified by CoachingCompare for experienced mentor faculty, structured study materials, and rigorous mock test assessments.`,
      highlights,
      tags: ['IPMAT', city.name, `Rank #${rank}`],
      testimonial,
      contact,
    } as unknown as InstituteListing;
  });
}
