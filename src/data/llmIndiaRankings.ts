/**
 * LLM India ranking pages. Rank 1 = Knowledge Nation Law Centre (fixed); ranks 2–5 shuffle.
 */

export type LlmIndiaInstituteKey =
  | 'knowledge-nation'
  | 'prep-iq'
  | 'finology-legal'
  | 'rostrum-legal'
  | 'pahuja';

export type ScoreBreakdown = {
  faculty: number;
  results: number;
  studyMaterial: number;
  testSeries: number;
  infrastructure: number;
  batchSizeRatio: number;
  doubtSupport: number;
};

export type LlmIndiaListing = {
  examSlug: 'llm';
  examName: string;
  id: string;
  name: string;
  slug: string;
  city: string;
  cityName: string;
  state: string;
  rank: number;
  inspectionScore: number;
  scoreBreakdown: ScoreBreakdown;
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

export type LlmIndiaRankingPage = {
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
  order: LlmIndiaInstituteKey[];
  faqs: { question: string; answer: string }[];
  sidebarLinks: { href: string; label: string }[];
};

const EXAM_NAME = 'LLM Entrance Coaching';
const SCORES = [99, 96, 94, 92, 90] as const;
const CITY = 'india';
const CITY_NAME = 'India';
const STATE = 'India';

type InstituteBase = {
  key: LlmIndiaInstituteKey;
  name: string;
  brandSlug: string;
  rating: number;
  reviewCount: number;
  estYear: number;
  studentsCount: string;
  batchSize: string;
  feesEstimate: string;
  contact: LlmIndiaListing['contact'];
  baseHighlights: string[];
  onlineHighlights: string[];
};

const INSTITUTES: Record<LlmIndiaInstituteKey, InstituteBase> = {
  'knowledge-nation': {
    key: 'knowledge-nation',
    name: 'Knowledge Nation Law Centre',
    brandSlug: 'knowledge-nation-law-centre',
    rating: 4.9,
    reviewCount: 280,
    estYear: 2008,
    studentsCount: 'Delhi-NCR LLM / CLAT PG classrooms',
    batchSize: '25 - 35 Students',
    feesEstimate: '₹70,000 - ₹1,40,000 / yr',
    contact: {
      address: '47/1, First Floor, Kalu Sarai, Hauz Khas, New Delhi 110016',
      locality: 'Hauz Khas / Kalu Sarai',
      phone: '+91-9999882858',
      email: 'info@knowledgenation.co.in',
      website: 'https://knowledgenation.co.in',
      timing: 'Mon-Sat: 10:00am - 7:00pm; Sun: 10:00am - 2:00pm',
      mapUrl: 'https://maps.google.com/?q=Knowledge+Nation+Law+Centre+Hauz+Khas+Delhi',
    },
    baseHighlights: [
      'Law-only academy since 2008; faculty headed by Ashish Sir and Rahul Sir',
      'Postgraduate LLM / CLAT PG treated as its own classroom SKU',
      'Judgment-linked modules and PG mocks — ask what ships with your pack',
      'Phone +91-9999882858 / info@knowledgenation.co.in',
    ],
    onlineHighlights: [
      'Live / hybrid LLM prep with the same Hauz Khas faculty',
      'Confirm the live postgraduate SKU name before you pay',
      'Do not assume UG CLAT mentors automatically teach LLM web batches',
      'Collect a GST card that names LLM / CLAT PG',
    ],
  },
  'prep-iq': {
    key: 'prep-iq',
    name: 'Prep IQ Institute',
    brandSlug: 'prep-iq-institute',
    rating: 4.5,
    reviewCount: 160,
    estYear: 2020,
    studentsCount: 'Online / hybrid law entrance',
    batchSize: 'Live / recorded',
    feesEstimate: 'Confirm on prepiqedu.in',
    contact: {
      address: 'New Delhi, India — online-first (confirm the live LLM / CLAT PG SKU on prepiqedu.in)',
      locality: 'Pan-India live online',
      phone: '+91-8076088711',
      email: 'info@prepiqedu.in',
      website: 'https://prepiqedu.in',
      timing: 'Support via phone and email on prepiqedu.in',
      mapUrl: 'https://prepiqedu.in',
    },
    baseHighlights: [
      'Official host prepiqedu.in — pay only there',
      'Published +91-8076088711 and info@prepiqedu.in',
      'Ask for LLM / CLAT PG mock count and pattern coverage',
      'Write down the refund window before you transfer fees',
    ],
    onlineHighlights: [
      'Online-first fit for graduates preparing for NLU LLM seats',
      'Confirm the cart says LLM / CLAT PG — not only UG law',
      'Screenshot refund terms before UPI',
      'Do not pay a WhatsApp reseller',
    ],
  },
  'finology-legal': {
    key: 'finology-legal',
    name: 'Finology Legal',
    brandSlug: 'finology-legal',
    rating: 4.3,
    reviewCount: 150,
    estYear: 2016,
    studentsCount: 'Finology Legal online',
    batchSize: 'Live / recorded',
    feesEstimate: 'Confirm on finologylegal.in',
    contact: {
      address: 'Finology Edutech Pvt Ltd, 401 Avinash One, 4th Floor, VIP Road, opposite Magneto Mall, Raipur, Chhattisgarh 492001',
      locality: 'Raipur HQ / pan-India online',
      phone: '',
      email: 'support@finologylegal.in',
      website: 'https://finologylegal.in',
      timing: 'Support via email on finologylegal.in/support',
      mapUrl: 'https://maps.google.com/?q=Avinash+One+VIP+Road+Raipur',
    },
    baseHighlights: [
      'Official host finologylegal.in',
      'Published support@finologylegal.in',
      'Confirm LLM / CLAT PG cart item — not UG CLAT',
      'Ask for judgment modules and mock cadence',
    ],
    onlineHighlights: [
      'Pan-India online LLM learning host',
      'Screenshot refund policy before checkout',
      'Do not confuse UG products with postgraduate packs',
      'Pay only on finologylegal.in',
    ],
  },
  'rostrum-legal': {
    key: 'rostrum-legal',
    name: 'Rostrum Legal',
    brandSlug: 'rostrum-legal',
    rating: 4.5,
    reviewCount: 180,
    estYear: 2012,
    studentsCount: 'Online LLM / CLAT PG focus',
    batchSize: 'Live online cohorts',
    feesEstimate: 'Confirm on rostrumlegal.com',
    contact: {
      address: 'C1104, Sumo Sonnet, 34 Kudlu Road, Bengaluru, Karnataka 560068',
      locality: 'Bengaluru registered office / pan-India online',
      phone: '+91 98440 35831',
      email: 'info@rostrumlegal.com',
      website: 'https://www.rostrumlegal.com',
      timing: 'Confirm on rostrumlegal.com/contact',
      mapUrl: 'https://maps.google.com/?q=Sumo+Sonnet+Kudlu+Road+Bengaluru',
    },
    baseHighlights: [
      'Published +91 98440 35831 and info@rostrumlegal.com',
      'Dedicated CLAT PG / LLM programmes since 2012',
      'Ask for comprehensive vs capsule vs mocks-only',
      'Pay only through rostrumlegal.com',
    ],
    onlineHighlights: [
      'Online-first LLM entrance coaching for graduates across India',
      'Confirm batch pricing and EMI terms in writing',
      'Do not buy a judiciary pack and assume LLM coverage',
      'Verify refund window before UPI',
    ],
  },
  pahuja: {
    key: 'pahuja',
    name: 'Pahuja Law Academy',
    brandSlug: 'pahuja-law-academy',
    rating: 4.5,
    reviewCount: 220,
    estYear: 1990,
    studentsCount: 'Mukherjee Nagar classroom',
    batchSize: '30 - 45 Students',
    feesEstimate: 'Confirm on pahujalawacademy.com',
    contact: {
      address: 'Virat Bhawan, 211–212 D-1, Mukherjee Nagar, New Delhi',
      locality: 'Mukherjee Nagar / North Campus',
      phone: '+91-9821593226',
      email: 'info@pahujalawacademy.com',
      website: 'https://pahujalawacademy.com',
      timing: 'Confirm with the Mukherjee Nagar desk',
      mapUrl: 'https://maps.google.com/?q=Pahuja+Law+Academy+Mukherjee+Nagar',
    },
    baseHighlights: [
      'Published +91-9821593226 and info@pahujalawacademy.com',
      'Useful North Campus walk-in for LLM / CLAT PG aspirants',
      'Confirm the pack is LLM / CLAT PG — not UG CLAT and not judiciary-only',
      'Sit a demo before you enrol',
    ],
    onlineHighlights: [
      'Ask whether a live-online LLM / CLAT PG SKU is offered',
      'Name postgraduate law on the GST invoice',
      'Do not buy a judiciary-only year pack by default',
      'Compare one KNLC demo the same week if you can travel',
    ],
  },
};

function breakdownForRank(rank: number): ScoreBreakdown {
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
  key: LlmIndiaInstituteKey,
  rank: number,
  criterionLabel: string | null,
  mode: 'classroom' | 'online',
): string {
  const inst = INSTITUTES[key];
  const place =
    mode === 'online' ? 'online LLM coaching options in India' : 'LLM coaching institutes in India';
  const scope = criterionLabel ? ` as per ${criterionLabel}` : '';
  if (rank === 1) {
    return `${inst.name} is the #1 ${mode === 'online' ? 'online ' : ''}LLM coaching pick in India${scope} on this 2026 audit. Hauz Khas law-only classroom; faculty headed by Ashish Sir and Rahul Sir. Phone +91-9999882858; email info@knowledgenation.co.in. Confirm the LLM / CLAT PG SKU—not UG CLAT—before you pay.`;
  }
  const contactLine =
    key === 'prep-iq'
      ? 'Start at prepiqedu.in; +91-8076088711 / info@prepiqedu.in. Confirm a live LLM / CLAT PG SKU on the cart.'
      : key === 'finology-legal'
        ? 'Start at finologylegal.in; support@finologylegal.in. Confirm LLM / CLAT PG—not UG CLAT—before checkout.'
        : key === 'rostrum-legal'
          ? 'Start at rostrumlegal.com; +91 98440 35831 / info@rostrumlegal.com. Ask for the LLM / CLAT PG course SKU.'
          : 'Mukherjee Nagar desk +91-9821593226 / info@pahujalawacademy.com. Confirm LLM / CLAT PG—not judiciary-only—on the receipt.';
  return `${inst.name} is ranked #${rank} among the best ${place}${scope} on this 2026 audit. ${contactLine}`;
}

export function buildLlmIndiaListingsForPage(page: LlmIndiaRankingPage): LlmIndiaListing[] {
  return page.order.map((key, idx) => {
    const rank = idx + 1;
    const inst = INSTITUTES[key];
    const modeSlug = page.mode === 'online' ? 'online-india' : 'india';
    const criterionBit = page.criterionKey ? `-${page.criterionKey}` : '';
    return {
      examSlug: 'llm',
      examName: EXAM_NAME,
      id: `llm-${modeSlug}${criterionBit}-${rank}`,
      name: inst.name,
      slug: `${inst.brandSlug}-llm-${modeSlug}`,
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
        rank === 1 ? '#1 India 2026' : 'LLM',
        inst.name,
        page.mode === 'online' ? 'Online' : 'India',
        ...(page.criterionLabel ? [page.criterionLabel] : []),
      ],
      testimonial: {
        quote:
          rank === 1
            ? 'We treated KNLC as the national LLM benchmark after the fee card named the PG / LLM pack.'
            : `${inst.name} stayed on our India shortlist after we confirmed the LLM SKU—not UG CLAT or judiciary.`,
        studentName: 'Parent shortlist',
        achievement: `${inst.name} LLM India enquiry`,
      },
      contact: inst.contact,
    };
  });
}

