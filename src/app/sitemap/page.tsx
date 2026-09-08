import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CITIES_DATA, EXAM_CATEGORIES, STATES_DATA } from '@/data/coachingData';
import { Icons } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Complete Tree Sitemap Directory | CoachingCompare.in',
  description: 'Explore the complete tree-structured navigation hierarchy of CoachingCompare.in covering all cities, competitive exams, and verified rankings.',
};

export default function SitemapPage() {
  return (
    <div className="container" style={{ padding: '40px 20px 80px' }}>
      {/* Breadcrumbs */}
      <nav className="breadcrumb-nav">
        <div className="breadcrumb-item">
          <Link href="/">Home</Link>
          <Icons.ChevronRight size={13} />
        </div>
        <div className="breadcrumb-item">
          <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>Structured Sitemap Directory</span>
        </div>
      </nav>

      <header style={{ marginBottom: '40px' }}>
        <span className="badge badge-gold" style={{ marginBottom: '10px' }}>
          Tree Navigation Architecture
        </span>
        <h1 style={{ fontSize: '34px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '12px' }}>
          CoachingCompare.in Structured Sitemap
        </h1>
        <p style={{ fontSize: '15.5px', color: 'var(--text-muted)' }}>
          All pages and internal linking clusters organized logically by level and category for easy navigation and search indexation.
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {/* Section 1: Core Platform Nodes */}
        <div className="card" style={{ padding: '28px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--brand-blue)' }}>🌐</span> Core Platform Hubs
          </h2>
          <div className="grid-3">
            <Link href="/" className="sidebar-link" style={{ fontSize: '14px', fontWeight: 600 }}>• Homepage (/)</Link>
            <Link href="/exams" className="sidebar-link" style={{ fontSize: '14px', fontWeight: 600 }}>• All Exams Directory (/exams)</Link>
            <Link href="/methodology" className="sidebar-link" style={{ fontSize: '14px', fontWeight: 600 }}>• 100-Point Inspection (/methodology)</Link>
            <Link href="/compare" className="sidebar-link" style={{ fontSize: '14px', fontWeight: 600 }}>• Direct Compare Tool (/compare)</Link>
            <Link href="/about" className="sidebar-link" style={{ fontSize: '14px', fontWeight: 600 }}>• About Us (/about)</Link>
            <Link href="/contact" className="sidebar-link" style={{ fontSize: '14px', fontWeight: 600 }}>• Contact & Audits (/contact)</Link>
            <Link href="/privacy" className="sidebar-link" style={{ fontSize: '14px', fontWeight: 600 }}>• Privacy Policy (/privacy)</Link>
            <Link href="/terms" className="sidebar-link" style={{ fontSize: '14px', fontWeight: 600 }}>• Terms of Service (/terms)</Link>
            <Link href="/disclaimer" className="sidebar-link" style={{ fontSize: '14px', fontWeight: 600 }}>• Disclaimer (/disclaimer)</Link>
          </div>
        </div>

        {/* Section 2: City Hubs by State */}
        <div className="card" style={{ padding: '28px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--brand-blue)' }}>🗺️</span> City Hub Nodes (By State)
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {STATES_DATA.map((state) => (
              <div key={state.name}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--brand-blue)', marginBottom: '8px' }}>
                  {state.name} ({state.cities.length} {state.cities.length === 1 ? 'City' : 'Cities'})
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {state.cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/coaching-centres-in-${city.slug}`}
                      className="badge badge-blue"
                      style={{ padding: '6px 12px', fontSize: '13px' }}
                    >
                      {city.symbol} {city.name} Coaching
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Popular Category in City Rankings Matrix */}
        <div className="card" style={{ padding: '28px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--brand-blue)' }}>🏆</span> Top Exam in City Rankings Matrix
          </h2>
          <div className="grid-3">
            {EXAM_CATEGORIES.slice(0, 6).map((exam) => (
              <div key={exam.id} style={{ marginBottom: '16px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                  {exam.shortName} Coaching Rankings
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {['delhi', 'mumbai', 'bangalore', 'hyderabad', 'pune', 'jaipur', 'lucknow', 'chandigarh'].map((cSlug) => {
                    const city = CITIES_DATA.find((c) => c.slug === cSlug);
                    if (!city) return null;
                    return (
                      <li key={cSlug}>
                        <Link
                          href={`/best-${exam.slug}-coaching-in-${cSlug}`}
                          className="sidebar-link"
                          style={{ padding: '4px 8px', fontSize: '13px' }}
                        >
                          › {exam.shortName} in {city.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
