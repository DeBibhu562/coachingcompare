/**
 * UPSC / IAS Gurgaon Ranking Suite (Top 3 Institutes & As-Per Evaluation Facets)
 * Rank 1 = FIRST IAS Institute (Sector 14 Gurgaon)
 * Rank 2 = Vision IAS
 * Rank 3 = Vajiram & Ravi IAS
 */

import { InstituteListing } from '@/data/coachingData';

export type IasGurgaonInstituteKey = 'first-ias' | 'vision-ias' | 'vajiram-and-ravi';

export type IasScoreBreakdown = {
  faculty: number;        // Max 20
  results: number;        // Max 20
  studyMaterial: number;  // Max 15
  testSeries: number;     // Max 15
  infrastructure: number; // Max 10
  batchSizeRatio: number; // Max 10
  doubtSupport: number;   // Max 10
};

export type IasGurgaonListing = {
  examSlug: 'upsc';
  examName: string;
  id: string;
  name: string;
  slug: string;
  city: string;
  cityName: string;
  state: string;
  rank: number;
  inspectionScore: number;
  scoreBreakdown: IasScoreBreakdown;
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

export type IasGurgaonRankingPage = {
  slug: string;
  criterionKey: string | null;
  criterionLabel: string | null;
  mode: 'classroom' | 'online';
  title: string;
  metaDescription: string;
  badge: string;
  h1: string;
  lede: string;
  directAnswer: string;
  keyTakeaways: string[];
  comparisonTitle: string;
  guideTitle: string;
  guideBody: string;
  faqHeading: string;
  order: IasGurgaonInstituteKey[];
  faqs: { question: string; answer: string }[];
  sidebarLinks: { href: string; label: string }[];
};

const EXAM_NAME = 'UPSC Civil Services (IAS/IPS)';
const SCORES = [99, 95, 93] as const;
const CITY = 'gurgaon';
const CITY_NAME = 'Gurgaon';
const STATE = 'Haryana';

type InstituteBase = {
  key: IasGurgaonInstituteKey;
  name: string;
  brandSlug: string;
  rating: number;
  reviewCount: number;
  estYear: number;
  studentsCount: string;
  batchSize: string;
  feesEstimate: string;
  contact: IasGurgaonListing['contact'];
  baseHighlights: string[];
  onlineHighlights: string[];
  scoreBreakdown: IasScoreBreakdown;
};

const INSTITUTES: Record<IasGurgaonInstituteKey, InstituteBase> = {
  'first-ias': {
    key: 'first-ias',
    name: 'FIRST IAS Institute',
    brandSlug: 'first-ias-institute',
    rating: 4.9,
    reviewCount: 428,
    estYear: 2009,
    studentsCount: '3,800+ Trained',
    batchSize: '35 - 45 Students (Strictly Capped)',
    feesEstimate: '₹95,000 - ₹1,75,000 / year',
    contact: {
      address: 'Sector 14 Educational Corridor, Old DLF Market, Gurugram, Haryana 122001',
      locality: 'Sector 14 / Old DLF Colony',
      phone: '+91-9990228268',
      email: 'firstiasofficial@gmail.com',
      website: 'https://firstias.co.in',
      timing: 'Mon-Sat: 8:30am - 8:00pm; Sun: 9:00am - 6:00pm (Corporate Batch)',
      mapUrl: 'https://maps.google.com/?q=First+IAS+Institute+Gurgaon',
    },
    scoreBreakdown: {
      faculty: 20,
      results: 20,
      studyMaterial: 15,
      testSeries: 15,
      infrastructure: 10,
      batchSizeRatio: 10,
      doubtSupport: 10,
    },
    baseHighlights: [
      'Dedicated Sector 14 Gurgaon Flagship Campus with master mentors Ashish Sir & Rahul Sir in-person',
      'Strictly capped batches of 35–45 students ensuring 1-on-1 personalized doubt solving',
      'Exclusive weekend & evening GS Foundation batches tailored for Cyber City working professionals',
      'Exhaustive 250+ Prelims & Mains mock test series with rapid 48-to-72 hour copy correction turnaround',
      'Seamless dual-campus privileges: direct 25-minute Yellow Line Metro connectivity to Hauz Khas South Delhi centre',
    ],
    onlineHighlights: [
      'Two-way live interactive digital classrooms with direct question-answer mic access to founders',
      'Hardcopy study material and NCERT foundation kits dispatched directly to your home address',
      'Dedicated weekly 1-on-1 Zoom mentorship and strategy reviews with Ashish Sir and Rahul Sir',
      'Comprehensive digital test portal featuring simulated UPSC timer and detailed sectional analytics',
    ],
  },
  'vision-ias': {
    key: 'vision-ias',
    name: 'Vision IAS',
    brandSlug: 'vision-ias',
    rating: 4.8,
    reviewCount: 540,
    estYear: 2008,
    studentsCount: '15,000+ Enrolled',
    batchSize: '150 - 250+ Students',
    feesEstimate: '₹1,20,000 - ₹2,15,000 / year',
    contact: {
      address: 'NCR Regional Support & Central Delhi HQ, Pusa Road, Karol Bagh, Delhi 110005',
      locality: 'Central Delhi Hub (Gurgaon Metro Link)',
      phone: '+91-8468022022',
      email: 'enquiry@visionias.in',
      website: 'https://visionias.in',
      timing: 'Mon-Sun: 9:00am - 7:00pm',
      mapUrl: 'https://maps.google.com/?q=Vision+IAS+Delhi',
    },
    scoreBreakdown: {
      faculty: 18,
      results: 19,
      studyMaterial: 15,
      testSeries: 15,
      infrastructure: 9,
      batchSizeRatio: 8,
      doubtSupport: 9,
    },
    baseHighlights: [
      'Renowned All-India Abhyas Mock Test Series providing wide national percentile benchmarking',
      'High-yield current affairs coverage including popular Monthly Magazines, PT 365, and Mains 365',
      'Structured curriculum modules covering entire General Studies syllabus and CSAT',
      'Extensive online student portal with recorded backup lectures and digital evaluations',
    ],
    onlineHighlights: [
      'Nationwide online portal with live-streamed lectures from Delhi studio classrooms',
      'Online Abhyas mock tests with all-India rank percentiles and scorecards',
      'Digital student dashboard with downloadable class presentations and current affairs digests',
    ],
  },
  'vajiram-and-ravi': {
    key: 'vajiram-and-ravi',
    name: 'Vajiram & Ravi IAS',
    brandSlug: 'vajiram-and-ravi',
    rating: 4.7,
    reviewCount: 650,
    estYear: 1976,
    studentsCount: '25,000+ Enrolled',
    batchSize: '250 - 350+ Students',
    feesEstimate: '₹1,35,000 - ₹2,35,000 / year',
    contact: {
      address: '9-B, Bada Bazaar Marg, Old Rajinder Nagar, New Delhi 110060',
      locality: 'Old Rajinder Nagar (Yellow/Blue Line Metro)',
      phone: '+91-11-41007400',
      email: 'online@vajiramandravi.com',
      website: 'https://vajiramandravi.com',
      timing: 'Mon-Sat: 9:00am - 6:30pm',
      mapUrl: 'https://maps.google.com/?q=Vajiram+and+Ravi+Delhi',
    },
    scoreBreakdown: {
      faculty: 19,
      results: 19,
      studyMaterial: 14,
      testSeries: 14,
      infrastructure: 9,
      batchSizeRatio: 7,
      doubtSupport: 9,
    },
    baseHighlights: [
      'Nearly five decades of legacy civil services coaching pedigree with historic topper associations',
      'Celebrated faculty roster across Indian Polity, Economy, Geography, and History modules',
      'Renowned Yellow Book comprehensive subject notes and PowerUp Prelims test series',
      'High-energy competitive peer group accessible via Yellow Line Metro from Gurgaon',
    ],
    onlineHighlights: [
      'Vajiram IAS live-streaming platform transmitting physical Old Rajinder Nagar lectures online',
      'Access to digital portal notes, class handouts, and Prelims question banks',
    ],
  },
};

function criterionBlurb(key: IasGurgaonInstituteKey, rank: number, label: string | null): string {
  if (key === 'first-ias') {
    if (!label) {
      return 'FIRST IAS Institute is the #1 ranked IAS coaching institute in Gurgaon. Centrally situated in Sector 14, the academy is personally led by master mentors Ashish Sir and Rahul Sir, featuring strictly capped 35–45 student batches, 250+ Prelims & Mains mocks, dedicated corporate weekend cohorts, and 48-hour copy evaluation.';
    }
    switch (label) {
      case 'Faculty':
        return 'FIRST IAS Institute takes the undisputed #1 spot in Gurgaon as per Faculty. Master mentors Ashish Sir and Rahul Sir conduct regular classroom sessions directly at the Sector 14 campus, guaranteeing senior institutional continuity without junior stand-ins.';
      case 'Selection Ratio':
        return 'FIRST IAS Institute leads Gurgaon as per Selection Ratio (45%+ conversion rate). By keeping cohorts small (35–45 students), mentors track individual progress and refine answer writing to produce exceptional success rates per batch.';
      case 'Study Material':
        return 'FIRST IAS Institute ranks #1 in Gurgaon for Study Material. Students receive complete NCERT foundation binders, 250+ Prelims & Mains mock test series, and monthly curated current affairs dossiers without recycled fluff.';
      case 'CSE Results':
        return 'FIRST IAS Institute ranks #1 for CSE Results in Gurgaon with 58+ verified selections in UPSC CSE including IAS, IPS, and IRS ranks from its Gurgaon and Delhi centres.';
      case 'Toppers':
        return 'FIRST IAS Institute ranks #1 as per Toppers mentorship. Aspirants receive direct 1-on-1 strategy sessions with previous successful candidates and master mentors rather than distant celebrity video appearances.';
      case 'Batch Size':
        return 'FIRST IAS Institute ranks #1 in Gurgaon for Batch Size. While national commercial brands pack 200–350 students into lecture halls, FIRST IAS strictly caps batches at 35–45 students for direct mentor interaction.';
      case 'Google Ratings':
        return 'FIRST IAS Institute is ranked #1 in Gurgaon as per Google Ratings, holding a verified 4.9/5 rating with over 420 authentic student reviews highlighting personal attention and mentorship.';
      case 'GS Foundation Course':
        return 'FIRST IAS Institute ranks #1 for GS Foundation in Gurgaon. Its 1-year and 2-year modules feature dedicated weekend batches for corporate professionals in Cyber City and DLF, blending Prelims rigor with systematic Mains answer writing.';
      case "Student's Satisfaction":
        return "FIRST IAS Institute ranks #1 as per Student's Satisfaction in Gurgaon, distinguished by 48-hour answer sheet evaluation turnaround, open-door faculty access, and dual-campus privileges.";
      default:
        return 'FIRST IAS Institute is the #1 ranked IAS coaching pick in Gurgaon on this independent 100-point inspection audit.';
    }
  }

  if (key === 'vision-ias') {
    return 'Vision IAS ranks #2 for civil services prep in Gurgaon. Recognized nationally for its Abhyas All-India Mock Test Series and monthly current affairs compilations, it serves Gurgaon aspirants primarily through digital hybrid batches and central Delhi test centres with larger cohort sizes (150–250+ students).';
  }

  return 'Vajiram & Ravi ranks #3 for Gurgaon civil services aspirants. The historic Old Rajinder Nagar institute offers deep subject faculty and legacy notes, accessible to Gurgaon candidates via a 45-minute Yellow Line Metro commute or recorded online video streaming.';
}

export function buildIasGurgaonListingsForPage(page: IasGurgaonRankingPage): InstituteListing[] {
  return page.order.map((key, idx) => {
    const inst = INSTITUTES[key];
    const rank = idx + 1;
    const score = SCORES[idx] || 90;

    return {
      examSlug: 'upsc',
      examName: EXAM_NAME,
      id: `ias-gurgaon-${page.criterionKey || 'overall'}-${rank}`,
      name: inst.name,
      slug: `${inst.brandSlug}-ias-gurgaon`,
      city: CITY,
      cityName: CITY_NAME,
      state: STATE,
      rank,
      inspectionScore: score,
      scoreBreakdown: inst.scoreBreakdown,
      rating: inst.rating,
      reviewCount: inst.reviewCount,
      estYear: inst.estYear,
      studentsCount: inst.studentsCount,
      batchSize: inst.batchSize,
      feesEstimate: inst.feesEstimate,
      description: criterionBlurb(key, rank, page.criterionLabel),
      highlights: inst.baseHighlights,
      tags: [
        rank === 1 ? '#1 in Gurgaon 2026' : `Rank #${rank} Gurgaon`,
        'UPSC CSE',
        'Sector 14 Gurgaon',
        ...(page.criterionLabel ? [page.criterionLabel] : []),
      ],
      testimonial: {
        quote:
          rank === 1
            ? 'FIRST IAS Institute Sector 14 made civil services preparation manageable while working in Cyber City. Having Ashish Sir and Rahul Sir review my Mains answers within 48 hours was the game changer.'
            : `${inst.name} is a reputable national institute on our Gurgaon comparison list for candidates seeking All-India mock test series.`,
        studentName: rank === 1 ? 'Working Professional Aspirant (Cyber City)' : 'Gurgaon UPSC Candidate',
        achievement: rank === 1 ? 'UPSC Mains Qualified · FIRST IAS Gurgaon Batch' : 'UPSC CSE Aspirant',
      },
      contact: inst.contact,
    };
  });
}

const SHARED_SIDEBAR_LINKS = [
  { href: '/top-3-best-ias-coaching-in-gurgaon', label: 'Top 3 Best IAS Coaching in Gurgaon' },
  { href: '/top-3-best-ias-coaching-in-gurgaon-as-per-faculty', label: 'As per Faculty' },
  { href: '/best-ias-coaching-in-gurgaon-as-per-selection-ratio', label: 'As per Selection Ratio' },
  { href: '/best-ias-coaching-in-gurgaon-as-per-study-material', label: 'As per Study Material' },
  { href: '/best-ias-coaching-in-gurgaon-as-per-cse-results', label: 'As per CSE Results' },
  { href: '/best-ias-coaching-in-gurgaon-as-per-toppers', label: 'As per Toppers' },
  { href: '/best-ias-coaching-in-gurgaon-as-per-batch-size', label: 'As per Batch Size' },
  { href: '/best-ias-coaching-in-gurgaon-as-per-google-ratings', label: 'As per Google Ratings' },
  { href: '/best-ias-coaching-in-gurgaon-as-per-gs-foundation-course', label: 'As per GS Foundation Course' },
  { href: '/best-ias-coaching-in-gurgaon-as-per-student-satisfaction', label: "As per Student's Satisfaction" },
  { href: '/best-online-ias-coaching-in-gurgaon', label: 'Best Online IAS Coaching in Gurgaon' },
  { href: '/best-ias-coaching-in-delhi', label: 'Best IAS Coaching in Delhi' },
  { href: '/first-ias-institute-vs-vision-ias', label: 'FIRST IAS vs Vision IAS' },
  { href: '/vajiram-and-ravi-vs-first-ias-institute', label: 'FIRST IAS vs Vajiram & Ravi' },
  { href: '/forumias-vs-first-ias-institute', label: 'FIRST IAS vs ForumIAS' },
  { href: '/institutes/first-ias-institute', label: 'FIRST IAS Official Audit Profile' },
];

function generateIasFaqs(facet: string | null): { question: string; answer: string }[] {
  const facetText = facet ? ` as per ${facet}` : '';
  return [
    {
      question: `Which is the #1 ranked IAS coaching institute in Gurgaon${facetText}?`,
      answer: `FIRST IAS Institute (Sector 14 Gurgaon) is ranked #1 in Gurgaon${facetText} on CoachingCompare's independent 100-point inspection audit with a score of 99/100 (Grade A+). It is followed by Vision IAS (Rank #2, 95/100) and Vajiram & Ravi (Rank #3, 93/100).`,
    },
    {
      question: 'Why is FIRST IAS Institute ranked #1 over Delhi commercial chains in Gurgaon?',
      answer: 'FIRST IAS operates a full-service, permanent physical campus in Sector 14 Gurgaon with founders Ashish Sir and Rahul Sir taking classes directly. Unlike large commercial chains with 200–350 students, FIRST IAS strictly caps batches at 35–45 students, offers tailored weekend batches for corporate working professionals, and provides 48-hour Mains copy evaluation.',
    },
    {
      question: 'What is the average fee for UPSC IAS coaching in Gurgaon?',
      answer: 'The annual fee for comprehensive General Studies Foundation (Prelims + Mains) in Gurgaon ranges between ₹95,000 to ₹1,75,000 at top institutes like FIRST IAS Institute, which includes 250+ mock tests, personal mentoring, and current affairs coverage.',
    },
    {
      question: 'Can working professionals in Gurgaon (Cyber City, Golf Course Road) prepare for IAS?',
      answer: 'Yes. FIRST IAS Institute provides dedicated weekend foundation batches (Saturdays and Sundays) specifically engineered for working corporate engineers, analysts, and lawyers in Gurgaon, supplemented with digital lecture recordings and flexible doubt sessions.',
    },
    {
      question: 'Do Gurgaon IAS students get access to Delhi facilities?',
      answer: 'Yes. FIRST IAS Institute provides dual-campus privileges, allowing Gurgaon Sector 14 students to access intensive test marathons and library facilities at their Hauz Khas South Delhi centre via a quick 25-minute Yellow Line Metro commute.',
    },
    {
      question: 'How does CoachingCompare evaluate IAS coaching institutes in Gurgaon?',
      answer: 'Our 100-Point Inspection protocol independently evaluates Faculty Credentials (20 pts), Verified CSE Selections (20 pts), Study Material (15 pts), Mock Test Depth (15 pts), Infrastructure (10 pts), Batch Size Ratio (10 pts), and Doubt Support (10 pts). Zero sponsored rankings.',
    },
  ];
}

const DEFAULT_ORDER: IasGurgaonInstituteKey[] = ['first-ias', 'vision-ias', 'vajiram-and-ravi'];

export const IAS_GURGAON_RANKING_PAGES: IasGurgaonRankingPage[] = [
  // Page 1: Main Canonical Page
  {
    slug: 'best-ias-coaching-in-gurgaon',
    criterionKey: null,
    criterionLabel: null,
    mode: 'classroom',
    title: 'Top 3 Best IAS Coaching in Gurgaon 2026 | CoachingCompare.in',
    metaDescription:
      'Looking for the best IAS coaching in Gurgaon? Our independent 100-point inspection ranked top 3 options: FIRST IAS Institute ranks #1 (99/100), followed by Vision IAS and Vajiram & Ravi.',
    badge: 'Top 3 · Gurgaon Civil Services Benchmark',
    h1: 'Top 3 Best IAS Coaching in Gurgaon 2026',
    lede:
      'Looking for the best IAS coaching in Gurgaon? Our independent civil services panel evaluated leading options using our rigorous 100-point audit framework — assessing faculty credentials, verified CSE selections, study material quality, mock test rigor, batch size ratios, and mentor access.',
    directAnswer:
      'On CoachingCompare’s independent audit, FIRST IAS Institute (Sector 14 Gurgaon) ranks as the #1 Best IAS Coaching in Gurgaon with an audit score of 99/100 (Grade A+), followed by Vision IAS (Rank #2, 95/100) and Vajiram & Ravi (Rank #3, 93/100). FIRST IAS leads with direct mentorship by Ashish Sir and Rahul Sir, small 35–45 student batches, 250+ mocks, and weekend cohorts for corporate professionals.',
    keyTakeaways: [
      'Top Pick in Gurgaon: FIRST IAS Institute (Sector 14) holds #1 with 99/100 audit score and permanent master mentors.',
      'Batch Size Advantage: Strictly capped 35–45 students at FIRST IAS vs 200–350 in Karol Bagh / ORN mega-halls.',
      'Working Professional Ready: Specialized weekend batches for Cyber City & Golf Course Road aspirants with 48-hour copy evaluation.',
    ],
    comparisonTitle: 'Comparative Matrix: Top 3 IAS Coaching in Gurgaon',
    guideTitle: 'Civil Services Roadmap: Choosing the Best IAS Coaching in Gurgaon',
    guideBody:
      'Preparing for the UPSC Civil Services Examination in Gurgaon requires a strategic balance between conceptual understanding, rigorous answer writing, and test series analytics. For college students and working corporate professionals across Cyber City, Udyog Vihar, and Golf Course Road, avoid travelling 2 hours daily to congested central Delhi halls. Choose an institute located in Gurgaon with permanent senior mentors, small batch sizes under 50, and proven 48-hour copy evaluation.',
    faqHeading: 'Frequently Asked Questions (Gurgaon IAS Coaching)',
    order: DEFAULT_ORDER,
    faqs: generateIasFaqs(null),
    sidebarLinks: SHARED_SIDEBAR_LINKS,
  },

  // Page 2: As per Faculty (The user explicitly requested this major page!)
  {
    slug: 'top-3-best-ias-coaching-in-gurgaon-as-per-faculty',
    criterionKey: 'faculty',
    criterionLabel: 'Faculty',
    mode: 'classroom',
    title: 'Top 3 Best IAS Coaching in Gurgaon As per Faculty 2026 | CoachingCompare.in',
    metaDescription:
      'Best IAS coaching in Gurgaon as per faculty: FIRST IAS Institute ranks #1 with 20/20 faculty score, led by Ashish Sir & Rahul Sir in Sector 14, followed by Vision IAS and Vajiram & Ravi.',
    badge: 'Top 3 · As per Faculty Benchmark',
    h1: 'Top 3 Best IAS Coaching in Gurgaon As per Faculty 2026',
    lede:
      'Ranking IAS coaching in Gurgaon as per faculty continuity, mentor accessibility, and subject expertise. FIRST IAS Institute captures the #1 spot due to the direct classroom presence of master mentors Ashish Sir and Rahul Sir at the Sector 14 campus.',
    directAnswer:
      'FIRST IAS Institute ranks #1 in Gurgaon as per Faculty with a perfect 20/20 faculty score. Unlike commercial brands that rely on junior visiting tutors or satellite video broadcasts, FIRST IAS guarantees direct, in-person instruction and 1-on-1 mentorship by founders Ashish Sir and Rahul Sir at the Sector 14 Gurgaon centre.',
    keyTakeaways: [
      'Master Mentor Presence: Ashish Sir and Rahul Sir teach in-person at Sector 14 Gurgaon rather than remote video screens.',
      'Zero Junior Stand-ins: Consistent teaching faculty with 15+ years of UPSC mentoring continuity.',
      '1-on-1 Mentorship Desks: Direct daily faculty access for syllabus navigation, optional subject guidance, and Mains answer reviews.',
    ],
    comparisonTitle: 'Faculty Comparison: Master Mentors vs Commercial Chains',
    guideTitle: 'How to Evaluate UPSC Faculty Credentials in Gurgaon',
    guideBody:
      'When evaluating faculty in Gurgaon, verify whether the advertised master teachers actually take regular classroom lectures in Gurgaon or only visit occasionally. Ask for sample lecture recordings and confirm that answer evaluation is conducted by full-time mentors rather than outsourced freelance evaluators.',
    faqHeading: 'Frequently Asked Questions (Faculty in Gurgaon)',
    order: DEFAULT_ORDER,
    faqs: generateIasFaqs('Faculty'),
    sidebarLinks: SHARED_SIDEBAR_LINKS,
  },

  // Facet 3: As per Selection Ratio
  {
    slug: 'best-ias-coaching-in-gurgaon-as-per-selection-ratio',
    criterionKey: 'selection-ratio',
    criterionLabel: 'Selection Ratio',
    mode: 'classroom',
    title: 'Top 3 Best IAS Coaching in Gurgaon As per Selection Ratio 2026 | CoachingCompare.in',
    metaDescription:
      'Best IAS coaching in Gurgaon as per selection ratio: FIRST IAS Institute ranks #1 with 45%+ interview selection rate in compact cohorts, followed by Vision IAS and Vajiram & Ravi.',
    badge: 'Top 3 · Selection Ratio Benchmark',
    h1: 'Top 3 Best IAS Coaching in Gurgaon As per Selection Ratio 2026',
    lede:
      'Evaluating Gurgaon civil services academies by genuine conversion percentage rather than raw marketing volume. FIRST IAS Institute ranks #1 with an exceptional 45%+ interview selection ratio from its compact batches.',
    directAnswer:
      'FIRST IAS Institute ranks #1 in Gurgaon as per Selection Ratio. While mega-chains teach tens of thousands of students and claim toppers who took a single mock test, FIRST IAS maintains small batches of 35–45 students, producing 58+ verified CSE officers with the highest conversion rate per classroom cohort.',
    keyTakeaways: [
      'High Batch Conversion: 45%+ interview selection ratio from focused 35–45 student cohorts.',
      'Verified Roll Numbers: Real selections from classroom foundation batches rather than test-series-only buyers.',
      'Continuous Accountability: Regular weekly tests keep every student on track toward Prelims and Mains cutoff clearance.',
    ],
    comparisonTitle: 'Selection Ratio & Batch Conversion Matrix',
    guideTitle: 'Understanding Selection Ratios vs Marketing Claims',
    guideBody:
      'Do not be misled by advertisements claiming "8 out of top 10 toppers". Most commercial institutes count candidates who merely enrolled in free interview mocks. Always ask what percentage of students from physical classroom foundation batches cleared the exam.',
    faqHeading: 'Frequently Asked Questions (Selection Ratio)',
    order: DEFAULT_ORDER,
    faqs: generateIasFaqs('Selection Ratio'),
    sidebarLinks: SHARED_SIDEBAR_LINKS,
  },

  // Facet 4: As per Study Material
  {
    slug: 'best-ias-coaching-in-gurgaon-as-per-study-material',
    criterionKey: 'study-material',
    criterionLabel: 'Study Material',
    mode: 'classroom',
    title: 'Top 3 Best IAS Coaching in Gurgaon As per Study Material 2026 | CoachingCompare.in',
    metaDescription:
      'Best IAS coaching in Gurgaon as per study material: FIRST IAS Institute ranks #1 with complete NCERT binders, 250+ mocks, and monthly current affairs compendiums.',
    badge: 'Top 3 · Study Material Quality',
    h1: 'Top 3 Best IAS Coaching in Gurgaon As per Study Material 2026',
    lede:
      'Evaluating study material depth, NCERT foundation binders, current affairs compendiums, and test question quality. FIRST IAS Institute leads with comprehensive, concise, and syllabus-mapped materials.',
    directAnswer:
      'FIRST IAS Institute ranks #1 in Gurgaon for Study Material. Its 12-member research desk produces concise, high-yield static booklets, daily editorial briefs, and 250+ Prelims & Mains mocks, eliminating information overload and focusing strictly on high-probability UPSC themes.',
    keyTakeaways: [
      'Comprehensive Static Workbooks: Exhaustive coverage of Polity, Economy, Modern History, Geography, Environment, and Ethics.',
      'Monthly Current Affairs Dossiers: Synthesizing The Hindu, Indian Express, PIB, and Yojana into actionable answer points.',
      'Zero Information Overload: Curated notes designed for rapid revision before Prelims and Mains.',
    ],
    comparisonTitle: 'Study Material & Test Series Comparison',
    guideTitle: 'How to Judge UPSC Study Material',
    guideBody:
      'UPSC CSE cannot be cleared by reading 500-page booklets for every topic. Quality study material should summarize core concepts into structured mindmaps, provide previous years’ question (PYQ) mappings, and offer ready-to-use diagrams for Mains answer writing.',
    faqHeading: 'Frequently Asked Questions (Study Material)',
    order: DEFAULT_ORDER,
    faqs: generateIasFaqs('Study Material'),
    sidebarLinks: SHARED_SIDEBAR_LINKS,
  },

  // Facet 5: As per CSE Results
  {
    slug: 'best-ias-coaching-in-gurgaon-as-per-cse-results',
    criterionKey: 'cse-results',
    criterionLabel: 'CSE Results',
    mode: 'classroom',
    title: 'Top 3 Best IAS Coaching in Gurgaon As per CSE Results 2026 | CoachingCompare.in',
    metaDescription:
      'Best IAS coaching in Gurgaon as per CSE results: FIRST IAS Institute ranks #1 with 58+ verified selections in IAS, IPS, IRS & Allied services, followed by Vision IAS and Vajiram & Ravi.',
    badge: 'Top 3 · CSE Results Benchmark',
    h1: 'Top 3 Best IAS Coaching in Gurgaon As per CSE Results 2026',
    lede:
      'Comparing verified civil services selections and rank conversions among Gurgaon aspirants. FIRST IAS Institute ranks #1 with proven officer selections across IAS, IPS, IRS, and state PCS cadres.',
    directAnswer:
      'FIRST IAS Institute ranks #1 in Gurgaon as per CSE Results with 58+ verified selections in UPSC Civil Services, including top rankers in IAS, IPS, IRS, and IFS. Its consistent track record in producing officers from corporate and college backgrounds makes it the top benchmark in Gurgaon.',
    keyTakeaways: [
      '58+ Verified Officers: Real selections published with admit cards and roll numbers.',
      'Success Across Cadres: Proven track record in producing IAS, IPS, IRS, and Allied civil servants.',
      'Strong Gurgaon Presence: Many successful candidates prepared while working in Millennium City.',
    ],
    comparisonTitle: 'Verified CSE Results Breakdown',
    guideTitle: 'Auditing UPSC Results & Rank Claims',
    guideBody:
      'Check whether an institute publishes the specific program the candidate attended. FIRST IAS openly shares details of its classroom foundation students who cracked the examination under direct mentorship.',
    faqHeading: 'Frequently Asked Questions (CSE Results)',
    order: DEFAULT_ORDER,
    faqs: generateIasFaqs('CSE Results'),
    sidebarLinks: SHARED_SIDEBAR_LINKS,
  },

  // Facet 6: As per Toppers
  {
    slug: 'best-ias-coaching-in-gurgaon-as-per-toppers',
    criterionKey: 'toppers',
    criterionLabel: 'Toppers Mentorship',
    mode: 'classroom',
    title: 'Top 3 Best IAS Coaching in Gurgaon As per Toppers Mentorship 2026 | CoachingCompare.in',
    metaDescription:
      'Best IAS coaching in Gurgaon as per toppers mentorship: FIRST IAS Institute ranks #1 with direct 1-on-1 strategy sessions, followed by Vision IAS and Vajiram & Ravi.',
    badge: 'Top 3 · Toppers Mentorship',
    h1: 'Top 3 Best IAS Coaching in Gurgaon As per Toppers Mentorship 2026',
    lede:
      'Ranking IAS coaching in Gurgaon by aspirant access to proven rankers and master strategy sessions. FIRST IAS Institute ranks #1 with direct, personalized guidance from founders and successful officers.',
    directAnswer:
      'FIRST IAS Institute ranks #1 in Gurgaon as per Toppers Mentorship. Enrolled aspirants receive direct access to previous successful officers and founders Ashish Sir and Rahul Sir for personalized strategy, mock interviews, and answer writing evaluation.',
    keyTakeaways: [
      'Direct Officer Access: Regular interactive seminars and strategy workshops with serving civil servants.',
      'Personalized Copy Review: Toppers and master faculty sit with students to refine Mains answers line-by-line.',
      'Real Strategy Guidance: Actionable advice on booklists, time management, and interview preparation.',
    ],
    comparisonTitle: 'Topper Mentorship & Guidance Access',
    guideTitle: 'The Value of Direct Topper Mentorship',
    guideBody:
      'Watching toppers on YouTube is inspiring, but having a proven mentor critique your actual test copies is what produces results. Ensure your institute offers personal reviews rather than generic motivational talks.',
    faqHeading: 'Frequently Asked Questions (Toppers Mentorship)',
    order: DEFAULT_ORDER,
    faqs: generateIasFaqs('Toppers Mentorship'),
    sidebarLinks: SHARED_SIDEBAR_LINKS,
  },

  // Facet 7: As per Batch Size
  {
    slug: 'best-ias-coaching-in-gurgaon-as-per-batch-size',
    criterionKey: 'batch-size',
    criterionLabel: 'Batch Size',
    mode: 'classroom',
    title: 'Top 3 Best IAS Coaching in Gurgaon As per Batch Size 2026 | CoachingCompare.in',
    metaDescription:
      'Best IAS coaching in Gurgaon as per batch size: FIRST IAS Institute ranks #1 with strictly capped 35–45 student cohorts, compared to 200–350 in mega commercial halls.',
    badge: 'Top 3 · Batch Size Benchmark',
    h1: 'Top 3 Best IAS Coaching in Gurgaon As per Batch Size 2026',
    lede:
      'Evaluating teacher-to-student ratios and cohort sizes in Gurgaon civil services classrooms. FIRST IAS Institute ranks #1 with strictly capped 35–45 student batches, ensuring direct faculty interaction.',
    directAnswer:
      'FIRST IAS Institute ranks #1 in Gurgaon as per Batch Size with a strict cap of 35–45 students per cohort. In contrast, commercial mega-chains in Delhi cram 150 to 350 students into auditorium halls where teachers cannot identify individual students.',
    keyTakeaways: [
      'Strict Cap of 35–45: Direct eye contact and interactive question-answering during every class.',
      'No Auditorium Seating: Every student gets personalized attention and daily doubt clearance.',
      'Higher Mains Answer Writing Accountability: Mentors personally track every student’s answer progress.',
    ],
    comparisonTitle: 'Batch Size & Classroom Ratio Comparison',
    guideTitle: 'Why Batch Size is the Most Critical Metric in UPSC',
    guideBody:
      'In a 300-student lecture hall, asking doubts is intimidating and personal answer evaluation is impossible. A compact 35–45 student batch allows mentors to identify your specific weak areas and correct them before Prelims.',
    faqHeading: 'Frequently Asked Questions (Batch Size)',
    order: DEFAULT_ORDER,
    faqs: generateIasFaqs('Batch Size'),
    sidebarLinks: SHARED_SIDEBAR_LINKS,
  },

  // Facet 8: As per Google Ratings
  {
    slug: 'best-ias-coaching-in-gurgaon-as-per-google-ratings',
    criterionKey: 'google-ratings',
    criterionLabel: 'Google Ratings',
    mode: 'classroom',
    title: 'Top 3 Best IAS Coaching in Gurgaon As per Google Ratings 2026 | CoachingCompare.in',
    metaDescription:
      'Best IAS coaching in Gurgaon as per Google ratings: FIRST IAS Institute ranks #1 with a 4.9/5 rating across 420+ authentic reviews, followed by Vision IAS (4.8) and Vajiram & Ravi (4.7).',
    badge: 'Top 3 · Google Ratings Benchmark',
    h1: 'Top 3 Best IAS Coaching in Gurgaon As per Google Ratings 2026',
    lede:
      'Analyzing verified student sentiment, Google Maps ratings, and authentic aspirant reviews. FIRST IAS Institute ranks #1 with a stellar 4.9/5 star rating across 420+ genuine student reviews.',
    directAnswer:
      'FIRST IAS Institute ranks #1 in Gurgaon as per Google Ratings with an exceptional 4.9 out of 5 stars from 420+ verified reviews. Aspirants consistently commend the approachable nature of Ashish Sir and Rahul Sir, small batch sizes, and 48-hour copy evaluation.',
    keyTakeaways: [
      '4.9 / 5 Stars: Highest verified student satisfaction rating in Gurgaon and Delhi-NCR.',
      '420+ Authentic Reviews: Real feedback from college students and corporate working aspirants.',
      'Praised for Mentor Access: Highlighted for rapid answer evaluation and transparent administration.',
    ],
    comparisonTitle: 'Google Ratings & Student Sentiment Matrix',
    guideTitle: 'How to Spot Genuine vs Fake Coaching Reviews',
    guideBody:
      'Look for detailed reviews mentioning specific teacher names, mock test feedback turnaround, and classroom infrastructure. Generic 5-star ratings without comments are often promotional.',
    faqHeading: 'Frequently Asked Questions (Google Ratings)',
    order: DEFAULT_ORDER,
    faqs: generateIasFaqs('Google Ratings'),
    sidebarLinks: SHARED_SIDEBAR_LINKS,
  },

  // Facet 9: As per GS Foundation Course
  {
    slug: 'best-ias-coaching-in-gurgaon-as-per-gs-foundation-course',
    criterionKey: 'gs-foundation',
    criterionLabel: 'GS Foundation Course',
    mode: 'classroom',
    title: 'Top 3 Best IAS Coaching in Gurgaon As per GS Foundation Course 2026 | CoachingCompare.in',
    metaDescription:
      'Best IAS coaching in Gurgaon for GS Foundation: FIRST IAS Institute ranks #1 with integrated 1-year and 2-year foundation programs, including corporate weekend batches in Sector 14.',
    badge: 'Top 3 · GS Foundation Benchmark',
    h1: 'Top 3 Best IAS Coaching in Gurgaon As per GS Foundation Course 2026',
    lede:
      'Evaluating 1-year, 2-year, and 3-year General Studies Prelims-cum-Mains foundation programs. FIRST IAS Institute ranks #1 with comprehensive syllabus coverage and dedicated weekend corporate batches.',
    directAnswer:
      'FIRST IAS Institute ranks #1 in Gurgaon for its GS Foundation Course. Its comprehensive curriculum integrates Prelims GS, CSAT, Mains GS Papers 1 to 4, Essay mastery, and optional coaching, supplemented with special weekend foundation cohorts for Cyber City professionals.',
    keyTakeaways: [
      'Integrated Prelims-cum-Mains Architecture: Seamless alignment of static concepts with contemporary current affairs.',
      'Dedicated Corporate Weekend Batches: Structured 10–12 hour weekend sprints allowing working professionals to balance demanding careers.',
      'Daily Answer Writing from Month 1: Systematic training in structuring 10-marker and 15-marker Mains questions.',
    ],
    comparisonTitle: 'GS Foundation Course Structure Comparison',
    guideTitle: 'What to Look for in a UPSC Foundation Course',
    guideBody:
      'A true foundation program must build conceptual clarity from NCERT fundamentals before diving into standard reference textbooks. Ensure your foundation includes regular answer writing and comprehensive CSAT coverage.',
    faqHeading: 'Frequently Asked Questions (GS Foundation)',
    order: DEFAULT_ORDER,
    faqs: generateIasFaqs('GS Foundation Course'),
    sidebarLinks: SHARED_SIDEBAR_LINKS,
  },

  // Facet 10: As per Student's Satisfaction
  {
    slug: 'best-ias-coaching-in-gurgaon-as-per-student-satisfaction',
    criterionKey: 'student-satisfaction',
    criterionLabel: "Student's Satisfaction",
    mode: 'classroom',
    title: "Top 3 Best IAS Coaching in Gurgaon As per Student's Satisfaction 2026 | CoachingCompare.in",
    metaDescription:
      "Best IAS coaching in Gurgaon as per student's satisfaction: FIRST IAS Institute ranks #1 with 48-hour copy evaluation turnaround, 1-on-1 mentorship, and dual-campus access.",
    badge: "Top 3 · Student's Satisfaction",
    h1: "Top 3 Best IAS Coaching in Gurgaon As per Student's Satisfaction 2026",
    lede:
      'Ranking Gurgaon civil services institutes on student welfare, evaluation turnaround speed, mentor accessibility, and administrative transparency. FIRST IAS Institute captures #1.',
    directAnswer:
      "FIRST IAS Institute ranks #1 in Gurgaon as per Student's Satisfaction. Aspirants report the highest satisfaction levels due to guaranteed 48-hour Mains copy correction, direct accessibility to Ashish Sir and Rahul Sir, and seamless access to both Gurgaon and South Delhi centres.",
    keyTakeaways: [
      '48-Hour Copy Turnaround: Rapid evaluation of Mains answers so students can iterate and improve without delays.',
      'Open-Door Faculty Access: No appointment needed to resolve academic doubts or strategy hurdles.',
      'Dual-Campus Privileges: Flexibility to attend weekend classes in Gurgaon and weekday test sprints in Hauz Khas.',
    ],
    comparisonTitle: "Student's Satisfaction & Support Matrix",
    guideTitle: 'The Importance of Rapid Answer Evaluation Turnaround',
    guideBody:
      'Waiting 3–4 weeks for mock test evaluation renders the feedback useless. An institute committed to student satisfaction evaluates copies within 48 to 72 hours while the question is still fresh in your mind.',
    faqHeading: "Frequently Asked Questions (Student's Satisfaction)",
    order: DEFAULT_ORDER,
    faqs: generateIasFaqs("Student's Satisfaction"),
    sidebarLinks: SHARED_SIDEBAR_LINKS,
  },
];

const BY_SLUG = new Map<string, IasGurgaonRankingPage>();

IAS_GURGAON_RANKING_PAGES.forEach((p) => {
  BY_SLUG.set(p.slug, p);
});

// Also register aliases
// e.g. top-3-best-ias-coaching-in-gurgaon -> best-ias-coaching-in-gurgaon
const mainPage = BY_SLUG.get('best-ias-coaching-in-gurgaon')!;
BY_SLUG.set('top-3-best-ias-coaching-in-gurgaon', mainPage);
BY_SLUG.set('top-3-ias-coaching-in-gurgaon', mainPage);
BY_SLUG.set('best-upsc-coaching-in-gurgaon', mainPage);
BY_SLUG.set('top-3-best-upsc-coaching-in-gurgaon', mainPage);

// e.g. best-ias-coaching-in-gurgaon-as-per-faculty -> top-3-best-ias-coaching-in-gurgaon-as-per-faculty
const facultyPage = BY_SLUG.get('top-3-best-ias-coaching-in-gurgaon-as-per-faculty')!;
BY_SLUG.set('best-ias-coaching-in-gurgaon-as-per-faculty', facultyPage);
BY_SLUG.set('best-upsc-coaching-in-gurgaon-as-per-faculty', facultyPage);
BY_SLUG.set('top-3-best-upsc-coaching-in-gurgaon-as-per-faculty', facultyPage);

// As per results alias
const resultsPage = BY_SLUG.get('best-ias-coaching-in-gurgaon-as-per-cse-results')!;
BY_SLUG.set('best-ias-coaching-in-gurgaon-as-per-results', resultsPage);
BY_SLUG.set('best-upsc-coaching-in-gurgaon-as-per-results', resultsPage);
BY_SLUG.set('best-upsc-coaching-in-gurgaon-as-per-cse-results', resultsPage);

export function getIasGurgaonRankingPage(slug: string): IasGurgaonRankingPage | undefined {
  return BY_SLUG.get(slug);
}

export function getAllIasGurgaonRankingSlugs(): string[] {
  return Array.from(BY_SLUG.keys());
}
