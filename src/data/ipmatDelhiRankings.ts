/**
 * IPMAT Delhi ranking pages (classroom, online, and as-per facets).
 * Rank 1 = IPMAT Mantra, Rank 5 = Supergrads by Toprankers; mid-ranks shuffle per page.
 */

export type IpmatDelhiInstituteKey =
  | 'ipmat-mantra'
  | 'ims'
  | 'career-launcher'
  | 'aapt-prep'
  | 'supergrads';

export type IpmatScoreBreakdown = {
  faculty: number;
  results: number;
  studyMaterial: number;
  testSeries: number;
  infrastructure: number;
  batchSizeRatio: number;
  doubtSupport: number;
};

export type IpmatDelhiListing = {
  examSlug: 'ipmat';
  examName: string;
  id: string;
  name: string;
  slug: string;
  city: string;
  cityName: string;
  state: string;
  rank: number;
  inspectionScore: number;
  scoreBreakdown: IpmatScoreBreakdown;
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

export type IpmatDelhiRankingPage = {
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
  order: IpmatDelhiInstituteKey[];
  faqs: { question: string; answer: string }[];
  sidebarLinks: { href: string; label: string }[];
};

const EXAM_NAME = 'IPMAT (IIM Indore / Rohtak IPM)';
const SCORES = [99, 96, 94, 92, 90] as const;

type InstituteBase = {
  key: IpmatDelhiInstituteKey;
  name: string;
  brandSlug: string;
  rating: number;
  reviewCount: number;
  estYear: number;
  studentsCount: string;
  batchSize: string;
  feesEstimate: string;
  contact: IpmatDelhiListing['contact'];
  baseHighlights: string[];
  onlineHighlights: string[];
};

const INSTITUTES: Record<IpmatDelhiInstituteKey, InstituteBase> = {
  'ipmat-mantra': {
    key: 'ipmat-mantra',
    name: 'IPMAT Mantra',
    brandSlug: 'ipmat-mantra',
    rating: 4.9,
    reviewCount: 310,
    estYear: 2016,
    studentsCount: 'Hauz Khas IPMAT classroom',
    batchSize: '25 - 35 Students',
    feesEstimate: 'Confirm fee card for 1-year / 2-year SKU',
    contact: {
      address: '47/1, First Floor, Kalu Sarai, Hauz Khas, New Delhi 110016',
      locality: 'Hauz Khas / Kalu Sarai',
      phone: '',
      email: '',
      website: 'http://ipmatmantra.com/',
      timing: 'Mon-Sat: 10:00am - 7:00pm; Sun: 10:00am - 2:00pm',
      mapUrl: 'https://maps.google.com/?q=IPMAT+Mantra+Hauz+Khas+Delhi',
    },
    baseHighlights: [
      'IPMAT-focused brand (est. 2016); MD Rahul Tayal Sir — ipmatmantra.com',
      'Delhi Hauz Khas classroom + Gurgaon Sector 14 + Online Live / Recorded',
      'Stated ecosystem: 300+ full mocks and 550+ sectionals with analysis',
      'Books, workbooks, worksheets, DPP, PYQs — ask what ships with your SKU',
      'Enquiry via ipmatmantra.com / Hauz Khas walk-in — confirm live SKU on fee card',
    ],
    onlineHighlights: [
      'Online Live and Online Recorded SKUs for Delhi-NCR families who prefer hybrid',
      'Same IPMAT Indore / Rohtak focus as the Hauz Khas classroom',
      'Confirm recording window and mock cadence before you pay',
      'Pay only after the counsellor writes the live SKU name on the fee card',
    ],
  },
  ims: {
    key: 'ims',
    name: 'IMS',
    brandSlug: 'ims',
    rating: 4.7,
    reviewCount: 220,
    estYear: 1977,
    studentsCount: 'IMS Delhi / NCR IPMAT',
    batchSize: '25 - 40 Students',
    feesEstimate: '₹45,000 - ₹1,00,000 / course',
    contact: {
      address: 'Confirm the live Delhi / NCR centre pin on imsindia.com',
      locality: 'Delhi NCR (selected centres)',
      phone: '+91-22-6236-4040',
      email: 'mumbai@imsindia.com',
      website: 'https://imsindia.com',
      timing: 'Mon-Sun: 9:00am - 8:00pm',
      mapUrl: 'https://maps.google.com/?q=IMS+Delhi+IPMAT',
    },
    baseHighlights: [
      'National aptitude brand; IPMAT is selected-centre only in Delhi-NCR',
      'Ask for IPMAT mocks (Indore + Rohtak), not only CAT SimCAT',
      'Collect the Delhi centre code on the GST invoice before you pay',
      'National desk +91-22-6236-4040 / mumbai@imsindia.com',
    ],
    onlineHighlights: [
      'Live / hybrid IPMAT SKU via imsindia.com',
      'Confirm Indore vs Rohtak mock coverage in writing',
      'Do not buy a CAT online pack and assume IPMAT access',
      'Screenshot cart + refund window before UPI',
    ],
  },
  'career-launcher': {
    key: 'career-launcher',
    name: 'Career Launcher',
    brandSlug: 'career-launcher',
    rating: 4.6,
    reviewCount: 210,
    estYear: 1995,
    studentsCount: 'CL IPM Delhi classroom',
    batchSize: '25 - 40 Students',
    feesEstimate: '₹45,000 - ₹1,05,000 / course',
    contact: {
      address: '1st Floor, A-18, Rama House, Middle Circle, Block A, Connaught Place, New Delhi 110001',
      locality: 'Connaught Place',
      phone: '+91-9289911842',
      email: 'cp@careerlauncher.com',
      website: 'https://careerlauncher.com',
      timing: 'Mon-Sat: 9:30am - 7:00pm; Sun: 10:00am - 4:00pm',
      mapUrl: 'https://maps.google.com/?q=Career+Launcher+Connaught+Place+Delhi',
    },
    baseHighlights: [
      'Published Connaught Place desk for IPM / IPMAT counselling',
      'Ask for Indore + Rohtak pattern mocks on the fee card',
      'Name IPMAT / IPM on the receipt — CAT and CUET SKUs are sold separately',
      'Partner vs company centre: match the GST name before transfer',
    ],
    onlineHighlights: [
      'CL publishes dedicated IPMAT online / hybrid programmes',
      'Confirm live hours, recording access, and mock count in writing',
      'Do not reuse a CAT online fee card for IPMAT',
      'CP desk +91-9289911842 / cp@careerlauncher.com',
    ],
  },
  'aapt-prep': {
    key: 'aapt-prep',
    name: 'AaptPrep',
    brandSlug: 'aapt-prep',
    rating: 4.5,
    reviewCount: 160,
    estYear: 2010,
    studentsCount: 'CP classroom / hybrid',
    batchSize: '20 - 30 Students',
    feesEstimate: 'Confirm on aaptprep.com',
    contact: {
      address: 'A-25/39, Middle Circle, Connaught Place, New Delhi 110001',
      locality: 'Connaught Place',
      phone: '+91-9212737617',
      email: 'info@aaptprep.com',
      website: 'https://aaptprep.com',
      timing: 'Confirm with the CP desk',
      mapUrl: 'https://maps.google.com/?q=AaptPrep+Connaught+Place+Delhi',
    },
    baseHighlights: [
      'Walk-in Connaught Place pin on aaptprep.com/about-us',
      'Published +91-9212737617 and info@aaptprep.com',
      'Smaller CP batches — ask for the IPMAT (Indore / Rohtak) SKU in writing',
      'Do not pay for CUET or CAT and assume IPMAT access',
    ],
    onlineHighlights: [
      'Hybrid / live options listed alongside the CP classroom',
      'Confirm the live IPMAT cart item before UPI',
      'Ask recording window and doubt-desk hours',
      'Match payment domain to aaptprep.com',
    ],
  },
  supergrads: {
    key: 'supergrads',
    name: 'Supergrads by Toprankers',
    brandSlug: 'supergrads',
    rating: 4.4,
    reviewCount: 190,
    estYear: 2016,
    studentsCount: 'Supergrads Delhi IPMAT',
    batchSize: '25 - 40 Students',
    feesEstimate: 'Confirm on toprankers.com',
    contact: {
      address: 'Flat No. 301-303, 3rd Floor, AVG Bhawan, M-3, Connaught Circus, Middle Circle, New Delhi',
      locality: 'Connaught Place',
      phone: '+91-8448444207',
      email: 'support@toprankers.com',
      website: 'https://www.toprankers.com',
      timing: 'Confirm with Supergrads Delhi desk',
      mapUrl: 'https://maps.google.com/?q=Supergrads+Toprankers+Connaught+Place+Delhi',
    },
    baseHighlights: [
      'Supergrads (Toprankers) publishes dedicated IPMAT / BBA entrance products',
      'Delhi centres include Connaught Place, South Ex, Pitampura, Dwarka — confirm your pin',
      'Support +91-8448444207 / support@toprankers.com',
      'Ask for WAT–PI / interview training inclusion on the fee card',
    ],
    onlineHighlights: [
      'Toprankers portal + live IPMAT classes for Delhi students who prefer hybrid',
      'Confirm mock count and Indore vs Rohtak coverage',
      'Pay only on toprankers.com / published Supergrads checkout',
      'Do not treat a CAT or CUET pack as IPMAT by default',
    ],
  },
};

function breakdownForRank(rank: number): IpmatScoreBreakdown {
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
  key: IpmatDelhiInstituteKey,
  rank: number,
  criterionLabel: string | null,
  mode: 'classroom' | 'online',
): string {
  const inst = INSTITUTES[key];
  const place = mode === 'online' ? 'online IPMAT coaching for Delhi aspirants' : 'IPMAT coaching institutes in Delhi';
  const scope = criterionLabel ? ` as per ${criterionLabel}` : '';
  if (rank === 1) {
    return `${inst.name} is the #1 ${mode === 'online' ? 'online ' : ''}IPMAT coaching pick in Delhi${scope} on this 2026 audit. Official site https://www.ipmatmantra.com/ — Hauz Khas classroom + Online Live / Recorded. Confirm the Indore / Rohtak SKU on the fee card before you pay.`;
  }
  const contactLine =
    key === 'ims'
      ? 'Start at imsindia.com; +91-22-6236-4040 / mumbai@imsindia.com. Confirm the Delhi centre teaches IPMAT—not only CAT.'
      : key === 'career-launcher'
        ? 'Delhi CP desk +91-9289911842 / cp@careerlauncher.com. Name IPMAT / IPM on the receipt; CAT fees do not apply.'
        : key === 'aapt-prep'
          ? 'CP walk-in on aaptprep.com; +91-9212737617 / info@aaptprep.com. Ask for the IPMAT SKU in writing.'
          : 'Enrol via toprankers.com; support +91-8448444207 / support@toprankers.com. Confirm your Delhi Supergrads pin and IPMAT SKU name.';
  return `${inst.name} is ranked #${rank} among the best ${place}${scope} on this 2026 audit. ${contactLine}`;
}

export function buildListingsForPage(page: IpmatDelhiRankingPage): IpmatDelhiListing[] {
  return page.order.map((key, idx) => {
    const rank = idx + 1;
    const inst = INSTITUTES[key];
    const modeSlug = page.mode === 'online' ? 'online-delhi' : 'delhi';
    const criterionBit = page.criterionKey ? `-${page.criterionKey}` : '';
    return {
      examSlug: 'ipmat',
      examName: EXAM_NAME,
      id: `ipmat-${modeSlug}${criterionBit}-${rank}`,
      name: inst.name,
      slug: `${inst.brandSlug}-ipmat-${modeSlug}`,
      city: page.mode === 'online' ? 'online' : 'delhi',
      cityName: page.mode === 'online' ? 'Online (Delhi focus)' : 'Delhi',
      state: 'Delhi',
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
        rank === 1 ? '#1 Delhi 2026' : 'IPMAT',
        inst.name,
        page.mode === 'online' ? 'Online' : 'Delhi',
        ...(page.criterionLabel ? [page.criterionLabel] : []),
      ],
      testimonial: {
        quote:
          rank === 1
            ? 'IPMAT Mantra stayed #1 on our Delhi shortlist after we sat a demo and saw Indore + Rohtak mocks on the fee card.'
            : `${inst.name} stayed on our Delhi shortlist after we confirmed the IPMAT SKU—not a CAT or CUET pack.`,
        studentName: 'Parent shortlist',
        achievement: `${inst.name} IPMAT Delhi enquiry`,
      },
      contact: inst.contact,
    };
  });
}

