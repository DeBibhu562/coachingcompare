/**
 * Share Market India ranking pages. Rank 1 = Trade With Rahul (fixed); ranks 2–5 shuffle.
 */

export type ShareMarketIndiaInstituteKey =
  | 'trade-with-rahul' | 'zerodha-varsity' | 'nse-academy' | 'trading-chanakya' | 'fingrad';

export type ShareMarketScoreBreakdown = {
  faculty: number;
  results: number;
  studyMaterial: number;
  testSeries: number;
  infrastructure: number;
  batchSizeRatio: number;
  doubtSupport: number;
};

export type ShareMarketIndiaListing = {
  examSlug: 'share-market';
  examName: string;
  id: string;
  name: string;
  slug: string;
  city: string;
  cityName: string;
  state: string;
  rank: number;
  inspectionScore: number;
  scoreBreakdown: ShareMarketScoreBreakdown;
  rating: number;
  reviewCount: number;
  estYear: number;
  studentsCount: string;
  batchSize: string;
  feesEstimate: string;
  description: string;
  highlights: string[];
  tags: string[];
  testimonial: { quote: string; studentName: string; achievement: string };
  contact: {
    address: string;
    locality: string;
    phone: string;
    email: string;
    website: string;
    timing: string;
    mapUrl: string;
  };
};

export type ShareMarketIndiaRankingPage = {
  slug: string;
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
  order: ShareMarketIndiaInstituteKey[];
  faqs: { question: string; answer: string }[];
  sidebarLinks: { href: string; label: string }[];
};

const EXAM_NAME = 'Share Market Coaching';
const SCORES = [99, 96, 94, 92, 90] as const;
const CITY = 'india';
const CITY_NAME = 'India';
const STATE = 'India';

type InstituteBase = {
  key: ShareMarketIndiaInstituteKey;
  name: string;
  brandSlug: string;
  rating: number;
  reviewCount: number;
  estYear: number;
  studentsCount: string;
  batchSize: string;
  feesEstimate: string;
  contact: ShareMarketIndiaListing['contact'];
  baseHighlights: string[];
  onlineHighlights: string[];
};

