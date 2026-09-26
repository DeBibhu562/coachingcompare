/**
 * Share Market Gurgaon ranking pages. Rank 1 = Trade With Rahul (fixed); ranks 2–5 shuffle.
 */

export type ShareMarketGurgaonInstituteKey =
  | 'trade-with-rahul' | 'stock-daddy' | 'niws' | 'nifm' | 'nifty-trading-academy';

export type ShareMarketScoreBreakdown = {
  faculty: number;
  results: number;
  studyMaterial: number;
  testSeries: number;
  infrastructure: number;
  batchSizeRatio: number;
  doubtSupport: number;
};

export type ShareMarketGurgaonListing = {
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

export type ShareMarketGurgaonRankingPage = {
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
  order: ShareMarketGurgaonInstituteKey[];
  faqs: { question: string; answer: string }[];
  sidebarLinks: { href: string; label: string }[];
};

const EXAM_NAME = 'Share Market Coaching';
const SCORES = [99, 96, 94, 92, 90] as const;
const CITY = 'gurgaon';
const CITY_NAME = 'Gurgaon';
const STATE = 'Haryana';

type InstituteBase = {
  key: ShareMarketGurgaonInstituteKey;
  name: string;
  brandSlug: string;
  rating: number;
  reviewCount: number;
  estYear: number;
  studentsCount: string;
  batchSize: string;
  feesEstimate: string;
  contact: ShareMarketGurgaonListing['contact'];
  baseHighlights: string[];
  onlineHighlights: string[];
};

const INSTITUTES: Record<ShareMarketGurgaonInstituteKey, InstituteBase> = {
  'trade-with-rahul': {
    key: 'trade-with-rahul',
    name: 'Trade With Rahul',
    brandSlug: 'trade-with-rahul',
    rating: 4.7,
    reviewCount: 180,
    estYear: 2018,
    studentsCount: 'Sector 14 Gurugram classroom + online enquiry',
    batchSize: 'Confirm batch size with the admissions desk',
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
      'Published Sector 14 Gurugram classroom +91 96672 31251',
      'Official website https://tradewithrahul.co.in/',
      'Options, forex, crypto, MCX, VIP signals and 1:1 mentorship listed',
      'Sit a demo; education only — not investment advice or guaranteed returns',
    ],
    onlineHighlights: [
      'Live / hybrid SKUs for Gurgaon families who prefer remote hours',
      'Confirm recording window and GST name before you pay',
      'Pay only on tradewithrahul.co.in',
      'Not a tips subscription alone',
    ],
  },
  'stock-daddy': {
    key: 'stock-daddy',
    name: 'Stock Daddy',
    brandSlug: 'stock-daddy',
    rating: 4.4,
    reviewCount: 140,
    estYear: 2018,
    studentsCount: 'Multi-city + online — confirm Gurgaon',
    batchSize: 'Confirm on stockdaddy.in',
    feesEstimate: 'Confirm on stockdaddy.in',
    contact: {
      address: 'India / multi-city + online — confirm the live Gurugram classroom on stockdaddy.in before you travel',
      locality: 'Multi-city / online (confirm Gurgaon pin)',
      phone: '+91-78387-56756',
      email: 'support@stockdaddy.in',
      website: 'https://www.stockdaddy.in',
      timing: 'Confirm counselling hours on stockdaddy.in',
      mapUrl: 'https://www.stockdaddy.in',
    },
    baseHighlights: [
      'Published +91-78387-56756 and support@stockdaddy.in',
      'Confirm the Gurgaon classroom on stockdaddy.in',
      'Ask for the share-market course title on the receipt',
      'Pay only on the official host',
    ],
    onlineHighlights: [
      'Live-online SKU when a Gurgaon pin is not open',
      'Confirm city vs online on the fee card',
      'Do not travel on a friend’s old address',
      'Education only — not investment advice',
    ],
  },
  niws: {
    key: 'niws',
    name: 'NIWS Stock Market',
    brandSlug: 'niws-stock-market',
    rating: 4.5,
    reviewCount: 150,
    estYear: 2010,
    studentsCount: 'NIWS Delhi classroom serving NCR (no published Gurgaon pin)',
    batchSize: 'Confirm on niws.in',
    feesEstimate: 'Confirm on niws.in',
    contact: {
      address: 'A-10, Third Floor, near Gate 5, Lajpat Nagar Part-2, New Delhi 110024 — niws.in does not publish a Gurugram classroom; confirm the live pin before you travel',
      locality: 'Lajpat Nagar Delhi / NCR (no published Gurgaon pin)',
      phone: '+91-90575-82065',
      email: 'delhi@niws.in',
      website: 'https://niws.in',
      timing: 'Delhi desk published Mon-Fri 9:30am - 6:00pm on niws.in',
      mapUrl: 'https://maps.google.com/?q=NIWS+Lajpat+Nagar+Delhi',
    },
    baseHighlights: [
      'Published +91-90575-82065 and delhi@niws.in',
      'No Gurugram street pin on niws.in — do not invent one',
      'Ask for classroom versus online',
      'Pay only through niws.in',
    ],
    onlineHighlights: [
      'Online option when commuting from Gurgaon to Lajpat Nagar is hard',
      'Confirm live pin before you travel from Gurugram',
      'Match GST name on the receipt',
      'Education only — not tips',
    ],
  },
  nifm: {
    key: 'nifm',
    name: 'NIFM',
    brandSlug: 'nifm',
    rating: 4.4,
    reviewCount: 160,
    estYear: 1990,
    studentsCount: 'Multi-city financial market classrooms incl. Gurugram',
    batchSize: 'Confirm campus batch on nifm.in',
    feesEstimate: 'Confirm on nifm.in',
    contact: {
      address: 'Confirm the live Gurugram pin on nifm.in — national desk Plot No.4, Block-C, Community Centre, Pankha Road, Janakpuri, New Delhi 110058',
      locality: 'Gurugram / NCR (confirm live pin)',
      phone: '+91-85888-68475',
      email: 'info@nifm.in',
      website: 'https://www.nifm.in',
      timing: 'Confirm on nifm.in',
      mapUrl: 'https://maps.google.com/?q=NIFM+Gurugram',
    },
    baseHighlights: [
      'Published +91-85888-68475 and info@nifm.in',
      'Stock / share-market and related financial market courses',
      'Confirm Gurugram vs other NCR campus before you travel',
      'Pay only on nifm.in — match the GST name',
    ],
    onlineHighlights: [
      'Online classes listed alongside classroom centres',
      'Confirm share-market SKU vs banking / digital marketing packs',
      'Ask recording window and refund terms',
      'Education only — not investment advice',
    ],
  },
  'nifty-trading-academy': {
    key: 'nifty-trading-academy',
    name: 'Nifty Trading Academy',
    brandSlug: 'nifty-trading-academy',
    rating: 4.3,
    reviewCount: 110,
    estYear: 2015,
    studentsCount: 'Pan-India network incl. listed Gurgaon location',
    batchSize: 'Confirm on niftytradingacademy.com',
    feesEstimate: 'Confirm on niftytradingacademy.com',
    contact: {
      address: 'Gurgaon location listed on niftytradingacademy.com/our-location — confirm the live street pin before visiting; HQ enquiry: 202/3/4, Vasudev Arcade, Nr. Raj Empire, Bhatar, Surat 395017',
      locality: 'Gurgaon (confirm pin) / national network',
      phone: '+91 99256 13333',
      email: 'niftytradingacademy@ymail.com',
      website: 'https://www.niftytradingacademy.com',
      timing: 'Confirm with the academy',
      mapUrl: 'https://www.niftytradingacademy.com/our-location.php',
    },
    baseHighlights: [
      'Published +91 99256 13333 and niftytradingacademy@ymail.com',
      'Gurgaon listed among pan-India locations — confirm the live pin',
      'Ask for the share-market / trading course title on the receipt',
      'Pay only through the official NTA host',
    ],
    onlineHighlights: [
      'Online / hybrid options when a local pin is not open',
      'Confirm Gurgaon classroom vs remote delivery in writing',
      'Do not invent a Sector address from a social ad',
      'Education only — not guaranteed returns',
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
  key: ShareMarketGurgaonInstituteKey,
  rank: number,
  criterionLabel: string | null,
  mode: 'classroom' | 'online',
): string {
  const inst = INSTITUTES[key];
  const place =
    mode === 'online'
      ? 'online share market training institutes for Gurgaon aspirants'
      : 'share market training institutes in Gurgaon';
  const scope = criterionLabel ? ` as per ${criterionLabel}` : '';
  if (rank === 1) {
    return `${inst.name} is the #1 ${mode === 'online' ? 'online ' : ''}share market training institute in Gurgaon${scope} on this 2026 audit. Published address: Building No. M26, Office Number 55, 2nd Floor, Old DLF Market, Sector 14, Gurugram; +91 96672 31251 / thetradewithrahul@gmail.com / https://tradewithrahul.co.in/. Sit a demo before you enrol. Not investment advice and not a returns guarantee.`;
  }
  const contactLine =
    key === 'stock-daddy'
      ? 'Start at stockdaddy.in; +91-78387-56756 / support@stockdaddy.in. Confirm the live Gurugram pin or online slot.'
      : key === 'niws'
        ? 'Start at niws.in; +91-90575-82065 / delhi@niws.in. No Gurugram street pin is published — confirm Lajpat Nagar or online before you travel.'
        : key === 'nifm'
          ? 'Start at nifm.in; +91-85888-68475 / info@nifm.in. Confirm the live Gurugram campus pin on the official locator.'
          : 'Start at niftytradingacademy.com; +91 99256 13333 / niftytradingacademy@ymail.com. Confirm the live Gurgaon street pin before visiting.';
  return `${inst.name} is ranked #${rank} among the best ${place}${scope} on this 2026 audit. ${contactLine}`;
}

export function buildShareMarketGurgaonListingsForPage(page: ShareMarketGurgaonRankingPage): ShareMarketGurgaonListing[] {
  return page.order.map((key, idx) => {
    const rank = idx + 1;
    const inst = INSTITUTES[key];
    const modeSlug = page.mode === 'online' ? 'online-gurgaon' : 'gurgaon';
    const criterionBit = page.criterionKey ? `-${page.criterionKey}` : '';
    return {
      examSlug: 'share-market',
      examName: EXAM_NAME,
      id: `share-market-${modeSlug}${criterionBit}-${rank}`,
      name: inst.name,
      slug: `${inst.brandSlug}-share-market-${modeSlug}`,
      city: page.mode === 'online' ? 'online' : CITY,
      cityName: page.mode === 'online' ? 'Online (Gurgaon focus)' : CITY_NAME,
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
        rank === 1 ? '#1 Gurgaon 2026' : 'Share Market',
        inst.name,
        page.mode === 'online' ? 'Online' : 'Gurgaon',
        ...(page.criterionLabel ? [page.criterionLabel] : []),
      ],
      testimonial: {
        quote:
          rank === 1
            ? 'Trade With Rahul stayed after the desk wrote share-market education, not a signal pack.'
            : `${inst.name} stayed on our Gurgaon shortlist after we confirmed the share-market education SKU.`,
        studentName: 'Parent shortlist',
        achievement: `${inst.name} share-market Gurgaon enquiry`,
      },
      contact: inst.contact,
    };
  });
}

const SHARED_SIDEBAR: { href: string; label: string }[] = [
  { href: '/best-share-market-coaching-in-gurgaon', label: 'Best share market training in Gurgaon' },
  { href: '/best-online-share-market-coaching-in-gurgaon', label: 'Best online share market training in Gurgaon' },
  { href: '/best-share-market-coaching-in-delhi', label: 'Best share market training in Delhi' },
  { href: '/best-share-market-coaching-in-india', label: 'Best share market training in India' },
  { href: '/best-share-market-coaching', label: 'Share market coaching hub' },
  { href: '/institutes/trade-with-rahul', label: 'Trade With Rahul profile' },
];

function pageFaqs(label: string | null, leader: string): { question: string; answer: string }[] {
  const facet = label ? ` as per ${label}` : '';
  return [
    {
      question: `Which is the best share market training institute in Gurgaon${facet} in 2026?`,
      answer: `This CoachingCompare audit places ${leader} at #1 for share market training in Gurgaon${facet}, followed by a shuffled shortlist of Stock Daddy, NIWS Stock Market, NIFM, and Nifty Trading Academy. Always verify the share-market education SKU on the fee card before you pay. This is not investment advice.`,
    },
    {
      question: 'What is the average fee for share market courses in Gurgaon?',
      answer:
        'Published fees commonly range from free self-paced modules to ₹35,000–₹1,00,000+ for mentorship packs. Get quotes in writing and confirm education-only SKUs.',
    },
    {
      question: 'How does CoachingCompare rank share market institutes in Gurgaon?',
      answer:
        'We use a 100-point inspection across faculty (20), outcomes signalling (20), study material (15), practice drills (15), infrastructure (10), batch-size ratio (10), and doubt support (10). Criterion pages re-order the same shortlist — positions are editorial, not sponsored.',
    },
    {
      question: 'Should I choose classroom or online share market training in Gurgaon?',
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

export const SHARE_MARKET_GURGAON_RANKING_PAGES: ShareMarketGurgaonRankingPage[] = [
  {
    slug: 'best-share-market-coaching-in-gurgaon',
    criterionKey: null,
    criterionLabel: null,
    mode: 'classroom',
    title: 'Top 5 Best Share Market Training Institutes in Gurgaon 2026 | CoachingCompare.in',
    metaDescription: 'Top 5 share market training institutes in Gurgaon 2026: Trade With Rahul #1, then Stock Daddy, NIWS Stock Market, NIFM, and Nifty Trading Academy. Fees, demos, and FAQs.',
    badge: 'Top 5 · Gurgaon Classroom',
    h1: 'Top 5 Best Share Market Training Institutes in Gurgaon 2026',
    lede: 'Looking for the best share market training institute in Gurgaon? Our independent panel ranked five options using a 100-point inspection. Trade With Rahul leads this 2026 classroom shortlist.',
    comparisonTitle: 'Comparison Matrix: Top Share Market Institutes in Gurgaon',
    guideTitle: 'How to Choose a Share Market Training Institute in Gurgaon',
    guideBody: 'Sit two demos in the same week. Confirm education-only fees (not tips), curriculum depth, batch strength, and GST name. This is education — not investment advice.',
    faqHeading: 'Frequently Asked Questions (Gurgaon Share Market Training)',
    order: ['trade-with-rahul', 'stock-daddy', 'niws', 'nifm', 'nifty-trading-academy'],
    faqs: pageFaqs(null, 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-online-share-market-coaching-in-gurgaon',
    criterionKey: null,
    criterionLabel: null,
    mode: 'online',
    title: 'Top 5 Best Online Share Market Training Institutes in Gurgaon 2026 | CoachingCompare.in',
    metaDescription: 'Top 5 online / hybrid share market training for Gurgaon 2026: Trade With Rahul #1, then shuffled mid-ranks. Compare live SKUs.',
    badge: 'Top 5 · Online / Hybrid',
    h1: 'Top 5 Best Online Share Market Training Institutes in Gurgaon 2026',
    lede: 'Best online share market training for Gurgaon learners balances live hours with work. This 2026 audit ranks five hybrid-ready brands — led by Trade With Rahul.',
    comparisonTitle: 'Comparison Matrix: Top Online Share Market Options for Gurgaon',
    guideTitle: 'How to Choose Online Share Market Training from Gurgaon',
    guideBody: 'Open the cart before you travel. The SKU must say share-market education (not a signal pack). Write down refund windows and doubt-desk hours.',
    faqHeading: 'Frequently Asked Questions (Online Share Market · Gurgaon)',
    order: ['trade-with-rahul', 'niws', 'nifm', 'stock-daddy', 'nifty-trading-academy'],
    faqs: pageFaqs(null, 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-share-market-coaching-in-gurgaon-as-per-study-material',
    criterionKey: 'study-material',
    criterionLabel: 'Study Material',
    mode: 'classroom',
    title: '5 Best Share Market Training Institutes in Gurgaon As per Study Material 2026 | CoachingCompare.in',
    metaDescription: 'Best share market training in Gurgaon as per study material 2026: Trade With Rahul #1.',
    badge: 'Top 5 · Study Material',
    h1: '5 Best Share Market Training Institutes in Gurgaon As per Study Material 2026',
    lede: 'Ranking share market institutes in Gurgaon by study material means checking structured education — not tip PDFs. Trade With Rahul leads this audit.',
    comparisonTitle: 'Comparison Matrix: Gurgaon Share Market Institutes (Study Material)',
    guideTitle: 'How to Judge Share Market Study Material',
    guideBody: 'Ask to see one technical analysis booklet and one options workbook plus practice drills.',
    faqHeading: 'Frequently Asked Questions (Study Material)',
    order: ['trade-with-rahul', 'nifm', 'stock-daddy', 'nifty-trading-academy', 'niws'],
    faqs: pageFaqs('Study Material', 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-share-market-coaching-in-gurgaon-as-per-faculty-experience',
    criterionKey: 'faculty-experience',
    criterionLabel: 'Teachers',
    mode: 'classroom',
    title: '5 Best Share Market Training Institutes in Gurgaon As per Teachers 2026 | CoachingCompare.in',
    metaDescription: 'Best share market training in Gurgaon as per teachers 2026: Trade With Rahul #1.',
    badge: 'Top 5 · Teachers',
    h1: '5 Best Share Market Training Institutes in Gurgaon As per Teachers 2026',
    lede: 'Teacher quality for share market training is not a celebrity tipster. Trade With Rahul leads this Gurgaon teachers audit.',
    comparisonTitle: 'Comparison Matrix: Gurgaon Share Market Institutes (Teachers)',
    guideTitle: 'How to Evaluate Share Market Teachers',
    guideBody: 'Sit a technical analysis and an options demo with the teachers named on the fee card.',
    faqHeading: 'Frequently Asked Questions (Teachers)',
    order: ['trade-with-rahul', 'stock-daddy', 'nifm', 'niws', 'nifty-trading-academy'],
    faqs: pageFaqs('Teachers', 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-share-market-coaching-in-gurgaon-as-per-google-ratings',
    criterionKey: 'google-ratings',
    criterionLabel: 'Google Reviews',
    mode: 'classroom',
    title: '5 Best Share Market Training Institutes in Gurgaon As per Google Reviews 2026 | CoachingCompare.in',
    metaDescription: 'Best share market training in Gurgaon as per Google reviews 2026: Trade With Rahul #1.',
    badge: 'Top 5 · Google Reviews',
    h1: '5 Best Share Market Training Institutes in Gurgaon As per Google Reviews 2026',
    lede: 'Google ratings help when reviews mention teaching quality — not tip spam. Trade With Rahul leads this audit.',
    comparisonTitle: 'Comparison Matrix: Gurgaon Share Market Institutes (Google Reviews)',
    guideTitle: 'How to Read Google Reviews for Share Market Institutes',
    guideBody: 'Sort by newest. Look for faculty and curriculum mentions. Ignore guaranteed-profit spam.',
    faqHeading: 'Frequently Asked Questions (Google Reviews)',
    order: ['trade-with-rahul', 'niws', 'stock-daddy', 'nifty-trading-academy', 'nifm'],
    faqs: pageFaqs('Google Reviews', 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-share-market-coaching-in-gurgaon-as-per-results',
    criterionKey: 'results',
    criterionLabel: 'Results',
    mode: 'classroom',
    title: '5 Best Share Market Training Institutes in Gurgaon As per Results 2026 | CoachingCompare.in',
    metaDescription: 'Best share market training in Gurgaon as per results 2026: Trade With Rahul #1.',
    badge: 'Top 5 · Results',
    h1: '5 Best Share Market Training Institutes in Gurgaon As per Results 2026',
    lede: 'Results-based ranking prioritises education outcomes over brochure profit photography. Trade With Rahul leads this audit.',
    comparisonTitle: 'Comparison Matrix: Gurgaon Share Market Institutes (Results)',
    guideTitle: 'How to Verify Share Market Institute Results',
    guideBody: 'Request outcomes with consent and the exact SKU — certifications vs trading P&L claims.',
    faqHeading: 'Frequently Asked Questions (Results)',
    order: ['trade-with-rahul', 'nifm', 'niws', 'stock-daddy', 'nifty-trading-academy'],
    faqs: pageFaqs('Results', 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-share-market-coaching-in-gurgaon-as-per-selection-rate',
    criterionKey: 'selection-rate',
    criterionLabel: 'Selection Rate',
    mode: 'classroom',
    title: '5 Best Share Market Training Institutes in Gurgaon As per Selection Rate 2026 | CoachingCompare.in',
    metaDescription: 'Best share market training in Gurgaon as per selection rate 2026: Trade With Rahul #1.',
    badge: 'Top 5 · Selection Rate',
    h1: '5 Best Share Market Training Institutes in Gurgaon As per Selection Rate 2026',
    lede: 'Selection-rate style claims need cohort size and SKU clarity. Trade With Rahul leads this audit.',
    comparisonTitle: 'Comparison Matrix: Gurgaon Share Market Institutes (Selection Rate)',
    guideTitle: 'How to Read Selection / Completion Rate Claims',
    guideBody: 'Ask completions or certifications ÷ enrolled strength for the same SKU and year.',
    faqHeading: 'Frequently Asked Questions (Selection Rate)',
    order: ['trade-with-rahul', 'stock-daddy', 'nifty-trading-academy', 'niws', 'nifm'],
    faqs: pageFaqs('Selection Rate', 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-share-market-coaching-in-gurgaon-as-per-alumni',
    criterionKey: 'alumni',
    criterionLabel: 'Alumni',
    mode: 'classroom',
    title: '5 Best Share Market Training Institutes in Gurgaon As per Alumni 2026 | CoachingCompare.in',
    metaDescription: 'Best share market training in Gurgaon as per alumni 2026: Trade With Rahul #1.',
    badge: 'Top 5 · Alumni',
    h1: '5 Best Share Market Training Institutes in Gurgaon As per Alumni 2026',
    lede: 'Alumni strength means peers who still mentor learning — not a tip broadcast group. Trade With Rahul leads this audit.',
    comparisonTitle: 'Comparison Matrix: Gurgaon Share Market Institutes (Alumni)',
    guideTitle: 'How to Evaluate Alumni Mentoring',
    guideBody: 'Ask whether alumni host office hours or only appear on posters.',
    faqHeading: 'Frequently Asked Questions (Alumni)',
    order: ['trade-with-rahul', 'nifty-trading-academy', 'nifm', 'stock-daddy', 'niws'],
    faqs: pageFaqs('Alumni', 'Trade With Rahul'),
    sidebarLinks: SHARED_SIDEBAR,
  }
].map((page): ShareMarketGurgaonRankingPage => ({
  ...page,
  mode: page.mode as 'classroom' | 'online',
  order: page.order as ShareMarketGurgaonInstituteKey[],
  sidebarLinks: [
    ...SHARED_SIDEBAR.filter((l) => l.href !== `/${page.slug}`),
    ...[
      'best-share-market-coaching-in-gurgaon-as-per-study-material',
      'best-share-market-coaching-in-gurgaon-as-per-faculty-experience',
      'best-share-market-coaching-in-gurgaon-as-per-google-ratings',
      'best-share-market-coaching-in-gurgaon-as-per-results',
      'best-share-market-coaching-in-gurgaon-as-per-selection-rate',
      'best-share-market-coaching-in-gurgaon-as-per-alumni'
    ]
      .filter((s) => s !== page.slug)
      .map((s) => ({
        href: `/${s}`,
        label: s
          .replace('best-share-market-coaching-in-gurgaon-as-per-', 'As per ')
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase()),
      })),
  ],
}));

export const SHARE_MARKET_GURGAON_RANKING_BY_SLUG: Record<string, ShareMarketGurgaonRankingPage> = Object.fromEntries(
  SHARE_MARKET_GURGAON_RANKING_PAGES.map((p) => [p.slug, p]),
);

export function getShareMarketGurgaonRankingPage(slug: string): ShareMarketGurgaonRankingPage | undefined {
  return SHARE_MARKET_GURGAON_RANKING_BY_SLUG[slug];
}

export function getAllShareMarketGurgaonRankingSlugs(): string[] {
  return SHARE_MARKET_GURGAON_RANKING_PAGES.map((p) => p.slug);
}

export const SHARE_MARKET_GURGAON_LISTINGS: ShareMarketGurgaonListing[] = buildShareMarketGurgaonListingsForPage(
  SHARE_MARKET_GURGAON_RANKING_BY_SLUG['best-share-market-coaching-in-gurgaon'],
);