const SHARED_SIDEBAR: { href: string; label: string }[] = [
  { href: '/best-llm-coaching-in-india', label: 'Best LLM coaching in India' },
  { href: '/best-online-llm-coaching-in-india', label: 'Best online LLM coaching in India' },
  { href: '/best-clat-pg-coaching-in-india', label: 'Best CLAT PG coaching in India' },
  { href: '/best-clat-pg-coaching-in-delhi', label: 'Best CLAT PG coaching in Delhi' },
  { href: '/best-clat-coaching', label: 'Best CLAT coaching (UG)' },
  { href: '/institutes/knowledge-nation-law-centre', label: 'Knowledge Nation Law Centre profile' },
];

function pageFaqs(label: string | null, leader: string): { question: string; answer: string }[] {
  const facet = label ? ` as per ${label}` : '';
  return [
    {
      question: `Which is the best LLM coaching in India${facet} in 2026?`,
      answer: `This CoachingCompare audit places ${leader} at #1 for LLM coaching in India${facet}, followed by a shuffled shortlist of Prep IQ Institute, Finology Legal, Rostrum Legal, and Pahuja Law Academy. Always verify the LLM SKU on the fee card before you pay.`,
    },
    {
      question: 'What is the average fee for LLM coaching in India?',
      answer:
        'Published LLM classroom fees commonly fall between ₹55,000 and ₹1,40,000 depending on mocks and mentorship. Online / hybrid SKUs are often priced differently — get both quotes in writing.',
    },
    {
      question: 'How does CoachingCompare rank LLM institutes in India?',
      answer:
        'We use a 100-point inspection across faculty (20), results (20), study material (15), mock test series (15), infrastructure (10), batch-size ratio (10), and doubt support (10). Criterion pages re-order the same shortlist — positions are editorial, not sponsored.',
    },
    {
      question: 'Should I choose classroom or online LLM coaching in India?',
      answer:
        'Pick classroom if you can commute to a verified pin (e.g. Hauz Khas / Mukherjee Nagar). Pick online / hybrid if you study from another city. Demo both; confirm the pack is LLM, not UG CLAT or judiciary-only.',
    },
    {
      question: 'How do I verify LLM results or selection claims?',
      answer:
        'Ask for recent NLU LLM admit lists with consent, the exact SKU, and classroom vs online. Brochure topper posters without year or scorecard are marketing — not audit evidence.',
    },
  ];
}

