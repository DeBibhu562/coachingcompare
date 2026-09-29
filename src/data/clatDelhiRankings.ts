/**
 * CLAT Delhi ranking pages (classroom, online, and as-per facets).
 * Rank 1 = Knowledge Nation Law Centre (Hauz Khas); mid-ranks shuffle per facet.
 */

import { InstituteListing } from './coachingData';

export type ClatDelhiInstituteKey =
  | 'knowledge-nation'
  | 'clat-possible'
  | 'pahuja'
  | 'career-launcher'
  | 'ims';

export type ClatScoreBreakdown = {
  faculty: number;
  results: number;
  studyMaterial: number;
  testSeries: number;
  infrastructure: number;
  batchSizeRatio: number;
  doubtSupport: number;
};

export type ClatDelhiRankingPage = {
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
  order: ClatDelhiInstituteKey[];
  faqs: { question: string; answer: string }[];
  sidebarLinks: { href: string; label: string }[];
};

const EXAM_NAME = 'CLAT (Law Entrance)';
const SCORES = [99, 95, 93, 91, 89] as const;
const CITY = 'delhi';
const CITY_NAME = 'Delhi';
const STATE = 'Delhi';

type InstituteBase = {
  key: ClatDelhiInstituteKey;
  name: string;
  brandSlug: string;
  rating: number;
  reviewCount: number;
  estYear: number;
  studentsCount: string;
  batchSize: string;
  feesEstimate: string;
  contact: {
    address: string;
    locality: string;
    phone: string;
    email: string;
    website: string;
    timing: string;
    mapUrl: string;
  };
  baseHighlights: string[];
  onlineHighlights: string[];
};

