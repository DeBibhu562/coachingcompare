import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Editorial Disclaimer | CoachingCompare.in',
  description: 'Independent evaluation disclaimer for CoachingCompare.in.',
};

export default function DisclaimerPage() {
  return (
    <div className="container" style={{ padding: '40px 20px 80px', maxWidth: '800px' }}>
      <nav className="breadcrumb-nav">
        <div className="breadcrumb-item"><Link href="/">Home</Link> › <span>Disclaimer</span></div>
      </nav>

      <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '20px' }}>
        Editorial Disclaimer
      </h1>

      <div className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px', lineHeight: '1.7', color: 'var(--text-body)' }}>
        <p>
          <strong>CoachingCompare.in</strong> operates as an independent review and comparison directory. All logos, registered trademarks, exam names (such as CLAT, JEE, NEET, UPSC, CAT, etc.), and institute brand names are the intellectual property of their respective trademark holders.
        </p>
        <p>
          Use of these names and references does not imply any official endorsement, affiliation, or commercial partnership by the respective examination authorities or institutions unless explicitly noted.
        </p>
        <p>
          While we strive to keep fee brackets, faculty rosters, and contact coordinates accurate and up-to-date through quarterly audits, students and parents are advised to verify latest batch admissions directly with the respective institutes before payment.
        </p>
      </div>
    </div>
  );
}
