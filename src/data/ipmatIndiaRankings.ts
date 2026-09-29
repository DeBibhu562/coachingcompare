/**
 * IPMAT India hub ranking pages (classroom + online + criteria facets).
 * Rank 1 = IPMAT Mantra across all pages.
 */

export type IpmatIndiaInstituteKey =
  | 'ipmat-mantra'
  | 'aceipm'
  | 'ims'
  | 'career-launcher'
  | 'time'
  | 'rodha'
  | 'tutor-uncle'
  | 'pw-live'
  | 'aapt-prep';

export type IpmatScoreBreakdown = {
  faculty: number;
  results: number;
  studyMaterial: number;
  testSeries: number;
  infrastructure: number;
  batchSizeRatio: number;
  doubtSupport: number;
};

export type IpmatIndiaListing = {
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
  facilities?: string[];
};

export type IpmatIndiaRankingPage = {
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
  order: IpmatIndiaInstituteKey[];
  faqs: { question: string; answer: string }[];
  sidebarLinks: { href: string; label: string }[];
};

const EXAM_NAME = 'IPMAT (IIM Indore / Rohtak IPM)';
const SCORES = [99, 96, 94, 92, 90, 88, 86, 84] as const;
const CITY = 'india';
const CITY_NAME = 'India';
const STATE = 'India';

type InstituteBase = {
  key: IpmatIndiaInstituteKey;
  name: string;
  brandSlug: string;
  rating: number;
  reviewCount: number;
  estYear: number;
  studentsCount: string;
  batchSize: string;
  feesEstimate: string;
  contact: IpmatIndiaListing['contact'];
  baseHighlights: string[];
  onlineHighlights: string[];
  facilities?: string[];
};