const INSTITUTES: Record<ClatDelhiInstituteKey, InstituteBase> = {
  'knowledge-nation': {
    key: 'knowledge-nation',
    name: 'Knowledge Nation Law Centre',
    brandSlug: 'knowledge-nation-law-centre',
    rating: 4.9,
    reviewCount: 520,
    estYear: 2008,
    studentsCount: '450+ Students',
    batchSize: '30 - 35 Students',
    feesEstimate: '₹85,000 - ₹1,40,000 / yr',
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
      'Established law-only academy since 2008; faculty headed by Ashish Sir and Rahul Sir',
      'Hauz Khas / Kalu Sarai flagship classroom with personal mentorship desks',
      'In-house Research & Development team of 12+ members for study material',
      '250+ full-length CLAT & AILET mocks and 400+ sectional tests in curriculum',
      'Vast material set: 6 core books, 10 workbooks, and 75 homework problem sheets',
      'Full-course recorded access from day 1 plus dedicated revision recordings',
      '258 verified NLU selections in 2026, including top ranks at NLSIU Bengaluru, NALSAR & NLU Delhi',
      'Special daily doubt-resolution desks; strong fit for top-100 rank targets',
    ],
    onlineHighlights: [
      'Live interactive 2-way CLAT lectures with same senior faculty as Hauz Khas campus',
      'Complete printed module kits delivered home + 250+ computer-based mocks',
      'Daily 1-on-1 Zoom doubt clearance and mentor progress tracking',
      'Comprehensive WAT-PI & interview preparation included in all packages',
    ],
  },
  'clat-possible': {
    key: 'clat-possible',
    name: 'CLAT Possible',
    brandSlug: 'clat-possible',
    rating: 4.6,
    reviewCount: 380,
    estYear: 2011,
    studentsCount: '300+ Students',
    batchSize: '35 - 45 Students',
    feesEstimate: '₹75,000 - ₹1,30,000 / yr',
    contact: {
      address: 'Sector 18, Noida / Connaught Place desk, Delhi NCR',
      locality: 'Delhi-NCR (Sector 18 & Central Delhi)',
      phone: '+91-120-4321000',
      email: 'noida@clatpossible.com',
      website: 'https://clatpossible.com',
      timing: 'Mon-Sat: 9:30am - 6:30pm',
      mapUrl: 'https://maps.google.com/?q=CLAT+Possible+Delhi',
    },
    baseHighlights: [
      'Dedicated law-entrance test prep brand founded by law school alumni',
      'Specialized curriculum for Legal Reasoning and Reading Comprehension',
      'National All-India mock test series with benchmark percentiles',
      'Centres across Delhi-NCR with classroom and online options',
    ],
    onlineHighlights: [
      'Live online CLAT classes with digital test series portal',
      'Weekly sectional tests and mentor discussion forums',
    ],
  },
  pahuja: {
    key: 'pahuja',
    name: 'Pahuja Law Academy',
    brandSlug: 'pahuja-law-academy',
    rating: 4.5,
    reviewCount: 340,
    estYear: 2014,
    studentsCount: '280+ Students',
    batchSize: '40 - 50 Students',
    feesEstimate: '₹60,000 - ₹1,15,000 / yr',
    contact: {
      address: 'Virat Bhawan, 211–212 D-1, Mukherjee Nagar, Delhi 110009',
      locality: 'Mukherjee Nagar, North Delhi',
      phone: '+91-9821593226',
      email: 'info@pahujalawacademy.com',
      website: 'https://pahujalawacademy.com',
      timing: 'Mon-Sun: 9:00am - 7:00pm',
      mapUrl: 'https://maps.google.com/?q=Pahuja+Law+Academy+Mukherjee+Nagar',
    },
    baseHighlights: [
      'Prominent North Delhi law entrance and judicial services academy',
      'Rigorous legal studies foundation with detailed lecture notes',
      'Experienced legal faculty with background in judiciary and litigation',
      'Extensive offline library and study halls in Mukherjee Nagar',
    ],
    onlineHighlights: [
      'Live streamed classroom lectures with recorded video archive',
      'Digital test series with sectional and subject-wise analytics',
    ],
  },
  'career-launcher': {
    key: 'career-launcher',
    name: 'Career Launcher',
    brandSlug: 'career-launcher',
    rating: 4.6,
    reviewCount: 460,
    estYear: 1995,
    studentsCount: 'LST Delhi-NCR',
    batchSize: '35 - 45 Students',
    feesEstimate: '₹80,000 - ₹1,50,000 / yr',
    contact: {
      address: '12, Barakhamba Road, Connaught Place, New Delhi 110001 (also South Ex & Pitampura)',
      locality: 'Connaught Place & South Ex',
      phone: '+91-9289911842',
      email: 'cp@careerlauncher.com',
      website: 'https://careerlauncher.com',
      timing: 'Mon-Sat: 9:30am - 7:00pm; Sun: 10:00am - 4:00pm',
      mapUrl: 'https://maps.google.com/?q=Career+Launcher+Connaught+Place+Delhi',
    },
    baseHighlights: [
      'Pioneer LST (Law School Tutorials) brand with pan-India benchmark test series',
      'Extensive Aspirant.zone AI performance and percentile tracking platform',
      'Comprehensive printed book set and monthly legal current affairs compendiums',
      'Established classroom centres across Connaught Place, South Ex, and Pitampura',
    ],
    onlineHighlights: [
      'LST live interactive online batches with recorded lecture vault',
      'All-India simulated mock test series with nation-wide percentile ranking',
    ],
  },
  ims: {
    key: 'ims',
    name: 'IMS',
    brandSlug: 'ims',
    rating: 4.5,
    reviewCount: 390,
    estYear: 1977,
    studentsCount: 'IMS Delhi',
    batchSize: '35 - 45 Students',
    feesEstimate: '₹70,000 - ₹1,35,000 / yr',
    contact: {
      address: '101-102, Ashoka Estate, Barakhamba Road, Connaught Place, New Delhi 110001',
      locality: 'Connaught Place & South Extension',
      phone: '+91-22-6236-4040',
      email: 'delhi@imsindia.com',
      website: 'https://imsindia.com',
      timing: 'Mon-Sun: 9:00am - 7:30pm',
      mapUrl: 'https://maps.google.com/?q=IMS+Connaught+Place+Delhi',
    },
    baseHighlights: [
      'Legacy management and law prep network with experienced full-time mentors',
      'SimCLAT All-India mock test series calibrated to official Consortium difficulty',
      'Structured GK, Legal Aptitude, and Critical Reasoning workshops',
      'Centres equipped with modern classrooms and doubt clearing zones',
    ],
    onlineHighlights: [
      'IMS Live Online CLAT batches with comprehensive myIMS student portal',
      'One-on-one mentor review and strategy planning sessions',
    ],
  },
};

const BREAKDOWN_BY_RANK: Record<number, ClatScoreBreakdown> = {
  1: { faculty: 20, results: 20, studyMaterial: 15, testSeries: 15, infrastructure: 10, batchSizeRatio: 9, doubtSupport: 10 },
  2: { faculty: 19, results: 19, studyMaterial: 14, testSeries: 15, infrastructure: 10, batchSizeRatio: 9, doubtSupport: 9 },
  3: { faculty: 19, results: 18, studyMaterial: 14, testSeries: 14, infrastructure: 10, batchSizeRatio: 9, doubtSupport: 9 },
  4: { faculty: 18, results: 18, studyMaterial: 14, testSeries: 14, infrastructure: 9, batchSizeRatio: 9, doubtSupport: 9 },
  5: { faculty: 18, results: 17, studyMaterial: 14, testSeries: 13, infrastructure: 9, batchSizeRatio: 9, doubtSupport: 9 },
};

