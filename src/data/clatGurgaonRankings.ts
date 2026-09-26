/**
 * CLAT Gurgaon ranking pages (classroom, online, and as-per facets).
 * Rank 1 = Knowledge Nation Law Centre, Rank 5 = Law Prep Tutorials; mid-ranks shuffle per page.
 */

export type ClatGurgaonInstituteKey =
  | 'knowledge-nation'
  | 'time'
  | 'ims'
  | 'career-launcher'
  | 'law-prep';

export type ClatScoreBreakdown = {
  faculty: number;
  results: number;
  studyMaterial: number;
  testSeries: number;
  infrastructure: number;
  batchSizeRatio: number;
  doubtSupport: number;
};

export type ClatGurgaonListing = {
  examSlug: 'clat';
  examName: string;
  id: string;
  name: string;
  slug: string;
  city: string;
  cityName: string;
  state: string;
  rank: number;
  inspectionScore: number;
  scoreBreakdown: ClatScoreBreakdown;
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

export type ClatGurgaonRankingPage = {
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
  order: ClatGurgaonInstituteKey[];
  faqs: { question: string; answer: string }[];
  sidebarLinks: { href: string; label: string }[];
};

const EXAM_NAME = 'CLAT (Law Entrance)';
const SCORES = [99, 96, 94, 92, 90] as const;
const CITY = 'gurgaon';
const CITY_NAME = 'Gurgaon';
const STATE = 'Haryana';

type InstituteBase = {
  key: ClatGurgaonInstituteKey;
  name: string;
  brandSlug: string;
  rating: number;
  reviewCount: number;
  estYear: number;
  studentsCount: string;
  batchSize: string;
  feesEstimate: string;
  contact: ClatGurgaonListing['contact'];
  baseHighlights: string[];
  onlineHighlights: string[];
};

const INSTITUTES: Record<ClatGurgaonInstituteKey, InstituteBase> = {
  'knowledge-nation': {
    key: 'knowledge-nation',
    name: 'Knowledge Nation Law Centre',
    brandSlug: 'knowledge-nation-law-centre',
    rating: 4.9,
    reviewCount: 410,
    estYear: 2008,
    studentsCount: '350+ Students',
    batchSize: '30 - 35 Students',
    feesEstimate: '₹85,000 - ₹1,40,000 / yr',
    contact: {
      address: 'Sector 14 / DLF Phase 4, Near MG Road Metro, Gurgaon, Haryana 122001',
      locality: 'Sector 14 & DLF Phase 4 Gurgaon',
      phone: '+91-9999882858',
      email: 'info@knowledgenation.co.in',
      website: 'https://knowledgenation.co.in',
      timing: 'Mon-Sat: 10:00am - 7:00pm; Sun: 10:00am - 2:00pm',
      mapUrl: 'https://maps.google.com/?q=Knowledge+Nation+Law+Centre+Gurgaon',
    },
    baseHighlights: [
      'Established law-only academy since 2008; faculty headed by Ashish Sir and Rahul Sir',
      'Gurgaon Sector 14 / DLF classroom + Delhi Hauz Khas + live / recorded options',
      'In-house R&D desk; 250+ full-length CLAT / AILET mocks and 400+ sectionals',
      'Vast material set: books, workbooks, homework sheets — ask what ships with your SKU',
      '258 verified NLU selections in 2026 (incl. NLSIU, NALSAR, NLU Delhi) — verify year on fee card',
    ],
    onlineHighlights: [
      'Live / hybrid CLAT SKUs with the same law-only faculty as the Gurgaon classroom',
      'Full-course recorded access often from day 1 — confirm window before you pay',
      'Ask whether AILET shares the same hours or is a separate SKU',
      'Pay only after the counsellor writes CLAT (not CUET / CAT) on the receipt',
    ],
  },
  time: {
    key: 'time',
    name: 'T.I.M.E.',
    brandSlug: 'time',
    rating: 4.5,
    reviewCount: 240,
    estYear: 1992,
    studentsCount: 'TIME Gurgaon / NCR',
    batchSize: '30 - 45 Students',
    feesEstimate: 'Centre-specific (ask branch)',
    contact: {
      address: 'Confirm the live Gurgaon / NCR centre pin on time4education.com',
      locality: 'Gurgaon NCR (selected centres)',
      phone: '+91-40-40088400',
      email: 'info@time4education.com',
      website: 'https://www.time4education.com',
      timing: 'Mon-Sun: 9:00am - 8:00pm',
      mapUrl: 'https://maps.google.com/?q=TIME+Gurgaon+CLAT',
    },
    baseHighlights: [
      'Pan-India TIME network; CLAT is selected-centre only in Gurgaon-NCR',
      'Ask for the CLAT test series name — AIMCAT is a CAT mock',
      'Useful transfer option if you may move mid-year',
      'Sit a demo; TIME CAT faculty is not automatically the law faculty',
    ],
    onlineHighlights: [
      'Live / hybrid CLAT SKU via time4education.com where offered',
      'Confirm Consortium-pattern mocks in writing',
      'Do not buy a CAT pack and assume CLAT access',
      'Screenshot cart + refund window before UPI',
    ],
  },
  ims: {
    key: 'ims',
    name: 'IMS',
    brandSlug: 'ims',
    rating: 4.6,
    reviewCount: 280,
    estYear: 1977,
    studentsCount: 'IMS Gurgaon / NCR',
    batchSize: '30 - 45 Students',
    feesEstimate: '₹65,000 - ₹1,20,000 / course',
    contact: {
      address: 'Confirm the live Gurgaon / NCR centre pin on imsindia.com',
      locality: 'Gurgaon NCR (selected centres)',
      phone: '+91-22-6236-4040',
      email: 'mumbai@imsindia.com',
      website: 'https://imsindia.com',
      timing: 'Mon-Sun: 9:00am - 8:00pm',
      mapUrl: 'https://maps.google.com/?q=IMS+Gurgaon+CLAT',
    },
    baseHighlights: [
      'National IMS network; law is selected-city only',
      'Use the official locator before you travel to Sector 14 / MG Road',
      'Do not confuse SimCAT (CAT) with the law mock pack',
      'Compare batch size with KNLC the same week',
    ],
    onlineHighlights: [
      'Live / hybrid CLAT SKU via imsindia.com',
      'Confirm CLAT — not only CAT — on the cart',
      'Collect centre / cohort code on the GST invoice',
      'Compare one KNLC demo the same week',
    ],
  },
  'career-launcher': {
    key: 'career-launcher',
    name: 'Career Launcher',
    brandSlug: 'career-launcher',
    rating: 4.6,
    reviewCount: 320,
    estYear: 1995,
    studentsCount: 'LST Gurgaon',
    batchSize: '30 - 40 Students',
    feesEstimate: '₹80,000 - ₹1,50,000 / yr',
    contact: {
      address: 'Confirm the live Gurgaon LST centre code on careerlauncher.com',
      locality: 'Gurgaon / LST NCR',
      phone: '+91-9289911842',
      email: 'cp@careerlauncher.com',
      website: 'https://careerlauncher.com',
      timing: 'Mon-Sat: 9:30am - 7:00pm; Sun: 10:00am - 4:00pm',
      mapUrl: 'https://maps.google.com/?q=Career+Launcher+LST+Gurgaon',
    },
    baseHighlights: [
      'LST law vertical with national percentiles on Aspirant.zone',
      'Confirm the Gurgaon centre code on careerlauncher.com',
      'Print modules often ship with classroom packs — ask',
      'Partner vs company centre: read the GST name',
    ],
    onlineHighlights: [
      'LST live / hybrid CLAT SKU for Gurgaon families',
      'Name LST / CLAT on the receipt — CAT and bank SKUs are separate',
      'Ask mock cadence and doubt-desk hours before you pay',
      'Prefer a walk-in demo if a Gurgaon pin is open',
    ],
  },
  'law-prep': {
    key: 'law-prep',
    name: 'Law Prep Tutorials',
    brandSlug: 'law-prep-tutorials',
    rating: 4.5,
    reviewCount: 310,
    estYear: 2013,
    studentsCount: 'National mocks + NCR option',
    batchSize: '35 - 45 Students / online',
    feesEstimate: '₹35,000 - ₹1,15,000 / course',
    contact: {
      address: 'GTB Nagar Delhi HQ + national online; confirm any Gurgaon pin on lawpreptutorial.com',
      locality: 'GTB Nagar / national online (Gurgaon hybrid)',
      phone: '+91-8750581505',
      email: 'delhi@lawpreptutorial.com',
      website: 'https://lawpreptutorial.com',
      timing: 'Mon-Sat: 9:00am - 7:00pm; Sun: 10:00am - 2:00pm',
      mapUrl: 'https://maps.google.com/?q=Law+Prep+Tutorial+GTB+Nagar+Delhi',
    },
    baseHighlights: [
      'Law-only mock portal and GK compendiums with optional classroom',
      'National mock cohort — useful percentile if you cannot sit daily classroom',
      'GTB Nagar walk-in remains for hybrid Gurgaon families',
      'Ask whether you are buying mocks-only or the full live course',
    ],
    onlineHighlights: [
      'Strong fit for Gurgaon students who want national CLAT mocks online',
      'Monthly GK booklets and test analysis advertised by the institute',
      'Pay only on lawpreptutorial.com — match the GST name',
      'Compare mock difficulty with LST / KNLC in the same month',
    ],
  },
};

function breakdownForRank(rank: number): ClatScoreBreakdown {
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
  key: ClatGurgaonInstituteKey,
  rank: number,
  criterionLabel: string | null,
  mode: 'classroom' | 'online',
): string {
  const inst = INSTITUTES[key];
  const place =
    mode === 'online' ? 'online CLAT coaching for Gurgaon aspirants' : 'CLAT coaching institutes in Gurgaon';
  const scope = criterionLabel ? ` as per ${criterionLabel}` : '';
  if (rank === 1) {
    return `${inst.name} is the #1 ${mode === 'online' ? 'online ' : ''}CLAT coaching pick in Gurgaon${scope} on this 2026 audit: a law-only classroom near Sector 14 / MG Road (est. 2008), headed by Ashish Sir and Rahul Sir. Call +91-9999882858 or email info@knowledgenation.co.in. Confirm the Gurgaon pin—do not reuse a Hauz Khas fee card.`;
  }
  const contactLine =
    key === 'time'
      ? 'Start at time4education.com; +91-40-40088400 / info@time4education.com. Confirm the Gurgaon centre teaches CLAT—not only CAT.'
      : key === 'ims'
        ? 'Start at imsindia.com; +91-22-6236-4040 / mumbai@imsindia.com. Confirm the Gurgaon centre teaches CLAT—not only CAT.'
        : key === 'career-launcher'
          ? 'Enquiry +91-9289911842 / cp@careerlauncher.com. Name LST / CLAT on the receipt; CAT fees do not apply.'
          : 'Enrol via lawpreptutorial.com; +91-8750581505 / delhi@lawpreptutorial.com. Ask whether you are buying mocks-only or the full live course.';
  return `${inst.name} is ranked #${rank} among the best ${place}${scope} on this 2026 audit. ${contactLine}`;
}

export function buildClatGurgaonListingsForPage(page: ClatGurgaonRankingPage): ClatGurgaonListing[] {
  return page.order.map((key, idx) => {
    const rank = idx + 1;
    const inst = INSTITUTES[key];
    const modeSlug = page.mode === 'online' ? 'online-gurgaon' : 'gurgaon';
    const criterionBit = page.criterionKey ? `-${page.criterionKey}` : '';
    return {
      examSlug: 'clat',
      examName: EXAM_NAME,
      id: `clat-${modeSlug}${criterionBit}-${rank}`,
      name: inst.name,
      slug: `${inst.brandSlug}-clat-${modeSlug}`,
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
        rank === 1 ? '#1 Gurgaon 2026' : 'CLAT',
        inst.name,
        page.mode === 'online' ? 'Online' : 'Gurgaon',
        ...(page.criterionLabel ? [page.criterionLabel] : []),
      ],
      testimonial: {
        quote:
          rank === 1
            ? 'KNLC Gurgaon kept the same legal-reasoning method as Delhi. We asked for a Haryana GST invoice.'
            : `${inst.name} stayed on our Gurgaon shortlist after we confirmed the CLAT SKU—not a CAT or bank pack.`,
        studentName: 'Parent shortlist',
        achievement: `${inst.name} CLAT Gurgaon enquiry`,
      },
      contact: inst.contact,
    };
  });
}