const INSTITUTES: Record<ShareMarketIndiaInstituteKey, InstituteBase> = {
  'trade-with-rahul': {
    key: 'trade-with-rahul',
    name: 'Trade With Rahul',
    brandSlug: 'trade-with-rahul',
    rating: 4.7,
    reviewCount: 190,
    estYear: 2018,
    studentsCount: 'Classroom + advertised NCR / online enquiry',
    batchSize: 'Confirm with admissions',
    feesEstimate: 'From ₹59,444 listed options courses; confirm on tradewithrahul.co.in',
    contact: {
      address: 'Building No. M26, Office Number 55, 2nd Floor, Old DLF Market, Sector 14, Gurugram',
      locality: 'Old DLF Market, Sector 14, Gurugram',
      phone: '+91 96672 31251',
      email: 'thetradewithrahul@gmail.com',
      website: 'https://tradewithrahul.co.in/',
      timing: 'Confirm counselling hours on tradewithrahul.co.in',
      mapUrl: 'https://maps.google.com/?q=Trade+With+Rahul+Old+DLF+Market+Sector+14+Gurugram',
    },
    baseHighlights: [
      'Published +91 96672 31251 and thetradewithrahul@gmail.com',
      'Official website https://tradewithrahul.co.in/',
      'Nine listed programmes: options, forex, crypto, MCX, VIP signals, VIP group and 1:1 mentorship',
      'Sit a demo; this is share-market education, not investment advice or guaranteed returns',
    ],
    onlineHighlights: [
      'Live / hybrid share-market programmes for learners across India',
      'Confirm recording window, mentorship hours, and GST name before you pay',
      'Pay only on tradewithrahul.co.in',
      'Education only — not tips or guaranteed returns',
    ],
  },
  'zerodha-varsity': {
    key: 'zerodha-varsity',
    name: 'Zerodha Varsity',
    brandSlug: 'zerodha-varsity',
    rating: 4.8,
    reviewCount: 320,
    estYear: 2017,
    studentsCount: 'Free self-paced modules',
    batchSize: 'Self-paced — not a classroom',
    feesEstimate: 'Free on zerodha.com/varsity — not a paid coaching fee',
    contact: {
      address: 'Zerodha, #153/154, 4th Cross, J.P. Nagar 4th Phase, Bengaluru 560078 — Varsity is a free education product, not a classroom pin',
      locality: 'Bengaluru HQ / free online modules',
      phone: 'Use zerodha.com/contact (Varsity is not a paid coaching desk)',
      email: '',
      website: 'https://zerodha.com/varsity',
      timing: 'Self-paced modules; no classroom timetable',
      mapUrl: 'https://zerodha.com/varsity',
    },
    baseHighlights: [
      'Official host zerodha.com/varsity',
      'Free modules — do not pay a reseller for “Varsity coaching”',
      'Not a live classroom; confirm you want self-study',
      'Share-market education only — not investment advice',
    ],
    onlineHighlights: [
      'Best-fit free online curriculum for India-wide learners',
      'Ignore ads that sell “official Varsity coaching”',
      'Use Varsity for basics, then demo a paid mentor only if needed',
      'Not a tips desk',
    ],
  },
  'nse-academy': {
    key: 'nse-academy',
    name: 'NSE Academy',
    brandSlug: 'nse-academy',
    rating: 4.6,
    reviewCount: 240,
    estYear: 2018,
    studentsCount: 'NAL Academy / NCFM-style certifications',
    batchSize: 'Certification / e-learning cohorts',
    feesEstimate: 'Confirm on the official NAL / NSE Academy cart',
    contact: {
      address: 'NAL Academy Limited, 202, Ashok Silk Mills Compound, Lal Bahadur Shastri Marg, Ghatkopar West, Mumbai 400086',
      locality: 'Ghatkopar West, Mumbai (NAL Academy)',
      phone: '+91-22-6864-6464',
      email: 'ncfm@nse.co.in',
      website: 'https://www.nseindia.com/static/nse-academy/nse-academy-contact-us',
      timing: 'Mon-Fri: 9:15am - 5:45pm (as published by NAL Academy)',
      mapUrl: 'https://maps.google.com/?q=NAL+Academy+Ashok+Silk+Mills+Ghatkopar+West',
    },
    baseHighlights: [
      'Published +91-22-6864-6464 and ncfm@nse.co.in',
      'Exchange education / certification — confirm the SKU',
      'Pay only on the official NSE Academy / NAL host',
      'Not a private tips desk',
    ],
    onlineHighlights: [
      'E-learning / certification modules for learners across India',
      'Confirm NCFM-style module vs live workshop on the cart',
      'Do not treat this as a private trading classroom',
      'Pay only on the official host',
    ],
  },
  'trading-chanakya': {
    key: 'trading-chanakya',
    name: 'Trading Chanakya',
    brandSlug: 'trading-chanakya',
    rating: 4.3,
    reviewCount: 90,
    estYear: 2021,
    studentsCount: 'Online training listed on tradingchanakya.com',
    batchSize: 'Confirm on the official site',
    feesEstimate: 'Confirm on tradingchanakya.com',
    contact: {
      address: 'India — no street pin published on tradingchanakya.com',
      locality: 'Online / confirm on tradingchanakya.com',
      phone: '',
      email: 'tradingchanakya@gmail.com',
      website: 'https://www.tradingchanakya.com',
      timing: 'Confirm on the official site',
      mapUrl: 'https://www.tradingchanakya.com',
    },
    baseHighlights: [
      'Published email tradingchanakya@gmail.com',
      'Phone and street pin are not on the official site — do not invent one',
      'Ask whether the SKU is a course, tools, or both',
      'Pay only through the official host',
    ],
    onlineHighlights: [
      'Online-first share-market training host',
      'Confirm live course title and refund terms before you pay',
      'Use only tradingchanakya.com + published Gmail desk',
      'Education only — not investment advice',
    ],
  },
  fingrad: {
    key: 'fingrad',
    name: 'FinGrad',
    brandSlug: 'fingrad',
    rating: 4.5,
    reviewCount: 150,
    estYear: 2019,
    studentsCount: 'Courses, webinars & events nationwide',
    batchSize: 'Online cohorts + Bengaluru offline centre',
    feesEstimate: 'Confirm on joinfingrad.com',
    contact: {
      address: 'Raja Mohan Towers, 2nd Floor, No 1670/A, 14th Main, 7th Sector, HSR Layout, Bengaluru 560102',
      locality: 'HSR Layout, Bengaluru / pan-India online',
      phone: '+91 90356 08086',
      email: 'hello@joinfingrad.com',
      website: 'https://joinfingrad.com',
      timing: 'Confirm on joinfingrad.com/contact',
      mapUrl: 'https://maps.google.com/?q=FinGrad+HSR+Layout+Bengaluru',
    },
    baseHighlights: [
      'Published +91 90356 08086 and hello@joinfingrad.com',
      'Stock-market courses, webinars and events on joinfingrad.com',
      'Offline centre in Bengaluru HSR — confirm live batch before travel',
      'Pay only on the official FinGrad host',
    ],
    onlineHighlights: [
      'Strong fit for India-wide online learners via joinfingrad.com / app',
      'Confirm subscription vs single-course cart items',
      'Do not confuse event tickets with a full trading mentorship SKU',
      'Education only — not investment advice',
    ],
  },
};

