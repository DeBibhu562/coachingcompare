'use client';

import React from 'react';
import Link from 'next/link';
import { InstituteListing } from '@/data/coachingData';
import { Icons } from './Icons';

interface CoachingCardProps {
  listing: InstituteListing;
  onCompareToggle?: (id: string) => void;
  isCompared?: boolean;
}

export default function CoachingCard({ listing, onCompareToggle, isCompared = false }: CoachingCardProps) {
  const getRankBadgeClass = (rank: number) => {
    if (rank === 1) return 'rank-badge-1';
    if (rank === 2) return 'rank-badge-2';
    if (rank === 3) return 'rank-badge-3';
    return 'rank-badge-other';
  };

  const getRankLabel = (rank: number) => {
    if (rank === 1) return 'AIR #1 BENCHMARK';
    if (rank === 2) return 'RANK #2 AUDITED';
    if (rank === 3) return 'RANK #3 CONTENDER';
    return `RANK #${rank}`;
  };

  return (
    <article className="institute-card" id={`listing-${listing.rank}`}>
      {/* Top Header Bar */}
      <div className="card-topbar">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
          <span className={getRankBadgeClass(listing.rank)}>
            {listing.rank === 1 && <Icons.Trophy size={14} color="#fbbf24" />}
            {getRankLabel(listing.rank)}
          </span>
          <h2 style={{ fontSize: '19px', fontWeight: 800, margin: 0 }}>
            <Link
              href={`/institute/${listing.slug}`}
              style={{ color: 'var(--text-dark)', textDecoration: 'none' }}
              className="hover:underline"
            >
              {listing.name}
            </Link>
          </h2>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.04em',
              background: 'var(--brand-emerald-light)',
              color: 'var(--brand-emerald)',
              border: '1px solid var(--brand-emerald-border)',
              padding: '3px 8px',
              borderRadius: '999px',
              textTransform: 'uppercase',
            }}
          >
            ✓ Verified Campus
          </span>
        </div>

        {/* Distinctive Inspection Score Widget */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '10.5px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-primary)' }}>
              100-PT AUDIT
            </div>
            <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>
              Inspection Score
            </div>
          </div>
          <div
            style={{
              background: 'linear-gradient(135deg, #090e1a 0%, #1e1b4b 100%)',
              color: '#34d399',
              border: '1.5px solid var(--brand-primary)',
              borderRadius: '12px',
              padding: '6px 12px',
              fontSize: '20px',
              fontWeight: 800,
              lineHeight: 1,
              display: 'flex',
              alignItems: 'baseline',
              gap: '2px',
              boxShadow: '0 2px 8px rgba(79, 70, 229, 0.25)',
            }}
          >
            <span>{listing.inspectionScore}</span>
            <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 500 }}>/100</span>
          </div>
        </div>
      </div>

      {/* Main Card Content */}
      <div className="card-body">
        {/* Left Col: Review, Highlights & Testimonial */}
        <div>
          {/* Quick Metrics Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
            <span className="badge badge-gold">
              <Icons.Star size={14} color="#d97706" fill="#d97706" />
              <span>{listing.rating} Rating ({listing.reviewCount} reviews)</span>
            </span>

            <span className="badge" style={{ background: '#f8fafc', color: '#475569', border: '1px solid #e2e8f0' }}>
              <Icons.Calendar size={13} />
              <span>Est. {listing.estYear}</span>
            </span>

            <span className="badge badge-blue">
              <Icons.Users size={13} />
              <span>{listing.studentsCount}</span>
            </span>

            <span className="badge badge-emerald">
              <Icons.GraduationCap size={13} />
              <span>Batch: {listing.batchSize}</span>
            </span>
          </div>

          {/* Description */}
          <p style={{ fontSize: '14.5px', lineHeight: '1.6', color: 'var(--text-body)', marginBottom: '16px' }}>
            {listing.description}
          </p>

          {/* Verified Highlights */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--brand-primary)', letterSpacing: '0.04em', marginBottom: '8px' }}>
              Verified Audit Highlights:
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {listing.highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: 'var(--text-body)' }}>
                  <span style={{ color: 'var(--brand-emerald)', flexShrink: 0, marginTop: '2px' }}>
                    <Icons.Check size={16} />
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Category Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
            {listing.tags.map((tag, i) => (
              <span key={i} className="badge badge-blue">
                {tag}
              </span>
            ))}
          </div>

          {/* Student Testimonial Quote */}
          {listing.testimonial && (
            <div
              style={{
                borderLeft: '4px solid var(--brand-primary)',
                padding: '12px 16px',
                background: '#f8fafc',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                fontSize: '13.5px',
                color: 'var(--text-body)',
                fontStyle: 'italic',
                margin: '16px 0',
                borderTop: '1px solid var(--border-subtle)',
                borderRight: '1px solid var(--border-subtle)',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              &quot;{listing.testimonial.quote}&quot;
              <div style={{ fontStyle: 'normal', fontWeight: 700, marginTop: '6px', fontSize: '12.5px', color: 'var(--brand-primary)' }}>
                — {listing.testimonial.studentName} ({listing.testimonial.achievement})
              </div>
            </div>
          )}
        </div>

        {/* Right Col: Venue Info & Action CTAs */}
        <div>
          <div className="venue-box">
            {/* Address */}
            <div className="venue-row">
              <span className="venue-icon"><Icons.MapPin size={18} /></span>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-dark)', lineHeight: '1.4' }}>
                  {listing.contact.address}
                </div>
                <a
                  href={listing.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '12px', color: 'var(--brand-primary)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '3px', marginTop: '3px' }}
                >
                  View on Google Maps <Icons.ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="venue-row">
              <span className="venue-icon"><Icons.Phone size={17} /></span>
              <div>
                <a
                  href={`tel:${listing.contact.phone}`}
                  style={{ fontWeight: 600, color: 'var(--text-dark)' }}
                >
                  {listing.contact.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="venue-row">
              <span className="venue-icon"><Icons.Mail size={17} /></span>
              <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <a
                  href={`mailto:${listing.contact.email}`}
                  style={{ color: 'var(--text-body)', wordBreak: 'break-all' }}
                >
                  {listing.contact.email}
                </a>
              </div>
            </div>

            {/* Website */}
            <div className="venue-row">
              <span className="venue-icon"><Icons.Globe size={17} /></span>
              <div>
                <a
                  href={listing.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--brand-primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  Official Portal <Icons.ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Timings */}
            <div className="venue-row">
              <span className="venue-icon"><Icons.Clock size={17} /></span>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                {listing.contact.timing}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="card-actions-grid">
            <Link
              href={`/institute/${listing.slug}`}
              className="btn btn-primary btn-sm"
              style={{ gridColumn: 'span 2', fontWeight: 700, justifyContent: 'center' }}
            >
              <Icons.ShieldCheck size={15} /> View 100-Point Audit Profile →
            </Link>

            <a href={`tel:${listing.contact.phone}`} className="btn btn-outline btn-sm">
              <Icons.Phone size={14} /> Call Now
            </a>

            <a href={`mailto:${listing.contact.email}?subject=Admission%20Inquiry%20from%20CoachingCompare`} className="btn btn-outline btn-sm">
              <Icons.Mail size={14} /> Email
            </a>

            <a
              href={listing.contact.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              style={{ gridColumn: 'span 2' }}
            >
              <Icons.MapPin size={14} /> Get Directions
            </a>

            {onCompareToggle && (
              <button
                type="button"
                onClick={() => onCompareToggle(listing.id)}
                className={`btn btn-sm ${isCompared ? 'btn-accent' : 'btn-outline'}`}
                style={{ gridColumn: 'span 2' }}
              >
                <Icons.Scales size={14} /> {isCompared ? '✓ Added to Compare' : 'Add to Comparison'}
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