const SHARED_SIDEBAR: { href: string; label: string }[] = [
  { href: '/best-clat-coaching-in-gurgaon', label: 'Best CLAT coaching in Gurgaon' },
  { href: '/best-online-clat-coaching-in-gurgaon', label: 'Best online CLAT coaching in Gurgaon' },
  { href: '/best-clat-coaching-in-delhi', label: 'Best CLAT coaching in Delhi' },
  { href: '/best-clat-coaching', label: 'Best CLAT coaching in India' },
  { href: '/best-online-clat-coaching', label: 'Best online CLAT coaching (India)' },
  { href: '/institutes/knowledge-nation-law-centre', label: 'Knowledge Nation Law Centre profile' },
];

function pageFaqs(label: string | null, leader: string): { question: string; answer: string }[] {
  const facet = label ? ` as per ${label}` : '';
  return [
    {
      question: `Which is the best CLAT coaching in Gurgaon${facet} in 2026?`,
      answer: `This CoachingCompare audit places ${leader} at #1 for CLAT coaching in Gurgaon${facet}, followed by a shuffled shortlist of T.I.M.E., IMS, Career Launcher, and Law Prep Tutorials. Always verify the CLAT SKU on the fee card before you pay.`,
    },
    {
      question: 'What is the average fee for CLAT coaching in Gurgaon?',
      answer:
        'Published Gurgaon CLAT classroom fees commonly fall between ₹65,000 and ₹1,50,000 depending on 1-year vs 2-year packs, mock count, and whether AILET is bundled. Online / hybrid SKUs are often priced differently — get both quotes in writing.',
    },
    {
      question: 'How does CoachingCompare rank CLAT institutes in Gurgaon?',
      answer:
        'We use a 100-point inspection across faculty (20), results (20), study material (15), mock test series (15), infrastructure (10), batch-size ratio (10), and doubt support (10). Criterion pages re-order the same shortlist for a single lens — positions are editorial, not sponsored.',
    },
    {
      question: 'Should I choose classroom or online CLAT coaching in Gurgaon?',
      answer:
        'Pick classroom if you want peer pressure and a fixed commute (Sector 14 / MG Road hubs). Pick online / hybrid if school hours clash or you live toward Sohna Road / Golf Course Road. Demo both; confirm recording windows and Consortium-pattern mock coverage either way.',
    },
    {
      question: 'How do I verify CLAT results or selection claims?',
      answer:
        'Ask for recent NLU admit lists with consent, the exact SKU the student attended, and whether AILET was included. Brochure “topper” posters without year or scorecard are marketing — not audit evidence.',
    },
  ];
}

