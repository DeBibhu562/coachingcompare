import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | CoachingCompare.in',
  description: 'Terms of Service and usage conditions for CoachingCompare.in.',
};

export default function TermsPage() {
  return (
    <div className="container" style={{ padding: '40px 20px 80px', maxWidth: '800px' }}>
      <nav className="breadcrumb-nav">
        <div className="breadcrumb-item"><Link href="/">Home</Link> › <span>Terms of Service</span></div>
      </nav>

      <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '20px' }}>
        Terms of Service
      </h1>

      <div className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px', lineHeight: '1.7', color: 'var(--text-body)' }}>
        <p>
          By accessing or using <strong>CoachingCompare.in</strong>, you agree to comply with and be bound by these Terms of Service.
        </p>
        <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-dark)' }}>Platform Purpose</h2>
        <p>
          CoachingCompare.in provides independent editorial evaluations, comparison charts, and directories of coaching institutes. Rankings are determined via our 100-Point Inspection audit based on information collected during centre audits, publicly available data, and verified student feedback.
        </p>
        <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-dark)' }}>Intellectual Property</h2>
        <p>
          The compilation, layout, scoring algorithms, and review texts on CoachingCompare.in are the intellectual property of CoachingCompare. Unauthorized reproduction or scraping of ranking tables without written attribution is prohibited.
        </p>
      </div>
    </div>
  );
}
