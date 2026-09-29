import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { EXAM_CATEGORIES, CITIES_DATA } from '@/data/coachingData';
import { Icons } from '@/components/Icons';
import ExamsClient from './ExamsClient';

export const metadata: Metadata = {
  title: 'All Competitive Exams Coaching Directory 2026 | CoachingCompare.in',
  description:
    'Find top-ranked, 100-Point Inspected coaching for CLAT, JEE, NEET, UPSC, CAT, IPMAT, SSC, Banking, GATE, NDA, and CUET across 30+ Indian cities. Independent editorial rankings — no sponsored listings.',
  keywords:
    'best coaching for CLAT, JEE coaching, NEET coaching, UPSC coaching, CAT coaching, IPMAT coaching, SSC coaching, GATE coaching, competitive exam coaching India 2026',
  alternates: { canonical: 'https://coachingcompare.in/exams' },
  openGraph: {
    title: 'All Competitive Exams Coaching Directory 2026 | CoachingCompare.in',
    description:
      'Independent, 100-Point Inspected coaching rankings for every major Indian competitive exam. Browse by exam or city.',
    url: 'https://coachingcompare.in/exams',
    type: 'website',
  },
};

const POPULAR_CITIES = [
  { name: 'Delhi', slug: 'delhi' },
  { name: 'Mumbai', slug: 'mumbai' },
  { name: 'Bangalore', slug: 'bangalore' },
  { name: 'Hyderabad', slug: 'hyderabad' },
  { name: 'Pune', slug: 'pune' },
  { name: 'Chennai', slug: 'chennai' },
  { name: 'Kolkata', slug: 'kolkata' },
  { name: 'Jaipur', slug: 'jaipur' },
];

const EXAM_GROUPS = [
  { id: 'Law', label: 'Law Exams' },
  { id: 'Engineering', label: 'Engineering Exams' },
  { id: 'Medical', label: 'Medical Exams' },
  { id: 'Civil Services', label: 'Civil Services' },
  { id: 'Management', label: 'Management Exams' },
  { id: 'Govt & Defense', label: 'Govt & Defence' },
  { id: 'School & Other', label: 'School & Boards' },
];