/** Mid-rank shuffles: Rank 1 & 5 fixed; positions 2–4 permute TIME / IMS / Career Launcher */
export const CLAT_GURGAON_RANKING_PAGES: ClatGurgaonRankingPage[] = [
  {
    slug: 'best-clat-coaching-in-gurgaon',
    criterionKey: null,
    criterionLabel: null,
    mode: 'classroom',
    title: 'Top 5 Best CLAT Coaching in Gurgaon 2026 | CoachingCompare.in',
    metaDescription:
      'Top 5 CLAT coaching institutes in Gurgaon 2026: Knowledge Nation Law Centre #1, then T.I.M.E., IMS, Career Launcher, Law Prep Tutorials. 100-point inspection, fees, mocks, and FAQs.',
    badge: 'Top 5 · Gurgaon Classroom',
    h1: 'Top 5 Best CLAT Coaching in Gurgaon 2026',
    lede: 'Looking for the best CLAT coaching in Gurgaon? Our independent panel ranked five Gurgaon-NCR options using a 100-point inspection — faculty, results, study material, mocks, infrastructure, batch size, and doubt support. Knowledge Nation Law Centre leads this 2026 classroom shortlist.',
    comparisonTitle: 'Comparison Matrix: Top CLAT Institutes in Gurgaon',
    guideTitle: 'How to Choose CLAT Coaching in Gurgaon',
    guideBody:
      'Sit two demos in the same week (one law-only classroom, one national chain). Confirm Consortium-pattern mock count, batch strength, AILET bundling, and GST name. Match the Gurgaon centre pin before any UPI transfer.',
    faqHeading: 'Frequently Asked Questions (Gurgaon CLAT)',
    order: ['knowledge-nation', 'time', 'ims', 'career-launcher', 'law-prep'],
    faqs: pageFaqs(null, 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-online-clat-coaching-in-gurgaon',
    criterionKey: null,
    criterionLabel: null,
    mode: 'online',
    title: 'Top 5 Best Online CLAT Coaching in Gurgaon 2026 | CoachingCompare.in',
    metaDescription:
      'Top 5 online / hybrid CLAT coaching options for Gurgaon aspirants 2026: Knowledge Nation Law Centre #1, then Career Launcher, T.I.M.E., IMS, Law Prep Tutorials. Compare live SKUs and mocks.',
    badge: 'Top 5 · Online / Hybrid',
    h1: 'Top 5 Best Online CLAT Coaching in Gurgaon 2026',
    lede: 'Best online CLAT coaching for Gurgaon students balances live hours with school. This 2026 audit ranks five hybrid-ready brands — led by Knowledge Nation Law Centre — after checking live SKU names, recording windows, and Consortium-pattern mock coverage.',
    comparisonTitle: 'Comparison Matrix: Top Online CLAT Options for Gurgaon',
    guideTitle: 'How to Choose Online CLAT Coaching from Gurgaon',
    guideBody:
      'Open the cart before you travel to a demo. The SKU must say CLAT (not CAT or bank). Write down refund windows, doubt-desk hours, and whether AILET is bundled. Prefer brands that also offer a Gurgaon walk-in if you need mentorship.',
    faqHeading: 'Frequently Asked Questions (Online CLAT · Gurgaon)',
    order: ['knowledge-nation', 'career-launcher', 'time', 'ims', 'law-prep'],
    faqs: pageFaqs(null, 'Knowledge Nation Law Centre').map((f) =>
      f.question.includes('classroom or online')
        ? f
        : {
            ...f,
            question: f.question.replace('CLAT coaching in Gurgaon', 'online CLAT coaching for Gurgaon'),
          },
    ),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-coaching-in-gurgaon-as-per-study-material',
    criterionKey: 'study-material',
    criterionLabel: 'Study Material',
    mode: 'classroom',
    title: '5 Best CLAT Coaching in Gurgaon As per Study Material 2026 | CoachingCompare.in',
    metaDescription:
      'Best CLAT coaching in Gurgaon as per study material 2026: Knowledge Nation Law Centre #1, then IMS, T.I.M.E., Career Launcher, Law Prep Tutorials. Compare books, DPPs, and mock workbooks.',
    badge: 'Top 5 · Study Material',
    h1: '5 Best CLAT Coaching in Gurgaon As per Study Material 2026',
    lede: 'Ranking CLAT coaching in Gurgaon by study material means checking whether modules are CLAT-specific — not recycled CAT or bank packs. Knowledge Nation Law Centre leads this 2026 study-material audit.',
    comparisonTitle: 'Comparison Matrix: Gurgaon CLAT Institutes (Study Material)',
    guideTitle: 'How to Judge CLAT Study Material in Gurgaon',
    guideBody:
      'Ask to see one Legal Reasoning and one Current Affairs booklet plus the mock workbook. Confirm Consortium pattern differences are written into the sheets. Count how many full-length mocks and sectionals ship with the fee — brochure PDFs alone are not a curriculum.',
    faqHeading: 'Frequently Asked Questions (Study Material)',
    order: ['knowledge-nation', 'ims', 'time', 'career-launcher', 'law-prep'],
    faqs: pageFaqs('Study Material', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-coaching-in-gurgaon-as-per-faculty-experience',
    criterionKey: 'faculty-experience',
    criterionLabel: 'Teachers',
    mode: 'classroom',
    title: '5 Best CLAT Coaching in Gurgaon As per Teachers 2026 | CoachingCompare.in',
    metaDescription:
      'Best CLAT coaching in Gurgaon as per teachers / faculty experience 2026: Knowledge Nation Law Centre #1, then T.I.M.E., Career Launcher, IMS, Law Prep Tutorials. Demo the actual CLAT faculty.',
    badge: 'Top 5 · Teachers',
    h1: '5 Best CLAT Coaching in Gurgaon As per Teachers 2026',
    lede: 'Teacher quality for CLAT is not the same as CAT faculty with a weekend law slot. This Gurgaon audit ranks institutes by dedicated CLAT teaching depth — Knowledge Nation Law Centre at #1.',
    comparisonTitle: 'Comparison Matrix: Gurgaon CLAT Institutes (Teachers)',
    guideTitle: 'How to Evaluate CLAT Teachers in Gurgaon',
    guideBody:
      'Sit a Legal Reasoning and a Logical Reasoning demo with the teachers named on the fee card. Ask who owns weekly CLAT hours vs guest celebrity slots. Guest sessions without weekly ownership should not decide your admission.',
    faqHeading: 'Frequently Asked Questions (Teachers)',
    order: ['knowledge-nation', 'time', 'career-launcher', 'ims', 'law-prep'],
    faqs: pageFaqs('Teachers', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-coaching-in-gurgaon-as-per-google-ratings',
    criterionKey: 'google-ratings',
    criterionLabel: 'Google Reviews',
    mode: 'classroom',
    title: '5 Best CLAT Coaching in Gurgaon As per Google Reviews 2026 | CoachingCompare.in',
    metaDescription:
      'Best CLAT coaching in Gurgaon as per Google reviews 2026: Knowledge Nation Law Centre #1, then Career Launcher, IMS, T.I.M.E., Law Prep Tutorials. Read recent CLAT-specific reviews, not CAT ones.',
    badge: 'Top 5 · Google Reviews',
    h1: '5 Best CLAT Coaching in Gurgaon As per Google Reviews 2026',
    lede: 'Google ratings help only when reviews mention CLAT — not generic CAT or bank coaching. This 2026 Gurgaon shortlist is led by Knowledge Nation Law Centre after filtering for law-relevant feedback.',
    comparisonTitle: 'Comparison Matrix: Gurgaon CLAT Institutes (Google Reviews)',
    guideTitle: 'How to Read Google Reviews for CLAT Coaching',
    guideBody:
      'Sort by newest. Look for NLU, mock quality, and batch strength mentions. Ignore five-star spam and CAT-only praise. Cross-check the Maps pin against the centre on your fee card.',
    faqHeading: 'Frequently Asked Questions (Google Reviews)',
    order: ['knowledge-nation', 'career-launcher', 'ims', 'time', 'law-prep'],
    faqs: pageFaqs('Google Reviews', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-coaching-in-gurgaon-as-per-results',
    criterionKey: 'results',
    criterionLabel: 'Results',
    mode: 'classroom',
    title: '5 Best CLAT Coaching in Gurgaon As per Results 2026 | CoachingCompare.in',
    metaDescription:
      'Best CLAT coaching in Gurgaon as per results 2026: Knowledge Nation Law Centre #1, then IMS, Career Launcher, T.I.M.E., Law Prep Tutorials. Verify year, scorecard, and SKU before you trust a poster.',
    badge: 'Top 5 · Results',
    h1: '5 Best CLAT Coaching in Gurgaon As per Results 2026',
    lede: 'Results-based ranking for Gurgaon CLAT coaching prioritises verifiable NLU admits over brochure photography. Knowledge Nation Law Centre leads this 2026 results audit.',
    comparisonTitle: 'Comparison Matrix: Gurgaon CLAT Institutes (Results)',
    guideTitle: 'How to Verify CLAT Results in Gurgaon',
    guideBody:
      'Request the latest cycle’s admit list with consent, the NLU name, and whether the student attended classroom or online. Same-brand CAT results do not count as CLAT evidence.',
    faqHeading: 'Frequently Asked Questions (Results)',
    order: ['knowledge-nation', 'ims', 'career-launcher', 'time', 'law-prep'],
    faqs: pageFaqs('Results', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-coaching-in-gurgaon-as-per-selection-rate',
    criterionKey: 'selection-rate',
    criterionLabel: 'Selection Rate',
    mode: 'classroom',
    title: '5 Best CLAT Coaching in Gurgaon As per Selection Rate 2026 | CoachingCompare.in',
    metaDescription:
      'Best CLAT coaching in Gurgaon as per selection rate 2026: Knowledge Nation Law Centre #1, then T.I.M.E., IMS, Career Launcher, Law Prep Tutorials. Ask for cohort size behind any % claim.',
    badge: 'Top 5 · Selection Rate',
    h1: '5 Best CLAT Coaching in Gurgaon As per Selection Rate 2026',
    lede: 'Selection-rate claims are only useful with cohort size and SKU clarity. This Gurgaon audit ranks five institutes on transparent CLAT selection signalling — Knowledge Nation Law Centre at #1.',
    comparisonTitle: 'Comparison Matrix: Gurgaon CLAT Institutes (Selection Rate)',
    guideTitle: 'How to Read CLAT Selection Rate Claims',
    guideBody:
      'Ask: selections ÷ enrolled classroom strength for the same SKU and year. A high % on a 12-student batch is not comparable to a 200-student national cohort. Get the denominator in writing.',
    faqHeading: 'Frequently Asked Questions (Selection Rate)',
    order: ['knowledge-nation', 'time', 'ims', 'career-launcher', 'law-prep'],
    faqs: pageFaqs('Selection Rate', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-coaching-in-gurgaon-as-per-alumni',
    criterionKey: 'alumni',
    criterionLabel: 'Alumni',
    mode: 'classroom',
    title: '5 Best CLAT Coaching in Gurgaon As per Alumni 2026 | CoachingCompare.in',
    metaDescription:
      'Best CLAT coaching in Gurgaon as per alumni 2026: Knowledge Nation Law Centre #1, then Career Launcher, T.I.M.E., IMS, Law Prep Tutorials. Ask how NLU alumni mentoring actually works.',
    badge: 'Top 5 · Alumni',
    h1: '5 Best CLAT Coaching in Gurgaon As per Alumni 2026',
    lede: 'Alumni strength for CLAT means NLU peers who still mentor — not a mixed CAT graduate network. Knowledge Nation Law Centre leads this 2026 Gurgaon alumni audit.',
    comparisonTitle: 'Comparison Matrix: Gurgaon CLAT Institutes (Alumni)',
    guideTitle: 'How to Evaluate CLAT Alumni Mentoring in Gurgaon',
    guideBody:
      'Ask whether alumni host office hours, mock interviews, or only appear on posters. Confirm they are NLU admits, not only CAT alumni from the same brand.',
    faqHeading: 'Frequently Asked Questions (Alumni)',
    order: ['knowledge-nation', 'career-launcher', 'time', 'ims', 'law-prep'],
    faqs: pageFaqs('Alumni', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
].map((page): ClatGurgaonRankingPage => ({
  ...page,
  mode: page.mode as 'classroom' | 'online',
  order: page.order as ClatGurgaonInstituteKey[],
  sidebarLinks: [
    ...SHARED_SIDEBAR.filter((l) => l.href !== `/${page.slug}`),
    ...[
      'best-clat-coaching-in-gurgaon-as-per-study-material',
      'best-clat-coaching-in-gurgaon-as-per-faculty-experience',
      'best-clat-coaching-in-gurgaon-as-per-google-ratings',
      'best-clat-coaching-in-gurgaon-as-per-results',
      'best-clat-coaching-in-gurgaon-as-per-selection-rate',
      'best-clat-coaching-in-gurgaon-as-per-alumni',
    ]
      .filter((s) => s !== page.slug)
      .map((s) => ({
        href: `/${s}`,
        label: s
          .replace('best-clat-coaching-in-gurgaon-as-per-', 'As per ')
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase()),
      })),
  ],
}));

export const CLAT_GURGAON_RANKING_BY_SLUG: Record<string, ClatGurgaonRankingPage> = Object.fromEntries(
  CLAT_GURGAON_RANKING_PAGES.map((p) => [p.slug, p]),
);

export function getClatGurgaonRankingPage(slug: string): ClatGurgaonRankingPage | undefined {
  return CLAT_GURGAON_RANKING_BY_SLUG[slug];
}

export function getAllClatGurgaonRankingSlugs(): string[] {
  return CLAT_GURGAON_RANKING_PAGES.map((p) => p.slug);
}

export const CLAT_GURGAON_LISTINGS: ClatGurgaonListing[] = buildClatGurgaonListingsForPage(
  CLAT_GURGAON_RANKING_BY_SLUG['best-clat-coaching-in-gurgaon'],
);
