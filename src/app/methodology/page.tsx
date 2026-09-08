import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icons } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Our 100-Point Inspection System | CoachingCompare.in',
  description: 'Understand how CoachingCompare independently audits and ranks coaching institutes in India across faculty qualifications, student selection verification, study materials, and mock testing.',
};

export default function MethodologyPage() {
  const criteria = [
    {
      title: '1. Faculty Credentials & Experience',
      pts: '20 Points',
      badge: 'Weight: 20%',
      icon: '👨‍🏫',
      details: [
        'Academic credentials of permanent educators (IIT, NLU, AIIMS, IIM alumni, PhDs, NET qualifiers).',
        'Average faculty tenure at the centre (penalizing institutes with high teacher turnover during ongoing batches).',
        'Pedagogical style, conceptual clarity, and ability to break down complex competitive exam syllabi.',
        'Student-to-educator ratio to prevent dilution of academic delivery.',
      ],
    },
    {
      title: '2. Selection Track Record & Topper Audits',
      pts: '20 Points',
      badge: 'Weight: 20%',
      icon: '🏆',
      details: [
        'Physical verification of advertised selections against official exam roll numbers and admit cards.',
        'Strict filtering of non-classroom students (ensuring postal or test-series candidates are not claimed as full-time classroom ranks).',
        'Consistency of top 100 All India Ranks (AIR) over the past 5 consecutive academic years.',
        'Selection conversion percentage across the total enrolled batch size.',
      ],
    },
    {
      title: '3. Study Material Quality & Currency',
      pts: '15 Points',
      badge: 'Weight: 15%',
      icon: '📚',
      details: [
        'Depth of theory booklets and alignment with official syllabus updates.',
        'Quality and progression of problem sets (graded from foundational to advanced examination level).',
        'Weekly current affairs compilations, law summaries, or formula sheets tailored to the specific exam.',
        'Zero tolerance for outdated reprints without annual revisions.',
      ],
    },
    {
      title: '4. Test Series Rigor & National Benchmarking',
      pts: '15 Points',
      badge: 'Weight: 15%',
      icon: '📊',
      details: [
        'Simulation accuracy of mock exam software (matching exact exam UI, timer, and question difficulty).',
        'All India Rank (AIR) benchmarking pool size for accurate percentile estimation.',
        'Post-test analytical reports providing question-level speed, accuracy, and negative marking trends.',
        'Frequency of full-length proctored tests conducted before the final exam date.',
      ],
    },
    {
      title: '5. Infrastructure & Learning Environment',
      pts: '10 Points',
      badge: 'Weight: 10%',
      icon: '🏢',
      details: [
        'Physical classroom ventilation, acoustic clarity, ergonomics, and audiovisual presentation tools.',
        'Dedicated computer-based testing (CBT) labs for online exam preparation.',
        'On-campus reference libraries and quiet study reading rooms.',
        'Safety compliance, fire norms, and CCTV surveillance standards.',
      ],
    },
    {
      title: '6. Batch Size & Personal Attention Ratio',
      pts: '10 Points',
      badge: 'Weight: 10%',
      icon: '👥',
      details: [
        'Strict batch caps (rewarding institutes maintaining 30-50 students per classroom over crowded 200+ factories).',
        'Teacher availability for one-on-one student interaction after scheduled class hours.',
        'Periodic parent-teacher meetings and student performance review loops.',
      ],
    },
    {
      title: '7. Doubt Support & 1-on-1 Mentorship',
      pts: '10 Points',
      badge: 'Weight: 10%',
      icon: '💡',
      details: [
        'Dedicated physical doubt clearing counters operating beyond lecture hours.',
        'Response time for digital app-based doubt submissions.',
        'Personal academic mentors assigned to monitor psychological well-being and test stress management.',
      ],
    },
  ];

  return (
    <div className="container" style={{ padding: '40px 20px 80px' }}>
      {/* Breadcrumbs */}
      <nav className="breadcrumb-nav">
        <div className="breadcrumb-item">
          <Link href="/">Home</Link>
          <Icons.ChevronRight size={13} />
        </div>
        <div className="breadcrumb-item">
          <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>100-Point Inspection System</span>
        </div>
      </nav>

      {/* Header */}
      <div style={{ maxWidth: '800px', margin: '0 auto 48px', textAlign: 'center' }}>
        <span className="badge badge-gold" style={{ marginBottom: '12px' }}>
          <Icons.ShieldCheck size={14} /> Independent Standard
        </span>
        <h1 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '16px' }}>
          The CoachingCompare 100-Point Inspection Methodology
        </h1>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
          Choosing a coaching institute is one of the most critical investments an Indian family makes. We developed this 100-point audit framework to eliminate marketing hype and deliver verified, merit-only rankings.
        </p>
      </div>

      {/* Zero Paid Policy Alert */}
      <div
        style={{
          maxWidth: '860px',
          margin: '0 auto 48px',
          background: '#fffbeb',
          border: '1px solid #fde68a',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          display: 'flex',
          gap: '16px',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ fontSize: '32px', flexShrink: 0 }}>🛡️</div>
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#92400e', marginBottom: '6px' }}>
            Our Editorial Independence Pledge
          </h3>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#78350f' }}>
            Coaching centres cannot buy higher ranks, badges, or favorable reviews on CoachingCompare.in. Any coaching centre attempting to sponsor rankings is disqualified from our audit program. All inspection scores reflect direct physical verification and student feedback.
          </p>
        </div>
      </div>

      {/* Criteria Breakdown Cards */}
      <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {criteria.map((c, idx) => (
          <div key={idx} className="card" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '28px' }}>{c.icon}</span>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)' }}>{c.title}</h2>
              </div>
              <span className="badge badge-blue" style={{ fontSize: '13px' }}>{c.pts}</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '40px' }}>
              {c.details.map((d, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14.5px', color: 'var(--text-body)', lineHeight: '1.5' }}>
                  <span style={{ color: 'var(--brand-blue)', marginTop: '2px', flexShrink: 0 }}>✓</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Audit Request CTA */}
      <div style={{ maxWidth: '860px', margin: '56px auto 0', textAlign: 'center', background: 'var(--brand-blue-light)', padding: '36px', borderRadius: 'var(--radius-xl)', border: '1px solid var(--brand-blue-border)' }}>
        <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#1e3a8a', marginBottom: '8px' }}>
          Are You an Institute Director Seeking Audit?
        </h3>
        <p style={{ fontSize: '14.5px', color: '#1e40af', maxWidth: '600px', margin: '0 auto 20px', lineHeight: '1.6' }}>
          If your academy maintains high pedagogical standards and verified results, submit an audit request to be inspected by our regional panel.
        </p>
        <Link href="/contact" className="btn btn-primary">
          <Icons.ShieldCheck size={16} /> Request Centre Inspection
        </Link>
      </div>
    </div>
  );
}