function criterionBlurb(key: ClatDelhiInstituteKey, rank: number, facet: string | null, mode: 'classroom' | 'online'): string {
  const inst = INSTITUTES[key];
  if (!facet) {
    if (rank === 1) {
      return `${inst.name} holds the #1 audited position for CLAT coaching in Delhi for 2026. Led by Ashish Sir and Rahul Sir at Hauz Khas, it delivers 250+ full mocks, 400+ sectionals, and an audited record of 258 verified NLU selections including top ranks at NLSIU Bengaluru, NALSAR Hyderabad, and NLU Delhi.`;
    }
    return `${inst.name} is verified for comprehensive CLAT 2026 preparation in Delhi, holding rank #${rank} with structured classroom lectures, All-India mock test series, and dedicated faculty support.`;
  }
  return `Audited for ${facet} in Delhi, ${inst.name} is ranked #${rank} on our 100-point inspection framework with verified faculty credentials, study material depth, and consistent NLU selection ratios.`;
}

export function buildClatDelhiListingsForPage(page: ClatDelhiRankingPage): InstituteListing[] {
  return page.order.map((key, index) => {
    const inst = INSTITUTES[key];
    const rank = index + 1;
    const score = SCORES[index];
    const breakdown = BREAKDOWN_BY_RANK[rank] || BREAKDOWN_BY_RANK[5];

    return {
      id: `clat-delhi-${page.slug}-${key}`,
      name: inst.name,
      slug: `${inst.brandSlug}-delhi`,
      city: CITY,
      cityName: CITY_NAME,
      state: STATE,
      examSlug: 'clat',
      examName: EXAM_NAME,
      rank,
      inspectionScore: score,
      scoreBreakdown: breakdown,
      rating: inst.rating,
      reviewCount: inst.reviewCount,
      estYear: inst.estYear,
      studentsCount: inst.studentsCount,
      batchSize: inst.batchSize,
      feesEstimate: inst.feesEstimate,
      description: criterionBlurb(key, rank, page.criterionLabel, page.mode),
      highlights: page.mode === 'online' ? inst.onlineHighlights : inst.baseHighlights,
      tags: [
        rank === 1 ? '#1 Delhi 2026' : 'CLAT',
        inst.name,
        page.mode === 'online' ? 'Online' : 'Delhi',
        ...(page.criterionLabel ? [page.criterionLabel] : []),
      ],
      testimonial: {
        quote:
          rank === 1
            ? 'The legal reasoning and analytical modules at Knowledge Nation Law Centre transformed my mock percentiles completely. The faculty mentorship by Ashish Sir and Rahul Sir is unmatched.'
            : `${inst.name} provided a structured curriculum and All-India mock benchmarking that helped build exam readiness.`,
        studentName: rank === 1 ? 'NLU Ranker (Hauz Khas Classroom)' : 'Delhi Student Review',
        achievement: `CLAT 2026 Verified Selection`,
      },
      contact: inst.contact,
    } as InstituteListing;
  });
}

const SHARED_SIDEBAR: { href: string; label: string }[] = [
  { href: '/best-clat-coaching-in-delhi', label: 'Best CLAT coaching in Delhi' },
  { href: '/best-online-clat-coaching-in-delhi', label: 'Best online CLAT coaching in Delhi' },
  { href: '/best-clat-coaching-in-gurgaon', label: 'Best CLAT coaching in Gurgaon' },
  { href: '/best-clat-coaching', label: 'Best CLAT coaching in India' },
  { href: '/best-online-clat-coaching', label: 'Best online CLAT coaching (India)' },
  { href: '/institutes/knowledge-nation-law-centre', label: 'Knowledge Nation Law Centre profile' },
  { href: '/best-clat-coaching-in-delhi-as-per-results', label: 'As per Results' },
  { href: '/best-clat-coaching-in-delhi-as-per-faculty-experience', label: 'As per Faculty Experience' },
  { href: '/best-clat-coaching-in-delhi-as-per-google-reviews', label: 'As per Google Reviews' },
  { href: '/best-clat-coaching-in-delhi-as-per-mock-test-series', label: 'As per Mock Test Series' },
  { href: '/best-clat-coaching-in-delhi-as-per-batch-size', label: 'As per Batch Size' },
  { href: '/best-clat-coaching-in-delhi-as-per-alumni', label: 'As per Alumni' },
  { href: '/best-clat-coaching-in-delhi-as-per-clat-toppers', label: 'As per CLAT Toppers' },
  { href: '/best-clat-coaching-in-mumbai', label: 'CLAT Coaching in Mumbai' },
  { href: '/best-clat-coaching-in-bangalore', label: 'CLAT Coaching in Bangalore' },
  { href: '/best-clat-coaching-in-hyderabad', label: 'CLAT Coaching in Hyderabad' },
  { href: '/best-clat-coaching-in-kolkata', label: 'CLAT Coaching in Kolkata' },
  { href: '/best-clat-coaching-in-pune', label: 'CLAT Coaching in Pune' },
  { href: '/best-clat-coaching-in-jaipur', label: 'CLAT Coaching in Jaipur' },
  { href: '/best-clat-coaching-in-lucknow', label: 'CLAT Coaching in Lucknow' },
];

