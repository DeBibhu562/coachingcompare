import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { EXAM_CATEGORIES, CITIES_DATA } from '@/data/coachingData';
import { Icons } from '@/components/Icons';
import ExamsClient from './ExamsClient';

export const metadata: Metadata = {
  title: 'All Competitive Exams Coaching Directory 2026 | CoachingCompare.in',
  description:
    'Complete directory of competitive examination coaching across India. Browse verified rankings for CLAT, JEE, NEET, UPSC, CAT, IPMAT, SSC, Banking, GATE, NDA, and CUET.',
  alternates: { canonical: '/exams' },
  openGraph: {
    title: 'All Competitive Exams Coaching Directory 2026 | CoachingCompare.in',
    description:
      'Complete directory of competitive examination coaching across India. Browse verified rankings for CLAT, JEE, NEET, UPSC, CAT, IPMAT, SSC, Banking, GATE, NDA, and CUET.',
    url: 'https://coachingcompare.in/exams',
    type: 'website',
  },
};

export default function ExamsOverviewPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://coachingcompare.in/' },
      { '@type': 'ListItem', position: 2, name: 'Exams Directory', item: 'https://coachingcompare.in/exams' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
        <header style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
            <span className="badge badge-blue">National Exam Directory</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Updated 2026-09</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '14px', lineHeight: '1.2' }}>
            Explore Competitive Exam Coaching in India
          </h1>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--text-muted)', margin: '0 auto' }}>
            Whether you are preparing for law, engineering, medical, civil services, or management, CoachingCompare provides independent, 100-Point Inspected rankings across 30+ major Indian cities.
          </p>
        </header>

        {/* Interactive Search & Filter Client View */}
        <ExamsClient exams={EXAM_CATEGORIES} cities={CITIES_DATA} />
      </div>
    </>
  );
}
