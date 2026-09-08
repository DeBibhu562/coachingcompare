import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { EXAM_CATEGORIES, CITIES_DATA } from '@/data/coachingData';
import { Icons } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'All Competitive Exams Coaching Directory 2026 | CoachingCompare.in',
  description: 'Complete directory of competitive examination coaching across India. Browse verified rankings for CLAT, JEE, NEET, UPSC, CAT, SSC, Banking, GATE, NDA, and CUET.',
};

export default function ExamsOverviewPage() {
  const groups = ['Law', 'Engineering', 'Medical', 'Civil Services', 'Management', 'Govt & Defense', 'School & Other'] as const;

  return (
    <div className="container" style={{ padding: '40px 20px 72px' }}>
      {/* Breadcrumbs */}
      <nav className="breadcrumb-nav">
        <div className="breadcrumb-item">
          <Link href="/">Home</Link>
          <Icons.ChevronRight size={13} />
        </div>
        <div className="breadcrumb-item">
          <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>Exams Overview</span>
        </div>
      </nav>

      <header style={{ marginBottom: '40px', textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
        <span className="badge badge-blue" style={{ marginBottom: '12px' }}>
          National Exam Directory
        </span>
        <h1 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '14px' }}>
          Explore Competitive Exam Coaching in India
        </h1>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
          Whether you are preparing for law, engineering, medical, civil services, or management, CoachingCompare provides independent, 100-Point Inspected rankings across 30+ major Indian cities.
        </p>
      </header>

      {/* Grouped Exams */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {groups.map((group) => {
          const groupExams = EXAM_CATEGORIES.filter((e) => e.categoryGroup === group);
          if (groupExams.length === 0) return null;

          return (
            <div key={group}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '4px', height: '22px', background: 'var(--brand-blue)', borderRadius: '2px', display: 'inline-block' }} />
                {group} Examinations
              </h2>

              <div className="grid-3">
                {groupExams.map((exam) => (
                  <div key={exam.id} className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <span className="badge badge-gold">{exam.badge}</span>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)' }}>{exam.examLevel}</span>
                      </div>

                      <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                        {exam.name}
                      </h3>

                      <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '16px' }}>
                        {exam.description}
                      </p>

                      <div style={{ background: '#f8fafc', padding: '10px 14px', borderRadius: 'var(--radius-sm)', fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '18px', display: 'flex', justifyContent: 'space-between' }}>
                        <span>Avg. Fees: <strong>{exam.avgFees}</strong></span>
                        <span>Prep: <strong>{exam.prepDuration}</strong></span>
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '8px' }}>
                        Popular Hubs for {exam.shortName}:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {['delhi', 'mumbai', 'bangalore', 'hyderabad', 'pune'].map((citySlug) => {
                          const city = CITIES_DATA.find((c) => c.slug === citySlug);
                          if (!city) return null;
                          return (
                            <Link
                              key={citySlug}
                              href={`/best-${exam.slug}-coaching-in-${citySlug}`}
                              className="badge badge-blue"
                              style={{ transition: 'all 0.15s ease' }}
                            >
                              {city.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