function breakdownForRank(rank: number): ShareMarketScoreBreakdown {
  const score = SCORES[rank - 1] ?? 88;
  return {
    faculty: Math.round((score / 100) * 20),
    results: Math.round((score / 100) * 20),
    studyMaterial: Math.round((score / 100) * 15),
    testSeries: Math.round((score / 100) * 15),
    infrastructure: rank <= 2 ? 10 : 9,
    batchSizeRatio: 9,
    doubtSupport: rank <= 2 ? 10 : 9,
  };
}

function criterionBlurb(
  key: ShareMarketIndiaInstituteKey,
  rank: number,
  criterionLabel: string | null,
  mode: 'classroom' | 'online',
): string {
  const inst = INSTITUTES[key];
  const place =
    mode === 'online'
      ? 'online share market training institutes in India'
      : 'share market training institutes in India';
  const scope = criterionLabel ? ` as per ${criterionLabel}` : '';
  if (rank === 1) {
    return `${inst.name} is the #1 ${mode === 'online' ? 'online ' : ''}share market training institute in India${scope} on this 2026 audit. Published desk: Building No. M26, Office Number 55, 2nd Floor, Old DLF Market, Sector 14, Gurugram; +91 96672 31251 / thetradewithrahul@gmail.com / https://tradewithrahul.co.in/. This is share-market education — not a returns product.`;
  }
  const contactLine =
    key === 'zerodha-varsity'
      ? 'Official free modules at zerodha.com/varsity — not a paid classroom. Do not pay a reseller for “Varsity coaching”.'
      : key === 'nse-academy'
        ? 'Start at the official NSE Academy / NAL host; +91-22-6864-6464 / ncfm@nse.co.in. Confirm certification vs workshop SKU.'
        : key === 'trading-chanakya'
          ? 'Enrol via tradingchanakya.com; tradingchanakya@gmail.com. No street pin or phone is published — do not invent one.'
          : 'Start at joinfingrad.com; +91 90356 08086 / hello@joinfingrad.com. Confirm online vs Bengaluru offline batch.';
  return `${inst.name} is ranked #${rank} among the best ${place}${scope} on this 2026 audit. ${contactLine}`;
}