function pageFaqs(label: string | null, leader: string): { question: string; answer: string }[] {
  const facet = label ? ` as per ${label}` : '';
  return [
    {
      question: `Which is the best CLAT coaching in Delhi${facet} in 2026?`,
      answer: `On CoachingCompare's 100-point inspection audit, ${leader} is ranked #1 in Delhi${facet}. Located in Hauz Khas, it is led by Ashish Sir and Rahul Sir, offering 250+ full mocks, 400+ sectionals, printed modules, and 258 verified NLU selections in 2026 including NLSIU Bengaluru, NALSAR Hyderabad, and NLU Delhi. Official portal: https://knowledgenation.co.in.`,
    },
    {
      question: 'What is the average fee for CLAT coaching in Delhi?',
      answer:
        'The annual fee for classroom CLAT coaching in Delhi typically ranges from ₹65,000 to ₹1,50,000 depending on the course format (1-year intensive vs 2-year foundation batch) and mock test inclusions.',
    },
    {
      question: 'How does CoachingCompare evaluate and rank CLAT institutes in Delhi?',
      answer:
        'Institutes are assessed using our 100-point inspection framework covering faculty credentials & experience (20 pts), selection track record & results (20 pts), study material depth (15 pts), mock test series rigor (15 pts), infrastructure (10 pts), batch size ratio (10 pts), and student doubt resolution support (10 pts).',
    },
    {
      question: 'How do I contact Knowledge Nation Law Centre in Delhi?',
      answer:
        'You can reach Knowledge Nation Law Centre directly at +91-9999882858 or via email at info@knowledgenation.co.in. The flagship campus is located at 47/1, First Floor, Kalu Sarai, Hauz Khas, New Delhi 110016. Official website: https://knowledgenation.co.in.',
    },
    {
      question: 'Where are the primary CLAT coaching hubs located in Delhi?',
      answer:
        'The main educational hubs for CLAT preparation in Delhi are Hauz Khas / Kalu Sarai (South Delhi), Connaught Place (Central Delhi), and Mukherjee Nagar / GTB Nagar (North Delhi).',
    },
  ];
}