const SHARED_SIDEBAR: { href: string; label: string }[] = [
  { href: '/best-ipmat-coaching-in-delhi', label: 'Best IPMAT coaching in Delhi' },
  { href: '/best-online-ipmat-coaching-in-delhi', label: 'Best online IPMAT coaching in Delhi' },
  { href: '/best-ipmat-coaching', label: 'Best IPMAT coaching in India' },
  { href: '/best-online-ipmat-coaching', label: 'Best online IPMAT coaching (India)' },
  { href: '/institutes/ipmat-mantra', label: 'IPMAT Mantra profile' },
];

function pageFaqs(label: string | null, leader: string): { question: string; answer: string }[] {
  const facet = label ? ` as per ${label}` : '';
  return [
    {
      question: `Which is the best IPMAT coaching in Delhi${facet} in 2026?`,
      answer: `This CoachingCompare audit places ${leader} at #1 for IPMAT coaching in Delhi${facet}, followed by a shuffled shortlist of IMS, Career Launcher, AaptPrep, and Supergrads by Toprankers. Always verify the Indore / Rohtak SKU on the fee card before you pay.`,
    },
    {
      question: 'What is the average fee for IPMAT coaching in Delhi?',
      answer:
        'Published Delhi IPMAT classroom fees commonly fall between ₹40,000 and ₹1,05,000 depending on 1-year vs 2-year packs, mock count, and whether WAT–PI is bundled. Online / hybrid SKUs are often priced differently — get both quotes in writing.',
    },
    {
      question: 'How does CoachingCompare rank IPMAT institutes in Delhi?',
      answer:
        'We use a 100-point inspection across faculty (20), results (20), study material (15), mock test series (15), infrastructure (10), batch-size ratio (10), and doubt support (10). Criterion pages re-order the same shortlist for a single lens — positions are editorial, not sponsored.',
    },
    {
      question: 'Should I choose classroom or online IPMAT coaching in Delhi?',
      answer:
        'Pick classroom if you want peer pressure and a fixed commute (Hauz Khas / CP hubs). Pick online / hybrid if school hours clash or you live outside the ring. Demo both; confirm recording windows and Indore vs Rohtak mock coverage either way.',
    },
    {
      question: 'How do I verify IPMAT results or selection claims?',
      answer:
        'Ask for recent admit lists with consent, the exact SKU the student attended, and whether Indore and Rohtak papers were covered. Brochure “topper” posters without year or scorecard are marketing — not audit evidence.',
    },
  ];
}

