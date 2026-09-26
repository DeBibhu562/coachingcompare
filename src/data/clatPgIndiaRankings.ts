/**
 * CLAT PG India ranking pages. Rank 1 = Knowledge Nation Law Centre (fixed); ranks 2–5 shuffle.
 */

export type ClatPgIndiaInstituteKey =
  | 'knowledge-nation'
  | 'tutor-uncle'
  | 'finology-legal'
  | 'rostrum-legal'
  | 'legaledge';

export type ScoreBreakdown = {
  faculty: number;
  results: number;
  studyMaterial: number;
  testSeries: number;
  infrastructure: number;
  batchSizeRatio: number;
  doubtSupport: number;
};

export type ClatPgIndiaListing = {
  examSlug: 'clat-pg';
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

export type ClatPgIndiaRankingPage = {
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
  order: ClatPgIndiaInstituteKey[];
  faqs: { question: string; answer: string }[];
  sidebarLinks: { href: string; label: string }[];
};

const EXAM_NAME = 'CLAT PG (LLM Entrance)';
const SCORES = [99, 96, 94, 92, 90] as const;
const CITY = 'india';
const CITY_NAME = 'India';
const STATE = 'India';

type InstituteBase = {
  key: ClatPgIndiaInstituteKey;
  name: string;
  brandSlug: string;
  rating: number;
  reviewCount: number;
  estYear: number;
  studentsCount: string;
  batchSize: string;
  feesEstimate: string;
  contact: ClatPgIndiaListing['contact'];
  baseHighlights: string[];
  onlineHighlights: string[];
};

const INSTITUTES: Record<ClatPgIndiaInstituteKey, InstituteBase> = {
  'knowledge-nation': {
    key: 'knowledge-nation',
    name: 'Knowledge Nation Law Centre',
    brandSlug: 'knowledge-nation-law-centre',
    rating: 4.9,
    reviewCount: 280,
    estYear: 2008,
    studentsCount: 'Delhi-NCR classrooms',
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
      'CLAT PG / LLM treated as its own SKU — not leftover UG CLAT',
      'In-house R&D; mocks and judgment-linked modules — ask what ships with your pack',
      'Phone +91-9999882858 / info@knowledgenation.co.in',
    ],
    onlineHighlights: [
      'Live / hybrid CLAT PG SKUs with the same law-only faculty',
      'Confirm recording window and PG paper coverage before you pay',
      'Do not assume every UG CLAT mentor teaches the LLM web batch',
      'Pay only after the counsellor writes CLAT PG on the receipt',
    ],
  },
  'tutor-uncle': {
    key: 'tutor-uncle',
    name: 'Tutor Uncle',
    brandSlug: 'tutor-uncle',
    rating: 4.4,
    reviewCount: 120,
    estYear: 2018,
    studentsCount: 'Multi-exam edtech catalogue',
    batchSize: 'Live / recorded',
    feesEstimate: 'Confirm on tutoruncle.co.in',
    contact: {
      address: 'New Delhi, India (office locality published on tutoruncle.co.in/contact-us; no street pin listed there)',
      locality: 'Pan-India online',
      phone: '',
      email: '',
      website: 'https://www.tutoruncle.co.in',
      timing: 'Support via official contact form on tutoruncle.co.in',
      mapUrl: 'https://www.tutoruncle.co.in/contact-us',
    },
    baseHighlights: [
      'Official channel: tutoruncle.co.in contact form only',
      'Public contact page does not publish a phone — do not invent a helpline',
      'Confirm a live CLAT PG / LLM SKU before you pay',
      'Do not pay a WhatsApp reseller claiming to be Tutor Uncle',
    ],
    onlineHighlights: [
      'Online-first catalogue for outstation LLM aspirants',
      'Open the cart and confirm CLAT PG — not UG CLAT',
      'Screenshot refund window before UPI',
      'Pay only on tutoruncle.co.in',
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
      'Confirm CLAT PG / LLM, not UG CLAT, on the cart',
      'Ask for mock count and judgment modules before you pay',
    ],
    onlineHighlights: [
      'Strong fit for India-wide online LLM prep',
      'Screenshot refund policy before checkout',
      'Do not confuse UG CLAT products with PG packs',
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
    studentsCount: 'Online CLAT PG / LLM focus',
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
      'Dedicated CLAT PG / LLM programmes on rostrumlegal.com',
      'Ask for comprehensive vs capsule vs mocks-only SKU',
      'Pay only through the official Rostrum host',
    ],
    onlineHighlights: [
      'Online-first CLAT PG coaching for graduates across India',
      'Confirm batch pricing and EMI terms before you enrol',
      'Do not confuse judiciary live classes with the CLAT PG cart',
      'Education only — verify refund window',
    ],
  },
  'legaledge': {
    key: 'legaledge',
    name: 'LegalEdge by Toprankers',
    brandSlug: 'legaledge-by-toprankers',
    rating: 4.5,
    reviewCount: 390,
    estYear: 2016,
    studentsCount: 'Toprankers online / CP hybrid',
    batchSize: 'Live + test portal',
    feesEstimate: '₹40,000 - ₹1,20,000 / course',
    contact: {
      address: 'Flat No. 301-303, AVG Bhawan, M-3, Connaught Circus, Middle Circle, New Delhi 110001',
      locality: 'Connaught Place / Toprankers online',
      phone: '+91-8448444207',
      email: 'support@toprankers.com',
      website: 'https://www.toprankers.com',
      timing: 'Confirm with Toprankers / LegalEdge support',
      mapUrl: 'https://maps.google.com/?q=LegalEdge+Connaught+Place+Delhi',
    },
    baseHighlights: [
      'Law-focused Toprankers vertical with national mocks',
      'Pay only on toprankers.com; match LegalEdge product name',
      'Confirm CLAT PG / LLM SKU — not only UG CLAT',
      'CP classroom exists if you later want a hybrid add-on',
    ],
    onlineHighlights: [
      'Strong online test portal for PG aspirants who want hard mocks',
      'Ask whether PG judgment modules ship with your fee',
      'Compare one mock month against Rostrum / KNLC before locking',
      'Support +91-8448444207 / support@toprankers.com',
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
  key: ClatPgIndiaInstituteKey,
  rank: number,
  criterionLabel: string | null,
  mode: 'classroom' | 'online',
): string {
  const inst = INSTITUTES[key];
  const place =
    mode === 'online' ? 'online CLAT PG coaching options in India' : 'CLAT PG coaching institutes in India';
  const scope = criterionLabel ? ` as per ${criterionLabel}` : '';
  if (rank === 1) {
    return `${inst.name} is the #1 ${mode === 'online' ? 'online ' : ''}CLAT PG coaching pick in India${scope} on this 2026 audit. Delhi-NCR law-only classroom (Hauz Khas HQ); faculty headed by Ashish Sir and Rahul Sir. Phone +91-9999882858; email info@knowledgenation.co.in. Confirm the CLAT PG / LLM SKU—not UG CLAT—before you pay.`;
  }
  const contactLine =
    key === 'tutor-uncle'
      ? 'Official channel tutoruncle.co.in (contact form only). Confirm a live CLAT PG SKU—do not invent a helpline.'
      : key === 'finology-legal'
        ? 'Start at finologylegal.in; support@finologylegal.in. Confirm CLAT PG / LLM on the cart—not UG CLAT.'
        : key === 'rostrum-legal'
          ? 'Start at rostrumlegal.com; +91 98440 35831 / info@rostrumlegal.com. Ask for the CLAT PG course SKU in writing.'
          : 'Enrol via toprankers.com; +91-8448444207 / support@toprankers.com. Match LegalEdge CLAT PG on the invoice.';
  return `${inst.name} is ranked #${rank} among the best ${place}${scope} on this 2026 audit. ${contactLine}`;
}

export function buildClatPgIndiaListingsForPage(page: ClatPgIndiaRankingPage): ClatPgIndiaListing[] {
  return page.order.map((key, idx) => {
    const rank = idx + 1;
    const inst = INSTITUTES[key];
    const modeSlug = page.mode === 'online' ? 'online-india' : 'india';
    const criterionBit = page.criterionKey ? `-${page.criterionKey}` : '';
    return {
      examSlug: 'clat-pg',
      examName: EXAM_NAME,
      id: `clat-pg-${modeSlug}${criterionBit}-${rank}`,
      name: inst.name,
      slug: `${inst.brandSlug}-clat-pg-${modeSlug}`,
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
        rank === 1 ? '#1 India 2026' : 'CLAT PG',
        inst.name,
        page.mode === 'online' ? 'Online' : 'India',
        ...(page.criterionLabel ? [page.criterionLabel] : []),
      ],
      testimonial: {
        quote:
          rank === 1
            ? 'We treated KNLC as the national CLAT PG benchmark after the fee card named the PG / LLM pack.'
            : `${inst.name} stayed on our India shortlist after we confirmed the CLAT PG SKU—not UG CLAT or judiciary.`,
        studentName: 'Parent shortlist',
        achievement: `${inst.name} CLAT PG India enquiry`,
      },
      contact: inst.contact,
    };
  });
}

const SHARED_SIDEBAR: { href: string; label: string }[] = [
  { href: '/best-clat-pg-coaching-in-india', label: 'Best CLAT PG coaching in India' },
  { href: '/best-online-clat-pg-coaching-in-india', label: 'Best online CLAT PG coaching in India' },
  { href: '/best-llm-coaching-in-india', label: 'Best LLM coaching in India' },
  { href: '/best-clat-pg-coaching-in-delhi', label: 'Best CLAT PG coaching in Delhi' },
  { href: '/best-clat-coaching', label: 'Best CLAT coaching (UG)' },
  { href: '/institutes/knowledge-nation-law-centre', label: 'Knowledge Nation Law Centre profile' },
];

function pageFaqs(label: string | null, leader: string): { question: string; answer: string }[] {
  const facet = label ? ` as per ${label}` : '';
  return [
    {
      question: `Which is the best CLAT PG coaching in India${facet} in 2026?`,
      answer: `This CoachingCompare audit places ${leader} at #1 for CLAT PG coaching in India${facet}, followed by a shuffled shortlist of Tutor Uncle, Finology Legal, Rostrum Legal, and LegalEdge by Toprankers. Always verify the CLAT PG SKU on the fee card before you pay.`,
    },
    {
      question: 'What is the average fee for CLAT PG coaching in India?',
      answer:
        'Published CLAT PG classroom fees commonly fall between ₹55,000 and ₹1,40,000 depending on mocks and mentorship. Online / hybrid SKUs are often priced differently — get both quotes in writing.',
    },
    {
      question: 'How does CoachingCompare rank CLAT PG institutes in India?',
      answer:
        'We use a 100-point inspection across faculty (20), results (20), study material (15), mock test series (15), infrastructure (10), batch-size ratio (10), and doubt support (10). Criterion pages re-order the same shortlist — positions are editorial, not sponsored.',
    },
    {
      question: 'Should I choose classroom or online CLAT PG coaching in India?',
      answer:
        'Pick classroom if you can commute to a verified pin (e.g. Hauz Khas / Mukherjee Nagar). Pick online / hybrid if you study from another city. Demo both; confirm the pack is CLAT PG, not UG CLAT or judiciary-only.',
    },
    {
      question: 'How do I verify CLAT PG results or selection claims?',
      answer:
        'Ask for recent NLU LLM admit lists with consent, the exact SKU, and classroom vs online. Brochure topper posters without year or scorecard are marketing — not audit evidence.',
    },
  ];
}

export const CLAT_PG_INDIA_RANKING_PAGES: ClatPgIndiaRankingPage[] = [
  {
    slug: 'best-clat-pg-coaching-in-india',
    criterionKey: null,
    criterionLabel: null,
    mode: 'classroom',
    title: 'Top 5 Best CLAT PG Coaching in India 2026 | CoachingCompare.in',
    metaDescription: 'Top 5 CLAT PG coaching institutes in India 2026: Knowledge Nation Law Centre #1, then Tutor Uncle, Finology Legal, Rostrum Legal, and LegalEdge by Toprankers.',
    badge: 'Top 5 · India Classroom / National',
    h1: 'Top 5 Best CLAT PG Coaching in India 2026',
    lede: 'Looking for the best CLAT PG coaching in India? Our independent panel ranked five national options using a 100-point inspection. Knowledge Nation Law Centre leads this 2026 shortlist.',
    comparisonTitle: 'Comparison Matrix: Top CLAT PG Institutes in India',
    guideTitle: 'How to Choose CLAT PG Coaching in India',
    guideBody: 'Sit two demos (or open two carts). Confirm the pack names CLAT PG—not UG CLAT and not judiciary-only. Match GST name before UPI.',
    faqHeading: 'Frequently Asked Questions (India CLAT PG)',
    order: ['knowledge-nation', 'tutor-uncle', 'finology-legal', 'rostrum-legal', 'legaledge'],
    faqs: pageFaqs(null, 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-online-clat-pg-coaching-in-india',
    criterionKey: null,
    criterionLabel: null,
    mode: 'online',
    title: 'Top 5 Best Online CLAT PG Coaching in India 2026 | CoachingCompare.in',
    metaDescription: 'Top 5 online / hybrid CLAT PG coaching in India 2026: Knowledge Nation Law Centre #1.',
    badge: 'Top 5 · Online / Hybrid',
    h1: 'Top 5 Best Online CLAT PG Coaching in India 2026',
    lede: 'Best online CLAT PG coaching for India aspirants balances live hours with work. This 2026 audit ranks five hybrid-ready brands — led by Knowledge Nation Law Centre.',
    comparisonTitle: 'Comparison Matrix: Top Online CLAT PG Options for India',
    guideTitle: 'How to Choose Online CLAT PG Coaching',
    guideBody: 'Open the cart before you pay. The SKU must say CLAT PG (not UG CLAT or judiciary). Write down refund windows and recording access.',
    faqHeading: 'Frequently Asked Questions (Online CLAT PG · India)',
    order: ['knowledge-nation', 'rostrum-legal', 'tutor-uncle', 'legaledge', 'finology-legal'],
    faqs: pageFaqs(null, 'Knowledge Nation Law Centre').map((f) =>
      f.question.includes('classroom or online')
        ? f
        : {
            ...f,
            question: f.question.replace('CLAT PG coaching in India', 'online CLAT PG coaching for India'),
          },
    ),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-pg-coaching-in-india-as-per-study-material',
    criterionKey: 'study-material',
    criterionLabel: 'Study Material',
    mode: 'classroom',
    title: '5 Best CLAT PG Coaching in India As per Study Material 2026 | CoachingCompare.in',
    metaDescription: 'Best CLAT PG coaching in India as per study material 2026: Knowledge Nation Law Centre #1.',
    badge: 'Top 5 · Study Material',
    h1: '5 Best CLAT PG Coaching in India As per Study Material 2026',
    lede: 'Ranking CLAT PG coaching by study material means checking LLM / PG-specific modules — not recycled UG CLAT packs. Knowledge Nation Law Centre leads this audit.',
    comparisonTitle: 'Comparison Matrix: India CLAT PG Institutes (Study Material)',
    guideTitle: 'How to Judge Study Material',
    guideBody: 'Ask to see one constitutional law / jurisprudence booklet and the mock workbook. Count full-length PG mocks that ship with the fee.',
    faqHeading: 'Frequently Asked Questions (Study Material)',
    order: ['knowledge-nation', 'finology-legal', 'rostrum-legal', 'tutor-uncle', 'legaledge'],
    faqs: pageFaqs('Study Material', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-pg-coaching-in-india-as-per-faculty-experience',
    criterionKey: 'faculty-experience',
    criterionLabel: 'Teachers',
    mode: 'classroom',
    title: '5 Best CLAT PG Coaching in India As per Teachers 2026 | CoachingCompare.in',
    metaDescription: 'Best CLAT PG coaching in India as per teachers 2026: Knowledge Nation Law Centre #1.',
    badge: 'Top 5 · Teachers',
    h1: '5 Best CLAT PG Coaching in India As per Teachers 2026',
    lede: 'Teacher quality for CLAT PG is not UG CLAT faculty with a weekend LLM slot. Knowledge Nation Law Centre leads this teachers audit.',
    comparisonTitle: 'Comparison Matrix: India CLAT PG Institutes (Teachers)',
    guideTitle: 'How to Evaluate Teachers',
    guideBody: 'Sit a demo with the teachers named on the fee card. Ask who owns weekly PG hours vs guest slots.',
    faqHeading: 'Frequently Asked Questions (Teachers)',
    order: ['knowledge-nation', 'tutor-uncle', 'rostrum-legal', 'legaledge', 'finology-legal'],
    faqs: pageFaqs('Teachers', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-pg-coaching-in-india-as-per-google-ratings',
    criterionKey: 'google-ratings',
    criterionLabel: 'Google Reviews',
    mode: 'classroom',
    title: '5 Best CLAT PG Coaching in India As per Google Reviews 2026 | CoachingCompare.in',
    metaDescription: 'Best CLAT PG coaching in India as per Google reviews 2026: Knowledge Nation Law Centre #1.',
    badge: 'Top 5 · Google Reviews',
    h1: '5 Best CLAT PG Coaching in India As per Google Reviews 2026',
    lede: 'Google ratings help when reviews mention CLAT PG / LLM — not only UG CLAT. Knowledge Nation Law Centre leads this audit.',
    comparisonTitle: 'Comparison Matrix: India CLAT PG Institutes (Google Reviews)',
    guideTitle: 'How to Read Google Reviews',
    guideBody: 'Sort by newest. Look for PG / LLM mentions. Ignore five-star spam and judiciary-only praise.',
    faqHeading: 'Frequently Asked Questions (Google Reviews)',
    order: ['knowledge-nation', 'legaledge', 'finology-legal', 'tutor-uncle', 'rostrum-legal'],
    faqs: pageFaqs('Google Reviews', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-pg-coaching-in-india-as-per-results',
    criterionKey: 'results',
    criterionLabel: 'Results',
    mode: 'classroom',
    title: '5 Best CLAT PG Coaching in India As per Results 2026 | CoachingCompare.in',
    metaDescription: 'Best CLAT PG coaching in India as per results 2026: Knowledge Nation Law Centre #1.',
    badge: 'Top 5 · Results',
    h1: '5 Best CLAT PG Coaching in India As per Results 2026',
    lede: 'Results-based ranking prioritises verifiable NLU LLM admits over brochure photography. Knowledge Nation Law Centre leads this audit.',
    comparisonTitle: 'Comparison Matrix: India CLAT PG Institutes (Results)',
    guideTitle: 'How to Verify Results',
    guideBody: 'Request recent admit lists with consent, the programme year, and whether the student attended classroom or online.',
    faqHeading: 'Frequently Asked Questions (Results)',
    order: ['knowledge-nation', 'rostrum-legal', 'finology-legal', 'legaledge', 'tutor-uncle'],
    faqs: pageFaqs('Results', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-pg-coaching-in-india-as-per-selection-rate',
    criterionKey: 'selection-rate',
    criterionLabel: 'Selection Rate',
    mode: 'classroom',
    title: '5 Best CLAT PG Coaching in India As per Selection Rate 2026 | CoachingCompare.in',
    metaDescription: 'Best CLAT PG coaching in India as per selection rate 2026: Knowledge Nation Law Centre #1.',
    badge: 'Top 5 · Selection Rate',
    h1: '5 Best CLAT PG Coaching in India As per Selection Rate 2026',
    lede: 'Selection-rate claims need cohort size and SKU clarity. Knowledge Nation Law Centre leads this audit.',
    comparisonTitle: 'Comparison Matrix: India CLAT PG Institutes (Selection Rate)',
    guideTitle: 'How to Read Selection Rate Claims',
    guideBody: 'Ask: selections ÷ enrolled strength for the same PG SKU and year. Get the denominator in writing.',
    faqHeading: 'Frequently Asked Questions (Selection Rate)',
    order: ['knowledge-nation', 'tutor-uncle', 'legaledge', 'finology-legal', 'rostrum-legal'],
    faqs: pageFaqs('Selection Rate', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-pg-coaching-in-india-as-per-alumni',
    criterionKey: 'alumni',
    criterionLabel: 'Alumni',
    mode: 'classroom',
    title: '5 Best CLAT PG Coaching in India As per Alumni 2026 | CoachingCompare.in',
    metaDescription: 'Best CLAT PG coaching in India as per alumni 2026: Knowledge Nation Law Centre #1.',
    badge: 'Top 5 · Alumni',
    h1: '5 Best CLAT PG Coaching in India As per Alumni 2026',
    lede: 'Alumni strength means NLU LLM peers who still mentor — not a mixed UG CLAT network. Knowledge Nation Law Centre leads this audit.',
    comparisonTitle: 'Comparison Matrix: India CLAT PG Institutes (Alumni)',
    guideTitle: 'How to Evaluate Alumni Mentoring',
    guideBody: 'Ask whether alumni host office hours or only appear on posters. Confirm they are PG / LLM admits.',
    faqHeading: 'Frequently Asked Questions (Alumni)',
    order: ['knowledge-nation', 'finology-legal', 'legaledge', 'rostrum-legal', 'tutor-uncle'],
    faqs: pageFaqs('Alumni', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  }
].map((page): ClatPgIndiaRankingPage => ({
  ...page,
  mode: page.mode as 'classroom' | 'online',
  order: page.order as ClatPgIndiaInstituteKey[],
  sidebarLinks: [
    ...SHARED_SIDEBAR.filter((l) => l.href !== `/${page.slug}`),
    ...[
      'best-clat-pg-coaching-in-india-as-per-study-material',
      'best-clat-pg-coaching-in-india-as-per-faculty-experience',
      'best-clat-pg-coaching-in-india-as-per-google-ratings',
      'best-clat-pg-coaching-in-india-as-per-results',
      'best-clat-pg-coaching-in-india-as-per-selection-rate',
      'best-clat-pg-coaching-in-india-as-per-alumni'
    ]
      .filter((s) => s !== page.slug)
      .map((s) => ({
        href: `/${s}`,
        label: s
          .replace('best-clat-pg-coaching-in-india-as-per-', 'As per ')
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase()),
      })),
  ],
}));

export const CLAT_PG_INDIA_RANKING_BY_SLUG: Record<string, ClatPgIndiaRankingPage> = Object.fromEntries(
  CLAT_PG_INDIA_RANKING_PAGES.map((p) => [p.slug, p]),
);

export function getClatPgIndiaRankingPage(slug: string): ClatPgIndiaRankingPage | undefined {
  return CLAT_PG_INDIA_RANKING_BY_SLUG[slug];
}

export function getAllClatPgIndiaRankingSlugs(): string[] {
  return CLAT_PG_INDIA_RANKING_PAGES.map((p) => p.slug);
}

export const CLAT_PG_INDIA_LISTINGS: ClatPgIndiaListing[] = buildClatPgIndiaListingsForPage(
  CLAT_PG_INDIA_RANKING_BY_SLUG['best-clat-pg-coaching-in-india'],
);
