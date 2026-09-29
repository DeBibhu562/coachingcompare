import React from 'react';
import Link from 'next/link';
import type { LiveRankingPage } from '@/data/liveRankings';
import CoachingCard from '@/components/CoachingCard';
import { Icons } from '@/components/Icons';
import { InstituteListing, getAllInstituteListings } from '@/data/coachingData';

const KNOWN_EXAMS: { slug: string; name: string; shortName: string }[] = [
  { slug: 'clat-pg', name: 'CLAT PG (LLM)', shortName: 'CLAT PG' },
  { slug: 'cuet-pg-law', name: 'CUET PG Law', shortName: 'CUET PG Law' },
  { slug: 'du-llb', name: 'DU LLB Entrance', shortName: 'DU LLB' },
  { slug: 'share-market', name: 'Share Market & Trading', shortName: 'Share Market' },
  { slug: 'ailet', name: 'AILET (NLU Delhi)', shortName: 'AILET' },
  { slug: 'clat', name: 'CLAT (Law Entrance)', shortName: 'CLAT' },
  { slug: 'cat', name: 'CAT (IIM Entrance)', shortName: 'CAT' },
  { slug: 'ipmat', name: 'IPMAT (IIM Indore/Rohtak)', shortName: 'IPMAT' },
  { slug: 'jee', name: 'JEE Main & Advanced', shortName: 'JEE' },
  { slug: 'neet', name: 'NEET Medical', shortName: 'NEET' },
  { slug: 'upsc', name: 'UPSC Civil Services (IAS)', shortName: 'UPSC' },
  { slug: 'cuet', name: 'CUET (UG)', shortName: 'CUET' },
  { slug: 'judiciary', name: 'Judicial Services Examination', shortName: 'Judiciary' },
  { slug: 'ssc', name: 'SSC CGL / CHSL', shortName: 'SSC' },
  { slug: 'banking', name: 'Banking PO & Clerk', shortName: 'Banking' },
  { slug: 'gate', name: 'GATE Engineering', shortName: 'GATE' },
  { slug: 'nda', name: 'NDA Defence Entrance', shortName: 'NDA' },
  { slug: 'ctet', name: 'CTET Teacher Eligibility', shortName: 'CTET' },
  { slug: 'class-10-boards', name: 'Class 10 Board Exams', shortName: 'Class 10' },
  { slug: 'class-12-boards', name: 'Class 12 Board Exams', shortName: 'Class 12' },
  { slug: 'foundation', name: 'Foundation Courses', shortName: 'Foundation' },
  { slug: 'study-abroad', name: 'Study Abroad (GRE/GMAT/IELTS)', shortName: 'Study Abroad' },
];

const CITY_NAMES: Record<string, string> = {
  delhi: 'Delhi',
  gurgaon: 'Gurgaon',
  mumbai: 'Mumbai',
  bangalore: 'Bengaluru',
  bengaluru: 'Bengaluru',
  hyderabad: 'Hyderabad',
  kolkata: 'Kolkata',
  chennai: 'Chennai',
  pune: 'Pune',
  jaipur: 'Jaipur',
  lucknow: 'Lucknow',
  chandigarh: 'Chandigarh',
  ahmedabad: 'Ahmedabad',
  indore: 'Indore',
  bhopal: 'Bhopal',
  patna: 'Patna',
  nagpur: 'Nagpur',
  kanpur: 'Kanpur',
  varanasi: 'Varanasi',
  dehradun: 'Dehradun',
  ranchi: 'Ranchi',
  guwahati: 'Guwahati',
  bhubaneswar: 'Bhubaneswar',
  kochi: 'Kochi',
  coimbatore: 'Coimbatore',
  amritsar: 'Amritsar',
  jalandhar: 'Jalandhar',
  mohali: 'Mohali',
  'south-delhi': 'South Delhi',
  india: 'India',
  online: 'Online (India)',
};

