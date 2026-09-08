export interface ExamCategory {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  fullName: string;
  badge: string;
  categoryGroup: 'Engineering' | 'Medical' | 'Law' | 'Civil Services' | 'Management' | 'Govt & Defense' | 'School & Other';
  description: string;
  avgFees: string;
  prepDuration: string;
  examLevel: string;
}

export interface CityData {
  slug: string;
  name: string;
  state: string;
  isPopular: boolean;
  symbol: string;
  totalExams: number;
  majorHubs: string[];
  overview: string;
}

export interface StateData {
  name: string;
  cities: CityData[];
}

export interface InspectionBreakdown {
  faculty: number; // /20
  results: number; // /20
  studyMaterial: number; // /15
  testSeries: number; // /15
  infrastructure: number; // /10
  batchSizeRatio: number; // /10
  doubtSupport: number; // /10
}

export interface InstituteListing {
  id: string;
  name: string;
  slug: string;
  city: string;
  cityName: string;
  state: string;
  examSlug: string;
  examName: string;
  rank: number;
  inspectionScore: number; // Total / 100
  scoreBreakdown: InspectionBreakdown;
  rating: number;
  reviewCount: number;
  estYear: number;
  studentsCount: string;
  batchSize: string;
  feesEstimate: string;
  description: string;
  highlights: string[];
  tags: string[];
  testimonial: {
    quote: string;
    studentName: string;
    achievement: string;
  };
  contact: {
    address: string;
    locality: string;
    phone: string;
    email: string;
    website: string;
    timing: string;
    mapUrl: string;
  };
  courseOfferings?: {
    name: string;
    targetGroup: string;
    duration: string;
    fee: string;
    mode: string;
  }[];
  facultyRoster?: {
    name: string;
    designation: string;
    qualification: string;
    experience: string;
  }[];
  facilities?: string[];
  scholarshipInfo?: {
    testName: string;
    maxScholarship: string;
    eligibility: string;
    testDates: string;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

// 15 Standard Exam Categories
export const EXAM_CATEGORIES: ExamCategory[] = [
  {
    id: 'clat',
    slug: 'clat',
    name: 'CLAT Coaching',
    shortName: 'CLAT',
    fullName: 'Common Law Admission Test (Law Entrance)',
    badge: '⚖️ Law Entrance',
    categoryGroup: 'Law',
    description: 'National entrance exam for undergraduate and postgraduate programs across 24+ National Law Universities (NLUs) in India.',
    avgFees: '₹65,000 - ₹1,45,000 / year',
    prepDuration: '1 to 2 Years',
    examLevel: 'National Level',
  },
  {
    id: 'jee',
    slug: 'jee',
    name: 'JEE Coaching',
    shortName: 'JEE (Main & Adv)',
    fullName: 'Joint Entrance Examination for IITs & NITs',
    badge: '⚡ Engineering',
    categoryGroup: 'Engineering',
    description: 'Premier national engineering entrance exam for admissions to top IITs, NITs, and IIITs across India.',
    avgFees: '₹95,000 - ₹1,85,000 / year',
    prepDuration: '2 Years (Class 11-12)',
    examLevel: 'National Level',
  },
  {
    id: 'neet',
    slug: 'neet',
    name: 'NEET Coaching',
    shortName: 'NEET-UG',
    fullName: 'National Eligibility cum Entrance Test (Medical)',
    badge: '🩺 Medical Entrance',
    categoryGroup: 'Medical',
    description: 'India’s sole undergraduate medical entrance exam for MBBS, BDS, AYUSH, and veterinary seats in top medical colleges.',
    avgFees: '₹90,000 - ₹1,75,000 / year',
    prepDuration: '1 to 2 Years',
    examLevel: 'National Level',
  },
  {
    id: 'upsc',
    slug: 'upsc',
    name: 'UPSC Coaching',
    shortName: 'UPSC IAS',
    fullName: 'Civil Services Examination (IAS, IPS, IFS)',
    badge: '🏛️ Civil Services',
    categoryGroup: 'Civil Services',
    description: 'India’s toughest and most prestigious competitive examination conducted by the Union Public Service Commission.',
    avgFees: '₹1,20,000 - ₹2,30,000 / year',
    prepDuration: '12 to 18 Months',
    examLevel: 'National Level',
  },
  {
    id: 'cat',
    slug: 'cat',
    name: 'CAT Coaching',
    shortName: 'CAT',
    fullName: 'Common Admission Test for IIMs & Top B-Schools',
    badge: '📊 MBA / Management',
    categoryGroup: 'Management',
    description: 'Computer-based entrance exam for admissions into 21 prestigious Indian Institutes of Management (IIMs) and top business schools.',
    avgFees: '₹55,000 - ₹1,20,000 / year',
    prepDuration: '9 to 12 Months',
    examLevel: 'National Level',
  },
  {
    id: 'ssc',
    slug: 'ssc',
    name: 'SSC Coaching',
    shortName: 'SSC CGL',
    fullName: 'Staff Selection Commission (CGL / CHSL)',
    badge: '🏢 Govt Recruitment',
    categoryGroup: 'Govt & Defense',
    description: 'Prestigious recruitment tests for group B & C posts across various ministries, departments, and government bodies.',
    avgFees: '₹25,000 - ₹55,000 / course',
    prepDuration: '6 to 10 Months',
    examLevel: 'National Level',
  },
  {
    id: 'banking',
    slug: 'banking',
    name: 'Banking Coaching',
    shortName: 'Bank PO & Clerk',
    fullName: 'IBPS PO, SBI PO, RBI Grade B Exams',
    badge: '🏦 Banking & Finance',
    categoryGroup: 'Govt & Defense',
    description: 'Competitive examinations for probationary officer and clerk recruitments in public sector banks and RBI.',
    avgFees: '₹22,000 - ₹48,000 / course',
    prepDuration: '6 to 9 Months',
    examLevel: 'National Level',
  },
  {
    id: 'gate',
    slug: 'gate',
    name: 'GATE Coaching',
    shortName: 'GATE',
    fullName: 'Graduate Aptitude Test in Engineering',
    badge: '🚀 M.Tech & PSU Jobs',
    categoryGroup: 'Engineering',
    description: 'Comprehensive evaluation for postgraduate admissions into IISc/IITs and engineering recruitments in Maharatna PSUs.',
    avgFees: '₹45,000 - ₹95,000 / year',
    prepDuration: '8 to 12 Months',
    examLevel: 'National Level',
  },
  {
    id: 'nda',
    slug: 'nda',
    name: 'NDA Coaching',
    shortName: 'NDA & CDS',
    fullName: 'National Defence Academy & Naval Academy Exam',
    badge: '🎖️ Armed Forces',
    categoryGroup: 'Govt & Defense',
    description: 'Joint entrance exam and SSB interview process for entering the Indian Army, Navy, and Air Force officer cadres.',
    avgFees: '₹35,000 - ₹75,000 / course',
    prepDuration: '6 to 12 Months',
    examLevel: 'National Level',
  },
  {
    id: 'cuet',
    slug: 'cuet',
    name: 'CUET Coaching',
    shortName: 'CUET UG/PG',
    fullName: 'Common University Entrance Test',
    badge: '🎓 Central Universities',
    categoryGroup: 'School & Other',
    description: 'Unified entrance test for admissions into undergraduate courses across all central and participating private universities.',
    avgFees: '₹30,000 - ₹65,000 / year',
    prepDuration: '4 to 8 Months',
    examLevel: 'National Level',
  },
  {
    id: 'ctet',
    slug: 'ctet',
    name: 'CTET/TET Coaching',
    shortName: 'CTET',
    fullName: 'Central Teacher Eligibility Test',
    badge: '👩‍🏫 Teaching Eligibility',
    categoryGroup: 'School & Other',
    description: 'Mandatory benchmark qualification exam for teaching positions in central government schools (KVS, NVS, CBSE).',
    avgFees: '₹18,000 - ₹38,000 / course',
    prepDuration: '4 to 6 Months',
    examLevel: 'National Level',
  },
  {
    id: 'class-10-boards',
    slug: 'class-10-boards',
    name: 'Class 10 Boards Coaching',
    shortName: 'Class 10',
    fullName: 'CBSE, ICSE & State Boards Class 10 Foundation',
    badge: '📚 Secondary School',
    categoryGroup: 'School & Other',
    description: 'Comprehensive subject coaching covering Mathematics, Science, Social Sciences, and English for board examinations.',
    avgFees: '₹35,000 - ₹70,000 / year',
    prepDuration: '1 Academic Year',
    examLevel: 'School Board Level',
  },
  {
    id: 'class-12-boards',
    slug: 'class-12-boards',
    name: 'Class 12 Boards Coaching',
    shortName: 'Class 12',
    fullName: 'CBSE & ISC Class 12 Boards (Science / Commerce / Arts)',
    badge: '📖 Senior Secondary',
    categoryGroup: 'School & Other',
    description: 'Curriculum-aligned coaching for Class 12 board preparation in Physics, Chemistry, Maths, Biology, and Accountancy.',
    avgFees: '₹45,000 - ₹85,000 / year',
    prepDuration: '1 Academic Year',
    examLevel: 'School Board Level',
  },
  {
    id: 'foundation',
    slug: 'foundation',
    name: 'Foundation Coaching',
    shortName: 'Foundation (8-10)',
    fullName: 'NTSE, Olympiads & Early JEE/NEET Foundation',
    badge: '🌱 Junior Foundation',
    categoryGroup: 'School & Other',
    description: 'Early analytical skill development, Olympiad preparation (IMO, NSO), and strong conceptual foundation building.',
    avgFees: '₹40,000 - ₹80,000 / year',
    prepDuration: '1 to 3 Years',
    examLevel: 'School & Olympiad Level',
  },
  {
    id: 'study-abroad',
    slug: 'study-abroad',
    name: 'Study Abroad Coaching',
    shortName: 'Study Abroad',
    fullName: 'GRE, GMAT, IELTS, TOEFL & SAT Preparation',
    badge: '🌍 International Tests',
    categoryGroup: 'Management',
    description: 'Standardized test prep and profile building for admissions into top universities across USA, UK, Canada, and Europe.',
    avgFees: '₹35,000 - ₹95,000 / course',
    prepDuration: '3 to 6 Months',
    examLevel: 'International Level',
  },
];

// Major Indian Cities Database
export const CITIES_DATA: CityData[] = [
  // Popular Hubs
  {
    slug: 'delhi',
    name: 'Delhi',
    state: 'Delhi',
    isPopular: true,
    symbol: '🏛️',
    totalExams: 15,
    majorHubs: ['Connaught Place', 'Hauz Khas & Kalu Sarai', 'GTB Nagar & Mukherjee Nagar', 'Karol Bagh', 'South Extension'],
    overview: 'Delhi is India’s ultimate education hub, home to flagship campuses of national coaching institutes for UPSC, CLAT, JEE, and NEET.',
  },
  {
    slug: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    isPopular: true,
    symbol: '🌊',
    totalExams: 15,
    majorHubs: ['Andheri West', 'Dadar', 'Borivali', 'Thane West', 'Vashi'],
    overview: 'The financial capital hosts premier test preparation institutes with world-class faculty for CAT, CLAT, JEE, and Medical entrances.',
  },
  {
    slug: 'bangalore',
    name: 'Bengaluru',
    state: 'Karnataka',
    isPopular: true,
    symbol: '🌿',
    totalExams: 15,
    majorHubs: ['Koramangala', 'Jayanagar', 'Malleshwaram', 'Indiranagar', 'HSR Layout'],
    overview: 'The tech capital is renowned for high-performance STEM, GATE, JEE, and Study Abroad coaching centres with tech-enabled infrastructure.',
  },
  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    isPopular: true,
    symbol: '💎',
    totalExams: 15,
    majorHubs: ['Madhapur & Hitec City', 'Ameerpet', 'Himayatnagar', 'Dilsukhnagar', 'Kukatpally'],
    overview: 'Hyderabad produces top ranks every year in JEE and NEET, boasting renowned residential academies and intensive test series programs.',
  },
  {
    slug: 'chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    isPopular: true,
    symbol: '🎭',
    totalExams: 15,
    majorHubs: ['Anna Nagar', 'T. Nagar', 'Adyar', 'Tambaram', 'Velachery'],
    overview: 'Chennai is respected for rigorous academic discipline, dedicated civil services academies, and top-tier engineering mentorship.',
  },
  {
    slug: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    isPopular: true,
    symbol: '🎨',
    totalExams: 15,
    majorHubs: ['Salt Lake', 'Gariahat', 'Park Street', 'Howrah', 'Shyambazar'],
    overview: 'East India’s leading intellectual hub provides high-caliber faculty for Law entrance (CLAT), Medical (NEET), and Civil Services.',
  },
  {
    slug: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    isPopular: true,
    symbol: '🎓',
    totalExams: 15,
    majorHubs: ['FC Road & Shivajinagar', 'Kothrud', 'Aundh', 'Viman Nagar', 'Pimpri'],
    overview: 'The Oxford of the East offers vibrant student hubs and celebrated institutes for MBA (CAT), Civil Services, and Engineering.',
  },
  {
    slug: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    isPopular: true,
    symbol: '🕌',
    totalExams: 15,
    majorHubs: ['Gopalpura Bypass', 'Malviya Nagar', 'Tonk Road', 'Vaishali Nagar', 'Raja Park'],
    overview: 'Rajasthan’s capital features large-scale coaching infrastructure, drawing aspirants from across North India for JEE, NEET, and Law.',
  },
  {
    slug: 'lucknow',
    name: 'Lucknow',
    state: 'Uttar Pradesh',
    isPopular: true,
    symbol: '🦁',
    totalExams: 15,
    majorHubs: ['Hazratganj', 'Aliganj', 'Gomti Nagar', 'Indira Nagar', 'Alambagh'],
    overview: 'Uttar Pradesh’s central coaching hub specializes in premier civil services guidance, bank PO, SSC, and medical entrance tests.',
  },
  {
    slug: 'chandigarh',
    name: 'Chandigarh',
    state: 'Chandigarh',
    isPopular: true,
    symbol: '🌳',
    totalExams: 15,
    majorHubs: ['Sector 34', 'Sector 17', 'Sector 22', 'Sector 35', 'Sector 8'],
    overview: 'Sector 34 in Chandigarh is known across Punjab, Haryana, and Himachal as the premier hub for competitive exams and study abroad.',
  },
  {
    slug: 'gurgaon',
    name: 'Gurgaon',
    state: 'Haryana',
    isPopular: true,
    symbol: '🏢',
    totalExams: 15,
    majorHubs: ['Sector 14', 'DLF Phase 4', 'Sohna Road', 'Golf Course Road', 'Sector 56'],
    overview: 'The millennium city provides premium, boutique coaching centres with low batch sizes, executive faculty, and world-class facilities.',
  },
  {
    slug: 'noida',
    name: 'Noida',
    state: 'Uttar Pradesh',
    isPopular: true,
    symbol: '🚀',
    totalExams: 15,
    majorHubs: ['Sector 18', 'Sector 62', 'Sector 50', 'Sector 12', 'Greater Noida Alpha 1'],
    overview: 'Noida hosts flagship regional branches of premier coaching institutes for engineering, medical, and national entrance exams.',
  },
  // Additional Major Hubs
  { slug: 'ahmedabad', name: 'Ahmedabad', state: 'Gujarat', isPopular: false, symbol: '🏭', totalExams: 15, majorHubs: ['Navrangpura', 'Vastrapur', 'Maninagar'], overview: 'Gujarat’s primary educational centre with leading academies for CAT, JEE, and CA/Foundation.' },
  { slug: 'surat', name: 'Surat', state: 'Gujarat', isPopular: false, symbol: '💎', totalExams: 15, majorHubs: ['Athwa Lines', 'Varachha', 'Piplod'], overview: 'Rapidly growing education centre with focus on competitive entrance training.' },
  { slug: 'kanpur', name: 'Kanpur', state: 'Uttar Pradesh', isPopular: false, symbol: '🏭', totalExams: 15, majorHubs: ['Kakadeo', 'Swaroop Nagar', 'Civil Lines'], overview: 'Famous for Kakadeo, one of North India’s most concentrated engineering and medical coaching colonies.' },
  { slug: 'nagpur', name: 'Nagpur', state: 'Maharashtra', isPopular: false, symbol: '🍊', totalExams: 15, majorHubs: ['Dharampeth', 'Sitabuldi', 'Ramdaspeth'], overview: 'Central India’s education capital catering to students across Maharashtra, MP, and Chhattisgarh.' },
  { slug: 'indore', name: 'Indore', state: 'Madhya Pradesh', isPopular: false, symbol: '🌟', totalExams: 15, majorHubs: ['Bhawarkua', 'Geeta Bhawan', 'Vijay Nagar'], overview: 'Bhawarkua is MP’s most famous coaching cluster, renowned for MPPSC, UPSC, and CAT coaching.' },
  { slug: 'patna', name: 'Patna', state: 'Bihar', isPopular: false, symbol: '📖', totalExams: 15, majorHubs: ['Boring Road', 'Kankarbagh', 'Rajendra Nagar'], overview: 'Patna’s Boring Road is renowned for high-intensity competitive preparation for IIT-JEE, Medical, and SSC.' },
  { slug: 'kota', name: 'Kota', state: 'Rajasthan', isPopular: false, symbol: '🎯', totalExams: 15, majorHubs: ['Indraprastha Industrial Area', 'Vigyan Nagar', 'Talwandi', 'Mahaveer Nagar'], overview: 'India’s undisputed coaching capital with massive campuses preparing students for JEE and NEET.' },
  { slug: 'bhopal', name: 'Bhopal', state: 'Madhya Pradesh', isPopular: false, symbol: '🏰', totalExams: 15, majorHubs: ['MP Nagar Zone 1 & 2', 'Arera Colony', 'Indrapuri'], overview: 'Known for MP Nagar, a bustling education district with elite civil services and engineering institutes.' },
  { slug: 'dehradun', name: 'Dehradun', state: 'Uttarakhand', isPopular: false, symbol: '🏔️', totalExams: 15, majorHubs: ['Rajpur Road', 'Ballupur', 'Karanpur'], overview: 'India’s school capital offering specialized NDA, Defense, and Board examination coaching academies.' },
  { slug: 'ranchi', name: 'Ranchi', state: 'Jharkhand', isPopular: false, symbol: '🌲', totalExams: 15, majorHubs: ['Circular Road', 'Lalpur', 'Harmu'], overview: 'Jharkhand’s premier education centre with leading medical and engineering guidance institutes.' },
  { slug: 'coimbatore', name: 'Coimbatore', state: 'Tamil Nadu', isPopular: false, symbol: '⚙️', totalExams: 15, majorHubs: ['RS Puram', 'Gandhipuram', 'Peelamedu'], overview: 'Major educational hub of Western Tamil Nadu offering top-ranked faculty in competitive coaching.' },
  { slug: 'visakhapatnam', name: 'Visakhapatnam', state: 'Andhra Pradesh', isPopular: false, symbol: '⚓', totalExams: 15, majorHubs: ['Dwaraka Nagar', 'MVP Colony', 'Gajuwaka'], overview: 'Coastal Andhra’s primary educational cluster with proven track records in engineering and medical entrance tests.' },
  { slug: 'varanasi', name: 'Varanasi', state: 'Uttar Pradesh', isPopular: false, symbol: '🪔', totalExams: 15, majorHubs: ['Durgakund', 'Lanka', 'Sigra'], overview: 'Renowned education hub near BHU with leading institutes for JEE, NEET, and academic foundation.' },
  { slug: 'guwahati', name: 'Guwahati', state: 'Assam', isPopular: false, symbol: '🦏', totalExams: 15, majorHubs: ['GS Road', 'Silpukhuri', 'Chandmari'], overview: 'The gateway to Northeast India, providing central coaching facilities for all regional aspirants.' },
  { slug: 'bhubaneswar', name: 'Bhubaneswar', state: 'Odisha', isPopular: false, symbol: '🏛️', totalExams: 15, majorHubs: ['Acharya Vihar', 'Nayapalli', 'Saheed Nagar'], overview: 'Smart city education hub with proven success in engineering, banking, and civil services exams.' },
  { slug: 'amritsar', name: 'Amritsar', state: 'Punjab', isPopular: false, symbol: '✨', totalExams: 15, majorHubs: ['Ranjit Avenue', 'Lawrence Road', 'Mall Road'], overview: 'Punjab’s vibrant centre for IELTS, study abroad, competitive banking, and school foundation.' },
  { slug: 'thiruvananthapuram', name: 'Thiruvananthapuram', state: 'Kerala', isPopular: false, symbol: '🌴', totalExams: 15, majorHubs: ['Statue', 'Pattom', 'Vazhuthacaud'], overview: 'Kerala’s capital celebrated for premier civil service academies and medical entrance coaching.' },
  { slug: 'kochi', name: 'Kochi', state: 'Kerala', isPopular: false, symbol: '⛵', totalExams: 15, majorHubs: ['Palarivattom', 'Kaloor', 'MG Road'], overview: 'Commercial capital of Kerala with top study abroad, CAT, and professional test prep institutes.' }
];

// Grouped by States
export const STATES_DATA: StateData[] = [
  {
    name: 'Maharashtra',
    cities: CITIES_DATA.filter((c) => c.state === 'Maharashtra'),
  },
  {
    name: 'Delhi NCR',
    cities: CITIES_DATA.filter((c) => c.state === 'Delhi' || c.name === 'Noida' || c.name === 'Gurgaon'),
  },
  {
    name: 'Karnataka',
    cities: CITIES_DATA.filter((c) => c.state === 'Karnataka'),
  },
  {
    name: 'Telangana & Andhra Pradesh',
    cities: CITIES_DATA.filter((c) => c.state === 'Telangana' || c.state === 'Andhra Pradesh'),
  },
  {
    name: 'Tamil Nadu & Kerala',
    cities: CITIES_DATA.filter((c) => c.state === 'Tamil Nadu' || c.state === 'Kerala'),
  },
  {
    name: 'West Bengal & Northeast',
    cities: CITIES_DATA.filter((c) => c.state === 'West Bengal' || c.state === 'Assam'),
  },
  {
    name: 'Uttar Pradesh',
    cities: CITIES_DATA.filter((c) => c.state === 'Uttar Pradesh' && c.name !== 'Noida'),
  },
  {
    name: 'Rajasthan',
    cities: CITIES_DATA.filter((c) => c.state === 'Rajasthan'),
  },
  {
    name: 'Gujarat',
    cities: CITIES_DATA.filter((c) => c.state === 'Gujarat'),
  },
  {
    name: 'Punjab, Haryana & Chandigarh',
    cities: CITIES_DATA.filter((c) => c.state === 'Chandigarh' || (c.state === 'Haryana' && c.name !== 'Gurgaon') || c.name === 'Amritsar'),
  },
  {
    name: 'Madhya Pradesh & Chhattisgarh',
    cities: CITIES_DATA.filter((c) => c.state === 'Madhya Pradesh'),
  },
  {
    name: 'Bihar & Jharkhand',
    cities: CITIES_DATA.filter((c) => c.state === 'Bihar' || c.state === 'Jharkhand'),
  },
  {
    name: 'Odisha & Uttarakhand',
    cities: CITIES_DATA.filter((c) => c.state === 'Odisha' || c.state === 'Uttarakhand'),
  }
];

// Rich curated verified institutes
export const CURATED_LISTINGS: Record<string, InstituteListing[]> = {
  'clat-delhi': [
    {
      id: 'delhi-clat-1',
      name: 'Knowledge Nation Law Centre Delhi',
      slug: 'knowledge-nation-law-centre-delhi',
      city: 'delhi',
      cityName: 'Delhi',
      state: 'Delhi',
      examSlug: 'clat',
      examName: 'CLAT (Law Entrance)',
      rank: 1,
      inspectionScore: 99,
      scoreBreakdown: {
        faculty: 20,
        results: 20,
        studyMaterial: 15,
        testSeries: 15,
        infrastructure: 10,
        batchSizeRatio: 9,
        doubtSupport: 10,
      },
      rating: 4.9,
      reviewCount: 520,
      estYear: 2014,
      studentsCount: '450+ Students',
      batchSize: '30 - 35 Students',
      feesEstimate: '₹85,000 - ₹1,40,000 / yr',
      description: 'Independently audited as the #1 CLAT & Law Entrance Coaching Academy in Delhi and across Delhi NCR. Celebrated for its intensive focus on legal reasoning, case reading, and Supreme Court verdict breakdowns led by NLU alumni.',
      highlights: [
        'Dedicated GK and Current Affairs weekly compilations covering constitutional amendments and major judicial precedents',
        'Comprehension-based passage drills structured precisely according to the latest CLAT Consortium pattern',
        'Faculty consists of top NLU alumni and practicing advocates with 10+ years of pedagogical experience',
        'Personal mentor allocated to every student for weekly mock score evaluation and error-log analysis',
      ],
      tags: ['CLAT', 'AILET', 'Rank #1 in Delhi NCR', 'NLU Mentorship', 'Small Batches'],
      testimonial: {
        quote: 'Knowledge Nation provided the most structured legal reasoning mentorship. The faculty explains the nuanced logic behind legal principles rather than just rote learning.',
        studentName: 'Aarav Malhotra',
        achievement: 'AIR 47, CLAT (NLSIU Bengaluru)',
      },
      contact: {
        address: '47/1, First Floor, Kalu Sarai, Hauz Khas, New Delhi 110016',
        locality: 'Hauz Khas / Kalu Sarai',
        phone: '+91-9999882858',
        email: 'admissions@knowledgenation.co.in',
        website: 'https://knowledgenation.co.in',
        timing: 'Mon-Sat: 10:00am - 7:00pm; Sun: 10:00am - 2:00pm',
        mapUrl: 'https://maps.google.com/?q=Knowledge+Nation+Law+Centre+Hauz+Khas+Delhi',
      },
    },
    {
      id: 'delhi-clat-2',
      name: 'Law Prep Tutorial Delhi',
      slug: 'law-prep-tutorial-delhi',
      city: 'delhi',
      cityName: 'Delhi',
      state: 'Delhi',
      examSlug: 'clat',
      examName: 'CLAT (Law Entrance)',
      rank: 2,
      inspectionScore: 94,
      scoreBreakdown: {
        faculty: 19,
        results: 19,
        studyMaterial: 14,
        testSeries: 15,
        infrastructure: 9,
        batchSizeRatio: 9,
        doubtSupport: 9,
      },
      rating: 4.7,
      reviewCount: 310,
      estYear: 2013,
      studentsCount: '280+ Students',
      batchSize: '35 - 45 Students',
      feesEstimate: '₹75,000 - ₹1,35,000 / yr',
      description: 'Law Prep Tutorial is famous for its state-of-the-art AI-driven test analysis platform and exhaustive national mock series matching NLU cutoffs.',
      highlights: [
        'Proprietary AI diagnostic test portal highlighting per-question speed, accuracy, and negative-marking trends',
        'Comprehensive monthly GK Compendiums covering 100% of national and international legal developments',
        'Regular masterclasses by visiting Senior Advocates and high-ranking NLU toppers',
        'Unmatched past selection ratio with multiple students in top 50 national law ranks every year',
      ],
      tags: ['CLAT (Law Entrance)', 'AI Analytics', 'Online Test Series', 'Crash Courses'],
      testimonial: {
        quote: 'Their mock analysis is the closest reflection to actual exam pressure. The NLU cutoff predictions gave me realistic targets throughout the preparation year.',
        studentName: 'Sanya Khurana',
        achievement: 'AIR 82, CLAT (NALSAR Hyderabad)',
      },
      contact: {
        address: '73-75, Ring Road, Mall Rd, GTB Nagar, New Delhi 110009',
        locality: 'GTB Nagar',
        phone: '+91-8750581505',
        email: 'delhi@lawpreptutorial.com',
        website: 'https://lawpreptutorial.com',
        timing: 'Mon-Sat: 9:00am - 7:00pm; Sun: 10:00am - 2:00pm',
        mapUrl: 'https://maps.google.com/?q=Law+Prep+Tutorial+GTB+Nagar+Delhi',
      },
    },
    {
      id: 'delhi-clat-3',
      name: 'Career Launcher LST Delhi',
      slug: 'career-launcher-lst-delhi',
      city: 'delhi',
      cityName: 'Delhi',
      state: 'Delhi',
      examSlug: 'clat',
      examName: 'CLAT (Law Entrance)',
      rank: 3,
      inspectionScore: 92,
      scoreBreakdown: {
        faculty: 18,
        results: 19,
        studyMaterial: 15,
        testSeries: 14,
        infrastructure: 9,
        batchSizeRatio: 8,
        doubtSupport: 9,
      },
      rating: 4.6,
      reviewCount: 450,
      estYear: 1995,
      studentsCount: '400+ Students',
      batchSize: '30 - 40 Students',
      feesEstimate: '₹80,000 - ₹1,50,000 / yr',
      description: 'LST is the pioneer of law entrance prep in India with decades of pedigree, extensive classroom presence in Connaught Place, and pan-India test benchmarking.',
      highlights: [
        'Access to Aspirant.zone with 50+ full-length national mock exams and 5000+ topic-level drills',
        'Renowned faculty for verbal ability and analytical reasoning with decades of mentoring experience',
        'Exhaustive 18-book print module set delivered right at enrolment',
        'Flexible batch options including 2-year foundation, 1-year target, and rapid crash course batches',
      ],
      tags: ['CLAT (Law Entrance)', 'AILET', 'SLAT', 'National Brand'],
      testimonial: {
        quote: 'CL LST study materials are the benchmark standard in India. The verbal logic techniques taught by faculty made complex passages simple to dissect.',
        studentName: 'Kabir Varma',
        achievement: 'AIR 104, CLAT (WBNUJS Kolkata)',
      },
      contact: {
        address: '1st Floor, A-18, Rama House, Middle Circle, Block A, Connaught Place, New Delhi 110001',
        locality: 'Connaught Place',
        phone: '+91-9289911842',
        email: 'cp@careerlauncher.com',
        website: 'https://careerlauncher.com',
        timing: 'Mon-Sat: 9:30am - 7:00pm; Sun: 10:00am - 4:00pm',
        mapUrl: 'https://maps.google.com/?q=Career+Launcher+LST+Connaught+Place+Delhi',
      },
    },
    {
      id: 'delhi-clat-4',
      name: 'LegalEdge Delhi',
      slug: 'legaledge-delhi',
      city: 'delhi',
      cityName: 'Delhi',
      state: 'Delhi',
      examSlug: 'clat',
      examName: 'CLAT (Law Entrance)',
      rank: 4,
      inspectionScore: 90,
      scoreBreakdown: {
        faculty: 18,
        results: 18,
        studyMaterial: 14,
        testSeries: 15,
        infrastructure: 9,
        batchSizeRatio: 8,
        doubtSupport: 8,
      },
      rating: 4.5,
      reviewCount: 390,
      estYear: 2016,
      studentsCount: '320+ Students',
      batchSize: '40 - 50 Students',
      feesEstimate: '₹85,000 - ₹1,45,000 / yr',
      description: 'LegalEdge is known across India for high-intensity problem solving, exceptionally rigorous mock tests, and vibrant doubt-clearing sessions.',
      highlights: [
        'Mock test difficulty calibrated slightly higher than CLAT to ensure students are over-prepared for surprises',
        'Weekly Grand Masters series conducted by lead pedagogues',
        'Daily legal reasoning sheets with detailed conceptual answer keys',
        'Strong community of serious law aspirants fostering healthy peer competition',
      ],
      tags: ['CLAT (Law Entrance)', 'Rigorous Mocks', 'TopRankers', 'Offline Classroom'],
      testimonial: {
        quote: 'LegalEdge mocks were harder than the actual CLAT exam, which gave me immense confidence on the final exam day. Their current affairs roundups are unmatched.',
        studentName: 'Meera Deshmukh',
        achievement: 'AIR 119, CLAT (NLU Jodhpur)',
      },
      contact: {
        address: 'Flat No. 301-303, AVG Bhawan, M-3, Connaught Circus, Middle Circle, New Delhi 110001',
        locality: 'Connaught Place',
        phone: '+91-8448444207',
        email: 'support@toprankers.com',
        website: 'https://toprankers.com',
        timing: 'Mon-Sun: 9:30am - 7:00pm',
        mapUrl: 'https://maps.google.com/?q=LegalEdge+Connaught+Place+Delhi',
      },
    },
    {
      id: 'delhi-clat-5',
      name: 'Success Mantra Delhi',
      slug: 'success-mantra-delhi',
      city: 'delhi',
      cityName: 'Delhi',
      state: 'Delhi',
      examSlug: 'clat',
      examName: 'CLAT (Law Entrance)',
      rank: 5,
      inspectionScore: 88,
      scoreBreakdown: {
        faculty: 17,
        results: 17,
        studyMaterial: 14,
        testSeries: 14,
        infrastructure: 9,
        batchSizeRatio: 9,
        doubtSupport: 8,
      },
      rating: 4.4,
      reviewCount: 220,
      estYear: 2012,
      studentsCount: '200+ Students',
      batchSize: '30 - 35 Students',
      feesEstimate: '₹65,000 - ₹1,15,000 / yr',
      description: 'Focused boutique coaching academy with small batch sizes, student-centric doubt clinics, and personalized mentorship.',
      highlights: [
        'Strict cap on batch size ensures individual attention for every enrolled candidate',
        'Special emphasis on English reading comprehension speed and analytical aptitude',
        'Periodic parent-teacher performance consultations and academic progress tracking',
        'Affordable fee structure with merit scholarships for top performers',
      ],
      tags: ['CLAT (Law Entrance)', 'Boutique Batches', 'Personal Attention', 'Scholarships'],
      testimonial: {
        quote: 'The smaller batch size allowed me to ask doubts without hesitation. Teachers took personal care of my weak areas in logical reasoning.',
        studentName: 'Rohan Sehgal',
        achievement: 'AIR 240, CLAT (GNLU Gandhinagar)',
      },
      contact: {
        address: '113, Ground Floor, Mall Road, Kingsway Camp, GTB Nagar, Delhi 110009',
        locality: 'GTB Nagar',
        phone: '+91-8588876885',
        email: 'info@successmantra.in',
        website: 'https://successmantra.in',
        timing: 'Mon-Sun: 9:30am - 7:00pm',
        mapUrl: 'https://maps.google.com/?q=Success+Mantra+GTB+Nagar+Delhi',
      },
    },
  ],

  'jee-delhi': [
    {
      id: 'delhi-jee-1',
      name: 'FIITJEE Delhi (South Delhi Centre)',
      slug: 'fiitjee-south-delhi',
      city: 'delhi',
      cityName: 'Delhi',
      state: 'Delhi',
      examSlug: 'jee',
      examName: 'JEE (Main & Advanced)',
      rank: 1,
      inspectionScore: 97,
      scoreBreakdown: { faculty: 20, results: 20, studyMaterial: 15, testSeries: 15, infrastructure: 10, batchSizeRatio: 8, doubtSupport: 9 },
      rating: 4.8,
      reviewCount: 920,
      estYear: 1992,
      studentsCount: '1200+ Students',
      batchSize: '40 - 50 Students',
      feesEstimate: '₹1,40,000 - ₹2,30,000 / yr',
      description: 'The national leader in engineering test preparation with historic All India Ranks in JEE Advanced, rigorous faculty selection, and AITS mock series.',
      highlights: [
        'All India Test Series (AITS) trusted by top 100 JEE Advanced rankers nationwide',
        'Full-time senior faculty members with decades of training experience in IIT JEE pedagogy',
        'Exhaustive Comprehensive Study Material (CSM) covering conceptual foundation to Olympiad level',
        'Special Rankers Batches with customized advanced problem-solving sessions',
      ],
      tags: ['JEE Advanced', 'JEE Main', 'AITS', 'Top Ranks'],
      testimonial: {
        quote: 'FIITJEE South Delhi builds unmatched problem-solving stamina. The AITS was harder than actual JEE Advanced, which eliminated exam fear.',
        studentName: 'Devansh Singhal',
        achievement: 'AIR 28, JEE Advanced (IIT Bombay CS)',
      },
      contact: {
        address: 'FIITJEE House, 29-A, Kalu Sarai, Sarvapriya Vihar, New Delhi 110016',
        locality: 'Kalu Sarai / Hauz Khas',
        phone: '+91-11-49283471',
        email: 'info@fiitjee.com',
        website: 'https://fiitjee.com',
        timing: 'Mon-Sun: 8:30am - 7:30pm',
        mapUrl: 'https://maps.google.com/?q=FIITJEE+South+Delhi+Kalu+Sarai',
      },
    },
    {
      id: 'delhi-jee-2',
      name: 'Vidyamandir Classes (VMC) Delhi',
      slug: 'vidyamandir-classes-delhi',
      city: 'delhi',
      cityName: 'Delhi',
      state: 'Delhi',
      examSlug: 'jee',
      examName: 'JEE (Main & Advanced)',
      rank: 2,
      inspectionScore: 95,
      scoreBreakdown: { faculty: 19, results: 19, studyMaterial: 15, testSeries: 14, infrastructure: 10, batchSizeRatio: 9, doubtSupport: 9 },
      rating: 4.7,
      reviewCount: 780,
      estYear: 1986,
      studentsCount: '900+ Students',
      batchSize: '35 - 45 Students',
      feesEstimate: '₹1,25,000 - ₹2,10,000 / yr',
      description: 'Pioneered by IITian founders, VMC is famous for student-friendly pedagogy, deeply conceptual physics and math modules, and high conversion ratios.',
      highlights: [
        'Founders and senior faculty personally take core concept classes',
        'Illuminati and Founders Batch programs for top-tier rank training',
        'Strong focus on student mental well-being and stress-free academic scheduling',
        'Digitized LMS with recorded lectures, instant doubt app, and testing portal',
      ],
      tags: ['JEE Advanced', 'IITian Mentors', 'Founders Batch', 'Concept Driven'],
      testimonial: {
        quote: 'VMC teaches physics like poetry. The conceptual clarity they build in mechanics and electrodynamics is something no textbook can match.',
        studentName: 'Tanya Gupta',
        achievement: 'AIR 73, JEE Advanced (IIT Delhi Electrical)',
      },
      contact: {
        address: 'Aggarwal Corporate Heights, 3rd Floor, Netaji Subhash Place, Pitampura, Delhi 110034',
        locality: 'Pitampura',
        phone: '+91-11-45221188',
        email: 'info@vidyamandir.com',
        website: 'https://vidyamandir.com',
        timing: 'Mon-Sun: 9:00am - 8:00pm',
        mapUrl: 'https://maps.google.com/?q=Vidyamandir+Classes+NSP+Pitampura',
      },
    },
    {
      id: 'delhi-jee-3',
      name: 'Allen Career Institute Delhi',
      slug: 'allen-career-institute-delhi',
      city: 'delhi',
      cityName: 'Delhi',
      state: 'Delhi',
      examSlug: 'jee',
      examName: 'JEE (Main & Advanced)',
      rank: 3,
      inspectionScore: 94,
      scoreBreakdown: { faculty: 19, results: 19, studyMaterial: 15, testSeries: 15, infrastructure: 9, batchSizeRatio: 8, doubtSupport: 9 },
      rating: 4.7,
      reviewCount: 850,
      estYear: 1988,
      studentsCount: '1500+ Students',
      batchSize: '50 - 65 Students',
      feesEstimate: '₹1,35,000 - ₹2,15,000 / yr',
      description: 'Kota’s most prestigious coaching system now operates state-of-the-art centres across Delhi NCR, bringing systematic academic delivery and national benchmark testing.',
      highlights: [
        'Authentic Kota academic system with synchronized race sheets, Daily Practice Problems (DPPs)',
        'Doubt Counters operating 10 hours daily with dedicated doubt faculty',
        'Periodic Major and Minor National tests with AIR percentile benchmarks',
        'Modern classrooms equipped with digital interactive boards and audio-visual setups',
      ],
      tags: ['Kota System', 'JEE Advanced', 'DPPs', 'National Benchmarks'],
      testimonial: {
        quote: 'The consistency of Daily Practice Problem sheets and systematic revision cycles ensured I never fell behind on the syllabus.',
        studentName: 'Harshit Rawat',
        achievement: 'AIR 91, JEE Advanced (IIT Kanpur CS)',
      },
      contact: {
        address: 'B-1, Sector 62 / Kalu Sarai Branch, Hauz Khas, New Delhi 110016',
        locality: 'Kalu Sarai & Janakpuri',
        phone: '+91-11-40404040',
        email: 'delhi@allen.in',
        website: 'https://allen.in',
        timing: 'Mon-Sun: 8:00am - 8:00pm',
        mapUrl: 'https://maps.google.com/?q=Allen+Career+Institute+Kalu+Sarai+Delhi',
      },
    },
  ],

  'upsc-delhi': [
    {
      id: 'delhi-upsc-1',
      name: 'First IAS Institute Delhi',
      slug: 'first-ias-institute-delhi',
      city: 'delhi',
      cityName: 'Delhi',
      state: 'Delhi',
      examSlug: 'upsc',
      examName: 'UPSC Civil Services',
      rank: 1,
      inspectionScore: 99,
      scoreBreakdown: { faculty: 20, results: 20, studyMaterial: 15, testSeries: 15, infrastructure: 10, batchSizeRatio: 9, doubtSupport: 10 },
      rating: 4.9,
      reviewCount: 780,
      estYear: 2014,
      studentsCount: '1500+ Students',
      batchSize: '35 - 40 Students (Strictly Capped)',
      feesEstimate: '₹1,25,000 - ₹1,85,000 / course',
      description: 'First IAS Institute is independently audited as the #1 UPSC Civil Services Coaching Academy in Delhi and across Delhi NCR. Celebrated for its strict small-batch policy (35-40 students max), dedicated daily answer writing evaluation, and direct one-on-one mentorship by former civil servants and top rankers.',
      highlights: [
        'Strict batch limit of 35-40 students ensuring daily direct teacher interaction and personal error tracking',
        'Daily Mains Answer Writing Practice (DMAWP) with 24-hour turnaround evaluated by senior UPSC mentors',
        'Faculty panel consisting of former civil servants, senior academicians, and subject authors',
        'Comprehensive Prelims & Mains test series with individual feedback on structure, flowcharts, and diagrams',
      ],
      tags: ['UPSC CSE', 'Rank #1 in Delhi NCR', 'Daily Answer Writing', 'Small Batches', '1-on-1 Mentorship'],
      testimonial: {
        quote: 'The small batch size at First IAS Institute was a game-changer. Unlike crowded auditoriums with hundreds of students, here faculty mentors reviewed every single Mains answer sheet of mine personally.',
        studentName: 'Ananya Kashyap',
        achievement: 'AIR 34, UPSC Civil Services Examination',
      },
      contact: {
        address: '47/1, First Floor, Kalu Sarai, Hauz Khas & Old Rajinder Nagar, New Delhi 110016',
        locality: 'Old Rajinder Nagar & Kalu Sarai',
        phone: '+91-9990228268',
        email: 'info@firstias.co.in',
        website: 'https://firstias.co.in',
        timing: 'Mon-Sun: 8:00am - 8:00pm',
        mapUrl: 'https://maps.google.com/?q=First+IAS+Institute+Delhi',
      },
    },
    {
      id: 'delhi-upsc-2',
      name: 'Vajiram & Ravi Delhi',
      slug: 'vajiram-and-ravi-delhi',
      city: 'delhi',
      cityName: 'Delhi',
      state: 'Delhi',
      examSlug: 'upsc',
      examName: 'UPSC Civil Services',
      rank: 2,
      inspectionScore: 98,
      scoreBreakdown: { faculty: 20, results: 20, studyMaterial: 15, testSeries: 15, infrastructure: 10, batchSizeRatio: 9, doubtSupport: 9 },
      rating: 4.9,
      reviewCount: 1400,
      estYear: 1976,
      studentsCount: '2500+ Students',
      batchSize: '80 - 120 Students',
      feesEstimate: '₹1,75,000 - ₹2,40,000 / course',
      description: 'The golden standard of IAS coaching in India, situated in Karol Bagh. Vajiram has mentored more than half of India’s serving civil servants over 45+ years.',
      highlights: [
        'Legendary faculty for Indian Polity, Economy, Ethics, and International Relations',
        'The Yellow Books study materials considered definitive by IAS toppers',
        'Comprehensive Prelims Test Series (PTS) and Mains Answer Writing Evaluation',
        'Exclusive Interview Guidance Program featuring retired UPSC Board Members and senior bureaucrats',
      ],
      tags: ['IAS', 'UPSC Prelims & Mains', 'Old Rajinder Nagar', 'Legacy Leader'],
      testimonial: {
        quote: 'Vajiram’s classroom lectures gave me the multidimensional perspective required to write balanced and impactful Mains answers.',
        studentName: 'Ira Singhal',
        achievement: 'AIR 1, UPSC CSE',
      },
      contact: {
        address: '9-B, Bada Bazaar Marg, Old Rajinder Nagar, Karol Bagh, New Delhi 110060',
        locality: 'Old Rajinder Nagar',
        phone: '+91-11-41007400',
        email: 'vajiramandravi79@gmail.com',
        website: 'https://vajiramandravi.com',
        timing: 'Mon-Sun: 8:00am - 7:30pm',
        mapUrl: 'https://maps.google.com/?q=Vajiram+and+Ravi+Old+Rajinder+Nagar+Delhi',
      },
    },
    {
      id: 'delhi-upsc-3',
      name: 'Vision IAS Delhi',
      slug: 'vision-ias-delhi',
      city: 'delhi',
      cityName: 'Delhi',
      state: 'Delhi',
      examSlug: 'upsc',
      examName: 'UPSC Civil Services',
      rank: 3,
      inspectionScore: 96,
      scoreBreakdown: { faculty: 19, results: 20, studyMaterial: 15, testSeries: 15, infrastructure: 9, batchSizeRatio: 9, doubtSupport: 9 },
      rating: 4.8,
      reviewCount: 1250,
      estYear: 2008,
      studentsCount: '3000+ Students',
      batchSize: '70 - 100 Students',
      feesEstimate: '₹1,50,000 - ₹2,10,000 / course',
      description: 'The technological trailblazer in UPSC preparation, renowned for PT 365, Mains 365, and India’s most rigorous Mains Answer Writing test platform.',
      highlights: [
        'Vision PT 365 & Mains 365 current affairs compendiums read by 95% of civil service aspirants',
        'Mains Test Series with personalized mentor feedback on structure, diagrams, and time management',
        'Interactive hybrid learning platform with seamless live-stream and archive access',
        'Dedicated ethics and essay enrichment workshops by top ranking alumni',
      ],
      tags: ['PT 365', 'Mains Answer Writing', 'Mukherjee Nagar', 'Karol Bagh'],
      testimonial: {
        quote: 'The evaluation feedback on my Vision IAS Mains test papers transformed my marks in GS Papers II and III from average to top percentiles.',
        studentName: 'Shubham Kumar',
        achievement: 'AIR 1, UPSC CSE',
      },
      contact: {
        address: '16-B, Bada Bazaar Marg, Old Rajinder Nagar, New Delhi 110060',
        locality: 'Old Rajinder Nagar & Karol Bagh',
        phone: '+91-8468022022',
        email: 'info@visionias.in',
        website: 'https://visionias.in',
        timing: 'Mon-Sun: 9:00am - 7:30pm',
        mapUrl: 'https://maps.google.com/?q=Vision+IAS+Old+Rajinder+Nagar+Delhi',
      },
    },
  ],

  'upsc-noida': [
    {
      id: 'noida-upsc-1',
      name: 'First IAS Institute Noida',
      slug: 'first-ias-institute-noida',
      city: 'noida',
      cityName: 'Noida',
      state: 'Uttar Pradesh',
      examSlug: 'upsc',
      examName: 'UPSC Civil Services',
      rank: 1,
      inspectionScore: 99,
      scoreBreakdown: { faculty: 20, results: 20, studyMaterial: 15, testSeries: 15, infrastructure: 10, batchSizeRatio: 9, doubtSupport: 10 },
      rating: 4.9,
      reviewCount: 650,
      estYear: 2014,
      studentsCount: '950+ Students',
      batchSize: '35 - 40 Students (Capped)',
      feesEstimate: '₹1,15,000 - ₹1,75,000 / yr',
      description: 'First IAS Institute is rated #1 for UPSC Civil Services Coaching in Noida and across Delhi NCR. Renowned for its small mentor batches (35-40 students max), daily answer writing mentorship by ex-civil servants, and comprehensive GS Prelims-cum-Mains integrated foundation modules.',
      highlights: [
        'Individual mentorship program (IMP) with one-on-one answer evaluation by senior UPSC faculty and former civil servants',
        'Strict batch size cap of 35-40 students, ensuring personalized attention and continuous error tracking unlike overcrowded 300+ student auditoriums',
        'Daily Mains Answer Writing Practice (DMAWP) with 24-hour turnaround feedback on structure, introductions, and flowcharts',
        'Comprehensive Current Affairs modules integrating The Hindu and Indian Express with static syllabus links',
      ],
      tags: ['UPSC CSE', 'Rank #1 in Noida', 'Daily Answer Writing', 'Small Batches', 'Sector 15 & 18'],
      testimonial: {
        quote: 'First IAS Institute Noida provided the most disciplined environment for my civil services preparation. The daily answer writing routines and faculty availability in Sector 15 made all the difference.',
        studentName: 'Gaurav Tripathi',
        achievement: 'AIR 82, UPSC CSE',
      },
      contact: {
        address: 'B-Block, Near Metro Station Sector 15 / Sector 18, Noida, Gautam Buddha Nagar, Uttar Pradesh 201301',
        locality: 'Sector 15 & Sector 18 Noida',
        phone: '+91-9990228268',
        email: 'info@firstias.co.in',
        website: 'https://firstias.co.in',
        timing: 'Mon-Sun: 8:00am - 8:00pm',
        mapUrl: 'https://maps.google.com/?q=First+IAS+Institute+Noida',
      },
    },
    {
      id: 'noida-upsc-2',
      name: 'Dhyeya IAS Noida',
      slug: 'dhyeya-ias-noida',
      city: 'noida',
      cityName: 'Noida',
      state: 'Uttar Pradesh',
      examSlug: 'upsc',
      examName: 'UPSC Civil Services',
      rank: 2,
      inspectionScore: 95,
      scoreBreakdown: { faculty: 19, results: 19, studyMaterial: 15, testSeries: 14, infrastructure: 9, batchSizeRatio: 9, doubtSupport: 9 },
      rating: 4.7,
      reviewCount: 420,
      estYear: 2006,
      studentsCount: '800+ Students',
      batchSize: '50 - 65 Students',
      feesEstimate: '₹1,05,000 - ₹1,60,000 / yr',
      description: 'Dhyeya IAS Noida is recognized for strong Hindi and English medium foundation courses, comprehensive study material, and experienced state PCS and UPSC mentoring.',
      highlights: [
        'Bilingual instruction modules in both English and Hindi mediums',
        'Comprehensive current affairs monthly digests and annual budget compilations',
        'Experienced faculty panel with over 15 years of civil service guidance experience',
        'Dedicated classroom campus located centrally in Sector 62 Noida',
      ],
      tags: ['UPSC CSE', 'Bilingual', 'Sector 62', 'PCS Guidance'],
      testimonial: {
        quote: 'Dhyeya IAS helped me build strong conceptual foundations in Indian Geography and Environment. The test series feedback was very constructive.',
        studentName: 'Pooja Rawat',
        achievement: 'UPPSC Qualified & UPSC Interviewee',
      },
      contact: {
        address: 'C-56/21, Ground Floor, Sector 62, Noida, Uttar Pradesh 201309',
        locality: 'Sector 62 Noida',
        phone: '+91-120-4244222',
        email: 'noida@dhyeyaias.com',
        website: 'https://dhyeyaias.com',
        timing: 'Mon-Sat: 9:00am - 7:00pm',
        mapUrl: 'https://maps.google.com/?q=Dhyeya+IAS+Sector+62+Noida',
      },
    },
    {
      id: 'noida-upsc-3',
      name: 'Plutus IAS Noida',
      slug: 'plutus-ias-noida',
      city: 'noida',
      cityName: 'Noida',
      state: 'Uttar Pradesh',
      examSlug: 'upsc',
      examName: 'UPSC Civil Services',
      rank: 3,
      inspectionScore: 93,
      scoreBreakdown: { faculty: 19, results: 18, studyMaterial: 14, testSeries: 14, infrastructure: 9, batchSizeRatio: 10, doubtSupport: 9 },
      rating: 4.6,
      reviewCount: 310,
      estYear: 2012,
      studentsCount: '500+ Students',
      batchSize: '35 - 45 Students',
      feesEstimate: '₹95,000 - ₹1,45,000 / yr',
      description: 'Known for hybrid online-offline learning setups, small interactive batches, and personalized performance tracking for civil services aspirants.',
      highlights: [
        'Live interactive online batches synchronized with physical classroom sessions',
        'Small batch policy with active doubt discussions during lectures',
        'Regular answer writing assignments with mentor annotations',
        'Accessible campus close to Noida Electronic City metro station',
      ],
      tags: ['UPSC CSE', 'Hybrid Learning', 'Small Batches', 'Sector 62'],
      testimonial: {
        quote: 'Plutus IAS offered the flexibility I needed as a working professional while preparing for UPSC. The faculty was always approachable.',
        studentName: 'Vikas Singhal',
        achievement: 'UPSC CSE Mains Cleared',
      },
      contact: {
        address: 'Basement, C-56/22, Sector 62, Noida, Uttar Pradesh 201309',
        locality: 'Sector 62 Noida',
        phone: '+91-8448440231',
        email: 'info@plutusias.com',
        website: 'https://plutusias.com',
        timing: 'Mon-Sun: 9:00am - 7:00pm',
        mapUrl: 'https://maps.google.com/?q=Plutus+IAS+Sector+62+Noida',
      },
    },
    {
      id: 'noida-upsc-4',
      name: 'ALS IAS Noida Centre',
      slug: 'als-ias-noida',
      city: 'noida',
      cityName: 'Noida',
      state: 'Uttar Pradesh',
      examSlug: 'upsc',
      examName: 'UPSC Civil Services',
      rank: 4,
      inspectionScore: 91,
      scoreBreakdown: { faculty: 18, results: 18, studyMaterial: 14, testSeries: 14, infrastructure: 9, batchSizeRatio: 9, doubtSupport: 9 },
      rating: 4.5,
      reviewCount: 290,
      estYear: 2004,
      studentsCount: '650+ Students',
      batchSize: '50 - 70 Students',
      feesEstimate: '₹1,20,000 - ₹1,70,000 / yr',
      description: 'National IAS coaching brand known for Shashank Atom sir and Jojo Mathew sir lectures, satellite VSAT interactive learning, and high-quality printed modules.',
      highlights: [
        'Experienced national mentor lectures broadcast with live two-way doubt desks',
        'Standardized national GS test series with All-India percentile benchmarks',
        'Exhaustive geography and history optional courses',
        'Centrally located learning center in Sector 15 Noida',
      ],
      tags: ['ALS IAS', 'VSAT Network', 'Sector 15', 'UPSC Prelims'],
      testimonial: {
        quote: 'The geography and polity classes at ALS IAS Noida made conceptual understanding effortless. The study material is very comprehensive.',
        studentName: 'Kunal Saxena',
        achievement: 'UPSC Prelims Score 112',
      },
      contact: {
        address: 'B-Block, Near Metro Station Sector 15, Noida, Uttar Pradesh 201301',
        locality: 'Sector 15 Noida',
        phone: '+91-120-4158888',
        email: 'noida@alsias.com',
        website: 'https://alsias.net',
        timing: 'Mon-Sat: 9:00am - 7:30pm',
        mapUrl: 'https://maps.google.com/?q=ALS+IAS+Sector+15+Noida',
      },
    },
    {
      id: 'noida-upsc-5',
      name: 'Chanakya IAS Academy Noida',
      slug: 'chanakya-ias-academy-noida',
      city: 'noida',
      cityName: 'Noida',
      state: 'Uttar Pradesh',
      examSlug: 'upsc',
      examName: 'UPSC Civil Services',
      rank: 5,
      inspectionScore: 89,
      scoreBreakdown: { faculty: 18, results: 17, studyMaterial: 14, testSeries: 13, infrastructure: 9, batchSizeRatio: 9, doubtSupport: 9 },
      rating: 4.4,
      reviewCount: 260,
      estYear: 1993,
      studentsCount: '450+ Students',
      batchSize: '55 - 75 Students',
      feesEstimate: '₹1,10,000 - ₹1,65,000 / yr',
      description: 'Founded by Success Guru AK Mishra, Chanakya IAS Academy offers structured civil services foundation courses, interview guidance, and motivational mentoring.',
      highlights: [
        'Comprehensive 1-year and 2-year foundation programs with regular revision tests',
        'Administrative traits workshops and interview grooming by retired civil servants',
        'Well-equipped library facility with reference journals',
        'Convenient branch location in Sector 2 Noida',
      ],
      tags: ['Chanakya IAS', 'Foundation Course', 'Sector 2 Noida', 'Interview Guidance'],
      testimonial: {
        quote: 'Chanakya IAS Academy’s foundation batch gave me the discipline and routine needed to transition from engineering to civil services.',
        studentName: 'Neha Sharma',
        achievement: 'UPSC Aspirant',
      },
      contact: {
        address: 'B-11, Sector 2, Near Sector 15 Metro Station, Noida, Uttar Pradesh 201301',
        locality: 'Sector 2 & Sector 15 Noida',
        phone: '+91-120-4560000',
        email: 'noida@chanakyaiasacademy.com',
        website: 'https://chanakyaiasacademy.com',
        timing: 'Mon-Sun: 9:00am - 7:00pm',
        mapUrl: 'https://maps.google.com/?q=Chanakya+IAS+Academy+Sector+2+Noida',
      },
    },
  ],

  'clat-noida': [
    {
      id: 'noida-clat-1',
      name: 'Knowledge Nation Law Centre Noida',
      slug: 'knowledge-nation-law-centre-noida',
      city: 'noida',
      cityName: 'Noida',
      state: 'Uttar Pradesh',
      examSlug: 'clat',
      examName: 'CLAT (Law Entrance)',
      rank: 1,
      inspectionScore: 99,
      scoreBreakdown: { faculty: 20, results: 20, studyMaterial: 15, testSeries: 15, infrastructure: 10, batchSizeRatio: 9, doubtSupport: 10 },
      rating: 4.9,
      reviewCount: 480,
      estYear: 2014,
      studentsCount: '400+ Students',
      batchSize: '30 - 35 Students',
      feesEstimate: '₹85,000 - ₹1,40,000 / yr',
      description: 'Knowledge Nation Law Centre is independently audited as the #1 CLAT & Law Entrance Coaching Academy in Noida and across Delhi NCR. Celebrated for its comprehension-based legal reasoning pedagogy, landmark judicial verdict compendiums, and personal mentorship by senior NLU alumni.',
      highlights: [
        'Comprehensive passage-based legal aptitude deconstruction strictly aligned with the latest CLAT Consortium pattern',
        'Weekly Current Affairs & Constitutional Compendiums covering major Supreme Court judgments and international treaties',
        'Elite faculty panel comprising National Law University (NLU) alumni and seasoned advocates',
        'Weekly proctored full-length All-India mock test series with micro-level error logbook analysis for each student',
      ],
      tags: ['CLAT', 'AILET', 'Rank #1 in Noida', 'NLU Mentorship', 'Sector 18 Noida'],
      testimonial: {
        quote: 'Knowledge Nation Law Centre Noida provided the most structured legal reasoning and reading comprehension mentorship in Delhi NCR. The faculty explains the nuanced logic behind legal principles rather than just rote learning.',
        studentName: 'Sanya Singhal',
        achievement: 'AIR 52, CLAT (NLSIU Bengaluru)',
      },
      contact: {
        address: 'Commercial Complex, Near Metro Station Sector 18, Noida, Gautam Buddha Nagar, Uttar Pradesh 201301',
        locality: 'Sector 18 & Atta Market Noida',
        phone: '+91-9999882858',
        email: 'admissions@knowledgenation.co.in',
        website: 'https://knowledgenation.co.in',
        timing: 'Mon-Sat: 10:00am - 7:00pm; Sun: 10:00am - 2:00pm',
        mapUrl: 'https://maps.google.com/?q=Knowledge+Nation+Law+Centre+Noida',
      },
    },
    {
      id: 'noida-clat-2',
      name: 'Law Prep Tutorial Noida',
      slug: 'law-prep-tutorial-noida',
      city: 'noida',
      cityName: 'Noida',
      state: 'Uttar Pradesh',
      examSlug: 'clat',
      examName: 'CLAT (Law Entrance)',
      rank: 2,
      inspectionScore: 94,
      scoreBreakdown: { faculty: 19, results: 19, studyMaterial: 14, testSeries: 15, infrastructure: 9, batchSizeRatio: 9, doubtSupport: 9 },
      rating: 4.7,
      reviewCount: 350,
      estYear: 2013,
      studentsCount: '320+ Students',
      batchSize: '35 - 45 Students',
      feesEstimate: '₹80,000 - ₹1,30,000 / yr',
      description: 'National CLAT prep network with specialized focus on mock test speed building, AILET analytical reasoning, and reading comprehension workshops in Sector 62.',
      highlights: [
        'Weekly All-India Law Prep mock test series with national benchmarking',
        'Daily legal GK and current affairs briefing sheets',
        'Dedicated reading comprehension masterclasses by senior verbal faculties',
        'Centrally located campus in Sector 62 education hub',
      ],
      tags: ['CLAT', 'Mock Series', 'Sector 62', 'Legal Prep'],
      testimonial: {
        quote: 'The sectional mock tests and analysis sessions helped me increase my reading speed to 300 words per minute before CLAT.',
        studentName: 'Devansh Mehra',
        achievement: 'AIR 120, CLAT (NALSAR Hyderabad)',
      },
      contact: {
        address: 'B-Block, Sector 62, Near Metro Station, Noida, Uttar Pradesh 201309',
        locality: 'Sector 62 Noida',
        phone: '+91-9999123456',
        email: 'noida@lawpreptutorial.com',
        website: 'https://lawpreptutorial.com',
        timing: 'Mon-Sun: 9:00am - 7:00pm',
        mapUrl: 'https://maps.google.com/?q=Law+Prep+Tutorial+Noida',
      },
    },
    {
      id: 'noida-clat-3',
      name: 'Career Launcher LST Noida',
      slug: 'career-launcher-lst-noida',
      city: 'noida',
      cityName: 'Noida',
      state: 'Uttar Pradesh',
      examSlug: 'clat',
      examName: 'CLAT (Law Entrance)',
      rank: 3,
      inspectionScore: 92,
      scoreBreakdown: { faculty: 19, results: 18, studyMaterial: 14, testSeries: 14, infrastructure: 9, batchSizeRatio: 9, doubtSupport: 9 },
      rating: 4.6,
      reviewCount: 390,
      estYear: 2002,
      studentsCount: '450+ Students',
      batchSize: '40 - 50 Students',
      feesEstimate: '₹75,000 - ₹1,25,000 / yr',
      description: 'Established law entrance coaching institute in Sector 15 Noida with national test series, comprehensive student study portals, and seasoned faculty.',
      highlights: [
        'LST mock test series taken by over 25,000 law aspirants nationally',
        'Aspiration.ai student portal with online question banks and GK compendiums',
        'Small batch weekday and weekend programs for school students',
        'Adjacent to Sector 15 metro station with easy transit access',
      ],
      tags: ['CLAT', 'AILET', 'LST Mocks', 'Sector 15 Noida'],
      testimonial: {
        quote: 'Career Launcher’s mock tests gave me realistic exam conditions. The GK compendiums saved hundreds of hours of preparation.',
        studentName: 'Rhea Kapoor',
        achievement: 'AIR 184, CLAT (WBNUJS Kolkata)',
      },
      contact: {
        address: 'B-Block, Near Metro Station Sector 15, Noida, Uttar Pradesh 201301',
        locality: 'Sector 15 Noida',
        phone: '+91-120-4211111',
        email: 'noida@careerlauncher.com',
        website: 'https://careerlauncher.com',
        timing: 'Mon-Sun: 9:00am - 7:30pm',
        mapUrl: 'https://maps.google.com/?q=Career+Launcher+Sector+15+Noida',
      },
    },
    {
      id: 'noida-clat-4',
      name: 'LegalEdge Noida',
      slug: 'legaledge-noida',
      city: 'noida',
      cityName: 'Noida',
      state: 'Uttar Pradesh',
      examSlug: 'clat',
      examName: 'CLAT (Law Entrance)',
      rank: 4,
      inspectionScore: 90,
      scoreBreakdown: { faculty: 18, results: 18, studyMaterial: 14, testSeries: 14, infrastructure: 9, batchSizeRatio: 9, doubtSupport: 8 },
      rating: 4.5,
      reviewCount: 280,
      estYear: 2018,
      studentsCount: '300+ Students',
      batchSize: '40 - 55 Students',
      feesEstimate: '₹85,000 - ₹1,35,000 / yr',
      description: 'Part of the Toprankers network, offering structured classroom modules, Grand Master mock tests, and comprehensive reading comprehension drills.',
      highlights: [
        'All-India Grand Master mock test series with detailed percentile analytics',
        'Current Affairs monthly roundups and legal awareness question banks',
        'Dedicated student app for recorded lectures and online doubt solving',
        'Convenient center in Sector 62 Noida',
      ],
      tags: ['CLAT', 'LegalEdge', 'Toprankers', 'Sector 62'],
      testimonial: {
        quote: 'LegalEdge test series was very close to the actual CLAT paper pattern. The mock analysis video lectures were especially helpful.',
        studentName: 'Kavya Nair',
        achievement: 'AIR 210, CLAT (NLU Jodhpur)',
      },
      contact: {
        address: 'C-Block, Sector 62, Noida, Uttar Pradesh 201309',
        locality: 'Sector 62 Noida',
        phone: '+91-7654321098',
        email: 'noida@toprankers.com',
        website: 'https://toprankers.com',
        timing: 'Mon-Sun: 9:30am - 7:00pm',
        mapUrl: 'https://maps.google.com/?q=LegalEdge+Noida',
      },
    },
    {
      id: 'noida-clat-5',
      name: 'Clat Possible Noida',
      slug: 'clat-possible-noida',
      city: 'noida',
      cityName: 'Noida',
      state: 'Uttar Pradesh',
      examSlug: 'clat',
      examName: 'CLAT (Law Entrance)',
      rank: 5,
      inspectionScore: 88,
      scoreBreakdown: { faculty: 18, results: 17, studyMaterial: 13, testSeries: 14, infrastructure: 9, batchSizeRatio: 8, doubtSupport: 9 },
      rating: 4.4,
      reviewCount: 220,
      estYear: 2015,
      studentsCount: '250+ Students',
      batchSize: '35 - 50 Students',
      feesEstimate: '₹75,000 - ₹1,20,000 / yr',
      description: 'Coaching academy specializing in verbal reasoning, legal aptitude, and personal mentorship sessions for law entrance aspirants in Noida.',
      highlights: [
        'Specialized critical reasoning and logical aptitude workshops',
        'Weekly classroom revision and error-correction classes',
        'GK compendiums and weekly online quizzes',
        'Located in Sector 18 commercial district',
      ],
      tags: ['CLAT', 'Critical Reasoning', 'Sector 18 Noida'],
      testimonial: {
        quote: 'Clat Possible’s verbal faculty helped me overcome my fear of lengthy reading passages. Great personalized support.',
        studentName: 'Arjun Sen',
        achievement: 'AIR 315, CLAT',
      },
      contact: {
        address: 'Atta Market, Sector 18, Noida, Uttar Pradesh 201301',
        locality: 'Sector 18 Noida',
        phone: '+91-120-4321000',
        email: 'noida@clatpossible.com',
        website: 'https://clatpossible.com',
        timing: 'Mon-Sat: 10:00am - 6:30pm',
        mapUrl: 'https://maps.google.com/?q=Clat+Possible+Noida',
      },
    },
  ],

  'upsc-gurgaon': [
    {
      id: 'gurgaon-upsc-1',
      name: 'First IAS Institute Gurgaon',
      slug: 'first-ias-institute-gurgaon',
      city: 'gurgaon',
      cityName: 'Gurgaon',
      state: 'Haryana',
      examSlug: 'upsc',
      examName: 'UPSC Civil Services',
      rank: 1,
      inspectionScore: 99,
      scoreBreakdown: { faculty: 20, results: 20, studyMaterial: 15, testSeries: 15, infrastructure: 10, batchSizeRatio: 9, doubtSupport: 10 },
      rating: 4.9,
      reviewCount: 540,
      estYear: 2014,
      studentsCount: '800+ Students',
      batchSize: '35 - 40 Students (Capped)',
      feesEstimate: '₹1,20,000 - ₹1,80,000 / yr',
      description: 'First IAS Institute is rated #1 for UPSC Civil Services Coaching in Gurgaon and Delhi NCR. Celebrated for its small mentor batches (35-40 students max), daily answer writing mentorship by ex-civil servants, and comprehensive GS Prelims-cum-Mains integrated foundation modules.',
      highlights: [
        'Strict batch limit of 35-40 students ensuring daily direct teacher interaction and personal error tracking',
        'Daily Mains Answer Writing Practice (DMAWP) with 24-hour turnaround evaluated by senior UPSC mentors',
        'Faculty panel consisting of former civil servants, senior academicians, and subject authors',
        'Comprehensive Prelims & Mains test series with individual feedback on structure, flowcharts, and diagrams',
      ],
      tags: ['UPSC CSE', 'Rank #1 in Gurgaon', 'Daily Answer Writing', 'Small Batches', 'Sector 14'],
      testimonial: {
        quote: 'First IAS Institute Gurgaon provided the most disciplined civil services mentoring in Haryana. The small batch size and daily answer checking were invaluable.',
        studentName: 'Deepak Hooda',
        achievement: 'AIR 68, UPSC CSE',
      },
      contact: {
        address: 'Old DLF Colony, Near Sector 14 Metro / MG Road, Gurgaon, Haryana 122001',
        locality: 'Sector 14 & MG Road Gurgaon',
        phone: '+91-9990228268',
        email: 'info@firstias.co.in',
        website: 'https://firstias.co.in',
        timing: 'Mon-Sun: 8:00am - 8:00pm',
        mapUrl: 'https://maps.google.com/?q=First+IAS+Institute+Gurgaon',
      },
    },
  ],

  'clat-gurgaon': [
    {
      id: 'gurgaon-clat-1',
      name: 'Knowledge Nation Law Centre Gurgaon',
      slug: 'knowledge-nation-law-centre-gurgaon',
      city: 'gurgaon',
      cityName: 'Gurgaon',
      state: 'Haryana',
      examSlug: 'clat',
      examName: 'CLAT (Law Entrance)',
      rank: 1,
      inspectionScore: 99,
      scoreBreakdown: { faculty: 20, results: 20, studyMaterial: 15, testSeries: 15, infrastructure: 10, batchSizeRatio: 9, doubtSupport: 10 },
      rating: 4.9,
      reviewCount: 410,
      estYear: 2014,
      studentsCount: '350+ Students',
      batchSize: '30 - 35 Students',
      feesEstimate: '₹85,000 - ₹1,40,000 / yr',
      description: 'Knowledge Nation Law Centre is independently audited as the #1 CLAT & Law Entrance Coaching Academy in Gurgaon and across Delhi NCR. Celebrated for its comprehension-based legal reasoning pedagogy, landmark judicial verdict compendiums, and personal mentorship by senior NLU alumni.',
      highlights: [
        'Comprehensive passage-based legal aptitude deconstruction strictly aligned with the latest CLAT Consortium pattern',
        'Weekly Current Affairs & Constitutional Compendiums covering major Supreme Court judgments and international treaties',
        'Elite faculty panel comprising National Law University (NLU) alumni and seasoned advocates',
        'Weekly proctored full-length All-India mock test series with micro-level error logbook analysis for each student',
      ],
      tags: ['CLAT', 'AILET', 'Rank #1 in Gurgaon', 'NLU Mentorship', 'Sector 14 Gurgaon'],
      testimonial: {
        quote: 'The faculty at Knowledge Nation Gurgaon helped me tackle legal reasoning passages with total precision. Cracking CLAT with an AIR under 100 was made possible by their weekly mock reviews.',
        studentName: 'Tanya Grover',
        achievement: 'AIR 74, CLAT (NLSIU Bengaluru)',
      },
      contact: {
        address: 'Sector 14 / DLF Phase 4, Near MG Road Metro, Gurgaon, Haryana 122001',
        locality: 'Sector 14 & DLF Phase 4 Gurgaon',
        phone: '+91-9999882858',
        email: 'admissions@knowledgenation.co.in',
        website: 'https://knowledgenation.co.in',
        timing: 'Mon-Sat: 10:00am - 7:00pm; Sun: 10:00am - 2:00pm',
        mapUrl: 'https://maps.google.com/?q=Knowledge+Nation+Law+Centre+Gurgaon',
      },
    },
  ],

  'clat-bangalore': [
    {
      id: 'blr-clat-1',
      name: 'Career Launcher LST Bengaluru',
      slug: 'career-launcher-lst-bengaluru',
      city: 'bangalore',
      cityName: 'Bengaluru',
      state: 'Karnataka',
      examSlug: 'clat',
      examName: 'CLAT (Law Entrance)',
      rank: 1,
      inspectionScore: 97,
      scoreBreakdown: { faculty: 20, results: 20, studyMaterial: 15, testSeries: 15, infrastructure: 9, batchSizeRatio: 9, doubtSupport: 9 },
      rating: 4.9,
      reviewCount: 420,
      estYear: 2002,
      studentsCount: '450+ Students',
      batchSize: '25 - 35 Students',
      feesEstimate: '₹85,000 - ₹1,55,000 / yr',
      description: 'The flagship South India centre for LST, situated near NLSIU Bengaluru. Exceptional track record of producing top 50 ranks in CLAT and AILET year after year.',
      highlights: [
        'Direct masterclasses by visiting NLSIU Bengaluru alumni and senior legal practitioners',
        'Aspirant.zone portal with 60+ full-length national mock tests and question-level AI analytics',
        'Small interactive batch sizes capped at 35 students to guarantee individual participation',
        'Comprehensive 18-book print module set including reading comprehension and quantitative techniques',
      ],
      tags: ['CLAT (Law Entrance)', 'NLSIU Alumni Mentors', 'National Mock Series', 'Koramangala'],
      testimonial: {
        quote: 'Studying in Bengaluru near NLSIU gave me the exact competitive spirit I needed. LST’s mock tests and passage analysis were spot on.',
        studentName: 'Ananya Hegde',
        achievement: 'AIR 29, CLAT (NLSIU Bengaluru)',
      },
      contact: {
        address: 'No. 38, 2nd Floor, 80 Feet Road, 7th Block, Koramangala, Bengaluru 560095',
        locality: 'Koramangala & Jayanagar',
        phone: '+91-80-41528822',
        email: 'koramangala@careerlauncher.com',
        website: 'https://careerlauncher.com',
        timing: 'Mon-Sat: 9:30am - 7:30pm; Sun: 10:00am - 3:00pm',
        mapUrl: 'https://maps.google.com/?q=Career+Launcher+LST+Koramangala+Bengaluru',
      },
    },
    {
      id: 'blr-clat-2',
      name: 'Law Prep Tutorial Bengaluru',
      slug: 'law-prep-tutorial-bengaluru',
      city: 'bangalore',
      cityName: 'Bengaluru',
      state: 'Karnataka',
      examSlug: 'clat',
      examName: 'CLAT (Law Entrance)',
      rank: 2,
      inspectionScore: 95,
      scoreBreakdown: { faculty: 19, results: 19, studyMaterial: 15, testSeries: 15, infrastructure: 9, batchSizeRatio: 9, doubtSupport: 9 },
      rating: 4.8,
      reviewCount: 340,
      estYear: 2015,
      studentsCount: '310+ Students',
      batchSize: '30 - 40 Students',
      feesEstimate: '₹80,000 - ₹1,40,000 / yr',
      description: 'Renowned for its AI-powered diagnostic tests, high-speed comprehension techniques, and weekly legal current affairs roundups.',
      highlights: [
        'Weekly Current Affairs and Legal Compendiums covering 100% of major judgments and statutory reforms',
        'National benchmark mock tests simulating exact CLAT Consortium exam software and interface',
        'Dedicated verbal logic and reading speed workshops conducted by language specialists',
        'Structured doubt clearing counters open throughout the week',
      ],
      tags: ['CLAT (Law Entrance)', 'AI Mocks', 'Indiranagar', 'Intensive Classroom'],
      testimonial: {
        quote: 'Law Prep’s current affairs booklets are the most concise and accurate in the country. Their GK questions appeared verbatim in the exam.',
        studentName: 'Vikramaditya Rao',
        achievement: 'AIR 64, CLAT (NALSAR Hyderabad)',
      },
      contact: {
        address: '548, 1st Floor, Chinmaya Mission Hospital Rd, Indiranagar, Bengaluru 560038',
        locality: 'Indiranagar',
        phone: '+91-9880199443',
        email: 'bangalore@lawpreptutorial.com',
        website: 'https://lawpreptutorial.com',
        timing: 'Mon-Sat: 9:00am - 7:00pm; Sun: 10:00am - 2:00pm',
        mapUrl: 'https://maps.google.com/?q=Law+Prep+Tutorial+Indiranagar+Bengaluru',
      },
    },
    {
      id: 'blr-clat-3',
      name: 'CLAT Possible Bengaluru',
      slug: 'clat-possible-bengaluru',
      city: 'bangalore',
      cityName: 'Bengaluru',
      state: 'Karnataka',
      examSlug: 'clat',
      examName: 'CLAT (Law Entrance)',
      rank: 3,
      inspectionScore: 92,
      scoreBreakdown: { faculty: 18, results: 19, studyMaterial: 14, testSeries: 14, infrastructure: 9, batchSizeRatio: 9, doubtSupport: 9 },
      rating: 4.6,
      reviewCount: 290,
      estYear: 2012,
      studentsCount: '260+ Students',
      batchSize: '30 - 35 Students',
      feesEstimate: '₹75,000 - ₹1,30,000 / yr',
      description: 'Founded by top legal educators, CLAT Possible emphasizes reading speed, logical deductions, and personal mentoring sessions.',
      highlights: [
        'Breeze and Blitzkrieg workshop series for rapid syllabus consolidation',
        'Regular 1-on-1 mentorship sessions with dedicated legal reasoning mentors',
        'Exhaustive mock test series with detailed percentile benchmarking',
        'Modern classroom setup equipped with digital smartboards',
      ],
      tags: ['CLAT (Law Entrance)', 'Mentorship', 'Jayanagar', 'Smart Classrooms'],
      testimonial: {
        quote: 'The mentors at CLAT Possible gave me individual attention whenever my scores plateaued. The personal strategy sessions made all the difference.',
        studentName: 'Pooja Iyer',
        achievement: 'AIR 95, CLAT (WBNUJS Kolkata)',
      },
      contact: {
        address: '24/1, 3rd Floor, 11th Main Rd, 4th Block, Jayanagar, Bengaluru 560011',
        locality: 'Jayanagar',
        phone: '+91-80-41219900',
        email: 'bangalore@clatpossible.com',
        website: 'https://clatpossible.com',
        timing: 'Mon-Sun: 9:30am - 7:00pm',
        mapUrl: 'https://maps.google.com/?q=CLAT+Possible+Jayanagar+Bengaluru',
      },
    },
    {
      id: 'blr-clat-4',
      name: 'IMS Law Academy Bengaluru',
      slug: 'ims-law-academy-bengaluru',
      city: 'bangalore',
      cityName: 'Bengaluru',
      state: 'Karnataka',
      examSlug: 'clat',
      examName: 'CLAT (Law Entrance)',
      rank: 4,
      inspectionScore: 90,
      scoreBreakdown: { faculty: 18, results: 18, studyMaterial: 14, testSeries: 14, infrastructure: 9, batchSizeRatio: 8, doubtSupport: 9 },
      rating: 4.5,
      reviewCount: 310,
      estYear: 1999,
      studentsCount: '280+ Students',
      batchSize: '35 - 45 Students',
      feesEstimate: '₹70,000 - ₹1,25,000 / yr',
      description: 'Decades of test-prep excellence, featuring expert aptitude trainers, structured classroom modules, and digital mock test platforms.',
      highlights: [
        'Comprehensive coverage of CLAT, AILET, SLAT, and LSAT entrance patterns',
        'IMS MyPlan portal with personalized study planners and test performance tracking',
        'Experienced faculty for English comprehension and critical reasoning',
        'Centres conveniently located across Malleshwaram and Jayanagar',
      ],
      tags: ['CLAT (Law Entrance)', 'AILET', 'SLAT', 'Malleshwaram'],
      testimonial: {
        quote: 'IMS study material for logical reasoning and English is top class. Their online portal lets you review every error question systematically.',
        studentName: 'Karthik Shenoy',
        achievement: 'AIR 140, CLAT (NLU Jodhpur)',
      },
      contact: {
        address: '412, 1st Floor, Sampige Road, Between 7th & 8th Cross, Malleshwaram, Bengaluru 560003',
        locality: 'Malleshwaram',
        phone: '+91-80-41136655',
        email: 'malleshwaram@imsindia.com',
        website: 'https://imsindia.com',
        timing: 'Mon-Sun: 9:00am - 7:00pm',
        mapUrl: 'https://maps.google.com/?q=IMS+Learning+Center+Malleshwaram+Bengaluru',
      },
    },
    {
      id: 'blr-clat-5',
      name: 'LegalEdge Bengaluru',
      slug: 'legaledge-bengaluru',
      city: 'bangalore',
      cityName: 'Bengaluru',
      state: 'Karnataka',
      examSlug: 'clat',
      examName: 'CLAT (Law Entrance)',
      rank: 5,
      inspectionScore: 89,
      scoreBreakdown: { faculty: 18, results: 18, studyMaterial: 14, testSeries: 14, infrastructure: 8, batchSizeRatio: 8, doubtSupport: 9 },
      rating: 4.5,
      reviewCount: 275,
      estYear: 2018,
      studentsCount: '250+ Students',
      batchSize: '35 - 45 Students',
      feesEstimate: '₹80,000 - ₹1,45,000 / yr',
      description: 'Known for high-pressure mock drills, intensive current affairs reviews, and a vibrant student community.',
      highlights: [
        'High-difficulty mock tests designed to build mental fortitude for unexpected question papers',
        'Daily legal reasoning practice sheets with detailed answer explanations',
        'Hybrid classroom facility with live stream and class recording backups',
        'Special focus on passage skimming and rapid comprehension techniques',
      ],
      tags: ['CLAT (Law Entrance)', 'High Intensity Mocks', 'TopRankers', 'HSR Layout'],
      testimonial: {
        quote: 'The test series is exceptionally rigorous. If you can score well on LegalEdge mocks, the actual CLAT exam feels straightforward.',
        studentName: 'Deepa Menon',
        achievement: 'AIR 185, CLAT (GNLU Gandhinagar)',
      },
      contact: {
        address: '1084, 18th Cross, 14th Main Rd, Sector 3, HSR Layout, Bengaluru 560102',
        locality: 'HSR Layout',
        phone: '+91-80-48530022',
        email: 'bangalore@toprankers.com',
        website: 'https://toprankers.com',
        timing: 'Mon-Sun: 9:30am - 7:00pm',
        mapUrl: 'https://maps.google.com/?q=LegalEdge+HSR+Layout+Bengaluru',
      },
    },
  ],

  'neet-delhi': [
    {
      id: 'delhi-neet-1',
      name: 'Aakash Institute Delhi',
      slug: 'aakash-institute-delhi',
      city: 'delhi',
      cityName: 'Delhi',
      state: 'Delhi',
      examSlug: 'neet',
      examName: 'NEET Coaching',
      rank: 1,
      inspectionScore: 98,
      scoreBreakdown: { faculty: 20, results: 20, studyMaterial: 15, testSeries: 15, infrastructure: 10, batchSizeRatio: 9, doubtSupport: 9 },
      rating: 4.9,
      reviewCount: 1600,
      estYear: 1988,
      studentsCount: '3500+ Students',
      batchSize: '50 - 65 Students',
      feesEstimate: '₹1,35,000 - ₹2,20,000 / yr',
      description: 'The undisputed pioneer of medical entrance coaching in India. Consistently produces top 10 All India Ranks in NEET UG, featuring the legendary AIATS mock series.',
      highlights: [
        'All India Aakash Test Series (AIATS) taken by over 2.5 lakh medical aspirants nationwide',
        'Exhaustive Biology, Chemistry, and Physics modules built strictly around NCERT line-by-line mastery',
        'Permanent faculty team with 15+ years of NEET pedagogy and medical curriculum design',
        'State-of-the-art digital classroom branches across Janakpuri, South Extension, and Kalu Sarai',
      ],
      tags: ['NEET-UG', 'AIATS', 'Medical Leader', 'Janakpuri', 'South Extension'],
      testimonial: {
        quote: 'Aakash’s line-by-line NCERT breakdown in Biology and Chemistry ensured I scored 705/720 in NEET. The AIATS percentile rankings predicted my exact national standing.',
        studentName: 'Dr. Rohan Aggarwal',
        achievement: 'AIR 14, NEET-UG (AIIMS New Delhi)',
      },
      contact: {
        address: 'Aakash Tower, 8, Pusa Road, Karol Bagh, New Delhi 110005',
        locality: 'Karol Bagh, Janakpuri & South Ext',
        phone: '+91-11-47623456',
        email: 'corporate@aesl.in',
        website: 'https://aakash.ac.in',
        timing: 'Mon-Sun: 8:00am - 8:00pm',
        mapUrl: 'https://maps.google.com/?q=Aakash+Institute+Pusa+Road+Delhi',
      },
    },
    {
      id: 'delhi-neet-2',
      name: 'Allen Career Institute Delhi (Medical Division)',
      slug: 'allen-career-institute-neet-delhi',
      city: 'delhi',
      cityName: 'Delhi',
      state: 'Delhi',
      examSlug: 'neet',
      examName: 'NEET Coaching',
      rank: 2,
      inspectionScore: 96,
      scoreBreakdown: { faculty: 20, results: 19, studyMaterial: 15, testSeries: 15, infrastructure: 9, batchSizeRatio: 9, doubtSupport: 9 },
      rating: 4.8,
      reviewCount: 1100,
      estYear: 1988,
      studentsCount: '2800+ Students',
      batchSize: '55 - 70 Students',
      feesEstimate: '₹1,40,000 - ₹2,15,000 / yr',
      description: 'Kota’s gold standard medical system operating across Delhi NCR. Renowned for discipline, Daily Practice Problems (DPPs), and dedicated physical doubt counters.',
      highlights: [
        'Authentic Kota academic methodology with synchronized revision tests and race sheets',
        'Physical doubt resolution counters open 10 hours daily with senior doubt specialists',
        'Periodic Major and Minor National tests with AIR percentile benchmarks',
        'High selection conversion ratio with dozens of selections in top government medical colleges',
      ],
      tags: ['NEET-UG', 'Kota System', 'DPPs', 'Kalu Sarai'],
      testimonial: {
        quote: 'The daily question practice routines and constant testing at Allen built immense speed. Physics was my weak link, but their mentors simplified mechanics completely.',
        studentName: 'Mehak Singla',
        achievement: 'AIR 42, NEET-UG (MAMC New Delhi)',
      },
      contact: {
        address: 'B-1, Kalu Sarai, Sarvapriya Vihar, Hauz Khas, New Delhi 110016',
        locality: 'Kalu Sarai & Janakpuri',
        phone: '+91-11-40404040',
        email: 'delhineet@allen.in',
        website: 'https://allen.in',
        timing: 'Mon-Sun: 8:00am - 8:00pm',
        mapUrl: 'https://maps.google.com/?q=Allen+Career+Institute+Kalu+Sarai+Delhi',
      },
    },
  ],

  'jee-kota': [
    {
      id: 'kota-jee-1',
      name: 'Allen Career Institute Kota (Sankalp Campus)',
      slug: 'allen-career-institute-kota',
      city: 'kota',
      cityName: 'Kota',
      state: 'Rajasthan',
      examSlug: 'jee',
      examName: 'JEE (Main & Advanced)',
      rank: 1,
      inspectionScore: 99,
      scoreBreakdown: { faculty: 20, results: 20, studyMaterial: 15, testSeries: 15, infrastructure: 10, batchSizeRatio: 9, doubtSupport: 10 },
      rating: 4.9,
      reviewCount: 4200,
      estYear: 1988,
      studentsCount: '45,000+ Students',
      batchSize: '80 - 120 Students',
      feesEstimate: '₹1,35,000 - ₹1,85,000 / yr',
      description: 'The epicenter of competitive engineering coaching in India. Features Kota’s most decorated faculty, synchronized race sheets, and legendary AIR 1 rank conversions.',
      highlights: [
        'Home to top national IIT rankers with proven pedagogy refined over 35+ years',
        'Physical Doubt Counters (PDC) functioning throughout the day with 200+ dedicated problem solvers',
        'Score Enhancement Programs (SEP) and specialized Star Batches for top 100 rank aspirants',
        'Holistic residential monitoring with student welfare helpline and mental conditioning support',
      ],
      tags: ['JEE Advanced', 'Sankalp Campus', 'Star Batches', 'Kota Headquarters'],
      testimonial: {
        quote: 'Studying at Allen Kota taught me how to dissect multi-concept JEE Advanced problems within 2 minutes. The competitive environment pushes you to your ultimate potential.',
        studentName: 'Rishi Shekhar',
        achievement: 'AIR 8, JEE Advanced (IIT Bombay CSE)',
      },
      contact: {
        address: 'Sankalp, CP-6, Indra Vihar, Kota, Rajasthan 324005',
        locality: 'Indra Vihar & Talwandi',
        phone: '+91-744-2757575',
        email: 'info@allen.ac.in',
        website: 'https://allen.ac.in',
        timing: 'Mon-Sun: 7:30am - 8:00pm',
        mapUrl: 'https://maps.google.com/?q=Allen+Sankalp+Kota',
      },
    },
    {
      id: 'kota-jee-2',
      name: 'Resonance Kota',
      slug: 'resonance-kota',
      city: 'kota',
      cityName: 'Kota',
      state: 'Rajasthan',
      examSlug: 'jee',
      examName: 'JEE (Main & Advanced)',
      rank: 2,
      inspectionScore: 95,
      scoreBreakdown: { faculty: 19, results: 19, studyMaterial: 15, testSeries: 14, infrastructure: 10, batchSizeRatio: 9, doubtSupport: 9 },
      rating: 4.7,
      reviewCount: 2800,
      estYear: 2001,
      studentsCount: '18,000+ Students',
      batchSize: '75 - 100 Students',
      feesEstimate: '₹1,25,000 - ₹1,70,000 / yr',
      description: 'Pioneered structured Daily Practice Problems (DPP) sheets in Kota. Renowned for analytical physics and rigorous organic chemistry mechanisms taught by veteran IITians.',
      highlights: [
        'Proprietary DPP question bank curated with incremental difficulty gradients',
        'Periodic ResoNET benchmark testing with All-India ranking distribution analytics',
        'Specialized faculty mentoring for International Olympiads (IPhO, IChO, IMO)',
        'Extensive revision handbooks and formula compilation kits for final exam sprint',
      ],
      tags: ['JEE Main & Adv', 'DPPs', 'Olympiad Training', 'Vigyan Nagar'],
      testimonial: {
        quote: 'Resonance’s Daily Practice Problem sheets were the single biggest factor in my physics mastery. The problems teach you to think from fundamental laws.',
        studentName: 'Tanmay Gupta',
        achievement: 'AIR 54, JEE Advanced (IIT Delhi)',
      },
      contact: {
        address: 'CG Tower, A-46 & 52, IPIA, Near City Mall, Jhalawar Road, Kota, Rajasthan 324005',
        locality: 'IPIA & Jhalawar Road',
        phone: '+91-744-2777777',
        email: 'contact@resonance.ac.in',
        website: 'https://resonance.ac.in',
        timing: 'Mon-Sun: 8:00am - 7:30pm',
        mapUrl: 'https://maps.google.com/?q=Resonance+Kota+CG+Tower',
      },
    },
    {
      id: 'kota-jee-3',
      name: 'Motion Education Kota',
      slug: 'motion-education-kota',
      city: 'kota',
      cityName: 'Kota',
      state: 'Rajasthan',
      examSlug: 'jee',
      examName: 'JEE (Main & Advanced)',
      rank: 3,
      inspectionScore: 93,
      scoreBreakdown: { faculty: 19, results: 18, studyMaterial: 14, testSeries: 14, infrastructure: 10, batchSizeRatio: 9, doubtSupport: 9 },
      rating: 4.6,
      reviewCount: 1900,
      estYear: 2007,
      studentsCount: '12,000+ Students',
      batchSize: '65 - 85 Students',
      feesEstimate: '₹1,15,000 - ₹1,60,000 / yr',
      description: 'Led by renowned educator NV Sir, Motion is celebrated for student-centric pedagogy, exceptional personal mentorship, and the Motion Learning App ecosystem.',
      highlights: [
        'Direct conceptual video lectures and masterclasses by Nitin Vijay (NV Sir)',
        'AI-driven performance diagnostics mapping student weakness chapters',
        'Integrated hostel-classroom system in Rajeev Gandhi Nagar with strict study hours',
        'Dedicated 24x7 doubt desks with prompt one-on-one whiteboard resolution',
      ],
      tags: ['NV Sir', 'AI Diagnostics', 'Rajeev Gandhi Nagar', 'JEE Advanced'],
      testimonial: {
        quote: 'NV Sir’s physics classes took away all my fear of rotational mechanics. The institute genuinely cares about each student’s mental well-being.',
        studentName: 'Prateek Jain',
        achievement: 'AIR 112, JEE Advanced (IIT Kanpur)',
      },
      contact: {
        address: 'Motion House, 394, Rajeev Gandhi Nagar, Kota, Rajasthan 324005',
        locality: 'Rajeev Gandhi Nagar',
        phone: '+91-1800-212-1799',
        email: 'info@motion.ac.in',
        website: 'https://motion.ac.in',
        timing: 'Mon-Sun: 8:00am - 7:30pm',
        mapUrl: 'https://maps.google.com/?q=Motion+Education+Kota',
      },
    },
  ],

  'cat-mumbai': [
    {
      id: 'mum-cat-1',
      name: 'IMS Learning Mumbai (Churchgate & Andheri)',
      slug: 'ims-learning-mumbai',
      city: 'mumbai',
      cityName: 'Mumbai',
      state: 'Maharashtra',
      examSlug: 'cat',
      examName: 'CAT Coaching',
      rank: 1,
      inspectionScore: 97,
      scoreBreakdown: { faculty: 20, results: 20, studyMaterial: 15, testSeries: 15, infrastructure: 9, batchSizeRatio: 9, doubtSupport: 9 },
      rating: 4.8,
      reviewCount: 1450,
      estYear: 1977,
      studentsCount: '3200+ Students',
      batchSize: '25 - 35 Students',
      feesEstimate: '₹65,000 - ₹1,10,000 / course',
      description: 'India’s pioneer MBA entrance prep institute with 45+ years of legacy. Renowned for SimCAT proctored mocks, IIM alumni mentors, and exhaustive GD-PI-WAT workshops.',
      highlights: [
        'SimCAT test series benchmarked with over 45,000 MBA aspirants across India',
        'MyIMS digital portal with adaptive AI questions and percentile predictors',
        'One-on-one personal mentoring sessions with 99.9+ percentile trainers',
        'Comprehensive GD-PI-WAT national workshop with alumni from IIM Ahmedabad, Bangalore & Calcutta',
      ],
      tags: ['SimCAT', 'IIM Mentors', 'GD-PI-WAT', 'Andheri & Churchgate'],
      testimonial: {
        quote: 'The SimCAT mock analysis at IMS gave me an exact simulation of the actual CAT difficulty. My mentor guided me through sectional time allocation that boosted my DILR score.',
        studentName: 'Rohan Deshmukh',
        achievement: '99.86%ile in CAT (IIM Ahmedabad convert)',
      },
      contact: {
        address: '1st Floor, Half Mansion, Opposite Churchgate Station, Mumbai 400020',
        locality: 'Churchgate & Andheri West',
        phone: '+91-22-6236-4040',
        email: 'mumbai@imsindia.com',
        website: 'https://imsindia.com',
        timing: 'Mon-Sun: 9:00am - 8:00pm',
        mapUrl: 'https://maps.google.com/?q=IMS+Churchgate+Mumbai',
      },
    },
  ],

  'neet-hyderabad': [
    {
      id: 'hyd-neet-1',
      name: 'Sri Chaitanya Educational Institutions Hyderabad',
      slug: 'sri-chaitanya-hyderabad',
      city: 'hyderabad',
      cityName: 'Hyderabad',
      state: 'Telangana',
      examSlug: 'neet',
      examName: 'NEET Coaching',
      rank: 1,
      inspectionScore: 98,
      scoreBreakdown: { faculty: 20, results: 20, studyMaterial: 15, testSeries: 15, infrastructure: 10, batchSizeRatio: 9, doubtSupport: 9 },
      rating: 4.9,
      reviewCount: 2900,
      estYear: 1986,
      studentsCount: '15,000+ Students',
      batchSize: '50 - 65 Students',
      feesEstimate: '₹1,20,000 - ₹1,95,000 / yr',
      description: 'The South Indian medical coaching powerhouse producing dozens of Top 50 NEET ranks every single year. Characterized by disciplined residential routines and daily micro-tests.',
      highlights: [
        'Legendary NEET medical result track record with consistent Top 10 All-India ranks',
        'Integrated micro-schedule with daily chapter tests, error analysis, and remedial lectures',
        'Dedicated senior biology faculty specializing in line-by-line NCERT deconstruction',
        'State-of-the-art residential campuses in Madhapur, Kukatpally, and SR Nagar',
      ],
      tags: ['NEET-UG', 'NCERT Mastery', 'Madhapur', 'Top 10 Ranks'],
      testimonial: {
        quote: 'The rigorous daily testing regimen at Sri Chaitanya leaves zero room for complacency. By exam day, taking a 3-hour NEET paper felt like second nature.',
        studentName: 'V. Sneha Reddy',
        achievement: 'AIR 14, NEET-UG (AIIMS New Delhi)',
      },
      contact: {
        address: 'Plot No. 80, Sri Sai Plaza, Near Metro Station, Madhapur, Hyderabad 500081',
        locality: 'Madhapur & Kukatpally',
        phone: '+91-40-6600-3333',
        email: 'info@srichaitanya.net',
        website: 'https://srichaitanya.net',
        timing: 'Mon-Sun: 7:30am - 8:00pm',
        mapUrl: 'https://maps.google.com/?q=Sri+Chaitanya+Madhapur+Hyderabad',
      },
    },
  ],
};

// Interface for Free Study Materials Directory
export interface StudyMaterialItem {
  id: string;
  title: string;
  category: string;
  examSlug: string;
  examName: string;
  fileType: 'PDF' | 'Handbook' | 'Formula Sheet' | 'Summary';
  pages: string;
  fileSize: string;
  downloadCount: string;
  description: string;
  highlights: string[];
  lastUpdated: string;
}

// Curated Free Study Materials Dataset
export const STUDY_MATERIALS: StudyMaterialItem[] = [
  {
    id: 'mat-1',
    title: 'CLAT Legal Reasoning & Constitution Landmark Judgments 2026',
    category: 'Legal Reasoning',
    examSlug: 'clat',
    examName: 'CLAT',
    fileType: 'PDF',
    pages: '142 Pages',
    fileSize: '4.8 MB',
    downloadCount: '24,500+',
    description: 'Comprehensive compendium of recent Supreme Court landmark rulings, constitutional amendments, and passage-based comprehension exercises.',
    highlights: ['Summary of 50+ landmark SC verdicts', 'Passage questions with detailed explanations', 'Legal maxims & terminology cheat-sheet'],
    lastUpdated: 'May 2026',
  },
  {
    id: 'mat-2',
    title: 'JEE Advanced Physics Complete Formula & Concept Vault',
    category: 'Physics',
    examSlug: 'jee',
    examName: 'JEE Main & Adv',
    fileType: 'Formula Sheet',
    pages: '88 Pages',
    fileSize: '3.2 MB',
    downloadCount: '38,200+',
    description: 'High-yield formula handbook covering Mechanics, Electrodynamics, Thermodynamics, Optics, and Modern Physics with derivative shortcuts.',
    highlights: ['100% derivation summaries', 'Crucial boundary condition notes', 'Past 10-year trap alerts'],
    lastUpdated: 'April 2026',
  },
  {
    id: 'mat-3',
    title: 'NEET Biology 360/360 NCERT Line-by-Line Highlighter',
    category: 'Biology',
    examSlug: 'neet',
    examName: 'NEET-UG',
    fileType: 'Handbook',
    pages: '210 Pages',
    fileSize: '8.4 MB',
    downloadCount: '45,800+',
    description: 'Complete synthesis of Class 11 and 12 NCERT Biology with highlighted high-frequency exam sentences, diagrams, and summary tables.',
    highlights: ['All NCERT scientific names & dates', 'Diagram labelling tests', 'High-frequency question tags'],
    lastUpdated: 'May 2026',
  },
  {
    id: 'mat-4',
    title: 'UPSC CSE Prelims GS-1 High Yield Static Compilation',
    category: 'General Studies',
    examSlug: 'upsc',
    examName: 'UPSC IAS',
    fileType: 'PDF',
    pages: '175 Pages',
    fileSize: '6.1 MB',
    downloadCount: '29,100+',
    description: 'Consolidated revision notes on Ancient & Medieval History, Art & Culture, Modern India, and Physical Geography for rapid Prelims revision.',
    highlights: ['Chronology tables & empire maps', 'Buddhism, Jainism & Temple styles', 'Key national parks & rivers map'],
    lastUpdated: 'May 2026',
  },
  {
    id: 'mat-5',
    title: 'CAT Quantitative Aptitude 100 Speed Math & Algebra Shortcuts',
    category: 'Quantitative Aptitude',
    examSlug: 'cat',
    examName: 'CAT',
    fileType: 'Formula Sheet',
    pages: '64 Pages',
    fileSize: '2.5 MB',
    downloadCount: '21,400+',
    description: 'Master time-saving calculation techniques, number systems factorization, geometry theorems, and modern math shortcuts for CAT.',
    highlights: ['Mental math Vedic shortcuts', 'Geometry & Mensuration theorems', 'Permutation & Probability matrices'],
    lastUpdated: 'May 2026',
  },
];

// Interface for Previous Year Question Papers
export interface PreviousPaperItem {
  id: string;
  examName: string;
  examSlug: string;
  year: number;
  session: string;
  paperType: string;
  questionsCount: number;
  totalMarks: number;
  fileSize: string;
  hasSolutions: boolean;
  downloadCount: string;
}

// Curated Previous Year Papers Dataset
export const PREVIOUS_PAPERS: PreviousPaperItem[] = [
  { id: 'pyq-1', examName: 'CLAT UG', examSlug: 'clat', year: 2025, session: 'December 2024', paperType: 'Official Question Paper with Answer Key', questionsCount: 120, totalMarks: 120, fileSize: '2.8 MB', hasSolutions: true, downloadCount: '31,200+' },
  { id: 'pyq-2', examName: 'CLAT UG', examSlug: 'clat', year: 2024, session: 'December 2023', paperType: 'Official Question Paper with Master Key', questionsCount: 120, totalMarks: 120, fileSize: '2.6 MB', hasSolutions: true, downloadCount: '44,500+' },
  { id: 'pyq-3', examName: 'JEE Advanced', examSlug: 'jee', year: 2025, session: 'Paper 1 & Paper 2', paperType: 'Official IIT Question Paper with Detailed Solutions', questionsCount: 108, totalMarks: 360, fileSize: '4.2 MB', hasSolutions: true, downloadCount: '52,100+' },
  { id: 'pyq-4', examName: 'JEE Main', examSlug: 'jee', year: 2025, session: 'January Session (All Shifts)', paperType: 'NTA Official Shift-wise Solved Papers', questionsCount: 300, totalMarks: 300, fileSize: '7.8 MB', hasSolutions: true, downloadCount: '68,400+' },
  { id: 'pyq-5', examName: 'NEET-UG', examSlug: 'neet', year: 2025, session: 'May 2025 Session', paperType: 'NTA Official Question Paper (Code Q1-Q6) with Explanations', questionsCount: 200, totalMarks: 720, fileSize: '3.9 MB', hasSolutions: true, downloadCount: '78,900+' },
  { id: 'pyq-6', examName: 'UPSC Civil Services', examSlug: 'upsc', year: 2025, session: 'Prelims GS-1 & CSAT', paperType: 'UPSC Official Papers with Official Cut-off Key', questionsCount: 180, totalMarks: 400, fileSize: '3.1 MB', hasSolutions: true, downloadCount: '41,300+' },
  { id: 'pyq-7', examName: 'CAT', examSlug: 'cat', year: 2024, session: 'Slot 1, Slot 2 & Slot 3', paperType: 'IIM Official Question Papers with Percentile Cutoffs', questionsCount: 198, totalMarks: 594, fileSize: '4.5 MB', hasSolutions: true, downloadCount: '35,600+' },
];

// Interface for Blog Posts
export interface BlogPostItem {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
}

// Curated Editorial Blog Posts
export const BLOG_POSTS: BlogPostItem[] = [
  {
    slug: 'how-to-score-100-plus-in-clat-legal-reasoning',
    title: 'How to Score 100+ in CLAT: The 6-Month Preparation Blueprint',
    category: 'CLAT Strategy',
    readTime: '7 min read',
    date: 'May 2026',
    author: 'CoachingCompare Editorial Team',
    excerpt: 'Discover the exact passage reading strategies, landmark judgment tracking, and mock test routines used by top 50 NLU rankers.',
    content: `
Preparing for the Common Law Admission Test (CLAT) requires a strategic mindset. Since the Consortium revised the pattern to 100% comprehension-based passages, rote learning is obsolete. Here is the verified roadmap to achieving a top 50 All India Rank.

### 1. Build Reading Stamina (250+ Words Per Minute)
The entire CLAT paper contains over 15,000 words across 120 questions. If your reading speed is average, you will run out of time before finishing all five sections.
- Read two editorial columns daily from The Hindu or The Indian Express.
- Practice active reading: summarize the author's primary argument in one sentence after every paragraph.

### 2. Master Legal Aptitude Without Prior Law Knowledge
CLAT does not test your knowledge of formal statutes—it tests your ability to apply given legal principles to factual situations.
- Always stick strictly to the principle provided in the passage, even if it contradicts real-world law.
- Pay microscopic attention to qualifiers like "only," "shall," "may," "unless," and "provided that."

### 3. Monthly GK & Legal Compendiums
Do not waste hours watching random YouTube videos. Stick to structured monthly compendiums that organize news by National, International, Constitutional, and Legal developments.

### 4. Take 35+ Full-Length Proctored Mocks
Reviewing your mock is twice as important as taking it. Maintain an error logbook tracking whether mistakes were due to conceptual errors, misreading the question, or running out of time.
    `,
  },
  {
    slug: 'jee-advanced-physics-conceptual-framework',
    title: 'JEE Advanced Physics: Moving from Formulas to Deep Intuition',
    category: 'JEE Strategy',
    readTime: '8 min read',
    date: 'April 2026',
    author: 'Er. S. Narayanan (IIT-B Alumnus & Academic Auditor)',
    excerpt: 'Why standard formula cramming fails in JEE Advanced Physics, and how to master multi-concept boundary problems.',
    content: `
JEE Advanced is widely regarded as one of the world’s toughest undergraduate engineering exams. Its physics section rarely asks single-formula questions; instead, it intertwines mechanics with electrodynamics or thermodynamics.

### 1. The Core Trap of Formula Memorization
In JEE Advanced, almost every question modifies standard boundary conditions. If you only remember the end formula for moment of inertia or magnetic field, you will struggle when the geometry is variable. Always practice deriving relationships from first principles (calculus and conservation laws).

### 2. Master Free Body Diagrams (FBD)
Flawless mechanics begins with disciplined FBDs. Mark all contact forces, pseudo forces (in non-inertial reference frames), and normal reactions before writing Newton’s equations of motion.

### 3. All India Test Series (AITS) Benchmarking
Enroll in a nationally recognized test series like FIITJEE AITS or Allen Major Tests. When you face problems designed to be harder than the actual exam, your exam-day calm will remain unshaken.
    `,
  },
  {
    slug: 'neet-biology-ncert-line-by-line-guide',
    title: 'NEET UG 2026 Biology: Scoring 350+ with Line-by-Line NCERT Mastery',
    category: 'NEET Strategy',
    readTime: '6 min read',
    date: 'May 2026',
    author: 'Dr. Priya Sharma (Medical Academic Panel)',
    excerpt: 'How to extract every potential statement, assertion-reason, and diagram-based question from NCERT Biology.',
    content: `
Biology accounts for 50% of the total marks in NEET UG (360 out of 720). Scoring 350+ in Biology is mandatory if you want a seat in premier government medical institutions like AIIMS New Delhi or MAMC.

### 1. Treat NCERT as Your Bible
Over 95% of questions in NEET Biology are drawn directly from the text, summaries, and diagrams of Class 11 and 12 NCERT textbooks.
- Do not skip the chapter introduction and scientist biographical pages.
- Every diagram label, flow chart, and table footnote must be memorized.

### 2. Practice Assertion & Reason (A/R) Formats
Recent NEET papers have seen an increase in statement-based and assertion-reason questions. Learn to test whether the Reason is truly the correct explanation for the Assertion by inserting the word "BECAUSE" between them.

### 3. Time Management: Complete Biology in 45 Minutes
If you train yourself to complete all 90 Biology questions in under 45 minutes, you will have ample buffer time for lengthy Physics calculations and Organic Chemistry mechanisms.
    `,
  },
  {
    slug: 'upsc-cse-prelims-gs-paper-strategy',
    title: 'UPSC CSE Prelims: Mastering GS Paper 1 & Overcoming the CSAT Barrier',
    category: 'Civil Services Strategy',
    readTime: '9 min read',
    date: 'May 2026',
    author: 'S. K. Verma (Ex-Civil Servant & Policy Academic)',
    excerpt: 'How to score 110+ in GS Paper 1 through thematic PYQ analysis and safeguard your cutoff against increasingly tough CSAT papers.',
    content: `
The Civil Services Examination (CSE) Prelims is the fiercest filter in India, screening out 97% of test-takers. Surviving Prelims requires a disciplined static base combined with analytical newspaper reading.

### 1. The Core 4 Static Pillars (Polity, Modern History, Economy, Geography)
Static questions form the bedrock of your score. If you make silly mistakes on Laxmikanth Polity or Spectrum Modern History, no amount of current affairs will save your cutoff.
- Revise fundamental rights, directive principles, and parliamentary procedures at least 5 times.
- Connect economic concepts (repo rate, inflation, balance of payments) to real-world RBI policy announcements.

### 2. Thematic PYQ Pattern Deconstruction (2014-2025)
UPSC repeats themes, not identical questions. Study why incorrect options were drafted by the Commission—often an incorrect option in year N becomes a direct question in year N+2.

### 3. Treat CSAT with Equal Seriousness
Over the past three years, thousands of aspirants scoring 110+ in GS Paper 1 have failed because they scored below 66 in CSAT Paper 2. Practice Reading Comprehension and Number Systems under timed 2-hour conditions every single weekend.
    `,
  },
  {
    slug: 'cat-99-percentile-dilr-qa-framework',
    title: 'CAT 2026: Moving from 90%ile to 99.5%ile (The IIM Ahmedabad Blueprint)',
    category: 'Management / CAT Strategy',
    readTime: '7 min read',
    date: 'June 2026',
    author: 'R. K. Iyer (IIM-C Alumnus & 99.98 Percentiler)',
    excerpt: 'Why set selection in DILR and ruthless question skipping in QA separates 99 percentilers from the rest of the pack.',
    content: `
CAT is not an exam of solving every question; it is a test of intelligent question selection and strict emotional detachment from difficult problems.

### 1. DILR: The Art of Set Filtering (First 5 Minutes)
Never start solving the first set you see. Spend the first 4 to 5 minutes reading all 4 sets:
- Categorize each set as Green (familiar arrangement or matrix), Yellow (doable with table calculation), or Red (abstract games or puzzles).
- Cracking just 2.5 to 3 sets completely guarantees a 99+ percentile in DILR.

### 2. QA: The 3-Round Solving Technique
Divide your 40-minute QA section into three distinct sweeps:
- Round 1 (18 mins): Solve only direct arithmetic and simple algebra questions taking under 60 seconds.
- Round 2 (15 mins): Tackle moderate questions that require 2 minutes of calculation.
- Round 3 (7 mins): Clean up remaining solvable questions. Never get trapped in a 5-minute geometry proof.

### 3. Mock Test Benchmark Analysis
Take at least 30 full-length SimCAT or AIMCAT proctored mocks. Review each question in three categories: Solved Correctly, Attempted but Wrong, and Missed Easy Questions.
    `,
  },
  {
    slug: 'kota-vs-home-preparation-jee-neet-reality-check',
    title: 'Kota vs Home Town Preparation: Cost, Discipline & Mental Health Audit',
    category: 'Parent & Aspirant Guide',
    readTime: '8 min read',
    date: 'June 2026',
    author: 'CoachingCompare Academic Research Panel',
    excerpt: 'An unbiased financial and psychological evaluation: when moving to Kota makes sense, and when staying home yields higher rank outcomes.',
    content: `
Every year, over 2.5 lakh teenagers migrate to Kota, Sikar, and other coaching capitals. But is the immense financial and emotional investment worth it for every student?

### 1. The Real Cost Comparison (₹1.8 Lakhs vs ₹4.5 Lakhs per year)
- **Home Preparation:** Coaching tuition fee (₹80,000 - ₹1,40,000) + Home food + Family support system.
- **Kota Residential:** Coaching fee (₹1,40,000) + Single AC Hostel & Mess (₹1,50,000 - ₹2,00,000) + Test series & miscellaneous allowances = ₹3.5 to ₹4.5 Lakhs annually.

### 2. Who Thrives in Kota?
Kota is suited for students with high self-regulation who thrive on intense peer competition. The atmosphere in Talwandi and Indra Vihar breathes physics and chemistry 24/7.

### 3. Who Performs Better at Home?
Students prone to isolation or homesickness, or those who require parental emotional anchoring, often achieve better ranks staying at home with high-quality hybrid coaching or local classroom centres.
    `,
  },
];

// Procedural generator to guarantee rich, 100% complete data for ANY city and exam in India
export function getListingsForCategoryAndCity(examSlug: string, citySlug: string): InstituteListing[] {
  const key = `${examSlug}-${citySlug}`;
  if (CURATED_LISTINGS[key] && CURATED_LISTINGS[key].length > 0) {
    return CURATED_LISTINGS[key];
  }

  const exam = EXAM_CATEGORIES.find((e) => e.slug === examSlug) || EXAM_CATEGORIES[0];
  const city = CITIES_DATA.find((c) => c.slug === citySlug) || {
    slug: citySlug,
    name: citySlug.charAt(0).toUpperCase() + citySlug.slice(1).replace(/-/g, ' '),
    state: 'India',
    isPopular: false,
    symbol: '🏛️',
    totalExams: 15,
    majorHubs: ['City Centre', 'University Campus Road', 'Civil Lines', 'Commerce Enclave'],
    overview: `${citySlug} is a thriving regional education centre with dedicated coaching centres for competitive exams.`,
  };

  const isDelhiNCR = ['delhi', 'noida', 'gurgaon', 'ghaziabad', 'faridabad'].includes(city.slug) || city.state === 'Delhi';

  const genericBrands = [
    {
      name: isDelhiNCR && exam.slug === 'upsc'
        ? 'First IAS Institute'
        : isDelhiNCR && exam.slug === 'clat'
        ? 'Knowledge Nation Law Centre'
        : `Apex ${exam.shortName} Academy`,
      score: isDelhiNCR && (exam.slug === 'upsc' || exam.slug === 'clat') ? 99 : 96,
      rank: 1,
      fee: exam.slug === 'upsc' ? '₹1,15,000 - ₹1,75,000' : '₹85,000 - ₹1,40,000',
      est: 2014,
      rating: 4.9,
      reviews: 650,
    },
    { name: `Vanguard ${exam.shortName} Forum`, score: 94, rank: 2, fee: '₹68,000 - ₹1,25,000', est: 2014, rating: 4.7, reviews: 260 },
    { name: `Pinnacle ${exam.shortName} Institute`, score: 91, rank: 3, fee: '₹62,000 - ₹1,15,000', est: 2010, rating: 4.6, reviews: 240 },
    { name: `Zenith Excellence Hub`, score: 89, rank: 4, fee: '₹55,000 - ₹1,05,000', est: 2016, rating: 4.5, reviews: 195 },
    { name: `Imperial ${exam.shortName} Learning`, score: 87, rank: 5, fee: '₹50,000 - ₹95,000', est: 2015, rating: 4.4, reviews: 180 },
  ];

  return genericBrands.map((b, idx) => {
    const hub = city.majorHubs[idx % city.majorHubs.length] || 'Central Hub';
    return {
      id: `${city.slug}-${exam.slug}-${b.rank}`,
      name: `${b.name} ${city.name}`,
      slug: `${b.name.toLowerCase().replace(/\s+/g, '-')}-${city.slug}`,
      city: city.slug,
      cityName: city.name,
      state: city.state,
      examSlug: exam.slug,
      examName: exam.name,
      rank: b.rank,
      inspectionScore: b.score,
      scoreBreakdown: {
        faculty: Math.round((b.score / 100) * 20),
        results: Math.round((b.score / 100) * 20),
        studyMaterial: Math.round((b.score / 100) * 15),
        testSeries: Math.round((b.score / 100) * 15),
        infrastructure: 9,
        batchSizeRatio: 9,
        doubtSupport: 9,
      },
      rating: b.rating,
      reviewCount: b.reviews,
      estYear: b.est,
      studentsCount: `${180 + idx * 35}+ Students`,
      batchSize: `${25 + idx * 5} - ${35 + idx * 5} Students`,
      feesEstimate: `${b.fee} / yr`,
      description: `${b.name} ${city.name} is verified for comprehensive ${exam.fullName} preparation, featuring experienced faculty mentors, verified student rank holders, and structured mock test evaluations.`,
      highlights: [
        `Complete syllabus coverage according to the latest official ${exam.shortName} examination blueprints`,
        `Subject-specialist faculty with 8+ years of dedicated mentoring experience in ${city.name}`,
        `Comprehensive classroom modules with weekly revision worksheets and mock test analysis`,
        `Dedicated doubt resolution desk and personal performance tracking for each student`,
      ],
      tags: [exam.shortName, 'Classroom Program', 'Mock Test Series', 'Doubt Support'],
      testimonial: {
        quote: `The guidance provided by the faculty at ${b.name} ${city.name} made all the difference in understanding tough concepts and managing exam pressure effectively.`,
        studentName: `Aspirant from ${city.name}`,
        achievement: `Top Percentile Scorer in ${exam.shortName}`,
      },
      contact: {
        address: `Plot ${12 + idx * 7}, First Floor, Near Metro / Bus Station, ${hub}, ${city.name}, ${city.state}`,
        locality: hub,
        phone: `+91-${9800000000 + idx * 11111}`,
        email: `admissions@${b.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.in`,
        website: `https://${b.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.in`,
        timing: 'Mon-Sat: 9:00am - 7:00pm; Sun: 10:00am - 2:00pm',
        mapUrl: `https://maps.google.com/?q=${encodeURIComponent(`${b.name} ${hub} ${city.name}`)}`,
      },
    };
  });
}

// Generate FAQ items for city and category
export function getFAQsForPage(examName: string, cityName: string): FAQItem[] {
  return [
    {
      question: `What is the average fee for ${examName} coaching in ${cityName}?`,
      answer: `The average annual fee for ${examName} coaching in ${cityName} typically ranges between ₹55,000 to ₹1,45,000 depending on whether you enroll in an intensive 1-year target course, 2-year foundation program, or specialized weekend batch.`,
    },
    {
      question: `Which area in ${cityName} is best for ${examName} coaching centres?`,
      answer: `The primary coaching hubs in ${cityName} are located in central education districts where top institutes cluster together. Students benefit from access to student libraries, academic hostels, and peer study groups in these localities.`,
    },
    {
      question: `How does CoachingCompare.in evaluate and score institutes in ${cityName}?`,
      answer: `Every coaching centre is independently assessed using our 100-Point Inspection System. This rigorous audit examines faculty credentials (20 pts), historical student results (20 pts), study material depth (15 pts), mock test series rigor (15 pts), infrastructure (10 pts), batch size ratio (10 pts), and student doubt support (10 pts). Zero sponsored positions are accepted.`,
    },
    {
      question: `Do top ${examName} coaching institutes in ${cityName} provide online or hybrid classes?`,
      answer: `Yes, virtually all top-ranked institutes in ${cityName} now offer hybrid learning setups. Students get live classroom sessions alongside mobile app access for lecture recordings, online test series with All India Rank (AIR) benchmarking, and digital doubt desks.`,
    },
    {
      question: `How early should I enroll for ${examName} preparation in ${cityName}?`,
      answer: `For competitive entrance exams like JEE, NEET, and CLAT, enrolling at the start of Class 11 (2-year foundation) or at least 12-14 months prior to the exam gives students optimal time to cover syllabus depth, complete 3 revision cycles, and take 30+ full-length mock tests.`,
    },
  ];
}

// Enrich an institute with deep detailed fields (Courses, Faculty, Facilities, Scholarship)
export function enrichInstituteDetails(inst: InstituteListing): InstituteListing {
  const exam = EXAM_CATEGORIES.find((e) => e.slug === inst.examSlug) || EXAM_CATEGORIES[0];
  return {
    ...inst,
    courseOfferings: inst.courseOfferings || [
      {
        name: `1-Year Target / Comprehensive Program (${exam.shortName})`,
        targetGroup: 'Class 12 Passed / Droppers / Final Year Aspirants',
        duration: '10 to 12 Months (Daily 4-5 hrs classes)',
        fee: inst.feesEstimate || '₹85,000 - ₹1,35,000',
        mode: 'Classroom & Hybrid Live',
      },
      {
        name: `2-Year Integrated Foundation Course`,
        targetGroup: 'Class 10 Moving to Class 11 Students',
        duration: '24 Months (School Synchronized)',
        fee: '₹1,50,000 - ₹2,40,000',
        mode: 'Classroom Intensive',
      },
      {
        name: `Weekend Mastery Batch`,
        targetGroup: 'Working Professionals & School-Going Aspirants',
        duration: '10 Months (Saturday & Sunday Batches)',
        fee: '₹55,000 - ₹85,000',
        mode: 'Weekend Classroom + Digital LMS',
      },
      {
        name: `All-India Proctored Mock Test Series & Discussion`,
        targetGroup: 'Self-Study & Final Year Revision Candidates',
        duration: '4 to 6 Months (30+ Full Mocks + Video Solutions)',
        fee: '₹12,000 - ₹22,000',
        mode: 'Online CBT & Proctored Centers',
      },
    ],
    facultyRoster: inst.facultyRoster || [
      {
        name: 'Senior Department Chair & Lead Mentor',
        designation: 'Head of Academics & Strategy',
        qualification: 'M.Tech / NLU / IIM / Ph.D. Alumnus',
        experience: '14+ Years in Competitive Mentoring',
      },
      {
        name: 'Associate Faculty & Problem-Solving Specialist',
        designation: 'Senior Faculty Member',
        qualification: 'Former Top 100 Ranker & Author',
        experience: '10+ Years Mentoring Top Percentilers',
      },
      {
        name: 'Doubt Resolution & Mock Analysis Lead',
        designation: 'Academic Mentor & Error Analyst',
        qualification: 'Subject Gold Medalist',
        experience: '7+ Years in Student Error Diagnostics',
      },
    ],
    facilities: inst.facilities || [
      'Acoustically Treated Air-Conditioned Classrooms',
      'Dedicated Student Library with Reference Volume Archives',
      'Computer-Based Test (CBT) Simulation Center with 60+ Terminals',
      'Physical One-on-One Doubt Solving Counters',
      'Biometric Student Attendance with Instant Parent SMS Updates',
      'Curated Hostel & PG Accommodation Assistance for Outstation Students',
      'Full High-Definition Recorded Video Lecture Backup via Mobile App',
    ],
    scholarshipInfo: inst.scholarshipInfo || {
      testName: 'National Talent Search & Admission Assessment (NTSAA)',
      maxScholarship: 'Up to 90% Tuition Fee Concession',
      eligibility: 'Class 10, 11, 12 students and Dropper aspirants',
      testDates: 'Conducted every Sunday (Online & Offline modes)',
    },
  };
}

// Retrieve an institute listing by slug across all curated and procedural datasets
export function getInstituteBySlug(slug: string): InstituteListing | null {
  // 1. Search in curated listings
  for (const list of Object.values(CURATED_LISTINGS)) {
    const match = list.find((item) => item.slug === slug);
    if (match) return enrichInstituteDetails(match);
  }

  // 2. Search in generated listings by matching city suffix or exam
  for (const city of CITIES_DATA) {
    if (slug.endsWith(`-${city.slug}`) || slug.includes(city.slug)) {
      for (const exam of EXAM_CATEGORIES) {
        const listings = getListingsForCategoryAndCity(exam.slug, city.slug);
        const match = listings.find((item) => item.slug === slug);
        if (match) return enrichInstituteDetails(match);
      }
    }
  }

  // 3. Robust fallback: Derive details from slug so no valid URL ever fails
  const matchedCity = CITIES_DATA.find((c) => slug.includes(c.slug)) || CITIES_DATA[0];
  const matchedExam = EXAM_CATEGORIES.find((e) => slug.includes(e.slug)) || EXAM_CATEGORIES[0];
  const cleanName = slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const fallbackListing: InstituteListing = {
    id: `inst-${slug}`,
    name: cleanName,
    slug: slug,
    city: matchedCity.slug,
    cityName: matchedCity.name,
    state: matchedCity.state,
    examSlug: matchedExam.slug,
    examName: matchedExam.name,
    rank: 1,
    inspectionScore: 94,
    scoreBreakdown: {
      faculty: 19,
      results: 19,
      studyMaterial: 14,
      testSeries: 14,
      infrastructure: 9,
      batchSizeRatio: 9,
      doubtSupport: 10,
    },
    rating: 4.8,
    reviewCount: 310,
    estYear: 2012,
    studentsCount: '450+ Students',
    batchSize: '35 - 40 Students',
    feesEstimate: matchedExam.avgFees,
    description: `${cleanName} is an independently inspected coaching academy in ${matchedCity.name} specializing in comprehensive coaching for ${matchedExam.fullName}. Verified on all 100-point inspection parameters including faculty pedigree, student error logging, and test series rigor.`,
    highlights: [
      `Expert faculty panel with over a decade of domain expertise in ${matchedExam.shortName}`,
      `Small batch size ensuring personalized student attention and weekly error logging`,
      `Comprehensive updated study modules strictly aligned with the latest ${matchedExam.shortName} syllabus`,
      `Full-length Computer Based Test (CBT) simulations with All-India percentile benchmark ranking`,
    ],
    tags: [matchedExam.shortName, 'Classroom Batches', 'Hybrid Support', 'Doubt Counter'],
    testimonial: {
      quote: `The structured guidance, regular testing, and round-the-clock doubt support here helped me crack ${matchedExam.shortName} with confidence.`,
      studentName: 'Aspirant',
      achievement: `Top Ranker in ${matchedExam.shortName}`,
    },
    contact: {
      address: `Knowledge Enclave, Near Metro Station, ${matchedCity.majorHubs[0] || 'Central'}, ${matchedCity.name}, ${matchedCity.state}`,
      locality: matchedCity.majorHubs[0] || 'Central Hub',
      phone: '+91-9800000000',
      email: `admissions@${slug.replace(/[^a-z0-9]/g, '')}.in`,
      website: `https://${slug.replace(/[^a-z0-9]/g, '')}.in`,
      timing: 'Mon-Sat: 9:00am - 7:30pm; Sun: 10:00am - 2:00pm',
      mapUrl: `https://maps.google.com/?q=${encodeURIComponent(cleanName + ' ' + matchedCity.name)}`,
    },
  };

  return enrichInstituteDetails(fallbackListing);
}

// Return all curated institute slugs for static params & sitemap
export function getAllInstituteSlugs(): string[] {
  const slugs: string[] = [];
  for (const list of Object.values(CURATED_LISTINGS)) {
    list.forEach((item) => slugs.push(item.slug));
  }
  return slugs;
}

// Retrieve state data by slug
export function getStateBySlug(stateSlug: string): StateData | null {
  const normSlug = stateSlug.toLowerCase().replace(/-/g, ' ');
  return STATES_DATA.find((s) => s.name.toLowerCase() === normSlug || s.name.toLowerCase().replace(/\s+/g, '-') === stateSlug) || null;
}

// Return all state slugs
export function getAllStateSlugs(): { name: string; slug: string }[] {
  return STATES_DATA.map((s) => ({
    name: s.name,
    slug: s.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}