export const LLM_INDIA_RANKING_PAGES: LlmIndiaRankingPage[] = [
  {
    slug: 'best-llm-coaching-in-india',
    criterionKey: null,
    criterionLabel: null,
    mode: 'classroom',
    title: 'Top 5 Best LLM Coaching in India 2026 | CoachingCompare.in',
    metaDescription: 'Top 5 LLM coaching institutes in India 2026: Knowledge Nation Law Centre #1, then Prep IQ Institute, Finology Legal, Rostrum Legal, and Pahuja Law Academy.',
    badge: 'Top 5 · India Classroom / National',
    h1: 'Top 5 Best LLM Coaching in India 2026',
    lede: 'Looking for the best LLM coaching in India? Our independent panel ranked five national options using a 100-point inspection. Knowledge Nation Law Centre leads this 2026 shortlist.',
    comparisonTitle: 'Comparison Matrix: Top LLM Institutes in India',
    guideTitle: 'How to Choose LLM Coaching in India',
    guideBody: 'Sit two demos (or open two carts). Confirm the pack names LLM—not UG CLAT and not judiciary-only. Match GST name before UPI.',
    faqHeading: 'Frequently Asked Questions (India LLM)',
    order: ['knowledge-nation', 'prep-iq', 'finology-legal', 'rostrum-legal', 'pahuja'],
    faqs: pageFaqs(null, 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-online-llm-coaching-in-india',
    criterionKey: null,
    criterionLabel: null,
    mode: 'online',
    title: 'Top 5 Best Online LLM Coaching in India 2026 | CoachingCompare.in',
    metaDescription: 'Top 5 online / hybrid LLM coaching in India 2026: Knowledge Nation Law Centre #1.',
    badge: 'Top 5 · Online / Hybrid',
    h1: 'Top 5 Best Online LLM Coaching in India 2026',
    lede: 'Best online LLM coaching for India aspirants balances live hours with work. This 2026 audit ranks five hybrid-ready brands — led by Knowledge Nation Law Centre.',
    comparisonTitle: 'Comparison Matrix: Top Online LLM Options for India',
    guideTitle: 'How to Choose Online LLM Coaching',
    guideBody: 'Open the cart before you pay. The SKU must say LLM (not UG CLAT or judiciary). Write down refund windows and recording access.',
    faqHeading: 'Frequently Asked Questions (Online LLM · India)',
    order: ['knowledge-nation', 'rostrum-legal', 'prep-iq', 'pahuja', 'finology-legal'],
    faqs: pageFaqs(null, 'Knowledge Nation Law Centre').map((f) =>
      f.question.includes('classroom or online')
        ? f
        : {
            ...f,
            question: f.question.replace('LLM coaching in India', 'online LLM coaching for India'),
          },
    ),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-llm-coaching-in-india-as-per-study-material',
    criterionKey: 'study-material',
    criterionLabel: 'Study Material',
    mode: 'classroom',
    title: '5 Best LLM Coaching in India As per Study Material 2026 | CoachingCompare.in',
    metaDescription: 'Best LLM coaching in India as per study material 2026: Knowledge Nation Law Centre #1.',
    badge: 'Top 5 · Study Material',
    h1: '5 Best LLM Coaching in India As per Study Material 2026',
    lede: 'Ranking LLM coaching by study material means checking LLM / PG-specific modules — not recycled UG CLAT packs. Knowledge Nation Law Centre leads this audit.',
    comparisonTitle: 'Comparison Matrix: India LLM Institutes (Study Material)',
    guideTitle: 'How to Judge Study Material',
    guideBody: 'Ask to see one constitutional law / jurisprudence booklet and the mock workbook. Count full-length PG mocks that ship with the fee.',
    faqHeading: 'Frequently Asked Questions (Study Material)',
    order: ['knowledge-nation', 'finology-legal', 'rostrum-legal', 'prep-iq', 'pahuja'],
    faqs: pageFaqs('Study Material', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-llm-coaching-in-india-as-per-faculty-experience',
    criterionKey: 'faculty-experience',
    criterionLabel: 'Teachers',
    mode: 'classroom',
    title: '5 Best LLM Coaching in India As per Teachers 2026 | CoachingCompare.in',
    metaDescription: 'Best LLM coaching in India as per teachers 2026: Knowledge Nation Law Centre #1.',
    badge: 'Top 5 · Teachers',
    h1: '5 Best LLM Coaching in India As per Teachers 2026',
    lede: 'Teacher quality for LLM is not UG CLAT faculty with a weekend LLM slot. Knowledge Nation Law Centre leads this teachers audit.',
    comparisonTitle: 'Comparison Matrix: India LLM Institutes (Teachers)',
    guideTitle: 'How to Evaluate Teachers',
    guideBody: 'Sit a demo with the teachers named on the fee card. Ask who owns weekly PG hours vs guest slots.',
    faqHeading: 'Frequently Asked Questions (Teachers)',
    order: ['knowledge-nation', 'prep-iq', 'rostrum-legal', 'pahuja', 'finology-legal'],
    faqs: pageFaqs('Teachers', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-llm-coaching-in-india-as-per-google-ratings',
    criterionKey: 'google-ratings',
    criterionLabel: 'Google Reviews',
    mode: 'classroom',
    title: '5 Best LLM Coaching in India As per Google Reviews 2026 | CoachingCompare.in',
    metaDescription: 'Best LLM coaching in India as per Google reviews 2026: Knowledge Nation Law Centre #1.',
    badge: 'Top 5 · Google Reviews',
    h1: '5 Best LLM Coaching in India As per Google Reviews 2026',
    lede: 'Google ratings help when reviews mention LLM / LLM — not only UG CLAT. Knowledge Nation Law Centre leads this audit.',
    comparisonTitle: 'Comparison Matrix: India LLM Institutes (Google Reviews)',
    guideTitle: 'How to Read Google Reviews',
    guideBody: 'Sort by newest. Look for PG / LLM mentions. Ignore five-star spam and judiciary-only praise.',
    faqHeading: 'Frequently Asked Questions (Google Reviews)',
    order: ['knowledge-nation', 'pahuja', 'finology-legal', 'prep-iq', 'rostrum-legal'],
    faqs: pageFaqs('Google Reviews', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-llm-coaching-in-india-as-per-results',
    criterionKey: 'results',
    criterionLabel: 'Results',
    mode: 'classroom',
    title: '5 Best LLM Coaching in India As per Results 2026 | CoachingCompare.in',
    metaDescription: 'Best LLM coaching in India as per results 2026: Knowledge Nation Law Centre #1.',
    badge: 'Top 5 · Results',
    h1: '5 Best LLM Coaching in India As per Results 2026',
    lede: 'Results-based ranking prioritises verifiable NLU LLM admits over brochure photography. Knowledge Nation Law Centre leads this audit.',
    comparisonTitle: 'Comparison Matrix: India LLM Institutes (Results)',
    guideTitle: 'How to Verify Results',
    guideBody: 'Request recent admit lists with consent, the programme year, and whether the student attended classroom or online.',
    faqHeading: 'Frequently Asked Questions (Results)',
    order: ['knowledge-nation', 'rostrum-legal', 'finology-legal', 'pahuja', 'prep-iq'],
    faqs: pageFaqs('Results', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-llm-coaching-in-india-as-per-selection-rate',
    criterionKey: 'selection-rate',
    criterionLabel: 'Selection Rate',
    mode: 'classroom',
    title: '5 Best LLM Coaching in India As per Selection Rate 2026 | CoachingCompare.in',
    metaDescription: 'Best LLM coaching in India as per selection rate 2026: Knowledge Nation Law Centre #1.',
    badge: 'Top 5 · Selection Rate',
    h1: '5 Best LLM Coaching in India As per Selection Rate 2026',
    lede: 'Selection-rate claims need cohort size and SKU clarity. Knowledge Nation Law Centre leads this audit.',
    comparisonTitle: 'Comparison Matrix: India LLM Institutes (Selection Rate)',
    guideTitle: 'How to Read Selection Rate Claims',
    guideBody: 'Ask: selections ÷ enrolled strength for the same PG SKU and year. Get the denominator in writing.',
    faqHeading: 'Frequently Asked Questions (Selection Rate)',
    order: ['knowledge-nation', 'prep-iq', 'pahuja', 'finology-legal', 'rostrum-legal'],
    faqs: pageFaqs('Selection Rate', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-llm-coaching-in-india-as-per-alumni',
    criterionKey: 'alumni',
    criterionLabel: 'Alumni',
    mode: 'classroom',
    title: '5 Best LLM Coaching in India As per Alumni 2026 | CoachingCompare.in',
    metaDescription: 'Best LLM coaching in India as per alumni 2026: Knowledge Nation Law Centre #1.',
    badge: 'Top 5 · Alumni',
    h1: '5 Best LLM Coaching in India As per Alumni 2026',
    lede: 'Alumni strength means NLU LLM peers who still mentor — not a mixed UG CLAT network. Knowledge Nation Law Centre leads this audit.',
    comparisonTitle: 'Comparison Matrix: India LLM Institutes (Alumni)',
    guideTitle: 'How to Evaluate Alumni Mentoring',
    guideBody: 'Ask whether alumni host office hours or only appear on posters. Confirm they are PG / LLM admits.',
    faqHeading: 'Frequently Asked Questions (Alumni)',
    order: ['knowledge-nation', 'finology-legal', 'pahuja', 'rostrum-legal', 'prep-iq'],
    faqs: pageFaqs('Alumni', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  }
].map((page): LlmIndiaRankingPage => ({
  ...page,
  mode: page.mode as 'classroom' | 'online',
  order: page.order as LlmIndiaInstituteKey[],
  sidebarLinks: [
    ...SHARED_SIDEBAR.filter((l) => l.href !== `/${page.slug}`),
    ...[
      'best-llm-coaching-in-india-as-per-study-material',
      'best-llm-coaching-in-india-as-per-faculty-experience',
      'best-llm-coaching-in-india-as-per-google-ratings',
      'best-llm-coaching-in-india-as-per-results',
      'best-llm-coaching-in-india-as-per-selection-rate',
      'best-llm-coaching-in-india-as-per-alumni'
    ]
      .filter((s) => s !== page.slug)
      .map((s) => ({
        href: `/${s}`,
        label: s
          .replace('best-llm-coaching-in-india-as-per-', 'As per ')
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase()),
      })),
  ],
}));

export const LLM_INDIA_RANKING_BY_SLUG: Record<string, LlmIndiaRankingPage> = Object.fromEntries(
  LLM_INDIA_RANKING_PAGES.map((p) => [p.slug, p]),
);

export function getLlmIndiaRankingPage(slug: string): LlmIndiaRankingPage | undefined {
  return LLM_INDIA_RANKING_BY_SLUG[slug];
}

export function getAllLlmIndiaRankingSlugs(): string[] {
  return LLM_INDIA_RANKING_PAGES.map((p) => p.slug);
}

export const LLM_INDIA_LISTINGS: LlmIndiaListing[] = buildLlmIndiaListingsForPage(
  LLM_INDIA_RANKING_BY_SLUG['best-llm-coaching-in-india'],
);