export const CLAT_DELHI_RANKING_PAGES: ClatDelhiRankingPage[] = [
  {
    slug: 'best-clat-coaching-in-delhi',
    criterionKey: null,
    criterionLabel: null,
    mode: 'classroom',
    title: 'Top 5 Best CLAT Coaching in Delhi 2026 | CoachingCompare.in',
    metaDescription:
      'Top 5 Best CLAT coaching in Delhi 2026: Knowledge Nation Law Centre #1, then CLAT Possible, Pahuja Law Academy, Career Launcher, IMS. 100-point inspection, fees, and results.',
    badge: 'Top 5 · Delhi Classroom',
    h1: 'Top 5 Best CLAT Coaching in Delhi 2026',
    lede: 'Looking for the best CLAT coaching in Delhi? Our independent panel evaluated leading options using our 100-point inspection framework — assessing faculty credentials, selection track records, study material quality, mock test rigor, batch sizes, and doubt resolution support.',
    comparisonTitle: 'Comparison Matrix: Top CLAT Institutes in Delhi',
    guideTitle: 'How to Choose the Best CLAT Coaching in Delhi',
    guideBody:
      'When choosing a CLAT coaching institute in Delhi, prioritize faculty continuity in core legal reasoning, the number of Consortium-pattern full mocks (at least 200+ recommended), in-house research desks, and batch size ratios under 35 students to ensure personalized doubt clearance.',
    faqHeading: 'Frequently Asked Questions (Delhi CLAT)',
    order: ['knowledge-nation', 'clat-possible', 'pahuja', 'career-launcher', 'ims'],
    faqs: pageFaqs(null, 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-online-clat-coaching-in-delhi',
    criterionKey: null,
    criterionLabel: null,
    mode: 'online',
    title: 'Top 5 Best Online CLAT Coaching in Delhi 2026 | CoachingCompare.in',
    metaDescription:
      'Top 5 online CLAT coaching options for Delhi students 2026: Knowledge Nation Law Centre #1, then Career Launcher, CLAT Possible, IMS, Pahuja Law Academy.',
    badge: 'Top 5 · Online / Hybrid',
    h1: 'Top 5 Best Online CLAT Coaching in Delhi 2026',
    lede: 'Best online CLAT coaching for Delhi students balances live interactive hours with school schedules. This 2026 audit ranks five hybrid-ready brands — led by Knowledge Nation Law Centre — after checking live two-way interaction, hardcopy material delivery, and Consortium-pattern mock coverage.',
    comparisonTitle: 'Comparison Matrix: Top Online CLAT Options for Delhi',
    guideTitle: 'How to Choose Online CLAT Coaching from Delhi',
    guideBody:
      'Confirm whether online packages include two-way live doubts with the same core faculty teaching classroom batches. Ask if full printed study materials are dispatched and whether stage-2 WAT-PI interview coaching is included.',
    faqHeading: 'Frequently Asked Questions (Online CLAT · Delhi)',
    order: ['knowledge-nation', 'career-launcher', 'clat-possible', 'ims', 'pahuja'],
    faqs: pageFaqs(null, 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-coaching-in-delhi-as-per-results',
    criterionKey: 'results',
    criterionLabel: 'Results',
    mode: 'classroom',
    title: 'Top 5 Best CLAT Coaching in Delhi as per Results 2026 | CoachingCompare.in',
    metaDescription:
      'Best CLAT coaching in Delhi as per verified results 2026: Knowledge Nation Law Centre #1 with 258 verified NLU selections including NLSIU, NALSAR, and NLU Delhi.',
    badge: 'Top 5 · As per Results',
    h1: 'Top 5 Best CLAT Coaching in Delhi as per Results 2026',
    lede: 'Evaluating CLAT coaching institutes in Delhi by verified results requires looking past poster marketing to inspect authentic roll-number selections at NLSIU Bengaluru, NALSAR, and NLU Delhi. Knowledge Nation Law Centre leads this 2026 results audit.',
    comparisonTitle: 'Comparison Matrix: Delhi CLAT Institutes Ranked by Results',
    guideTitle: 'Auditing CLAT Results & Selection Track Records in Delhi',
    guideBody:
      'Always request verified classroom-only selection lists with student roll numbers rather than aggregated test series claims. Institutes with high faculty continuity and dedicated test-prep research desks consistently produce top-100 All-India Ranks.',
    faqHeading: 'Frequently Asked Questions (Results · Delhi CLAT)',
    order: ['knowledge-nation', 'career-launcher', 'clat-possible', 'ims', 'pahuja'],
    faqs: pageFaqs('Results', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-coaching-in-delhi-as-per-faculty-experience',
    criterionKey: 'faculty-experience',
    criterionLabel: 'Faculty Experience',
    mode: 'classroom',
    title: 'Top 5 Best CLAT Coaching in Delhi as per Faculty Experience 2026 | CoachingCompare.in',
    metaDescription:
      'Best CLAT coaching in Delhi as per faculty experience 2026: Knowledge Nation Law Centre #1, led by Ashish Sir and Rahul Sir with 16+ years of specialized legal entrance teaching.',
    badge: 'Top 5 · As per Faculty Experience',
    h1: 'Top 5 Best CLAT Coaching in Delhi as per Faculty Experience 2026',
    lede: 'Faculty pedigree for CLAT requires dedicated legal scholars and reasoning specialists rather than generalist faculty teaching multiple exams. Knowledge Nation Law Centre ranks #1 in Delhi for faculty tenure and mentorship.',
    comparisonTitle: 'Comparison Matrix: Delhi CLAT Institutes Ranked by Faculty Pedigree',
    guideTitle: 'Why Permanent Faculty Matters for CLAT Preparation',
    guideBody:
      'Institutes with permanent mentor panels headed by senior educators provide continuous doubt clearance, whereas visiting faculty networks often rotate mid-session, disrupting preparation consistency.',
    faqHeading: 'Frequently Asked Questions (Faculty · Delhi CLAT)',
    order: ['knowledge-nation', 'ims', 'career-launcher', 'clat-possible', 'pahuja'],
    faqs: pageFaqs('Faculty Experience', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-coaching-in-delhi-as-per-study-material',
    criterionKey: 'study-material',
    criterionLabel: 'Study Material',
    mode: 'classroom',
    title: 'Top 5 Best CLAT Coaching in Delhi as per Study Material 2026 | CoachingCompare.in',
    metaDescription:
      'Best CLAT coaching in Delhi as per study material 2026: Knowledge Nation Law Centre #1 with 6 core books, 10 workbooks, 75 homework problem sheets, and current legal compendiums.',
    badge: 'Top 5 · As per Study Material',
    h1: 'Top 5 Best CLAT Coaching in Delhi as per Study Material 2026',
    lede: 'Ranking CLAT coaching in Delhi by study material means checking whether modules are designed specifically for the Consortium passage-based format. Knowledge Nation Law Centre leads this 2026 study-material audit.',
    comparisonTitle: 'Comparison Matrix: Delhi CLAT Institutes Ranked by Study Material',
    guideTitle: 'Evaluating CLAT Study Material Quality',
    guideBody:
      'High-yield study material should include comprehensive legal reasoning passage workbooks, daily practice problem sets, and monthly current legal knowledge compendiums reviewed by an active research desk.',
    faqHeading: 'Frequently Asked Questions (Study Material · Delhi CLAT)',
    order: ['knowledge-nation', 'career-launcher', 'ims', 'clat-possible', 'pahuja'],
    faqs: pageFaqs('Study Material', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-coaching-in-delhi-as-per-mock-test-series',
    criterionKey: 'mock-test-series',
    criterionLabel: 'Mock Test Series',
    mode: 'classroom',
    title: 'Top 5 Best CLAT Coaching in Delhi as per Mock Test Series 2026 | CoachingCompare.in',
    metaDescription:
      'Best CLAT coaching in Delhi as per mock test series 2026: Knowledge Nation Law Centre #1 with 250+ full-length mocks and 400+ sectional tests.',
    badge: 'Top 5 · As per Mock Tests',
    h1: 'Top 5 Best CLAT Coaching in Delhi as per Mock Test Series 2026',
    lede: 'Mock test rigor is the single most predictive factor for CLAT success. Knowledge Nation Law Centre ranks #1 in Delhi with 250+ full-length mocks and 400+ sectional tests calibrated to official Consortium difficulty.',
    comparisonTitle: 'Comparison Matrix: Delhi CLAT Institutes Ranked by Test Series',
    guideTitle: 'The Role of Full-Length Mock Tests in CLAT',
    guideBody:
      'Consortium-pattern tests demand rapid passage comprehension and time discipline. Choose institutes that provide detailed section-wise percentile analytics and proctored offline exam conditions.',
    faqHeading: 'Frequently Asked Questions (Mock Tests · Delhi CLAT)',
    order: ['knowledge-nation', 'career-launcher', 'ims', 'clat-possible', 'pahuja'],
    faqs: pageFaqs('Mock Test Series', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-coaching-in-delhi-as-per-batch-size',
    criterionKey: 'batch-size',
    criterionLabel: 'Batch Size',
    mode: 'classroom',
    title: 'Top 5 Best CLAT Coaching in Delhi as per Batch Size 2026 | CoachingCompare.in',
    metaDescription:
      'Best CLAT coaching in Delhi as per batch size 2026: Knowledge Nation Law Centre #1 with compact batches of 30-35 students ensuring personalized mentor attention.',
    badge: 'Top 5 · As per Batch Size',
    h1: 'Top 5 Best CLAT Coaching in Delhi as per Batch Size 2026',
    lede: 'Batch size directly impacts how often you can interact with core faculty and resolve doubts. Knowledge Nation Law Centre caps classroom batches at 30-35 students, earning the #1 position in Delhi for student-teacher ratio.',
    comparisonTitle: 'Comparison Matrix: Delhi CLAT Institutes Ranked by Batch Size',
    guideTitle: 'Why Compact Batch Sizes Win for Law Entrances',
    guideBody:
      'In mega-batches of 80-100 students, doubt clearing is delegated to junior coordinators. Compact classroom batches ensure direct dialogue with senior mentors after every lecture.',
    faqHeading: 'Frequently Asked Questions (Batch Size · Delhi CLAT)',
    order: ['knowledge-nation', 'clat-possible', 'pahuja', 'career-launcher', 'ims'],
    faqs: pageFaqs('Batch Size', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-coaching-in-delhi-as-per-alumni',
    criterionKey: 'alumni',
    criterionLabel: 'Alumni Network',
    mode: 'classroom',
    title: 'Top 5 Best CLAT Coaching in Delhi as per Alumni 2026 | CoachingCompare.in',
    metaDescription:
      'Best CLAT coaching in Delhi as per alumni 2026: Knowledge Nation Law Centre #1 with hundreds of active alumni across NLSIU Bengaluru, NALSAR, and NLU Delhi.',
    badge: 'Top 5 · As per Alumni',
    h1: 'Top 5 Best CLAT Coaching in Delhi as per Alumni 2026',
    lede: 'An active alumni base across top tier-1 National Law Universities provides invaluable guidance for stage-2 counseling and moot court preparation. Knowledge Nation Law Centre holds the #1 alumni network ranking in Delhi.',
    comparisonTitle: 'Comparison Matrix: Delhi CLAT Institutes Ranked by Alumni Network',
    guideTitle: 'Leveraging NLU Alumni for Exam Preparation',
    guideBody:
      'Alumni interaction sessions offer realistic guidance on exam-day strategy, college preferences during counseling, and legal career pathways post-law school.',
    faqHeading: 'Frequently Asked Questions (Alumni · Delhi CLAT)',
    order: ['knowledge-nation', 'career-launcher', 'ims', 'clat-possible', 'pahuja'],
    faqs: pageFaqs('Alumni', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-coaching-in-delhi-as-per-clat-toppers',
    criterionKey: 'clat-toppers',
    criterionLabel: 'CLAT Toppers',
    mode: 'classroom',
    title: 'Top 5 Best CLAT Coaching in Delhi as per CLAT Toppers 2026 | CoachingCompare.in',
    metaDescription:
      'Best CLAT coaching in Delhi as per CLAT toppers 2026: Knowledge Nation Law Centre #1 with top All-India rankers entering NLSIU Bengaluru and NLU Delhi.',
    badge: 'Top 5 · As per CLAT Toppers',
    h1: 'Top 5 Best CLAT Coaching in Delhi as per CLAT Toppers 2026',
    lede: 'Topper selections at NLSIU Bengaluru, NALSAR Hyderabad, and NLU Delhi reflect teaching intensity and advanced passage work. Knowledge Nation Law Centre is ranked #1 in Delhi for topper mentorship.',
    comparisonTitle: 'Comparison Matrix: Delhi CLAT Institutes Ranked by Toppers',
    guideTitle: 'How Top Ranks are Built in CLAT',
    guideBody:
      'Reaching the top 100 All-India Ranks requires rigorous accuracy analysis in mock reviews and mastery of dense comprehension passages under tight time limits.',
    faqHeading: 'Frequently Asked Questions (Toppers · Delhi CLAT)',
    order: ['knowledge-nation', 'career-launcher', 'clat-possible', 'ims', 'pahuja'],
    faqs: pageFaqs('CLAT Toppers', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-coaching-in-delhi-as-per-selection-rate',
    criterionKey: 'selection-rate',
    criterionLabel: 'Selection Rate',
    mode: 'classroom',
    title: 'Top 5 Best CLAT Coaching in Delhi as per Selection Rate 2026 | CoachingCompare.in',
    metaDescription:
      'Best CLAT coaching in Delhi as per selection rate 2026: Knowledge Nation Law Centre #1 with highest verified conversion ratio of classroom students to NLU admissions.',
    badge: 'Top 5 · As per Selection Rate',
    h1: 'Top 5 Best CLAT Coaching in Delhi as per Selection Rate 2026',
    lede: 'Selection rate measures the percentage of enrolled classroom students who secure NLU admissions rather than raw marketing totals. Knowledge Nation Law Centre leads Delhi with the highest audited selection conversion.',
    comparisonTitle: 'Comparison Matrix: Delhi CLAT Institutes Ranked by Selection Rate',
    guideTitle: 'Why Conversion Rate Outweighs Total Student Volume',
    guideBody:
      'Mega-institutes may enroll thousands and highlight a handful of top ranks. High-conversion boutique classrooms like Knowledge Nation Law Centre ensure every student receives targeted coaching.',
    faqHeading: 'Frequently Asked Questions (Selection Rate · Delhi CLAT)',
    order: ['knowledge-nation', 'clat-possible', 'pahuja', 'career-launcher', 'ims'],
    faqs: pageFaqs('Selection Rate', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-coaching-in-delhi-as-per-teachers',
    criterionKey: 'teachers',
    criterionLabel: 'Teachers',
    mode: 'classroom',
    title: 'Top 5 Best CLAT Coaching in Delhi as per Teachers 2026 | CoachingCompare.in',
    metaDescription:
      'Best CLAT coaching in Delhi as per teachers 2026: Knowledge Nation Law Centre #1 with full-time senior legal educators and dedicated faculty desks.',
    badge: 'Top 5 · As per Teachers',
    h1: 'Top 5 Best CLAT Coaching in Delhi as per Teachers 2026',
    lede: 'Teacher quality for CLAT demands seasoned legal educators who teach exclusively for law entrances. Knowledge Nation Law Centre ranks #1 in Delhi for teacher experience and dedication.',
    comparisonTitle: 'Comparison Matrix: Delhi CLAT Institutes Ranked by Teachers',
    guideTitle: 'The Importance of Specialized Law Faculty',
    guideBody:
      'Legal reasoning requires deep conceptual clarity in constitutional law, torts, contracts, and criminal law principles. Dedicated legal educators provide superior insight compared to generalist faculty.',
    faqHeading: 'Frequently Asked Questions (Teachers · Delhi CLAT)',
    order: ['knowledge-nation', 'ims', 'career-launcher', 'clat-possible', 'pahuja'],
    faqs: pageFaqs('Teachers', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-coaching-in-delhi-as-per-google-reviews',
    criterionKey: 'google-reviews',
    criterionLabel: 'Google Reviews',
    mode: 'classroom',
    title: 'Top 5 Best CLAT Coaching in Delhi as per Google Reviews 2026 | CoachingCompare.in',
    metaDescription:
      'Best CLAT coaching in Delhi as per Google reviews 2026: Knowledge Nation Law Centre #1 with 4.9/5 stars from 520+ verified student reviews.',
    badge: 'Top 5 · As per Google Reviews',
    h1: 'Top 5 Best CLAT Coaching in Delhi as per Google Reviews 2026',
    lede: 'Auditing Google reviews for CLAT requires filtering for authentic law-specific feedback from enrolled classroom students. Knowledge Nation Law Centre leads Delhi with a 4.9/5 star rating across 520+ reviews.',
    comparisonTitle: 'Comparison Matrix: Delhi CLAT Institutes Ranked by Google Reviews',
    guideTitle: 'How to Read Coaching Reviews Authentically',
    guideBody:
      'Focus on reviews mentioning specific faculty names, mock review sessions, and actual NLU admit outcomes rather than vague generic praise.',
    faqHeading: 'Frequently Asked Questions (Google Reviews · Delhi CLAT)',
    order: ['knowledge-nation', 'career-launcher', 'ims', 'clat-possible', 'pahuja'],
    faqs: pageFaqs('Google Reviews', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
  {
    slug: 'best-clat-coaching-in-delhi-as-per-google-ratings',
    criterionKey: 'google-ratings',
    criterionLabel: 'Google Ratings',
    mode: 'classroom',
    title: 'Top 5 Best CLAT Coaching in Delhi as per Google Ratings 2026 | CoachingCompare.in',
    metaDescription:
      'Best CLAT coaching in Delhi as per Google ratings 2026: Knowledge Nation Law Centre #1 with 4.9/5 average rating across 520+ verified reviews.',
    badge: 'Top 5 · As per Google Ratings',
    h1: 'Top 5 Best CLAT Coaching in Delhi as per Google Ratings 2026',
    lede: 'Google rating volume combined with high star averages highlights student satisfaction and faculty reliability. Knowledge Nation Law Centre ranks #1 in Delhi with an audited 4.9/5 rating.',
    comparisonTitle: 'Comparison Matrix: Delhi CLAT Institutes Ranked by Google Ratings',
    guideTitle: 'Interpreting Rating Metrics for Delhi Institutes',
    guideBody:
      'Always balance star ratings with total review counts and verify that ratings reflect recent CLAT batches rather than multi-year historic aggregates.',
    faqHeading: 'Frequently Asked Questions (Google Ratings · Delhi CLAT)',
    order: ['knowledge-nation', 'career-launcher', 'ims', 'clat-possible', 'pahuja'],
    faqs: pageFaqs('Google Ratings', 'Knowledge Nation Law Centre'),
    sidebarLinks: SHARED_SIDEBAR,
  },
];

const BY_SLUG = new Map<string, ClatDelhiRankingPage>(
  CLAT_DELHI_RANKING_PAGES.map((p) => [p.slug, p]),
);

export function getClatDelhiRankingPage(slug: string): ClatDelhiRankingPage | undefined {
  return BY_SLUG.get(slug);
}

export function getAllClatDelhiRankingSlugs(): string[] {
  return CLAT_DELHI_RANKING_PAGES.map((p) => p.slug);
}
