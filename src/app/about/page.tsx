import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icons } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'About Us & Editorial Independence | CoachingCompare.in',
  description: 'Learn about the mission of CoachingCompare.in, India’s independent coaching institute review and comparison platform.',
};

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: '40px 20px 80px' }}>
      {/* Breadcrumbs */}
      <nav className="breadcrumb-nav">
        <div className="breadcrumb-item">
          <Link href="/">Home</Link>
          <Icons.ChevronRight size={13} />
        </div>
        <div className="breadcrumb-item">
          <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>About Us</span>
        </div>
      </nav>

      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="badge badge-gold" style={{ marginBottom: '12px' }}>
            Our Mission & Ethics
          </span>
          <h1 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '14px' }}>
            Empowering Indian Students with Honest Coaching Insights
          </h1>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
            Every year, millions of students across India prepare for high-stakes exams like JEE, NEET, UPSC, and CLAT. CoachingCompare.in was established to bring transparency, accountability, and merit back to the test prep industry.
          </p>
        </header>

        <div className="card" style={{ padding: '32px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '14px' }}>
            The Problem We Solve
          </h2>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-body)', marginBottom: '16px' }}>
            The test preparation market in India is inundated with exaggerated advertisements, purchased toppers, and undisclosed paid listings. Students and parents frequently spend their hard-earned life savings enrolling in overcrowded coaching factories where batch sizes exceed 200 students and personal doubt support is virtually non-existent.
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-body)' }}>
            CoachingCompare eliminates this information asymmetry through physical inspections, roll-number result verifications, teacher qualification checks, and unvarnished student reviews.
          </p>
        </div>

        <div className="card" style={{ padding: '32px', marginBottom: '32px', background: 'var(--brand-blue-light)', border: '1px solid var(--brand-blue-border)' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#1e3a8a', marginBottom: '14px' }}>
            Our Strict Independence Charter
          </h2>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14.5px', color: '#1e40af' }}>
              <span style={{ fontWeight: 800, color: 'var(--brand-blue)' }}>1.</span>
              <span><strong>Zero Paid Rankings:</strong> No coaching institute can pay to change their inspection score or ranking order.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14.5px', color: '#1e40af' }}>
              <span style={{ fontWeight: 800, color: 'var(--brand-blue)' }}>2.</span>
              <span><strong>Objective 100-Point Audit:</strong> Every score is calculated mathematically based on documented parameters.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14.5px', color: '#1e40af' }}>
              <span style={{ fontWeight: 800, color: 'var(--brand-blue)' }}>3.</span>
              <span><strong>Result Verification:</strong> Advertised ranks are verified against government selection registers and admit cards.</span>
            </li>
          </ul>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '40px' }}>
          <Link href="/methodology" className="btn btn-primary">
            Read Our 100-Point Methodology
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Contact Editorial Desk
          </Link>
        </div>
      </div>
    </div>
  );
}