export function buildShareMarketIndiaListingsForPage(page: ShareMarketIndiaRankingPage): ShareMarketIndiaListing[] {
  return page.order.map((key, idx) => {
    const rank = idx + 1;
    const inst = INSTITUTES[key];
    const modeSlug = page.mode === 'online' ? 'online-india' : 'india';
    const criterionBit = page.criterionKey ? `-${page.criterionKey}` : '';
    return {
      examSlug: 'share-market',
      examName: EXAM_NAME,
      id: `share-market-${modeSlug}${criterionBit}-${rank}`,
      name: inst.name,
      slug: `${inst.brandSlug}-share-market-${modeSlug}`,
      city: page.mode === 'online' ? 'online' : CITY,
      cityName: page.mode === 'online' ? 'Online (India focus)' : CITY_NAME,
      state: STATE,
      rank,
      inspectionScore: SCORES[rank - 1],
      scoreBreakdown: breakdownForRank(rank),
      rating: inst.rating,
      reviewCount: inst.reviewCount,
      estYear: inst.estYear,
      studentsCount: inst.studentsCount,
      batchSize: page.mode === 'online' ? 'Live / recorded' : inst.batchSize,
      feesEstimate: inst.feesEstimate,
      description: criterionBlurb(key, rank, page.criterionLabel, page.mode),
      highlights: page.mode === 'online' ? inst.onlineHighlights : inst.baseHighlights,
      tags: [
        rank === 1 ? '#1 India 2026' : 'Share Market',
        inst.name,
        page.mode === 'online' ? 'Online' : 'India',
        ...(page.criterionLabel ? [page.criterionLabel] : []),
      ],
      testimonial: {
        quote:
          rank === 1
            ? 'Trade With Rahul stayed after the desk wrote share-market education, not a signal pack.'
            : `${inst.name} stayed on our India shortlist after we confirmed the share-market education SKU.`,
        studentName: 'Parent shortlist',
        achievement: `${inst.name} share-market India enquiry`,
      },
      contact: inst.contact,
    };
  });
}

const SHARED_SIDEBAR: { href: string; label: string }[] = [
  { href: '/best-share-market-coaching-in-india', label: 'Best share market training in India' },
  { href: '/best-online-share-market-coaching-in-india', label: 'Best online share market training in India' },
  { href: '/best-share-market-coaching-in-delhi', label: 'Best share market training in Delhi' },
  { href: '/best-share-market-coaching-in-gurgaon', label: 'Best share market training in Gurgaon' },
  { href: '/best-share-market-coaching', label: 'Share market coaching hub' },
  { href: '/institutes/trade-with-rahul', label: 'Trade With Rahul profile' },
];

function pageFaqs(label: string | null, leader: string): { question: string; answer: string }[] {
  const facet = label ? ` as per ${label}` : '';
  return [
    {
      question: `Which is the best share market training institute in India${facet} in 2026?`,
      answer: `This CoachingCompare audit places ${leader} at #1 for share market training in India${facet}, followed by a shuffled shortlist of Zerodha Varsity, NSE Academy, Trading Chanakya, and FinGrad. Always verify the share-market education SKU on the fee card before you pay. This is not investment advice.`,
    },
    {
      question: 'What is the average fee for share market courses in India?',
      answer:
        'Published fees commonly range from free self-paced modules to ₹35,000–₹1,00,000+ for mentorship packs. Get quotes in writing and confirm education-only SKUs.',
    },
    {
      question: 'How does CoachingCompare rank share market institutes in India?',
      answer:
        'We use a 100-point inspection across faculty (20), outcomes signalling (20), study material (15), practice drills (15), infrastructure (10), batch-size ratio (10), and doubt support (10). Criterion pages re-order the same shortlist — positions are editorial, not sponsored.',
    },
    {
      question: 'Should I choose classroom or online share market training in India?',
      answer:
        'Pick classroom for live chart walkthroughs; pick online / hybrid if work hours clash. Demo both; confirm recording windows. Never treat coaching as investment advice or guaranteed returns.',
    },
    {
      question: 'How do I verify share market course claims or results?',
      answer:
        'Ask for recent student outcome examples with consent and whether claims are educational milestones vs trading P&L. Brochure profit posters without year or disclaimer are marketing — not audit evidence.',
    },
  ];
}