export default function ExamsOverviewPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://coachingcompare.in/' },
      { '@type': 'ListItem', position: 2, name: 'Exams Directory', item: 'https://coachingcompare.in/exams' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which is the best coaching for CLAT in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Based on CoachingCompare\'s 100-Point Inspection, the top CLAT coaching institutes include IMS, Career Launcher, and Knowledge Nation Law Centre — ranked by verified selections, faculty quality, and test infrastructure.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which is the best coaching for IPMAT in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IPMAT Mantra ranks #1 for IPMAT coaching based on independent audit of selection records, faculty depth, and study material quality.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does CoachingCompare rank coaching institutes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Each institute is scored across 6 factors: Faculty Credentials (20 pts), Selection Records (20 pts), Study Material (15 pts), Mock Tests (15 pts), Infrastructure (10 pts), and Student Attention (10 pts). Zero paid or sponsored placements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which city is best for competitive exam coaching in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Delhi leads for UPSC and SSC. Kota leads for JEE and NEET. Mumbai and Pune lead for IPMAT and MBA preparation. Bangalore and Hyderabad are top choices for Engineering and Management.',
        },
      },
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top Competitive Exam Coaching Categories in India 2026',
    numberOfItems: EXAM_CATEGORIES.length,
    itemListElement: EXAM_CATEGORIES.slice(0, 10).map((exam, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `Best ${exam.name} Coaching`,
      url: `https://coachingcompare.in/best-${exam.slug}-coaching`,
    })),
  };

  // Group exams by category for sidebar
  const examsByGroup = EXAM_GROUPS.map((g) => ({
    ...g,
    exams: EXAM_CATEGORIES.filter((e) => e.categoryGroup === g.id),
  })).filter((g) => g.exams.length > 0);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="container" style={{ padding: '36px 20px 80px' }}>
        {/* Breadcrumbs */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="breadcrumb-item">
            <Link href="/">Home</Link>
            <Icons.ChevronRight size={13} />
          </div>
          <div className="breadcrumb-item">
            <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>Exams Directory</span>
          </div>
        </nav>

        {/* Page Header */}
        <header style={{ maxWidth: '820px', marginBottom: '32px' }}>
          <span className="badge badge-blue" style={{ marginBottom: '10px', display: 'inline-block' }}>
            National Exam Directory · Updated Sep 2026
          </span>
          <h1
            style={{
              fontSize: 'clamp(26px, 4vw, 38px)',
              fontWeight: 800,
              color: 'var(--text-dark)',
              marginBottom: '12px',
              lineHeight: '1.2',
            }}
          >
            Best Coaching for Every Competitive Exam in India 2026
          </h1>
          <p style={{ fontSize: '15.5px', lineHeight: '1.7', color: 'var(--text-body)', margin: 0 }}>
            CoachingCompare ranks the best coaching institutes for{' '}
            <strong>CLAT, JEE, NEET, UPSC, CAT, IPMAT, SSC, Banking, GATE, NDA</strong> and more — across 30+
            Indian cities. Every ranking is based on our independent <strong>100-Point Inspection</strong>: no
            sponsored positions, no paid rankings.
          </p>
        </header>

        {/* 2-Column Layout: Main Content + Sidebar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 268px',
            gap: '40px',
            alignItems: 'start',
          }}
        >
          {/* ── MAIN CONTENT ── */}
          <main>
            <ExamsClient exams={EXAM_CATEGORIES} cities={CITIES_DATA} />

            {/* AEO / SEO Editorial Section */}
            <section
              aria-label="About this directory"
              style={{ marginTop: '56px', paddingTop: '36px', borderTop: '1px solid var(--border-subtle)' }}
            >
              <h2 style={{ fontSize: '21px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '14px' }}>
                How We Rank Coaching Institutes
              </h2>
              <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: 'var(--text-body)', marginBottom: '12px' }}>
                Every institute listed on CoachingCompare is independently audited on a <strong>100-Point
                Inspection</strong> framework before it appears in any ranking. Our editorial team verifies faculty
                credentials, cross-checks selection records with official result sheets, and conducts student
                feedback surveys — without accepting fees or sponsorships from institutes.
              </p>
              <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: 'var(--text-body)', marginBottom: '28px' }}>
                Rankings are refreshed every quarter and updated immediately after each major exam result cycle.{' '}
                <Link href="/methodology" style={{ color: 'var(--brand-blue)', fontWeight: 600 }}>
                  Read our full methodology →
                </Link>
              </p>

              {/* FAQs for AEO */}
              <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '14px' }}>
                Frequently Asked Questions
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  {
                    q: 'Which is the best coaching for CLAT in India?',
                    a: "Based on CoachingCompare's 100-Point Inspection, the top CLAT coaching institutes include IMS, Career Launcher, and Knowledge Nation Law Centre — ranked by verified selections, faculty quality, and test infrastructure.",
                  },
                  {
                    q: 'Which is the best coaching for IPMAT in India?',
                    a: "IPMAT Mantra ranks #1 for IPMAT coaching based on independent audit of selection records, faculty depth, and study material quality.",
                  },
                  {
                    q: 'How does CoachingCompare rank institutes?',
                    a: 'Each institute is scored across 6 factors: Faculty Credentials (20 pts), Selection Records (20 pts), Study Material (15 pts), Mock Tests (15 pts), Infrastructure (10 pts), and Student Attention (10 pts). Zero paid or sponsored placements.',
                  },
                  {
                    q: 'Which city is best for competitive exam coaching in India?',
                    a: 'Delhi leads for UPSC and SSC. Kota leads for JEE and NEET. Mumbai and Pune lead for IPMAT and MBA preparation. Bangalore and Hyderabad are top choices for Engineering and Management.',
                  },
                ].map((faq, i) => (
                  <details
                    key={i}
                    className="card"
                    style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--border-subtle)' }}
                  >
                    <summary
                      style={{
                        padding: '14px 18px',
                        cursor: 'pointer',
                        fontWeight: 700,
                        fontSize: '14.5px',
                        color: 'var(--text-dark)',
                        listStyle: 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      {faq.q}
                      <span style={{ fontSize: '18px', color: 'var(--brand-blue)', flexShrink: 0 }}>+</span>
                    </summary>
                    <div
                      style={{
                        padding: '0 18px 16px',
                        fontSize: '14px',
                        lineHeight: '1.7',
                        color: 'var(--text-body)',
                      }}
                    >
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </main>

          {/* ── RIGHT SIDEBAR — link listings only ── */}
          <aside style={{ position: 'sticky', top: '88px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Exams by Category */}
            {examsByGroup.map((group) => (
              <div key={group.id} className="sidebar-widget">
                <h3 className="sidebar-widget-title">{group.label}</h3>
                <ul className="sidebar-list">
                  {group.exams.map((exam) => (
                    <li key={exam.slug}>
                      <Link href={`/best-${exam.slug}-coaching`} className="sidebar-link">
                        <span style={{ color: '#94a3b8' }}>›</span>
                        <span>{exam.shortName} Coaching</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Popular Cities */}
            <div className="sidebar-widget">
              <h3 className="sidebar-widget-title">Popular Cities</h3>
              <ul className="sidebar-list">
                {POPULAR_CITIES.map((city) => (
                  <li key={city.slug}>
                    <Link href={`/coaching-in-${city.slug}`} className="sidebar-link">
                      <span style={{ color: '#94a3b8' }}>›</span>
                      <span>Coaching in {city.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="sidebar-widget">
              <h3 className="sidebar-widget-title">Quick Links</h3>
              <ul className="sidebar-list">
                <li>
                  <Link href="/institutes" className="sidebar-link">
                    <span style={{ color: '#94a3b8' }}>›</span>
                    <span>All Institutes</span>
                  </Link>
                </li>
                <li>
                  <Link href="/methodology" className="sidebar-link">
                    <span style={{ color: '#94a3b8' }}>›</span>
                    <span>Ranking Methodology</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="sidebar-link">
                    <span style={{ color: '#94a3b8' }}>›</span>
                    <span>About CoachingCompare</span>
                  </Link>
                </li>
              </ul>
            </div>

          </aside>
        </div>
      </div>
    </>
  );
}