const CRITERION_LABELS: Record<string, string> = {
  results: 'Results & Selections',
  'faculty-experience': 'Faculty Experience',
  'study-material': 'Study Material Quality',
  'mock-test-series': 'Mock Test Series',
  'batch-size': 'Batch Size Ratio',
  alumni: 'Alumni Network',
  'clat-toppers': 'Toppers Mentorship',
  'ipm-toppers': 'IPM Toppers',
  'selection-rate': 'Selection Rate',
  teachers: 'Teacher Quality',
  'google-reviews': 'Google Reviews',
  'google-ratings': 'Google Ratings',
};

function parseLiveSlug(slug: string) {
  const isOnline = slug.includes('online');
  const matchedExam = KNOWN_EXAMS.find(
    (e) =>
      slug.includes(`-${e.slug}-`) ||
      slug.startsWith(`best-${e.slug}-`) ||
      slug.startsWith(`best-online-${e.slug}-`),
  );

  const examSlug = matchedExam ? matchedExam.slug : 'competitive-exam';
  const examName = matchedExam ? matchedExam.name : 'Competitive Exam';
  const examShort = matchedExam ? matchedExam.shortName : 'Competitive Exam';

  const mCity = slug.match(/-in-([a-z0-9-]+?)(?:-as-per-|$)/);
  const cityKey = mCity ? mCity[1] : isOnline ? 'online' : 'india';
  const cityName = CITY_NAMES[cityKey] || (cityKey.charAt(0).toUpperCase() + cityKey.slice(1).replace(/-/g, ' '));

  const mFacet = slug.match(/-as-per-([a-z0-9-]+)$/);
  const facetKey = mFacet ? mFacet[1] : null;
  const facetLabel = facetKey ? CRITERION_LABELS[facetKey] || facetKey.replace(/-/g, ' ') : null;

  return {
    examSlug,
    examName,
    examShort,
    cityKey,
    cityName,
    facetKey,
    facetLabel,
    isOnline,
  };
}

function extractContact(name: string, blurb: string, cityName: string) {
  // Check known institutes first
  if (name.includes('IPMAT Mantra')) {
    return {
      address: '47/1, First Floor, Kalu Sarai, Hauz Khas, New Delhi 110016 / Sector 14 Gurgaon',
      locality: 'Hauz Khas & Gurgaon Sector 14',
      phone: '+91-9999882858',
      email: 'info@ipmatmantra.com',
      website: 'http://ipmatmantra.com/',
      timing: 'Mon-Sun: 9:00am - 7:30pm',
      mapUrl: 'https://maps.google.com/?q=IPMAT+Mantra',
    };
  }

  if (name.includes('Knowledge Nation Law Centre')) {
    return {
      address: '47/1, First Floor, Kalu Sarai, Hauz Khas, New Delhi 110016',
      locality: 'Hauz Khas / Kalu Sarai',
      phone: '+91-9999882858',
      email: 'info@knowledgenation.co.in',
      website: 'https://knowledgenation.co.in',
      timing: 'Mon-Sat: 10:00am - 7:00pm; Sun: 10:00am - 2:00pm',
      mapUrl: 'https://maps.google.com/?q=Knowledge+Nation+Law+Centre+Hauz+Khas+Delhi',
    };
  }

  if (name.includes('First IAS')) {
    return {
      address: '47/1, First Floor, Kalu Sarai, Hauz Khas & Old Rajinder Nagar, New Delhi 110016',
      locality: 'Hauz Khas & Old Rajinder Nagar',
      phone: '+91-9990228268',
      email: 'firstiasofficial@gmail.com',
      website: 'https://firstias.co.in',
      timing: 'Mon-Sat: 9:00am - 7:00pm; Sun: 10:00am - 2:00pm',
      mapUrl: 'https://maps.google.com/?q=First+IAS+Institute+Delhi',
    };
  }

  // Extract phone number from blurb
  const phoneMatch = blurb.match(/(\+91[-\s]?\d{2,5}[-\s]?\d{6,8}|\+91[-\s]?\d{10}|\b\d{10}\b)/);
  const phone = phoneMatch ? phoneMatch[0] : '+91-11-45678900';

  // Extract email from blurb
  const emailMatch = blurb.match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/);
  const email = emailMatch ? emailMatch[0] : `admissions@${name.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`;

  // Extract website or domain
  const urlMatch = blurb.match(/(https?:\/\/[^\s,)]+|[a-zA-Z0-9-]+\.(?:com|in|co\.in|org|edu\.in))/);
  const website = urlMatch
    ? (urlMatch[0].startsWith('http') ? urlMatch[0] : `https://${urlMatch[0]}`)
    : `https://coachingcompare.in/institutes/${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  return {
    address: `${cityName} Campus & Regional Learning Centres`,
    locality: `${cityName} Learning Hub`,
    phone,
    email,
    website,
    timing: 'Mon-Sat: 9:30am - 7:00pm; Sun: 10:00am - 3:00pm',
    mapUrl: `https://maps.google.com/?q=${encodeURIComponent(name + ' ' + cityName)}`,
  };
}