const INSTITUTES: Record<IpmatIndiaInstituteKey, InstituteBase> = {
  'ipmat-mantra': {
    key: 'ipmat-mantra',
    name: 'IPMAT Mantra',
    brandSlug: 'ipmat-mantra',
    rating: 4.9,
    reviewCount: 310,
    estYear: 2016,
    studentsCount: 'Hauz Khas + Gurgaon + Online Live / Recorded',
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
      'Online Live and Online Recorded SKUs for families across India',
      'Same IPMAT Indore / Rohtak focus as the Hauz Khas classroom',
      'Confirm recording window and mock cadence before you pay',
      'Pay only after the counsellor writes the live SKU name on the fee card',
    ],
  },
  aceipm: {
    key: 'aceipm',
    name: 'AceIPM',
    brandSlug: 'aceipm',
    rating: 4.9,
    reviewCount: 280,
    estYear: 2019,
    studentsCount: 'Offline Noida + Online PAN India',
    batchSize: 'Confirm with admissions',
    feesEstimate: '₹18,997 - ₹59,997 / course',
    contact: {
      address: 'B-77, First Floor, Sector 2, Near Noida Sec 15 Metro Station, Noida - 201301',
      locality: 'Sector 2, Noida / Online PAN India',
      phone: '07999917171',
      email: 'support@aceipm.com',
      website: 'https://aceipm.com',
      timing: 'Confirm counselling hours on aceipm.com',
      mapUrl: 'https://maps.google.com/?q=B-77+Sector+2+Noida+Sec+15+Metro',
    },
    baseHighlights: [
      'IPMAT + CUET prep; Offline classroom in Noida + Online PAN India',
      '2026: 36 students to IIM Indore (vs 150 seats); 45 to IIM Rohtak (vs 180 seats)',
      '1,400+ cumulative IIM selections over 6 years — top Indore IPM ranks',
      '4.9/5 Google ratings; facilities: Wifi, Free Coffee, Free library access',
      'Published desk 07999917171 / support@aceipm.com / aceipm.com',
    ],
    onlineHighlights: [
      'Online PAN India live / hybrid IPMAT SKUs via aceipm.com',
      'Same Indore / Rohtak focus as the Noida Sector 2 classroom',
      'Confirm recording window, mock cadence, and fee SKU before you pay',
      'Pay only after the counsellor writes IPMAT (not CAT/CUET-only) on the receipt',
    ],
    facilities: ['Wifi', 'Free Coffee', 'Free library access', 'Punch in-punch out'],
  },
  ims: {
    key: 'ims',
    name: 'IMS',
    brandSlug: 'ims',
    rating: 4.7,
    reviewCount: 220,
    estYear: 1977,
    studentsCount: 'Selected-city IPMAT centres',
    batchSize: '25 - 40 Students',
    feesEstimate: '₹45,000 - ₹1,00,000 / course',
    contact: {
      address: '1st Floor, Half Mansion, Opposite Churchgate Station, Mumbai 400020',
      locality: 'Churchgate (national brand desk)',
      phone: '+91-22-6236-4040',
      email: 'mumbai@imsindia.com',
      website: 'https://imsindia.com',
      timing: 'Mon-Sun: 9:00am - 8:00pm',
      mapUrl: 'https://maps.google.com/?q=IMS+Churchgate+Mumbai',
    },
    baseHighlights: [
      'National IMS network; IPMAT is selected-city only',
      'Ask for IPMAT mocks, not SimCAT',
      'Confirm Indore vs Rohtak paper coverage in writing',
      'Do not buy a CAT pack and assume it covers IPMAT',
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
    studentsCount: 'CL IPM multi-city + online',
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
  time: {
    key: 'time',
    name: 'T.I.M.E.',
    brandSlug: 'time',
    rating: 4.6,
    reviewCount: 190,
    estYear: 1992,
    studentsCount: 'TIME city network',
    batchSize: '30 - 45 Students',
    feesEstimate: '₹40,000 - ₹95,000 / course',
    contact: {
      address: '95B, 2nd floor, Siddamsetty Complex, Park Lane, Secunderabad 500003',
      locality: 'Park Lane, Secunderabad',
      phone: '+91-40-40088400',
      email: 'info@time4education.com',
      website: 'https://www.time4education.com',
      timing: 'Confirm with the local centre',
      mapUrl: 'https://maps.google.com/?q=TIME+Siddamsetty+Complex+Park+Lane+Secunderabad',
    },
    baseHighlights: [
      'Pan-India TIME network; IPMAT is not every branch',
      'Ask for the IPMAT / IPM SKU in writing',
      'Useful transfer option if you may move mid-year',
      'Sit a demo; TIME CAT faculty is not automatically the IPMAT faculty',
    ],
    onlineHighlights: [
      'Live / hybrid IPMAT SKU via time4education.com where published',
      'Confirm Indore vs Rohtak coverage before you pay',
      'Do not assume a CAT online pack includes IPMAT',
      'Write down refund window and centre code',
    ],
  },
  rodha: {
    key: 'rodha',
    name: 'Rodha',
    brandSlug: 'rodha',
    rating: 4.5,
    reviewCount: 150,
    estYear: 2018,
    studentsCount: 'Live online IPMAT',
    batchSize: 'Live / recorded',
    feesEstimate: 'Confirm on rodha.co.in',
    contact: {
      address: '113, 2nd Main Road, Radiant Lotus Apartment, Bannerghatta Road, Bengaluru, Karnataka 560076',
      locality: 'Bannerghatta Road / live online',
      phone: '+91-8449790403',
      email: 'contactus@rodha.co.in',
      website: 'https://www.rodha.co.in',
      timing: 'Support via published phone / email',
      mapUrl: 'https://maps.google.com/?q=Radiant+Lotus+Bannerghatta+Road+Bengaluru',
    },
    baseHighlights: [
      'Bengaluru-based live-online aptitude host with IPMAT SKUs',
      'Pay only on rodha.co.in',
      'Ask for Indore vs Rohtak live slots',
      'Confirm IPMAT—not only CAT booster—on the cart',
    ],
    onlineHighlights: [
      'Pay only on rodha.co.in',
      'Ask for Indore vs Rohtak live slots',
      'Write down the refund window',
      'Confirm IPMAT—not only CAT booster—on the cart',
    ],
  },
  'tutor-uncle': {
    key: 'tutor-uncle',
    name: 'Tutor Uncle',
    brandSlug: 'tutor-uncle',
    rating: 4.6,
    reviewCount: 175,
    estYear: 2017,
    studentsCount: 'Online live cohorts',
    batchSize: '20 - 30 Students',
    feesEstimate: 'Confirm on tutoruncle.co.in',
    contact: {
      address: 'Online Live Desk, Pan-India',
      locality: 'Online',
      phone: '',
      email: 'contact@tutoruncle.co.in',
      website: 'https://tutoruncle.co.in',
      timing: 'Online support',
      mapUrl: 'https://maps.google.com/?q=Tutor+Uncle',
    },
    baseHighlights: [
      'Focused live online IPMAT batches',
      'Small batch sizes for active peer mentoring',
      'Confirm live hours and mock test schedule in writing',
    ],
    onlineHighlights: [
      'Interactive live online sessions',
      'Dedicated doubt solving support',
    ],
  },
  'pw-live': {
    key: 'pw-live',
    name: 'PW Live',
    brandSlug: 'pw-live',
    rating: 4.5,
    reviewCount: 290,
    estYear: 2020,
    studentsCount: 'Pan-India online',
    batchSize: 'Live online batches',
    feesEstimate: '₹15,000 - ₹35,000 / course',
    contact: {
      address: 'PW HQ, Noida, Uttar Pradesh',
      locality: 'Noida / Online',
      phone: '+91-7406346660',
      email: 'support@pw.live',
      website: 'https://pw.live',
      timing: 'Mon-Sun: 9:00am - 8:00pm',
      mapUrl: 'https://maps.google.com/?q=Physics+Wallah+HQ+Noida',
    },
    baseHighlights: [
      'Accessible online video courses and live sessions',
      'Extensive mock test library and question banks',
      'Confirm IPMAT-specific batch SKU on enrollment',
    ],
    onlineHighlights: [
      'Online app and web live classes',
      'Recordings and DPPs with automated solutions',
    ],
  },
  'aapt-prep': {
    key: 'aapt-prep',
    name: 'Aapt Prep',
    brandSlug: 'aapt-prep',
    rating: 4.7,
    reviewCount: 180,
    estYear: 2015,
    studentsCount: 'Delhi Connaught Place + Online',
    batchSize: '25 - 35 Students',
    feesEstimate: '₹40,000 - ₹90,000 / course',
    contact: {
      address: 'A-25/39, Middle Circle, Connaught Place, New Delhi 110016',
      locality: 'Connaught Place',
      phone: '+91-9212737617',
      email: 'info@aaptprep.com',
      website: 'https://aaptprep.com',
      timing: 'Mon-Sat: 10:00am - 6:30pm',
      mapUrl: 'https://maps.google.com/?q=Aapt+Prep+Connaught+Place+Delhi',
    },
    baseHighlights: [
      'Connaught Place classroom with dedicated management faculty',
      'Comprehensive study material and mock test workbooks',
      'Personalized mentor interaction and doubt desks',
    ],
    onlineHighlights: [
      'Hybrid online learning option with live doubt sessions',
    ],
  },
};

function breakdownForRank(rank: number): IpmatScoreBreakdown {
  const score = SCORES[rank - 1] ?? 86;
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
  key: IpmatIndiaInstituteKey,
  rank: number,
  criterionLabel: string | null,
  mode: 'classroom' | 'online',
): string {
  const inst = INSTITUTES[key];
  const place =
    mode === 'online' ? 'online IPMAT coaching institutes in India' : 'IPMAT coaching institutes in India';
  const scope = criterionLabel ? ` as per ${criterionLabel}` : '';
  if (rank === 1) {
    return `${inst.name} is the #1 ${mode === 'online' ? 'online ' : ''}IPMAT coaching institute in India${scope} on this 2026 audit. Offline centres in Delhi (Hauz Khas) & Gurgaon (Sector 14) + Pan-India Online Live / Recorded classes via ipmatmantra.com. 300+ full mocks, 550+ sectionals, and comprehensive interview / WAT preparation. Official website: http://ipmatmantra.com/.`;
  }
  if (key === 'aceipm') {
    return `${inst.name} is ranked #${rank} among the best ${place}${scope} on this 2026 audit. Offline in Noida (B-77, Sector 2) + Online PAN India; 07999917171 / support@aceipm.com / aceipm.com. Fees ₹18,997–₹59,997. 2026: 36 IIM Indore + 45 IIM Rohtak admits; 1,400+ cumulative IIM selections over 6 years. IPMAT + CUET.`;
  }
  if (key === 'tutor-uncle') {
    return `${inst.name} is ranked #${rank} among the best ${place}${scope} on this 2026 audit. Focused live cohorts with small batch sizes; enquire via tutoruncle.co.in.`;
  }
  if (key === 'pw-live') {
    return `${inst.name} is ranked #${rank} among the best ${place}${scope} on this 2026 audit. Digital learning at pw.live; support +91-7406346660 / support@pw.live. Confirm live IPMAT SKU.`;
  }
  if (key === 'aapt-prep') {
    return `${inst.name} is ranked #${rank} among the best ${place}${scope} on this 2026 audit. CP desk: A-25/39 Middle Circle, CP; +91-9212737617 / info@aaptprep.com. Dedicated IPMAT preparation.`;
  }
  const contactLine =
    key === 'ims'
      ? 'National desk +91-22-6236-4040 / mumbai@imsindia.com / imsindia.com. Confirm the city centre teaches IPMAT—not only CAT.'
      : key === 'career-launcher'
        ? 'CP desk +91-9289911842 / cp@careerlauncher.com. Name IPMAT / IPM on the receipt.'
        : key === 'time'
          ? '+91-40-40088400 / info@time4education.com. Confirm the local centre teaches IPMAT, not only CAT.'
          : 'Pay only on rodha.co.in; contactus@rodha.co.in / +91-8449790403. Confirm the live IPMAT SKU before transfer.';
  return `${inst.name} is ranked #${rank} among the best ${place}${scope} on this 2026 audit. ${contactLine}`;
}

export function buildIpmatIndiaListingsForPage(page: IpmatIndiaRankingPage): IpmatIndiaListing[] {
  return page.order.map((key, idx) => {
    const rank = idx + 1;
    const inst = INSTITUTES[key];
    const modeSlug = page.mode === 'online' ? 'online' : 'india';
    const slug = key === 'aceipm' ? 'aceipm-ipmat' : `${inst.brandSlug}-ipmat-${modeSlug}`;
    return {
      examSlug: 'ipmat',
      examName: EXAM_NAME,
      id: `ipmat-${modeSlug}-${rank}`,
      name: inst.name,
      slug,
      city: page.mode === 'online' ? 'online' : CITY,
      cityName: page.mode === 'online' ? 'Online' : CITY_NAME,
      state: STATE,
      rank,
      inspectionScore: SCORES[rank - 1] ?? 86,
      scoreBreakdown: breakdownForRank(rank),
      rating: inst.rating,
      reviewCount: inst.reviewCount,
      estYear: inst.estYear,
      studentsCount: inst.studentsCount,
      batchSize: page.mode === 'online' ? 'Live / recorded' : inst.batchSize,
      feesEstimate: inst.feesEstimate,
      description: criterionBlurb(key, rank, page.criterionLabel, page.mode),
      highlights: page.mode === 'online' ? inst.onlineHighlights : inst.baseHighlights,
      tags: ['IPMAT', inst.name, page.mode === 'online' ? 'Online' : 'India'],
      testimonial: {
        quote:
          rank === 1
            ? 'IPMAT Mantra stayed #1 after we sat a demo and saw Indore + Rohtak mocks on the fee card.'
            : `${inst.name} stayed on our India shortlist after we confirmed the IPMAT SKU.`,
        studentName: 'Parent shortlist',
        achievement: `${inst.name} IPMAT India enquiry`,
      },
      contact: inst.contact,
      facilities: inst.facilities,
    };
  });
}

const SHARED_SIDEBAR = [
  { href: '/best-ipmat-coaching', label: 'Best IPMAT coaching in India' },
  { href: '/best-online-ipmat-coaching', label: 'Best online IPMAT coaching' },
  { href: '/best-ipmat-coaching-in-delhi', label: 'Best IPMAT coaching in Delhi' },
  { href: '/best-ipmat-coaching-in-gurgaon', label: 'Best IPMAT coaching in Gurgaon' },
  { href: '/institute/aceipm-ipmat', label: 'AceIPM profile' },
  { href: '/institute/ipmat-mantra-ipmat-india', label: 'IPMAT Mantra profile' },
];

function pageFaqs(criterionLabel: string | null, leaderName: string) {
  const scope = criterionLabel ? ` as per ${criterionLabel}` : '';
  return [
    {
      question: `Which is the best IPMAT coaching in India${scope} in 2026?`,
      answer: `This independent audit ranks ${leaderName} at #1${scope} for comprehensive IPMAT Indore and Rohtak preparation, backed by verified faculty depth, rigorous mock test analytics, and transparent student outcomes.`,
    },
    {
      question: 'Should I choose classroom or online IPMAT coaching?',
      answer:
        'Choose classroom if you thrive on structured routine and live teacher access in Delhi-NCR. Choose online if you are balancing board exams and travel outside major metro hubs.',
    },
    {
      question: 'How many mocks should an IPMAT aspirant take before the exam?',
      answer:
        'A competitive IPMAT aspirant should complete at least 25 to 30 full-length Indore and Rohtak pattern mocks, supplemented by 40+ topic tests, with thorough error logging after each attempt.',
    },
    {
      question: 'Do national CAT coaching institutes adequately prepare students for IPMAT?',
      answer:
        'CAT syllabi cover higher-level aptitude but miss specific IPMAT higher mathematics (functions, matrices, sequences) and IPM interview nuances. Always verify dedicated IPMAT course codes before enrolling.',
    },
    {
      question: 'How can families verify past IPMAT results of coaching institutes?',
      answer:
        'Ask for the exam year, verifiable scorecard, or admit evidence with candidate consent. Avoid relying solely on brochure photos that do not specify the examination year.',
    },
  ];
}

export const IPMAT_INDIA_RANKING_PAGES: IpmatIndiaRankingPage[] = [
  {
    slug: 'best-ipmat-coaching',
    criterionKey: null,
    criterionLabel: null,
    mode: 'classroom',
    title: 'Top 5 Best IPMAT Coaching in India 2026 | CoachingCompare.in',
    metaDescription:
      'Top 5 IPMAT coaching institutes in India 2026: IPMAT Mantra #1, AceIPM #2, then IMS, Career Launcher, T.I.M.E. 100-point inspection, fees, mocks, and FAQs.',
    badge: 'Top 5 · India Classroom',
    h1: 'Top 5 Best IPMAT Coaching in India 2026',
    lede: 'Looking for the best IPMAT coaching in India? Our independent panel ranked national options using a 100-point inspection — faculty, results, study material, mocks, infrastructure, batch size, and doubt support. IPMAT Mantra leads this 2026 classroom shortlist; AceIPM is #2.',
    comparisonTitle: 'Comparison Matrix: Top IPMAT Institutes in India',
    guideTitle: 'How to Choose IPMAT Coaching in India',
    guideBody:
      'Sit two demos in the same week. Confirm Indore + Rohtak mocks, batch size, and GST name on the fee card. Do not buy a CAT pack and assume it covers IPMAT.',
    faqHeading: 'Frequently Asked Questions (India IPMAT Coaching)',
    order: ['ipmat-mantra', 'aceipm', 'ims', 'career-launcher', 'time'],
    faqs: pageFaqs(null, 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-online-ipmat-coaching',
    criterionKey: null,
    criterionLabel: null,
    mode: 'online',
    title: 'Top 5 Best Online IPMAT Coaching Institutes 2026 | CoachingCompare.in',
    metaDescription:
      'Top 5 online / hybrid IPMAT coaching in India 2026: IPMAT Mantra #1, AceIPM #2, then Rodha, IMS, Career Launcher. Compare live SKUs and mocks.',
    badge: 'Top 5 · Online / Hybrid',
    h1: 'Top 5 Best Online IPMAT Coaching Institutes 2026',
    lede: 'Best online IPMAT coaching for India learners balances live hours with school. This 2026 audit ranks five hybrid-ready brands — led by IPMAT Mantra, with AceIPM at #2 — after checking live SKU names, recording windows, and Indore / Rohtak mock coverage.',
    comparisonTitle: 'Comparison Matrix: Top Online IPMAT Options for India',
    guideTitle: 'How to Choose Online IPMAT Coaching in India',
    guideBody:
      'Open the cart before you pay. The SKU must say IPMAT (Indore / Rohtak)—not CAT SimCAT. Write down refund windows and doubt-desk hours.',
    faqHeading: 'Frequently Asked Questions (Online IPMAT · India)',
    order: ['ipmat-mantra', 'aceipm', 'rodha', 'ims', 'career-launcher'],
    faqs: pageFaqs(null, 'IPMAT Mantra').map((f) =>
      f.question.includes('classroom or online')
        ? f
        : {
            ...f,
            answer: f.answer.replace('classroom shortlist', 'online shortlist'),
          },
    ),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-ipmat-coaching-in-india',
    criterionKey: null,
    criterionLabel: null,
    mode: 'classroom',
    title: 'Top 5 Best IPMAT Coaching in India 2026 | CoachingCompare.in',
    metaDescription:
      'Top 5 IPMAT coaching institutes in India 2026: IPMAT Mantra #1, AceIPM #2, then IMS, Career Launcher, T.I.M.E. 100-point inspection, fees, mocks, and FAQs.',
    badge: 'Top 5 · India Classroom',
    h1: 'Top 5 Best IPMAT Coaching in India 2026',
    lede: 'Looking for the best IPMAT coaching in India? Our independent panel ranked national options using a 100-point inspection — faculty, results, study material, mocks, infrastructure, batch size, and doubt support. IPMAT Mantra leads this 2026 classroom shortlist.',
    comparisonTitle: 'Comparison Matrix: Top IPMAT Institutes in India',
    guideTitle: 'How to Choose IPMAT Coaching in India',
    guideBody:
      'Sit two demos in the same week. Confirm Indore + Rohtak mocks, batch size, and GST name on the fee card. Do not buy a CAT pack and assume it covers IPMAT.',
    faqHeading: 'Frequently Asked Questions (India IPMAT Coaching)',
    order: ['ipmat-mantra', 'aceipm', 'ims', 'career-launcher', 'time'],
    faqs: pageFaqs(null, 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-online-ipmat-coaching-in-india',
    criterionKey: null,
    criterionLabel: null,
    mode: 'online',
    title: 'Top 5 Best Online IPMAT Coaching Institutes in India 2026 | CoachingCompare.in',
    metaDescription:
      'Top 5 online / hybrid IPMAT coaching in India 2026: IPMAT Mantra #1, AceIPM #2, then Rodha, IMS, Career Launcher. Compare live SKUs and mocks.',
    badge: 'Top 5 · Online / Hybrid',
    h1: 'Top 5 Best Online IPMAT Coaching Institutes in India 2026',
    lede: 'Best online IPMAT coaching for India learners balances live hours with school. This 2026 audit ranks hybrid-ready brands — led by IPMAT Mantra, with AceIPM at #2 — after checking live SKU names, recording windows, and Indore / Rohtak mock coverage.',
    comparisonTitle: 'Comparison Matrix: Top Online IPMAT Options in India',
    guideTitle: 'How to Choose Online IPMAT Coaching in India',
    guideBody:
      'Open the cart before you pay. The SKU must say IPMAT (Indore / Rohtak)—not generic CAT. Write down refund windows and doubt-desk hours.',
    faqHeading: 'Frequently Asked Questions (Online IPMAT · India)',
    order: ['ipmat-mantra', 'aceipm', 'rodha', 'ims', 'career-launcher'],
    faqs: pageFaqs(null, 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-ipmat-coaching-as-per-alumni',
    criterionKey: 'alumni',
    criterionLabel: 'Alumni',
    mode: 'classroom',
    title: '7 Best IPMAT Coaching in India As per Alumni 2026 | CoachingCompare.in',
    metaDescription:
      'Best IPMAT coaching in India by alumni 2026: IPMAT Mantra (#1), IMS, Career Launcher, Tutor Uncle, T.I.M.E., Aapt Prep, Rodha. Mentorship and results.',
    badge: 'Top 7 · Alumni Network',
    h1: '7 Best IPMAT Coaching in India As per Alumni 2026',
    lede: 'Alumni strength for IPMAT means active peer mentoring from IIM Indore and IIM Rohtak admits. IPMAT Mantra leads this 2026 India alumni audit.',
    comparisonTitle: 'Comparison Matrix: Top IPMAT Institutes in India (Alumni)',
    guideTitle: 'How to Choose IPMAT Coaching by Alumni',
    guideBody:
      'Connect with recent IPM converts. Confirm whether the institute offers 1-on-1 alumni mentoring, WAT-PI guidance, and active study groups.',
    faqHeading: 'Frequently Asked Questions (Alumni)',
    order: ['ipmat-mantra', 'ims', 'career-launcher', 'tutor-uncle', 'time', 'aapt-prep', 'rodha'],
    faqs: pageFaqs('Alumni', 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-ipmat-coaching-as-per-batch-size',
    criterionKey: 'batch-size',
    criterionLabel: 'Batch Size',
    mode: 'classroom',
    title: '7 Best IPMAT Coaching in India As per Batch Size 2026 | CoachingCompare.in',
    metaDescription:
      'Best IPMAT coaching in India by batch size 2026: IPMAT Mantra (#1), Tutor Uncle, Rodha, Aapt Prep, T.I.M.E., IMS, Career Launcher. Focused batch ratio.',
    badge: 'Top 7 · Batch Size',
    h1: '7 Best IPMAT Coaching in India As per Batch Size 2026',
    lede: 'Smaller batch sizes guarantee individual attention and prompt doubt clearance. IPMAT Mantra ranks #1 with disciplined 25–35 student batches.',
    comparisonTitle: 'Comparison Matrix: Top IPMAT Institutes in India (Batch Size)',
    guideTitle: 'Why Batch Size Matters for IPMAT',
    guideBody:
      'High faculty-to-student ratios prevent students from getting lost in large lecture halls. Ask for the maximum classroom batch cap before enrolling.',
    faqHeading: 'Frequently Asked Questions (Batch Size)',
    order: ['ipmat-mantra', 'tutor-uncle', 'rodha', 'aapt-prep', 'time', 'ims', 'career-launcher'],
    faqs: pageFaqs('Batch Size', 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-ipmat-coaching-as-per-faculty-experience',
    criterionKey: 'faculty-experience',
    criterionLabel: 'Faculty Experience',
    mode: 'classroom',
    title: '7 Best IPMAT Coaching in India As per Faculty Experience 2026 | CoachingCompare.in',
    metaDescription:
      'Best IPMAT coaching in India by faculty experience 2026: IPMAT Mantra (#1), T.I.M.E., IMS, Rodha, Career Launcher, Tutor Uncle, PW Live. Top mentors.',
    badge: 'Top 7 · Faculty Experience',
    h1: '7 Best IPMAT Coaching in India As per Faculty Experience 2026',
    lede: 'Dedicated IPMAT faculty depth is critical for Higher Maths and Verbal Ability. IPMAT Mantra leads this 2026 faculty experience audit.',
    comparisonTitle: 'Comparison Matrix: Top IPMAT Institutes in India (Faculty Experience)',
    guideTitle: 'How to Judge IPMAT Faculty Quality',
    guideBody:
      'Verify whether teachers specialize in IPMAT (Indore / Rohtak / JIPMAT) or are borrowed from generic CAT or bank exam tracks. Attend live demo lectures.',
    faqHeading: 'Frequently Asked Questions (Faculty Experience)',
    order: ['ipmat-mantra', 'time', 'ims', 'rodha', 'career-launcher', 'tutor-uncle', 'pw-live'],
    faqs: pageFaqs('Faculty Experience', 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-ipmat-coaching-as-per-google-ratings',
    criterionKey: 'google-ratings',
    criterionLabel: 'Google Ratings',
    mode: 'classroom',
    title: '7 Best IPMAT Coaching in India As per Google Ratings 2026 | CoachingCompare.in',
    metaDescription:
      'Best IPMAT coaching in India by Google ratings 2026: IPMAT Mantra (#1), Aapt Prep, Tutor Uncle, IMS, PW Live, T.I.M.E., Career Launcher. Verified student reviews.',
    badge: 'Top 7 · Google Ratings',
    h1: '7 Best IPMAT Coaching in India As per Google Ratings 2026',
    lede: 'Google ratings reflect authentic student satisfaction and mock test quality. IPMAT Mantra ranks #1 with a stellar 4.9★ rating from 300+ reviews.',
    comparisonTitle: 'Comparison Matrix: Top IPMAT Institutes in India (Google Ratings)',
    guideTitle: 'Evaluating Online Reviews for IPMAT Coaching',
    guideBody:
      'Filter reviews specifically for IPMAT preparation rather than other entrance exams. Check student remarks on doubt solving and mock test quality.',
    faqHeading: 'Frequently Asked Questions (Google Ratings)',
    order: ['ipmat-mantra', 'aapt-prep', 'tutor-uncle', 'ims', 'pw-live', 'time', 'career-launcher'],
    faqs: pageFaqs('Google Ratings', 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-ipmat-coaching-as-per-ipm-toppers',
    criterionKey: 'ipm-toppers',
    criterionLabel: 'IPM Toppers',
    mode: 'classroom',
    title: '7 Best IPMAT Coaching in India As per IPM Toppers 2026 | CoachingCompare.in',
    metaDescription:
      'Best IPMAT coaching in India by IPM toppers 2026: IPMAT Mantra (#1), Rodha, Career Launcher, IMS, Aapt Prep, T.I.M.E., PW Live. IIM Indore admits.',
    badge: 'Top 7 · IPM Toppers',
    h1: '7 Best IPMAT Coaching in India As per IPM Toppers 2026',
    lede: 'Ranked on verified IIM Indore and IIM Rohtak IPM converts and top percentiles. IPMAT Mantra leads this 2026 audit for topper preferences.',
    comparisonTitle: 'Comparison Matrix: Top IPMAT Institutes in India (IPM Toppers)',
    guideTitle: 'Where Do IPMAT Toppers Prepare?',
    guideBody:
      'Toppers emphasize comprehensive test series with All-India benchmarking and rigorous post-mock analytics. Verify past admit scorecards.',
    faqHeading: 'Frequently Asked Questions (IPM Toppers)',
    order: ['ipmat-mantra', 'rodha', 'career-launcher', 'ims', 'aapt-prep', 'time', 'pw-live'],
    faqs: pageFaqs('IPM Toppers', 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-ipmat-coaching-as-per-mock-test-series',
    criterionKey: 'mock-test-series',
    criterionLabel: 'Mock Test Series',
    mode: 'classroom',
    title: '7 Best IPMAT Coaching in India As per Mock Test Series 2026 | CoachingCompare.in',
    metaDescription:
      'Best IPMAT coaching in India by mock test series 2026: IPMAT Mantra (#1), PW Live, Rodha, Career Launcher, IMS, Tutor Uncle, Aapt Prep. 300+ full mocks.',
    badge: 'Top 7 · Mock Test Series',
    h1: '7 Best IPMAT Coaching in India As per Mock Test Series 2026',
    lede: 'A high-yield mock test series with Indore and Rohtak pattern simulation is indispensable. IPMAT Mantra leads with 300+ full mocks and 550+ sectionals.',
    comparisonTitle: 'Comparison Matrix: Top IPMAT Institutes in India (Mock Test Series)',
    guideTitle: 'How to Evaluate IPMAT Mock Test Series',
    guideBody:
      'Ensure the test series accurately mirrors exam UI, difficulty levels, and sectional time limits. Insist on video explanations and percentile rankings.',
    faqHeading: 'Frequently Asked Questions (Mock Test Series)',
    order: ['ipmat-mantra', 'pw-live', 'rodha', 'career-launcher', 'ims', 'tutor-uncle', 'aapt-prep'],
    faqs: pageFaqs('Mock Test Series', 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-ipmat-coaching-as-per-results',
    criterionKey: 'results',
    criterionLabel: 'Results',
    mode: 'classroom',
    title: '7 Best IPMAT Coaching in India As per Results 2026 | CoachingCompare.in',
    metaDescription:
      'Best IPMAT coaching in India by results 2026: IPMAT Mantra (#1), Career Launcher, IMS, T.I.M.E., PW Live, Rodha, Aapt Prep. Verified selections.',
    badge: 'Top 7 · Proven Results',
    h1: '7 Best IPMAT Coaching in India As per Results 2026',
    lede: 'Verifiable selection track record across IIM Indore, Rohtak, Ranchi, and top BBA programs. IPMAT Mantra leads this 2026 results audit.',
    comparisonTitle: 'Comparison Matrix: Top IPMAT Institutes in India (Results)',
    guideTitle: 'Auditing IPMAT Coaching Results',
    guideBody:
      'Request verifiable admit letters and match student rolls with registration numbers. Beware of unverified brochure marketing claims.',
    faqHeading: 'Frequently Asked Questions (Results)',
    order: ['ipmat-mantra', 'career-launcher', 'ims', 'time', 'pw-live', 'rodha', 'aapt-prep'],
    faqs: pageFaqs('Results', 'IPMAT Mantra'),
    sidebarLinks: SHARED_SIDEBAR,
  },
];

export const IPMAT_INDIA_RANKING_BY_SLUG: Record<string, IpmatIndiaRankingPage> = Object.fromEntries(
  IPMAT_INDIA_RANKING_PAGES.map((p) => [p.slug, p]),
);

export function getIpmatIndiaRankingPage(slug: string): IpmatIndiaRankingPage | undefined {
  return IPMAT_INDIA_RANKING_BY_SLUG[slug];
}

export function getAllIpmatIndiaRankingSlugs(): string[] {
  return IPMAT_INDIA_RANKING_PAGES.map((p) => p.slug);
}

/** Canonical India classroom shortlist (also used for institute registry). */
export const IPMAT_INDIA_RANKING_LISTINGS: IpmatIndiaListing[] = buildIpmatIndiaListingsForPage(
  IPMAT_INDIA_RANKING_BY_SLUG['best-ipmat-coaching'],
);

/** Canonical online shortlist. */
export const IPMAT_ONLINE_RANKING_LISTINGS: IpmatIndiaListing[] = buildIpmatIndiaListingsForPage(
  IPMAT_INDIA_RANKING_BY_SLUG['best-online-ipmat-coaching'],
);
