import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | CoachingCompare.in',
  description: 'Privacy Policy and data handling disclosures for CoachingCompare.in.',
};

export default function PrivacyPage() {
  return (
    <div className="container" style={{ padding: '40px 20px 80px', maxWidth: '800px' }}>
      <nav className="breadcrumb-nav">
        <div className="breadcrumb-item"><Link href="/">Home</Link> › <span>Privacy Policy</span></div>
      </nav>

      <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '20px' }}>
        Privacy Policy
      </h1>
      <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginBottom: '32px' }}>
        Last updated: May 2026
      </p>

      <div className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px', lineHeight: '1.7', color: 'var(--text-body)' }}>
        <p>
          At <strong>CoachingCompare.in</strong>, we respect the privacy of our student visitors, parents, and coaching centre partners. This Privacy Policy outlines the types of personal information collected and how it is used and protected.
        </p>

        <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-dark)' }}>Information We Collect</h2>
        <p>
          When you request a free counselling callback or submit an audit inquiry, we may collect your name, phone number, email address, target examination, and city of residence. We do not sell your personal contact details to third-party telemarketers.
        </p>

        <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-dark)' }}>Cookies & Analytics</h2>
        <p>
          We use lightweight, privacy-focused analytical cookies to understand user navigation flows, popular city hubs, and search patterns. These cookies do not store personally identifiable data.
        </p>

        <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-dark)' }}>Contact Us</h2>
        <p>
          If you have questions regarding this policy or wish to request data deletion, contact us at <a href="mailto:privacy@coachingcompare.in" style={{ color: 'var(--brand-blue)' }}>privacy@coachingcompare.in</a>.
        </p>
      </div>
    </div>
  );
}