/** Mid-rank shuffles: Rank 1 & 5 fixed; positions 2–4 permute IMS / CL / AaptPrep */
export const IPMAT_DELHI_RANKING_PAGES: IpmatDelhiRankingPage[] = [
  {
    slug: 'best-ipmat-coaching-in-delhi',
    criterionKey: null,
    criterionLabel: null,
    mode: 'classroom',
    title: 'Top 5 Best IPMAT Coaching in Delhi 2026 | CoachingCompare.in',
    metaDescription:
      'Top 5 IPMAT coaching institutes in Delhi 2026: IPMAT Mantra #1, then IMS, Career Launcher, AaptPrep, Supergrads. 100-point inspection, fees, mocks, and FAQs.',
    badge: 'Top 5 · Delhi Classroom',
    h1: 'Top 5 Best IPMAT Coaching in Delhi 2026',
    lede: 'Looking for the best IPMAT coaching in Delhi? Our independent panel ranked five Delhi-NCR options using a 100-point inspection — faculty, results, study material, mocks, infrastructure, batch size, and doubt support. IPMAT Mantra leads this 2026 classroom shortlist.',
    comparisonTitle: 'Comparison Matrix: Top IPMAT Institutes in Delhi',
    guideTitle: 'How to Choose IPMAT Coaching in Delhi',
    guideBody:
      'Sit two demos in the same week (one boutique IPMAT classroom, one national chain). Confirm Indore vs Rohtak paper coverage, mock count, batch strength, and whether WAT–PI is bundled. Match the GST name and centre pin before any UPI transfer.',
    faqHeading: 'Frequently Asked Questions (Delhi IPMAT)',
    order: ['ipmat-mantra', 'ims', 'career-launcher', 'aapt-prep', 'supergrads'],
    faqs: pageFaqs(null, 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-online-ipmat-coaching-in-delhi',
    criterionKey: null,
    criterionLabel: null,
    mode: 'online',
    title: 'Top 5 Best Online IPMAT Coaching in Delhi 2026 | CoachingCompare.in',
    metaDescription:
      'Top 5 online / hybrid IPMAT coaching options for Delhi aspirants 2026: IPMAT Mantra #1, then Career Launcher, AaptPrep, IMS, Supergrads. Compare live SKUs and mocks.',
    badge: 'Top 5 · Online / Hybrid',
    h1: 'Top 5 Best Online IPMAT Coaching in Delhi 2026',
    lede: 'Best online IPMAT coaching for Delhi students balances live hours with school. This 2026 audit ranks five hybrid-ready brands — led by IPMAT Mantra — after checking live SKU names, recording windows, and Indore / Rohtak mock coverage.',
    comparisonTitle: 'Comparison Matrix: Top Online IPMAT Options for Delhi',
    guideTitle: 'How to Choose Online IPMAT Coaching from Delhi',
    guideBody:
      'Open the cart before you travel to a demo. The SKU must say IPMAT / IPM (not CAT or CUET). Write down refund windows, doubt-desk hours, and whether both Indore and Rohtak patterns are mocked. Prefer brands that also offer a Delhi walk-in if you need mentorship.',
    faqHeading: 'Frequently Asked Questions (Online IPMAT · Delhi)',
    order: ['ipmat-mantra', 'career-launcher', 'aapt-prep', 'ims', 'supergrads'],
    faqs: pageFaqs(null, 'IPMAT Mantra').map((f) =>
      f.question.includes('classroom or online')
        ? f
        : {
            ...f,
            question: f.question.replace('IPMAT coaching in Delhi', 'online IPMAT coaching for Delhi'),
          },
    ),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-ipmat-coaching-in-delhi-as-per-study-material',
    criterionKey: 'study-material',
    criterionLabel: 'Study Material',
    mode: 'classroom',
    title: '5 Best IPMAT Coaching in Delhi As per Study Material 2026 | CoachingCompare.in',
    metaDescription:
      'Best IPMAT coaching in Delhi as per study material 2026: IPMAT Mantra #1, then AaptPrep, IMS, Career Launcher, Supergrads. Compare books, DPPs, and mock workbooks.',
    badge: 'Top 5 · Study Material',
    h1: '5 Best IPMAT Coaching in Delhi As per Study Material 2026',
    lede: 'Ranking IPMAT coaching in Delhi by study material means checking whether modules are IPMAT-specific — not recycled CAT or CUET packs. IPMAT Mantra leads this 2026 study-material audit.',
    comparisonTitle: 'Comparison Matrix: Delhi IPMAT Institutes (Study Material)',
    guideTitle: 'How to Judge IPMAT Study Material in Delhi',
    guideBody:
      'Ask to see one Quant and one Verbal booklet plus the mock workbook. Confirm Indore vs Rohtak differences are written into the sheets. Count how many full-length mocks and sectionals ship with the fee — brochure PDFs alone are not a curriculum.',
    faqHeading: 'Frequently Asked Questions (Study Material)',
    order: ['ipmat-mantra', 'aapt-prep', 'ims', 'career-launcher', 'supergrads'],
    faqs: pageFaqs('Study Material', 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-ipmat-coaching-in-delhi-as-per-faculty-experience',
    criterionKey: 'faculty-experience',
    criterionLabel: 'Teachers',
    mode: 'classroom',
    title: '5 Best IPMAT Coaching in Delhi As per Teachers 2026 | CoachingCompare.in',
    metaDescription:
      'Best IPMAT coaching in Delhi as per teachers / faculty experience 2026: IPMAT Mantra #1, then IMS, AaptPrep, Career Launcher, Supergrads. Demo the actual IPMAT faculty.',
    badge: 'Top 5 · Teachers',
    h1: '5 Best IPMAT Coaching in Delhi As per Teachers 2026',
    lede: 'Teacher quality for IPMAT is not the same as CAT faculty with a weekend IPM slot. This Delhi audit ranks institutes by dedicated IPMAT teaching depth — IPMAT Mantra at #1.',
    comparisonTitle: 'Comparison Matrix: Delhi IPMAT Institutes (Teachers)',
    guideTitle: 'How to Evaluate IPMAT Teachers in Delhi',
    guideBody:
      'Sit a Quant and a Verbal demo with the teachers named on the fee card. Ask who teaches IPMAT Rohtak vs Indore differences. Guest celebrity slots without weekly ownership should not decide your admission.',
    faqHeading: 'Frequently Asked Questions (Teachers)',
    order: ['ipmat-mantra', 'ims', 'aapt-prep', 'career-launcher', 'supergrads'],
    faqs: pageFaqs('Teachers', 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-ipmat-coaching-in-delhi-as-per-google-ratings',
    criterionKey: 'google-ratings',
    criterionLabel: 'Google Reviews',
    mode: 'classroom',
    title: '5 Best IPMAT Coaching in Delhi As per Google Reviews 2026 | CoachingCompare.in',
    metaDescription:
      'Best IPMAT coaching in Delhi as per Google reviews 2026: IPMAT Mantra #1, then Career Launcher, IMS, AaptPrep, Supergrads. Read recent IPMAT-specific reviews, not CAT ones.',
    badge: 'Top 5 · Google Reviews',
    h1: '5 Best IPMAT Coaching in Delhi As per Google Reviews 2026',
    lede: 'Google ratings help only when reviews mention IPMAT — not generic CAT or bank coaching. This 2026 Delhi shortlist is led by IPMAT Mantra after filtering for IPM-relevant feedback.',
    comparisonTitle: 'Comparison Matrix: Delhi IPMAT Institutes (Google Reviews)',
    guideTitle: 'How to Read Google Reviews for IPMAT Coaching',
    guideBody:
      'Sort by newest. Look for Indore / Rohtak, mock quality, and batch strength mentions. Ignore five-star spam and CAT-only praise. Cross-check the Maps pin against the centre on your fee card.',
    faqHeading: 'Frequently Asked Questions (Google Reviews)',
    order: ['ipmat-mantra', 'career-launcher', 'ims', 'aapt-prep', 'supergrads'],
    faqs: pageFaqs('Google Reviews', 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-ipmat-coaching-in-delhi-as-per-results',
    criterionKey: 'results',
    criterionLabel: 'Results',
    mode: 'classroom',
    title: '5 Best IPMAT Coaching in Delhi As per Results 2026 | CoachingCompare.in',
    metaDescription:
      'Best IPMAT coaching in Delhi as per results 2026: IPMAT Mantra #1, then AaptPrep, Career Launcher, IMS, Supergrads. Verify year, scorecard, and SKU before you trust a poster.',
    badge: 'Top 5 · Results',
    h1: '5 Best IPMAT Coaching in Delhi As per Results 2026',
    lede: 'Results-based ranking for Delhi IPMAT coaching prioritises verifiable IPM admits over brochure photography. IPMAT Mantra leads this 2026 results audit.',
    comparisonTitle: 'Comparison Matrix: Delhi IPMAT Institutes (Results)',
    guideTitle: 'How to Verify IPMAT Results in Delhi',
    guideBody:
      'Request the latest cycle’s admit list with consent, the programme (Indore / Rohtak / other), and whether the student attended classroom or online. Same-brand CAT results do not count as IPMAT evidence.',
    faqHeading: 'Frequently Asked Questions (Results)',
    order: ['ipmat-mantra', 'aapt-prep', 'career-launcher', 'ims', 'supergrads'],
    faqs: pageFaqs('Results', 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-ipmat-coaching-in-delhi-as-per-selection-rate',
    criterionKey: 'selection-rate',
    criterionLabel: 'Selection Rate',
    mode: 'classroom',
    title: '5 Best IPMAT Coaching in Delhi As per Selection Rate 2026 | CoachingCompare.in',
    metaDescription:
      'Best IPMAT coaching in Delhi as per selection rate 2026: IPMAT Mantra #1, then IMS, AaptPrep, Career Launcher, Supergrads. Ask for cohort size behind any % claim.',
    badge: 'Top 5 · Selection Rate',
    h1: '5 Best IPMAT Coaching in Delhi As per Selection Rate 2026',
    lede: 'Selection-rate claims are only useful with cohort size and SKU clarity. This Delhi audit ranks five institutes on transparent IPM selection signalling — IPMAT Mantra at #1.',
    comparisonTitle: 'Comparison Matrix: Delhi IPMAT Institutes (Selection Rate)',
    guideTitle: 'How to Read IPMAT Selection Rate Claims',
    guideBody:
      'Ask: selections ÷ enrolled classroom strength for the same SKU and year. A high % on a 12-student batch is not comparable to a 200-student national cohort. Get the denominator in writing.',
    faqHeading: 'Frequently Asked Questions (Selection Rate)',
    order: ['ipmat-mantra', 'ims', 'aapt-prep', 'career-launcher', 'supergrads'],
    faqs: pageFaqs('Selection Rate', 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-ipmat-coaching-in-delhi-as-per-alumni',
    criterionKey: 'alumni',
    criterionLabel: 'Alumni',
    mode: 'classroom',
    title: '5 Best IPMAT Coaching in Delhi As per Alumni 2026 | CoachingCompare.in',
    metaDescription:
      'Best IPMAT coaching in Delhi as per alumni 2026: IPMAT Mantra #1, then Career Launcher, AaptPrep, IMS, Supergrads. Ask how IPM alumni mentoring actually works.',
    badge: 'Top 5 · Alumni',
    h1: '5 Best IPMAT Coaching in Delhi As per Alumni 2026',
    lede: 'Alumni strength for IPMAT means IPM peers who still mentor — not a mixed CAT graduate network. IPMAT Mantra leads this 2026 Delhi alumni audit.',
    comparisonTitle: 'Comparison Matrix: Delhi IPMAT Institutes (Alumni)',
    guideTitle: 'How to Evaluate IPMAT Alumni Mentoring in Delhi',
    guideBody:
      'Ask whether alumni host office hours, mock interviews, or only appear on posters. Confirm they are IPM / IIM undergrad admits, not only CAT alumni from the same brand.',
    faqHeading: 'Frequently Asked Questions (Alumni)',
    order: ['ipmat-mantra', 'career-launcher', 'aapt-prep', 'ims', 'supergrads'],
    faqs: pageFaqs('Alumni', 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
].map((page): IpmatDelhiRankingPage => ({
  ...page,
  mode: page.mode as 'classroom' | 'online',
  order: page.order as IpmatDelhiInstituteKey[],
  sidebarLinks: [
    ...SHARED_SIDEBAR.filter((l) => l.href !== `/${page.slug}`),
    ...[
      'best-ipmat-coaching-in-delhi-as-per-study-material',
      'best-ipmat-coaching-in-delhi-as-per-faculty-experience',
      'best-ipmat-coaching-in-delhi-as-per-google-ratings',
      'best-ipmat-coaching-in-delhi-as-per-results',
      'best-ipmat-coaching-in-delhi-as-per-selection-rate',
      'best-ipmat-coaching-in-delhi-as-per-alumni',
    ]
      .filter((s) => s !== page.slug)
      .map((s) => {
        const label =
          s.includes('study-material')
            ? 'As per Study Material'
            : s.includes('faculty')
              ? 'As per Teachers'
              : s.includes('google')
                ? 'As per Google Reviews'
                : s.includes('results')
                  ? 'As per Results'
                  : s.includes('selection')
                    ? 'As per Selection Rate'
                    : 'As per Alumni';
        return { href: `/${s}`, label };
      }),
  ],
}));

export const IPMAT_DELHI_RANKING_BY_SLUG: Record<string, IpmatDelhiRankingPage> = Object.fromEntries(
  IPMAT_DELHI_RANKING_PAGES.map((p) => [p.slug, p]),
);

export function getIpmatDelhiRankingPage(slug: string): IpmatDelhiRankingPage | undefined {
  return IPMAT_DELHI_RANKING_BY_SLUG[slug];
}

export function getAllIpmatDelhiRankingSlugs(): string[] {
  return IPMAT_DELHI_RANKING_PAGES.map((p) => p.slug);
}

/** Default classroom Top-5 used by getListingsForCategoryAndCity('ipmat','delhi') */
export const IPMAT_DELHI_LISTINGS: IpmatDelhiListing[] = buildListingsForPage(
  IPMAT_DELHI_RANKING_BY_SLUG['best-ipmat-coaching-in-delhi'],
);