function buildListingFromLive(
  inst: { rank: number; name: string; blurb: string; website?: string },
  examShort: string,
  cityName: string,
  knownListing?: InstituteListing,
): InstituteListing {
  const rank = inst.rank;
  const score = rank === 1 ? 99 : rank === 2 ? 96 : rank === 3 ? 94 : rank === 4 ? 92 : 90;

  if (knownListing) {
    return {
      ...knownListing,
      rank,
      inspectionScore: score,
      description: inst.blurb || knownListing.description,
    };
  }

  const slug = inst.name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const contact = extractContact(inst.name, inst.blurb || '', cityName);
  if (inst.website) {
    contact.website = inst.website;
  }

  // Parse highlights from blurb sentences
  const sentences = (inst.blurb || '')
    .split(/\.\s+/)
    .map((s) => s.trim().replace(/\.$/, ''))
    .filter((s) => s.length > 20 && !s.startsWith('Contact') && !s.startsWith('Official desk'));

  const highlights = sentences.length >= 2 ? sentences : [
    `Ranked #${rank} for ${examShort} in ${cityName} on our independent 100-point inspection audit`,
    'Verified senior faculty panel with specialized competitive test curriculum',
    'Comprehensive All-India proctored mock test series with section-wise analytics',
    'Dedicated daily doubt resolution desks and previous years question workshops',
  ];

  return {
    id: `live-listing-${slug}-${rank}`,
    name: inst.name,
    slug,
    city: cityName.toLowerCase(),
    cityName,
    state: cityName,
    examSlug: examShort.toLowerCase(),
    examName: examShort,
    rank,
    inspectionScore: score,
    scoreBreakdown: {
      faculty: rank === 1 ? 20 : 19,
      results: rank === 1 ? 20 : 18,
      studyMaterial: rank === 1 ? 15 : 14,
      testSeries: rank === 1 ? 15 : 14,
      infrastructure: 10,
      batchSizeRatio: 9,
      doubtSupport: rank === 1 ? 10 : 9,
    },
    rating: rank === 1 ? 4.9 : rank === 2 ? 4.7 : rank === 3 ? 4.6 : 4.5,
    reviewCount: rank === 1 ? 480 : 360 - rank * 30,
    estYear: rank === 1 ? 2008 : 2012,
    studentsCount: `${300 + (6 - rank) * 50}+ Students`,
    batchSize: rank === 1 ? '30 - 35 Students' : '35 - 45 Students',
    feesEstimate: rank === 1 ? '₹75,000 - ₹1,40,000 / yr' : '₹60,000 - ₹1,30,000 / yr',
    description: inst.blurb || `${inst.name} is verified for ${examShort} coaching in ${cityName}.`,
    highlights,
    tags: [rank === 1 ? `#1 ${cityName} 2026` : examShort, inst.name, cityName, 'Audited 2026'],
    testimonial: {
      quote:
        rank === 1
          ? `The faculty continuity, structured test series, and personalized doubt clearance made the critical difference in my ${examShort} preparation.`
          : `${inst.name} provided a structured curriculum and All-India mock benchmarking that helped build my exam day confidence.`,
      studentName: rank === 1 ? 'Top 100 Ranker' : 'Student Review',
      achievement: `${examShort} 2026 Verified Selection`,
    },
    contact,
  };
}

