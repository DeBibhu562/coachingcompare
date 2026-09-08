import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icons } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Verified Faculty Audit Standard | CoachingCompare.in',
  description: 'How CoachingCompare independently audits educator credentials, average teacher tenure, and student-teacher ratios across coaching institutes in India.',
};

export default function VerifiedFacultyPage() {
  const pillars = [
    {
      title: 'Academic Qualification Cross-Check',
      desc: 'We verify faculty educational pedigrees—confirming graduation degrees from IITs, NLUs, AIIMS, IIMs, Central Universities, and National Eligibility Test (NET) qualifications to prevent fake or exaggerated teacher profiles.',
      icon: '🎓',
    },
    {
      title: 'Tenure & Classroom Stability Tracking',
      desc: 'A chronic problem in commercial coaching is mid-session teacher poaching and turnover. We audit educator contract lengths and penalize centres that rotate new unverified teachers into ongoing exam batches.',
      icon: '⏳',
    },
    {
      title: 'Student-to-Educator Ratio Audit',
      desc: 'We strictly verify that classroom batches do not exceed the advertised limits. Institutes advertising 30-student batches but cramming 90+ students face point deductions in our 100-Point Inspection System.',
      icon: '👥',
    },
    {
      title: '1-on-1 Doubt Desk Availability',
      desc: 'Having celebrity teachers on advertisements is meaningless if they leave immediately after lectures. We physically verify that permanent faculty sit at doubt desks for personal student problem solving.',
      icon: '💡',
    },
  ];

  return (
    <div className="container" style={{ padding: '40px 20px 80px', maxWidth: '840px' }}>
      <nav className="breadcrumb-nav">
        <div className="breadcrumb-item">
          <Link href="/">Home</Link>
          <Icons.ChevronRight size={13} />
        </div>
        <div className="breadcrumb-item">
          <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>Verified Faculty Audit</span>
        </div>
      </nav>

      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <span className="badge badge-gold" style={{ marginBottom: '10px' }}>
          Teaching Integrity Standard
        </span>
        <h1 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '14px' }}>
          Our Faculty Verification Standard
        </h1>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
          Great competitive coaching begins and ends with exceptional teachers. Here is how CoachingCompare audits faculty quality across all ranked academies in India.
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
        {pillars.map((p, idx) => (
          <div key={idx} className="card" style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '32px', flexShrink: 0 }}>{p.icon}</div>
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '6px' }}>
                {p.title}
              </h2>
              <p style={{ fontSize: '14.5px', lineHeight: '1.6', color: 'var(--text-body)' }}>
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', background: 'var(--brand-blue-light)', padding: '32px', borderRadius: 'var(--radius-xl)', border: '1px solid var(--brand-blue-border)' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#1e3a8a', marginBottom: '8px' }}>
          Inspect Institutes with Verified Faculty
        </h3>
        <p style={{ fontSize: '14px', color: '#1e40af', marginBottom: '20px' }}>
          Browse our top 5 audited coaching rankings for your target city today.
        </p>
        <Link href="/#cities-registry" className="btn btn-primary">
          Explore Audited City Rankings →
        </Link>
      </div>
    </div>
  );
}
