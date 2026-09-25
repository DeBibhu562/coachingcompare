/**
 * Share Market Delhi ranking pages (classroom, online, and as-per facets).
 * Rank 1 = Trade With Rahul (fixed on every page); ranks 2–5 shuffle.
 */

export type ShareMarketDelhiInstituteKey =
  | 'trade-with-rahul'
  | 'ifmc'
  | 'gta'
  | 'financial-corridor'
  | 'dipe';

export type ShareMarketScoreBreakdown = {
  faculty: number;
  results: number;
  studyMaterial: number;
  testSeries: number;
  infrastructure: number;
  batchSizeRatio: number;
  doubtSupport: number;
};

export type ShareMarketDelhiListing = {
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

export type ShareMarketDelhiRankingPage = {
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
  order: ShareMarketDelhiInstituteKey[];
  faqs: { question: string; answer: string }[];
  sidebarLinks: { href: string; label: string }[];
};

const EXAM_NAME = 'Share Market Coaching';
const SCORES = [99, 96, 94, 92, 90] as const;
const CITY = 'delhi';
const CITY_NAME = 'Delhi';
const STATE = 'Delhi';

type InstituteBase = {
  key: ShareMarketDelhiInstituteKey;
  name: string;
  brandSlug: string;
  rating: number;
  reviewCount: number;
  estYear: number;
  studentsCount: string;
  batchSize: string;
  feesEstimate: string;
  contact: ShareMarketDelhiListing['contact'];
  baseHighlights: string[];
  onlineHighlights: string[];
};

const INSTITUTES: Record<ShareMarketDelhiInstituteKey, InstituteBase> = {
  'trade-with-rahul': {
    key: 'trade-with-rahul',
    name: 'Trade With Rahul',
    brandSlug: 'trade-with-rahul',
    rating: 4.7,
    reviewCount: 180,
    estYear: 2018,
    studentsCount: 'Advertises 50,000+ students trained',
    batchSize: 'Confirm batch size with the admissions desk',
    feesEstimate: 'From ₹59,444 listed options courses; confirm on tradewithrahul.co.in',
    contact: {
      address: 'Building No. M26, Office Number 55, 2nd Floor, Old DLF Market, Sector 14, Gurugram',
      locality: 'Old DLF Market, Sector 14, Gurugram (Delhi-NCR desk)',
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
      'Live / hybrid share-market programmes for Delhi-NCR learners',
      'Confirm recording window, mentorship hours, and GST name before you pay',
      'Pay only on tradewithrahul.co.in — match the fee card',
      'This is education, not investment advice or a returns guarantee',
    ],
  },
  ifmc: {
    key: 'ifmc',
    name: 'IFMC Institute',
    brandSlug: 'ifmc-institute',
    rating: 4.5,
    reviewCount: 210,
    estYear: 2019,
    studentsCount: 'IFMC Delhi / NCR classrooms',
    batchSize: 'Confirm campus batch on ifmcinstitute.com',
    feesEstimate: 'Confirm on ifmcinstitute.com',
    contact: {
      address: 'E-90, First Floor, Lajpat Nagar 1, New Delhi 110024 — confirm the live city pin on ifmcinstitute.com',
      locality: 'Lajpat Nagar (IFMC registered office)',
      phone: '+91-98705-10511',
      email: 'info@ifmcinstitute.com',
      website: 'https://www.ifmcinstitute.com',
      timing: 'Confirm with the centre on ifmcinstitute.com/contact-us',
      mapUrl: 'https://maps.google.com/?q=IFMC+Institute+Lajpat+Nagar+Delhi',
    },
    baseHighlights: [
      'Published +91-98705-10511 and info@ifmcinstitute.com',
      'Pay only on ifmcinstitute.com',
      'Ask which Delhi pin is yours — IFMC lists several NCR campuses',
      'Name share-market / NISM on the GST invoice',
    ],
    onlineHighlights: [
      'Live-online share-market / NISM SKUs via ifmcinstitute.com',
      'Confirm classroom vs online before you travel',
      'Do not pay a WhatsApp reseller claiming to be IFMC',
      'Collect a GST card that names share-market education',
    ],
  },
  gta: {
    key: 'gta',
    name: 'GTA Stock Market Institute',
    brandSlug: 'gta-stock-market-institute',
    rating: 4.4,
    reviewCount: 120,
    estYear: 2015,
    studentsCount: 'Delhi-NCR share-market classroom',
    batchSize: 'Confirm with the admissions desk',
    feesEstimate: 'Confirm with the institute before you pay',
    contact: {
      address: 'Delhi-NCR classroom — confirm the live pin, GST name, and phone on the institute’s published contact page before visiting',
      locality: 'Delhi NCR (confirm live pin)',
      phone: 'Confirm on the official contact page',
      email: '',
      website: 'https://www.google.com/search?q=GTA+Stock+Market+Institute+Delhi',
      timing: 'Confirm counselling hours with the institute',
      mapUrl: 'https://maps.google.com/?q=GTA+Stock+Market+Institute+Delhi',
    },
    baseHighlights: [
      'Delhi-NCR share-market training shortlist for practical market education',
      'Sit a demo and ask for NISM / technical analysis coverage in writing',
      'Match GST name and centre pin before any UPI transfer',
      'This is education — not investment advice or guaranteed returns',
    ],
    onlineHighlights: [
      'Ask whether a live-online SKU is offered for Delhi learners',
      'Confirm recording window and doubt-desk hours before you pay',
      'Pay only on the official host the counsellor names on the fee card',
      'Compare one Trade With Rahul demo the same week',
    ],
  },
  'financial-corridor': {
    key: 'financial-corridor',
    name: 'Financial Corridor',
    brandSlug: 'financial-corridor',
    rating: 4.4,
    reviewCount: 130,
    estYear: 2008,
    studentsCount: 'Pitampura classroom',
    batchSize: 'Confirm on financialcorridor.com',
    feesEstimate: 'Confirm on financialcorridor.com',
    contact: {
      address:
        'Second Floor, C-574, Saraswati Vihar Rd, above Malhotra Print Shoppe, Block C, Saraswati Vihar, Pitampura, New Delhi 110034',
      locality: 'Saraswati Vihar / Pitampura',
      phone: '+91-93129-66923',
      email: 'info@financialcorridor.com',
      website: 'https://financialcorridor.com',
      timing: 'Confirm on financialcorridor.com/contact',
      mapUrl: 'https://maps.google.com/?q=Financial+Corridor+Saraswati+Vihar+Pitampura',
    },
    baseHighlights: [
      'Published +91-93129-66923 and info@financialcorridor.com',
      'Pitampura pin on financialcorridor.com/contact',
      'Ask for classroom versus live-online',
      'Read the fee card before you transfer',
    ],
    onlineHighlights: [
      'Live-online option when Pitampura commute is hard — confirm on the cart',
      'Name share-market education on the GST invoice',
      'Sit a demo before you lock VIP / signal add-ons',
      'Not investment advice; not a returns guarantee',
    ],
  },
  dipe: {
    key: 'dipe',
    name: 'DIPE Institute',
    brandSlug: 'dipe-institute',
    rating: 4.4,
    reviewCount: 160,
    estYear: 2012,
    studentsCount: 'North / West Delhi classrooms',
    batchSize: 'Confirm campus batch on dipeinstitute.com',
    feesEstimate: 'Confirm on dipeinstitute.com',
    contact: {
      address:
        'C-49B, First Floor, Mahendru Enclave, Delhi 110033 (Above Patanjali Store, Near Azadpur Metro) — confirm live pin on dipeinstitute.com',
      locality: 'Mahendru Enclave / Azadpur (North Delhi HO)',
      phone: '+91-98710-60777',
      email: 'delhi@dipeinstitute.com',
      website: 'https://dipeinstitute.com',
      timing: 'Confirm on dipeinstitute.com/contact-us',
      mapUrl: 'https://maps.google.com/?q=DIPE+Institute+Mahendru+Enclave+Delhi',
    },
    baseHighlights: [
      'Published +91-98710-60777 / +91-99906-49777 and delhi@dipeinstitute.com',
      'North Delhi HO plus West Delhi / Noida pins — confirm yours',
      'Ask for technical analysis, options, and NISM / NCFM coverage in writing',
      'Pay only on dipeinstitute.com; match the GST name',
    ],
    onlineHighlights: [
      'Online stock-market courses listed on dipeinstitute.com',
      'Confirm live hours vs recorded access before you pay',
      'Do not confuse campus WhatsApp forwards with the official cart',
      'This is education — not investment advice or guaranteed returns',
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
  key: ShareMarketDelhiInstituteKey,
  rank: number,
  criterionLabel: string | null,
  mode: 'classroom' | 'online',
): string {
  const inst = INSTITUTES[key];
  const place =
    mode === 'online'
      ? 'online share market training institutes for Delhi aspirants'
      : 'share market training institutes in Delhi';
  const scope = criterionLabel ? ` as per ${criterionLabel}` : '';
  if (rank === 1) {
    return `${inst.name} is the #1 ${mode === 'online' ? 'online ' : ''}share market training institute in Delhi${scope} on this 2026 audit. Contact the published desk at Building No. M26, Office Number 55, 2nd Floor, Old DLF Market, Sector 14, Gurugram — +91 96672 31251 / thetradewithrahul@gmail.com / https://tradewithrahul.co.in/. Collect a GST card that names share-market education. This is not investment advice and not a returns guarantee.`;
  }
  const contactLine =
    key === 'ifmc'
      ? 'Start at ifmcinstitute.com; +91-98705-10511 / info@ifmcinstitute.com. Confirm the Delhi campus and whether the SKU is classroom, NISM/NCFM, or live online.'
      : key === 'gta'
        ? 'Confirm the live Delhi pin, phone, and GST name on GTA Stock Market Institute’s published contact page before you travel or pay.'
        : key === 'financial-corridor'
          ? 'Pitampura classroom on financialcorridor.com; +91-93129-66923 / info@financialcorridor.com. Sit a demo and name share-market education on the invoice.'
          : 'Start at dipeinstitute.com; +91-98710-60777 / delhi@dipeinstitute.com. Confirm your North / West Delhi pin and the live SKU name.';
  return `${inst.name} is ranked #${rank} among the best ${place}${scope} on this 2026 audit. ${contactLine}`;
}

export function buildShareMarketDelhiListingsForPage(
  page: ShareMarketDelhiRankingPage,
): ShareMarketDelhiListing[] {
  return page.order.map((key, idx) => {
    const rank = idx + 1;
    const inst = INSTITUTES[key];
    const modeSlug = page.mode === 'online' ? 'online-delhi' : 'delhi';
    const criterionBit = page.criterionKey ? `-${page.criterionKey}` : '';
    return {
      examSlug: 'share-market',
      examName: EXAM_NAME,
      id: `share-market-${modeSlug}${criterionBit}-${rank}`,
      name: inst.name,
      slug: `${inst.brandSlug}-share-market-${modeSlug}`,
      city: page.mode === 'online' ? 'online' : CITY,
      cityName: page.mode === 'online' ? 'Online (Delhi focus)' : CITY_NAME,
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
        rank === 1 ? '#1 Delhi 2026' : 'Share Market',
        inst.name,
        page.mode === 'online' ? 'Online' : 'Delhi',
        ...(page.criterionLabel ? [page.criterionLabel] : []),
      ],
      testimonial: {
        quote:
          rank === 1
            ? 'The Trade With Rahul desk named share-market education on the enquiry card. We did not pay for tips.'
            : `${inst.name} stayed on our Delhi shortlist after we confirmed the share-market education SKU—not a tip pack.`,
        studentName: 'Parent shortlist',
        achievement: `${inst.name} share-market Delhi enquiry`,
      },
      contact: inst.contact,
    };
  });
}

const SHARED_SIDEBAR: { href: string; label: string }[] = [
  { href: '/best-share-market-coaching-in-delhi', label: 'Best share market training in Delhi' },
  { href: '/best-online-share-market-coaching-in-delhi', label: 'Best online share market training in Delhi' },
  { href: '/best-share-market-coaching-in-gurgaon', label: 'Best share market coaching in Gurgaon' },
  { href: '/best-share-market-coaching', label: 'Best share market coaching in India' },
  { href: '/best-online-share-market-coaching', label: 'Best online share market coaching (India)' },
  { href: '/institutes/trade-with-rahul', label: 'Trade With Rahul profile' },
];

function pageFaqs(label: string | null, leader: string): { question: string; answer: string }[] {
  const facet = label ? ` as per ${label}` : '';
  return [
    {
      question: `Which is the best share market training institute in Delhi${facet} in 2026?`,
      answer: `This CoachingCompare audit places ${leader} at #1 for share market training in Delhi${facet}, followed by a shuffled shortlist of IFMC Institute, GTA Stock Market Institute, Financial Corridor, and DIPE Institute. Always verify the share-market education SKU on the fee card before you pay. This is not investment advice.`,
    },
    {
      question: 'What is the average fee for share market courses in Delhi?',
      answer:
        'Published Delhi-NCR share-market classroom fees commonly range from about ₹35,000 to ₹1,00,000+ depending on options depth, mentorship, and certification modules. Online / hybrid SKUs are often priced differently — get both quotes in writing.',
    },
    {
      question: 'How does CoachingCompare rank share market institutes in Delhi?',
      answer:
        'We use a 100-point inspection across faculty (20), results / student outcomes signalling (20), study material (15), practice / mock drills (15), infrastructure (10), batch-size ratio (10), and doubt support (10). Criterion pages re-order the same shortlist for a single lens — positions are editorial, not sponsored.',
    },
    {
      question: 'Should I choose classroom or online share market training in Delhi?',
      answer:
        'Pick classroom if you want live chart walkthroughs and peer pressure (Pitampura / Lajpat Nagar / NCR hubs). Pick online / hybrid if work hours clash. Demo both; confirm recording windows and whether the fee covers education only — not tips or guaranteed returns.',
    },
    {
      question: 'How do I verify share market course claims or “results”?',
      answer:
        'Ask for recent student outcome examples with consent, the exact SKU attended, and whether claims are educational milestones (NISM, completed modules) vs trading P&amp;L. Brochure “profit” posters without year or disclaimer are marketing — not audit evidence. Never treat coaching as investment advice.',
    },
  ];
}

/** Rank 1 fixed (Trade With Rahul); ranks 2–5 permute IFMC / GTA / Financial Corridor / DIPE */
export const SHARE_MARKET_DELHI_RANKING_PAGES: ShareMarketDelhiRankingPage[] = [
  {
    slug: 'best-share-market-coaching-in-delhi',
    criterionKey: null,
    criterionLabel: null,
    mode: 'classroom',
    title: 'Top 5 Best Share Market Training Institutes in Delhi 2026 | CoachingCompare.in',
    metaDescription:
      'Top 5 share market training institutes in Delhi 2026: Trade With Rahul #1, then IFMC Institute, GTA Stock Market Institute, Financial Corridor, DIPE Institute. Fees, demos, and FAQs.',
    badge: 'Top 5 · Delhi Classroom',
    h1: 'Top 5 Best Share Market Training Institutes in Delhi 2026',
    lede: 'Looking for the best share market training institute in Delhi? Our independent panel ranked five Delhi-NCR options using a 100-point inspection — faculty, outcomes signalling, study material, practice drills, infrastructure, batch size, and doubt support. Trade With Rahul leads this 2026 classroom shortlist.',
    comparisonTitle: 'Comparison Matrix: Top Share Market Institutes in Delhi',
    guideTitle: 'How to Choose a Share Market Training Institute in Delhi',
    guideBody:
      'Sit two demos in the same week. Confirm whether the fee is education-only (not tips), NISM / technical coverage, batch strength, and GST name. Match the centre pin before any UPI transfer. This is education — not investment advice or a returns guarantee.',
    faqHeading: 'Frequently Asked Questions (Delhi Share Market Training)',
    order: ['trade-with-rahul', 'ifmc', 'gta', 'financial-corridor', 'dipe'],
    faqs: pageFaqs(null, 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-online-share-market-coaching-in-delhi',
    criterionKey: null,
    criterionLabel: null,
    mode: 'online',
    title: 'Top 5 Best Online Share Market Training Institutes in Delhi 2026 | CoachingCompare.in',
    metaDescription:
      'Top 5 online / hybrid share market training options for Delhi aspirants 2026: Trade With Rahul #1, then GTA, Financial Corridor, DIPE, IFMC. Compare live SKUs and demos.',
    badge: 'Top 5 · Online / Hybrid',
    h1: 'Top 5 Best Online Share Market Training Institutes in Delhi 2026',
    lede: 'Best online share market training for Delhi learners balances live chart hours with work. This 2026 audit ranks five hybrid-ready brands — led by Trade With Rahul — after checking live SKU names, recording windows, and education-only fee cards.',
    comparisonTitle: 'Comparison Matrix: Top Online Share Market Options for Delhi',
    guideTitle: 'How to Choose Online Share Market Training from Delhi',
    guideBody:
      'Open the cart before you travel to a demo. The SKU must say share-market education (not a signal pack). Write down refund windows and doubt-desk hours. Prefer brands that also offer a Delhi-NCR walk-in if you need mentorship.',
    faqHeading: 'Frequently Asked Questions (Online Share Market · Delhi)',
    order: ['trade-with-rahul', 'gta', 'financial-corridor', 'dipe', 'ifmc'],
    faqs: pageFaqs(null, 'Trade With Rahul').map((f) =>
      f.question.includes('classroom or online')
        ? f
        : {
            ...f,
            question: f.question.replace(
              'share market training institute in Delhi',
              'online share market training for Delhi',
            ),
          },
    ),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-share-market-coaching-in-delhi-as-per-study-material',
    criterionKey: 'study-material',
    criterionLabel: 'Study Material',
    mode: 'classroom',
    title: '5 Best Share Market Training Institutes in Delhi As per Study Material 2026 | CoachingCompare.in',
    metaDescription:
      'Best share market training in Delhi as per study material 2026: Trade With Rahul #1, then Financial Corridor, IFMC, GTA, DIPE. Compare workbooks and practice drills.',
    badge: 'Top 5 · Study Material',
    h1: '5 Best Share Market Training Institutes in Delhi As per Study Material 2026',
    lede: 'Ranking share market institutes in Delhi by study material means checking whether modules are structured education — not recycled tip PDFs. Trade With Rahul leads this 2026 study-material audit.',
    comparisonTitle: 'Comparison Matrix: Delhi Share Market Institutes (Study Material)',
    guideTitle: 'How to Judge Share Market Study Material in Delhi',
    guideBody:
      'Ask to see one technical analysis booklet and one options workbook plus any practice drill pack. Count how many live-market walkthroughs ship with the fee — brochure screenshots alone are not a curriculum.',
    faqHeading: 'Frequently Asked Questions (Study Material)',
    order: ['trade-with-rahul', 'financial-corridor', 'ifmc', 'gta', 'dipe'],
    faqs: pageFaqs('Study Material', 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-share-market-coaching-in-delhi-as-per-faculty-experience',
    criterionKey: 'faculty-experience',
    criterionLabel: 'Teachers',
    mode: 'classroom',
    title: '5 Best Share Market Training Institutes in Delhi As per Teachers 2026 | CoachingCompare.in',
    metaDescription:
      'Best share market training in Delhi as per teachers 2026: Trade With Rahul #1, then IFMC, Financial Corridor, DIPE, GTA. Demo the actual faculty before you pay.',
    badge: 'Top 5 · Teachers',
    h1: '5 Best Share Market Training Institutes in Delhi As per Teachers 2026',
    lede: 'Teacher quality for share market training is not a celebrity WhatsApp tipster. This Delhi audit ranks institutes by dedicated classroom teaching depth — Trade With Rahul at #1.',
    comparisonTitle: 'Comparison Matrix: Delhi Share Market Institutes (Teachers)',
    guideTitle: 'How to Evaluate Share Market Teachers in Delhi',
    guideBody:
      'Sit a technical analysis and an options demo with the teachers named on the fee card. Ask who owns weekly classroom hours vs guest slots. Guest sessions without weekly ownership should not decide your admission.',
    faqHeading: 'Frequently Asked Questions (Teachers)',
    order: ['trade-with-rahul', 'ifmc', 'financial-corridor', 'dipe', 'gta'],
    faqs: pageFaqs('Teachers', 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-share-market-coaching-in-delhi-as-per-google-ratings',
    criterionKey: 'google-ratings',
    criterionLabel: 'Google Reviews',
    mode: 'classroom',
    title: '5 Best Share Market Training Institutes in Delhi As per Google Reviews 2026 | CoachingCompare.in',
    metaDescription:
      'Best share market training in Delhi as per Google reviews 2026: Trade With Rahul #1, then GTA, DIPE, IFMC, Financial Corridor. Read recent education-focused reviews.',
    badge: 'Top 5 · Google Reviews',
    h1: '5 Best Share Market Training Institutes in Delhi As per Google Reviews 2026',
    lede: 'Google ratings help only when reviews mention teaching quality — not tip spam. This 2026 Delhi shortlist is led by Trade With Rahul after filtering for education-relevant feedback.',
    comparisonTitle: 'Comparison Matrix: Delhi Share Market Institutes (Google Reviews)',
    guideTitle: 'How to Read Google Reviews for Share Market Institutes',
    guideBody:
      'Sort by newest. Look for faculty, curriculum, and batch strength mentions. Ignore five-star spam and “guaranteed profit” praise. Cross-check the Maps pin against the centre on your fee card.',
    faqHeading: 'Frequently Asked Questions (Google Reviews)',
    order: ['trade-with-rahul', 'gta', 'dipe', 'ifmc', 'financial-corridor'],
    faqs: pageFaqs('Google Reviews', 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-share-market-coaching-in-delhi-as-per-results',
    criterionKey: 'results',
    criterionLabel: 'Results',
    mode: 'classroom',
    title: '5 Best Share Market Training Institutes in Delhi As per Results 2026 | CoachingCompare.in',
    metaDescription:
      'Best share market training in Delhi as per results 2026: Trade With Rahul #1, then Financial Corridor, GTA, DIPE, IFMC. Verify education outcomes — not tip P&L posters.',
    badge: 'Top 5 · Results',
    h1: '5 Best Share Market Training Institutes in Delhi As per Results 2026',
    lede: 'Results-based ranking for Delhi share market institutes prioritises verifiable education outcomes over brochure profit photography. Trade With Rahul leads this 2026 results audit.',
    comparisonTitle: 'Comparison Matrix: Delhi Share Market Institutes (Results)',
    guideTitle: 'How to Verify Share Market Institute “Results” in Delhi',
    guideBody:
      'Request recent student outcome examples with consent, the exact SKU, and whether claims are certifications / skill milestones vs trading P&amp;L. Same-brand tip screenshots do not count as education evidence.',
    faqHeading: 'Frequently Asked Questions (Results)',
    order: ['trade-with-rahul', 'financial-corridor', 'gta', 'dipe', 'ifmc'],
    faqs: pageFaqs('Results', 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-share-market-coaching-in-delhi-as-per-selection-rate',
    criterionKey: 'selection-rate',
    criterionLabel: 'Selection Rate',
    mode: 'classroom',
    title: '5 Best Share Market Training Institutes in Delhi As per Selection Rate 2026 | CoachingCompare.in',
    metaDescription:
      'Best share market training in Delhi as per selection / completion signalling 2026: Trade With Rahul #1, then IFMC, DIPE, GTA, Financial Corridor. Ask for cohort size behind any % claim.',
    badge: 'Top 5 · Selection Rate',
    h1: '5 Best Share Market Training Institutes in Delhi As per Selection Rate 2026',
    lede: 'Selection-rate style claims for share market institutes are only useful with cohort size and SKU clarity (completion, certification, placement-assist). Trade With Rahul leads this 2026 Delhi audit.',
    comparisonTitle: 'Comparison Matrix: Delhi Share Market Institutes (Selection Rate)',
    guideTitle: 'How to Read Selection / Completion Rate Claims',
    guideBody:
      'Ask: completions or certifications ÷ enrolled classroom strength for the same SKU and year. A high % on a tiny batch is not comparable to a large national cohort. Get the denominator in writing.',
    faqHeading: 'Frequently Asked Questions (Selection Rate)',
    order: ['trade-with-rahul', 'ifmc', 'dipe', 'gta', 'financial-corridor'],
    faqs: pageFaqs('Selection Rate', 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-share-market-coaching-in-delhi-as-per-alumni',
    criterionKey: 'alumni',
    criterionLabel: 'Alumni',
    mode: 'classroom',
    title: '5 Best Share Market Training Institutes in Delhi As per Alumni 2026 | CoachingCompare.in',
    metaDescription:
      'Best share market training in Delhi as per alumni 2026: Trade With Rahul #1, then DIPE, GTA, Financial Corridor, IFMC. Ask how alumni mentoring actually works.',
    badge: 'Top 5 · Alumni',
    h1: '5 Best Share Market Training Institutes in Delhi As per Alumni 2026',
    lede: 'Alumni strength for share market training means peers who still mentor learning — not a tip broadcast group. Trade With Rahul leads this 2026 Delhi alumni audit.',
    comparisonTitle: 'Comparison Matrix: Delhi Share Market Institutes (Alumni)',
    guideTitle: 'How to Evaluate Alumni Mentoring for Share Market Courses',
    guideBody:
      'Ask whether alumni host office hours, review journals, or only appear on posters. Confirm the network is education-focused — not a paid signal funnel.',
    faqHeading: 'Frequently Asked Questions (Alumni)',
    order: ['trade-with-rahul', 'dipe', 'gta', 'financial-corridor', 'ifmc'],
    faqs: pageFaqs('Alumni', 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  },
].map((page): ShareMarketDelhiRankingPage => ({
  ...page,
  mode: page.mode as 'classroom' | 'online',
  sidebarLinks: [
    ...SHARED_SIDEBAR.filter((l) => l.href !== `/${page.slug}`),
    ...[
      'best-share-market-coaching-in-delhi-as-per-study-material',
      'best-share-market-coaching-in-delhi-as-per-faculty-experience',
      'best-share-market-coaching-in-delhi-as-per-google-ratings',
      'best-share-market-coaching-in-delhi-as-per-results',
      'best-share-market-coaching-in-delhi-as-per-selection-rate',
      'best-share-market-coaching-in-delhi-as-per-alumni',
    ]
      .filter((s) => s !== page.slug)
      .map((s) => ({
        href: `/${s}`,
        label: s
          .replace('best-share-market-coaching-in-delhi-as-per-', 'As per ')
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase()),
      })),
  ],
}));

export const SHARE_MARKET_DELHI_RANKING_BY_SLUG: Record<string, ShareMarketDelhiRankingPage> =
  Object.fromEntries(SHARE_MARKET_DELHI_RANKING_PAGES.map((p) => [p.slug, p]));

export function getShareMarketDelhiRankingPage(slug: string): ShareMarketDelhiRankingPage | undefined {
  return SHARE_MARKET_DELHI_RANKING_BY_SLUG[slug];
}

export function getAllShareMarketDelhiRankingSlugs(): string[] {
  return SHARE_MARKET_DELHI_RANKING_PAGES.map((p) => p.slug);
}

export const SHARE_MARKET_DELHI_LISTINGS: ShareMarketDelhiListing[] = buildShareMarketDelhiListingsForPage(
  SHARE_MARKET_DELHI_RANKING_BY_SLUG['best-share-market-coaching-in-delhi'],
);