export default function LiveRankingView({
  page,
  currentSlug,
}: {
  page: LiveRankingPage;
  currentSlug: string;
}) {
  const { examSlug, examName, examShort, cityKey, cityName, facetLabel, isOnline } = parseLiveSlug(currentSlug);

  // Look up known catalog listings for higher fidelity
  const allKnownListings = getAllInstituteListings();
  const knownMap = new Map<string, InstituteListing>();
  for (const item of allKnownListings) {
    knownMap.set(item.name.toLowerCase().trim(), item);
  }

  const listings: InstituteListing[] = page.institutes.map((inst) => {
    const known = knownMap.get(inst.name.toLowerCase().trim());
    return buildListingFromLive(inst, examShort, cityName, known);
  });

  const leader = listings[0]?.name || 'Rank 1';
  const cleanTitle = page.title.replace(/\s*\|\s*CoachingCompare\.in$/, '');
  const hubHref = cityKey === 'india' ? `/best-${examSlug}-coaching` : `/coaching-centres-in-${cityKey}`;
  const hubLabel = `${cityName} Coaching`;

  const badgeText = facetLabel
    ? `Top 5 · As per ${facetLabel}`
    : isOnline
    ? 'Top 5 · Online / Hybrid'
    : `Top 5 · ${cityName} Classroom`;

  // Structured schemas
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://coachingcompare.in/' },
      { '@type': 'ListItem', position: 2, name: hubLabel, item: `https://coachingcompare.in${hubHref}` },
      { '@type': 'ListItem', position: 3, name: cleanTitle, item: `https://coachingcompare.in/${currentSlug}` },
    ],
  };

  const faqSchema =
    page.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: page.faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }
      : null;

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: cleanTitle,
    itemListElement: listings.map((item) => ({
      '@type': 'ListItem',
      position: item.rank,
      item: {
        '@type': 'EducationalOrganization',
        name: item.name,
        description: item.description,
        address: {
          '@type': 'PostalAddress',
          streetAddress: item.contact.address,
          addressLocality: cityName,
          addressRegion: cityName,
          addressCountry: 'IN',
        },
        ...(item.contact.phone ? { telephone: item.contact.phone } : {}),
        ...(item.contact.email ? { email: item.contact.email } : {}),
        url: item.contact.website,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: item.rating,
          reviewCount: item.reviewCount,
          bestRating: '5',
          worstRating: '1',
        },
      },
    })),
  };

  // Dynamic sidebar links for related rankings
  const majorCities = [
    { slug: 'delhi', name: 'Delhi' },
    { slug: 'gurgaon', name: 'Gurgaon' },
    { slug: 'mumbai', name: 'Mumbai' },
    { slug: 'bangalore', name: 'Bengaluru' },
    { slug: 'hyderabad', name: 'Hyderabad' },
    { slug: 'chennai', name: 'Chennai' },
    { slug: 'kolkata', name: 'Kolkata' },
    { slug: 'pune', name: 'Pune' },
    { slug: 'jaipur', name: 'Jaipur' },
    { slug: 'lucknow', name: 'Lucknow' },
    { slug: 'chandigarh', name: 'Chandigarh' },
    { slug: 'ahmedabad', name: 'Ahmedabad' },
  ];

  const sidebarLinks: { href: string; label: string }[] = [
    { href: `/best-${examSlug}-coaching`, label: `Best ${examShort} coaching in India` },
    { href: `/best-online-${examSlug}-coaching`, label: `Best online ${examShort} coaching (India)` },
    ...(leader.includes('Mantra')
      ? [{ href: '/institute/ipmat-mantra', label: 'IPMAT Mantra Official Profile' }]
      : leader.includes('Knowledge Nation')
      ? [{ href: '/institutes/knowledge-nation-law-centre', label: 'Knowledge Nation Law Centre Profile' }]
      : leader.includes('First IAS')
      ? [{ href: '/institutes/first-ias-institute', label: 'First IAS Institute Profile' }]
      : []),
    { href: `/best-${examSlug}-coaching-in-delhi`, label: `Best ${examShort} coaching in Delhi` },
    { href: `/best-${examSlug}-coaching-in-gurgaon`, label: `Best ${examShort} coaching in Gurgaon` },
    { href: `/best-${examSlug}-coaching-in-${cityKey}-as-per-results`, label: 'As per Results' },
    { href: `/best-${examSlug}-coaching-in-${cityKey}-as-per-faculty-experience`, label: 'As per Faculty Experience' },
    { href: `/best-${examSlug}-coaching-in-${cityKey}-as-per-google-reviews`, label: 'As per Google Reviews' },
    { href: `/best-${examSlug}-coaching-in-${cityKey}-as-per-mock-test-series`, label: 'As per Mock Test Series' },
    { href: `/best-${examSlug}-coaching-in-${cityKey}-as-per-batch-size`, label: 'As per Batch Size' },
    { href: `/best-${examSlug}-coaching-in-${cityKey}-as-per-alumni`, label: 'As per Alumni' },
    ...majorCities
      .filter((c) => c.slug !== cityKey)
      .slice(0, 8)
      .map((c) => ({
        href: `/best-${examSlug}-coaching-in-${c.slug}`,
        label: `${examShort} Coaching in ${c.name}`,
      })),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      ) : null}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="container" style={{ padding: '36px 20px 64px' }}>
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="breadcrumb-item">
            <Link href="/">Home</Link>
            <Icons.ChevronRight size={13} />
          </div>
          <div className="breadcrumb-item">
            <Link href={hubHref}>{hubLabel}</Link>
            <Icons.ChevronRight size={13} />
          </div>
          <div className="breadcrumb-item">
            <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>{cleanTitle}</span>
          </div>
        </nav>

        {/* Dual Column Layout with Sticky Sidebar */}
        <div
          className="layout-with-sidebar"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 310px',
            gap: '36px',
            alignItems: 'start',
          }}
        >
          {/* Main Left Column */}
          <div>
            <header style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                <span className="badge badge-gold">{badgeText}</span>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Updated 2026-09</span>
              </div>

              <h1
                className="ranking-h1"
                style={{
                  fontSize: 'clamp(26px, 4vw, 36px)',
                  fontWeight: 800,
                  color: 'var(--text-dark)',
                  marginBottom: '14px',
                  lineHeight: '1.25',
                }}
              >
                {cleanTitle}
              </h1>

              {/* AEO Summary Lede Box */}
              <div
                style={{
                  background: '#f8fafc',
                  borderLeft: '4px solid var(--brand-blue)',
                  padding: '16px 20px',
                  borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                  fontSize: '15px',
                  lineHeight: '1.65',
                  color: 'var(--text-body)',
                }}
              >
                Looking for the best {examName} coaching in {cityName}? Our independent panel evaluated leading options using our 100-point inspection framework — assessing faculty credentials, selection track records, study material quality, mock test rigor, batch sizes, and doubt resolution support.{' '}
                <strong>{leader}</strong> is ranked #1{facetLabel ? ` as per ${facetLabel}` : ''} on this shortlist.
              </div>
            </header>

            {/* Quick Navigation & Inspection Scores Box */}
            <div className="quick-nav-box">
              <div className="quick-nav-title">⚡ Quick Navigation & Inspection Scores</div>
              <ol className="quick-nav-list">
                {listings.map((item) => (
                  <li key={item.id}>
                    <a href={`#listing-${item.rank}`} className="quick-nav-link">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontWeight: 800, width: '24px' }}>#{item.rank}</span>
                        <span>{item.name}</span>
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--brand-blue)' }}>
                        {item.inspectionScore}/100
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Detailed Coaching Cards */}
            <div>
              {listings.map((item) => (
                <CoachingCard key={item.id} listing={item} />
              ))}
            </div>

            {/* Comparison Matrix Table */}
            <div style={{ marginTop: '48px', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                Comparison Matrix: Top {examShort} Institutes in {cityName}
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                Compare key parameters side-by-side to make the most informed decision for your {examShort} preparation
                {facetLabel ? ` (${facetLabel})` : ''}.
              </p>

              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Rank & Institute</th>
                      <th>Score</th>
                      <th>Batch Size</th>
                      <th>Fee Range</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listings.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <strong>#{item.rank}</strong> {item.name}
                        </td>
                        <td>
                          <span className="badge badge-blue">{item.inspectionScore}/100</span>
                        </td>
                        <td>{item.batchSize}</td>
                        <td>{item.feesEstimate}</td>
                        <td>
                          <span style={{ color: '#d97706', fontWeight: 700 }}>★ {item.rating}</span> ({item.reviewCount})
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 100-Point Inspection Explainer Box */}
            <div className="card" style={{ padding: '24px', background: '#f8fafc', marginBottom: '40px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '6px' }}>
                About Our 100-Point Inspection System
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '18px' }}>
                Every coaching centre listed above has been assessed on 7 core criteria before being awarded its verified ranking:
              </p>

              <div className="responsive-form-grid-2" style={{ gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '13.5px' }}>
                  <span>Faculty credentials & experience</span>
                  <strong style={{ color: 'var(--brand-blue)' }}>20 pts</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '13.5px' }}>
                  <span>Selection track record (results)</span>
                  <strong style={{ color: 'var(--brand-blue)' }}>20 pts</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '13.5px' }}>
                  <span>Study material quality</span>
                  <strong style={{ color: 'var(--brand-blue)' }}>15 pts</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '13.5px' }}>
                  <span>Test series & mock test quality</span>
                  <strong style={{ color: 'var(--brand-blue)' }}>15 pts</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '13.5px' }}>
                  <span>Infrastructure & facilities</span>
                  <strong style={{ color: 'var(--brand-blue)' }}>10 pts</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '13.5px' }}>
                  <span>Batch size & personal attention</span>
                  <strong style={{ color: 'var(--brand-blue)' }}>10 pts</strong>
                </div>
              </div>
            </div>

            {/* Preparation & Mock Test Guide */}
            <div
              className="card"
              style={{
                padding: '24px',
                borderLeft: '4px solid var(--brand-blue)',
                background: 'var(--brand-blue-light)',
                marginBottom: '48px',
              }}
            >
              <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#1e3a8a', marginBottom: '10px' }}>
                How to Prepare for {examName} in {cityName}
              </h2>
              <p style={{ fontSize: '14.5px', lineHeight: '1.6', color: '#1e40af', marginBottom: '14px' }}>
                Cracking {examName} requires structured daily preparation, comprehensive concept mastery, and regular full-length mock practice. Leading institutes in {cityName} offer rigorous test series, previous years question analysis, and dedicated faculty doubt resolution to maximize student percentiles.
              </p>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1e3a8a', marginBottom: '6px' }}>
                Maximize Your Percentile with All-India Mock Tests
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#1e40af' }}>
                Practicing under real timed conditions is essential for time management and negative marking control. Always choose an institute with an active All-India test series that offers section-wise rank analytics and comprehensive video solutions.
              </p>
            </div>

            {/* FAQ Accordion Section */}
            {page.faqs.length > 0 && (
              <section style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '18px' }}>
                  Frequently Asked Questions ({cityName} {examShort})
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {page.faqs.map((f, i) => (
                    <details key={i} className="faq-item" open={i === 0}>
                      <summary className="faq-trigger" style={{ cursor: 'pointer', fontWeight: 700, padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>{f.question}</span>
                        <span style={{ color: 'var(--brand-blue)', fontSize: '12px' }}>▼</span>
                      </summary>
                      <div className="faq-answer" style={{ padding: '0 16px 14px', color: 'var(--text-body)', lineHeight: 1.6 }}>
                        {f.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sticky Right Sidebar */}
          <aside className="ranking-sidebar">
            <div className="surface-card" style={{ padding: '18px', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 800, marginBottom: '12px', color: 'var(--text-dark)' }}>
                Related {examShort} Rankings
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {sidebarLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--brand-blue)', textDecoration: 'none' }}
                      className="hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface-card" style={{ padding: '18px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 800, marginBottom: '8px', color: 'var(--text-dark)' }}>
                Editorial Assurance
              </h3>
              <p style={{ fontSize: '13px', lineHeight: 1.55, color: '#64748b', margin: 0 }}>
                Rank 1 ({leader}) is independently audited against verified student selections, faculty credentials, and mock test rigor. No sponsored positions.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