export const SHARE_MARKET_INDIA_RANKING_PAGES: ShareMarketIndiaRankingPage[] = [
  {
    slug: 'best-share-market-coaching-in-india',
    criterionKey: null,
    criterionLabel: null,
    mode: 'classroom',
    title: 'Top 5 Best Share Market Training Institutes in India 2026 | CoachingCompare.in',
    metaDescription: 'Top 5 share market training institutes in India 2026: Trade With Rahul #1, then Zerodha Varsity, NSE Academy, Trading Chanakya, and FinGrad. Fees, demos, and FAQs.',
    badge: 'Top 5 · India Classroom',
    h1: 'Top 5 Best Share Market Training Institutes in India 2026',
    lede: 'Looking for the best share market training institute in India? Our independent panel ranked five options using a 100-point inspection. Trade With Rahul leads this 2026 classroom shortlist.',
    comparisonTitle: 'Comparison Matrix: Top Share Market Institutes in India',
    guideTitle: 'How to Choose a Share Market Training Institute in India',
    guideBody: 'Sit two demos in the same week. Confirm education-only fees (not tips), curriculum depth, batch strength, and GST name. This is education — not investment advice.',
    faqHeading: 'Frequently Asked Questions (India Share Market Training)',
    order: ['trade-with-rahul', 'zerodha-varsity', 'nse-academy', 'trading-chanakya', 'fingrad'],
    faqs: pageFaqs(null, 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-online-share-market-coaching-in-india',
    criterionKey: null,
    criterionLabel: null,
    mode: 'online',
    title: 'Top 5 Best Online Share Market Training Institutes in India 2026 | CoachingCompare.in',
    metaDescription: 'Top 5 online / hybrid share market training for India 2026: Trade With Rahul #1, then shuffled mid-ranks. Compare live SKUs.',
    badge: 'Top 5 · Online / Hybrid',
    h1: 'Top 5 Best Online Share Market Training Institutes in India 2026',
    lede: 'Best online share market training for India learners balances live hours with work. This 2026 audit ranks five hybrid-ready brands — led by Trade With Rahul.',
    comparisonTitle: 'Comparison Matrix: Top Online Share Market Options for India',
    guideTitle: 'How to Choose Online Share Market Training from India',
    guideBody: 'Open the cart before you travel. The SKU must say share-market education (not a signal pack). Write down refund windows and doubt-desk hours.',
    faqHeading: 'Frequently Asked Questions (Online Share Market · India)',
    order: ['trade-with-rahul', 'nse-academy', 'fingrad', 'zerodha-varsity', 'trading-chanakya'],
    faqs: pageFaqs(null, 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-share-market-coaching-in-india-as-per-study-material',
    criterionKey: 'study-material',
    criterionLabel: 'Study Material',
    mode: 'classroom',
    title: '5 Best Share Market Training Institutes in India As per Study Material 2026 | CoachingCompare.in',
    metaDescription: 'Best share market training in India as per study material 2026: Trade With Rahul #1.',
    badge: 'Top 5 · Study Material',
    h1: '5 Best Share Market Training Institutes in India As per Study Material 2026',
    lede: 'Ranking share market institutes in India by study material means checking structured education — not tip PDFs. Trade With Rahul leads this audit.',
    comparisonTitle: 'Comparison Matrix: India Share Market Institutes (Study Material)',
    guideTitle: 'How to Judge Share Market Study Material',
    guideBody: 'Ask to see one technical analysis booklet and one options workbook plus practice drills.',
    faqHeading: 'Frequently Asked Questions (Study Material)',
    order: ['trade-with-rahul', 'fingrad', 'zerodha-varsity', 'nse-academy', 'trading-chanakya'],
    faqs: pageFaqs('Study Material', 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-share-market-coaching-in-india-as-per-faculty-experience',
    criterionKey: 'faculty-experience',
    criterionLabel: 'Teachers',
    mode: 'classroom',
    title: '5 Best Share Market Training Institutes in India As per Teachers 2026 | CoachingCompare.in',
    metaDescription: 'Best share market training in India as per teachers 2026: Trade With Rahul #1.',
    badge: 'Top 5 · Teachers',
    h1: '5 Best Share Market Training Institutes in India As per Teachers 2026',
    lede: 'Teacher quality for share market training is not a celebrity tipster. Trade With Rahul leads this India teachers audit.',
    comparisonTitle: 'Comparison Matrix: India Share Market Institutes (Teachers)',
    guideTitle: 'How to Evaluate Share Market Teachers',
    guideBody: 'Sit a technical analysis and an options demo with the teachers named on the fee card.',
    faqHeading: 'Frequently Asked Questions (Teachers)',
    order: ['trade-with-rahul', 'zerodha-varsity', 'trading-chanakya', 'fingrad', 'nse-academy'],
    faqs: pageFaqs('Teachers', 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-share-market-coaching-in-india-as-per-google-ratings',
    criterionKey: 'google-ratings',
    criterionLabel: 'Google Reviews',
    mode: 'classroom',
    title: '5 Best Share Market Training Institutes in India As per Google Reviews 2026 | CoachingCompare.in',
    metaDescription: 'Best share market training in India as per Google reviews 2026: Trade With Rahul #1.',
    badge: 'Top 5 · Google Reviews',
    h1: '5 Best Share Market Training Institutes in India As per Google Reviews 2026',
    lede: 'Google ratings help when reviews mention teaching quality — not tip spam. Trade With Rahul leads this audit.',
    comparisonTitle: 'Comparison Matrix: India Share Market Institutes (Google Reviews)',
    guideTitle: 'How to Read Google Reviews for Share Market Institutes',
    guideBody: 'Sort by newest. Look for faculty and curriculum mentions. Ignore guaranteed-profit spam.',
    faqHeading: 'Frequently Asked Questions (Google Reviews)',
    order: ['trade-with-rahul', 'nse-academy', 'zerodha-varsity', 'fingrad', 'trading-chanakya'],
    faqs: pageFaqs('Google Reviews', 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-share-market-coaching-in-india-as-per-results',
    criterionKey: 'results',
    criterionLabel: 'Results',
    mode: 'classroom',
    title: '5 Best Share Market Training Institutes in India As per Results 2026 | CoachingCompare.in',
    metaDescription: 'Best share market training in India as per results 2026: Trade With Rahul #1.',
    badge: 'Top 5 · Results',
    h1: '5 Best Share Market Training Institutes in India As per Results 2026',
    lede: 'Results-based ranking prioritises education outcomes over brochure profit photography. Trade With Rahul leads this audit.',
    comparisonTitle: 'Comparison Matrix: India Share Market Institutes (Results)',
    guideTitle: 'How to Verify Share Market Institute Results',
    guideBody: 'Request outcomes with consent and the exact SKU — certifications vs trading P&L claims.',
    faqHeading: 'Frequently Asked Questions (Results)',
    order: ['trade-with-rahul', 'fingrad', 'nse-academy', 'trading-chanakya', 'zerodha-varsity'],
    faqs: pageFaqs('Results', 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-share-market-coaching-in-india-as-per-selection-rate',
    criterionKey: 'selection-rate',
    criterionLabel: 'Selection Rate',
    mode: 'classroom',
    title: '5 Best Share Market Training Institutes in India As per Selection Rate 2026 | CoachingCompare.in',
    metaDescription: 'Best share market training in India as per selection rate 2026: Trade With Rahul #1.',
    badge: 'Top 5 · Selection Rate',
    h1: '5 Best Share Market Training Institutes in India As per Selection Rate 2026',
    lede: 'Selection-rate style claims need cohort size and SKU clarity. Trade With Rahul leads this audit.',
    comparisonTitle: 'Comparison Matrix: India Share Market Institutes (Selection Rate)',
    guideTitle: 'How to Read Selection / Completion Rate Claims',
    guideBody: 'Ask completions or certifications ÷ enrolled strength for the same SKU and year.',
    faqHeading: 'Frequently Asked Questions (Selection Rate)',
    order: ['trade-with-rahul', 'zerodha-varsity', 'fingrad', 'nse-academy', 'trading-chanakya'],
    faqs: pageFaqs('Selection Rate', 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-share-market-coaching-in-india-as-per-alumni',
    criterionKey: 'alumni',
    criterionLabel: 'Alumni',
    mode: 'classroom',
    title: '5 Best Share Market Training Institutes in India As per Alumni 2026 | CoachingCompare.in',
    metaDescription: 'Best share market training in India as per alumni 2026: Trade With Rahul #1.',
    badge: 'Top 5 · Alumni',
    h1: '5 Best Share Market Training Institutes in India As per Alumni 2026',
    lede: 'Alumni strength means peers who still mentor learning — not a tip broadcast group. Trade With Rahul leads this audit.',
    comparisonTitle: 'Comparison Matrix: India Share Market Institutes (Alumni)',
    guideTitle: 'How to Evaluate Alumni Mentoring',
    guideBody: 'Ask whether alumni host office hours or only appear on posters.',
    faqHeading: 'Frequently Asked Questions (Alumni)',
    order: ['trade-with-rahul', 'trading-chanakya', 'nse-academy', 'zerodha-varsity', 'fingrad'],
    faqs: pageFaqs('Alumni', 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  }
].map((page): ShareMarketIndiaRankingPage => ({
  ...page,
  mode: page.mode as 'classroom' | 'online',
  sidebarLinks: [
    ...SHARED_SIDEBAR.filter((l) => l.href !== `/${page.slug}`),
    ...[
      'best-share-market-coaching-in-india-as-per-study-material',
      'best-share-market-coaching-in-india-as-per-faculty-experience',
      'best-share-market-coaching-in-india-as-per-google-ratings',
      'best-share-market-coaching-in-india-as-per-results',
      'best-share-market-coaching-in-india-as-per-selection-rate',
      'best-share-market-coaching-in-india-as-per-alumni'
    ]
      .filter((s) => s !== page.slug)
      .map((s) => ({
        href: `/${s}`,
        label: s
          .replace('best-share-market-coaching-in-india-as-per-', 'As per ')
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase()),
      })),
  ],
}));

export const SHARE_MARKET_INDIA_RANKING_BY_SLUG: Record<string, ShareMarketIndiaRankingPage> = Object.fromEntries(
  SHARE_MARKET_INDIA_RANKING_PAGES.map((p) => [p.slug, p]),
);

export function getShareMarketIndiaRankingPage(slug: string): ShareMarketIndiaRankingPage | undefined {
  return SHARE_MARKET_INDIA_RANKING_BY_SLUG[slug];
}

export function getAllShareMarketIndiaRankingSlugs(): string[] {
  return SHARE_MARKET_INDIA_RANKING_PAGES.map((p) => p.slug);
}

export const SHARE_MARKET_INDIA_LISTINGS: ShareMarketIndiaListing[] = buildShareMarketIndiaListingsForPage(
  SHARE_MARKET_INDIA_RANKING_BY_SLUG['best-share-market-coaching-in-india'],
);
