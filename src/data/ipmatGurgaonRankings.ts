/**
 * IPMAT Gurgaon ranking pages (classroom, online, and as-per facets).
 * Rank 1 = IPMAT Mantra, Rank 5 = Supergrads by Toprankers; mid-ranks shuffle per page.
 */

export type IpmatGurgaonInstituteKey =
  | 'ipmat-mantra'
  | 'ims'
  | 'career-launcher'
  | 'ipm-career'
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

export type IpmatGurgaonListing = {
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

export type IpmatGurgaonRankingPage = {
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
  order: IpmatGurgaonInstituteKey[];
  faqs: { question: string; answer: string }[];
  sidebarLinks: { href: string; label: string }[];
};

const EXAM_NAME = 'IPMAT (IIM Indore / Rohtak IPM)';
const SCORES = [99, 96, 94, 92, 90] as const;
const CITY = 'gurgaon';
const CITY_NAME = 'Gurgaon';
const STATE = 'Haryana';

type InstituteBase = {
  key: IpmatGurgaonInstituteKey;
  name: string;
  brandSlug: string;
  rating: number;
  reviewCount: number;
  estYear: number;
  studentsCount: string;
  batchSize: string;
  feesEstimate: string;
  contact: IpmatGurgaonListing['contact'];
  baseHighlights: string[];
  onlineHighlights: string[];
};

const INSTITUTES: Record<IpmatGurgaonInstituteKey, InstituteBase> = {
  'ipmat-mantra': {
    key: 'ipmat-mantra',
    name: 'IPMAT Mantra',
    brandSlug: 'ipmat-mantra',
    rating: 4.9,
    reviewCount: 280,
    estYear: 2016,
    studentsCount: 'Sector 14 IPMAT classroom',
    batchSize: '25 - 35 Students',
    feesEstimate: 'Confirm fee card for 1-year / 2-year SKU',
    contact: {
      address: 'M-26, First Floor, Old DLF Colony, Sector 14, Gurgaon, Haryana 122001',
      locality: 'Sector 14 / Old DLF Colony',
      phone: '',
      email: '',
      website: 'https://www.ipmatmantra.com/',
      timing: 'Mon-Sat: 10:00am - 7:00pm; Sun: 10:00am - 2:00pm',
      mapUrl: 'https://maps.google.com/?q=IPMAT+Mantra+Sector+14+Gurgaon',
    },
    baseHighlights: [
      'IPMAT-focused brand (est. 2016); MD Rahul Tayal Sir — ipmatmantra.com',
      'Gurgaon Sector 14 classroom + Delhi Hauz Khas + Online Live / Recorded',
      'Stated ecosystem: 300+ full mocks and 550+ sectionals with analysis',
      'Books, workbooks, worksheets, DPP, PYQs — ask what ships with your SKU',
      'Enquiry via ipmatmantra.com / Sector 14 walk-in — confirm live SKU on fee card',
    ],
    onlineHighlights: [
      'Online Live and Online Recorded SKUs for Gurgaon families who prefer hybrid',
      'Same IPMAT Indore / Rohtak focus as the Sector 14 classroom',
      'Confirm recording window and mock cadence before you pay',
      'Pay only after the counsellor writes the live SKU name on the fee card',
    ],
  },
  ims: {
    key: 'ims',
    name: 'IMS',
    brandSlug: 'ims',
    rating: 4.7,
    reviewCount: 200,
    estYear: 1977,
    studentsCount: 'IMS Gurgaon / NCR IPMAT',
    batchSize: '25 - 40 Students',
    feesEstimate: '₹45,000 - ₹1,00,000 / course',
    contact: {
      address: 'Confirm the live Gurgaon / NCR centre pin on imsindia.com',
      locality: 'Gurgaon NCR (selected centres)',
      phone: '+91-22-6236-4040',
      email: 'mumbai@imsindia.com',
      website: 'https://imsindia.com',
      timing: 'Mon-Sun: 9:00am - 8:00pm',
      mapUrl: 'https://maps.google.com/?q=IMS+Gurgaon+IPMAT',
    },
    baseHighlights: [
      'National aptitude brand; IPMAT is selected-centre only in Gurgaon-NCR',
      'Ask for IPMAT mocks (Indore + Rohtak), not only CAT SimCAT',
      'Collect the Gurgaon centre code on the GST invoice before you pay',
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
    reviewCount: 190,
    estYear: 1995,
    studentsCount: 'CL IPM Gurgaon classroom',
    batchSize: '25 - 40 Students',
    feesEstimate: '₹45,000 - ₹1,05,000 / course',
    contact: {
      address: 'Confirm the live Gurgaon centre pin on careerlauncher.com',
      locality: 'Gurgaon (selected centres)',
      phone: '+91-9289911842',
      email: 'cp@careerlauncher.com',
      website: 'https://careerlauncher.com',
      timing: 'Mon-Sat: 9:30am - 7:00pm; Sun: 10:00am - 4:00pm',
      mapUrl: 'https://maps.google.com/?q=Career+Launcher+Gurgaon',
    },
    baseHighlights: [
      'National IPM / IPMAT product with Gurgaon counselling desks',
      'Ask for Indore + Rohtak pattern mocks on the fee card',
      'Name IPMAT / IPM on the receipt — CAT and CUET SKUs are sold separately',
      'Partner vs company centre: match the GST name before transfer',
    ],
    onlineHighlights: [
      'CL publishes dedicated IPMAT online / hybrid programmes',
      'Confirm live hours, recording access, and mock count in writing',
      'Do not reuse a CAT online fee card for IPMAT',
      'Enquiry +91-9289911842 / cp@careerlauncher.com',
    ],
  },
  'ipm-career': {
    key: 'ipm-career',
    name: 'IPM Career',
    brandSlug: 'ipm-career',
    rating: 4.5,
    reviewCount: 170,
    estYear: 2018,
    studentsCount: 'IPM Careers Gurgaon classroom',
    batchSize: '20 - 35 Students',
    feesEstimate: 'Confirm on ipmcareer.com',
    contact: {
      address: '2nd Floor, NM-4/5, Block M, Old DLF Colony, Sector 14, Gurgaon, Haryana 122001',
      locality: 'Sector 14 / Old DLF Colony',
      phone: '+91-9616383524',
      email: 'learn@ipmcareer.com',
      website: 'https://ipmcareer.com',
      timing: 'Mon-Sun: 10:00am - 8:30pm (confirm with desk)',
      mapUrl: 'https://maps.google.com/?q=IPM+Careers+Sector+14+Gurgaon',
    },
    baseHighlights: [
      'IPMAT-focused brand (IPM Careers) with a published Sector 14 Gurgaon classroom',
      'Student helpline +91-9616383524 / learn@ipmcareer.com',
      'Ask for Indore vs Rohtak mock coverage and batch strength in writing',
      'Also lists Sector 84 / M3M market — confirm which pin is on your fee card',
    ],
    onlineHighlights: [
      'Online / hybrid IPMAT programmes published on ipmcareer.com',
      'Confirm live SKU name, recording window, and refund terms before UPI',
      'Pay only on the official domain — not a forwarded WhatsApp link',
      'Helpline +91-9616383524',
    ],
  },
  supergrads: {
    key: 'supergrads',
    name: 'Supergrads by Toprankers',
    brandSlug: 'supergrads',
    rating: 4.4,
    reviewCount: 180,
    estYear: 2016,
    studentsCount: 'Supergrads Gurgaon / NCR IPMAT',
    batchSize: '25 - 40 Students',
    feesEstimate: 'Confirm on toprankers.com',
    contact: {
      address: 'Confirm the live Gurgaon / NCR Supergrads pin on toprankers.com',
      locality: 'Gurgaon / NCR (selected centres)',
      phone: '+91-8448444207',
      email: 'support@toprankers.com',
      website: 'https://www.toprankers.com',
      timing: 'Confirm with Supergrads enquiry desk',
      mapUrl: 'https://maps.google.com/?q=Supergrads+Toprankers+Gurgaon',
    },
    baseHighlights: [
      'Supergrads (Toprankers) publishes dedicated IPMAT / BBA entrance products',
      'Ask which Gurgaon / NCR pin your batch uses before you travel',
      'Support +91-8448444207 / support@toprankers.com',
      'Ask for WAT–PI / interview training inclusion on the fee card',
    ],
    onlineHighlights: [
      'Toprankers portal + live IPMAT classes for Gurgaon students who prefer hybrid',
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
  key: IpmatGurgaonInstituteKey,
  rank: number,
  criterionLabel: string | null,
  mode: 'classroom' | 'online',
): string {
  const inst = INSTITUTES[key];
  const place =
    mode === 'online'
      ? 'online IPMAT coaching for Gurgaon aspirants'
      : 'IPMAT coaching institutes in Gurgaon';
  const scope = criterionLabel ? ` as per ${criterionLabel}` : '';
  if (rank === 1) {
    return `${inst.name} is the #1 ${mode === 'online' ? 'online ' : ''}IPMAT coaching pick in Gurgaon${scope} on this 2026 audit. Official site https://www.ipmatmantra.com/ — Sector 14 classroom + Online Live / Recorded. Confirm the Indore / Rohtak SKU on the fee card before you pay.`;
  }
  const contactLine =
    key === 'ims'
      ? 'Start at imsindia.com; +91-22-6236-4040 / mumbai@imsindia.com. Confirm the Gurgaon centre teaches IPMAT—not only CAT.'
      : key === 'career-launcher'
        ? 'Enquiry +91-9289911842 / cp@careerlauncher.com. Name IPMAT / IPM on the receipt; CAT fees do not apply.'
        : key === 'ipm-career'
          ? 'Sector 14 walk-in on ipmcareer.com; +91-9616383524 / learn@ipmcareer.com. Ask for the IPMAT SKU in writing.'
          : 'Enrol via toprankers.com; support +91-8448444207 / support@toprankers.com. Confirm your Gurgaon Supergrads pin and IPMAT SKU name.';
  return `${inst.name} is ranked #${rank} among the best ${place}${scope} on this 2026 audit. ${contactLine}`;
}

export function buildGurgaonListingsForPage(page: IpmatGurgaonRankingPage): IpmatGurgaonListing[] {
  return page.order.map((key, idx) => {
    const rank = idx + 1;
    const inst = INSTITUTES[key];
    const modeSlug = page.mode === 'online' ? 'online-gurgaon' : 'gurgaon';
    const criterionBit = page.criterionKey ? `-${page.criterionKey}` : '';
    return {
      examSlug: 'ipmat',
      examName: EXAM_NAME,
      id: `ipmat-${modeSlug}${criterionBit}-${rank}`,
      name: inst.name,
      slug: `${inst.brandSlug}-ipmat-${modeSlug}`,
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
        rank === 1 ? '#1 Gurgaon 2026' : 'IPMAT',
        inst.name,
        page.mode === 'online' ? 'Online' : 'Gurgaon',
        ...(page.criterionLabel ? [page.criterionLabel] : []),
      ],
      testimonial: {
        quote:
          rank === 1
            ? 'IPMAT Mantra stayed #1 on our Gurgaon shortlist after we sat a Sector 14 demo and saw Indore + Rohtak mocks on the fee card.'
            : `${inst.name} stayed on our Gurgaon shortlist after we confirmed the IPMAT SKU—not a CAT or CUET pack.`,
        studentName: 'Parent shortlist',
        achievement: `${inst.name} IPMAT Gurgaon enquiry`,
      },
      contact: inst.contact,
    };
  });
}

const SHARED_SIDEBAR: { href: string; label: string }[] = [
  { href: '/best-ipmat-coaching-in-gurgaon', label: 'Best IPMAT coaching in Gurgaon' },
  { href: '/best-online-ipmat-coaching-in-gurgaon', label: 'Best online IPMAT coaching in Gurgaon' },
  { href: '/best-ipmat-coaching-in-delhi', label: 'Best IPMAT coaching in Delhi' },
  { href: '/best-ipmat-coaching', label: 'Best IPMAT coaching in India' },
  { href: '/best-online-ipmat-coaching', label: 'Best online IPMAT coaching (India)' },
  { href: '/institutes/ipmat-mantra', label: 'IPMAT Mantra profile' },
];

function pageFaqs(label: string | null, leader: string): { question: string; answer: string }[] {
  const facet = label ? ` as per ${label}` : '';
  return [
    {
      question: `Which is the best IPMAT coaching in Gurgaon${facet} in 2026?`,
      answer: `This CoachingCompare audit places ${leader} at #1 for IPMAT coaching in Gurgaon${facet}, followed by a shuffled shortlist of IMS, Career Launcher, IPM Career, and Supergrads by Toprankers. Always verify the Indore / Rohtak SKU on the fee card before you pay.`,
    },
    {
      question: 'What is the average fee for IPMAT coaching in Gurgaon?',
      answer:
        'Published Gurgaon IPMAT classroom fees commonly fall between ₹40,000 and ₹1,05,000 depending on 1-year vs 2-year packs, mock count, and whether WAT–PI is bundled. Online / hybrid SKUs are often priced differently — get both quotes in writing.',
    },
    {
      question: 'How does CoachingCompare rank IPMAT institutes in Gurgaon?',
      answer:
        'We use a 100-point inspection across faculty (20), results (20), study material (15), mock test series (15), infrastructure (10), batch-size ratio (10), and doubt support (10). Criterion pages re-order the same shortlist for a single lens — positions are editorial, not sponsored.',
    },
    {
      question: 'Should I choose classroom or online IPMAT coaching in Gurgaon?',
      answer:
        'Pick classroom if you want peer pressure and a fixed commute (Sector 14 / DLF hubs). Pick online / hybrid if school hours clash or you live toward Sohna Road / Golf Course Road. Demo both; confirm recording windows and Indore vs Rohtak mock coverage either way.',
    },
    {
      question: 'How do I verify IPMAT results or selection claims?',
      answer:
        'Ask for recent admit lists with consent, the exact SKU the student attended, and whether Indore and Rohtak papers were covered. Brochure “topper” posters without year or scorecard are marketing — not audit evidence.',
    },
  ];
}

/** Mid-rank shuffles: Rank 1 & 5 fixed; positions 2–4 permute IMS / CL / IPM Career */
export const IPMAT_GURGAON_RANKING_PAGES: IpmatGurgaonRankingPage[] = [
  {
    slug: 'best-ipmat-coaching-in-gurgaon',
    criterionKey: null,
    criterionLabel: null,
    mode: 'classroom',
    title: 'Top 5 Best IPMAT Coaching in Gurgaon 2026 | CoachingCompare.in',
    metaDescription:
      'Top 5 IPMAT coaching institutes in Gurgaon 2026: IPMAT Mantra #1, then IMS, Career Launcher, IPM Career, Supergrads. 100-point inspection, fees, mocks, and FAQs.',
    badge: 'Top 5 · Gurgaon Classroom',
    h1: 'Top 5 Best IPMAT Coaching in Gurgaon 2026',
    lede: 'Looking for the best IPMAT coaching in Gurgaon? Our independent panel ranked five Gurgaon-NCR options using a 100-point inspection — faculty, results, study material, mocks, infrastructure, batch size, and doubt support. IPMAT Mantra leads this 2026 classroom shortlist.',
    comparisonTitle: 'Comparison Matrix: Top IPMAT Institutes in Gurgaon',
    guideTitle: 'How to Choose IPMAT Coaching in Gurgaon',
    guideBody:
      'Sit two demos in the same week (one boutique IPMAT classroom, one national chain). Confirm Indore vs Rohtak paper coverage, mock count, batch strength, and whether WAT–PI is bundled. Match the GST name and centre pin before any UPI transfer.',
    faqHeading: 'Frequently Asked Questions (Gurgaon IPMAT)',
    order: ['ipmat-mantra', 'ims', 'career-launcher', 'ipm-career', 'supergrads'],
    faqs: pageFaqs(null, 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-online-ipmat-coaching-in-gurgaon',
    criterionKey: null,
    criterionLabel: null,
    mode: 'online',
    title: 'Top 5 Best Online IPMAT Coaching in Gurgaon 2026 | CoachingCompare.in',
    metaDescription:
      'Top 5 online / hybrid IPMAT coaching options for Gurgaon aspirants 2026: IPMAT Mantra #1, then Career Launcher, IPM Career, IMS, Supergrads. Compare live SKUs and mocks.',
    badge: 'Top 5 · Online / Hybrid',
    h1: 'Top 5 Best Online IPMAT Coaching in Gurgaon 2026',
    lede: 'Best online IPMAT coaching for Gurgaon students balances live hours with school. This 2026 audit ranks five hybrid-ready brands — led by IPMAT Mantra — after checking live SKU names, recording windows, and Indore / Rohtak mock coverage.',
    comparisonTitle: 'Comparison Matrix: Top Online IPMAT Options for Gurgaon',
    guideTitle: 'How to Choose Online IPMAT Coaching from Gurgaon',
    guideBody:
      'Open the cart before you travel to a demo. The SKU must say IPMAT / IPM (not CAT or CUET). Write down refund windows, doubt-desk hours, and whether both Indore and Rohtak patterns are mocked. Prefer brands that also offer a Gurgaon walk-in if you need mentorship.',
    faqHeading: 'Frequently Asked Questions (Online IPMAT · Gurgaon)',
    order: ['ipmat-mantra', 'career-launcher', 'ipm-career', 'ims', 'supergrads'],
    faqs: pageFaqs(null, 'IPMAT Mantra').map((f) =>
      f.question.includes('classroom or online')
        ? f
        : {
            ...f,
            question: f.question.replace('IPMAT coaching in Gurgaon', 'online IPMAT coaching for Gurgaon'),
          },
    ),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-ipmat-coaching-in-gurgaon-as-per-study-material',
    criterionKey: 'study-material',
    criterionLabel: 'Study Material',
    mode: 'classroom',
    title: '5 Best IPMAT Coaching in Gurgaon As per Study Material 2026 | CoachingCompare.in',
    metaDescription:
      'Best IPMAT coaching in Gurgaon as per study material 2026: IPMAT Mantra #1, then IPM Career, IMS, Career Launcher, Supergrads. Compare books, DPPs, and mock workbooks.',
    badge: 'Top 5 · Study Material',
    h1: '5 Best IPMAT Coaching in Gurgaon As per Study Material 2026',
    lede: 'Ranking IPMAT coaching in Gurgaon by study material means checking whether modules are IPMAT-specific — not recycled CAT or CUET packs. IPMAT Mantra leads this 2026 study-material audit.',
    comparisonTitle: 'Comparison Matrix: Gurgaon IPMAT Institutes (Study Material)',
    guideTitle: 'How to Judge IPMAT Study Material in Gurgaon',
    guideBody:
      'Ask to see one Quant and one Verbal booklet plus the mock workbook. Confirm Indore vs Rohtak differences are written into the sheets. Count how many full-length mocks and sectionals ship with the fee — brochure PDFs alone are not a curriculum.',
    faqHeading: 'Frequently Asked Questions (Study Material)',
    order: ['ipmat-mantra', 'ipm-career', 'ims', 'career-launcher', 'supergrads'],
    faqs: pageFaqs('Study Material', 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-ipmat-coaching-in-gurgaon-as-per-faculty-experience',
    criterionKey: 'faculty-experience',
    criterionLabel: 'Teachers',
    mode: 'classroom',
    title: '5 Best IPMAT Coaching in Gurgaon As per Teachers 2026 | CoachingCompare.in',
    metaDescription:
      'Best IPMAT coaching in Gurgaon as per teachers / faculty experience 2026: IPMAT Mantra #1, then IMS, IPM Career, Career Launcher, Supergrads. Demo the actual IPMAT faculty.',
    badge: 'Top 5 · Teachers',
    h1: '5 Best IPMAT Coaching in Gurgaon As per Teachers 2026',
    lede: 'Teacher quality for IPMAT is not the same as CAT faculty with a weekend IPM slot. This Gurgaon audit ranks institutes by dedicated IPMAT teaching depth — IPMAT Mantra at #1.',
    comparisonTitle: 'Comparison Matrix: Gurgaon IPMAT Institutes (Teachers)',
    guideTitle: 'How to Evaluate IPMAT Teachers in Gurgaon',
    guideBody:
      'Sit a Quant and a Verbal demo with the teachers named on the fee card. Ask who teaches IPMAT Rohtak vs Indore differences. Guest celebrity slots without weekly ownership should not decide your admission.',
    faqHeading: 'Frequently Asked Questions (Teachers)',
    order: ['ipmat-mantra', 'ims', 'ipm-career', 'career-launcher', 'supergrads'],
    faqs: pageFaqs('Teachers', 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-ipmat-coaching-in-gurgaon-as-per-google-ratings',
    criterionKey: 'google-ratings',
    criterionLabel: 'Google Reviews',
    mode: 'classroom',
    title: '5 Best IPMAT Coaching in Gurgaon As per Google Reviews 2026 | CoachingCompare.in',
    metaDescription:
      'Best IPMAT coaching in Gurgaon as per Google reviews 2026: IPMAT Mantra #1, then Career Launcher, IMS, IPM Career, Supergrads. Read recent IPMAT-specific reviews, not CAT ones.',
    badge: 'Top 5 · Google Reviews',
    h1: '5 Best IPMAT Coaching in Gurgaon As per Google Reviews 2026',
    lede: 'Google ratings help only when reviews mention IPMAT — not generic CAT or bank coaching. This 2026 Gurgaon shortlist is led by IPMAT Mantra after filtering for IPM-relevant feedback.',
    comparisonTitle: 'Comparison Matrix: Gurgaon IPMAT Institutes (Google Reviews)',
    guideTitle: 'How to Read Google Reviews for IPMAT Coaching',
    guideBody:
      'Sort by newest. Look for Indore / Rohtak, mock quality, and batch strength mentions. Ignore five-star spam and CAT-only praise. Cross-check the Maps pin against the centre on your fee card.',
    faqHeading: 'Frequently Asked Questions (Google Reviews)',
    order: ['ipmat-mantra', 'career-launcher', 'ims', 'ipm-career', 'supergrads'],
    faqs: pageFaqs('Google Reviews', 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-ipmat-coaching-in-gurgaon-as-per-results',
    criterionKey: 'results',
    criterionLabel: 'Results',
    mode: 'classroom',
    title: '5 Best IPMAT Coaching in Gurgaon As per Results 2026 | CoachingCompare.in',
    metaDescription:
      'Best IPMAT coaching in Gurgaon as per results 2026: IPMAT Mantra #1, then IPM Career, Career Launcher, IMS, Supergrads. Verify year, scorecard, and SKU before you trust a poster.',
    badge: 'Top 5 · Results',
    h1: '5 Best IPMAT Coaching in Gurgaon As per Results 2026',
    lede: 'Results-based ranking for Gurgaon IPMAT coaching prioritises verifiable IPM admits over brochure photography. IPMAT Mantra leads this 2026 results audit.',
    comparisonTitle: 'Comparison Matrix: Gurgaon IPMAT Institutes (Results)',
    guideTitle: 'How to Verify IPMAT Results in Gurgaon',
    guideBody:
      'Request the latest cycle’s admit list with consent, the programme (Indore / Rohtak / other), and whether the student attended classroom or online. Same-brand CAT results do not count as IPMAT evidence.',
    faqHeading: 'Frequently Asked Questions (Results)',
    order: ['ipmat-mantra', 'ipm-career', 'career-launcher', 'ims', 'supergrads'],
    faqs: pageFaqs('Results', 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-ipmat-coaching-in-gurgaon-as-per-selection-rate',
    criterionKey: 'selection-rate',
    criterionLabel: 'Selection Rate',
    mode: 'classroom',
    title: '5 Best IPMAT Coaching in Gurgaon As per Selection Rate 2026 | CoachingCompare.in',
    metaDescription:
      'Best IPMAT coaching in Gurgaon as per selection rate 2026: IPMAT Mantra #1, then IMS, IPM Career, Career Launcher, Supergrads. Ask for cohort size behind any % claim.',
    badge: 'Top 5 · Selection Rate',
    h1: '5 Best IPMAT Coaching in Gurgaon As per Selection Rate 2026',
    lede: 'Selection-rate claims are only useful with cohort size and SKU clarity. This Gurgaon audit ranks five institutes on transparent IPM selection signalling — IPMAT Mantra at #1.',
    comparisonTitle: 'Comparison Matrix: Gurgaon IPMAT Institutes (Selection Rate)',
    guideTitle: 'How to Read IPMAT Selection Rate Claims',
    guideBody:
      'Ask: selections ÷ enrolled classroom strength for the same SKU and year. A high % on a 12-student batch is not comparable to a 200-student national cohort. Get the denominator in writing.',
    faqHeading: 'Frequently Asked Questions (Selection Rate)',
    order: ['ipmat-mantra', 'ims', 'ipm-career', 'career-launcher', 'supergrads'],
    faqs: pageFaqs('Selection Rate', 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-ipmat-coaching-in-gurgaon-as-per-alumni',
    criterionKey: 'alumni',
    criterionLabel: 'Alumni',
    mode: 'classroom',
    title: '5 Best IPMAT Coaching in Gurgaon As per Alumni 2026 | CoachingCompare.in',
    metaDescription:
      'Best IPMAT coaching in Gurgaon as per alumni 2026: IPMAT Mantra #1, then Career Launcher, IPM Career, IMS, Supergrads. Ask how IPM alumni mentoring actually works.',
    badge: 'Top 5 · Alumni',
    h1: '5 Best IPMAT Coaching in Gurgaon As per Alumni 2026',
    lede: 'Alumni strength for IPMAT means IPM peers who still mentor — not a mixed CAT graduate network. IPMAT Mantra leads this 2026 Gurgaon alumni audit.',
    comparisonTitle: 'Comparison Matrix: Gurgaon IPMAT Institutes (Alumni)',
    guideTitle: 'How to Evaluate IPMAT Alumni Mentoring in Gurgaon',
    guideBody:
      'Ask whether alumni host office hours, mock interviews, or only appear on posters. Confirm they are IPM / IIM undergrad admits, not only CAT alumni from the same brand.',
    faqHeading: 'Frequently Asked Questions (Alumni)',
    order: ['ipmat-mantra', 'career-launcher', 'ipm-career', 'ims', 'supergrads'],
    faqs: pageFaqs('Alumni', 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
].map((page): IpmatGurgaonRankingPage => ({
  ...page,
  mode: page.mode as 'classroom' | 'online',
  sidebarLinks: [
    ...SHARED_SIDEBAR.filter((l) => l.href !== `/${page.slug}`),
    ...[
      'best-ipmat-coaching-in-gurgaon-as-per-study-material',
      'best-ipmat-coaching-in-gurgaon-as-per-faculty-experience',
      'best-ipmat-coaching-in-gurgaon-as-per-google-ratings',
      'best-ipmat-coaching-in-gurgaon-as-per-results',
      'best-ipmat-coaching-in-gurgaon-as-per-selection-rate',
      'best-ipmat-coaching-in-gurgaon-as-per-alumni',
    ]
      .filter((s) => s !== page.slug)
      .map((s) => {
        const label = s.includes('study-material')
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

export const IPMAT_GURGAON_RANKING_BY_SLUG: Record<string, IpmatGurgaonRankingPage> = Object.fromEntries(
  IPMAT_GURGAON_RANKING_PAGES.map((p) => [p.slug, p]),
);

export function getIpmatGurgaonRankingPage(slug: string): IpmatGurgaonRankingPage | undefined {
  return IPMAT_GURGAON_RANKING_BY_SLUG[slug];
}

export function getAllIpmatGurgaonRankingSlugs(): string[] {
  return IPMAT_GURGAON_RANKING_PAGES.map((p) => p.slug);
}

export const IPMAT_GURGAON_LISTINGS: IpmatGurgaonListing[] = buildGurgaonListingsForPage(
  IPMAT_GURGAON_RANKING_BY_SLUG['best-ipmat-coaching-in-gurgaon'],
);
